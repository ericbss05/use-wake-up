import { NextRequest, NextResponse } from "next/server";
import { getPineconeClient } from "@/lib/pinecone";
import { streamText } from "ai"; 
import { google } from "@ai-sdk/google";

export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  try {
    const { namespace, prompt } = (await req.json()) as { namespace: string; prompt: string };

    if (!namespace || !prompt) {
      return NextResponse.json({ error: "Namespace ou prompt manquant" }, { status: 400 });
    }

    const client = getPineconeClient();
    const namespaceIndex = client.index("file-embeddings").namespace(namespace);

    const queryResponse = await namespaceIndex.query({
      topK: 5,
      vector: Array(1024).fill(0),
      includeMetadata: true,
    });

    const texts: string[] = queryResponse.matches
      ?.map((m) => m.metadata?.text)
      .filter(Boolean) as string[];

    if (!texts.length) {
      return NextResponse.json({ error: "Aucun vecteur trouvé pour ce namespace" }, { status: 404 });
    }

    const userPromptWithContext = `${prompt}\n\n--- CONTEXTE RÉCUPÉRÉ DU DOCUMENT ---\n${texts.join("\n\n")}`;

    const messages = [
      { role: "user" as const, content: userPromptWithContext },
    ];

    const result = streamText({
      model: google("gemini-2.0-flash"),
      system: `
Tu es un assistant pédagogique spécialisé dans l’analyse de documents de cours.
Ton objectif est de transformer le contenu du document en une structure de carte mentale (mindmap) hiérarchique.
Tu dois identifier la notion centrale (thème principal), les branches principales (niveau 1), et les sous-branches (niveaux suivants). Chaque élément doit être expliqué brièvement, basé uniquement sur le CONTEXTE fourni.

Réponds uniquement en JSON, au format suivant, qui permet de représenter la hiérarchie :

{
  "mindmap": {
    "notion_centrale": "Le concept principal du document",
    "explication_centrale": "Courte description de ce concept principal, basée sur le document.",
    "branches_principales": [
      {
        "nom": "Branche Principale 1 (Niveau 1)",
        "description": "Courte explication de cette branche (notion clé majeure).",
        "sous_branches": [
          {
            "nom": "Sous-Branche 1.1 (Niveau 2)",
            "description": "Détail ou sous-notion de la branche 1.",
            "sous_branches": [
              {
                "nom": "Sous-Branche 1.1.1 (Niveau 3)",
                "description": "Détail ou sous-notion du niveau 2."
              }
            ]
          },
          {
            "nom": "Sous-Branche 1.2 (Niveau 2)",
            "description": "Autre détail ou sous-notion de la branche 1."
          }
        ]
      },
      {
        "nom": "Branche Principale 2 (Niveau 1)",
        "description": "Courte explication de la deuxième branche.",
        "sous_branches": []
      }
    ]
  }
}

Ne produis pas de texte hors JSON, pas d’introduction ni de conclusion. Base-toi uniquement sur le CONTEXTE fourni.`,
      messages: messages,
    });

    return result.toUIMessageStreamResponse();
  } catch (err) {
    console.error("Erreur dans l'API /api/resume:", err);
    return NextResponse.json({ error: "Erreur serveur interne lors du traitement de la requête" }, { status: 500 });
  }
}

// app/api/upload/route.ts
import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import { v4 as uuidv4 } from "uuid";
import path from "path";

import { loadLocalPDFIntoPinecone, convertToAscii } from "@/lib/pinecone";

export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  console.log("POST /api/upload appelé");

  try {
    const formData = await req.formData();
    const uploadedFile = formData.get("file");

    if (!uploadedFile || typeof uploadedFile === "string") {
      console.warn("Fichier manquant ou invalide");
      return NextResponse.json({ error: "Fichier manquant" }, { status: 400 });
    }

    // Chemin temporaire compatible Vercel
    const tempFilePath = path.join("/tmp", `${uuidv4()}.pdf`);

    // Sauvegarder le fichier temporairement
    const buffer = Buffer.from(await uploadedFile.arrayBuffer());
    await fs.writeFile(tempFilePath, buffer);
    console.log("Fichier temporaire créé :", tempFilePath);

    // Appeler ton loader + Pinecone
    const result = await loadLocalPDFIntoPinecone(tempFilePath);

    // Générer un namespace
    const namespaceId = convertToAscii(tempFilePath);

    // Supprimer le fichier temporaire
    await fs.unlink(tempFilePath);
    console.log("Fichier temporaire supprimé");

    return NextResponse.json({
      success: true,
      data: result,
      namespace: namespaceId,
    });
  } catch (error) {
    console.error("Erreur upload PDF:", error);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}

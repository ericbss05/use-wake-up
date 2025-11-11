// app/api/upload/route.ts
import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import { v4 as uuidv4 } from "uuid";
import path from "path";

import { loadLocalPDFIntoPinecone, convertToAscii } from "@/lib/pinecone";

export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const uploadedFile = formData.get("file");

    if (!uploadedFile || typeof uploadedFile === "string") {
      return NextResponse.json({ error: "Fichier manquant" }, { status: 400 });
    }

    // Générer un nom temporaire
    const tempDir = path.join(process.cwd(), "temp");
    await fs.mkdir(tempDir, { recursive: true });
    const tempFilePath = path.join(tempDir, `${uuidv4()}.pdf`);

    // Sauvegarder le fichier
    const buffer = Buffer.from(await uploadedFile.arrayBuffer());
    await fs.writeFile(tempFilePath, buffer);

    // Appeler ton loader + Pinecone
    const result = await loadLocalPDFIntoPinecone(tempFilePath);

    // Récupérer le namespace correspondant
    const namespaceId = convertToAscii(tempFilePath);

    // Supprimer le fichier temporaire
    await fs.unlink(tempFilePath);

    return NextResponse.json({
      success: true,
      data: result,
      namespace: namespaceId, // <- ici tu as l'ID du namespace
    });
  } catch (error) {
    console.error("Erreur upload PDF:", error);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}

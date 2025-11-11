// lib/pinecone.ts
import { Pinecone, PineconeRecord } from "@pinecone-database/pinecone";
import { PDFLoader } from "@langchain/community/document_loaders/fs/pdf";
import md5 from "md5";
import { Document } from "@langchain/core/documents";
import { RecursiveCharacterTextSplitter } from "@langchain/textsplitters";

import { convertToAscii } from "./utils";
import { getEmbeddings } from "./embeddings";

export const getPineconeClient = () => {
  return new Pinecone({
    apiKey: process.env.PINECONE_API_KEY!,
  });
};

type PDFPage = {
  pageContent: string;
  metadata: {
    loc: { pageNumber: number };
  };
};

export async function loadLocalPDFIntoPinecone(filePath: string) {
  // 1. Charger le PDF
  console.log("loading pdf into memory " + filePath);
  const loader = new PDFLoader(filePath);
  const pages = (await loader.load()) as PDFPage[];

  // 2. Split et segment
  const documents = await Promise.all(pages.map(prepareDocument));

  // 3. Construire les records avec embeddings
  const vectors = await Promise.all(documents.flat().map(embedDocument));

  // 4. Upload vers Pinecone
  const client = await getPineconeClient();
  const pineconeIndex = client.index("file-embeddings"); // ton index
  const namespace = pineconeIndex.namespace(convertToAscii(filePath));

  console.log("inserting vectors into pinecone");
  await namespace.upsert(vectors);

  return documents[0];
}

async function embedDocument(doc: Document) {
  try {
    const embeddings = await getEmbeddings(doc.pageContent);
    const hash = md5(doc.pageContent);

    return {
      id: hash,
      values: embeddings,
      metadata: {
        text: doc.metadata.text,
        pageNumber: doc.metadata.pageNumber,
      },
    } as PineconeRecord;
  } catch (error) {
    console.log("error embedding document", error);
    throw error;
  }
}

export const truncateStringByBytes = (str: string, bytes: number) => {
  const enc = new TextEncoder();
  return new TextDecoder("utf-8").decode(enc.encode(str).slice(0, bytes));
};

async function prepareDocument(page: PDFPage) {
  let { pageContent } = page;
  const { metadata } = page; // ✅ Correction : 'metadata' est une constante

  pageContent = pageContent.replace(/\n/g, "");

  const splitter = new RecursiveCharacterTextSplitter();
  const docs = await splitter.splitDocuments([
    new Document({
      pageContent,
      metadata: {
        pageNumber: metadata.loc.pageNumber,
        text: truncateStringByBytes(pageContent, 36000),
      },
    }),
  ]);

  return docs;
}

export { convertToAscii };

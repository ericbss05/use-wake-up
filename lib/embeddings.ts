import { GoogleGenAI } from "@google/genai";

interface EmbedContentRequest {
  model: string;
  contents: string[];
  taskType?: 'RETRIEVAL_QUERY' | 'RETRIEVAL_DOCUMENT' | 'SEMANTIC_SIMILARITY' | 'CLASSIFICATION' | 'CLUSTERING';
}

interface EmbedContentResponse {
  embeddings?: {
    values: number[];
  }[];
}

export async function getEmbeddings(text: string): Promise<number[]> {
  const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
  });

  const request: EmbedContentRequest = {
    model: 'gemini-embedding-001',
    contents: [text],
    taskType: 'SEMANTIC_SIMILARITY',
  };

  const response = await ai.models.embedContent(request) as EmbedContentResponse;

  if (!response.embeddings || !response.embeddings[0].values) {
    throw new Error("No embeddings returned");
  }

  const embedding = response.embeddings[0].values;

  // Tronquer à 1024 dimensions
  return embedding.slice(0, 1024);
}

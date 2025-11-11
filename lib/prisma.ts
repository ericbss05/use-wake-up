// lib/prisma.ts
import { PrismaClient } from '@prisma/client';

// Déclaration pour TypeScript : ajouter prisma à globalThis
declare global {
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined;
}

// Pour éviter de créer plusieurs instances de Prisma en développement (hot reload)
export const prisma =
  globalThis.prisma ||
  new PrismaClient({
    log: ['query'], // facultatif : affiche les requêtes SQL dans la console
  });

// Stocker l'instance dans globalThis uniquement en développement
if (process.env.NODE_ENV !== 'production') {
  globalThis.prisma = prisma;
}

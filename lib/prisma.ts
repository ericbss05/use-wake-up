// lib/prisma.ts
import { PrismaClient } from '@prisma/client';

declare global {
  var prisma: PrismaClient | undefined;
}

// Pour éviter de créer plusieurs instances de Prisma en développement (hot reload)
export const prisma =
  global.prisma ||
  new PrismaClient({
    log: ['query'], // facultatif : affiche les requêtes SQL dans la console
  });

if (process.env.NODE_ENV !== 'production') global.prisma = prisma;

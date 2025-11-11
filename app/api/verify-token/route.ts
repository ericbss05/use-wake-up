import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  try {
    const url = new URL(req.url);
    const token = url.searchParams.get('token');

    if (!token) {
      return NextResponse.json({ valid: false, error: 'Token manquant' }, { status: 400 });
    }

    // Chercher le token dans la base
    const subscriber = await prisma.subscriber.findFirst({
      where: { token },
    });

    if (!subscriber) {
      return NextResponse.json({ valid: false, error: 'Token inexistant' }, { status: 401 });
    }

    // Marquer le token comme utilisé pour KPI (mais ne bloque pas l'accès)
    if (!subscriber.used) {
      await prisma.subscriber.update({
        where: { id: subscriber.id },
        data: { used: true },
      });
    }

    // Token valide, peu importe s'il a déjà été utilisé
    return NextResponse.json({ valid: true }, { status: 200 });
  } catch (err: any) {
    console.error('Erreur API verify-token :', err);
    return NextResponse.json({ valid: false, error: err.message }, { status: 500 });
  }
}

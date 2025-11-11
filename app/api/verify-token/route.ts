import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  try {
    const url = new URL(req.url);
    const token = url.searchParams.get('token');

    if (!token) {
      return NextResponse.json({ valid: false, error: 'Token manquant' }, { status: 400 });
    }

    const subscriber = await prisma.subscriber.findFirst({
      where: { token },
    });

    if (!subscriber) {
      return NextResponse.json({ valid: false, error: 'Token inexistant' }, { status: 401 });
    }

    if (!subscriber.used) {
      await prisma.subscriber.update({
        where: { id: subscriber.id },
        data: { used: true },
      });
    }

    return NextResponse.json({ valid: true }, { status: 200 });
  } catch (err: unknown) {
    console.error('Erreur API verify-token :', err);

    const message = err instanceof Error ? err.message : String(err);
    return NextResponse.json({ valid: false, error: message }, { status: 500 });
  }
}

import { Resend } from 'resend';
import { prisma } from '@/lib/prisma';
import { EmailTemplate } from '@/components/email-template';
import crypto from 'crypto';

const resend = new Resend(process.env.RESEND_API_KEY!);
const domain = process.env.NEXT_PUBLIC

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => ({}));
    const email = body.email;

    if (!email) {
      return new Response(JSON.stringify({ error: 'L’adresse email est requise.' }), { status: 400 });
    }

    // Générer un token unique
    const token = crypto.randomBytes(16).toString('hex');

    await prisma.subscriber.create({ 
      data: { email, token } 
    });

    const Link = `${domain}/mvp?token=${token}`;

    const html = EmailTemplate(Link);

    const { data, error } = await resend.emails.send({
      from: 'Wake Up <wake-up@vocalis-ai.shop>',
      to: [email],
      subject: 'Bienvenue sur Wake Up !',
      html,
    });

    if (error) {
      console.error('Resend error:', error);
      return new Response(JSON.stringify({ error }), { status: 500 });
    }

    return new Response(JSON.stringify({ success: true, data }), { status: 200 });
  } catch (error: any) {
    console.error('Endpoint error:', error);
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}

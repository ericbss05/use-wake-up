// app/api/send/route.ts
import { Resend } from 'resend';
import { prisma } from '@/lib/prisma'; // ton client Prisma

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => ({}));
    const email = body.email;
    const firstName = body.firstName || 'John';

    if (!email) {
      return new Response(JSON.stringify({ error: 'L’adresse email est requise.' }), { status: 400 });
    }

    // Enregistrer dans la DB
    await prisma.subscriber.create({ data: { email } });

    // Contenu HTML du mail
    const html = `
      <html>
        <div
          style="
            font-family: Inter, Arial, sans-serif;
            background-color: #f9fafb;
            padding: 40px 0;
            text-align: center;
          "
        >
          <div
            style="
              background-color: #ffffff;
              margin: 0 auto;
              padding: 40px;
              border-radius: 12px;
              max-width: 600px;
              box-shadow: 0 4px 12px rgba(0,0,0,0.05);
            "
          >
            <img
              src="/images/Logo-black.svg"
              alt="Wake Up Logo"
              width="48"
              height="48"
              style="margin-bottom: 24px;"
            />
            <h1 style="color: #111827; font-size: 24px; margin-bottom: 16px;">
              Bienvenue 👋
            </h1>

            <p style="color: #4b5563; font-size: 16px; line-height: 1.6;">
              Merci de t’être inscrit à <strong>Wake Up</strong> !  
              Tu fais désormais partie des premiers à participer à la bêta et à
              construire la nouvelle génération d’outils de révision.
            </p>

            <p style="color: #4b5563; font-size: 16px; line-height: 1.6;">
              Reste à l’affût, on t’enverra bientôt les accès pour tester la
              plateforme. En attendant, tu peux nous suivre sur nos réseaux pour
              voir les coulisses du projet. 🚀
            </p>

            <button
              style="
                display: inline-block;
                margin-top: 24px;
                background-color: #4f46e5;
                color: #ffffff;
                padding: 12px 24px;
                border-radius: 8px;
                text-decoration: none;
                font-weight: 600;
              "
            >
              Découvrir Wake Up
            </button>

            <p
              style="
                color: #9ca3af;
                font-size: 13px;
                margin-top: 32px;
                border-top: 1px solid #e5e7eb;
                padding-top: 16px;
              "
            >
              © 2025 Wake Up. Tous droits réservés.
            </p>
          </div>
        </div>
      </html>
    `;

    // Envoyer l'email
    const { data, error } = await resend.emails.send({
      from: 'Acme <wake-up@vocalis-ai.shop>',
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

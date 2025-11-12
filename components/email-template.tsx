// lib/emailTemplates.ts
export const EmailTemplate = (Link: string) => {
  // Définit le domaine depuis les variables d'environnement
  const domain = process.env.NEXT_PUBLIC;

  return `
<html>
<body style="margin:0; padding:0; font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Segoe UI', sans-serif; background-color:#ffffff;">
  <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
    <tr>
      <td align="center" style="padding:40px 20px;">
        <table width="600" cellpadding="0" cellspacing="0" role="presentation">

          <tr>
            <td style="padding-bottom:24px;">
              <h1 style="font-size:32px; color:#000; margin:0;">Bienvenue dans l’aventure WakeUp 🎓</h1>
            </td>
          </tr>

          <tr>
            <td style="padding-bottom:24px;">
              <p style="font-size:16px; color:#333; line-height:1.6; margin:0;">
                Salut 👋  
                Merci d’avoir rejoint <b>WakeUp</b> — l'application qui transforme votre apprentissage grâce à l'intelligence artificielle
                On t’a préparé un petit guide pour bien démarrer.
              </p>
            </td>
          </tr>

          <tr>
            <td style="padding-bottom:24px;">
              <a href="${domain}/4-Techniques-Scientifiques-pour-Réviser-Efficacement.pdf"
                style="display:inline-block; background-color:#346EFD; color:#fff; padding:14px 24px; border-radius:8px; text-decoration:none; font-weight:600;">
                📘 Télécharger le guide
              </a>
            </td>
          </tr>

          <tr>
            <td style="padding-bottom:24px;">
              <p style="font-size:16px; color:#333; line-height:1.6; margin:0;">
                On travaille encore sur l’app, mais tu peux déjà tester une première fonctionnalité 👇
              </p>
            </td>
          </tr>

          <tr>
            <td style="padding-bottom:24px;">
              <a href="${Link}"
                style="display:inline-block; background-color:#000; color:#fff; padding:14px 24px; border-radius:8px; text-decoration:none; font-weight:600;">
                🚀 Tester la version bêta
              </a>
            </td>
          </tr>

          <tr>
            <td style="padding-top:32px;">
              <p style="font-size:14px; color:#555; line-height:1.6; margin:0;">
                Si tu ne vois pas le mail dans ta boîte principale, pense à cliquer sur “Non spam” 💛  
                Et n’hésite pas à me répondre directement si tu veux partager ton avis.
              </p>
            </td>
          </tr>

          <tr>
            <td style="padding-top:40px;">
              <p style="font-size:13px; color:#aaa; margin:0;">
                — Eric, fondateur de WakeUp<br/>
                <a href="mailto:eric.buisson.pro@gmail.com" style="color:#888; text-decoration:none;">eric.buisson.pro@gmail.com</a>
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>


`;
};
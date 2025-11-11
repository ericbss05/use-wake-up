// lib/emailTemplates.ts
export const EmailTemplate = (Link: string) => {
  // Définit le domaine depuis les variables d'environnement
  const domain = process.env.NEXT_PUBLIC;

  return `
<html>

<body
  style="margin:0; padding:0; font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Segoe UI', sans-serif; background-color: #ffffff;">
  <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
    <tr>
      <td align="center" style="padding: 100px 20px;">
        <table width="600" cellpadding="0" cellspacing="0" role="presentation">

          <!-- Titre -->
          <tr>
            <td align="center" style="padding-bottom: 20px;">
              <h1
                style="color: #000000; font-size: 48px; font-weight: 700; margin: 0; letter-spacing: -2px; line-height: 1.1;">
                🚀 Bienvenue chez Wake Up
              </h1>
            </td>
          </tr>

          <!-- Sous-titre -->
          <tr>
            <td align="center" style="padding-bottom: 72px;">
              <p
                style="color: rgba(0, 0, 0, 0.5); font-size: 18px; line-height: 1.5; margin: 0; font-weight: 400; letter-spacing: 0.3px;">
                Félicitations pour avoir rejoint Wake Up, l'application qui transforme votre apprentissage grâce à
                l'intelligence artificielle !

                Pour bien commencer, nous avons préparé quelque chose de spécial pour vous...
              </p>
            </td>
          </tr>

          <!-- Bloc guide -->
          <tr>
            <td style="padding-bottom: 64px;">
              <table width="100%" cellpadding="0" cellspacing="0" role="presentation"
                style="border: 1px solid rgba(0, 0, 0, 0.08); border-radius: 20px; background: linear-gradient(135deg, rgba(0, 0, 0, 0.01) 0%, rgba(0, 0, 0, 0.02) 100%);">
                <tr>
                  <td style="padding: 56px 48px;">
                    <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
                      <tr>
                        <td width="80" valign="top">
                          <div
                            style="width: 64px; height: 64px; background: linear-gradient(135deg, #346EFD 0%, #1e40af 100%); border-radius: 16px; display: flex; align-items: center; justify-content: center;">
                            <span style="font-size: 32px; line-height: 1;">📚</span>
                          </div>
                        </td>
                        <td valign="top" style="padding-left: 24px;">
                          <h2
                            style="color: #000000; font-size: 22px; font-weight: 600; margin: 0 0 8px 0; letter-spacing: -0.5px;">
                            4 Techniques Scientifiques
                          </h2>
                          <p style="color: rgba(0, 0, 0, 0.6); font-size: 16px; line-height: 1.6; margin: 0;">
                            Découvrez des méthodes prouvées pour mémoriser plus vite, réviser efficacement et exploiter
                            pleinement votre potentiel d’apprentissage.
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td colspan="2" style="padding-top: 32px;">
                          <a href="${domain}/4%20Techniques%20Scientifiques%20pour%20Réviser%20Efficacement.pdf"
                            download
                            style="display: inline-block; width: 100%; background-color: #000000; color: #ffffff; padding: 16px; border-radius: 12px; text-decoration: none; font-weight: 600; font-size: 16px; text-align: center; letter-spacing: -0.3px;">
                            📥 Télécharger le guide →
                          </a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Ligne de séparation -->
          <tr>
            <td style="padding: 48px 0;">
              <div
                style="width: 100%; height: 1px; background: linear-gradient(90deg, transparent 0%, rgba(52, 110, 253, 0.3) 50%, transparent 100%);">
              </div>
            </td>
          </tr>

          <!-- Section IA -->
          <tr>
            <td style="padding-bottom: 48px;">
              <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
                <tr>
                  <td style="padding-bottom: 32px;">
                    <div
                      style="display: inline-block; background: rgba(52, 110, 253, 0.08); padding: 6px 16px; border-radius: 20px; border: 1px solid rgba(52, 110, 253, 0.2);">
                      <span
                        style="color: #346EFD; font-size: 13px; font-weight: 600; letter-spacing: 1px;">NOUVEAU</span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td style="padding-bottom: 20px;">
                    <h2
                      style="color: #000000; font-size: 36px; font-weight: 700; margin: 0; letter-spacing: -1.5px; line-height: 1.2;">
                      Votre assistant IA personnel
                    </h2>
                  </td>
                </tr>
                <tr>
                  <td style="padding-bottom: 24px;">
                    <p
                      style="color: rgba(0, 0, 0, 0.65); font-size: 17px; line-height: 1.7; margin: 0; max-width: 460px;">
                      Wake Up transforme vos cours en fiches claires et personnalisées. Gagnez du temps, révisez plus
                      efficacement et testez l’avenir de l’apprentissage dès maintenant.
                    </p>
                  </td>
                </tr>
                <tr>
                  <td style="padding-bottom: 8px;">
                    <a href="${Link}"
                      style="display: inline-block; background: linear-gradient(135deg, #346EFD 0%, #1e40af 100%); color: #ffffff; padding: 18px 36px; border-radius: 12px; text-decoration: none; font-weight: 600; font-size: 16px; letter-spacing: -0.3px;">
                      🚀 Tester maintenant →
                    </a>
                  </td>
                </tr>
                <tr>
                  <td style="padding-top: 12px;">
                    <p
                      style="color: rgba(0, 0, 0, 0.5); font-size: 14px; line-height: 1.5; margin: 0; max-width: 460px; text-align: center;">
                      L’application est encore en développement, mais profitez d’un accès anticipé exclusif à cette
                      fonctionnalité.
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td align="center" style="padding-top: 80px;">
              <p style="color: rgba(0, 0, 0, 0.3); font-size: 13px; margin: 0; letter-spacing: 0.5px;">
                © 2025 WAKE UP
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
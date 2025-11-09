import * as React from "react";



export function EmailTemplate({ }) {
  return (
    <div
      style={{
        fontFamily: "Inter, Arial, sans-serif",
        backgroundColor: "#f9fafb",
        padding: "40px 0",
        textAlign: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "#ffffff",
          margin: "0 auto",
          padding: "40px",
          borderRadius: "12px",
          maxWidth: "600px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
        }}
      >
        <img
          src="/images/Logo-black.svg"
          alt="Wake Up Logo"
          width="48"
          height="48"
          style={{ marginBottom: "24px" }}
        />
        <h1 style={{ color: "#111827", fontSize: "24px", marginBottom: "16px" }}>
          Bienvenue 👋
        </h1>

        <p style={{ color: "#4b5563", fontSize: "16px", lineHeight: "1.6" }}>
          Merci de t’être inscrit à <strong>Wake Up</strong> !  
          Tu fais désormais partie des premiers à participer à la bêta et à
          construire la nouvelle génération d’outils de révision.
        </p>

        <p style={{ color: "#4b5563", fontSize: "16px", lineHeight: "1.6" }}>
          Reste à l’affût, on t’enverra bientôt les accès pour tester la
          plateforme. En attendant, tu peux nous suivre sur nos réseaux pour
          voir les coulisses du projet. 🚀
        </p>

        <button
          style={{
            display: "inline-block",
            marginTop: "24px",
            backgroundColor: "#4f46e5",
            color: "#ffffff",
            padding: "12px 24px",
            borderRadius: "8px",
            textDecoration: "none",
            fontWeight: 600,
          }}
        >
          Découvrir Wake Up
        </button>

        <p
          style={{
            color: "#9ca3af",
            fontSize: "13px",
            marginTop: "32px",
            borderTop: "1px solid #e5e7eb",
            paddingTop: "16px",
          }}
        >
          © 2025 Wake Up. Tous droits réservés.
        </p>
      </div>
    </div>
  );
}

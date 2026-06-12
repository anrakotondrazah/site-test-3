import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "LOCAGESTION - N°1 en France de la Gestion Locative",
  description: "Gestion locative externalisée pour professionnels et propriétaires. Réseau de +2000 agences partenaires en France. Rejoignez le leader de la gestion immobilière.",
  keywords: "gestion locative, gestion immobilière, agence partenaire, propriétaire bailleur, GLI, gestion patrimoniale",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Space+Grotesk:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body style={{ fontFamily: "'Space Grotesk', 'Inter', system-ui, sans-serif" }}>
        {children}
      </body>
    </html>
  );
}

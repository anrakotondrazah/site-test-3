"use client";

import Logo from "@/components/ui/Logo";
import { Mail, MapPin, Phone, Shield, Award, Building } from "lucide-react";

const footerLinks = {
  services: [
    "Gestion Locative",
    "Mise en Location",
    "Comptabilité Immobilière",
    "Agrément & Solvabilité",
    "Maintenance Technique",
    "Recouvrement & Contentieux",
  ],
  proprietaires: [
    "Comment ça marche",
    "Garantie Loyers Impayés",
    "Estimation de Gestion",
    "Espace Propriétaire",
    "Documents en ligne",
    "FAQ Propriétaires",
  ],
  partenaires: [
    "Devenir Agence Partenaire",
    "Espace Agences",
    "Programme CGP",
    "Outils Digitaux",
    "Signature Électronique",
    "Manuel Partenaire",
  ],
  legal: [
    "Mentions Légales",
    "Politique de Confidentialité",
    "CGU / CGV",
    "Politique Cookies",
    "RGPD",
    "Réclamations",
  ],
};

export default function Footer() {
  return (
    <footer
      style={{
        background: "linear-gradient(180deg, #0a0012 0%, #050008 100%)",
        borderTop: "1px solid rgba(0, 197, 242, 0.15)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background glow */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "800px",
          height: "300px",
          background: "radial-gradient(ellipse, rgba(75, 0, 153, 0.15) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* Partners marquee strip */}
      <div
        style={{
          background: "rgba(0, 197, 242, 0.08)",
          borderBottom: "1px solid rgba(0, 197, 242, 0.15)",
          padding: "16px 0",
          overflow: "hidden",
        }}
      >
        <div className="marquee-track">
          {[
            "ERA Immobilier",
            "BNP Paribas Immobilier",
            "Groupe National Immobilier",
            "Arthurimmo.com",
            "Côté Particuliers",
            "La Maison de l'Investisseur",
            "Cyrus Conseil",
            "GALIAN (Garantie Financière)",
            "ANACAFI Immo",
            "ORIAS",
            "ERA Immobilier",
            "BNP Paribas Immobilier",
            "Groupe National Immobilier",
            "Arthurimmo.com",
            "Côté Particuliers",
            "La Maison de l'Investisseur",
            "Cyrus Conseil",
            "GALIAN (Garantie Financière)",
            "ANACAFI Immo",
            "ORIAS",
          ].map((partner, i) => (
            <span
              key={i}
              style={{
                padding: "0 40px",
                color: "rgba(255,255,255,0.5)",
                fontSize: "13px",
                fontWeight: 600,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                whiteSpace: "nowrap",
              }}
            >
              {partner}
              <span style={{ marginLeft: "40px", color: "#00C5F2", opacity: 0.4 }}>✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand column - 2 cols */}
          <div className="lg:col-span-2">
            <Logo size="sm" white />

            <p
              style={{
                color: "rgba(255,255,255,0.5)",
                fontSize: "14px",
                lineHeight: 1.7,
                marginTop: "20px",
                marginBottom: "24px",
              }}
            >
              Leader de la gestion locative externalisée en France depuis 1996.
              Réseau de +2000 agences partenaires en France Métropolitaine,
              Corse et Outre-Mer.
            </p>

            {/* Contact info */}
            <div className="space-y-3">
              {[
                {
                  icon: <MapPin size={15} />,
                  text: "40 route d'Albi, CS 92333, 31021 Toulouse Cedex 2",
                },
                {
                  icon: <Mail size={15} />,
                  text: "contact@locagestion.com",
                },
                {
                  icon: <Mail size={15} />,
                  text: "partenariat@locagestion.com",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3"
                  style={{ color: "rgba(255,255,255,0.5)", fontSize: "13px" }}
                >
                  <span style={{ color: "#00C5F2", marginTop: "2px", flexShrink: 0 }}>
                    {item.icon}
                  </span>
                  {item.text}
                </div>
              ))}
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-3 mt-6">
              {[
                { icon: <Shield size={14} />, label: "GALIAN" },
                { icon: <Award size={14} />, label: "ANACAFI" },
                { icon: <Building size={14} />, label: "ORIAS" },
              ].map((badge, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-lg"
                  style={{
                    border: "1px solid rgba(0, 197, 242, 0.25)",
                    color: "#00C5F2",
                    fontSize: "12px",
                    fontWeight: 600,
                    letterSpacing: "0.05em",
                  }}
                >
                  {badge.icon}
                  {badge.label}
                </div>
              ))}
            </div>
          </div>

          {/* Links columns */}
          {[
            { title: "Nos Services", links: footerLinks.services },
            { title: "Propriétaires", links: footerLinks.proprietaires },
            { title: "Partenaires", links: footerLinks.partenaires },
            { title: "Informations", links: footerLinks.legal },
          ].map((col, i) => (
            <div key={i}>
              <h4
                style={{
                  color: "#00C5F2",
                  fontSize: "12px",
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  marginBottom: "16px",
                }}
              >
                {col.title}
              </h4>
              <ul className="space-y-2">
                {col.links.map((link, j) => (
                  <li key={j}>
                    <a
                      href="#"
                      style={{
                        color: "rgba(255,255,255,0.45)",
                        fontSize: "13px",
                        lineHeight: 1.6,
                        transition: "color 0.2s ease",
                        display: "block",
                      }}
                      onMouseEnter={e =>
                        (e.currentTarget.style.color = "#00C5F2")
                      }
                      onMouseLeave={e =>
                        (e.currentTarget.style.color = "rgba(255,255,255,0.45)")
                      }
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          style={{
            marginTop: "48px",
            paddingTop: "24px",
            borderTop: "1px solid rgba(255,255,255,0.08)",
            display: "flex",
            flexWrap: "wrap",
            gap: "16px",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div style={{ color: "rgba(255,255,255,0.35)", fontSize: "12px" }}>
            <p>© 2024 SAS MBM Immobilier — Capital social 100 000 €</p>
            <p style={{ marginTop: "4px" }}>
              RCS Toulouse B 404 821 373 · Carte Pro CPI 3101 2018 000 036 886
            </p>
          </div>
          <div
            className="flex items-center gap-2"
            style={{ fontSize: "12px", color: "rgba(255,255,255,0.35)" }}
          >
            <span>Enseigne commerciale depuis</span>
            <span
              className="gradient-text"
              style={{ fontWeight: 700, fontSize: "14px" }}
            >
              2004
            </span>
            <span>· Société mère fondée en</span>
            <span
              className="gradient-text"
              style={{ fontWeight: 700, fontSize: "14px" }}
            >
              1996
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

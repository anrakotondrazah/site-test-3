"use client";

import { useState, useRef, useEffect } from "react";
import {
  FileText, Home, UserCheck, Calculator, Wrench, Scale,
  ArrowRight, Check, ChevronRight
} from "lucide-react";

const services = [
  {
    id: "gestion",
    icon: <Home size={28} />,
    title: "Gestion Locative & Suivi Administratif",
    short: "Suivi complet de votre patrimoine",
    description:
      "Prise en charge intégrale de la relation locataire : quittances, régularisations de charges, état des lieux, renouvellements de baux. Votre bien géré avec une précision professionnelle.",
    features: [
      "Émission et envoi des quittances",
      "Régularisation de charges",
      "États des lieux digitaux",
      "Renouvellements automatiques",
      "Suivi des contentieux",
    ],
    color: "#00C5F2",
    image: "/images/services-management.jpg",
  },
  {
    id: "location",
    icon: <Home size={28} />,
    title: "Mise en Location Locale",
    short: "Secteur Toulouse — Expertise terrain",
    description:
      "Service de mise en location sur le secteur toulousain. Sélection rigoureuse des candidats, diffusion sur les plateformes, visites organisées, signature du bail sécurisée.",
    features: [
      "Diffusion multi-plateformes",
      "Organisation des visites",
      "Sélection des dossiers",
      "Rédaction du bail",
      "État des lieux d'entrée",
    ],
    color: "#a855f7",
    image: "/images/carousel-apartment.jpg",
  },
  {
    id: "agrement",
    icon: <UserCheck size={28} />,
    title: "Agrément & Étude de Solvabilité",
    short: "Zéro risque sur vos locataires",
    description:
      "Analyse approfondie des dossiers candidats : revenus, garanties, historique. Notre processus d'agrément réduit drastiquement les risques d'impayés et de litiges.",
    features: [
      "Vérification des revenus",
      "Analyse des garanties",
      "Score de solvabilité",
      "Contrôle des références",
      "Rapport d'agrément complet",
    ],
    color: "#00C5F2",
    image: "/images/carousel-advisor.jpg",
  },
  {
    id: "comptabilite",
    icon: <Calculator size={28} />,
    title: "Comptabilité Immobilière",
    short: "Revenus nets, fiscalité optimisée",
    description:
      "Reversement mensuel des loyers, édition des comptes rendus de gestion, assistance fiscale de fin d'année. Transparence totale sur chaque euro de votre investissement.",
    features: [
      "Reversement mensuel des loyers",
      "Compte rendu de gestion",
      "Régularisation des charges",
      "Assistance déclaration fiscale",
      "Bilan annuel de gestion",
    ],
    color: "#4B0099",
    image: "/images/digital-signing.jpg",
  },
  {
    id: "maintenance",
    icon: <Wrench size={28} />,
    title: "Maintenance Technique & Sinistres",
    short: "Réactivité 24h/24 sur les urgences",
    description:
      "Réseau d'artisans certifiés, coordination des interventions, gestion des sinistres auprès des assurances. Votre bien est protégé et entretenu en permanence.",
    features: [
      "Réseau d'artisans certifiés",
      "Gestion des urgences",
      "Coordination des sinistres",
      "Suivi des devis et travaux",
      "Rapport d'intervention",
    ],
    color: "#00C5F2",
    image: "/images/carousel-dashboard.jpg",
  },
  {
    id: "recouvrement",
    icon: <Scale size={28} />,
    title: "Recouvrement & Contentieux Juridique",
    short: "Protection maximale contre les impayés",
    description:
      "Dès le premier impayé, notre pôle juridique prend en charge les relances, procédures, et si nécessaire les actions contentieuses. Couverture GLI incluse.",
    features: [
      "Garantie Loyers Impayés (GLI)",
      "Relances automatisées",
      "Procédures amiables",
      "Actions contentieuses",
      "Protection juridique",
    ],
    color: "#a855f7",
    image: "/images/carousel-advisor.jpg",
  },
];

function useIntersection(ref: React.RefObject<HTMLElement | null>) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref]);
  return visible;
}

export default function ServicesSection() {
  const [activeTab, setActiveTab] = useState("gestion");
  const [hovered, setHovered] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const visible = useIntersection(sectionRef as React.RefObject<HTMLElement>);

  const active = services.find(s => s.id === activeTab) || services[0];

  return (
    <section
      ref={sectionRef}
      id="services"
      style={{
        padding: "100px 0",
        background: "linear-gradient(180deg, #0a0012 0%, #0d0020 50%, #0a0012 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background decoration */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "800px",
          height: "800px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(75,0,153,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div className="max-w-7xl mx-auto px-4">
        {/* Section header */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "64px",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(30px)",
            transition: "all 0.7s ease",
          }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "6px 20px",
              borderRadius: "100px",
              background: "rgba(0, 197, 242, 0.1)",
              border: "1px solid rgba(0, 197, 242, 0.3)",
              fontSize: "12px",
              fontWeight: 700,
              color: "#00C5F2",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              marginBottom: "20px",
            }}
          >
            NOS EXPERTISES
          </div>
          <h2
            style={{
              fontSize: "clamp(2rem, 4vw, 3.5rem)",
              fontWeight: 800,
              color: "white",
              lineHeight: 1.1,
              marginBottom: "20px",
            }}
          >
            Une offre complète pour{" "}
            <span className="gradient-text">chaque besoin</span>
          </h2>
          <p
            style={{
              fontSize: "1.1rem",
              color: "rgba(255,255,255,0.5)",
              maxWidth: "600px",
              margin: "0 auto",
              fontWeight: 300,
              lineHeight: 1.7,
            }}
          >
            6 pôles d'expertise métier couvrant l'intégralité du cycle de vie
            de votre investissement locatif.
          </p>
        </div>

        {/* Service tabs - horizontal scroll */}
        <div
          className="horizontal-scroll"
          style={{
            marginBottom: "48px",
            paddingBottom: "16px",
            opacity: visible ? 1 : 0,
            transition: "opacity 0.7s ease 0.2s",
          }}
        >
          {services.map(service => (
            <button
              key={service.id}
              onClick={() => setActiveTab(service.id)}
              onMouseEnter={() => setHovered(service.id)}
              onMouseLeave={() => setHovered(null)}
              style={{
                flexShrink: 0,
                padding: "14px 24px",
                borderRadius: "16px",
                border: activeTab === service.id
                  ? `2px solid ${service.color}`
                  : "2px solid rgba(255,255,255,0.08)",
                background: activeTab === service.id
                  ? `rgba(${service.color === "#00C5F2" ? "0,197,242" : service.color === "#a855f7" ? "168,85,247" : "75,0,153"},0.12)`
                  : hovered === service.id
                  ? "rgba(255,255,255,0.05)"
                  : "rgba(255,255,255,0.03)",
                color: activeTab === service.id ? service.color : "rgba(255,255,255,0.6)",
                fontSize: "14px",
                fontWeight: activeTab === service.id ? 700 : 500,
                cursor: "pointer",
                transition: "all 0.25s ease",
                display: "flex",
                alignItems: "center",
                gap: "10px",
                whiteSpace: "nowrap",
                transform: hovered === service.id && activeTab !== service.id ? "translateY(-2px)" : "translateY(0)",
              }}
            >
              <span style={{ color: activeTab === service.id ? service.color : "rgba(255,255,255,0.3)" }}>
                {service.icon}
              </span>
              {service.title.split(" ").slice(0, 3).join(" ")}
            </button>
          ))}
        </div>

        {/* Active service detail */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "48px",
            alignItems: "center",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(30px)",
            transition: "all 0.7s ease 0.3s",
          }}
          className="flex flex-col md:grid"
        >
          {/* Left: Content */}
          <div>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: "64px",
                height: "64px",
                borderRadius: "20px",
                background: `linear-gradient(135deg, ${active.color}22, ${active.color}11)`,
                border: `1px solid ${active.color}44`,
                color: active.color,
                marginBottom: "24px",
              }}
            >
              {active.icon}
            </div>

            <div
              style={{
                fontSize: "12px",
                fontWeight: 700,
                color: active.color,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                marginBottom: "12px",
              }}
            >
              {active.short}
            </div>

            <h3
              style={{
                fontSize: "clamp(1.5rem, 3vw, 2.2rem)",
                fontWeight: 800,
                color: "white",
                lineHeight: 1.2,
                marginBottom: "20px",
              }}
            >
              {active.title}
            </h3>

            <p
              style={{
                color: "rgba(255,255,255,0.6)",
                fontSize: "1rem",
                lineHeight: 1.8,
                marginBottom: "32px",
                fontWeight: 300,
              }}
            >
              {active.description}
            </p>

            {/* Features list */}
            <ul className="space-y-3" style={{ marginBottom: "36px" }}>
              {active.features.map((feat, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3"
                  style={{ color: "rgba(255,255,255,0.75)", fontSize: "15px" }}
                >
                  <div
                    style={{
                      width: "22px",
                      height: "22px",
                      borderRadius: "8px",
                      background: `${active.color}22`,
                      border: `1px solid ${active.color}44`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <Check size={13} style={{ color: active.color }} />
                  </div>
                  {feat}
                </li>
              ))}
            </ul>

            <button
              className="btn-primary flex items-center gap-2"
              style={{
                padding: "14px 28px",
                borderRadius: "12px",
                fontSize: "15px",
                background: `linear-gradient(135deg, ${active.color}, ${active.color}cc)`,
              }}
            >
              En savoir plus
              <ArrowRight size={18} />
            </button>
          </div>

          {/* Right: Image */}
          <div style={{ position: "relative" }}>
            <div
              style={{
                borderRadius: "24px",
                overflow: "hidden",
                position: "relative",
                aspectRatio: "4/3",
              }}
            >
              <img
                src={active.image}
                alt={active.title}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  transition: "transform 0.6s ease",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: `linear-gradient(135deg, ${active.color}33, rgba(10,0,18,0.4))`,
                  mixBlendMode: "multiply",
                }}
              />
            </div>

            {/* Floating card */}
            <div
              className="glass"
              style={{
                position: "absolute",
                bottom: "-20px",
                left: "-20px",
                borderRadius: "16px",
                padding: "16px 20px",
                minWidth: "200px",
              }}
            >
              <div
                style={{ fontSize: "11px", color: "rgba(255,255,255,0.4)", marginBottom: "6px", letterSpacing: "0.1em" }}
              >
                PROTECTION INCLUSE
              </div>
              <div style={{ fontSize: "15px", fontWeight: 700, color: "white" }}>
                GLI + Dégradations
              </div>
              <div style={{ fontSize: "13px", color: "#00C5F2", marginTop: "4px" }}>
                Protection juridique 24h/24
              </div>
            </div>

            {/* Decoration ring */}
            <div
              style={{
                position: "absolute",
                top: "-20px",
                right: "-20px",
                width: "80px",
                height: "80px",
                borderRadius: "50%",
                border: `2px solid ${active.color}44`,
                zIndex: 0,
              }}
            />
            <div
              style={{
                position: "absolute",
                top: "-10px",
                right: "-10px",
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                background: `${active.color}22`,
                border: `1px solid ${active.color}66`,
              }}
            />
          </div>
        </div>

        {/* Service cards grid preview */}
        <div
          className="grid grid-cols-2 md:grid-cols-3 gap-4"
          style={{
            marginTop: "64px",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(30px)",
            transition: "all 0.7s ease 0.5s",
          }}
        >
          {services.map((service, i) => (
            <div
              key={service.id}
              className="card-hover"
              onClick={() => setActiveTab(service.id)}
              style={{
                padding: "20px",
                borderRadius: "16px",
                background: activeTab === service.id
                  ? `rgba(${service.color === "#00C5F2" ? "0,197,242" : service.color === "#a855f7" ? "168,85,247" : "75,0,153"},0.1)`
                  : "rgba(255,255,255,0.03)",
                border: activeTab === service.id
                  ? `1px solid ${service.color}44`
                  : "1px solid rgba(255,255,255,0.06)",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
            >
              <div style={{ color: service.color, marginBottom: "10px" }}>
                {service.icon}
              </div>
              <div
                style={{
                  fontSize: "13px",
                  fontWeight: 700,
                  color: "rgba(255,255,255,0.85)",
                  lineHeight: 1.4,
                  marginBottom: "4px",
                }}
              >
                {service.title.split("&")[0].trim()}
              </div>
              <div
                style={{ fontSize: "12px", color: "rgba(255,255,255,0.35)", lineHeight: 1.5 }}
              >
                {service.short}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

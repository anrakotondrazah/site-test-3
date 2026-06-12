"use client";

import { useRef, useEffect, useState } from "react";
import { Phone, Search, Settings, Monitor, ArrowRight, CheckCircle } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: <Phone size={24} />,
    title: "Prise de Contact & Audit",
    subtitle: "Gratuit et sans engagement",
    description:
      "Un conseiller LOCAGESTION vous contacte pour analyser votre situation, vos biens et vos objectifs. Nous définissons ensemble la meilleure stratégie de gestion adaptée à votre patrimoine.",
    details: ["Appel découverte 30 min", "Analyse du patrimoine", "Étude personnalisée", "Proposition sur mesure"],
    color: "#00C5F2",
    image: "/images/carousel-advisor.jpg",
  },
  {
    number: "02",
    icon: <Search size={24} />,
    title: "Analyse & Agrément",
    subtitle: "Sécurisation totale des dossiers",
    description:
      "Étude approfondie de votre bien et des dossiers candidats locataires. Notre processus d'agrément rigoureux garantit la solvabilité et la fiabilité de vos futurs locataires.",
    details: ["Diagnostic du bien", "Étude de solvabilité", "Vérification des garanties", "Rapport d'agrément"],
    color: "#a855f7",
    image: "/images/services-management.jpg",
  },
  {
    number: "03",
    icon: <Settings size={24} />,
    title: "Mise en Place Digitale",
    subtitle: "Outils PropTech avancés",
    description:
      "Mise en place de l'environnement digital : mandat automatisé, bail numérique, signature électronique certifiée. Votre espace propriétaire est configuré et synchronisé en temps réel.",
    details: ["Mandat automatisé", "Bail numérique", "Signature électronique", "Espace en ligne configuré"],
    color: "#00C5F2",
    image: "/images/digital-signing.jpg",
  },
  {
    number: "04",
    icon: <Monitor size={24} />,
    title: "Gestion Quotidienne",
    subtitle: "Suivi en temps réel sur votre espace",
    description:
      "LOCAGESTION gère intégralement votre bien. Vous suivez tout depuis votre espace personnel : loyers perçus, documents, interventions techniques, comptabilité. En toute sérénité.",
    details: ["Suivi temps réel", "Reversement mensuel", "Documents centralisés", "Assistance Sophie IA"],
    color: "#4B0099",
    image: "/images/carousel-dashboard.jpg",
  },
];

export default function ProcessSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="processus"
      style={{
        padding: "100px 0",
        background: "#080010",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* BG grid */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `linear-gradient(rgba(0,197,242,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,197,242,0.03) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
          pointerEvents: "none",
        }}
      />

      <div className="max-w-7xl mx-auto px-4" ref={sectionRef}>
        {/* Header */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "72px",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(30px)",
            transition: "all 0.7s ease",
          }}
        >
          <span
            style={{
              display: "inline-block",
              fontSize: "11px",
              fontWeight: 700,
              letterSpacing: "0.2em",
              color: "#00C5F2",
              textTransform: "uppercase",
              marginBottom: "16px",
              padding: "6px 20px",
              borderRadius: "100px",
              background: "rgba(0,197,242,0.1)",
              border: "1px solid rgba(0,197,242,0.25)",
            }}
          >
            COMMENT ÇA MARCHE
          </span>
          <h2
            style={{
              fontSize: "clamp(2rem, 4vw, 3.2rem)",
              fontWeight: 800,
              color: "white",
              marginBottom: "20px",
            }}
          >
            Votre gestion en{" "}
            <span className="gradient-text">4 étapes simples</span>
          </h2>
          <p
            style={{
              fontSize: "1.1rem",
              color: "rgba(255,255,255,0.45)",
              maxWidth: "560px",
              margin: "0 auto",
              lineHeight: 1.7,
              fontWeight: 300,
            }}
          >
            De la prise de contact à la gestion quotidienne, un processus
            fluide et entièrement digitalisé.
          </p>
        </div>

        {/* Main content: steps + preview */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "64px",
            alignItems: "start",
          }}
          className="flex flex-col md:grid"
        >
          {/* Steps timeline */}
          <div
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(-30px)",
              transition: "all 0.7s ease 0.2s",
            }}
          >
            {steps.map((step, i) => (
              <div
                key={i}
                onClick={() => setActiveStep(i)}
                style={{
                  display: "flex",
                  gap: "20px",
                  padding: "24px",
                  borderRadius: "20px",
                  marginBottom: "12px",
                  cursor: "pointer",
                  background: activeStep === i
                    ? `rgba(${step.color === "#00C5F2" ? "0,197,242" : step.color === "#a855f7" ? "168,85,247" : "75,0,153"},0.08)`
                    : "rgba(255,255,255,0.02)",
                  border: activeStep === i
                    ? `1px solid ${step.color}33`
                    : "1px solid rgba(255,255,255,0.05)",
                  transition: "all 0.3s ease",
                  position: "relative",
                }}
              >
                {/* Step number + connector */}
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "16px",
                      background: activeStep === i
                        ? `linear-gradient(135deg, ${step.color}, ${step.color}bb)`
                        : "rgba(255,255,255,0.05)",
                      border: activeStep === i ? "none" : `1px solid ${step.color}33`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: activeStep === i ? "white" : step.color,
                      flexShrink: 0,
                      boxShadow: activeStep === i ? `0 8px 24px ${step.color}44` : "none",
                      transition: "all 0.3s ease",
                    }}
                  >
                    {step.icon}
                  </div>
                  {i < steps.length - 1 && (
                    <div
                      style={{
                        width: "2px",
                        height: "100%",
                        minHeight: "20px",
                        flex: 1,
                        marginTop: "8px",
                        background: activeStep === i || activeStep === i + 1
                          ? `linear-gradient(to bottom, ${step.color}66, transparent)`
                          : "rgba(255,255,255,0.06)",
                        borderRadius: "1px",
                        transition: "all 0.3s ease",
                      }}
                    />
                  )}
                </div>

                {/* Content */}
                <div style={{ flex: 1 }}>
                  <div
                    style={{
                      fontSize: "11px",
                      fontWeight: 700,
                      color: step.color,
                      letterSpacing: "0.12em",
                      marginBottom: "4px",
                      opacity: activeStep === i ? 1 : 0.5,
                    }}
                  >
                    ÉTAPE {step.number}
                  </div>
                  <div
                    style={{
                      fontSize: "17px",
                      fontWeight: 700,
                      color: "white",
                      marginBottom: "4px",
                    }}
                  >
                    {step.title}
                  </div>
                  <div
                    style={{
                      fontSize: "13px",
                      color: step.color,
                      opacity: 0.8,
                      marginBottom: activeStep === i ? "16px" : 0,
                    }}
                  >
                    {step.subtitle}
                  </div>

                  {activeStep === i && (
                    <div>
                      <p
                        style={{
                          fontSize: "14px",
                          color: "rgba(255,255,255,0.55)",
                          lineHeight: 1.7,
                          marginBottom: "16px",
                          fontWeight: 300,
                        }}
                      >
                        {step.description}
                      </p>
                      <div className="grid grid-cols-2 gap-2">
                        {step.details.map((d, j) => (
                          <div
                            key={j}
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: "8px",
                              fontSize: "13px",
                              color: "rgba(255,255,255,0.6)",
                            }}
                          >
                            <CheckCircle size={14} style={{ color: step.color, flexShrink: 0 }} />
                            {d}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Arrow for active */}
                {activeStep === i && (
                  <ArrowRight
                    size={18}
                    style={{
                      position: "absolute",
                      right: "20px",
                      top: "50%",
                      transform: "translateY(-50%)",
                      color: step.color,
                    }}
                  />
                )}
              </div>
            ))}
          </div>

          {/* Right: Image preview */}
          <div
            style={{
              position: "sticky",
              top: "100px",
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(30px)",
              transition: "all 0.7s ease 0.4s",
            }}
          >
            <div
              style={{
                borderRadius: "24px",
                overflow: "hidden",
                position: "relative",
                aspectRatio: "3/4",
              }}
            >
              <img
                src={steps[activeStep].image}
                alt={steps[activeStep].title}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  transition: "all 0.6s ease",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: `linear-gradient(180deg, transparent 40%, rgba(10,0,18,0.85) 100%)`,
                }}
              />

              {/* Step info overlay */}
              <div
                style={{
                  position: "absolute",
                  bottom: "24px",
                  left: "24px",
                  right: "24px",
                }}
              >
                <div
                  style={{
                    fontSize: "12px",
                    color: steps[activeStep].color,
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    marginBottom: "8px",
                  }}
                >
                  ÉTAPE {steps[activeStep].number} / 04
                </div>
                <div
                  style={{ fontSize: "20px", fontWeight: 800, color: "white", marginBottom: "4px" }}
                >
                  {steps[activeStep].title}
                </div>
                <div style={{ fontSize: "13px", color: "rgba(255,255,255,0.5)" }}>
                  {steps[activeStep].subtitle}
                </div>

                {/* Progress dots */}
                <div style={{ display: "flex", gap: "8px", marginTop: "16px" }}>
                  {steps.map((_, i) => (
                    <div
                      key={i}
                      onClick={() => setActiveStep(i)}
                      style={{
                        height: "4px",
                        borderRadius: "2px",
                        flex: 1,
                        background: i === activeStep
                          ? steps[activeStep].color
                          : "rgba(255,255,255,0.2)",
                        cursor: "pointer",
                        transition: "all 0.3s ease",
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* CTA card */}
            <div
              className="glass"
              style={{
                borderRadius: "20px",
                padding: "24px",
                marginTop: "20px",
                textAlign: "center",
                border: "1px solid rgba(0,197,242,0.2)",
              }}
            >
              <div
                style={{ fontSize: "15px", fontWeight: 700, color: "white", marginBottom: "8px" }}
              >
                Prêt à déléguer votre gestion ?
              </div>
              <div
                style={{
                  fontSize: "13px",
                  color: "rgba(255,255,255,0.45)",
                  marginBottom: "20px",
                  lineHeight: 1.6,
                }}
              >
                Audit gratuit en 24h · Sans engagement
              </div>
              <button
                className="btn-primary"
                style={{
                  width: "100%",
                  padding: "14px",
                  borderRadius: "12px",
                  fontSize: "15px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                }}
              >
                Demander mon audit gratuit
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

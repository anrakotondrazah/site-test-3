"use client";

import { useRef, useEffect, useState } from "react";
import { TrendingUp, Lock, Zap, Shield, Users, ArrowRight, Star, CheckCircle } from "lucide-react";

const pillars = [
  {
    number: "01",
    icon: <TrendingUp size={24} />,
    title: "Rémunération Récurrente",
    description: "Partage des honoraires de gestion avec l'agence partenaire. Revenus mensuels réguliers et prévisibles sur l'ensemble du portefeuille confié.",
    color: "#00C5F2",
    stat: "Jusqu'à 50%",
    statLabel: "des honoraires partagés",
  },
  {
    number: "02",
    icon: <Lock size={24} />,
    title: "Propriété Client Garantie",
    description: "LOCAGESTION gère le locataire mais n'intervient JAMAIS sur la revente ou la relocation — renvoyées à 100% vers le partenaire.",
    color: "#a855f7",
    stat: "100%",
    statLabel: "exclusivité garantie",
  },
  {
    number: "03",
    icon: <Zap size={24} />,
    title: "Zéro Coût de Structure",
    description: "Pas besoin de carte G ni de logiciel de gestion. Démarrez immédiatement sans investissement, sans contrainte administrative.",
    color: "#00C5F2",
    stat: "0€",
    statLabel: "de coût de démarrage",
  },
  {
    number: "04",
    icon: <Zap size={24} />,
    title: "Outils Digitaux Avancés",
    description: "Mandats automatisés, baux numériques, signature électronique certifiée, espaces en ligne synchronisés en temps réel.",
    color: "#4B0099",
    stat: "100%",
    statLabel: "digital & automatisé",
  },
  {
    number: "05",
    icon: <Shield size={24} />,
    title: "Sécurité Totale",
    description: "Garantie Loyers Impayés (GLI), dégradations immobilières et protection juridique. Votre partenaire en toute sérénité.",
    color: "#00C5F2",
    stat: "GLI",
    statLabel: "protection complète",
  },
];

const testimonials = [
  {
    text: "Depuis notre partenariat avec LOCAGESTION, nous avons augmenté nos revenus récurrents de 35% sans aucun investissement supplémentaire.",
    author: "Directeur d'agence ERA",
    location: "Lyon",
    rating: 5,
  },
  {
    text: "La garantie de propriété client est un argument de vente décisif. Nos clients propriétaires ont une totale confiance dans le système.",
    author: "Conseiller en Gestion de Patrimoine",
    location: "Paris",
    rating: 5,
  },
  {
    text: "En tant que CGP, le programme LOCAGESTION nous permet d'offrir un service complet à nos clients sans contrainte opérationnelle.",
    author: "CGP Indépendant",
    location: "Bordeaux",
    rating: 5,
  },
];

export default function PartnersB2BSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial(t => (t + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="partenaires"
      style={{
        padding: "100px 0",
        background: "linear-gradient(135deg, #080010 0%, #0d001a 50%, #080010 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* BG image blended */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "url('/images/partners-network.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.06,
          mixBlendMode: "screen",
        }}
      />

      <div className="max-w-7xl mx-auto px-4" ref={sectionRef}>
        {/* Header */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "64px",
            alignItems: "center",
            marginBottom: "80px",
          }}
          className="flex flex-col md:grid"
        >
          <div
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(-30px)",
              transition: "all 0.7s ease",
            }}
          >
            <span
              style={{
                display: "inline-block",
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "0.2em",
                color: "#a855f7",
                textTransform: "uppercase",
                marginBottom: "16px",
                padding: "6px 20px",
                borderRadius: "100px",
                background: "rgba(168,85,247,0.1)",
                border: "1px solid rgba(168,85,247,0.25)",
              }}
            >
              PROGRAMME PARTENAIRES B2B
            </span>
            <h2
              style={{
                fontSize: "clamp(2rem, 4vw, 3.2rem)",
                fontWeight: 800,
                color: "white",
                marginBottom: "20px",
                lineHeight: 1.15,
              }}
            >
              Agences & CGP :{" "}
              <span className="gradient-text">développez vos revenus</span>{" "}
              sans contrainte
            </h2>
            <p
              style={{
                fontSize: "1.05rem",
                color: "rgba(255,255,255,0.5)",
                lineHeight: 1.8,
                fontWeight: 300,
                marginBottom: "32px",
              }}
            >
              Rejoignez le réseau de +2000 agences qui font confiance à
              LOCAGESTION pour externaliser leur gestion locative et générer des
              revenus récurrents sans investissement.
            </p>
            <div className="flex flex-wrap gap-3">
              <button
                className="btn-violet flex items-center gap-2"
                style={{ padding: "14px 28px", borderRadius: "14px", fontSize: "15px" }}
              >
                Devenir Partenaire
                <ArrowRight size={18} />
              </button>
              <button
                className="btn-secondary flex items-center gap-2"
                style={{
                  padding: "14px 24px",
                  borderRadius: "14px",
                  fontSize: "15px",
                  borderColor: "#a855f7",
                  color: "#a855f7",
                }}
              >
                Être rappelé
              </button>
            </div>
          </div>

          {/* Stats */}
          <div
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(30px)",
              transition: "all 0.7s ease 0.2s",
            }}
          >
            <div
              style={{
                borderRadius: "24px",
                overflow: "hidden",
                border: "1px solid rgba(168,85,247,0.2)",
              }}
            >
              <img
                src="/images/partners-network.jpg"
                alt="Réseau Partenaires"
                style={{
                  width: "100%",
                  height: "280px",
                  objectFit: "cover",
                }}
              />
              <div
                style={{
                  background: "rgba(10,0,18,0.9)",
                  padding: "24px",
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr 1fr",
                  gap: "0",
                  textAlign: "center",
                }}
              >
                {[
                  { v: "+2000", l: "Agences" },
                  { v: "7", l: "Groupes Nationaux" },
                  { v: "100%", l: "Propriété Garantie" },
                ].map((s, i) => (
                  <div
                    key={i}
                    style={{
                      padding: "12px",
                      borderRight: i < 2 ? "1px solid rgba(255,255,255,0.07)" : "none",
                    }}
                  >
                    <div
                      style={{
                        fontSize: "1.6rem",
                        fontWeight: 800,
                        color: "#a855f7",
                        marginBottom: "4px",
                      }}
                    >
                      {s.v}
                    </div>
                    <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.4)", letterSpacing: "0.06em" }}>
                      {s.l}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 5 Pillars */}
        <div
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(30px)",
            transition: "all 0.7s ease 0.3s",
            marginBottom: "80px",
          }}
        >
          <h3
            style={{
              textAlign: "center",
              fontSize: "clamp(1.4rem, 2.5vw, 2rem)",
              fontWeight: 800,
              color: "white",
              marginBottom: "48px",
            }}
          >
            Les{" "}
            <span style={{ color: "#a855f7" }}>5 piliers</span>{" "}
            de notre offre B2B
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {pillars.map((pillar, i) => (
              <div
                key={i}
                className="card-hover"
                style={{
                  padding: "28px 20px",
                  borderRadius: "20px",
                  background: "rgba(255,255,255,0.02)",
                  border: `1px solid ${pillar.color}22`,
                  textAlign: "center",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* BG glow */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: "100px",
                    height: "100px",
                    borderRadius: "50%",
                    background: `radial-gradient(circle, ${pillar.color}12, transparent)`,
                    pointerEvents: "none",
                  }}
                />

                <div
                  style={{
                    fontSize: "11px",
                    fontWeight: 700,
                    color: pillar.color,
                    letterSpacing: "0.15em",
                    marginBottom: "16px",
                    opacity: 0.7,
                  }}
                >
                  PILIER {pillar.number}
                </div>

                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "52px",
                    height: "52px",
                    borderRadius: "16px",
                    background: `${pillar.color}15`,
                    border: `1px solid ${pillar.color}33`,
                    color: pillar.color,
                    marginBottom: "16px",
                  }}
                >
                  {pillar.icon}
                </div>

                <div
                  style={{
                    fontSize: "2rem",
                    fontWeight: 800,
                    color: pillar.color,
                    lineHeight: 1,
                    marginBottom: "4px",
                  }}
                >
                  {pillar.stat}
                </div>
                <div
                  style={{
                    fontSize: "11px",
                    color: "rgba(255,255,255,0.35)",
                    marginBottom: "16px",
                    letterSpacing: "0.04em",
                  }}
                >
                  {pillar.statLabel}
                </div>

                <div
                  style={{
                    fontSize: "14px",
                    fontWeight: 700,
                    color: "white",
                    marginBottom: "10px",
                    lineHeight: 1.3,
                  }}
                >
                  {pillar.title}
                </div>
                <div
                  style={{
                    fontSize: "12px",
                    color: "rgba(255,255,255,0.4)",
                    lineHeight: 1.6,
                  }}
                >
                  {pillar.description.slice(0, 80)}…
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(30px)",
            transition: "all 0.7s ease 0.5s",
          }}
        >
          <div
            style={{
              borderRadius: "24px",
              padding: "48px",
              background: "rgba(168,85,247,0.05)",
              border: "1px solid rgba(168,85,247,0.15)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Quote mark */}
            <div
              style={{
                position: "absolute",
                top: "24px",
                left: "40px",
                fontSize: "120px",
                fontWeight: 900,
                color: "rgba(168,85,247,0.07)",
                lineHeight: 1,
                fontFamily: "Georgia, serif",
                pointerEvents: "none",
              }}
            >
              "
            </div>

            <div style={{ position: "relative", zIndex: 1 }}>
              <div className="flex justify-center gap-2 mb-6">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveTestimonial(i)}
                    style={{
                      width: i === activeTestimonial ? "32px" : "8px",
                      height: "8px",
                      borderRadius: "4px",
                      background: i === activeTestimonial ? "#a855f7" : "rgba(255,255,255,0.2)",
                      border: "none",
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                    }}
                  />
                ))}
              </div>

              <p
                style={{
                  fontSize: "clamp(1rem, 2vw, 1.3rem)",
                  color: "rgba(255,255,255,0.8)",
                  lineHeight: 1.8,
                  textAlign: "center",
                  fontStyle: "italic",
                  maxWidth: "700px",
                  margin: "0 auto 32px",
                  fontWeight: 300,
                }}
              >
                {testimonials[activeTestimonial].text}
              </p>

              <div style={{ textAlign: "center" }}>
                <div style={{ display: "flex", justifyContent: "center", gap: "4px", marginBottom: "8px" }}>
                  {Array.from({ length: testimonials[activeTestimonial].rating }).map((_, i) => (
                    <Star key={i} size={16} fill="#a855f7" style={{ color: "#a855f7" }} />
                  ))}
                </div>
                <div style={{ fontSize: "15px", fontWeight: 700, color: "white" }}>
                  {testimonials[activeTestimonial].author}
                </div>
                <div style={{ fontSize: "13px", color: "rgba(255,255,255,0.4)", marginTop: "4px" }}>
                  {testimonials[activeTestimonial].location}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

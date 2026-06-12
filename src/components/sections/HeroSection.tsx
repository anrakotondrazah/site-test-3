"use client";

import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Play, Star, ArrowRight } from "lucide-react";

const slides = [
  {
    id: 1,
    tag: "🏆 N°1 EN FRANCE",
    title: "POURQUOI GÉRER QUAND VOUS POUVEZ",
    titleAccent: "DÉLÉGUER ?",
    subtitle: "La gestion locative nouvelle génération. Confiez votre bien à des experts et maximisez votre rentabilité sans contraintes administratives.",
    cta1: "Demander un audit gratuit",
    cta2: "Découvrir nos services",
    image: "/images/hero-bg.jpg",
    badge: "Depuis 1996 · +2000 Agences Partenaires",
  },
  {
    id: 2,
    tag: "📱 PROPTECH AVANCÉE",
    title: "GESTION LOCATIVE",
    titleAccent: "100% DIGITALE",
    subtitle: "Mandats automatisés, baux numériques, signature électronique certifiée. Tout en temps réel sur votre espace en ligne personnalisé.",
    cta1: "Voir la démo",
    cta2: "Espace propriétaire",
    image: "/images/carousel-dashboard.jpg",
    badge: "Outils digitaux · Synchronisation temps réel",
  },
  {
    id: 3,
    tag: "🤝 PARTENAIRES B2B",
    title: "AGENCES SANS CARTE G :",
    titleAccent: "AUGMENTEZ VOS REVENUS",
    subtitle: "Partagez les honoraires de gestion, gardez l'exclusivité de vos clients. Aucun coût de structure, aucune obligation d'investissement.",
    cta1: "Devenir partenaire",
    cta2: "En savoir plus",
    image: "/images/carousel-advisor.jpg",
    badge: "ERA · BNP Paribas · GNI · Arthurimmo",
  },
  {
    id: 4,
    tag: "🏠 PROPRIÉTAIRES",
    title: "VOTRE BIEN MÉRITE",
    titleAccent: "LA MEILLEURE GESTION",
    subtitle: "Rentabilité maximisée, zéro stress. Nos experts gèrent l'administratif, le juridique, la technique et la comptabilité à votre place.",
    cta1: "Estimation gratuite",
    cta2: "Nos garanties",
    image: "/images/carousel-apartment.jpg",
    badge: "GLI · Dégradations · Protection Juridique",
  },
  {
    id: 5,
    tag: "🤖 INTELLIGENCE ARTIFICIELLE",
    title: "SOPHIE, VOTRE ASSISTANTE",
    titleAccent: "IA 24H/24",
    subtitle: "Notre assistant vocal IA pré-qualifie vos demandes, répond à vos questions et vous oriente intelligemment, disponible à toute heure.",
    cta1: "Découvrir Sophie IA",
    cta2: "Technologie PropTech",
    image: "/images/ai-sophie.jpg",
    badge: "IA Ready · Automatisation · Réactivité totale",
  },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [progressKey, setProgressKey] = useState(0);

  const goTo = useCallback((index: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrent(index);
      setProgressKey(k => k + 1);
      setIsTransitioning(false);
    }, 300);
  }, [isTransitioning]);

  const next = useCallback(() => {
    goTo((current + 1) % slides.length);
  }, [current, goTo]);

  const prev = useCallback(() => {
    goTo((current - 1 + slides.length) % slides.length);
  }, [current, goTo]);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const slide = slides[current];

  return (
    <section
      style={{
        position: "relative",
        height: "100vh",
        minHeight: "700px",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Background images with transition */}
      {slides.map((s, i) => (
        <div
          key={s.id}
          style={{
            position: "absolute",
            inset: 0,
            opacity: i === current ? (isTransitioning ? 0 : 1) : 0,
            transition: "opacity 0.8s ease",
            zIndex: 0,
          }}
        >
          <img
            src={s.image}
            alt=""
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
          {/* Layered gradient overlay */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(135deg, rgba(10,0,18,0.92) 0%, rgba(75,0,153,0.7) 50%, rgba(0,197,242,0.25) 100%)",
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to top, rgba(10,0,18,0.95) 0%, transparent 60%)",
            }}
          />
        </div>
      ))}

      {/* Animated mesh grid */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(0,197,242,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,197,242,0.04) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          zIndex: 1,
        }}
      />

      {/* Floating orbs */}
      <div
        className="floating"
        style={{
          position: "absolute",
          top: "20%",
          right: "10%",
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(0,197,242,0.12) 0%, transparent 70%)",
          zIndex: 1,
          animationDelay: "0s",
        }}
      />
      <div
        className="floating"
        style={{
          position: "absolute",
          bottom: "30%",
          left: "5%",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(75,0,153,0.12) 0%, transparent 70%)",
          zIndex: 1,
          animationDelay: "2s",
        }}
      />

      {/* Content */}
      <div
        className="max-w-7xl mx-auto px-4 flex flex-col justify-center h-full"
        style={{ position: "relative", zIndex: 2 }}
      >
        <div className="max-w-3xl">
          {/* Tag badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "6px 16px",
              borderRadius: "100px",
              background: "rgba(0, 197, 242, 0.15)",
              border: "1px solid rgba(0, 197, 242, 0.4)",
              fontSize: "12px",
              fontWeight: 700,
              letterSpacing: "0.1em",
              color: "#00C5F2",
              marginBottom: "24px",
              opacity: isTransitioning ? 0 : 1,
              transform: isTransitioning ? "translateY(10px)" : "translateY(0)",
              transition: "all 0.5s ease 0.1s",
            }}
          >
            <Star size={12} fill="#00C5F2" />
            {slide.tag}
          </div>

          {/* Main title */}
          <h1
            style={{
              fontSize: "clamp(2.2rem, 5vw, 4.5rem)",
              fontWeight: 800,
              lineHeight: 1.05,
              color: "white",
              marginBottom: "8px",
              opacity: isTransitioning ? 0 : 1,
              transform: isTransitioning ? "translateY(20px)" : "translateY(0)",
              transition: "all 0.5s ease 0.15s",
            }}
          >
            {slide.title}
          </h1>
          <h1
            style={{
              fontSize: "clamp(2.2rem, 5vw, 4.5rem)",
              fontWeight: 800,
              lineHeight: 1.05,
              background: "linear-gradient(90deg, #00C5F2, #a855f7)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              marginBottom: "28px",
              opacity: isTransitioning ? 0 : 1,
              transform: isTransitioning ? "translateY(20px)" : "translateY(0)",
              transition: "all 0.5s ease 0.2s",
            }}
          >
            {slide.titleAccent}
          </h1>

          {/* Subtitle */}
          <p
            style={{
              fontSize: "clamp(1rem, 1.8vw, 1.25rem)",
              color: "rgba(255,255,255,0.75)",
              lineHeight: 1.7,
              maxWidth: "600px",
              marginBottom: "36px",
              fontWeight: 300,
              opacity: isTransitioning ? 0 : 1,
              transform: isTransitioning ? "translateY(20px)" : "translateY(0)",
              transition: "all 0.5s ease 0.25s",
            }}
          >
            {slide.subtitle}
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-wrap gap-4"
            style={{
              opacity: isTransitioning ? 0 : 1,
              transform: isTransitioning ? "translateY(20px)" : "translateY(0)",
              transition: "all 0.5s ease 0.3s",
              marginBottom: "40px",
            }}
          >
            <button
              className="btn-primary flex items-center gap-2"
              style={{ padding: "16px 32px", borderRadius: "14px", fontSize: "16px" }}
            >
              {slide.cta1}
              <ArrowRight size={18} />
            </button>
            <button
              className="btn-secondary flex items-center gap-2"
              style={{ padding: "16px 28px", borderRadius: "14px", fontSize: "16px" }}
            >
              {slide.cta2}
            </button>
          </div>

          {/* Badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              fontSize: "12px",
              color: "rgba(255,255,255,0.45)",
              letterSpacing: "0.06em",
              opacity: isTransitioning ? 0 : 1,
              transition: "opacity 0.5s ease 0.35s",
            }}
          >
            <div
              style={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                background: "#00C5F2",
                boxShadow: "0 0 8px #00C5F2",
              }}
            />
            {slide.badge}
          </div>
        </div>
      </div>

      {/* Stats bar overlay */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 3,
          background: "rgba(10, 0, 18, 0.85)",
          backdropFilter: "blur(20px)",
          borderTop: "1px solid rgba(0, 197, 242, 0.15)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div
            className="grid grid-cols-2 md:grid-cols-4"
            style={{ borderRight: "none" }}
          >
            {[
              { value: "+2 000", label: "Agences Partenaires", color: "#00C5F2" },
              { value: "1996", label: "Année de Fondation", color: "#a855f7" },
              { value: "100%", label: "Propriété Client Garantie", color: "#00C5F2" },
              { value: "N°1", label: "En France — Gestion Immo.", color: "#4B0099" },
            ].map((stat, i) => (
              <div
                key={i}
                style={{
                  padding: "20px 24px",
                  borderRight: i < 3 ? "1px solid rgba(255,255,255,0.07)" : "none",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    fontSize: "clamp(1.4rem, 3vw, 2rem)",
                    fontWeight: 800,
                    color: stat.color,
                    lineHeight: 1,
                    marginBottom: "4px",
                  }}
                >
                  {stat.value}
                </div>
                <div
                  style={{
                    fontSize: "11px",
                    color: "rgba(255,255,255,0.45)",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Progress bar */}
        <div
          key={progressKey}
          style={{
            height: "3px",
            background: "linear-gradient(90deg, #00C5F2, #4B0099)",
            animation: "progressBar 6s linear forwards",
            transformOrigin: "left",
          }}
        />
        <style>{`
          @keyframes progressBar {
            from { transform: scaleX(0); }
            to { transform: scaleX(1); }
          }
        `}</style>
      </div>

      {/* Carousel navigation */}
      <div
        style={{
          position: "absolute",
          right: "24px",
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 4,
          display: "flex",
          flexDirection: "column",
          gap: "12px",
        }}
      >
        {/* Arrow buttons */}
        <button
          onClick={prev}
          className="glass flex items-center justify-center"
          style={{
            width: "44px",
            height: "44px",
            borderRadius: "12px",
            color: "white",
            cursor: "pointer",
            transition: "all 0.2s ease",
            border: "1px solid rgba(255,255,255,0.15)",
          }}
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={next}
          className="glass flex items-center justify-center"
          style={{
            width: "44px",
            height: "44px",
            borderRadius: "12px",
            color: "white",
            cursor: "pointer",
            transition: "all 0.2s ease",
            border: "1px solid rgba(255,255,255,0.15)",
          }}
        >
          <ChevronRight size={20} />
        </button>

        {/* Dots */}
        <div
          className="flex flex-col items-center gap-2"
          style={{ marginTop: "8px" }}
        >
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              style={{
                width: i === current ? "4px" : "4px",
                height: i === current ? "24px" : "8px",
                borderRadius: "2px",
                background: i === current ? "#00C5F2" : "rgba(255,255,255,0.25)",
                transition: "all 0.3s ease",
                cursor: "pointer",
                border: "none",
              }}
            />
          ))}
        </div>
      </div>

      {/* Scroll hint */}
      <div
        style={{
          position: "absolute",
          bottom: "110px",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 3,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "8px",
          animation: "float 2s ease-in-out infinite",
        }}
      >
        <div
          style={{
            width: "24px",
            height: "40px",
            borderRadius: "12px",
            border: "2px solid rgba(255,255,255,0.2)",
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "center",
            padding: "6px",
          }}
        >
          <div
            style={{
              width: "4px",
              height: "10px",
              borderRadius: "2px",
              background: "#00C5F2",
              animation: "scrollDot 1.5s ease-in-out infinite",
            }}
          />
        </div>
        <style>{`
          @keyframes scrollDot {
            0%, 100% { transform: translateY(0); opacity: 1; }
            50% { transform: translateY(8px); opacity: 0.4; }
          }
        `}</style>
      </div>
    </section>
  );
}

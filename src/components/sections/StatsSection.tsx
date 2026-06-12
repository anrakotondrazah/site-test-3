"use client";

import { useRef, useEffect, useState } from "react";
import { Shield, Award, Globe, Users, TrendingUp, Clock } from "lucide-react";

const stats = [
  { value: 2000, suffix: "+", label: "Agences Partenaires", sub: "France Métro · Corse · Outre-Mer", icon: <Users size={24} />, color: "#00C5F2" },
  { value: 28, suffix: " ans", label: "D'Expérience", sub: "Fondée en 1996", icon: <Clock size={24} />, color: "#a855f7" },
  { value: 100, suffix: "%", label: "Propriété Client", sub: "Garantie contractuelle", icon: <Shield size={24} />, color: "#00C5F2" },
  { value: 1, suffix: "er", label: "En France", sub: "Service gestion immobilière", icon: <Award size={24} />, color: "#4B0099" },
  { value: 7, suffix: "+", label: "Groupes Nationaux", sub: "ERA · BNP · GNI · Arthurimmo…", icon: <Globe size={24} />, color: "#00C5F2" },
  { value: 99, suffix: "%", label: "Taux de Satisfaction", sub: "Propriétaires & Partenaires", icon: <TrendingUp size={24} />, color: "#a855f7" },
];

function useCountUp(target: number, duration: number = 2000, start: boolean = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    const startTime = performance.now();
    const step = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
}

function StatCard({ stat, index, visible }: { stat: typeof stats[0]; index: number; visible: boolean }) {
  const count = useCountUp(stat.value, 2000, visible);
  return (
    <div
      style={{
        padding: "32px 24px",
        textAlign: "center",
        position: "relative",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(30px)",
        transition: `all 0.6s ease ${index * 0.1}s`,
      }}
    >
      {/* Icon */}
      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          width: "52px",
          height: "52px",
          borderRadius: "16px",
          background: `${stat.color}15`,
          border: `1px solid ${stat.color}33`,
          color: stat.color,
          marginBottom: "16px",
        }}
      >
        {stat.icon}
      </div>

      {/* Value */}
      <div
        style={{
          fontSize: "clamp(2rem, 4vw, 3rem)",
          fontWeight: 800,
          color: stat.color,
          lineHeight: 1,
          marginBottom: "8px",
          letterSpacing: "-0.02em",
        }}
      >
        {visible ? count : 0}
        {stat.suffix}
      </div>

      {/* Label */}
      <div
        style={{
          fontSize: "15px",
          fontWeight: 700,
          color: "white",
          marginBottom: "6px",
        }}
      >
        {stat.label}
      </div>

      {/* Sub */}
      <div
        style={{
          fontSize: "12px",
          color: "rgba(255,255,255,0.35)",
          letterSpacing: "0.04em",
          lineHeight: 1.5,
        }}
      >
        {stat.sub}
      </div>

      {/* Divider (not on last) */}
      {index < stats.length - 1 && (
        <div
          style={{
            position: "absolute",
            right: 0,
            top: "20%",
            height: "60%",
            width: "1px",
            background: "rgba(255,255,255,0.06)",
          }}
        />
      )}
    </div>
  );
}

export default function StatsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      style={{
        padding: "80px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Gradient background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(180deg, #0a0012 0%, rgba(75,0,153,0.15) 50%, #0a0012 100%)",
        }}
      />

      {/* Animated background dots */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "radial-gradient(circle, rgba(0,197,242,0.06) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          pointerEvents: "none",
        }}
      />

      <div className="max-w-7xl mx-auto px-4" ref={sectionRef}>
        {/* Label */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "12px",
            opacity: visible ? 1 : 0,
            transition: "opacity 0.6s ease",
          }}
        >
          <span
            style={{
              fontSize: "11px",
              fontWeight: 700,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#00C5F2",
            }}
          >
            LA PREUVE PAR LES CHIFFRES
          </span>
        </div>

        <h2
          style={{
            textAlign: "center",
            fontSize: "clamp(1.8rem, 3vw, 2.8rem)",
            fontWeight: 800,
            color: "white",
            marginBottom: "60px",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.6s ease 0.1s",
          }}
        >
          L&apos;excellence confirmée par{" "}
          <span className="gradient-text">28 ans d&apos;expérience</span>
        </h2>

        {/* Stats grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
            borderRadius: "24px",
            overflow: "hidden",
            border: "1px solid rgba(0, 197, 242, 0.1)",
            background: "rgba(255,255,255,0.02)",
            backdropFilter: "blur(10px)",
          }}
        >
          {stats.map((stat, i) => (
            <StatCard key={i} stat={stat} index={i} visible={visible} />
          ))}
        </div>

        {/* Trust logos strip */}
        <div
          style={{
            marginTop: "60px",
            padding: "24px 40px",
            borderRadius: "20px",
            background: "rgba(255,255,255,0.02)",
            border: "1px solid rgba(255,255,255,0.06)",
            opacity: visible ? 1 : 0,
            transition: "opacity 0.6s ease 0.7s",
          }}
        >
          <div
            style={{
              textAlign: "center",
              fontSize: "11px",
              fontWeight: 700,
              letterSpacing: "0.15em",
              color: "rgba(255,255,255,0.3)",
              textTransform: "uppercase",
              marginBottom: "20px",
            }}
          >
            NOS PARTENAIRES NATIONAUX
          </div>
          <div
            className="flex flex-wrap justify-center items-center gap-6"
            style={{ gap: "24px 40px" }}
          >
            {[
              "ERA Immobilier",
              "BNP Paribas Immobilier",
              "GNI",
              "Arthurimmo.com",
              "Côté Particuliers",
              "Maison de l'Investisseur",
              "Cyrus Conseil",
            ].map((partner, i) => (
              <div
                key={i}
                style={{
                  fontSize: "13px",
                  fontWeight: 700,
                  color: "rgba(255,255,255,0.35)",
                  letterSpacing: "0.05em",
                  transition: "color 0.2s ease",
                  cursor: "default",
                  textAlign: "center",
                }}
                onMouseEnter={e => (e.currentTarget.style.color = "#00C5F2")}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.35)")}
              >
                {partner}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

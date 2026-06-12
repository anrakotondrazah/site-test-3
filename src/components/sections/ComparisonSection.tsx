"use client";

import { useRef, useEffect, useState } from "react";
import { Check, X, Minus, ArrowRight } from "lucide-react";

const criteria = [
  { label: "Gestion administrative complète", locagestion: true, solo: false, classique: "partial" },
  { label: "Garantie Loyers Impayés (GLI)", locagestion: true, solo: false, classique: "partial" },
  { label: "Protection juridique incluse", locagestion: true, solo: false, classique: false },
  { label: "Comptabilité immobilière dédiée", locagestion: true, solo: false, classique: "partial" },
  { label: "Outils digitaux & espace en ligne", locagestion: true, solo: false, classique: "partial" },
  { label: "Maintenance technique coordonnée", locagestion: true, solo: false, classique: "partial" },
  { label: "Disponibilité 24h/24 (IA Sophie)", locagestion: true, solo: false, classique: false },
  { label: "Zéro coût de structure", locagestion: true, solo: true, classique: false },
  { label: "Conformité légale automatisée", locagestion: true, solo: false, classique: "partial" },
  { label: "Signature électronique certifiée", locagestion: true, solo: false, classique: "partial" },
  { label: "Recouvrement & contentieux", locagestion: true, solo: false, classique: false },
  { label: "Réseau national +2000 agences", locagestion: true, solo: false, classique: false },
];

type ColumnValue = boolean | string;

function Cell({ value }: { value: ColumnValue }) {
  if (value === true) return <Check size={18} style={{ color: "#00C5F2" }} />;
  if (value === false) return <X size={18} style={{ color: "rgba(255,255,255,0.2)" }} />;
  return <Minus size={18} style={{ color: "#a855f7" }} />;
}

export default function ComparisonSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

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
      style={{
        padding: "100px 0",
        background: "linear-gradient(180deg, #0a0012 0%, #0d0025 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* BG decoration */}
      <div
        style={{
          position: "absolute",
          left: "-200px",
          top: "50%",
          transform: "translateY(-50%)",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(0,197,242,0.05) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div className="max-w-6xl mx-auto px-4" ref={sectionRef}>
        {/* Header */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "64px",
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
            L&apos;AVANTAGE CONCURRENTIEL
          </span>
          <h2
            style={{
              fontSize: "clamp(2rem, 4vw, 3.2rem)",
              fontWeight: 800,
              color: "white",
              marginBottom: "16px",
            }}
          >
            Pourquoi choisir{" "}
            <span className="gradient-text">LOCAGESTION ?</span>
          </h2>
          <p
            style={{
              fontSize: "1.05rem",
              color: "rgba(255,255,255,0.45)",
              maxWidth: "540px",
              margin: "0 auto",
              lineHeight: 1.7,
              fontWeight: 300,
            }}
          >
            La comparaison est sans appel. Une solution complète, sécurisée et
            digitalisée que vous ne trouverez nulle part ailleurs.
          </p>
        </div>

        {/* Comparison table */}
        <div
          style={{
            borderRadius: "24px",
            overflow: "hidden",
            border: "1px solid rgba(0,197,242,0.15)",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(30px)",
            transition: "all 0.7s ease 0.2s",
          }}
        >
          {/* Table header */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "2fr 1fr 1fr 1fr",
              background: "rgba(255,255,255,0.03)",
              borderBottom: "1px solid rgba(255,255,255,0.07)",
            }}
          >
            <div style={{ padding: "20px 24px", fontSize: "13px", color: "rgba(255,255,255,0.4)" }}>
              Critère
            </div>
            {[
              { label: "LOCAGESTION", highlight: true, sub: "Recommandé" },
              { label: "Gestion Solo", highlight: false, sub: "Par vous-même" },
              { label: "Agence Classique", highlight: false, sub: "Sans externalisation" },
            ].map((col, i) => (
              <div
                key={i}
                style={{
                  padding: "20px",
                  textAlign: "center",
                  background: col.highlight
                    ? "linear-gradient(180deg, rgba(0,197,242,0.12), rgba(75,0,153,0.08))"
                    : "transparent",
                  borderLeft: "1px solid rgba(255,255,255,0.06)",
                  position: "relative",
                }}
              >
                {col.highlight && (
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: "50%",
                      transform: "translateX(-50%)",
                      background: "#00C5F2",
                      color: "#0a0012",
                      fontSize: "10px",
                      fontWeight: 800,
                      letterSpacing: "0.08em",
                      padding: "3px 12px",
                      borderRadius: "0 0 8px 8px",
                    }}
                  >
                    N°1
                  </div>
                )}
                <div
                  style={{
                    fontSize: "14px",
                    fontWeight: 800,
                    color: col.highlight ? "#00C5F2" : "rgba(255,255,255,0.6)",
                    marginTop: col.highlight ? "10px" : 0,
                    marginBottom: "4px",
                  }}
                >
                  {col.label}
                </div>
                <div
                  style={{
                    fontSize: "11px",
                    color: "rgba(255,255,255,0.3)",
                    letterSpacing: "0.04em",
                  }}
                >
                  {col.sub}
                </div>
              </div>
            ))}
          </div>

          {/* Table rows */}
          {criteria.map((row, i) => (
            <div
              key={i}
              style={{
                display: "grid",
                gridTemplateColumns: "2fr 1fr 1fr 1fr",
                borderBottom: i < criteria.length - 1 ? "1px solid rgba(255,255,255,0.04)" : "none",
                background: i % 2 === 0 ? "rgba(255,255,255,0.01)" : "transparent",
                transition: "background 0.2s ease",
              }}
              onMouseEnter={e => (e.currentTarget.style.background = "rgba(0,197,242,0.04)")}
              onMouseLeave={e => (e.currentTarget.style.background = i % 2 === 0 ? "rgba(255,255,255,0.01)" : "transparent")}
            >
              <div
                style={{
                  padding: "16px 24px",
                  fontSize: "14px",
                  color: "rgba(255,255,255,0.65)",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                {row.label}
              </div>
              {[row.locagestion, row.solo, row.classique].map((val, j) => (
                <div
                  key={j}
                  style={{
                    padding: "16px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderLeft: "1px solid rgba(255,255,255,0.04)",
                    background: j === 0 ? "rgba(0,197,242,0.04)" : "transparent",
                  }}
                >
                  <Cell value={val} />
                </div>
              ))}
            </div>
          ))}

          {/* Table footer */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "2fr 1fr 1fr 1fr",
              background: "rgba(255,255,255,0.03)",
              borderTop: "1px solid rgba(255,255,255,0.07)",
              padding: "20px 0",
            }}
          >
            <div style={{ padding: "0 24px" }} />
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                padding: "0 16px",
              }}
            >
              <button
                className="btn-primary flex items-center gap-2"
                style={{ padding: "12px 20px", borderRadius: "12px", fontSize: "13px" }}
              >
                Démarrer
                <ArrowRight size={16} />
              </button>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                padding: "0 16px",
                alignItems: "center",
              }}
            >
              <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.25)" }}>
                Chronophage
              </span>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                padding: "0 16px",
                alignItems: "center",
              }}
            >
              <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.25)" }}>
                Partiel
              </span>
            </div>
          </div>
        </div>

        {/* Legend */}
        <div
          className="flex flex-wrap justify-center gap-6"
          style={{
            marginTop: "24px",
            opacity: visible ? 1 : 0,
            transition: "opacity 0.6s ease 0.5s",
          }}
        >
          {[
            { icon: <Check size={14} />, label: "Inclus", color: "#00C5F2" },
            { icon: <Minus size={14} />, label: "Partiel", color: "#a855f7" },
            { icon: <X size={14} />, label: "Non disponible", color: "rgba(255,255,255,0.25)" },
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-2"
              style={{ fontSize: "12px", color: "rgba(255,255,255,0.4)" }}
            >
              <span style={{ color: item.color }}>{item.icon}</span>
              {item.label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

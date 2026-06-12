"use client";

import { useRef, useEffect, useState } from "react";
import { Eye, ArrowRight } from "lucide-react";

const galleryItems = [
  {
    src: "/images/carousel-apartment.jpg",
    title: "Appartement Premium",
    subtitle: "Toulouse · Géré depuis 3 ans",
    tag: "Résidentiel",
    color: "#00C5F2",
    size: "large",
  },
  {
    src: "/images/services-management.jpg",
    title: "Conseil Personnalisé",
    subtitle: "Expertise & Accompagnement",
    tag: "Services",
    color: "#a855f7",
    size: "small",
  },
  {
    src: "/images/digital-signing.jpg",
    title: "Signature Digitale",
    subtitle: "100% Dématérialisé",
    tag: "PropTech",
    color: "#00C5F2",
    size: "small",
  },
  {
    src: "/images/carousel-dashboard.jpg",
    title: "Dashboard Temps Réel",
    subtitle: "Suivi de votre patrimoine",
    tag: "Digital",
    color: "#4B0099",
    size: "large",
  },
  {
    src: "/images/testimonial-owner.jpg",
    title: "Propriétaires Satisfaits",
    subtitle: "+99% de satisfaction client",
    tag: "Avis Clients",
    color: "#a855f7",
    size: "medium",
  },
  {
    src: "/images/carousel-advisor.jpg",
    title: "Équipe d'Experts",
    subtitle: "Conseillers certifiés",
    tag: "Notre Équipe",
    color: "#00C5F2",
    size: "medium",
  },
];

export default function ImageGallerySection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState<number | null>(null);

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
        padding: "80px 0",
        background: "#050008",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div className="max-w-7xl mx-auto px-4" ref={sectionRef}>
        {/* Header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginBottom: "48px",
            flexWrap: "wrap",
            gap: "20px",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.6s ease",
          }}
        >
          <div>
            <span
              style={{
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "0.2em",
                color: "#00C5F2",
                textTransform: "uppercase",
                display: "block",
                marginBottom: "12px",
              }}
            >
              GALERIE
            </span>
            <h2
              style={{
                fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
                fontWeight: 800,
                color: "white",
              }}
            >
              L&apos;excellence{" "}
              <span className="gradient-text">en images</span>
            </h2>
          </div>
          <button
            className="btn-secondary flex items-center gap-2"
            style={{ padding: "12px 24px", borderRadius: "12px", fontSize: "14px" }}
          >
            Voir tous les projets
            <ArrowRight size={16} />
          </button>
        </div>

        {/* Asymmetric gallery grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gridTemplateRows: "280px 280px",
            gap: "16px",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(30px)",
            transition: "all 0.7s ease 0.2s",
          }}
        >
          {galleryItems.map((item, i) => {
            const gridStyle: React.CSSProperties = {};
            if (i === 0) { gridStyle.gridColumn = "1 / 2"; gridStyle.gridRow = "1 / 3"; }
            else if (i === 1) { gridStyle.gridColumn = "2 / 3"; gridStyle.gridRow = "1 / 2"; }
            else if (i === 2) { gridStyle.gridColumn = "3 / 4"; gridStyle.gridRow = "1 / 2"; }
            else if (i === 3) { gridStyle.gridColumn = "2 / 4"; gridStyle.gridRow = "2 / 3"; }
            // items 4 and 5 are hidden on this layout
            if (i >= 4) return null;

            return (
              <div
                key={i}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  ...gridStyle,
                  borderRadius: "20px",
                  overflow: "hidden",
                  position: "relative",
                  cursor: "pointer",
                  transition: "transform 0.4s ease, box-shadow 0.4s ease",
                  transform: hovered === i ? "scale(1.02)" : "scale(1)",
                  boxShadow: hovered === i
                    ? `0 20px 60px rgba(0,0,0,0.6), 0 0 30px ${item.color}33`
                    : "0 8px 30px rgba(0,0,0,0.4)",
                }}
              >
                <img
                  src={item.src}
                  alt={item.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "transform 0.6s ease",
                    transform: hovered === i ? "scale(1.08)" : "scale(1)",
                  }}
                />

                {/* Gradient overlay */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: hovered === i
                      ? `linear-gradient(180deg, rgba(10,0,18,0.2) 0%, rgba(10,0,18,0.85) 100%)`
                      : "linear-gradient(180deg, transparent 40%, rgba(10,0,18,0.9) 100%)",
                    transition: "all 0.4s ease",
                  }}
                />

                {/* Color tint on hover */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: `${item.color}`,
                    opacity: hovered === i ? 0.08 : 0,
                    transition: "opacity 0.4s ease",
                  }}
                />

                {/* Content */}
                <div
                  style={{
                    position: "absolute",
                    bottom: "20px",
                    left: "20px",
                    right: "20px",
                  }}
                >
                  <div
                    style={{
                      display: "inline-block",
                      fontSize: "10px",
                      fontWeight: 700,
                      color: item.color,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      background: `${item.color}20`,
                      border: `1px solid ${item.color}44`,
                      padding: "3px 10px",
                      borderRadius: "20px",
                      marginBottom: "8px",
                    }}
                  >
                    {item.tag}
                  </div>
                  <div
                    style={{
                      fontSize: i === 0 ? "20px" : "16px",
                      fontWeight: 800,
                      color: "white",
                      marginBottom: "4px",
                    }}
                  >
                    {item.title}
                  </div>
                  <div style={{ fontSize: "13px", color: "rgba(255,255,255,0.5)" }}>
                    {item.subtitle}
                  </div>

                  {/* Hover action */}
                  {hovered === i && (
                    <div
                      style={{
                        marginTop: "12px",
                        display: "flex",
                        alignItems: "center",
                        gap: "6px",
                        color: item.color,
                        fontSize: "13px",
                        fontWeight: 600,
                      }}
                    >
                      <Eye size={14} />
                      Voir le détail
                    </div>
                  )}
                </div>

                {/* Corner decoration */}
                <div
                  style={{
                    position: "absolute",
                    top: "16px",
                    right: "16px",
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    background: item.color,
                    boxShadow: `0 0 12px ${item.color}`,
                    opacity: hovered === i ? 1 : 0.5,
                    transition: "opacity 0.3s ease",
                  }}
                />
              </div>
            );
          })}
        </div>

        {/* Bottom row: additional images horizontal scroll */}
        <div
          className="horizontal-scroll"
          style={{
            marginTop: "16px",
            gap: "12px",
            opacity: visible ? 1 : 0,
            transition: "opacity 0.7s ease 0.4s",
          }}
        >
          {galleryItems.map((item, i) => (
            <div
              key={i}
              style={{
                flexShrink: 0,
                width: "200px",
                height: "130px",
                borderRadius: "14px",
                overflow: "hidden",
                position: "relative",
                cursor: "pointer",
              }}
              onMouseEnter={e => {
                const img = e.currentTarget.querySelector("img");
                if (img) img.style.transform = "scale(1.08)";
              }}
              onMouseLeave={e => {
                const img = e.currentTarget.querySelector("img");
                if (img) img.style.transform = "scale(1)";
              }}
            >
              <img
                src={item.src}
                alt=""
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  transition: "transform 0.4s ease",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(180deg, transparent, rgba(10,0,18,0.7))",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: "10px",
                  left: "12px",
                  fontSize: "11px",
                  fontWeight: 700,
                  color: "rgba(255,255,255,0.8)",
                }}
              >
                {item.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

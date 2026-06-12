"use client";

import { useRef, useEffect, useState } from "react";
import { Mic, Zap, Clock, Brain, MessageCircle, ArrowRight, CheckCircle } from "lucide-react";

const features = [
  { icon: <Clock size={18} />, title: "Disponibilité 24h/24", desc: "Sophie répond à toute heure, même en dehors des horaires d'ouverture", color: "#00C5F2" },
  { icon: <Brain size={18} />, title: "Pré-qualification instantanée", desc: "Analyse et classifie les demandes avant de les transmettre aux experts", color: "#a855f7" },
  { icon: <MessageCircle size={18} />, title: "Orientation intelligente", desc: "Dirige chaque demande vers le bon interlocuteur automatiquement", color: "#00C5F2" },
  { icon: <Zap size={18} />, title: "Réactivité totale", desc: "Délai de réponse < 3 secondes. Aucune mise en attente", color: "#4B0099" },
];

const chatMessages = [
  { role: "user", text: "Bonjour, j'ai un locataire qui ne paie pas son loyer depuis 2 mois.", delay: 0 },
  { role: "sophie", text: "Bonjour ! Je comprends votre préoccupation. Je suis Sophie, l'assistante IA de LOCAGESTION. Pour un impayé de loyer, voici nos actions immédiates :", delay: 1000 },
  { role: "sophie", text: "✓ Activation de votre Garantie Loyers Impayés (GLI)\n✓ Mise en place des relances automatiques\n✓ Transfert vers notre pôle contentieux juridique", delay: 2000 },
  { role: "user", text: "Combien de temps cela prend-il ?", delay: 3000 },
  { role: "sophie", text: "Notre pôle recouvrement intervient sous 48h. Voulez-vous être rappelé par un conseiller pour un suivi personnalisé ?", delay: 4000 },
];

export default function AISection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [visibleMessages, setVisibleMessages] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;
    chatMessages.forEach((_, i) => {
      setTimeout(() => setVisibleMessages(v => Math.max(v, i + 1)), _.delay + 500);
    });
  }, [visible]);

  return (
    <section
      id="ia"
      style={{
        padding: "100px 0",
        background: "linear-gradient(180deg, #080010 0%, #040008 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* BG: AI image blended */}
      <div
        style={{
          position: "absolute",
          right: 0,
          top: 0,
          bottom: 0,
          width: "50%",
          backgroundImage: "url('/images/ai-sophie.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center left",
          opacity: 0.12,
          maskImage: "linear-gradient(to right, transparent, rgba(0,0,0,0.8), rgba(0,0,0,0.4))",
          WebkitMaskImage: "linear-gradient(to right, transparent, rgba(0,0,0,0.8), rgba(0,0,0,0.4))",
        }}
      />

      {/* Animated circles */}
      {[200, 350, 500].map((size, i) => (
        <div
          key={i}
          className="floating"
          style={{
            position: "absolute",
            right: "15%",
            top: "50%",
            transform: "translate(50%, -50%)",
            width: `${size}px`,
            height: `${size}px`,
            borderRadius: "50%",
            border: `1px solid rgba(0,197,242,${0.06 - i * 0.015})`,
            pointerEvents: "none",
            animationDelay: `${i * 0.8}s`,
          }}
        />
      ))}

      <div className="max-w-7xl mx-auto px-4" ref={sectionRef}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "80px",
            alignItems: "center",
          }}
          className="flex flex-col md:grid"
        >
          {/* Left: Content */}
          <div
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(-30px)",
              transition: "all 0.7s ease",
            }}
          >
            {/* Sophie avatar */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "16px",
                marginBottom: "32px",
                padding: "16px 24px",
                borderRadius: "20px",
                background: "rgba(0,197,242,0.08)",
                border: "1px solid rgba(0,197,242,0.25)",
              }}
            >
              <div
                className="pulse-glow"
                style={{
                  width: "52px",
                  height: "52px",
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #00C5F2, #4B0099)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Mic size={24} color="white" />
              </div>
              <div>
                <div style={{ fontSize: "16px", fontWeight: 800, color: "white" }}>Sophie IA</div>
                <div style={{ fontSize: "12px", color: "#00C5F2" }}>
                  <span
                    style={{
                      display: "inline-block",
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      background: "#00C5F2",
                      marginRight: "6px",
                      boxShadow: "0 0 6px #00C5F2",
                      animation: "pulseGlow 2s ease-in-out infinite",
                    }}
                  />
                  En ligne · Disponible 24h/24
                </div>
              </div>
            </div>

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
              PROPTECH & INTELLIGENCE ARTIFICIELLE
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
              Rencontrez{" "}
              <span className="gradient-text">Sophie</span>,{" "}
              votre IA immobilière
            </h2>

            <p
              style={{
                fontSize: "1.05rem",
                color: "rgba(255,255,255,0.5)",
                lineHeight: 1.8,
                fontWeight: 300,
                marginBottom: "40px",
              }}
            >
              Notre assistant vocal IA révolutionne la relation client en
              immobilier. Disponible à toute heure, Sophie pré-qualifie
              instantanément les demandes, répond aux questions fréquentes et
              oriente intelligemment chaque interlocuteur.
            </p>

            {/* Features grid */}
            <div className="grid grid-cols-2 gap-4" style={{ marginBottom: "40px" }}>
              {features.map((feat, i) => (
                <div
                  key={i}
                  style={{
                    padding: "20px",
                    borderRadius: "16px",
                    background: "rgba(255,255,255,0.03)",
                    border: `1px solid ${feat.color}22`,
                    opacity: visible ? 1 : 0,
                    transform: visible ? "translateY(0)" : "translateY(20px)",
                    transition: `all 0.5s ease ${0.3 + i * 0.1}s`,
                  }}
                >
                  <div
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "36px",
                      height: "36px",
                      borderRadius: "10px",
                      background: `${feat.color}15`,
                      color: feat.color,
                      marginBottom: "10px",
                    }}
                  >
                    {feat.icon}
                  </div>
                  <div
                    style={{
                      fontSize: "13px",
                      fontWeight: 700,
                      color: "white",
                      marginBottom: "6px",
                    }}
                  >
                    {feat.title}
                  </div>
                  <div
                    style={{
                      fontSize: "12px",
                      color: "rgba(255,255,255,0.4)",
                      lineHeight: 1.5,
                    }}
                  >
                    {feat.desc}
                  </div>
                </div>
              ))}
            </div>

            <button
              className="btn-primary flex items-center gap-2"
              style={{ padding: "16px 32px", borderRadius: "14px", fontSize: "16px" }}
            >
              Découvrir Sophie IA
              <ArrowRight size={18} />
            </button>
          </div>

          {/* Right: Chat simulation */}
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
                border: "1px solid rgba(0,197,242,0.2)",
                background: "rgba(10,0,18,0.9)",
                backdropFilter: "blur(20px)",
              }}
            >
              {/* Chat header */}
              <div
                style={{
                  padding: "20px 24px",
                  background: "rgba(0,197,242,0.08)",
                  borderBottom: "1px solid rgba(0,197,242,0.15)",
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                }}
              >
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, #00C5F2, #4B0099)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Mic size={18} color="white" />
                </div>
                <div>
                  <div style={{ fontSize: "14px", fontWeight: 700, color: "white" }}>Sophie IA — LOCAGESTION</div>
                  <div style={{ fontSize: "12px", color: "#00C5F2", display: "flex", alignItems: "center", gap: "6px" }}>
                    <span
                      style={{
                        width: "6px",
                        height: "6px",
                        borderRadius: "50%",
                        background: "#00C5F2",
                        display: "inline-block",
                        boxShadow: "0 0 6px #00C5F2",
                      }}
                    />
                    Assistante IA · En ligne
                  </div>
                </div>
                <div style={{ marginLeft: "auto", display: "flex", gap: "8px" }}>
                  {["#ff5f57", "#febc2e", "#28c840"].map((c, i) => (
                    <div key={i} style={{ width: "12px", height: "12px", borderRadius: "50%", background: c }} />
                  ))}
                </div>
              </div>

              {/* Chat messages */}
              <div
                style={{
                  padding: "24px",
                  minHeight: "320px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                }}
              >
                {chatMessages.slice(0, visibleMessages).map((msg, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      justifyContent: msg.role === "user" ? "flex-end" : "flex-start",
                      animation: "fadeInUp 0.4s ease forwards",
                    }}
                  >
                    <div
                      style={{
                        maxWidth: "80%",
                        padding: "12px 16px",
                        borderRadius: msg.role === "user" ? "16px 16px 4px 16px" : "16px 16px 16px 4px",
                        background: msg.role === "user"
                          ? "linear-gradient(135deg, #4B0099, #6a00d9)"
                          : "rgba(0,197,242,0.1)",
                        border: msg.role === "sophie" ? "1px solid rgba(0,197,242,0.2)" : "none",
                        fontSize: "13px",
                        color: "rgba(255,255,255,0.85)",
                        lineHeight: 1.6,
                        whiteSpace: "pre-line",
                      }}
                    >
                      {msg.text}
                    </div>
                  </div>
                ))}

                {visibleMessages > 0 && visibleMessages < chatMessages.length && (
                  <div style={{ display: "flex", gap: "4px", padding: "8px 0" }}>
                    {[0, 1, 2].map(i => (
                      <div
                        key={i}
                        style={{
                          width: "6px",
                          height: "6px",
                          borderRadius: "50%",
                          background: "#00C5F2",
                          animation: `bounce 1s ease-in-out ${i * 0.2}s infinite`,
                        }}
                      />
                    ))}
                    <style>{`
                      @keyframes bounce { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-6px)} }
                      @keyframes fadeInUp { from{opacity:0;transform:translateY(10px)} to{opacity:1;transform:translateY(0)} }
                    `}</style>
                  </div>
                )}
              </div>

              {/* Chat input */}
              <div
                style={{
                  padding: "16px 24px",
                  borderTop: "1px solid rgba(255,255,255,0.06)",
                  display: "flex",
                  gap: "12px",
                  alignItems: "center",
                }}
              >
                <input
                  placeholder="Posez votre question à Sophie..."
                  style={{
                    flex: 1,
                    fontSize: "13px",
                    padding: "10px 14px",
                    borderRadius: "10px",
                  }}
                />
                <button
                  className="btn-primary"
                  style={{ padding: "10px 16px", borderRadius: "10px", flexShrink: 0 }}
                >
                  <Mic size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

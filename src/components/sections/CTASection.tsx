"use client";

import { useRef, useEffect, useState } from "react";
import { Phone, Mail, Calendar, ArrowRight, CheckCircle, Star } from "lucide-react";

export default function CTASection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    type: "proprietaire",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      style={{
        padding: "100px 0",
        background: "linear-gradient(135deg, #0a0012 0%, rgba(75,0,153,0.2) 50%, #0a0012 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* BG image blended */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "url('/images/testimonial-owner.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.04,
        }}
      />

      {/* Animated orbs */}
      <div
        className="floating"
        style={{
          position: "absolute",
          top: "10%",
          right: "5%",
          width: "350px",
          height: "350px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(75,0,153,0.15) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        className="floating"
        style={{
          position: "absolute",
          bottom: "15%",
          left: "5%",
          width: "250px",
          height: "250px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(0,197,242,0.1) 0%, transparent 70%)",
          pointerEvents: "none",
          animationDelay: "2s",
        }}
      />

      <div className="max-w-6xl mx-auto px-4" ref={sectionRef}>
        {/* Section header */}
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
            CONTACTEZ-NOUS
          </span>
          <h2
            style={{
              fontSize: "clamp(2rem, 4vw, 3.5rem)",
              fontWeight: 800,
              color: "white",
              marginBottom: "16px",
              lineHeight: 1.1,
            }}
          >
            Prêt à{" "}
            <span className="gradient-text">déléguer</span>{" "}
            votre gestion ?
          </h2>
          <p
            style={{
              fontSize: "1.1rem",
              color: "rgba(255,255,255,0.45)",
              maxWidth: "540px",
              margin: "0 auto",
              lineHeight: 1.7,
              fontWeight: 300,
            }}
          >
            Audit gratuit · Rappel sous 24h · Sans engagement
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.4fr",
            gap: "64px",
            alignItems: "start",
          }}
          className="flex flex-col md:grid"
        >
          {/* Left: Contact options */}
          <div
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(-30px)",
              transition: "all 0.7s ease 0.2s",
            }}
          >
            <div style={{ marginBottom: "40px" }}>
              <h3
                style={{
                  fontSize: "1.4rem",
                  fontWeight: 700,
                  color: "white",
                  marginBottom: "8px",
                }}
              >
                Plusieurs façons de nous joindre
              </h3>
              <p
                style={{
                  fontSize: "14px",
                  color: "rgba(255,255,255,0.4)",
                  lineHeight: 1.7,
                }}
              >
                Notre équipe de conseillers est disponible du lundi au vendredi,
                9h — 18h. Sophie IA disponible 24h/24.
              </p>
            </div>

            {/* Contact cards */}
            {[
              {
                icon: <Phone size={20} />,
                title: "Être rappelé",
                desc: "Un conseiller vous rappelle sous 2h",
                action: "Demander un rappel",
                color: "#00C5F2",
                href: "#",
              },
              {
                icon: <Mail size={20} />,
                title: "Par email",
                desc: "contact@locagestion.com",
                action: "Envoyer un email",
                color: "#a855f7",
                href: "mailto:contact@locagestion.com",
              },
              {
                icon: <Calendar size={20} />,
                title: "Prendre RDV",
                desc: "Visio ou en présentiel à Toulouse",
                action: "Réserver un créneau",
                color: "#4B0099",
                href: "#",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="card-hover"
                style={{
                  display: "flex",
                  gap: "16px",
                  padding: "20px",
                  borderRadius: "16px",
                  background: "rgba(255,255,255,0.02)",
                  border: `1px solid ${item.color}22`,
                  marginBottom: "12px",
                  cursor: "pointer",
                }}
              >
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "12px",
                    background: `${item.color}15`,
                    border: `1px solid ${item.color}33`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: item.color,
                    flexShrink: 0,
                  }}
                >
                  {item.icon}
                </div>
                <div style={{ flex: 1 }}>
                  <div
                    style={{ fontSize: "15px", fontWeight: 700, color: "white", marginBottom: "4px" }}
                  >
                    {item.title}
                  </div>
                  <div
                    style={{ fontSize: "13px", color: "rgba(255,255,255,0.4)", marginBottom: "10px" }}
                  >
                    {item.desc}
                  </div>
                  <a
                    href={item.href}
                    style={{
                      fontSize: "13px",
                      color: item.color,
                      fontWeight: 600,
                      display: "flex",
                      alignItems: "center",
                      gap: "4px",
                    }}
                  >
                    {item.action}
                    <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            ))}

            {/* Trust badges */}
            <div
              style={{
                padding: "20px",
                borderRadius: "16px",
                background: "rgba(0,197,242,0.05)",
                border: "1px solid rgba(0,197,242,0.15)",
                marginTop: "24px",
              }}
            >
              <div
                style={{
                  fontSize: "12px",
                  fontWeight: 700,
                  color: "#00C5F2",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  marginBottom: "12px",
                }}
              >
                Nos garanties
              </div>
              {[
                "Audit gratuit et sans engagement",
                "Réponse sous 24h garantie",
                "Garantie Financière GALIAN",
                "Membre ANACAFI Immo · ORIAS",
              ].map((g, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    fontSize: "13px",
                    color: "rgba(255,255,255,0.55)",
                    marginBottom: "8px",
                  }}
                >
                  <CheckCircle size={14} style={{ color: "#00C5F2", flexShrink: 0 }} />
                  {g}
                </div>
              ))}
            </div>
          </div>

          {/* Right: Contact form */}
          <div
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(30px)",
              transition: "all 0.7s ease 0.3s",
            }}
          >
            <div
              style={{
                borderRadius: "24px",
                padding: "40px",
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(0,197,242,0.15)",
                backdropFilter: "blur(10px)",
              }}
            >
              {submitted ? (
                <div style={{ textAlign: "center", padding: "40px 0" }}>
                  <div
                    style={{
                      width: "72px",
                      height: "72px",
                      borderRadius: "50%",
                      background: "rgba(0,197,242,0.15)",
                      border: "2px solid #00C5F2",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0 auto 24px",
                    }}
                  >
                    <CheckCircle size={36} style={{ color: "#00C5F2" }} />
                  </div>
                  <h3 style={{ fontSize: "1.5rem", fontWeight: 800, color: "white", marginBottom: "12px" }}>
                    Demande envoyée !
                  </h3>
                  <p style={{ color: "rgba(255,255,255,0.5)", lineHeight: 1.7 }}>
                    Notre équipe vous contactera sous 24h.
                    <br />
                    Sophie IA reste disponible pour toute question urgente.
                  </p>
                </div>
              ) : (
                <>
                  <h3
                    style={{
                      fontSize: "1.3rem",
                      fontWeight: 800,
                      color: "white",
                      marginBottom: "8px",
                    }}
                  >
                    Demander votre audit gratuit
                  </h3>
                  <p
                    style={{
                      fontSize: "13px",
                      color: "rgba(255,255,255,0.4)",
                      marginBottom: "32px",
                    }}
                  >
                    Remplissez le formulaire, nous vous recontactons sous 24h.
                  </p>

                  <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                    {/* Type selection */}
                    <div>
                      <label
                        style={{
                          fontSize: "12px",
                          fontWeight: 700,
                          color: "rgba(255,255,255,0.5)",
                          letterSpacing: "0.08em",
                          textTransform: "uppercase",
                          display: "block",
                          marginBottom: "8px",
                        }}
                      >
                        Je suis
                      </label>
                      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "8px" }}>
                        {[
                          { value: "proprietaire", label: "Propriétaire" },
                          { value: "agence", label: "Agence" },
                          { value: "cgp", label: "CGP" },
                        ].map(opt => (
                          <button
                            key={opt.value}
                            type="button"
                            onClick={() => setFormData(f => ({ ...f, type: opt.value }))}
                            style={{
                              padding: "10px",
                              borderRadius: "10px",
                              border: formData.type === opt.value
                                ? "2px solid #00C5F2"
                                : "2px solid rgba(255,255,255,0.1)",
                              background: formData.type === opt.value
                                ? "rgba(0,197,242,0.1)"
                                : "transparent",
                              color: formData.type === opt.value ? "#00C5F2" : "rgba(255,255,255,0.5)",
                              fontSize: "13px",
                              fontWeight: 600,
                              cursor: "pointer",
                              transition: "all 0.2s ease",
                            }}
                          >
                            {opt.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                      <div>
                        <label
                          style={{
                            fontSize: "12px",
                            fontWeight: 700,
                            color: "rgba(255,255,255,0.5)",
                            letterSpacing: "0.06em",
                            display: "block",
                            marginBottom: "6px",
                          }}
                        >
                          Nom & Prénom
                        </label>
                        <input
                          required
                          placeholder="Jean Dupont"
                          value={formData.name}
                          onChange={e => setFormData(f => ({ ...f, name: e.target.value }))}
                        />
                      </div>
                      <div>
                        <label
                          style={{
                            fontSize: "12px",
                            fontWeight: 700,
                            color: "rgba(255,255,255,0.5)",
                            letterSpacing: "0.06em",
                            display: "block",
                            marginBottom: "6px",
                          }}
                        >
                          Téléphone
                        </label>
                        <input
                          required
                          placeholder="06 XX XX XX XX"
                          value={formData.phone}
                          onChange={e => setFormData(f => ({ ...f, phone: e.target.value }))}
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        style={{
                          fontSize: "12px",
                          fontWeight: 700,
                          color: "rgba(255,255,255,0.5)",
                          letterSpacing: "0.06em",
                          display: "block",
                          marginBottom: "6px",
                        }}
                      >
                        Email
                      </label>
                      <input
                        required
                        type="email"
                        placeholder="jean.dupont@email.com"
                        value={formData.email}
                        onChange={e => setFormData(f => ({ ...f, email: e.target.value }))}
                      />
                    </div>

                    <div>
                      <label
                        style={{
                          fontSize: "12px",
                          fontWeight: 700,
                          color: "rgba(255,255,255,0.5)",
                          letterSpacing: "0.06em",
                          display: "block",
                          marginBottom: "6px",
                        }}
                      >
                        Votre message (optionnel)
                      </label>
                      <textarea
                        placeholder="Décrivez votre besoin, vos biens, vos objectifs..."
                        rows={4}
                        value={formData.message}
                        onChange={e => setFormData(f => ({ ...f, message: e.target.value }))}
                        style={{ resize: "vertical" }}
                      />
                    </div>

                    <button
                      type="submit"
                      className="btn-primary flex items-center justify-center gap-2"
                      style={{
                        padding: "16px",
                        borderRadius: "14px",
                        fontSize: "16px",
                        marginTop: "8px",
                      }}
                    >
                      Demander mon audit gratuit
                      <ArrowRight size={18} />
                    </button>

                    <p
                      style={{
                        fontSize: "11px",
                        color: "rgba(255,255,255,0.25)",
                        textAlign: "center",
                        lineHeight: 1.5,
                      }}
                    >
                      En soumettant ce formulaire, vous acceptez d&apos;être contacté
                      par un conseiller LOCAGESTION. Données protégées — RGPD.
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

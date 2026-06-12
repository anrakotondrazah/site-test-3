"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Logo from "@/components/ui/Logo";
import { Search, Menu, X, ChevronDown, Phone, User } from "lucide-react";

const navItems = [
  {
    label: "Nos Services",
    href: "#services",
    dropdown: [
      { label: "Gestion Locative", href: "#gestion" },
      { label: "Mise en Location", href: "#location" },
      { label: "Comptabilité", href: "#comptabilite" },
      { label: "Maintenance Technique", href: "#maintenance" },
      { label: "Recouvrement", href: "#recouvrement" },
    ],
  },
  {
    label: "Propriétaires",
    href: "#proprietaires",
    dropdown: [
      { label: "Comment ça marche", href: "#processus" },
      { label: "Nos garanties (GLI)", href: "#garanties" },
      { label: "Estimation gratuite", href: "#estimation" },
    ],
  },
  {
    label: "Partenaires B2B",
    href: "#partenaires",
    dropdown: [
      { label: "Agences Immobilières", href: "#agences" },
      { label: "CGP & Conseillers", href: "#cgp" },
      { label: "Devenir Partenaire", href: "#devenir-partenaire" },
    ],
  },
  { label: "PropTech & IA", href: "#ia", dropdown: [] },
  { label: "À Propos", href: "#about", dropdown: [] },
];

const suggestions = [
  "Gestion locative Toulouse",
  "Garantie loyers impayés",
  "Mise en location appartement",
  "Devenir agence partenaire",
  "Comptabilité immobilière",
  "Recouvrement de loyers",
  "Mandat de gestion",
  "GLI protection juridique",
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchFocused, setSearchFocused] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setSearchFocused(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const filteredSuggestions = suggestions.filter(s =>
    searchValue ? s.toLowerCase().includes(searchValue.toLowerCase()) : true
  );

  return (
    <>
      {/* Top bar */}
      <div
        style={{
          background: "linear-gradient(90deg, #4B0099, #00C5F2)",
          fontSize: "12px",
          padding: "6px 0",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          <span style={{ color: "rgba(255,255,255,0.9)", letterSpacing: "0.05em" }}>
            🏆 N°1 EN FRANCE — SERVICE DE GESTION IMMOBILIÈRE DEPUIS 1996
          </span>
          <div className="hidden md:flex items-center gap-6" style={{ color: "rgba(255,255,255,0.9)" }}>
            <span>📧 contact@locagestion.com</span>
            <span>📍 Toulouse — France</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 100,
          transition: "all 0.3s ease",
          background: scrolled
            ? "rgba(10, 0, 18, 0.95)"
            : "rgba(10, 0, 18, 0.85)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(0, 197, 242, 0.15)",
          boxShadow: scrolled ? "0 4px 30px rgba(0,0,0,0.5)" : "none",
        }}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-4" style={{ height: "72px" }}>
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <Logo size="sm" white />
            </Link>

            {/* Search bar - dominant center element */}
            <div ref={searchRef} className="flex-1 relative max-w-2xl mx-4">
              <div
                className="search-bar flex items-center rounded-xl overflow-hidden"
                style={{
                  border: searchFocused
                    ? "1.5px solid #00C5F2"
                    : "1.5px solid rgba(0, 197, 242, 0.3)",
                  boxShadow: searchFocused
                    ? "0 0 20px rgba(0, 197, 242, 0.25)"
                    : "none",
                  transition: "all 0.3s ease",
                  background: "rgba(255,255,255,0.07)",
                }}
              >
                <Search
                  size={18}
                  style={{ color: "#00C5F2", marginLeft: "14px", flexShrink: 0 }}
                />
                <input
                  type="text"
                  placeholder="Rechercher un service, une information..."
                  value={searchValue}
                  onChange={e => setSearchValue(e.target.value)}
                  onFocus={() => setSearchFocused(true)}
                  style={{
                    background: "transparent",
                    border: "none",
                    color: "white",
                    fontSize: "14px",
                    padding: "10px 12px",
                    flex: 1,
                    outline: "none",
                    boxShadow: "none",
                    width: "100%",
                  }}
                />
                <button
                  className="btn-primary px-5 py-2.5 text-sm font-bold"
                  style={{ borderRadius: "0 10px 10px 0", flexShrink: 0 }}
                >
                  Rechercher
                </button>
              </div>

              {/* Search suggestions dropdown */}
              {searchFocused && (
                <div
                  className="absolute top-full left-0 right-0 mt-1 rounded-xl overflow-hidden z-50"
                  style={{
                    background: "rgba(10, 0, 18, 0.97)",
                    border: "1px solid rgba(0, 197, 242, 0.3)",
                    boxShadow: "0 20px 50px rgba(0,0,0,0.5)",
                  }}
                >
                  <div style={{ padding: "8px 0" }}>
                    <div
                      style={{
                        fontSize: "11px",
                        color: "rgba(255,255,255,0.4)",
                        padding: "8px 16px 4px",
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                      }}
                    >
                      Suggestions
                    </div>
                    {filteredSuggestions.map((s, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-3 cursor-pointer"
                        style={{
                          padding: "10px 16px",
                          transition: "background 0.2s ease",
                          fontSize: "14px",
                          color: "rgba(255,255,255,0.8)",
                        }}
                        onMouseEnter={e =>
                          (e.currentTarget.style.background = "rgba(0, 197, 242, 0.08)")
                        }
                        onMouseLeave={e =>
                          (e.currentTarget.style.background = "transparent")
                        }
                        onClick={() => {
                          setSearchValue(s);
                          setSearchFocused(false);
                        }}
                      >
                        <Search size={14} style={{ color: "#00C5F2", opacity: 0.6 }} />
                        {s}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Nav items - desktop */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map(item => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(item.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <a
                    href={item.href}
                    className="flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium"
                    style={{
                      color: "rgba(255,255,255,0.85)",
                      transition: "all 0.2s ease",
                      background:
                        activeDropdown === item.label
                          ? "rgba(0, 197, 242, 0.1)"
                          : "transparent",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {item.label}
                    {item.dropdown.length > 0 && (
                      <ChevronDown
                        size={14}
                        style={{
                          transition: "transform 0.2s ease",
                          transform:
                            activeDropdown === item.label
                              ? "rotate(180deg)"
                              : "rotate(0deg)",
                          color: "#00C5F2",
                        }}
                      />
                    )}
                  </a>

                  {item.dropdown.length > 0 && activeDropdown === item.label && (
                    <div
                      className="absolute top-full left-0 mt-1 rounded-xl overflow-hidden"
                      style={{
                        background: "rgba(10, 0, 18, 0.98)",
                        border: "1px solid rgba(0, 197, 242, 0.25)",
                        boxShadow: "0 20px 50px rgba(0,0,0,0.6)",
                        minWidth: "200px",
                        zIndex: 200,
                      }}
                    >
                      {item.dropdown.map((sub, i) => (
                        <a
                          key={i}
                          href={sub.href}
                          className="block px-4 py-3 text-sm"
                          style={{
                            color: "rgba(255,255,255,0.75)",
                            transition: "all 0.2s ease",
                            borderBottom:
                              i < item.dropdown.length - 1
                                ? "1px solid rgba(255,255,255,0.05)"
                                : "none",
                          }}
                          onMouseEnter={e => {
                            e.currentTarget.style.color = "#00C5F2";
                            e.currentTarget.style.background =
                              "rgba(0, 197, 242, 0.08)";
                            e.currentTarget.style.paddingLeft = "20px";
                          }}
                          onMouseLeave={e => {
                            e.currentTarget.style.color = "rgba(255,255,255,0.75)";
                            e.currentTarget.style.background = "transparent";
                            e.currentTarget.style.paddingLeft = "16px";
                          }}
                        >
                          {sub.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Action buttons */}
            <div className="hidden md:flex items-center gap-2 flex-shrink-0">
              <a
                href="tel:+33561000000"
                className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm"
                style={{ color: "#00C5F2", border: "1px solid rgba(0, 197, 242, 0.3)" }}
              >
                <Phone size={15} />
                <span className="hidden xl:inline">Nous appeler</span>
              </a>
              <button className="btn-primary px-4 py-2 rounded-xl text-sm">
                Audit Gratuit
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              className="lg:hidden ml-auto"
              style={{ color: "white" }}
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div
            style={{
              background: "rgba(10, 0, 18, 0.98)",
              borderTop: "1px solid rgba(0, 197, 242, 0.2)",
              padding: "20px",
            }}
          >
            {navItems.map(item => (
              <a
                key={item.label}
                href={item.href}
                className="block py-3 text-base"
                style={{
                  color: "rgba(255,255,255,0.85)",
                  borderBottom: "1px solid rgba(255,255,255,0.06)",
                }}
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="flex gap-3 mt-4">
              <button className="btn-secondary flex-1 py-3 rounded-xl text-sm">
                Nous appeler
              </button>
              <button className="btn-primary flex-1 py-3 rounded-xl text-sm">
                Audit Gratuit
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}

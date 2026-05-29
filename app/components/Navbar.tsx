"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLang } from "@/lib/LangContext";
import { useTheme } from "@/lib/ThemeContext";
import { languages, Lang } from "@/lib/i18n";

export default function Navbar() {
  const { t, lang, setLang } = useLang();
  const { theme, toggle } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { key: "about", label: t.nav.about },
    { key: "skills", label: t.nav.skills },
    { key: "journey", label: t.nav.journey },
    { key: "projects", label: t.nav.projects },
    { key: "contact", label: t.nav.contact },
  ];

  const current = languages.find(l => l.code === lang)!;

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-5 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2"
      style={{
        background: "var(--glass)",
        backdropFilter: "blur(28px)",
        WebkitBackdropFilter: "blur(28px)",
        border: "1px solid var(--glass-border)",
        borderRadius: "50px",
        padding: "10px 20px",
        whiteSpace: "nowrap",
        transition: "box-shadow 0.3s",
        boxShadow: scrolled ? "0 8px 40px rgba(0,0,0,0.3)" : "none",
      }}
    >
      {/* Nav links */}
      <div className="hidden md:flex items-center gap-1">
        {navLinks.map(link => (
          <a
            key={link.key}
            href={`#${link.key}`}
            style={{
              color: "var(--text2)",
              fontSize: "14px",
              fontWeight: 500,
              padding: "8px 14px",
              borderRadius: "50px",
              textDecoration: "none",
              fontFamily: "var(--font-dm)",
              transition: "color 0.2s, background 0.2s",
            }}
            onMouseEnter={e => {
              (e.target as HTMLElement).style.color = "var(--text)";
              (e.target as HTMLElement).style.background = "var(--card)";
            }}
            onMouseLeave={e => {
              (e.target as HTMLElement).style.color = "var(--text2)";
              (e.target as HTMLElement).style.background = "transparent";
            }}
          >
            {link.label}
          </a>
        ))}
      </div>

      <div style={{ width: 1, height: 20, background: "var(--border)", margin: "0 4px" }} className="hidden md:block" />

      <div className="flex items-center gap-2">
        {/* Language switcher */}
        <div className="relative" id="langSwitcher">
          <button
            onClick={() => setLangOpen(o => !o)}
            style={{
              background: "var(--card)",
              border: "1px solid var(--border)",
              borderRadius: "50px",
              padding: "7px 14px",
              cursor: "pointer",
              fontSize: "13px",
              fontWeight: 500,
              color: "var(--text2)",
              display: "flex",
              alignItems: "center",
              gap: "6px",
              fontFamily: "var(--font-dm)",
              transition: "color 0.2s, border-color 0.2s",
            }}
          >
            <span>{current.flag}</span>
            <span>{current.label}</span>
            <span style={{ fontSize: "10px", transition: "transform 0.2s", transform: langOpen ? "rotate(180deg)" : "rotate(0deg)" }}>▾</span>
          </button>

          <AnimatePresence>
            {langOpen && (
              <motion.div
                initial={{ opacity: 0, y: -8, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -8, scale: 0.95 }}
                transition={{ duration: 0.15 }}
                style={{
                  position: "absolute",
                  top: "calc(100% + 8px)",
                  right: 0,
                  background: "var(--glass)",
                  backdropFilter: "blur(28px)",
                  WebkitBackdropFilter: "blur(28px)",
                  border: "1px solid var(--glass-border)",
                  borderRadius: "14px",
                  overflow: "hidden",
                  minWidth: "140px",
                  zIndex: 100,
                }}
                onMouseLeave={() => setLangOpen(false)}
              >
                {languages.map(l => (
                  <button
                    key={l.code}
                    onClick={() => { setLang(l.code as Lang); setLangOpen(false); }}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      width: "100%",
                      padding: "10px 16px",
                      background: lang === l.code ? "var(--card)" : "transparent",
                      border: "none",
                      cursor: "pointer",
                      fontSize: "13px",
                      color: lang === l.code ? "var(--text)" : "var(--text2)",
                      fontFamily: "var(--font-dm)",
                      textAlign: "left",
                      transition: "background 0.15s, color 0.15s",
                    }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "var(--card)"; (e.currentTarget as HTMLElement).style.color = "var(--text)"; }}
                    onMouseLeave={e => {
                      if (lang !== l.code) { (e.currentTarget as HTMLElement).style.background = "transparent"; (e.currentTarget as HTMLElement).style.color = "var(--text2)"; }
                    }}
                  >
                    {l.flag} {l.label} — {l.code === "en" ? "English" : l.code === "fr" ? "Français" : "Deutsch"}
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Theme toggle */}
        <button
          onClick={toggle}
          style={{
            background: "var(--card)",
            border: "1px solid var(--border)",
            borderRadius: "50px",
            padding: "7px 14px",
            cursor: "pointer",
            fontSize: "13px",
            fontWeight: 500,
            color: "var(--text2)",
            display: "flex",
            alignItems: "center",
            gap: "6px",
            fontFamily: "var(--font-dm)",
            transition: "color 0.2s, border-color 0.2s",
          }}
        >
          <span>{theme === "dark" ? "☀️" : "🌙"}</span>
          <span>{theme === "dark" ? "Light" : "Dark"}</span>
        </button>
      </div>
    </motion.nav>
  );
}

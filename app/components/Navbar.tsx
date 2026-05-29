"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLang } from "@/lib/LangContext";
import { useTheme } from "@/lib/ThemeContext";
import { languages, Lang } from "@/lib/i18n";

export default function Navbar() {
  const { t, lang, setLang } = useLang();
  const { theme, toggle } = useTheme();
  const [scrolled, setScrolled]     = useState(false);
  const [langOpen, setLangOpen]     = useState(false);
  const [menuOpen, setMenuOpen]     = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on any nav-link click
  const handleNavClick = () => setMenuOpen(false);

  const navLinks = [
    { key: "about",    label: t.nav.about    },
    { key: "skills",   label: t.nav.skills   },
    { key: "journey",  label: t.nav.journey  },
    { key: "projects", label: t.nav.projects },
    { key: "contact",  label: t.nav.contact  },
  ];

  const current = languages.find(l => l.code === lang)!;

  /* ── shared pill button style ── */
  const pillBtn: React.CSSProperties = {
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
  };

  return (
    <>
      {/* ════════════════════════════════════════════
          DESKTOP + MOBILE NAV PILL
      ════════════════════════════════════════════ */}
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="nav-pill fixed top-5 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2"
        style={{
          background: "var(--glass)",
          backdropFilter: "blur(28px)",
          WebkitBackdropFilter: "blur(28px)",
          border: "1px solid var(--glass-border)",
          borderRadius: "50px",
          padding: "10px 20px",
          transition: "box-shadow 0.3s",
          boxShadow: scrolled ? "0 8px 40px rgba(0,0,0,0.3)" : "none",
        }}
      >
        {/* ── Desktop nav links (hidden on mobile) ── */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map(link => (
            <a
              key={link.key}
              href={`#${link.key}`}
              style={{
                color: "var(--text2)", fontSize: "14px", fontWeight: 500,
                padding: "8px 14px", borderRadius: "50px", textDecoration: "none",
                fontFamily: "var(--font-dm)", transition: "color 0.2s, background 0.2s",
              }}
              onMouseEnter={e => { (e.target as HTMLElement).style.color = "var(--text)"; (e.target as HTMLElement).style.background = "var(--card)"; }}
              onMouseLeave={e => { (e.target as HTMLElement).style.color = "var(--text2)"; (e.target as HTMLElement).style.background = "transparent"; }}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop divider */}
        <div style={{ width: 1, height: 20, background: "var(--border)", margin: "0 4px" }} className="hidden md:block" />

        {/* ── Controls: lang + theme (always visible) ── */}
        <div className="nav-controls flex items-center gap-2">
          {/* Language switcher */}
          <div className="relative" id="langSwitcher">
            <button onClick={() => setLangOpen(o => !o)} style={pillBtn}>
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
                    position: "absolute", top: "calc(100% + 8px)", right: 0,
                    background: "var(--glass)", backdropFilter: "blur(28px)",
                    WebkitBackdropFilter: "blur(28px)", border: "1px solid var(--glass-border)",
                    borderRadius: "14px", overflow: "hidden", minWidth: "140px", zIndex: 100,
                  }}
                  onMouseLeave={() => setLangOpen(false)}
                >
                  {languages.map(l => (
                    <button
                      key={l.code}
                      onClick={() => { setLang(l.code as Lang); setLangOpen(false); }}
                      style={{
                        display: "flex", alignItems: "center", gap: "8px",
                        width: "100%", padding: "10px 16px",
                        background: lang === l.code ? "var(--card)" : "transparent",
                        border: "none", cursor: "pointer", fontSize: "13px",
                        color: lang === l.code ? "var(--text)" : "var(--text2)",
                        fontFamily: "var(--font-dm)", textAlign: "left",
                        transition: "background 0.15s, color 0.15s",
                      }}
                      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "var(--card)"; (e.currentTarget as HTMLElement).style.color = "var(--text)"; }}
                      onMouseLeave={e => { if (lang !== l.code) { (e.currentTarget as HTMLElement).style.background = "transparent"; (e.currentTarget as HTMLElement).style.color = "var(--text2)"; } }}
                    >
                      {l.flag} {l.label} — {l.code === "en" ? "English" : l.code === "fr" ? "Français" : "Deutsch"}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Theme toggle */}
          <button onClick={toggle} style={pillBtn}>
            <span>{theme === "dark" ? "☀️" : "🌙"}</span>
            <span>{theme === "dark" ? "Light" : "Dark"}</span>
          </button>

          {/* ── Hamburger (mobile only) ── */}
          <button
            className="md:hidden"
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Toggle menu"
            style={{
              ...pillBtn,
              padding: "7px 10px",
              flexShrink: 0,
            }}
          >
            <span style={{ display: "flex", flexDirection: "column", gap: "4px", width: "16px" }}>
              <motion.span
                animate={menuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.22 }}
                style={{ display: "block", height: "1.5px", background: "var(--text2)", borderRadius: "2px", transformOrigin: "center" }}
              />
              <motion.span
                animate={menuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                transition={{ duration: 0.18 }}
                style={{ display: "block", height: "1.5px", background: "var(--text2)", borderRadius: "2px" }}
              />
              <motion.span
                animate={menuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.22 }}
                style={{ display: "block", height: "1.5px", background: "var(--text2)", borderRadius: "2px", transformOrigin: "center" }}
              />
            </span>
          </button>
        </div>
      </motion.nav>

      {/* ════════════════════════════════════════════
          MOBILE FULL-SCREEN MENU DRAWER
      ════════════════════════════════════════════ */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden fixed z-40"
            style={{
              top: "80px",
              left: "16px",
              right: "16px",
              background: "var(--glass)",
              backdropFilter: "blur(32px)",
              WebkitBackdropFilter: "blur(32px)",
              border: "1px solid var(--glass-border)",
              borderRadius: "24px",
              overflow: "hidden",
              boxShadow: "0 20px 60px rgba(0,0,0,0.35)",
            }}
          >
            {/* Nav links */}
            <div style={{ padding: "8px" }}>
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.key}
                  href={`#${link.key}`}
                  onClick={handleNavClick}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.22, delay: i * 0.045 }}
                  style={{
                    display: "block",
                    padding: "14px 20px",
                    color: "var(--text2)",
                    textDecoration: "none",
                    fontSize: "16px",
                    fontWeight: 500,
                    fontFamily: "var(--font-dm)",
                    borderRadius: "16px",
                    transition: "background 0.18s, color 0.18s",
                  }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "var(--card)"; (e.currentTarget as HTMLElement).style.color = "var(--text)"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "transparent"; (e.currentTarget as HTMLElement).style.color = "var(--text2)"; }}
                >
                  {link.label}
                </motion.a>
              ))}
            </div>

            {/* Divider */}
            <div style={{ height: "1px", background: "var(--border)", margin: "0 16px" }} />

            {/* Bottom: close hint */}
            <div style={{ padding: "12px 20px", textAlign: "center" }}>
              <span style={{ fontSize: "12px", color: "var(--text3)", fontFamily: "var(--font-dm)" }}>
                Tap a section to navigate
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Backdrop to close menu on outside tap */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden fixed inset-0 z-30"
            onClick={() => setMenuOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
}

"use client";
import { motion } from "framer-motion";
import { useLang } from "@/lib/LangContext";

export default function HeroSection() {
  const { t } = useLang();

  const fadeItem = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
      opacity: 1, y: 0,
      transition: { duration: 0.75, delay: i * 0.1, ease: "easeOut" as const },
    }),
  };

  return (
    <section id="home" style={{ minHeight: "100vh", display: "flex", alignItems: "center", overflowX: "hidden" }}>
      <div className="section-wrap" style={{ maxWidth: 1240, margin: "0 auto", padding: "0 48px", width: "100%" }}>
        <div
          className="hero-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "72px",
            alignItems: "center",
            paddingTop: "120px",
            paddingBottom: "80px",
          }}
        >
          {/* LEFT: Hero text */}
          <div className="hero-text-col">
            <motion.div custom={0} variants={fadeItem} initial="hidden" animate="visible">
              <div className="hero-badge" style={{
                display: "inline-flex", alignItems: "center", gap: "8px",
                border: "1px solid var(--border2)", borderRadius: "50px",
                padding: "8px 20px", fontSize: "11px", letterSpacing: "0.14em",
                textTransform: "uppercase" as const, color: "var(--text2)",
                marginBottom: "36px", fontFamily: "var(--font-dm)", fontWeight: 500,
              }}>
                <span>⚡</span><span>{t.hero.badge}</span>
              </div>
            </motion.div>

            <motion.h1
              custom={1} variants={fadeItem} initial="hidden" animate="visible"
              style={{
                fontFamily: "var(--font-syne)", fontSize: "clamp(44px,7.5vw,86px)",
                fontWeight: 800, lineHeight: 0.98, letterSpacing: "-0.04em", marginBottom: "28px",
              }}
            >
              {t.hero.line1}<br />{t.hero.line2}<br />{t.hero.line3}<br />
              <span style={{ color: "var(--text3)" }}>{t.hero.line4}</span>
            </motion.h1>

            <motion.p
              custom={2} variants={fadeItem} initial="hidden" animate="visible"
              style={{ fontSize: "16px", color: "var(--text2)", lineHeight: 1.8, maxWidth: "400px", marginBottom: "44px", fontFamily: "var(--font-dm)", fontWeight: 300 }}
            >
              {t.hero.sub}
            </motion.p>

            <motion.div
              custom={3} variants={fadeItem} initial="hidden" animate="visible"
              style={{ display: "flex", gap: "12px", flexWrap: "wrap" as const }}
            >
              <a href="#projects" style={{
                background: "var(--text)", color: "var(--bg)", borderRadius: "50px",
                padding: "14px 26px", fontSize: "15px", fontWeight: 600,
                cursor: "pointer", textDecoration: "none", fontFamily: "var(--font-dm)", display: "inline-flex",
                transition: "opacity 0.2s, transform 0.2s",
              }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.opacity = "0.86"; (e.currentTarget as HTMLElement).style.transform = "scale(1.03)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.opacity = "1"; (e.currentTarget as HTMLElement).style.transform = "scale(1)"; }}
              >{t.hero.btn1}</a>
              <a href="#journey" style={{
                background: "transparent", color: "var(--text)", border: "1px solid var(--border2)",
                borderRadius: "50px", padding: "14px 26px", fontSize: "15px", fontWeight: 500,
                cursor: "pointer", textDecoration: "none", fontFamily: "var(--font-dm)", display: "inline-flex",
                transition: "background 0.2s, border-color 0.2s",
              }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "var(--card)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "transparent"; }}
              >{t.hero.btn2}</a>
            </motion.div>
          </div>

          {/* RIGHT: Code Card */}
          <motion.div
            className="hero-code-wrapper"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.25, ease: "easeOut" }}
            style={{ width: "100%", minWidth: 0, display: "flex", justifyContent: "center", alignItems: "center" }}
          >
            <div className="code-card-outer" style={{
              width: "100%",
              maxWidth: "520px",
              margin: "0 auto",
              background: "#111116",
              border: "1px solid rgba(255,255,255,0.09)",
              borderRadius: "20px",
              overflow: "hidden",
              boxShadow: "0 0 60px rgba(124,58,237,0.18), 0 24px 64px rgba(0,0,0,0.5)",
              position: "relative",
            }}>

              {/* Title bar */}
              <div style={{
                padding: "18px 22px",
                borderBottom: "1px solid rgba(255,255,255,0.07)",
                display: "flex",
                alignItems: "center",
                gap: "12px",
                background: "rgba(255,255,255,0.02)",
              }}>
                <div style={{ display: "flex", gap: "7px", flexShrink: 0 }}>
                  <div style={{ width: 13, height: 13, borderRadius: "50%", background: "#ff5f57" }} />
                  <div style={{ width: 13, height: 13, borderRadius: "50%", background: "#febc2e" }} />
                  <div style={{ width: 13, height: 13, borderRadius: "50%", background: "#28c840" }} />
                </div>
                <div style={{
                  background: "rgba(255,255,255,0.08)",
                  borderRadius: "8px",
                  padding: "5px 16px",
                  fontSize: "13px",
                  color: "rgba(255,255,255,0.7)",
                  fontFamily: "'Courier New', monospace",
                  fontWeight: 500,
                  letterSpacing: "0.02em",
                }}>
                  developer.ts
                </div>
              </div>

              {/* Code body */}
              <div
                className="code-body"
                style={{
                  padding: "32px 36px 36px 36px",
                  fontFamily: "'Courier New', monospace",
                  fontSize: "14px",
                  lineHeight: "2.0",
                  letterSpacing: "0.01em",
                  overflowX: "auto",
                  WebkitOverflowScrolling: "touch" as const,
                  minWidth: 0,
                }}
              >
                <div style={{ color: "rgba(255,255,255,0.28)", marginBottom: "4px" }}>
                  {"// MERN Stack Developer, Photographer, S.M Management //"}
                </div>
                <div>
                  <span style={{ color: "#e879f9" }}>const</span>
                  {" developer = {"}
                </div>
                <div>{"  name: "}<span style={{ color: "#fbbf24" }}>{"'Ilyass'"}</span>{","}</div>
                <div>{"  role: "}<span style={{ color: "#fbbf24" }}>{"'MERN Stack Developer'"}</span>{","}</div>
                <div>
                  {"  stack: ["}
                  <span style={{ color: "#fbbf24" }}>{"'TypeScript'"}</span>{","}
                  <span style={{ color: "#fbbf24" }}>{"'React'"}</span>{","}
                  <span style={{ color: "#fbbf24" }}>{"'Next JS'"}</span>{","}
                  <span style={{ color: "#fbbf24" }}>{"'Tailwind CSS'"}</span>
                  {"] ,"}
                </div>
                <div>{"  style: "}<span style={{ color: "#fbbf24" }}>{"'minimal premium, creative'"}</span>{","}</div>
                <div>
                  {"  mode: ["}
                  <span style={{ color: "#fbbf24" }}>{"'Dark'"}</span>{","}
                  <span style={{ color: "#fbbf24" }}>{"'Light'"}</span>
                  {"]"}
                </div>
                <div>{"  };"}</div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
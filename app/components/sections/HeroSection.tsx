"use client";
import { motion } from "framer-motion";
import { useLang } from "@/lib/LangContext";

export default function HeroSection() {
  const { t } = useLang();

  const fadeItem = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
      opacity: 1, y: 0,
      transition: { duration: 0.7, delay: i * 0.1, ease: "easeOut" as const },
    }),
  };

  return (
    <section id="home" style={{ minHeight: "100vh", display: "flex", alignItems: "center" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px", width: "100%" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "80px",
            alignItems: "center",
            paddingTop: "110px",
            paddingBottom: "60px",
          }}
          className="hero-grid"
        >
          {/* LEFT: Hero text */}
          <div>
            <motion.div custom={0} variants={fadeItem} initial="hidden" animate="visible">
              <div style={{
                display: "inline-flex", alignItems: "center", gap: "8px",
                border: "1px solid var(--border2)", borderRadius: "50px",
                padding: "8px 18px", fontSize: "11px", letterSpacing: "0.12em",
                textTransform: "uppercase" as const, color: "var(--text2)",
                marginBottom: "32px", fontFamily: "var(--font-dm)", fontWeight: 500,
              }}>
                <span>⚡</span><span>{t.hero.badge}</span>
              </div>
            </motion.div>

            <motion.h1
              custom={1} variants={fadeItem} initial="hidden" animate="visible"
              style={{
                fontFamily: "var(--font-syne)", fontSize: "clamp(52px,7vw,82px)",
                fontWeight: 800, lineHeight: 1.0, letterSpacing: "-0.03em", marginBottom: "28px",
              }}
            >
              {t.hero.line1}<br />{t.hero.line2}<br />{t.hero.line3}<br />
              <span style={{ color: "var(--text3)" }}>{t.hero.line4}</span>
            </motion.h1>

            <motion.p
              custom={2} variants={fadeItem} initial="hidden" animate="visible"
              style={{ fontSize: "17px", color: "var(--text2)", lineHeight: 1.75, maxWidth: "420px", marginBottom: "40px", fontFamily: "var(--font-dm)", fontWeight: 300 }}
            >
              {t.hero.sub}
            </motion.p>

            <motion.div custom={3} variants={fadeItem} initial="hidden" animate="visible" style={{ display: "flex", gap: "12px", flexWrap: "wrap" as const }}>
              <a href="#projects" style={{
                background: "var(--text)", color: "var(--bg)", border: "none",
                borderRadius: "50px", padding: "14px 28px", fontSize: "15px", fontWeight: 600,
                cursor: "pointer", textDecoration: "none", fontFamily: "var(--font-dm)", display: "inline-flex",
              }}>{t.hero.btn1}</a>
              <a href="#journey" style={{
                background: "transparent", color: "var(--text)", border: "1px solid var(--border2)",
                borderRadius: "50px", padding: "14px 28px", fontSize: "15px", fontWeight: 500,
                cursor: "pointer", textDecoration: "none", fontFamily: "var(--font-dm)", display: "inline-flex",
              }}>{t.hero.btn2}</a>
            </motion.div>
          </div>

          {/* RIGHT: Code card + photo */}
          <motion.div
            initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
            style={{ display: "flex", flexDirection: "column", gap: "20px" }}
          >
            {/* Premium Code Card */}
            <div style={{
              background: "var(--bg3)", border: "1px solid var(--border2)", borderRadius: "20px",
              overflow: "hidden", boxShadow: "0 0 60px var(--glow), 0 20px 60px rgba(0,0,0,0.4)",
              position: "relative",
            }}>
              {/* Top glow line */}
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "1px", background: "linear-gradient(90deg, transparent, rgba(124,58,237,0.6), transparent)" }} />

              {/* Header */}
              <div style={{ padding: "18px 24px", borderBottom: "1px solid var(--border)", display: "flex", alignItems: "center", gap: "10px", background: "rgba(0,0,0,0.15)" }}>
                <div style={{ display: "flex", gap: "7px" }}>
                  <div style={{ width: 13, height: 13, borderRadius: "50%", background: "#ff5f57" }} />
                  <div style={{ width: 13, height: 13, borderRadius: "50%", background: "#febc2e" }} />
                  <div style={{ width: 13, height: 13, borderRadius: "50%", background: "#28c840" }} />
                </div>
                <span style={{ fontSize: "12px", color: "var(--text3)", letterSpacing: "0.08em", marginLeft: "auto", fontFamily: "var(--font-dm)", fontWeight: 500 }}>developer.ts</span>
                <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#28c840", boxShadow: "0 0 8px #28c840" }} />
              </div>

              {/* Code body */}
              <div style={{ padding: "32px 28px", fontFamily: "'Courier New', monospace", fontSize: "14.5px", lineHeight: 2.0, letterSpacing: "0.01em" }}>
                <span style={{ color: "var(--text3)" }}>{"// MERN Stack Developer"}</span><br />
                <span style={{ color: "#e879f9" }}>const</span>{" "}
                <span style={{ color: "#c4b5fd" }}>developer</span>{" "}
                <span style={{ color: "var(--text3)" }}>=</span>{" "}
                <span style={{ color: "var(--text2)" }}>{"{"}</span><br />
                &nbsp;&nbsp;<span style={{ color: "#86efac" }}>name</span><span style={{ color: "var(--text3)" }}>:</span>{" "}
                <span style={{ color: "#fbbf24" }}>&#39;Ilyass&#39;</span><span style={{ color: "var(--text3)" }}>,</span><br />
                &nbsp;&nbsp;<span style={{ color: "#86efac" }}>role</span><span style={{ color: "var(--text3)" }}>:</span>{" "}
                <span style={{ color: "#fbbf24" }}>&#39;MERN Stack Dev&#39;</span><span style={{ color: "var(--text3)" }}>,</span><br />
                &nbsp;&nbsp;<span style={{ color: "#86efac" }}>stack</span><span style={{ color: "var(--text3)" }}>: [</span><br />
                &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: "#fbbf24" }}>&#39;TypeScript&#39;</span><span style={{ color: "var(--text3)" }}>,</span><br />
                &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: "#fbbf24" }}>&#39;React&#39;</span><span style={{ color: "var(--text3)" }}>,</span><br />
                &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: "#fbbf24" }}>&#39;Tailwind CSS&#39;</span><span style={{ color: "var(--text3)" }}>,</span><br />
                &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: "#a78bfa" }}>&#39;Python&#39;</span>{" "}<span style={{ color: "var(--text3)" }}>{"// coming soon"}</span><br />
                &nbsp;&nbsp;<span style={{ color: "var(--text3)" }}>],</span><br />
                &nbsp;&nbsp;<span style={{ color: "#86efac" }}>style</span><span style={{ color: "var(--text3)" }}>:</span>{" "}
                <span style={{ color: "#fbbf24" }}>&#39;minimal premium&#39;</span><span style={{ color: "var(--text3)" }}>,</span><br />
                &nbsp;&nbsp;<span style={{ color: "#86efac" }}>mode</span><span style={{ color: "var(--text3)" }}>: [</span>
                <span style={{ color: "#fbbf24" }}>&#39;dark&#39;</span><span style={{ color: "var(--text3)" }}>,</span>{" "}
                <span style={{ color: "#fbbf24" }}>&#39;light&#39;</span><span style={{ color: "var(--text3)" }}>]</span><br />
                <span style={{ color: "var(--text2)" }}>{"}"}</span><span style={{ color: "var(--text3)" }}>;</span>
              </div>
            </div>

            {/* Photo slot — clean, no placeholder text */}
            <div id="hero-photo" style={{
              background: "var(--bg3)", border: "1px solid var(--border)",
              borderRadius: "20px", height: "200px", overflow: "hidden", position: "relative",
            }} />
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </section>
  );
}

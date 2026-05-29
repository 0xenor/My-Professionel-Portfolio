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
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 24px", width: "100%" }}>
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
          <div>
            <motion.div custom={0} variants={fadeItem} initial="hidden" animate="visible">
              <div style={{
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

          {/* RIGHT: Premium Code Card */}
          <motion.div
            initial={{ opacity: 0, x: 44 }} animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.25, ease: "easeOut" }}
            style={{ width: "100%", minWidth: 0 }}
          >
            <div className="code-card-outer" style={{
              background: "#0f0f0f",
              border: "1px solid rgba(255,255,255,0.11)",
              borderRadius: "24px",
              overflow: "hidden",
              boxShadow: "0 0 0 1px rgba(124,58,237,0.08), 0 0 80px rgba(124,58,237,0.22), 0 32px 80px rgba(0,0,0,0.55)",
              position: "relative",
              width: "100%",
              minWidth: 0,
            }}>
              {/* Top purple accent line */}
              <div style={{
                position: "absolute", top: 0, left: 0, right: 0, height: "2px",
                background: "linear-gradient(90deg, transparent 0%, rgba(124,58,237,0.8) 40%, rgba(159,103,255,0.8) 60%, transparent 100%)",
              }} />

              {/* Title bar */}
              <div className="code-titlebar" style={{
                padding: "16px 20px",
                borderBottom: "1px solid rgba(255,255,255,0.07)",
                display: "flex", alignItems: "center", gap: "10px",
                background: "rgba(255,255,255,0.02)",
                flexWrap: "nowrap" as const,
                minWidth: 0,
              }}>
                {/* Traffic lights */}
                <div style={{ display: "flex", gap: "7px", flexShrink: 0 }}>
                  <div style={{ width: 13, height: 13, borderRadius: "50%", background: "#ff5f57", boxShadow: "0 0 6px rgba(255,95,87,0.4)" }} />
                  <div style={{ width: 13, height: 13, borderRadius: "50%", background: "#febc2e", boxShadow: "0 0 6px rgba(254,188,46,0.4)" }} />
                  <div style={{ width: 13, height: 13, borderRadius: "50%", background: "#28c840", boxShadow: "0 0 6px rgba(40,200,64,0.4)" }} />
                </div>
                {/* File tab */}
                <div style={{
                  marginLeft: "10px", background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.08)", borderRadius: "7px",
                  padding: "4px 12px", display: "flex", alignItems: "center", gap: "6px", flexShrink: 0,
                }}>
                  <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#a78bfa" }} />
                  <span style={{ fontSize: "11px", color: "rgba(255,255,255,0.55)", fontFamily: "var(--font-dm)", fontWeight: 400 }}>
                    developer.ts
                  </span>
                </div>
                {/* Status — hidden on very small screens via CSS */}
                <div className="code-status" style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: "6px", flexShrink: 0 }}>
                  <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#28c840", boxShadow: "0 0 8px rgba(40,200,64,0.7)" }} />
                  <span style={{ fontSize: "10px", color: "rgba(255,255,255,0.28)", fontFamily: "var(--font-dm)", letterSpacing: "0.08em", textTransform: "uppercase" as const, whiteSpace: "nowrap" as const }}>
                    CURRENT FOCUS
                  </span>
                </div>
              </div>

              {/* Line numbers + Code body */}
              <div style={{ display: "flex", width: "100%", minWidth: 0 }}>
                {/* Line numbers — hidden on mobile */}
                <div className="code-linenos" style={{
                  padding: "28px 0 28px 18px",
                  color: "rgba(255,255,255,0.14)",
                  fontFamily: "'Courier New', monospace",
                  fontSize: "13px",
                  lineHeight: "2.05",
                  textAlign: "right" as const,
                  userSelect: "none" as const,
                  flexShrink: 0,
                  minWidth: "38px",
                }}>
                  {[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15].map(n => (
                    <div key={n}>{n}</div>
                  ))}
                </div>

                {/* Divider */}
                <div className="code-linenos" style={{ width: "1px", background: "rgba(255,255,255,0.06)", margin: "20px 0", flexShrink: 0 }} />

                {/* Scrollable code area */}
                <div style={{
                  padding: "28px 24px 28px 20px",
                  fontFamily: "'Courier New', 'Fira Code', monospace",
                  lineHeight: "2.05",
                  letterSpacing: "0.01em",
                  flex: 1,
                  minWidth: 0,
                  overflowX: "auto" as const,
                  WebkitOverflowScrolling: "touch" as const,
                }} className="code-body">
                  <div><span style={{ color: "rgba(255,255,255,0.25)" }}>{"// MERN Stack Developer"}</span></div>
                  <div>
                    <span style={{ color: "#e879f9" }}>const</span>
                    {" "}<span style={{ color: "#c4b5fd" }}>developer</span>
                    {" "}<span style={{ color: "rgba(255,255,255,0.4)" }}>=</span>
                    {" "}<span style={{ color: "rgba(255,255,255,0.6)" }}>{"{"}</span>
                  </div>
                  <div>
                    {"  "}<span style={{ color: "#86efac" }}>name</span>
                    <span style={{ color: "rgba(255,255,255,0.3)" }}>:</span>
                    {" "}<span style={{ color: "#fbbf24" }}>&#39;Ilyass&#39;</span>
                    <span style={{ color: "rgba(255,255,255,0.3)" }}>,</span>
                  </div>
                  <div>
                    {"  "}<span style={{ color: "#86efac" }}>role</span>
                    <span style={{ color: "rgba(255,255,255,0.3)" }}>:</span>
                    {" "}<span style={{ color: "#fbbf24" }}>&#39;MERN Stack Developer&#39;</span>
                    <span style={{ color: "rgba(255,255,255,0.3)" }}>,</span>
                  </div>
                  <div>
                    {"  "}<span style={{ color: "#86efac" }}>stack</span>
                    <span style={{ color: "rgba(255,255,255,0.3)" }}>: [</span>
                  </div>
                  <div>{"    "}<span style={{ color: "#fbbf24" }}>&#39;TypeScript&#39;</span><span style={{ color: "rgba(255,255,255,0.3)" }}>,</span></div>
                  <div>{"    "}<span style={{ color: "#fbbf24" }}>&#39;React&#39;</span><span style={{ color: "rgba(255,255,255,0.3)" }}>,</span></div>
                  <div>{"    "}<span style={{ color: "#fbbf24" }}>&#39;Tailwind CSS&#39;</span><span style={{ color: "rgba(255,255,255,0.3)" }}>,</span></div>
                  <div>
                    {"    "}<span style={{ color: "#a78bfa" }}>&#39;Python&#39;</span>
                    {" "}<span style={{ color: "rgba(255,255,255,0.22)" }}>{"// coming soon"}</span>
                  </div>
                  <div>{"  "}<span style={{ color: "rgba(255,255,255,0.3)" }}>],</span></div>
                  <div>
                    {"  "}<span style={{ color: "#86efac" }}>style</span>
                    <span style={{ color: "rgba(255,255,255,0.3)" }}>:</span>
                    {" "}<span style={{ color: "#fbbf24" }}>&#39;minimal premium&#39;</span>
                    <span style={{ color: "rgba(255,255,255,0.3)" }}>,</span>
                  </div>
                  <div>
                    {"  "}<span style={{ color: "#86efac" }}>mode</span>
                    <span style={{ color: "rgba(255,255,255,0.3)" }}>: [</span>
                    <span style={{ color: "#fbbf24" }}>&#39;dark&#39;</span>
                    <span style={{ color: "rgba(255,255,255,0.3)" }}>, </span>
                    <span style={{ color: "#fbbf24" }}>&#39;light&#39;</span>
                    <span style={{ color: "rgba(255,255,255,0.3)" }}>]</span>
                  </div>
                  <div>
                    <span style={{ color: "rgba(255,255,255,0.6)" }}>{"}"}</span>
                    <span style={{ color: "rgba(255,255,255,0.3)" }}>;</span>
                  </div>
                </div>
              </div>

              {/* Bottom status bar */}
              <div style={{
                borderTop: "1px solid rgba(255,255,255,0.06)",
                padding: "11px 20px",
                display: "flex", alignItems: "center", gap: "16px",
                background: "rgba(255,255,255,0.02)",
              }}>
                <span style={{ fontSize: "11px", color: "rgba(255,255,255,0.2)", fontFamily: "var(--font-dm)", letterSpacing: "0.05em" }}>TypeScript</span>
                <span style={{ fontSize: "11px", color: "rgba(255,255,255,0.12)", fontFamily: "var(--font-dm)" }}>UTF-8</span>
                <span style={{ marginLeft: "auto", fontSize: "11px", color: "rgba(124,58,237,0.7)", fontFamily: "var(--font-dm)", fontWeight: 500, whiteSpace: "nowrap" as const }}>● MERN Stack</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        /* Mobile: single column, card below text */
        @media (max-width: 900px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
            padding-top: 100px !important;
          }
        }

        /* Tighten outer container padding on small screens */
        @media (max-width: 600px) {
          #home > div {
            padding-left: 16px !important;
            padding-right: 16px !important;
          }
        }

        /* Reduce code font size on mobile */
        @media (max-width: 600px) {
          .code-body {
            font-size: 12px !important;
            padding: 20px 16px 20px 14px !important;
          }
          .code-titlebar {
            padding: 13px 16px !important;
          }
          .code-card-outer {
            border-radius: 18px !important;
          }
        }

        /* Hide line numbers on small screens to save horizontal space */
        @media (max-width: 480px) {
          .code-linenos {
            display: none !important;
          }
          .code-status {
            display: none !important;
          }
        }

        /* Scrollbar styling inside code block */
        .code-body::-webkit-scrollbar {
          height: 3px;
        }
        .code-body::-webkit-scrollbar-track {
          background: transparent;
        }
        .code-body::-webkit-scrollbar-thumb {
          background: rgba(124,58,237,0.4);
          border-radius: 10px;
        }
      `}</style>
    </section>
  );
}

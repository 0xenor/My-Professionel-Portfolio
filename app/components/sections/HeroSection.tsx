"use client";

import { motion } from "framer-motion";
import { useLang } from "@/lib/LangContext";

export default function HeroSection() {
  const { t } = useLang();

  const fadeItem = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.75,
        delay: i * 0.1,
        ease: "easeOut" as const,
      },
    }),
  };

  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        overflowX: "hidden",
      }}
    >
      <div
        className="section-wrap"
        style={{
          maxWidth: 1240,
          margin: "0 auto",
          padding: "0 48px",
          width: "100%",
        }}
      >
        <div
          className="hero-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "0.9fr 1.1fr",
            gap: "72px",
            alignItems: "center",
            paddingTop: "120px",
            paddingBottom: "80px",
          }}
        >
          {/* LEFT */}
          <div>
            <motion.div
              custom={0}
              variants={fadeItem}
              initial="hidden"
              animate="visible"
            >
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  border: "1px solid var(--border2)",
                  borderRadius: "50px",
                  padding: "8px 20px",
                  fontSize: "11px",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "var(--text2)",
                  marginBottom: "36px",
                }}
              >
                ⚡ {t.hero.badge}
              </div>
            </motion.div>

            <motion.h1
              custom={1}
              variants={fadeItem}
              initial="hidden"
              animate="visible"
              style={{
                fontFamily: "var(--font-syne)",
                fontSize: "clamp(44px,7.5vw,86px)",
                fontWeight: 800,
                lineHeight: 0.98,
                letterSpacing: "-0.04em",
                marginBottom: "28px",
              }}
            >
              {t.hero.line1}
              <br />
              {t.hero.line2}
              <br />
              {t.hero.line3}
              <br />
              <span style={{ color: "var(--text3)" }}>
                {t.hero.line4}
              </span>
            </motion.h1>

            <motion.p
              custom={2}
              variants={fadeItem}
              initial="hidden"
              animate="visible"
              style={{
                fontSize: "16px",
                color: "var(--text2)",
                lineHeight: 1.8,
                maxWidth: "400px",
                marginBottom: "44px",
              }}
            >
              {t.hero.sub}
            </motion.p>
          </div>


          {/* RIGHT */}
          <motion.div
            className="hero-code-wrapper"
            initial={{ opacity: 0, x: 44 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.25 }}
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div
              className="code-card-outer"
              style={{
                width: "100%",
                maxWidth: "620px",
                margin: "0 auto",
                background: "#0f0f0f",
                border: "1px solid rgba(255,255,255,0.11)",
                borderRadius: "24px",
                overflow: "hidden",
                boxShadow:
                  "0 0 0 1px rgba(124,58,237,0.08),0 0 80px rgba(124,58,237,0.22),0 32px 80px rgba(0,0,0,0.55)",
              }}
            >
              {/* TITLE BAR */}
              <div
                style={{
                  padding: "20px 28px",
                  borderBottom:
                    "1px solid rgba(255,255,255,0.07)",
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    gap: "8px",
                  }}
                >
                  <div
                    style={{
                      width: 14,
                      height: 14,
                      borderRadius: "50%",
                      background: "#ff5f57",
                    }}
                  />
                  <div
                    style={{
                      width: 14,
                      height: 14,
                      borderRadius: "50%",
                      background: "#febc2e",
                    }}
                  />
                  <div
                    style={{
                      width: 14,
                      height: 14,
                      borderRadius: "50%",
                      background: "#28c840",
                    }}
                  />
                </div>

                <div
                  style={{
                    marginLeft: 12,
                    background: "rgba(255,255,255,0.06)",
                    borderRadius: 8,
                    padding: "5px 14px",
                  }}
                >
                  developer.ts
                </div>
              </div>

              {/* CODE */}
              <div
                className="code-body"
                style={{
                  padding: "40px 48px",
                  fontFamily: "'Courier New', monospace",
                  fontSize: "15px",
                  lineHeight: "2.15",
                  overflowX: "auto",
                }}
              >
                <div style={{ color: "rgba(255,255,255,.25)" }}>
                  // MERN Stack Developer
                </div>

                <div>
                  <span style={{ color: "#e879f9" }}>
                    const
                  </span>{" "}
                  developer = {"{"}
                </div>

                <div>
                  name:
                  <span style={{ color: "#fbbf24" }}>
                    {" "}
                    'Ilyass'
                  </span>
                </div>

                <div>
                  role:
                  <span style={{ color: "#fbbf24" }}>
                    {" "}
                    'MERN Stack Developer'
                  </span>
                </div>

                <div>
                  stack: [
                  <span style={{ color: "#fbbf24" }}>
                    'TypeScript'
                  </span>
                  ,
                  <span style={{ color: "#fbbf24" }}>
                    'React'
                  </span>
                  ,
                  <span style={{ color: "#fbbf24" }}>
                    'Tailwind CSS'
                  </span>
                  ]
                </div>

                <div>
                  style:
                  <span style={{ color: "#fbbf24" }}>
                    {' '}
                    'minimal premium'
                  </span>
                </div>


                <div>{"};"}</div>
              </div>
            </div>
          </motion.div>
          <motion.div
            custom={3}
            variants={fadeItem}
            initial="hidden"
            animate="visible"
            style={{
              display: "flex",
              gap: "12px",
              flexWrap: "wrap",
              alignItems: "center",
            }}
          >
            <a
              href="#projects"
              style={{
                background: "var(--text)",
                color: "var(--bg)",
                borderRadius: "50px",
                padding: "14px 26px",
                fontSize: "15px",
                fontWeight: 600,
                cursor: "pointer",
                textDecoration: "none",
                fontFamily: "var(--font-dm)",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "all 0.25s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = "0.88";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = "1";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              {t.hero.btn1}
            </a>

            <a
              href="#journey"
              style={{
                background: "transparent",
                color: "var(--text)",
                border: "1px solid var(--border2)",
                borderRadius: "50px",
                padding: "14px 26px",
                fontSize: "15px",
                fontWeight: 500,
                cursor: "pointer",
                textDecoration: "none",
                fontFamily: "var(--font-dm)",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "all 0.25s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "var(--card)";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              {t.hero.btn2}
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
"use client";
import FadeUp from "@/app/components/FadeUp";
import { useLang } from "@/lib/LangContext";

export default function ContactSection() {
  const { t } = useLang();

  const btnStyle = (primary: boolean, accent?: boolean) => ({
    background: accent ? "var(--accent)" : primary ? "transparent" : "transparent",
    color: accent ? "#fff" : "var(--text)",
    border: `1px solid ${accent ? "var(--accent)" : "var(--border2)"}`,
    borderRadius: "50px",
    padding: "14px 28px",
    fontSize: "15px",
    fontWeight: 600,
    cursor: "pointer",
    textDecoration: "none",
    fontFamily: "var(--font-dm)",
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    transition: "all 0.2s",
  });

  return (
    <>
      <section id="contact" style={{ padding: "80px 0 120px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px" }}>
          <FadeUp>
            <div
              style={{
                background: "var(--bg2)",
                border: "1px solid var(--border)",
                borderRadius: "28px",
                padding: "88px 80px",
                textAlign: "center",
                maxWidth: 900,
                margin: "0 auto",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Glow */}
              <div style={{
                position: "absolute",
                inset: 0,
                background: "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(124,58,237,0.15) 0%, transparent 70%)",
                pointerEvents: "none",
              }} />

              <div style={{ fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--text3)", marginBottom: "24px", fontFamily: "var(--font-dm)", fontWeight: 500, position: "relative" }}>
                {t.contact.label}
              </div>

              <h2
                style={{
                  fontFamily: "var(--font-syne)",
                  fontSize: "clamp(36px,5vw,64px)",
                  fontWeight: 800,
                  letterSpacing: "-0.03em",
                  lineHeight: 1.1,
                  marginBottom: "28px",
                  position: "relative",
                }}
              >
                {t.contact.title1}<br />
                <span style={{ color: "var(--text3)" }}>{t.contact.title2}</span>
              </h2>

              <p
                style={{
                  fontSize: "17px",
                  color: "var(--text2)",
                  lineHeight: 1.75,
                  maxWidth: "520px",
                  margin: "0 auto 48px",
                  fontFamily: "var(--font-dm)",
                  fontWeight: 300,
                  position: "relative",
                }}
              >
                {t.contact.desc}
              </p>

              <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap", position: "relative" }}>
                <a
                  href="#"
                  style={btnStyle(false, true)}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "var(--accent2)"; (e.currentTarget as HTMLElement).style.transform = "scale(1.03)"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "var(--accent)"; (e.currentTarget as HTMLElement).style.transform = "scale(1)"; }}
                >
                  <span>📧</span> {t.contact.email}
                </a>
                <a
                  href="#"
                  style={btnStyle(false)}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "var(--card)"; (e.currentTarget as HTMLElement).style.borderColor = "var(--text3)"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "transparent"; (e.currentTarget as HTMLElement).style.borderColor = "var(--border2)"; }}
                >
                  <span>⌨️</span> GitHub
                </a>
                <a
                  href="#"
                  style={btnStyle(false)}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "var(--card)"; (e.currentTarget as HTMLElement).style.borderColor = "var(--text3)"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "transparent"; (e.currentTarget as HTMLElement).style.borderColor = "var(--border2)"; }}
                >
                  <span>💬</span> Discord
                </a>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      <footer style={{ textAlign: "center", padding: "32px 0", borderTop: "1px solid var(--border)", fontSize: "13px", color: "var(--text3)", fontFamily: "var(--font-dm)" }}>
        {t.footer}
      </footer>
    </>
  );
}

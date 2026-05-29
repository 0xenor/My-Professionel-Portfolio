"use client";
import FadeUp from "@/app/components/FadeUp";
import { useLang } from "@/lib/LangContext";

const InfoCard = ({ label, title, sub }: { label: string; title: string; sub: string }) => (
  <div
    style={{
      background: "var(--bg2)",
      border: "1px solid var(--border)",
      borderRadius: "16px",
      padding: "24px 28px",
      flex: 1,
      transition: "border-color 0.25s, background 0.25s, transform 0.25s",
      cursor: "default",
    }}
    onMouseEnter={e => {
      (e.currentTarget as HTMLElement).style.borderColor = "var(--border2)";
      (e.currentTarget as HTMLElement).style.background = "var(--bg3)";
      (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)";
    }}
    onMouseLeave={e => {
      (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
      (e.currentTarget as HTMLElement).style.background = "var(--bg2)";
      (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
    }}
  >
    <div style={{ fontSize: "10px", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--text3)", fontWeight: 500, marginBottom: "8px", fontFamily: "var(--font-dm)" }}>
      {label}
    </div>
    <div style={{ fontSize: "18px", fontWeight: 700, color: "var(--text)", fontFamily: "var(--font-syne)", marginBottom: "6px" }}>
      {title}
    </div>
    <div style={{ fontSize: "13px", color: "var(--text2)", lineHeight: 1.6, fontFamily: "var(--font-dm)", fontWeight: 300 }}>
      {sub}
    </div>
  </div>
);

export default function AboutSection() {
  const { t } = useLang();

  return (
    <section id="about" style={{ padding: "120px 0" }}>
      <div className="section-wrap" style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px" }}>
        <FadeUp>
          <div style={{ textAlign: "center", marginBottom: "64px" }}>
            <div style={{ fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--text3)", marginBottom: "16px", fontFamily: "var(--font-dm)", fontWeight: 500 }}>
              {t.about.label}
            </div>
            <h2 style={{ fontFamily: "var(--font-syne)", fontSize: "clamp(36px,5vw,60px)", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.1 }}>
              {t.about.title1}{" "}
              <span style={{ color: "var(--text3)" }}>{t.about.title2}</span>
            </h2>
          </div>
        </FadeUp>

        {/* Large description card on top */}
        <FadeUp delay={0.05}>
          <div
            className="about-main-card"
            style={{
              background: "var(--bg2)",
              border: "1px solid var(--border)",
              borderRadius: "24px",
              padding: "44px 48px",
              marginBottom: "20px",
            }}
          >
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                border: "1px solid var(--border2)",
                borderRadius: "50px",
                padding: "7px 16px",
                fontSize: "11px",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "var(--text2)",
                marginBottom: "28px",
                fontFamily: "var(--font-dm)",
                fontWeight: 500,
              }}
            >
              {t.about.badge}
            </div>
            <p
              style={{
                fontSize: "17px",
                color: "var(--text2)",
                lineHeight: 1.85,
                fontFamily: "var(--font-dm)",
                fontWeight: 300,
                maxWidth: "820px",
                marginBottom: "32px",
              }}
            >
              {t.about.text}
            </p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              {[
                { label: t.about.focus, val: t.about.focusVal },
                { label: t.about.stack, val: "React · Node" },
                { label: t.about.style, val: t.about.styleVal },
              ].map(chip => (
                <div
                  key={chip.label}
                  style={{
                    background: "var(--bg3)",
                    border: "1px solid var(--border)",
                    borderRadius: "14px",
                    padding: "14px 20px",
                  }}
                >
                  <div style={{ fontSize: "10px", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text3)", fontWeight: 500, marginBottom: "4px", fontFamily: "var(--font-dm)" }}>
                    {chip.label}
                  </div>
                  <div style={{ fontSize: "15px", fontWeight: 700, color: "var(--text)", fontFamily: "var(--font-syne)" }}>
                    {chip.val}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeUp>

        {/* Three equal cards below */}
        <FadeUp delay={0.1}>
          <div className="about-info-row" style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <InfoCard
              label={t.about.location}
              title="Morocco 🇲🇦"
              sub={t.about.locationSub}
            />
            <InfoCard
              label={t.about.languages}
              title={t.about.langList}
              sub={t.about.langSub}
            />
            <InfoCard
              label={t.about.driving}
              title="Permis B"
              sub={t.about.drivingSub}
            />
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

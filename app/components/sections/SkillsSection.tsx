"use client";
import FadeUp from "@/app/components/FadeUp";
import { useLang } from "@/lib/LangContext";

const Chip = ({ label }: { label: string }) => (
  <span
    style={{
      background: "var(--bg3)",
      border: "1px solid var(--border)",
      borderRadius: "50px",
      padding: "6px 14px",
      fontSize: "13px",
      color: "var(--text2)",
      fontFamily: "var(--font-dm)",
      fontWeight: 400,
      transition: "border-color 0.2s, color 0.2s",
      cursor: "default",
      display: "inline-block",
    }}
    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "var(--border2)"; (e.currentTarget as HTMLElement).style.color = "var(--text)"; }}
    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "var(--border)"; (e.currentTarget as HTMLElement).style.color = "var(--text2)"; }}
  >
    {label}
  </span>
);

interface SkillCardProps {
  icon: string;
  title: string;
  sub: string;
  chips: string[];
  delay?: number;
}

const SkillCard = ({ icon, title, sub, chips, delay = 0 }: SkillCardProps) => (
  <FadeUp delay={delay}>
    <div
      style={{
        background: "var(--bg2)",
        border: "1px solid var(--border)",
        borderRadius: "24px",
        padding: "36px",
        height: "100%",
        transition: "border-color 0.3s, background 0.3s, transform 0.3s",
        cursor: "default",
      }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLElement).style.borderColor = "var(--border2)";
        (e.currentTarget as HTMLElement).style.background = "var(--bg3)";
        (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
        (e.currentTarget as HTMLElement).style.background = "var(--bg2)";
        (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
      }}
    >
      <div style={{
        width: 48, height: 48,
        background: "var(--bg3)",
        border: "1px solid var(--border)",
        borderRadius: "12px",
        display: "flex", alignItems: "center", justifyContent: "center",
        fontSize: "22px",
        marginBottom: "20px",
      }}>
        {icon}
      </div>
      <h3 style={{ fontFamily: "var(--font-syne)", fontSize: "18px", fontWeight: 700, marginBottom: "8px", color: "var(--text)" }}>
        {title}
      </h3>
      <p style={{ fontSize: "13px", color: "var(--text3)", marginBottom: "20px", lineHeight: 1.5, fontFamily: "var(--font-dm)" }}>
        {sub}
      </p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
        {chips.map(c => <Chip key={c} label={c} />)}
      </div>
    </div>
  </FadeUp>
);

export default function SkillsSection() {
  const { t } = useLang();

  return (
    <section id="skills" style={{ padding: "120px 0" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px" }}>
        <FadeUp>
          <div style={{ textAlign: "center", marginBottom: "72px" }}>
            <div style={{ fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--text3)", marginBottom: "16px", fontFamily: "var(--font-dm)", fontWeight: 500 }}>
              {t.skills.label}
            </div>
            <h2 style={{ fontFamily: "var(--font-syne)", fontSize: "clamp(36px,5vw,60px)", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.1 }}>
              {t.skills.title1}<br />
              <span style={{ color: "var(--text3)" }}>{t.skills.title2}</span>
            </h2>
          </div>
        </FadeUp>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }} className="skills-grid">
          <SkillCard
            icon="⌨️"
            title={t.skills.card1.title}
            sub={t.skills.card1.sub}
            chips={["HTML", "CSS", "Tailwind CSS", "JavaScript", "React", "Next.js", "TypeScript"]}
            delay={0}
          />
          <SkillCard
            icon="🗄️"
            title={t.skills.card2.title}
            sub={t.skills.card2.sub}
            chips={["MongoDB", "Express JS", "Node.js", "VS Code", "Git", "GitHub", "CapCut", "Canva"]}
            delay={0.1}
          />
          <SkillCard
            icon="📱"
            title={t.skills.card3.title}
            sub={t.skills.card3.sub}
            chips={[t.skills.card3.s1, t.skills.card3.s2, t.skills.card3.s3]}
            delay={0.2}
          />
        </div>
      </div>
    </section>
  );
}

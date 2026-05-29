"use client";
import { motion } from "framer-motion";
import FadeUp from "@/app/components/FadeUp";
import { useLang } from "@/lib/LangContext";

interface ProjectCardProps {
  type: string;
  title: string;
  desc: string;
  chips: string[];
  delay?: number;
}

const ProjectCard = ({ type, title, desc, chips, delay = 0 }: ProjectCardProps) => (
  <FadeUp delay={delay}>
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25 }}
      style={{
        background: "var(--bg2)",
        border: "1px solid var(--border)",
        borderRadius: "20px",
        padding: "28px 30px",
        cursor: "pointer",
        transition: "border-color 0.25s, background 0.25s",
      }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLElement).style.borderColor = "var(--border2)";
        (e.currentTarget as HTMLElement).style.background = "var(--bg3)";
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
        (e.currentTarget as HTMLElement).style.background = "var(--bg2)";
      }}
    >
      <div style={{ fontSize: "11px", color: "var(--text3)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "10px", fontFamily: "var(--font-dm)", fontWeight: 500 }}>
        {type}
      </div>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "12px" }}>
        <h3 style={{ fontFamily: "var(--font-syne)", fontSize: "17px", fontWeight: 700, color: "var(--text)" }}>
          {title}
        </h3>
        <span style={{ color: "var(--text3)", fontSize: "16px", transition: "color 0.2s, transform 0.2s" }}>↗</span>
      </div>
      <p style={{ fontSize: "14px", color: "var(--text2)", lineHeight: 1.7, fontFamily: "var(--font-dm)", fontWeight: 300, marginBottom: "16px" }}>
        {desc}
      </p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
        {chips.map(c => (
          <span key={c} style={{
            background: "var(--bg3)",
            border: "1px solid var(--border)",
            borderRadius: "50px",
            padding: "4px 12px",
            fontSize: "11px",
            color: "var(--text3)",
            fontFamily: "var(--font-dm)",
          }}>
            {c}
          </span>
        ))}
      </div>
    </motion.div>
  </FadeUp>
);

export default function ProjectsSection() {
  const { t } = useLang();

  return (
    <section id="projects" style={{ padding: "120px 0" }}>
      <div className="section-wrap" style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", alignItems: "start" }} className="projects-grid">

          {/* Left: intro */}
          <FadeUp>
            <div>
              <div style={{ fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--text3)", marginBottom: "24px", fontFamily: "var(--font-dm)", fontWeight: 500 }}>
                {t.projects.label}
              </div>
              <h2 style={{ fontFamily: "var(--font-syne)", fontSize: "clamp(32px,4vw,52px)", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.15, marginBottom: "24px" }}>
                {t.projects.title1}<br />
                <span style={{ color: "var(--text3)" }}>{t.projects.title2}</span><br />
                {t.projects.title3}
              </h2>
              <p style={{ fontSize: "16px", color: "var(--text2)", lineHeight: 1.8, marginBottom: "32px", fontFamily: "var(--font-dm)", fontWeight: 300 }}>
                {t.projects.sub}
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "32px" }}>
                {["React", "Node.js", "MongoDB", "TypeScript", "Social Media"].map(tag => (
                  <span key={tag} style={{
                    border: "1px solid var(--border2)",
                    borderRadius: "50px",
                    padding: "7px 16px",
                    fontSize: "13px",
                    color: "var(--text2)",
                    fontFamily: "var(--font-dm)",
                    transition: "color 0.2s, border-color 0.2s",
                    cursor: "default",
                  }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = "var(--text)"; (e.currentTarget as HTMLElement).style.borderColor = "var(--text3)"; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = "var(--text2)"; (e.currentTarget as HTMLElement).style.borderColor = "var(--border2)"; }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href="#"
                style={{
                  background: "var(--text)",
                  color: "var(--bg)",
                  border: "none",
                  borderRadius: "50px",
                  padding: "14px 28px",
                  fontSize: "15px",
                  fontWeight: 600,
                  cursor: "pointer",
                  textDecoration: "none",
                  fontFamily: "var(--font-dm)",
                  display: "inline-flex",
                  transition: "opacity 0.2s, transform 0.2s",
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.opacity = "0.85"; (e.currentTarget as HTMLElement).style.transform = "scale(1.03)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.opacity = "1"; (e.currentTarget as HTMLElement).style.transform = "scale(1)"; }}
              >
                {t.projects.github}
              </a>
            </div>
          </FadeUp>

          {/* Right: project cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <ProjectCard
              type={t.projects.p1.type}
              title={t.projects.p1.title}
              desc={t.projects.p1.desc}
              chips={["React", "TypeScript", "Tailwind"]}
              delay={0.05}
            />
            <ProjectCard
              type={t.projects.p2.type}
              title={t.projects.p2.title}
              desc={t.projects.p2.desc}
              chips={["Node.js", "Express", "MongoDB"]}
              delay={0.1}
            />
            <ProjectCard
              type={t.projects.p3.type}
              title={t.projects.p3.title}
              desc={t.projects.p3.desc}
              chips={["CapCut", "Canva", "Community"]}
              delay={0.15}
            />
          </div>
        </div>
      </div>

    </section>
  );
}

"use client";
import { motion } from "framer-motion";
import FadeUp from "@/app/components/FadeUp";
import { useLang } from "@/lib/LangContext";

interface TimelineCardProps {
  year: string;
  title: string;
  sub: string;
  text: string;
  icon: string;
  side: "left" | "right";
  delay?: number;
}

const TimelineCard = ({ year, title, sub, text, icon, side, delay = 0 }: TimelineCardProps) => {
  const isLeft = side === "left";

  return (
    <FadeUp delay={delay}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 60px 1fr",
          alignItems: "center",
          gap: 0,
        }}
        className="tl-item"
      >
        {/* Left slot */}
        <div style={{ gridColumn: isLeft ? 1 : 3, gridRow: 1 }}>
          <div
            style={{
              background: "var(--bg2)",
              border: "1px solid var(--border)",
              borderRadius: "20px",
              padding: "30px 34px",
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
            <div style={{ fontSize: "12px", color: "var(--text3)", fontWeight: 500, letterSpacing: "0.06em", marginBottom: "10px", fontFamily: "var(--font-dm)" }}>
              {year}
            </div>
            <h3 style={{ fontFamily: "var(--font-syne)", fontSize: "20px", fontWeight: 700, marginBottom: "4px", color: "var(--text)" }}>
              {title}
            </h3>
            <div style={{ fontSize: "13px", color: "var(--accent2)", fontWeight: 500, marginBottom: "12px", fontFamily: "var(--font-dm)" }}>
              {sub}
            </div>
            <p style={{ fontSize: "14px", color: "var(--text2)", lineHeight: 1.75, fontFamily: "var(--font-dm)", fontWeight: 300 }}>
              {text}
            </p>
          </div>
        </div>

        {/* Center dot */}
        <div style={{ gridColumn: 2, gridRow: 1, display: "flex", justifyContent: "center", alignItems: "center", position: "relative", zIndex: 2 }} className="tl-dot-col">
          <motion.div
            whileHover={{ scale: 1.15 }}
            style={{
              width: 46, height: 46,
              background: "var(--bg2)",
              border: "1px solid var(--border2)",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "18px",
              transition: "background 0.2s, border-color 0.2s",
              cursor: "default",
            }}
          >
            {icon}
          </motion.div>
        </div>

        {/* Empty slot */}
        <div style={{ gridColumn: isLeft ? 3 : 1, gridRow: 1 }} />
      </div>
    </FadeUp>
  );
};

export default function JourneySection() {
  const { t } = useLang();

  // Timeline items — displayed top to bottom on screen = newest first
  // BUT the visual meaning is: scroll DOWN = go back in time (oldest at bottom)
  const items = [
    {
      year: "2025 – Present",
      title: t.journey.card3.title,
      sub: t.journey.card3.sub,
      text: t.journey.card3.text,
      icon: "🔧",
      side: "left" as const,
    },
    {
      year: "2023 – Present",
      title: t.journey.card2.title,
      sub: t.journey.card2.sub,
      text: t.journey.card2.text,
      icon: "🎓",
      side: "right" as const,
    },
    {
      year: "2022 – 2023",
      title: t.journey.card1.title,
      sub: t.journey.card1.sub,
      text: t.journey.card1.text,
      icon: "📚",
      side: "left" as const,
    },
  ];

  return (
    <section id="journey" style={{ padding: "120px 0" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px" }}>
        <FadeUp>
          <div style={{ textAlign: "center", marginBottom: "80px" }}>
            <div style={{ fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--text3)", marginBottom: "16px", fontFamily: "var(--font-dm)", fontWeight: 500 }}>
              {t.journey.label}
            </div>
            <h2 style={{ fontFamily: "var(--font-syne)", fontSize: "clamp(36px,5vw,60px)", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.1 }}>
              {t.journey.title}
            </h2>
          </div>
        </FadeUp>

        <div style={{ position: "relative", maxWidth: 900, margin: "0 auto" }}>
          {/* Vertical line */}
          <div
            className="tl-line"
            style={{
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
              top: 0, bottom: 0,
              width: "1px",
              background: "linear-gradient(to bottom, transparent, var(--border2) 5%, var(--border2) 95%, transparent)",
            }}
          />

          <div style={{ display: "flex", flexDirection: "column", gap: "72px", position: "relative" }}>
            {items.map((item, i) => (
              <TimelineCard key={i} {...item} delay={i * 0.05} />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .tl-item { grid-template-columns: 1fr !important; }
          .tl-dot-col { display: none !important; }
          .tl-line { display: none !important; }
        }
      `}</style>
    </section>
  );
}

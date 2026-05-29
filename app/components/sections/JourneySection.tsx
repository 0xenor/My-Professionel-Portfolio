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

  const card = (
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
      <h3 style={{ fontFamily: "var(--font-syne)", fontSize: "20px", fontWeight: 700, marginBottom: "5px", color: "var(--text)" }}>
        {title}
      </h3>
      <div style={{ fontSize: "13px", color: "var(--accent2)", fontWeight: 500, marginBottom: "14px", fontFamily: "var(--font-dm)" }}>
        {sub}
      </div>
      <p style={{ fontSize: "14px", color: "var(--text2)", lineHeight: 1.75, fontFamily: "var(--font-dm)", fontWeight: 300 }}>
        {text}
      </p>
    </div>
  );

  const dot = (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", position: "relative", zIndex: 2 }}>
      <motion.div
        whileHover={{ scale: 1.15 }}
        style={{
          width: 48, height: 48,
          background: "var(--bg2)",
          border: "1px solid var(--border2)",
          borderRadius: "50%",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: "19px",
          cursor: "default",
          flexShrink: 0,
        }}
      >
        {icon}
      </motion.div>
    </div>
  );

  return (
    <FadeUp delay={delay}>
      {/* Desktop: 3-col grid */}
      <div
        className="tl-item"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 72px 1fr",
          alignItems: "center",
          gap: 0,
        }}
      >
        {/* Col 1 */}
        <div style={{ gridColumn: 1, gridRow: 1 }}>
          {isLeft ? card : null}
        </div>

        {/* Col 2 — dot always in center */}
        <div style={{ gridColumn: 2, gridRow: 1 }}>
          {dot}
        </div>

        {/* Col 3 */}
        <div style={{ gridColumn: 3, gridRow: 1 }}>
          {!isLeft ? card : null}
        </div>
      </div>
    </FadeUp>
  );
};

export default function JourneySection() {
  const { t } = useLang();

  // Newest at top, oldest at bottom — visual "rising from past" feel
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

        {/* Timeline wrapper — relative so the absolute line can span full height */}
        <div style={{ position: "relative", maxWidth: 920, margin: "0 auto" }}>

          {/* ── VERTICAL CENTER LINE ── */}
          <div
            className="tl-line"
            style={{
              position: "absolute",
              /* offset = half of outer container padding + half of dot column (72px) */
              left: "calc(50% - 0.5px)",
              top: 0,
              bottom: 0,
              width: "1px",
              background: "linear-gradient(to bottom, transparent 0%, var(--border2) 8%, var(--border2) 92%, transparent 100%)",
              zIndex: 0,
            }}
          />

          <div style={{ display: "flex", flexDirection: "column", gap: "80px", position: "relative", zIndex: 1 }}>
            {items.map((item, i) => (
              <TimelineCard key={i} {...item} delay={i * 0.06} />
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}

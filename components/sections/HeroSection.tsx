"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDownRight } from "lucide-react";

/* ─── Marquee items ──────────────────────────────────────────────────────── */
const marqueeItems = [
  "Landing Page",
  "Web Design",
  "UI/UX",
  "Branding",
  "Digital Experience",
  "Creative Tech",
  "Frontend Dev",
  "Motion Design",
];

/* ─── Stagger reveal ─────────────────────────────────────────────────────── */
const EASE_EXPO = [0.19, 1, 0.22, 1] as const;

function RevealWord({ children, delay = 0 }: { children: string; delay?: number }) {
  return (
    <span className="inline-block overflow-hidden leading-[0.95]">
      <motion.span
        className="inline-block"
        initial={{ y: "105%", skewY: 2 }}
        animate={{ y: "0%", skewY: 0 }}
        transition={{ duration: 1, delay, ease: EASE_EXPO }}
      >
        {children}
      </motion.span>
    </span>
  );
}

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  /* Subtle parallax on scroll */
  const { scrollY } = useScroll();
  const headlineY   = useTransform(scrollY, [0, 600], [0, -60]);
  const subY        = useTransform(scrollY, [0, 600], [0, -30]);

  const scrollToWork = () => {
    const el = document.querySelector("#work") as HTMLElement | null;
    if (el) window.scrollTo({ top: el.offsetTop - 72, behavior: "smooth" });
  };

  const scrollToPackage = () => {
    const el = document.querySelector("#package") as HTMLElement | null;
    if (el) window.scrollTo({ top: el.offsetTop - 72, behavior: "smooth" });
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col overflow-hidden bg-background"
      style={{ paddingTop: "var(--nav-height)" }}
    >
      {/* ── Top label row ─────────────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1, ease: EASE_EXPO }}
        className="container-site pt-10 pb-6 flex items-center justify-between"
      >
        <div className="flex items-center gap-2">
          <div
            className="w-1.5 h-1.5 rounded-full bg-accent"
            style={{ boxShadow: "0 0 6px hsl(var(--accent))" }}
          />
          <span className="font-mono text-[10px] tracking-[0.2em] text-foreground-subtle uppercase">
            Available for projects — 2025
          </span>
        </div>
        <span className="font-mono text-[10px] tracking-[0.15em] text-foreground-subtle uppercase hidden sm:block">
          Depok, Indonesia
        </span>
      </motion.div>

      {/* ── Main headline ─────────────────────────────────────────────── */}
      <div className="container-site flex-1 flex flex-col justify-center">
        <motion.div style={{ y: headlineY }} className="relative">

          {/* Index label */}
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="font-mono text-[10px] tracking-[0.2em] text-foreground-subtle uppercase mb-8 block"
          >
            01 — Creative Studio
          </motion.span>

          {/* Giant headline — word by word */}
          <h1 className="font-display font-bold tracking-tight select-none">
            {/* Line 1 */}
            <div className="flex flex-wrap gap-x-4 text-display-2xl text-foreground mb-1">
              <RevealWord delay={0.2}>Building</RevealWord>
              <RevealWord delay={0.28}>Modern</RevealWord>
            </div>

            {/* Line 2 — accent colored */}
            <div className="flex flex-wrap gap-x-4 text-display-2xl mb-1">
              <span className="inline-block overflow-hidden leading-[0.95]">
                <motion.span
                  className="inline-block text-foreground"
                  initial={{ y: "105%", skewY: 2 }}
                  animate={{ y: "0%", skewY: 0 }}
                  transition={{ duration: 1, delay: 0.36, ease: EASE_EXPO }}
                >
                  Digital
                </motion.span>
              </span>

              {/* "Presence" — outlined stroke style */}
              <span className="inline-block overflow-hidden leading-[0.95]">
                <motion.span
                  className="inline-block"
                  style={{
                    WebkitTextStroke: "2px hsl(var(--foreground))",
                    color: "transparent",
                  }}
                  initial={{ y: "105%", skewY: 2 }}
                  animate={{ y: "0%", skewY: 0 }}
                  transition={{ duration: 1, delay: 0.44, ease: EASE_EXPO }}
                >
                  Presence.
                </motion.span>
              </span>
            </div>
          </h1>

          {/* ── Horizontal rule + sub copy ─────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.7, ease: EASE_EXPO }}
            className="mt-12 flex flex-col md:flex-row md:items-end gap-8 md:gap-16"
          >
            {/* Divider */}
            <div className="hidden md:block h-px flex-1 bg-border" />

            {/* Sub copy block */}
            <div className="md:max-w-xs">
              <p className="text-sm leading-relaxed text-foreground-muted font-body">
                Web experiences that convert. We design and build digital identities
                for modern brands — from coffee shops to startups.
              </p>
              <div className="mt-6 flex items-center gap-3">
                <button
                  onClick={scrollToPackage}
                  className="flex items-center gap-2 px-5 py-2.5 bg-foreground text-primary-foreground font-mono text-xs font-medium tracking-wide hover:bg-accent hover:text-accent-foreground transition-all duration-200"
                  style={{ borderRadius: "var(--radius)" }}
                >
                  See Package
                  <ArrowDownRight size={12} />
                </button>
                <button
                  onClick={scrollToWork}
                  className="font-mono text-xs tracking-wide text-foreground-subtle hover:text-foreground underline underline-offset-4 decoration-border hover:decoration-foreground transition-all duration-200"
                >
                  View Work
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* ── Stats strip ───────────────────────────────────────────────── */}
      <motion.div
        style={{ y: subY }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className="container-site pb-14 mt-12 md:mt-0"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px border border-border"
          style={{ borderRadius: "var(--radius)" }}
        >
          {[
            { value: "50+",  label: "Projects" },
            { value: "3D",   label: "Avg. Delivery" },
            { value: "100%", label: "Satisfaction" },
            { value: "2021", label: "Est." },
          ].map((s, i) => (
            <div
              key={s.label}
              className="px-6 py-5 bg-card flex flex-col gap-1 border-border"
              style={{
                borderRight: i < 3 ? "1px solid hsl(var(--border))" : undefined,
              }}
            >
              <span className="font-display text-display-sm font-bold text-foreground">{s.value}</span>
              <span className="font-mono text-[10px] tracking-[0.15em] text-foreground-subtle uppercase">{s.label}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* ── Marquee strip ─────────────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="overflow-hidden border-t border-border py-3 bg-background-subtle"
      >
        <div className="flex animate-marquee whitespace-nowrap will-change-transform">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className="inline-flex items-center gap-5 mr-10">
              <span className="font-mono text-[10px] tracking-[0.2em] text-foreground-subtle uppercase">
                {item}
              </span>
              <span className="w-1 h-1 rounded-full bg-accent flex-shrink-0" />
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

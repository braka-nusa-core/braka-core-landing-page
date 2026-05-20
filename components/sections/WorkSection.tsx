"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const EASE = [0.19, 1, 0.22, 1] as const;

const projects = [
  {
    id: "01",
    title: "Kopi Hitam Pekat",
    category: "Coffee Shop",
    year: "2024",
    tags: ["Landing Page", "Branding"],
    description:
      "Cinematic landing page for a local specialty coffee brand — dark roast aesthetic, immersive product storytelling.",
    accent: "#c4842a",
    wide: true,
  },
  {
    id: "02",
    title: "Void Apparel",
    category: "Fashion Brand",
    year: "2024",
    tags: ["Web Design", "E-Commerce"],
    description:
      "Dark-luxury fashion editorial with refined grid layout and minimal product presentation.",
    accent: "#888888",
    wide: false,
  },
  {
    id: "03",
    title: "Brotherhood MC",
    category: "Motorcycle Community",
    year: "2025",
    tags: ["Landing Page", "Identity"],
    description:
      "Raw, powerful identity built with aggressive type and brotherhood-first energy.",
    accent: "#cc3333",
    wide: false,
  },
  {
    id: "04",
    title: "Nusa Ventures",
    category: "Startup",
    year: "2025",
    tags: ["Web Design", "Startup"],
    description:
      "Modern landing page for a local startup ecosystem connecting founders with investors.",
    accent: "#4466dd",
    wide: true,
  },
];

export default function WorkSection() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="work" className="section-padding bg-background border-t border-border">
      <div className="container-site">

        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: EASE }}
          className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6"
        >
          <div>
            <span className="font-mono text-[10px] tracking-[0.2em] text-foreground-subtle uppercase">
              Selected Work
            </span>
            <h2 className="mt-4 font-display font-bold text-display-lg text-foreground">
              Projects That<br />
              <span style={{ WebkitTextStroke: "1.5px hsl(var(--foreground))", color: "transparent" }}>
                Speak.
              </span>
            </h2>
          </div>
          <p className="text-sm text-foreground-muted max-w-xs leading-relaxed">
            Built from scratch, no templates. Every project intentional.
          </p>
        </motion.div>

        {/* Masonry-ish grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.09, duration: 0.8, ease: EASE }}
              className={`group relative bg-card border border-border overflow-hidden cursor-pointer hover:border-foreground transition-all duration-300 ${p.wide ? "md:col-span-2" : "md:col-span-1"}`}
              style={{ borderRadius: "var(--radius)" }}
            >
              {/* Visual placeholder area */}
              <div
                className="relative overflow-hidden"
                style={{ height: p.wide ? "260px" : "200px" }}
              >
                {/* Colored band */}
                <div
                  className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
                  style={{
                    background: `linear-gradient(135deg, ${p.accent}18 0%, ${p.accent}06 60%, transparent 100%)`,
                    backgroundColor: "hsl(var(--background-subtle))",
                  }}
                />

                {/* Grid texture */}
                <div
                  className="absolute inset-0 opacity-30"
                  style={{
                    backgroundImage: `
                      linear-gradient(hsl(var(--border)) 1px, transparent 1px),
                      linear-gradient(90deg, hsl(var(--border)) 1px, transparent 1px)
                    `,
                    backgroundSize: "40px 40px",
                  }}
                />

                {/* Floating accent dot */}
                <div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full transition-all duration-700 group-hover:scale-150"
                  style={{
                    background: `radial-gradient(circle, ${p.accent}30 0%, transparent 70%)`,
                    filter: "blur(20px)",
                  }}
                />

                {/* Project number */}
                <span
                  className="absolute bottom-4 left-6 font-display font-bold opacity-10 select-none group-hover:opacity-20 transition-opacity"
                  style={{ fontSize: "clamp(3rem, 8vw, 6rem)", lineHeight: 1, color: p.accent }}
                >
                  {p.id}
                </span>

                {/* Arrow */}
                <div
                  className="absolute top-5 right-5 w-8 h-8 border border-foreground-subtle flex items-center justify-center opacity-0 group-hover:opacity-100 -translate-y-2 group-hover:translate-y-0 transition-all duration-300"
                  style={{ borderRadius: "var(--radius)" }}
                >
                  <ArrowUpRight size={13} className="text-foreground" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6 border-t border-border">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div>
                    <h3 className="font-display text-lg font-bold text-foreground mb-0.5">
                      {p.title}
                    </h3>
                    <span className="font-mono text-[10px] tracking-[0.15em] text-foreground-subtle uppercase">
                      {p.category} · {p.year}
                    </span>
                  </div>
                  <div className="flex gap-1.5 flex-wrap justify-end">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 border border-border font-mono text-[9px] tracking-wide text-foreground-subtle uppercase"
                        style={{ borderRadius: "var(--radius)" }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <p className="text-xs text-foreground-muted leading-relaxed">{p.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Search, Pen, Code2, Rocket } from "lucide-react";

const EASE = [0.19, 1, 0.22, 1] as const;

const steps = [
  {
    num: "01",
    icon: Search,
    title: "Discover",
    body: "Deep-dive into your brand, audience, and goals. Understanding your world before we design yours.",
  },
  {
    num: "02",
    icon: Pen,
    title: "Design",
    body: "Wireframes become visual directions. Every layout, color, and typographic choice is intentional.",
  },
  {
    num: "03",
    icon: Code2,
    title: "Develop",
    body: "Pixel-perfect implementation — clean code, fast performance, and built to last.",
  },
  {
    num: "04",
    icon: Rocket,
    title: "Launch",
    body: "Deployed, tested, live. Your brand's new digital home — ready to convert from day one.",
  },
];

export default function ProcessSection() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="process" className="section-padding bg-background border-t border-border">
      <div className="container-site">

        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: EASE }}
          className="mb-16"
        >
          <span className="font-mono text-[10px] tracking-[0.2em] text-foreground-subtle uppercase">
            How We Work
          </span>
          <h2 className="mt-4 font-display font-bold text-display-lg text-foreground">
            From Idea to{" "}
            <span style={{ WebkitTextStroke: "1.5px hsl(var(--foreground))", color: "transparent" }}>
              Live.
            </span>
          </h2>
        </motion.div>

        {/* Steps — horizontal table style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px border border-border"
          style={{ borderRadius: "var(--radius)" }}
        >
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.num}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1, duration: 0.7, ease: EASE }}
                className="group bg-card p-8 flex flex-col gap-8 border-r border-border last:border-r-0 hover:bg-foreground transition-colors duration-300 cursor-default"
              >
                {/* Top row */}
                <div className="flex items-start justify-between">
                  <span className="font-mono text-[10px] tracking-[0.2em] text-foreground-subtle group-hover:text-primary-foreground/50 uppercase transition-colors">
                    {s.num}
                  </span>
                  <Icon
                    size={15}
                    className="text-foreground-subtle group-hover:text-accent transition-colors duration-300"
                  />
                </div>

                {/* Content */}
                <div>
                  <h3 className="font-display text-2xl font-bold text-foreground group-hover:text-primary-foreground mb-3 transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-xs text-foreground-muted group-hover:text-primary-foreground/60 leading-relaxed transition-colors">
                    {s.body}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

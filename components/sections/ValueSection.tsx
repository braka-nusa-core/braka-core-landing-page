"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Palette, Zap, Smartphone, Crown } from "lucide-react";

const EASE = [0.19, 1, 0.22, 1] as const;

const values = [
  {
    icon: Palette,
    num: "01",
    title: "Modern Design",
    description:
      "Every pixel intentional. No templates, no compromises. We design each project from a blank canvas.",
  },
  {
    icon: Zap,
    num: "02",
    title: "Fast Performance",
    description:
      "Sub-second load times built from the ground up — optimized code, optimized conversions.",
  },
  {
    icon: Smartphone,
    num: "03",
    title: "Mobile First",
    description:
      "Flawless on every screen. Your brand looks exceptional whether on a phone, tablet, or desktop.",
  },
  {
    icon: Crown,
    num: "04",
    title: "Premium Output",
    description:
      "The feel that separates remarkable from average. We build impressions that last.",
  },
];

export default function ValueSection() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="section-padding bg-background-subtle border-t border-border" id="values">
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
              Why Choose Us
            </span>
            <h2 className="mt-4 font-display font-bold text-display-lg text-foreground">
              What Makes Us<br />
              <span style={{ WebkitTextStroke: "1.5px hsl(var(--foreground))", color: "transparent" }}>
                Different.
              </span>
            </h2>
          </div>
          <p className="text-sm text-foreground-muted max-w-xs leading-relaxed">
            Four pillars that define how we work — and why clients come back.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px border border-border"
          style={{ borderRadius: "var(--radius)" }}
        >
          {values.map((v, i) => {
            const Icon = v.icon;
            return (
              <motion.div
                key={v.num}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.08, duration: 0.7, ease: EASE }}
                className="group relative bg-card p-8 flex flex-col gap-6 hover:bg-accent transition-colors duration-200 border-r border-border last:border-r-0 cursor-default"
              >
                {/* Number + Icon row */}
                <div className="flex items-start justify-between">
                  <span className="font-mono text-[10px] tracking-[0.15em] text-foreground-subtle group-hover:text-accent-foreground uppercase transition-colors">
                    {v.num}
                  </span>
                  <Icon
                    size={16}
                    className="text-foreground-subtle group-hover:text-accent-foreground transition-colors"
                  />
                </div>

                {/* Content */}
                <div className="mt-auto">
                  <h3 className="font-display text-lg font-bold text-foreground group-hover:text-accent-foreground mb-2 transition-colors">
                    {v.title}
                  </h3>
                  <p className="text-xs text-foreground-muted group-hover:text-accent-foreground/70 leading-relaxed transition-colors">
                    {v.description}
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

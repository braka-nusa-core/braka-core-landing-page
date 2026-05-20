"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const EASE = [0.19, 1, 0.22, 1] as const;

const pillars = [
  { title: "Design-First Thinking",  body: "We start with aesthetics because first impressions define trust." },
  { title: "Built to Convert",        body: "Beautiful and functional — every section serves a purpose." },
  { title: "Your Brand, Not Ours",    body: "We disappear into your identity. Every project feels uniquely yours." },
];

export default function AboutSection() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="section-padding bg-background-subtle border-t border-border">
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

          {/* Left */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: EASE }}
          >
            <span className="font-mono text-[10px] tracking-[0.2em] text-foreground-subtle uppercase">
              The Studio
            </span>

            <h2 className="mt-6 font-display font-bold text-display-lg text-foreground leading-[0.95]">
              We Believe<br />
              Your Brand<br />
              <span style={{ WebkitTextStroke: "1.5px hsl(var(--foreground))", color: "transparent" }}>
                Deserves More.
              </span>
            </h2>

            <p className="mt-8 text-sm text-foreground-muted leading-relaxed max-w-md">
              Braka Nusa Core is a creative technology studio built for modern brands
              that refuse to settle for average. We combine sharp design thinking with
              technical precision to deliver digital experiences that convert.
            </p>

            <p className="mt-4 text-sm text-foreground-subtle leading-relaxed max-w-md">
              From coffee shops to fashion labels, motorcycle communities to Gen Z startups —
              we treat each project as if our own reputation is on the line.
            </p>

            {/* Accent line */}
            <div
              className="mt-10 h-px w-16 bg-accent"
            />

            {/* Stats */}
            <div className="mt-8 grid grid-cols-2 gap-x-10 gap-y-6">
              {[
                { v: "2021", l: "Founded" },
                { v: "50+",  l: "Projects" },
                { v: "3 Day", l: "Delivery" },
                { v: "∞",    l: "Ambition" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="font-display text-display-sm font-bold text-foreground">{s.v}</div>
                  <div className="font-mono text-[10px] tracking-[0.15em] text-foreground-subtle uppercase mt-1">{s.l}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — pillars */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.12, ease: EASE }}
            className="flex flex-col justify-center"
          >
            <div className="divide-y divide-border border border-border"
              style={{ borderRadius: "var(--radius)" }}
            >
              {pillars.map((p, i) => (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 12 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.25 + i * 0.1, duration: 0.6, ease: EASE }}
                  className="group p-8 bg-card hover:bg-accent transition-colors duration-200 cursor-default"
                >
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <h4 className="font-display text-base font-bold text-foreground group-hover:text-accent-foreground transition-colors">
                      {p.title}
                    </h4>
                    <span className="font-mono text-[9px] tracking-[0.15em] text-foreground-subtle group-hover:text-accent-foreground/60 uppercase mt-0.5">
                      0{i + 1}
                    </span>
                  </div>
                  <p className="text-xs text-foreground-muted group-hover:text-accent-foreground/70 leading-relaxed transition-colors">
                    {p.body}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Quote */}
            <motion.blockquote
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="mt-8 pl-5 border-l-2 border-accent"
            >
              <p className="text-sm italic text-foreground-muted leading-relaxed">
                &ldquo;If our own website looks this premium,
                imagine what we&apos;ll build for you.&rdquo;
              </p>
              <cite className="mt-2 block font-mono text-[10px] tracking-[0.15em] text-foreground-subtle uppercase not-italic">
                — Braka Nusa Core Studio
              </cite>
            </motion.blockquote>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

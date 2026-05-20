"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";

const EASE = [0.19, 1, 0.22, 1] as const;

const features = [
  "Custom designed — zero templates",
  "Fully responsive & mobile-optimized",
  "Framer Motion animations",
  "SEO-ready structure",
  "90+ Lighthouse performance score",
  "Up to 8 content sections",
  "Contact / WhatsApp integration",
  "Deployed to your domain",
  "3-day delivery",
  "1 revision round included",
];

const addons = [
  { label: "Additional pages",     price: "Rp 250k / page" },
  { label: "Logo & branding kit",  price: "Rp 500k" },
  { label: "WA chat button",       price: "Free" },
  { label: "Monthly maintenance",  price: "Rp 200k / mo" },
];

export default function PackageSection() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="package" className="section-padding bg-background-subtle border-t border-border">
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
            Pricing
          </span>
          <h2 className="mt-4 font-display font-bold text-display-lg text-foreground">
            One Package.{" "}
            <span style={{ WebkitTextStroke: "1.5px hsl(var(--foreground))", color: "transparent" }}>
              Everything.
            </span>
          </h2>
        </motion.div>

        {/* Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.15, duration: 0.9, ease: EASE }}
          className="grid grid-cols-1 lg:grid-cols-5 border border-border bg-card overflow-hidden"
          style={{ borderRadius: "var(--radius)" }}
        >
          {/* Left — price & CTA */}
          <div className="lg:col-span-2 p-10 bg-foreground flex flex-col justify-between gap-10">

            {/* Badge */}
            <div>
              <span
                className="inline-block px-3 py-1 bg-accent font-mono text-[9px] tracking-[0.2em] text-accent-foreground uppercase mb-6"
                style={{ borderRadius: "var(--radius)" }}
              >
                Landing Page Package
              </span>

              {/* Price */}
              <div className="mb-2">
                <div className="font-display text-[3.5rem] font-bold text-primary-foreground leading-none">
                  Rp 1.5jt
                </div>
                <div className="font-mono text-xs text-primary-foreground/40 line-through mt-2">
                  Rp 2.500.000
                </div>
              </div>
              <p className="text-xs text-primary-foreground/50 leading-relaxed mt-3">
                One-time payment · Delivered in 3 business days · No hidden fees
              </p>
            </div>

            {/* CTA */}
            <div>
              <a
                href="https://wa.me/62800000000?text=Hi%2C%20saya%20tertarik%20dengan%20Landing%20Page%20Package"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-3 w-full py-4 bg-accent text-accent-foreground font-mono text-xs font-medium tracking-wide hover:brightness-105 transition-all duration-200"
                style={{ borderRadius: "var(--radius)" }}
              >
                Start Your Project
                <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <p className="text-center font-mono text-[9px] tracking-wide text-primary-foreground/30 mt-4 uppercase">
                Free consultation · No commitment
              </p>
            </div>
          </div>

          {/* Right — features */}
          <div className="lg:col-span-3 p-10 flex flex-col gap-10">

            {/* Features */}
            <div>
              <h4 className="font-mono text-[10px] tracking-[0.2em] text-foreground-subtle uppercase mb-6">
                What&apos;s Included
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {features.map((f) => (
                  <div key={f} className="flex items-start gap-3">
                    <div
                      className="mt-0.5 w-4 h-4 bg-accent flex items-center justify-center flex-shrink-0"
                      style={{ borderRadius: "var(--radius)" }}
                    >
                      <Check size={9} className="text-accent-foreground" />
                    </div>
                    <span className="text-xs text-foreground-muted leading-snug">{f}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-border" />

            {/* Add-ons */}
            <div>
              <h4 className="font-mono text-[10px] tracking-[0.2em] text-foreground-subtle uppercase mb-5">
                Optional Add-ons
              </h4>
              <div className="divide-y divide-border border border-border"
                style={{ borderRadius: "var(--radius)" }}
              >
                {addons.map((a) => (
                  <div key={a.label} className="flex items-center justify-between px-4 py-3">
                    <span className="text-xs text-foreground-muted">{a.label}</span>
                    <span className="font-mono text-[10px] tracking-wide text-foreground">{a.price}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

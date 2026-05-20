"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";

const EASE = [0.19, 1, 0.22, 1] as const;

export default function CtaSection() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="section-padding bg-foreground border-t border-border overflow-hidden" ref={ref}>
      <div className="container-site">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: EASE }}
          className="relative"
        >
          {/* Large background text — decorative */}
          <div
            className="absolute -top-6 -left-4 font-display font-bold text-primary-foreground select-none pointer-events-none leading-none opacity-[0.04]"
            style={{ fontSize: "clamp(8rem, 20vw, 18rem)" }}
            aria-hidden
          >
            BNC
          </div>

          <div className="relative z-10 max-w-4xl">
            <span className="font-mono text-[10px] tracking-[0.2em] text-primary-foreground/40 uppercase">
              Ready to Start?
            </span>

            <h2 className="mt-6 font-display font-bold text-display-xl text-primary-foreground leading-[0.93]">
              Your Brand Deserves<br />
              <span
                className="text-accent"
              >
                Better Digital
              </span>
              <br />
              <span
                style={{
                  WebkitTextStroke: "2px hsl(var(--accent))",
                  color: "transparent",
                }}
              >
                Presence.
              </span>
            </h2>

            <p className="mt-8 text-sm text-primary-foreground/50 max-w-sm leading-relaxed">
              Let&apos;s build something that makes your visitors stop scrolling and start
              trusting your brand.
            </p>

            <div className="mt-12 flex flex-col sm:flex-row items-start gap-4">
              <a
                href="https://wa.me/62800000000?text=Hi%2C%20saya%20tertarik%20dengan%20Landing%20Page%20Package"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 px-7 py-4 bg-accent text-accent-foreground font-mono text-xs font-medium tracking-wide hover:brightness-105 transition-all duration-200"
                style={{ borderRadius: "var(--radius)" }}
              >
                <MessageCircle size={13} />
                Chat on WhatsApp
                <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="mailto:hello@brakanusacore.com"
                className="flex items-center gap-2 px-7 py-4 border border-primary-foreground/20 text-primary-foreground/60 font-mono text-xs font-medium tracking-wide hover:border-primary-foreground/40 hover:text-primary-foreground transition-all duration-200"
                style={{ borderRadius: "var(--radius)" }}
              >
                Send an Email
              </a>
            </div>

            <p className="mt-8 font-mono text-[10px] tracking-[0.15em] text-primary-foreground/25 uppercase">
              Usually reply within 2 hours · Free consultation · No hidden fees
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

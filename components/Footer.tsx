"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Instagram, Twitter, Linkedin, MessageCircle } from "lucide-react";

const EASE = [0.19, 1, 0.22, 1] as const;

const socials = [
  { icon: Instagram,     label: "Instagram", href: "https://instagram.com" },
  { icon: Twitter,       label: "X / Twitter", href: "https://twitter.com" },
  { icon: Linkedin,      label: "LinkedIn",  href: "https://linkedin.com" },
  { icon: MessageCircle, label: "WhatsApp",  href: "https://wa.me/62800000000" },
];

const links = [
  { label: "Work",    href: "#work" },
  { label: "About",  href: "#about" },
  { label: "Process", href: "#process" },
  { label: "Package", href: "#package" },
];

export default function Footer() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  const scroll = (href: string) => {
    const el = document.querySelector(href) as HTMLElement | null;
    if (el) window.scrollTo({ top: el.offsetTop - 72, behavior: "smooth" });
  };

  return (
    <footer className="bg-foreground border-t border-primary-foreground/10" ref={ref}>
      <div className="container-site py-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: EASE }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-14"
        >
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div
                className="w-6 h-6 bg-accent flex items-center justify-center"
                style={{ borderRadius: "var(--radius)" }}
              >
                <img
                  src="/images/braka-core-logo-white.png" 
                  alt="Logo" 
                  className="w-4 h-4 rounded-sm object-cover" 
                />
              </div>
              <span className="font-mono text-sm font-medium text-primary-foreground">
                Braka Nusa Core
              </span>
            </div>
            <p className="text-xs text-primary-foreground/40 leading-relaxed max-w-xs">
              Modern creative technology studio crafting premium digital experiences
              for forward-thinking brands.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-mono text-[9px] tracking-[0.2em] text-primary-foreground/30 uppercase mb-5">
              Navigate
            </h4>
            <ul className="space-y-3">
              {links.map((l) => (
                <li key={l.label}>
                  <button
                    onClick={() => scroll(l.href)}
                    className="font-mono text-xs text-primary-foreground/50 hover:text-primary-foreground transition-colors"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-mono text-[9px] tracking-[0.2em] text-primary-foreground/30 uppercase mb-5">
              Connect
            </h4>
            <div className="flex gap-2 mb-6">
              {socials.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-8 h-8 border border-primary-foreground/15 flex items-center justify-center text-primary-foreground/40 hover:text-accent hover:border-accent transition-all duration-200"
                  style={{ borderRadius: "var(--radius)" }}
                >
                  <Icon size={13} />
                </a>
              ))}
            </div>
            <a
              href="mailto:hello@brakanusacore.com"
              className="font-mono text-xs text-primary-foreground/40 hover:text-primary-foreground transition-colors"
            >
              hello@brakanusacore.com
            </a>
          </div>
        </motion.div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="font-mono text-[10px] tracking-wide text-primary-foreground/25">
            © {new Date().getFullYear()} Braka Nusa Core. All rights reserved.
          </p>
          <p className="font-mono text-[10px] tracking-wide text-primary-foreground/15">
            Designed & built with precision.
          </p>
        </div>
      </div>
    </footer>
  );
}

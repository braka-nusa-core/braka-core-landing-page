"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Work",    href: "#work" },
  { label: "About",   href: "#about" },
  { label: "Process", href: "#process" },
  { label: "Package", href: "#package" },
];

export default function Navbar() {
  const [scrolled, setScrolled]     = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scroll = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href) as HTMLElement | null;
    if (el) window.scrollTo({ top: el.offsetTop - 72, behavior: "smooth" });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -16, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.19, 1, 0.22, 1] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-background/90 backdrop-blur-md border-b border-border"
            : "bg-transparent"
        )}
        style={{ height: scrolled ? "var(--nav-height-scrolled)" : "var(--nav-height)" }}
      >
        <div className="container-site h-full flex items-center justify-between">

          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="group flex items-center gap-2.5"
          >
            {/* Lime square mark */}
            <div>
              <img
              src="/images/braka-core-logo.png" 
              alt="Logo" 
              className="w-8 h-8 rounded-sm object-cover transition-transform duration-300 group-hover:scale-110" 
              />
            </div>
            <span className="font-mono text-sm font-medium tracking-tight text-foreground">
              Braka Nusa Core
            </span>
          </button>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((l) => (
              <button
                key={l.label}
                onClick={() => scroll(l.href)}
                className="font-mono text-xs tracking-wide text-foreground-subtle hover:text-foreground transition-colors duration-150"
              >
                {l.label}
              </button>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:block">
            <button
              onClick={() => scroll("#package")}
              className="group flex items-center gap-2 px-5 py-2.5 bg-foreground text-primary-foreground font-mono text-xs font-medium tracking-wide hover:bg-accent hover:text-accent-foreground transition-all duration-200"
              style={{ borderRadius: "var(--radius)" }}
            >
              Start a Project
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-foreground"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-background pt-20 px-6"
          >
            <div className="flex flex-col divide-y divide-border">
              {navLinks.map((l, i) => (
                <motion.button
                  key={l.label}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => scroll(l.href)}
                  className="text-left py-5 font-display text-3xl font-bold text-foreground tracking-tight"
                >
                  {l.label}
                </motion.button>
              ))}
              <div className="pt-8">
                <button
                  onClick={() => scroll("#package")}
                  className="w-full py-4 bg-accent text-accent-foreground font-mono text-sm font-medium tracking-wide"
                  style={{ borderRadius: "var(--radius)" }}
                >
                  Start a Project
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

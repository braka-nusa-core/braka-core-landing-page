import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body:    ["var(--font-body)", "sans-serif"],
        mono:    ["var(--font-mono)", "monospace"],
      },
      colors: {
        background: "hsl(var(--background))",
        "background-subtle": "hsl(var(--background-subtle))",
        "background-muted":  "hsl(var(--background-muted))",
        foreground:          "hsl(var(--foreground))",
        "foreground-muted":  "hsl(var(--foreground-muted))",
        "foreground-subtle": "hsl(var(--foreground-subtle))",
        card: {
          DEFAULT:    "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        primary: {
          DEFAULT:    "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT:    "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT:    "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT:    "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        border: "hsl(var(--border))",
        input:  "hsl(var(--input))",
        ring:   "hsl(var(--ring))",
      },
      borderRadius: {
        DEFAULT: "var(--radius)",
        sm:  "calc(var(--radius) * 0.5)",
        md:  "calc(var(--radius) * 2)",
        lg:  "calc(var(--radius) * 3)",
        xl:  "calc(var(--radius) * 4)",
        "2xl": "calc(var(--radius) * 6)",
        "3xl": "calc(var(--radius) * 8)",
        full: "9999px",
      },
      fontSize: {
        // editorial display scale
        "display-2xl": ["clamp(4rem, 10vw, 10rem)",    { lineHeight: "0.92", letterSpacing: "-0.03em" }],
        "display-xl":  ["clamp(3rem, 7vw, 7.5rem)",    { lineHeight: "0.94", letterSpacing: "-0.025em" }],
        "display-lg":  ["clamp(2.25rem, 5vw, 5.5rem)", { lineHeight: "0.96", letterSpacing: "-0.02em" }],
        "display-md":  ["clamp(1.75rem, 3.5vw, 3.5rem)", { lineHeight: "1.05", letterSpacing: "-0.015em" }],
        "display-sm":  ["clamp(1.25rem, 2.5vw, 2rem)", { lineHeight: "1.15", letterSpacing: "-0.01em" }],
      },
      transitionTimingFunction: {
        "out-quart":    "cubic-bezier(0.165, 0.84, 0.44, 1)",
        "out-expo":     "cubic-bezier(0.19, 1, 0.22, 1)",
        "in-out-quart": "cubic-bezier(0.77, 0, 0.175, 1)",
        spring:         "cubic-bezier(0.34, 1.56, 0.64, 1)",
      },
      transitionDuration: {
        "fast":      "150ms",
        "base":      "300ms",
        "slow":      "500ms",
        "cinematic": "800ms",
      },
    },
  },
  plugins: [],
};

export default config;

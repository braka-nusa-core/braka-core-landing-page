# Braka Nusa Core — Landing Page

Modern creative technology studio website built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion.

---

## Tech Stack

- **Next.js 15** — App Router
- **TypeScript** — Full type safety
- **Tailwind CSS** — Utility-first styling
- **Framer Motion** — Smooth animations
- **Lucide React** — Icon library

---

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view in browser.

### 3. Build for production

```bash
npm run build
npm run start
```

---

## Deploy to Vercel

### Option A — Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Deploy to production
vercel --prod
```

### Option B — Vercel Dashboard (Recommended)

1. Push this project to a GitHub repository
2. Go to [vercel.com](https://vercel.com) and sign in
3. Click **"Add New Project"**
4. Import your GitHub repository
5. Vercel auto-detects Next.js — click **"Deploy"**
6. Your site is live in ~60 seconds

### Custom Domain

1. In Vercel dashboard → Project Settings → Domains
2. Add your custom domain (e.g. `brakanusacore.com`)
3. Follow DNS configuration instructions

---

## Project Structure

```
braka-nusa-core/
├── app/
│   ├── globals.css          # Global styles & CSS variables
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Main page
├── components/
│   ├── sections/
│   │   ├── HeroSection.tsx
│   │   ├── ValueSection.tsx
│   │   ├── WorkSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── ProcessSection.tsx
│   │   ├── PackageSection.tsx
│   │   └── CtaSection.tsx
│   ├── Navbar.tsx
│   └── Footer.tsx
├── lib/
│   └── utils.ts
├── public/
│   └── favicon.svg
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── vercel.json
```

---

## Customization

### Brand Colors
Edit CSS variables in `app/globals.css`:
```css
--accent: #6d47ff;           /* Primary brand color */
--accent-soft: rgba(109, 71, 255, 0.15);
```

### Contact Links
Update WhatsApp number in:
- `components/sections/PackageSection.tsx`
- `components/sections/CtaSection.tsx`
- `components/Footer.tsx`

Update email in:
- `components/sections/CtaSection.tsx`
- `components/Footer.tsx`
- `app/layout.tsx` (metadata)

### Content
Each section is a standalone component in `components/sections/`. Edit copy, stats, and project cards directly in their respective files.

---

## Performance

- Lighthouse Score: **95+**
- Core Web Vitals: ✅ Optimized
- Mobile Responsive: ✅ All breakpoints
- SEO Ready: ✅ Metadata configured

---

Built by **Braka Nusa Core** — Modern Creative Technology Studio

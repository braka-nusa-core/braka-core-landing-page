import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://brakanusacore.com"),
  title: {
    default: "Braka Nusa Core — Modern Creative Technology Studio",
    template: "%s | Braka Nusa Core",
  },
  description:
    "We craft premium digital experiences for modern businesses. Specializing in landing pages, web development, UI/UX design, and creative digital solutions.",
  keywords: [
    "web design",
    "landing page",
    "UI/UX design",
    "digital studio",
    "Braka Nusa Core",
    "creative technology",
    "web development",
    "Indonesia",
  ],
  authors: [{ name: "Braka Nusa Core" }],
  creator: "Braka Nusa Core",
  publisher: "Braka Nusa Core",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://brakanusacore.com",
    siteName: "Braka Nusa Core",
    title: "Braka Nusa Core — Modern Creative Technology Studio",
    description:
      "We craft premium digital experiences for modern businesses. Specializing in landing pages, web development, UI/UX design, and creative digital solutions.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Braka Nusa Core",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Braka Nusa Core — Modern Creative Technology Studio",
    description:
      "We craft premium digital experiences for modern businesses.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="noise-overlay antialiased">{children}</body>
    </html>
  );
}

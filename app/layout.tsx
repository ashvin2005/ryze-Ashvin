import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import FloatingCTA from "@/components/FloatingCTA";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Ryze AI | Enterprise Growth Intelligence",
    template: "%s | Ryze AI",
  },
  description:
    "The operating system for modern growth teams. Unify your marketing data, predict customer value, and automate revenue operations with enterprise-grade AI.",
  keywords: [
    "AI marketing",
    "predictive analytics",
    "growth methodology",
    "marketing automation",
    "customer lifetime value",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ryze.ai",
    title: "Ryze AI | Enterprise Growth Intelligence",
    description:
      "The operating system for modern growth teams. Unify your marketing data, predict customer value, and automate revenue operations.",
    siteName: "Ryze AI",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ryze AI | Enterprise Growth Intelligence",
    description:
      "The operating system for modern growth teams. Unify your marketing data, and automate revenue operations.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased bg-brand-navy text-white selection:bg-brand-blue/30 selection:text-brand-cyan`}
      >
        {children}
        <FloatingCTA />
      </body>
    </html>
  );
}

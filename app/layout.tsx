import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Space_Grotesk } from "next/font/google";
import { Analytics } from '@vercel/analytics/next';
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap", // Correspond à votre paramètre ?display=swap
  variable: "--font-space-grotesk", // Crée une variable CSS pour une utilisation facile
});

export const metadata: Metadata = {
  title: "Wake Up — Révise intelligemment avec l’IA",
  description: "Wake Up t’aide à apprendre plus vite grâce à l’intelligence artificielle : quiz, explications et coaching personnalisé réunis au même endroit.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={spaceGrotesk.variable}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}

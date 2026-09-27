import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "8848 UI — Design systems, built for the summit",
  description:
    "A minimal, precise, quiet, technical, Himalayan-inspired design system for modern and agentic interfaces.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-[#09090B] text-[#FAFAFA] font-sans antialiased selection:bg-alpine-500/20 selection:text-alpine-300">
        {children}
      </body>
    </html>
  );
}
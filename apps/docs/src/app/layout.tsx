import type { Metadata, Viewport } from "next";
import { Toaster } from "@aayurt/8848-ui-react";
import { ThemeProvider } from "../components/theme-provider";
import { SiteFooter } from "../components/site-footer";
import "./globals.css";

const SITE_URL = "https://8848.aayurtshrestha.com.np";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "8848 UI — Design systems, built for the summit",
    template: "%s — 8848 UI",
  },
  description:
    "A minimal, precise, quiet, technical, Himalayan-inspired design system for modern and agentic interfaces. Accessible React components on Radix primitives and Tailwind CSS.",
  keywords: [
    "design system",
    "react components",
    "tailwindcss",
    "radix ui",
    "shadcn",
    "accessible components",
    "agentic ui",
  ],
  authors: [{ name: "Aayurt Shrestha", url: "https://aayurtshrestha.com.np" }],
  creator: "Aayurt Shrestha",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "8848 UI",
    title: "8848 UI — Design systems, built for the summit",
    description:
      "Minimal · Precise · Quiet · Technical · Himalayan · Elevated. Accessible React components for modern and agentic interfaces.",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: "8848 UI — Design systems, built for the summit",
    description: "Minimal · Precise · Quiet · Technical · Himalayan · Elevated.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#09090B" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
                navigator.serviceWorker.getRegistrations().then(function(registrations) {
                  for (var reg of registrations) {
                    reg.unregister();
                  }
                });
                if ('caches' in window) {
                  caches.keys().then(function(names) {
                    for (var name of names) caches.delete(name);
                  });
                }
              }
            `,
          }}
        />
      </head>
      <body className="min-h-screen bg-stone-50 text-stone-900 dark:bg-[#09090B] dark:text-[#FAFAFA] font-sans antialiased selection:bg-alpine-500/20 selection:text-alpine-300 transition-colors duration-200">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <Toaster />
          {children}
          <SiteFooter />
        </ThemeProvider>
      </body>
    </html>
  );
}
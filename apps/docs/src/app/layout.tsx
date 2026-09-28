import type { Metadata } from "next";
import { Toaster } from "@aayurt/8848-ui-react";
import { ThemeProvider } from "../components/theme-provider";
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
        </ThemeProvider>
      </body>
    </html>
  );
}
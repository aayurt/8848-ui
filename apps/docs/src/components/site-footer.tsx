"use client";

import Link from "next/link";
import { Mountain } from "lucide-react";

const EXPLORE_LINKS = [
  { label: "Components Registry", href: "/components" },
  { label: "Documentation", href: "/docs" },
  { label: "Button", href: "/components?component=button" },
  { label: "Form", href: "/components?component=form" },
  { label: "Table", href: "/components?component=table" },
];

const PACKAGE_LINKS = [
  { label: "@aayurt/8848-ui-react", href: "https://www.npmjs.com/package/@aayurt/8848-ui-react" },
  { label: "@aayurt/8848-ui-core", href: "https://www.npmjs.com/package/@aayurt/8848-ui-core" },
  { label: "GitHub", href: "https://github.com" },
  { label: "MIT License", href: "https://opensource.org/licenses/MIT" },
];

export function SiteFooter() {
  return (
    <footer className="w-full border-t border-stone-200 bg-white dark:border-white/[0.08] dark:bg-[#09090B] transition-colors">
      <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-[1.5fr_1fr_1fr]">
        <div className="space-y-3">
          <Link href="/" className="flex items-center gap-2 font-bold tracking-tight text-stone-900 dark:text-white text-base">
            <Mountain className="h-4 w-4 text-alpine-500 dark:text-alpine-400" />
            <span>8848</span>
            <span className="text-stone-400 dark:text-white/40 font-mono text-xs">UI</span>
          </Link>
          <p className="max-w-xs text-xs leading-relaxed text-stone-600 dark:text-white/50 font-sans">
            Minimal · Precise · Quiet · Technical · Himalayan · Elevated. A design system for modern
            and agentic interfaces.
          </p>
          <p className="text-[11px] font-mono text-stone-400 dark:text-white/30">
            ▲ 8,848 m — v0.1.0
          </p>
        </div>

        <nav aria-label="Explore" className="space-y-3">
          <div className="text-[11px] font-mono uppercase tracking-wider text-stone-500 dark:text-white/40 font-semibold">
            Explore
          </div>
          <ul className="space-y-2">
            {EXPLORE_LINKS.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-xs text-stone-600 hover:text-alpine-600 dark:text-white/60 dark:hover:text-alpine-400 transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Packages" className="space-y-3">
          <div className="text-[11px] font-mono uppercase tracking-wider text-stone-500 dark:text-white/40 font-semibold">
            Packages
          </div>
          <ul className="space-y-2">
            {PACKAGE_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-mono text-stone-600 hover:text-alpine-600 dark:text-white/60 dark:hover:text-alpine-400 transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="border-t border-stone-200 dark:border-white/[0.08]">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-1 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p className="text-[11px] font-mono text-stone-400 dark:text-white/30">
            8848 UI · Built by Aayurt Shrestha · MIT
          </p>
          <p className="text-[11px] font-mono text-stone-400 dark:text-white/30">
            Basecamp → Summit
          </p>
        </div>
      </div>
    </footer>
  );
}

"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { Button } from "@aayurt/8848-ui-react";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button
        variant="trail"
        size="xs"
        className="h-8 w-8 px-0 border border-slate-300 dark:border-white/10"
        aria-label="Toggle theme"
      >
        <span className="h-4 w-4" />
      </Button>
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <Button
      variant="trail"
      size="xs"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="h-8 w-8 px-0 border border-slate-300 dark:border-white/10 hover:border-slate-400 dark:hover:border-white/20 transition-all text-slate-700 dark:text-white"
      title={`Switch to ${isDark ? "light" : "dark"} mode`}
      aria-label="Toggle theme"
    >
      {isDark ? (
        <Sun className="h-4 w-4 text-amber-400 transition-transform rotate-0 hover:rotate-45" />
      ) : (
        <Moon className="h-4 w-4 text-alpine-600 transition-transform -rotate-12 hover:rotate-0" />
      )}
    </Button>
  );
}
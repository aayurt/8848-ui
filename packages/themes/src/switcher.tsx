"use client";

import * as React from "react";
import { useTheme, AltitudeTheme } from "./provider";

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex gap-2 p-2 bg-muted rounded-md inline-flex">
      {(["basecamp", "trail", "ridge", "summit", "death-zone"] as AltitudeTheme[]).map((t) => (
        <button
          key={t}
          onClick={() => setTheme(t)}
          className={`px-3 py-1 text-sm rounded ${
            theme === t ? "bg-background shadow-sm font-medium" : "text-muted-foreground hover:text-foreground"
          }`}
        >
          {t.charAt(0).toUpperCase() + t.slice(1).replace("-", " ")}
        </button>
      ))}
    </div>
  );
}

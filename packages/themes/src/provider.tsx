"use client";

import * as React from "react";

export type AltitudeTheme = "basecamp" | "trail" | "ridge" | "summit" | "death-zone";

interface ThemeContextType {
  theme: AltitudeTheme;
  setTheme: (theme: AltitudeTheme) => void;
}

const ThemeContext = React.createContext<ThemeContextType | undefined>(undefined);

export interface ThemeProviderProps {
  children: React.ReactNode;
  defaultTheme?: AltitudeTheme;
  storageKey?: string;
}

export function ThemeProvider({
  children,
  defaultTheme = "trail",
  storageKey = "8848-ui-theme",
}: ThemeProviderProps) {
  const [theme, setTheme] = React.useState<AltitudeTheme>(() => {
    if (typeof window !== "undefined") {
      const stored = window.localStorage.getItem(storageKey);
      if (stored) {
        return stored as AltitudeTheme;
      }
    }
    return defaultTheme;
  });

  React.useEffect(() => {
    const root = window.document.documentElement;
    root.setAttribute("data-theme", theme);
    window.localStorage.setItem(storageKey, theme);
  }, [theme, storageKey]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => {
  const context = React.useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

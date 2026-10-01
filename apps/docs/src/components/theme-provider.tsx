"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ThemeProvider as AltitudeThemeProvider } from "@aayurt/8848-ui-themes";

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return (
    <NextThemesProvider {...props}>
      <AltitudeThemeProvider>
        {children}
      </AltitudeThemeProvider>
    </NextThemesProvider>
  );
}

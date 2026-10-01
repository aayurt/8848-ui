"use client";

import * as React from "react";
import { ThemeSwitcher } from "@aayurt/8848-ui-themes";

export function AltitudeThemeToggle() {
  return (
    <div className="flex flex-col gap-2">
      <span className="text-sm text-muted-foreground font-medium">Altitude Theme</span>
      <ThemeSwitcher />
    </div>
  );
}

"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@aayurt/8848-ui-utils";

const telemetryChipVariants = cva(
  "inline-flex items-center gap-1.5 rounded-valley border font-mono text-xs font-medium tracking-tight px-2 py-0.5 transition-colors select-none",
  {
    variants: {
      variant: {
        altitude:
          "border-border bg-slate-100/80 text-slate-800 dark:bg-slate-900/80 dark:text-slate-200",
        summit:
          "border-alpine-500/30 bg-alpine-50 text-alpine-700 dark:border-alpine-500/30 dark:bg-alpine-950/40 dark:text-alpine-300",
        live:
          "border-emerald-500/30 bg-emerald-50 text-emerald-700 dark:border-emerald-500/30 dark:bg-emerald-950/40 dark:text-emerald-300",
        muted:
          "border-border bg-transparent text-slate-500 dark:text-slate-400",
      },
      size: {
        sm: "text-[10px] px-1.5 py-0.5 gap-1",
        md: "text-xs px-2 py-0.5 gap-1.5",
        lg: "text-sm px-2.5 py-1 gap-2",
      },
    },
    defaultVariants: {
      variant: "altitude",
      size: "md",
    },
  }
);

export interface TelemetryChipProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof telemetryChipVariants> {
  icon?: React.ReactNode;
}

export const TelemetryChip = React.forwardRef<HTMLSpanElement, TelemetryChipProps>(
  ({ className, variant, size, icon, children, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(telemetryChipVariants({ variant, size, className }))}
        {...props}
      >
        {icon && <span className="opacity-75">{icon}</span>}
        {children}
      </span>
    );
  }
);
TelemetryChip.displayName = "TelemetryChip";
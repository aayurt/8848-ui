"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@aayurt/8848-ui-utils";

const progressTrackVariants = cva(
  "relative h-2 w-full overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800",
  {
    variants: {
      variant: {
        default: "bg-slate-200 dark:bg-slate-800",
        summit: "bg-alpine-100 dark:bg-alpine-900/30",
        warning: "bg-sunrise-100 dark:bg-sunrise-900/30",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

const progressIndicatorVariants = cva(
  "h-full w-full flex-1 rounded-full transition-transform duration-normal ease-smooth",
  {
    variants: {
      variant: {
        default: "bg-slate-900 dark:bg-slate-100",
        summit: "bg-alpine-500 dark:bg-alpine-400",
        warning: "bg-sunrise-500 dark:bg-sunrise-400",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface ProgressProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof progressTrackVariants> {
  value: number;
  max?: number;
}

const Progress = React.forwardRef<HTMLDivElement, ProgressProps>(
  ({ className, variant, value, max = 100, ...props }, ref) => {
    const clamped = Math.min(Math.max(value, 0), max);
    const percentage = max === 0 ? 0 : (clamped / max) * 100;

    return (
      <div
        ref={ref}
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={max}
        aria-valuenow={Math.round(clamped)}
        className={cn(progressTrackVariants({ variant }), className)}
        {...props}
      >
        <div
          className={cn(progressIndicatorVariants({ variant }))}
          style={{ transform: `translateX(-${100 - percentage}%)` }}
        />
      </div>
    );
  }
);
Progress.displayName = "Progress";

export { Progress, progressTrackVariants, progressIndicatorVariants };
export type { VariantProps as ProgressVariantProps };

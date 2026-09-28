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
  "h-full w-full flex-1 rounded-full transition-transform duration-slow ease-smooth",
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
  value?: number;
  max?: number;
  /**
   * Overlay animated diagonal stripes on the fill.
   * @default true
   */
  animated?: boolean;
  /**
   * Looping slide animation for unknown progress. Ignores `value`.
   * @default false
   */
  indeterminate?: boolean;
}

const Progress = React.forwardRef<HTMLDivElement, ProgressProps>(
  (
    { className, variant, value = 0, max = 100, animated = true, indeterminate = false, ...props },
    ref
  ) => {
    const clamped = Math.min(Math.max(value, 0), max);
    const percentage = max === 0 ? 0 : (clamped / max) * 100;

    return (
      <div
        ref={ref}
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={max}
        aria-valuenow={indeterminate ? undefined : Math.round(clamped)}
        className={cn(progressTrackVariants({ variant }), className)}
        {...props}
      >
        {indeterminate ? (
          <div
            className={cn(
              progressIndicatorVariants({ variant }),
              "animate-progress-indeterminate w-1/4 flex-none"
            )}
          />
        ) : (
          <div
            className={cn(progressIndicatorVariants({ variant }), "relative")}
            style={{ transform: `translateX(-${100 - percentage}%)` }}
          >
            {animated && percentage > 0 && (
              <div
                aria-hidden="true"
                className="progress-stripes animate-progress-stripes absolute inset-0 rounded-full"
              />
            )}
          </div>
        )}
      </div>
    );
  }
);
Progress.displayName = "Progress";

export { Progress, progressTrackVariants, progressIndicatorVariants };
export type { VariantProps as ProgressVariantProps };

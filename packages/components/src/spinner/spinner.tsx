"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@aayurt/8848-ui-utils";
import { LoaderCircle } from "lucide-react";

const spinnerVariants = cva("animate-spin", {
  variants: {
    size: {
      xs: "h-3 w-3",
      sm: "h-4 w-4",
      md: "h-6 w-6",
      lg: "h-8 w-8",
      xl: "h-10 w-10",
    },
    tone: {
      inherit: "text-current",
      alpine: "text-alpine-500 dark:text-alpine-400",
      slate: "text-slate-400 dark:text-slate-500",
      white: "text-white",
    },
  },
  defaultVariants: {
    size: "md",
    tone: "alpine",
  },
});

export interface SpinnerProps
  extends Omit<React.HTMLAttributes<HTMLSpanElement>, "children">,
    VariantProps<typeof spinnerVariants> {
  label?: string;
}

const Spinner = React.forwardRef<HTMLSpanElement, SpinnerProps>(
  ({ className, size, tone, label = "Loading", ...props }, ref) => (
    <span
      ref={ref}
      role="status"
      aria-label={label}
      className={cn("inline-flex shrink-0 items-center justify-center", className)}
      {...props}
    >
      <LoaderCircle aria-hidden="true" className={cn(spinnerVariants({ size, tone }))} />
    </span>
  )
);
Spinner.displayName = "Spinner";

export { Spinner, spinnerVariants };
export type { SpinnerProps as SpinnerPropsType };

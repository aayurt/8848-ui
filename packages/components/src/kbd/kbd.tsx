"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@aayurt/8848-ui-utils";

const kbdVariants = cva(
  "inline-flex select-none items-center gap-1 rounded-valley border border-b-2 border-border bg-slate-100 font-mono font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-300",
  {
    variants: {
      size: {
        sm: "px-1 py-px text-[10px] leading-4",
        md: "px-1.5 py-0.5 text-xs leading-5",
        lg: "px-2 py-1 text-sm leading-6",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);

export interface KbdProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof kbdVariants> {}

const Kbd = React.forwardRef<HTMLElement, KbdProps>(
  ({ className, size, ...props }, ref) => (
    <kbd ref={ref} className={cn(kbdVariants({ size }), className)} {...props} />
  )
);
Kbd.displayName = "Kbd";

export { Kbd, kbdVariants };
export type { KbdProps as KbdPropsType };

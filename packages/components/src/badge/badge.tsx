"use client";

import * as React from "react";
import * as BadgePrimitive from "@radix-ui/react-badge";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@aayurt/8848-ui-utils";

/**
 * Badge variants — altitude/elevation themed
 * 
 * Variants:
 * - altitude: Standard info badge
 * - elevation: Primary/success state
 * - distance: Secondary/info state
 * - summit: Accent/highlight state
 * - danger: Warning/error state
 * - contour: Outline style
 */
const badgeVariants = cva(
  "inline-flex items-center rounded-ridge border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        altitude: "border-transparent bg-slate-100 text-slate-900 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-700",
        elevation: "border-transparent bg-alpine-100 text-alpine-800 hover:bg-alpine-200 dark:bg-alpine-900/30 dark:text-alpine-300 dark:hover:bg-alpine-900/50",
        distance: "border-transparent bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700",
        summit: "border-transparent bg-sunrise-100 text-sunrise-800 hover:bg-sunrise-200 dark:bg-sunrise-900/30 dark:text-sunrise-300 dark:hover:bg-sunrise-900/50",
        danger: "border-transparent bg-red-100 text-red-800 hover:bg-red-200 dark:bg-red-900/30 dark:text-red-300 dark:hover:bg-red-900/50",
        contour: "border-slate-300 text-slate-700 hover:bg-slate-100 dark:border-slate-600 dark:text-slate-300 dark:hover:bg-slate-800",
      },
      size: {
        sm: "px-2 py-0.5 text-[10px]",
        md: "px-2.5 py-0.5 text-xs",
        lg: "px-3 py-1 text-sm",
      },
    },
    defaultVariants: {
      variant: "altitude",
      size: "md",
    },
  }
);

interface BadgeProps extends React.ComponentPropsWithoutRef<typeof BadgePrimitive.Root>, VariantProps<typeof badgeVariants> {}

const Badge = React.forwardRef<React.ElementRef<typeof BadgePrimitive.Root>, BadgeProps>(
  ({ className, variant, size, ...props }, ref) => (
    <BadgePrimitive.Root
      ref={ref}
      className={cn(badgeVariants({ variant, size, className }))}
      {...props}
    />
  )
);
Badge.displayName = BadgePrimitive.Root.displayName;

export { Badge, badgeVariants };
export type { BadgeProps };
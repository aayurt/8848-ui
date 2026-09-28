"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@aayurt/8848-ui-utils";

/**
 * Alert variants — mountain signal beacons
 *
 * Variants:
 * - default: Neutral basecamp notice
 * - alpine: Informational (brand blue)
 * - forest: Success state
 * - sunrise: Warning state
 * - danger: Error state
 */
const alertVariants = cva(
  "relative flex w-full items-start gap-3 rounded-ridge border p-4 text-sm [&>svg]:mt-0.5 [&>svg]:h-4 [&>svg]:w-4 [&>svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "border-border bg-white text-slate-900 dark:bg-slate-900 dark:text-slate-100",
        alpine:
          "border-alpine-500/30 bg-alpine-100 text-alpine-800 dark:border-alpine-400/30 dark:bg-alpine-900/20 dark:text-alpine-300 [&>svg]:text-alpine-600 dark:[&>svg]:text-alpine-400",
        forest:
          "border-green-500/30 bg-green-50 text-green-800 dark:border-green-400/30 dark:bg-green-900/20 dark:text-green-300 [&>svg]:text-green-600 dark:[&>svg]:text-green-400",
        sunrise:
          "border-sunrise-500/30 bg-sunrise-100 text-sunrise-800 dark:border-sunrise-400/30 dark:bg-sunrise-900/20 dark:text-sunrise-300 [&>svg]:text-sunrise-600 dark:[&>svg]:text-sunrise-400",
        danger:
          "border-red-500/30 bg-red-50 text-red-800 dark:border-red-400/30 dark:bg-red-900/20 dark:text-red-300 [&>svg]:text-red-600 dark:[&>svg]:text-red-400",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

interface AlertProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof alertVariants> {}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  ({ className, variant, ...props }, ref) => (
    <div ref={ref} role="alert" className={cn(alertVariants({ variant }), className)} {...props} />
  )
);
Alert.displayName = "Alert";

const AlertTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h5 ref={ref} className={cn("font-medium leading-none tracking-tight", className)} {...props} />
  )
);
AlertTitle.displayName = "AlertTitle";

const AlertDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("text-sm opacity-90 [&_p]:leading-relaxed", className)} {...props} />
  )
);
AlertDescription.displayName = "AlertDescription";

export { Alert, AlertTitle, AlertDescription, alertVariants };
export type { AlertProps };

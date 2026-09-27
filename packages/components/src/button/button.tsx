"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@aayurt/8848-ui-utils";

/**
 * Button variants — mountain expedition themed
 * 
 * Variants:
 * - hiker: Standard trail button (default)
 * - climber: Primary action, prominent
 * - summit: Highest priority, accent color
 * - trail: Outlined, secondary actions
 * - base-camp: Ghost style, minimal
 * - ridge: Destructive/dangerous actions
 */
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-ridge text-sm font-medium transition-all duration-normal ease-smooth focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]",
  {
    variants: {
      variant: {
        hiker: "bg-slate-100 text-slate-900 hover:bg-slate-200 active:bg-slate-300 shadow-trail hover:shadow-ridge dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-700 dark:active:bg-slate-600",
        climber: "bg-alpine-500 text-alpine-500-foreground hover:bg-alpine-600 active:bg-alpine-700 shadow-ridge hover:shadow-summit",
        summit: "bg-sunrise-500 text-sunrise-500-foreground hover:bg-sunrise-600 active:bg-sunrise-700 shadow-ridge hover:shadow-summit",
        trail: "border-2 border-slate-300 bg-transparent hover:bg-slate-100 active:bg-slate-200 dark:border-slate-600 dark:hover:bg-slate-800 dark:active:bg-slate-700",
        "base-camp": "bg-transparent hover:bg-slate-100 active:bg-slate-200 dark:hover:bg-slate-800 dark:active:bg-slate-700",
        ridge: "bg-red-500 text-red-500-foreground hover:bg-red-600 active:bg-red-700 shadow-ridge hover:shadow-summit",
      },
      size: {
        xs: "h-7 px-2.5 text-xs gap-1",
        sm: "h-9 px-3 text-sm",
        md: "h-10 px-4 py-2",
        lg: "h-11 px-8 text-base",
        xl: "h-12 px-10 text-lg",
        icon: "h-10 w-10",
      },
      elevation: {
        none: "",
        raised: "shadow-ridge hover:shadow-summit transition-shadow duration-normal",
        floating: "shadow-summit hover:shadow-expedition transition-shadow duration-normal",
      },
    },
    defaultVariants: {
      variant: "hiker",
      size: "md",
      elevation: "none",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  loading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, elevation, asChild = false, loading, disabled, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, elevation, className }))}
        ref={ref}
        disabled={disabled || loading}
        aria-busy={loading}
        {...props}
      >
        {loading && (
          <svg
            className="animate-spin h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="3"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}
        {children}
      </Comp>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
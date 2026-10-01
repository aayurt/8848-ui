"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@aayurt/8848-ui-utils";
import { Spinner } from "../spinner";
import { Ripple } from "@aayurt/8848-ui-motion";

/**
 * Button — 8848 spec: thin borders + compact sizing + restrained blue
 * + hover lift + 2px focus ring + whitespace.
 *
 * Sizes (h / px / radius / text):
 * - xs: 28px / 10px / 6px / 12px
 * - sm: 32px / 12px / 6px / 13px
 * - md (default): 36px / 14px / 7px / 14px
 * - lg: 40px / 16px / 8px / 15px
 * - xl: 44px / 20px / 9px / 16px
 *
 * Elevation (contrast/surface, not shadow):
 * ghost → outline → secondary → primary → summit
 *
 * Hover: translateY(-1px) + subtle shadow. Active: translateY(0).
 * Focus: 2px ring, 2px offset. Disabled: 50% opacity, no elevation.
 *
 * Mountain names: hiker, climber, summit, trail, base-camp, ridge.
 * shadcn aliases: default, secondary, outline, ghost, destructive, link.
 * daisyUI colors: info, success, warning.
 * daisyUI modifiers: shape (square, circle), wide, block.
 */
const buttonVariants = cva(
  "relative overflow-hidden inline-flex cursor-pointer items-center justify-center whitespace-nowrap text-sm font-medium transition-all duration-normal ease-smooth hover:-translate-y-px focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 active:translate-y-0 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none disabled:hover:translate-y-0 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        hiker:
          "border border-border bg-slate-100 text-slate-900 shadow-basecamp hover:shadow-trail dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-700",
        climber:
          "border border-alpine-700/40 bg-alpine-500 text-white shadow-basecamp hover:bg-alpine-600 hover:shadow-trail active:bg-alpine-700 dark:border-alpine-400/40 dark:bg-alpine-400 dark:hover:bg-alpine-300 dark:active:bg-alpine-500",
        summit:
          "border border-sunrise-700/40 bg-sunrise-500 text-slate-950 shadow-basecamp hover:bg-sunrise-600 hover:shadow-trail active:bg-sunrise-700 dark:border-sunrise-400/40 dark:text-white",
        trail:
          "border border-input bg-transparent hover:bg-slate-100 active:bg-slate-200 dark:hover:bg-slate-800 dark:active:bg-slate-700",
        "base-camp": "bg-transparent hover:bg-muted active:bg-muted dark:hover:bg-muted dark:active:bg-muted",
        ridge:
          "bg-destructive/10 text-destructive hover:bg-destructive/20 focus-visible:border-destructive/40 focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:hover:bg-destructive/30 dark:focus-visible:ring-destructive/40",
        default:
          "border border-alpine-700/40 bg-alpine-500 text-white shadow-basecamp hover:bg-alpine-600 hover:shadow-trail active:bg-alpine-700 dark:border-alpine-400/40 dark:bg-alpine-400 dark:hover:bg-alpine-300 dark:active:bg-alpine-500",
        secondary:
          "border border-border bg-secondary text-secondary-foreground hover:bg-[color-mix(in_oklab,var(--color-secondary),var(--color-foreground)_5%)] aria-expanded:bg-secondary aria-expanded:text-secondary-foreground",
        outline:
          "border border-border bg-background hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50",
        ghost:
          "bg-transparent hover:bg-muted hover:text-foreground active:bg-muted dark:hover:bg-muted dark:active:bg-muted",
        destructive:
          "bg-destructive/10 text-destructive hover:bg-destructive/20 focus-visible:border-destructive/40 focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:hover:bg-destructive/30 dark:focus-visible:ring-destructive/40",
        link: "text-alpine-600 underline-offset-4 hover:translate-y-0 hover:underline dark:text-alpine-400",
        info: "border border-alpine-700/40 bg-alpine-600 text-white shadow-basecamp hover:bg-alpine-700 hover:shadow-trail active:bg-alpine-800",
        success:
          "border border-green-800/40 bg-green-600 text-white shadow-basecamp hover:bg-green-700 hover:shadow-trail active:bg-green-800",
        warning:
          "border border-amber-600/40 bg-amber-400 text-amber-950 shadow-basecamp hover:bg-amber-500 hover:shadow-trail active:bg-amber-600",
      },
      size: {
        xs: "h-7 rounded-[6px] px-2.5 text-xs gap-1",
        sm: "h-8 rounded-[6px] px-3 text-[13px] gap-1.5 has-[[data-icon=inline-start]]:pl-2 has-[[data-icon=inline-end]]:pr-2",
        md: "h-9 rounded-[7px] px-3.5 text-sm gap-2",
        default: "h-9 rounded-[7px] px-3.5 text-sm gap-2",
        lg: "h-10 rounded-[8px] px-4 text-[15px] gap-2",
        xl: "h-11 rounded-[9px] px-5 text-base gap-2",
        icon: "h-9 w-9 rounded-[7px]",
        "icon-xs": "size-7 rounded-[6px]",
        "icon-sm": "size-8 rounded-[6px]",
        "icon-lg": "size-10 rounded-[8px]",
      },
      shape: {
        default: "",
        square: "aspect-square p-0",
        circle: "aspect-square rounded-summit p-0",
      },
      wide: {
        true: "w-64 max-w-full",
      },
      block: {
        true: "w-full",
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
  ({ className, variant, size, shape, wide, block, elevation, asChild = false, loading, disabled, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, shape, wide, block, elevation, className }))}
        ref={ref}
        disabled={disabled || loading}
        aria-busy={loading}
        {...props}
      >
        {loading && <Spinner size="sm" tone="inherit" data-icon="inline-start" />}
        {children}
        <Ripple />
      </Comp>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };

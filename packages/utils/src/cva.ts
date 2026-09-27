import { cva, type VariantProps } from "class-variance-authority";

/**
 * Re-export cva with design system defaults
 * All components should use this for consistent variant API
 */
export { cva, type VariantProps };

/**
 * Common variant configurations shared across components
 */

// Base interactive styles
export const interactiveBase = cva(
  "inline-flex items-center justify-center font-medium transition-colors duration-fast focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  { variants: {} }
);

// Base container styles
export const containerBase = cva("flex flex-col gap-2", { variants: {} });

// Base typography styles
export const textBase = cva("", {
  variants: {
    size: {
      xs: "text-xs leading-4",
      sm: "text-sm leading-5",
      base: "text-base leading-6",
      lg: "text-lg leading-7",
      xl: "text-xl leading-8",
      "2xl": "text-2xl leading-9",
      "3xl": "text-3xl leading-10",
      "4xl": "text-4xl leading-11",
    },
    weight: {
      normal: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold",
    },
    color: {
      default: "text-foreground",
      muted: "text-muted-foreground",
      primary: "text-primary",
      secondary: "text-secondary-foreground",
      destructive: "text-destructive",
      accent: "text-accent-foreground",
    },
  },
  defaultVariants: { size: "base", weight: "normal", color: "default" },
});
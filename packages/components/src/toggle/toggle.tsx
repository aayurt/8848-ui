"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@aayurt/8848-ui-utils";

const toggleVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-ridge text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-alpine-100 data-[state=on]:text-alpine-800 dark:data-[state=on]:bg-alpine-900/30 dark:data-[state=on]:text-alpine-300 [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-transparent hover:bg-slate-100 dark:hover:bg-slate-800",
        outline:
          "border border-input bg-transparent hover:bg-slate-100 dark:hover:bg-slate-800",
      },
      size: {
        sm: "h-8 px-2",
        md: "h-9 px-3",
        lg: "h-10 px-4",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
);

export interface ToggleProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof toggleVariants> {
  pressed?: boolean;
  defaultPressed?: boolean;
  onPressedChange?: (pressed: boolean) => void;
}

const Toggle = React.forwardRef<HTMLButtonElement, ToggleProps>(
  (
    {
      className,
      variant,
      size,
      pressed: pressedProp,
      defaultPressed = false,
      onPressedChange,
      onClick,
      children,
      ...props
    },
    ref
  ) => {
    const [uncontrolled, setUncontrolled] = React.useState(defaultPressed);
    const isControlled = pressedProp !== undefined;
    const pressed = isControlled ? pressedProp : uncontrolled;

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      const next = !pressed;
      if (!isControlled) setUncontrolled(next);
      onPressedChange?.(next);
      onClick?.(e);
    };

    return (
      <button
        ref={ref}
        type="button"
        aria-pressed={pressed}
        data-state={pressed ? "on" : "off"}
        className={cn(toggleVariants({ variant, size }), className)}
        onClick={handleClick}
        {...props}
      >
        {children}
      </button>
    );
  }
);
Toggle.displayName = "Toggle";

export { Toggle, toggleVariants };
export type { ToggleProps as TogglePropsType };

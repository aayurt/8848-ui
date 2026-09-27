"use client";

import * as React from "react";
import { Check } from "lucide-react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@aayurt/8848-ui-utils";

export interface CheckboxProps
  extends React.ComponentPropsWithoutRef<"div"> {
  asChild?: boolean;
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  disabled?: boolean;
}

export const Checkbox = React.forwardRef<HTMLDivElement, CheckboxProps>(
  ({ className, asChild = false, checked = false, onCheckedChange, disabled, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "div";
    return (
      <Comp
        ref={ref}
        className={cn(
          "flex items-center rounded-ridge border border-slate-400 bg-slate-50 py-3.5 px-4 text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
          className,
        )}
        {...props}
      >
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => onCheckedChange?.(e.target.checked)}
          className="hidden"
          disabled={disabled}
        />
        <Check className="shrink-0 h-4 w-4" />
        <span className="ml-2 flex-1 truncate">{children}</span>
      </Comp>
    );
  }
);
Checkbox.displayName = "Checkbox";

export { Checkbox };
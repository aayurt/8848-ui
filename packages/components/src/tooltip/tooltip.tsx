"use client";

import * as React from "react";
import { Tooltip as RadixTooltip, TooltipProvider as RadixTooltipProvider, TooltipTrigger as RadixTooltipTrigger, TooltipContent as RadixTooltipContent } from "@radix-ui/react-tooltip";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@aayurt/8848-ui-utils";

export interface TooltipProviderProps {
  children: React.ReactNode;
}

export const TooltipProvider = ({ children }: TooltipProviderProps) => {
  return <RadixTooltipProvider>{children}</RadixTooltipProvider>;
};
TooltipProvider.displayName = "TooltipProvider";

export interface TooltipTriggerProps
  extends React.ComponentPropsWithoutRef<"button"> {
  asChild?: boolean;
}

export const TooltipTrigger = React.forwardRef<HTMLButtonElement, TooltipTriggerProps>(
  ({ className, asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        ref={ref}
        className={cn("inline-flex items-center justify-center gap-2 rounded-ridge px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2", className)}
        {...props}
      >
        {children}
      </Comp>
    );
  }
);
TooltipTrigger.displayName = "TooltipTrigger";

export interface TooltipContentProps
  extends React.ComponentPropsWithoutRef<"div"> {
  asChild?: boolean;
}

export const TooltipContent = React.forwardRef<HTMLDivElement, TooltipContentProps>(
  ({ className, asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "div";
    return (
      <Comp
        ref={ref}
        className={cn(
          "rounded-ridge bg-slate-900 p-3 text-sm text-slate-100 shadow-expedition",
          className,
        )}
        {...props}
      >
        {children}
      </Comp>
    );
  }
);
TooltipContent.displayName = "TooltipContent";

export const Tooltip = React.forwardRef(
  ({ className, children, ...props }, ref) => {
    return (
      <RadixTooltip>
        <RadixTooltipTrigger asChild>
          {children}
        </RadixTooltipTrigger>
        <RadixTooltipContent className={cn("rounded-ridge bg-slate-900 p-3 text-sm text-slate-100 shadow-expedition", className)} />
      </RadixTooltip>
    );
  }
);
Tooltip.displayName = "Tooltip";

export { Tooltip, TooltipProvider, TooltipTrigger, TooltipContent };
"use client";

import * as React from "react";
import * as PopoverPrimitive from "@radix-ui/react-popover";
import { cn } from "@aayurt/8848-ui-utils";

const Popover = PopoverPrimitive.Root;

const PopoverTrigger = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <PopoverPrimitive.Trigger
    ref={ref}
    className={cn("inline-flex items-center", className)}
    {...props}
  />
));
PopoverTrigger.displayName = PopoverPrimitive.Trigger.displayName;

const PopoverContent = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>
>(({ className, side = "bottom", align = "start", children, ...props }, ref) => (
  <PopoverPrimitive.Portal>
    <PopoverPrimitive.Content
      ref={ref}
      className={cn(
        "z-50 rounded-ridge border bg-white p-3 shadow-lg transition-[box-shadow] data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:duration-[var(--animation-duration)] data-[state=open]:duration-[var(--animation-duration)]",
        "data-[state=closed]:data-[state=open]:animate-in",
        className
      )}
      side={side}
      align={align}
      {...props}
    >
      {children}
    </PopoverPrimitive.Content>
  </PopoverPrimitive.Portal>
));
PopoverContent.displayName = PopoverPrimitive.Content.displayName;

const PopoverAnchor = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Anchor>,
  React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Anchor>
>(({ className, ...props }, ref) => (
  <PopoverPrimitive.Anchor
    ref={ref}
    className={cn("inline-flex", className)}
    {...props}
  />
));
PopoverAnchor.displayName = PopoverPrimitive.Anchor.displayName;

export { Popover, PopoverTrigger, PopoverContent, PopoverAnchor };

export type {
  PopoverProps,
  PopoverTriggerProps,
  PopoverContentProps,
  PopoverAnchorProps,
} from "@radix-ui/react-popover";
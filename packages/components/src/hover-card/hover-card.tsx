"use client";

import * as React from "react";
import * as HoverCardPrimitive from "@radix-ui/react-hover-card";
import { cn } from "@aayurt/8848-ui-utils";

const HoverCard = HoverCardPrimitive.Root;

const HoverCardTrigger = React.forwardRef<
  React.ElementRef<typeof HoverCardPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof HoverCardPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <HoverCardPrimitive.Trigger
    ref={ref}
    className={cn("inline-flex items-center", className)}
    {...props}
  />
));
HoverCardTrigger.displayName = HoverCardPrimitive.Trigger.displayName;

const HoverCardContent = React.forwardRef<
  React.ElementRef<typeof HoverCardPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof HoverCardPrimitive.Content>
>(({ className, ...props }, ref) => (
  <HoverCardPrimitive.Portal>
    <HoverCardPrimitive.Content
      ref={ref}
      className={cn(
        "rounded-ridge border bg-white p-3 shadow-lg transition-[opacity] data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:duration-[var(--animation-duration)] data-[state=open]:duration-[var(--animation-duration)]",
        className
      )}
      {...props}
    />
  </HoverCardPrimitive.Portal>
));
HoverCardContent.displayName = HoverCardPrimitive.Content.displayName;

export { HoverCard, HoverCardTrigger, HoverCardContent };
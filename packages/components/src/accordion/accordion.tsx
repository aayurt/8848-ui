"use client";

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { cn } from "@aayurt/8848-ui-utils";

export interface AccordionProps {
  defaultOpenItems?: number;
  multiple?: boolean;
}

const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item ref={ref} className={cn("rounded-ridge", className)} {...props} />
));
AccordionItem.displayName = AccordionPrimitive.Item.displayName;

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Trigger
    ref={ref}
    className={cn(
      "flex items-center justify-between py-2 pr-8 text-left text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&>span]:line-clamp-1 [&>span]:cursor-default [&>span]:select-none",
      "data-[state=open]:text-alpine-500 [&>span]:after:after:[border-color]:border-alpine-500 [&>span]:after:after:[transform]:rotate-45 [&>span]:after:after:[transition-property]:transform [&>span]:after:after:[transition-timing-function]:cubic-bezier(0.4, 0, 0.2, 1)",
      className
    )}
    {...props}
  />
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className={cn(
      "px-2 pb-2 text-sm overflow-hidden rounded-ridge transition-[height] data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:slide-out-to-start-0 data-[state=open]:slide-in-from-start-0 data-[state=closed]:duration-[var(--animation-duration)] data-[state=open]:duration-[var(--animation-duration)]",
      "data-[state=closed]:max-h-0 [data-state=open] {[data-state=open]>*:max-h-fit}",
      className
    )}
    {...props}
  >
    {children}
  </AccordionPrimitive.Content>
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
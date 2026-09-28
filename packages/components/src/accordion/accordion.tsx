"use client";

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
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
  <AccordionPrimitive.Item
    ref={ref}
    className={cn("border-b border-border last:border-0", className)}
    {...props}
  />
));
AccordionItem.displayName = AccordionPrimitive.Item.displayName;

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Trigger
    ref={ref}
    className={cn(
      "group flex w-full flex-1 items-center justify-between gap-4 py-3 text-left text-sm font-medium transition-colors hover:text-alpine-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=open]:text-alpine-600 dark:hover:text-alpine-400 dark:data-[state=open]:text-alpine-400",
      className
    )}
    {...props}
  >
    {children}
    <ChevronDown
      aria-hidden="true"
      className="h-4 w-4 shrink-0 text-slate-400 transition-transform duration-normal ease-smooth group-data-[state=open]:rotate-180"
    />
  </AccordionPrimitive.Trigger>
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className={cn(
      "grid transition-all duration-normal ease-smooth data-[state=closed]:grid-rows-[0fr] data-[state=open]:grid-rows-[1fr]",
      className
    )}
    {...props}
  >
    <div className="overflow-hidden">
      <div className="pb-3 text-sm text-slate-600 dark:text-slate-300">{children}</div>
    </div>
  </AccordionPrimitive.Content>
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };

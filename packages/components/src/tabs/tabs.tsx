"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@aayurt/8848-ui-utils";

const tabsVariants = cva(
  "flex items-center rounded-ridge border border-slate-300 bg-slate-50 px-1",
  {
    variants: {
      variant: {
        default: "border-slate-300 bg-slate-50",
        sunrise: "border-sunrise-500 bg-sunrise-100 text-sunrise-600",
        alpine: "border-alpine-500 bg-alpine-100 text-alpine-600",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface TabsListProps
  extends React.ComponentPropsWithoutRef<"div"> {
  asChild?: boolean;
}

export const TabsList = React.forwardRef<HTMLDivElement, TabsListProps>(
  ({ className, asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "div";
    return (
      <Comp
        ref={ref}
        className={cn(tabsVariants({ variant: "default", className }))}
        {...props}
      >
        {children}
      </Comp>
    );
  }
);
TabsList.displayName = "TabsList";

export interface TabsTriggerProps
  extends React.ComponentPropsWithoutRef<"button"> {
  asChild?: boolean;
  disabled?: boolean;
}

export const TabsTrigger = React.forwardRef<HTMLButtonElement, TabsTriggerProps>(
  ({ className, disabled = false, asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        ref={ref}
        disabled={disabled}
        className={cn(
          "inline-flex items-center justify-center rounded-ridge px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 data-[disabled]:opacity-50 data-[disabled]:pointer-events-none bg-slate-50 text-slate-600 hover:bg-slate-100 dark:bg-slate-900 dark:text-slate-100 hover:data-[disabled]:bg-slate-800 dark: hover:bg-slate-600",
          className,
        )}
        {...props}
      >
        {children}
      </Comp>
    );
  }
);
TabsTrigger.displayName = "TabsTrigger";

export interface TabsContentProps
  extends React.ComponentPropsWithoutRef<"div"> {
  asChild?: boolean;
}

export const TabsContent = React.forwardRef<HTMLDivElement, TabsContentProps>(
  ({ className, asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "div";
    return (
      <Comp
        ref={ref}
        className={cn(
          "mt-2 rounded-ridge bg-slate-900 p-4 shadow-expedition min-w-0",
          className,
        )}
        {...props}
      >
        {children}
      </Comp>
    );
  }
);
TabsContent.displayName = "TabsContent";

export const Tabs = React.forwardRef<
  HTMLElement,
  React.HTMLAttributes<HTMLElement>
>(({ className, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("w-full", className)}
      {...props}
    >
      <TabsList>{children}</TabsList>
    </div>
  );
});
Tabs.displayName = "Tabs";

export { Tabs, TabsList, TabsTrigger, TabsContent };
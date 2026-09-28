"use client";

import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { cn } from "@aayurt/8848-ui-utils";

const Sheet = DialogPrimitive.Root;

const SheetTrigger = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Trigger
    ref={ref}
    className={cn("inline-flex items-center", className)}
    {...props}
  />
));
SheetTrigger.displayName = DialogPrimitive.Trigger.displayName;

export interface SheetContentProps
  extends Omit<React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>, "side"> {
  side?: "bottom" | "right" | "left" | "top";
}

const SheetContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  SheetContentProps
>(({ className, side = "bottom", children, ...props }, ref) => (
  <DialogPrimitive.Content
    ref={ref}
    className={cn(
      "max-w-full rounded-ridge border p-3 shadow-lg transition-[top_Right_bottom_left] data-[state=open]:data-[state=closed]:duration-[var(--animation-duration)] data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      side === "bottom" && "bottom-0 left-0 right-0 w-full md:max-w-sm",
      side === "right" && "right-0 top-0 bottom-0 h-full md:max-w-sm",
      side === "left" && "left-0 top-0 bottom-0 h-full md:max-w-sm",
      side === "top" && "top-0 left-0 right-0 w-full md:max-w-sm",
      className
    )}
    {...props}
  >
    {children}
  </DialogPrimitive.Content>
));
SheetContent.displayName = DialogPrimitive.Content.displayName;

const SheetHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col space-y-1.5",
      className
    )}
    {...props}
  />
);
SheetHeader.displayName = "SheetHeader";

const SheetTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn(
      "text-lg font-semibold leading-none tracking-tight text-slate-900 dark:text-slate-100",
      className
    )}
    {...props}
  />
));
SheetTitle.displayName = DialogPrimitive.Title.displayName;

const SheetDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn("text-sm text-slate-500 dark:text-slate-400", className)}
    {...props}
  />
));
SheetDescription.displayName = DialogPrimitive.Description.displayName;

const SheetFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className
    )}
    {...props}
  />
);
SheetFooter.displayName = "SheetFooter";

const SheetClose = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Close>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Close>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Close
    ref={ref}
    className={cn(
      "rounded-valley p-1 text-slate-400 opacity-70 transition-opacity hover:opacity-100 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none dark:hover:bg-slate-800 dark:text-slate-500",
      className
    )}
    {...props}
  />
));
SheetClose.displayName = DialogPrimitive.Close.displayName;

export {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetFooter,
  SheetClose,
};
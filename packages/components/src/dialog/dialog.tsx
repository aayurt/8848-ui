"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@aayurt/8848-ui-utils";

const dialogVariants = cva(
  "hidden fixed inset-0 z-50",
  {
    variants: {
      variant: {
        default: "flex items-center justify-center",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface DialogTriggerProps
  extends React.ComponentPropsWithoutRef<"button"> {
  asChild?: boolean;
}

export const DialogTrigger = React.forwardRef<HTMLButtonElement, DialogTriggerProps>(
  ({ className, asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        ref={ref}
        className={cn("inline-flex items-center justify-center gap-2 rounded-ridge px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50", className)}
        {...props}
      >
        {children}
      </Comp>
    );
  }
);
DialogTrigger.displayName = "DialogTrigger";

export interface DialogContentProps
  extends React.ComponentPropsWithoutRef<"div"> {
  asChild?: boolean;
}

export const DialogContent = React.forwardRef<HTMLDivElement, DialogContentProps>(
  ({ className, asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "div";
    return (
      <Comp
        ref={ref}
        className={cn(
          "bg-slate-900 p-6 rounded-ridge shadow-expedition max-w-md w-full items-center justify-center text-sm align-middle",
          className,
        )}
        {...props}
      >
        {children}
      </Comp>
    );
  }
);
DialogContent.displayName = "DialogContent";

export interface DialogOverlayProps
  extends React.ComponentPropsWithoutRef<"div"> {
  asChild?: boolean;
}

export const DialogOverlay = React.forwardRef<HTMLDivElement, DialogOverlayProps>(
  ({ className, asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "div";
    return (
      <Comp
        ref={ref}
        className={cn("fixed inset-0 bg-black/60 backdrop-blur-sm z-40", className)}
        {...props}
      />
    );
  }
);
DialogOverlay.displayName = "DialogOverlay";

export interface DialogCloseProps
  extends React.ComponentPropsWithoutRef<"button"> {
  asChild?: boolean;
}

export const DialogClose = React.forwardRef<HTMLButtonElement, DialogCloseProps>(
  ({ className, asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        ref={ref}
        className={cn("p-2 rounded-pointer hover:bg-slate-200 dark:hover:bg-slate-700", className)}
        {...props}
      >
        {children}
      </Comp>
    );
  }
);
DialogClose.displayName = "DialogClose";

export interface DialogHeaderProps
  extends React.ComponentPropsWithoutRef<"div"> {
  asChild?: boolean;
}

export const DialogHeader = React.forwardRef<HTMLDivElement, DialogHeaderProps>(
  ({ className, asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "div";
    return (
      <Comp
        ref={ref}
        className={cn("flex items-center justify-between pb-3", className)}
        {...props}
      >
        {children}
      </Comp>
    );
  }
);
DialogHeader.displayName = "DialogHeader";

export interface DialogFooterProps
  extends React.ComponentPropsWithoutRef<"div"> {
  asChild?: boolean;
}

export const DialogFooter = React.forwardRef<HTMLDivElement, DialogFooterProps>(
  ({ className, asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "div";
    return (
      <Comp
        ref={ref}
        className={cn("flex items-center justify-end pt-3", className)}
        {...props}
      >
        {children}
      </Comp>
    );
  }
);
DialogFooter.displayName = "DialogFooter";

export interface DialogTitleProps
  extends React.ComponentPropsWithoutRef<"div"> {
  asChild?: boolean;
}

export const DialogTitle = React.forwardRef<HTMLDivElement, DialogTitleProps>(
  ({ className, asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "div";
    return (
      <Comp
        ref={ref}
        className={cn("text-slate-100 text-xl font-semibold tracking-tight", className)}
        {...props}
      >
        {children}
      </Comp>
    );
  }
);
DialogTitle.displayName = "DialogTitle";

export interface DialogDescriptionProps
  extends React.ComponentPropsWithoutRef<"div"> {
  asChild?: boolean;
}

export const DialogDescription = React.forwardRef<HTMLDivElement, DialogDescriptionProps>(
  ({ className, asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "div";
    return (
      <Comp
        ref={ref}
        className={cn("text-slate-400 text-sm mt-1", className)}
        {...props}
      >
        {children}
      </Comp>
    );
  }
);
DialogDescription.displayName = "DialogDescription";

export const DialogPortal = React.forwardRef<
  HTMLElement,
  React.HTMLAttributes<HTMLElement>
>(({ className, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("fixed inset-0 z-40", className)}
      {...props}
    >
      {children}
    </div>
  );
});
DialogPortal.displayName = "DialogPortal";

export const Dialog = React.forwardRef<
  HTMLElement,
  React.HTMLAttributes<HTMLElement>
>(({ className, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("hidden w-full max-w-md bg-slate-900 rounded-ridge p-6 shadow-expedition", className)}
      {...props}
    >
      <DialogOverlay />
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{children}</DialogTitle>
        </DialogHeader>
      </DialogContent>
    </div>
  );
});
Dialog.displayName = "Dialog";

export { Dialog, DialogPortal, DialogOverlay, DialogClose, DialogTrigger, DialogContent, DialogHeader, DialogFooter, DialogTitle, DialogDescription };
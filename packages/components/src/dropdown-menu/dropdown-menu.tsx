"use client";

import * as React from "react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuGroup,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuRadioGroup,
} from "@radix-ui/react-dropdown-menu";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@aayurt/8848-ui-utils";

export interface DropdownMenuTriggerProps
  extends React.ComponentPropsWithoutRef<"button"> {
  asChild?: boolean;
}

export const DropdownMenuTrigger = React.forwardRef<HTMLButtonElement, DropdownMenuTriggerProps>(
  ({ className, asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        ref={ref}
        className={cn("inline-flex items-center justify-center rounded-ridge px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2", className)}
        {...props}
      >
        {children}
      </Comp>
    );
  }
);
DropdownMenuTrigger.displayName = "DropdownMenuTrigger";

export interface DropdownMenuContentProps
  extends React.ComponentPropsWithoutRef<"div"> {
  asChild?: boolean;
}

export const DropdownMenuContent = React.forwardRef<HTMLDivElement, DropdownMenuContentProps>(
  ({ className, asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "div";
    return (
      <Comp
        ref={ref}
        className={cn("rounded-ridge bg-slate-900 p-2 text-sm shadow-expedition", className)}
        {...props}
      >
        {children}
      </Comp>
    );
  }
);
DropdownMenuContent.displayName = "DropdownMenuContent";

export interface DropdownMenuItemProps
  extends React.ComponentPropsWithoutRef<"button"> {
  asChild?: boolean;
}

export const DropdownMenuItem = React.forwardRef<HTMLButtonElement, DropdownMenuItemProps>(
  ({ className, asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        ref={ref}
        className={cn("rounded-ridge px-4 py-1.5 text-sm hover:bg-slate-100 dark:hover:bg-slate-800", className)}
        {...props}
      >
        {children}
      </Comp>
    );
  }
);
DropdownMenuItem.displayName = "DropdownMenuItem";

export interface DropdownMenuCheckboxItemProps
  extends React.ComponentPropsWithoutRef<"button"> {
  asChild?: boolean;
}

export const DropdownMenuCheckboxItem = React.forwardRef<HTMLButtonElement, DropdownMenuCheckboxItemProps>(
  ({ className, asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        ref={ref}
        className={cn("flex items-center rounded-ridge px-4 py-1.5 text-sm select-none hover:bg-slate-100 dark:hover:bg-slate-800", className)}
        {...props}
      >
        {children}
      </Comp>
    );
  }
);
DropdownMenuCheckboxItem.displayName = "DropdownMenuCheckboxItem";

export interface DropdownMenuRadioItemProps
  extends React.ComponentPropsWithoutRef<"button"> {
  asChild?: boolean;
}

export const DropdownMenuRadioItem = React.forwardRef<HTMLButtonElement, DropdownMenuRadioItemProps>(
  ({ className, asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        ref={ref}
        className={cn("flex items-center rounded-ridge px-4 py-1.5 text-sm select-none hover:bg-slate-100 dark:hover:bg-slate-800", className)}
        {...props}
      >
        {children}
      </Comp>
    );
  }
);
DropdownMenuRadioItem.displayName = "DropdownMenuRadioItem";

export interface DropdownMenuLabelProps
  extends React.ComponentPropsWithoutRef<"div"> {
  asChild?: boolean;
}

export const DropdownMenuLabel = React.forwardRef<HTMLDivElement, DropdownMenuLabelProps>(
  ({ className, asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "div";
    return (
      <Comp
        ref={ref}
        className={cn("px-2 py-1.5 text-sm caption-font color-muted", className)}
        {...props}
      >
        {children}
      </Comp>
    );
  }
);
DropdownMenuLabel.displayName = "DropdownMenuLabel";

export interface DropdownMenuSeparatorProps
  extends React.ComponentPropsWithoutRef<"hr"> {
  asChild?: boolean;
}

export const DropdownMenuSeparator = React.forwardRef<HTMLHrElement, DropdownMenuSeparatorProps>(
  ({ className, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "hr";
    return (
      <Comp
        ref={ref}
        className={cn("my-1 h-px bg-slate-300", className)}
        {...props}
      >
        {children}
      </Comp>
    );
  }
);
DropdownMenuSeparator.displayName = "DropdownMenuSeparator";

export interface DropdownMenuShortcutProps
  extends React.ComponentPropsWithoutRef<"div"> {
  asChild?: boolean;
}

export const DropdownMenuShortcut = React.forwardRef<HTMLDivElement, DropdownMenuShortcutProps>(
  ({ className, asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "div";
    return (
      <Comp
        ref={ref}
        className={cn("mt-1 text-xs opacity-60", className)}
        {...props}
      >
        {children}
      </Comp>
    );
  }
);
DropdownMenuShortcut.displayName = "DropdownMenuShortcut";

export interface DropdownMenuGroupProps
  extends React.ComponentPropsWithoutRef<"div"> {
  asChild?: boolean;
}

export const DropdownMenuGroup = React.forwardRef<HTMLDivElement, DropdownMenuGroupProps>(
  ({ className, asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "div";
    return (
      <Comp
        ref={ref}
        className={cn("flex items-center justify-between px-2 py-1.5", className)}
        {...props}
      >
        {children}
      </Comp>
    );
  }
);
DropdownMenuGroup.displayName = "DropdownMenuGroup";

export interface DropdownMenuPortalProps
  extends React.ComponentPropsWithoutRef<"div"> {
  asChild?: boolean;
}

export const DropdownMenuPortal = React.forwardRef<HTMLDivElement, DropdownMenuPortalProps>(
  ({ className, asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "div";
    return (
      <Comp
        ref={ref}
        className={cn("fixed inset-0", className)}
        {...props}
      >
        {children}
      </Comp>
    );
  }
);
DropdownMenuPortal.displayName = "DropdownMenuPortal";

export interface DropdownMenuSubProps
  extends React.ComponentPropsWithoutRef<"div"> {
  asChild?: boolean;
}

export const DropdownMenuSub = React.forwardRef<HTMLDivElement, DropdownMenuSubProps>(
  ({ className, asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "div";
    return (
      <Comp
        ref={ref}
        className={cn("pr-8", className)}
        {...props}
      >
        {children}
      </Comp>
    );
  }
);
DropdownMenuSub.displayName = "DropdownMenuSub";

export interface DropdownMenuSubContentProps
  extends React.ComponentPropsWithoutRef<"div"> {
  asChild?: boolean;
}

export const DropdownMenuSubContent = React.forwardRef<HTMLDivElement, DropdownMenuSubContentProps>(
  ({ className, asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "div";
    return (
      <Comp
        ref={ref}
        className={cn(
          "rounded-ridge bg-slate-900 p-2 text-sm shadow-expedition",
          className,
        )}
        {...props}
      >
        {children}
      </Comp>
    );
  }
);
DropdownMenuSubContent.displayName = "DropdownMenuSubContent";

export interface DropdownMenuSubTriggerProps
  extends React.ComponentPropsWithoutRef<"button"> {
  asChild?: boolean;
}

export const DropdownMenuSubTrigger = React.forwardRef<HTMLButtonElement, DropdownMenuSubTriggerProps>(
  ({ className, asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        ref={ref}
        className={cn("ml-1 text-sm font-medium hover:text-sunrise-500", className)}
        {...props}
      >
        {children}
      </Comp>
    );
  }
);
DropdownMenuSubTrigger.displayName = "DropdownMenuSubTrigger";

export interface DropdownMenuRadioGroupProps {
  defaultValue?: string;
  value?: string;
  onValueChange?: (value: string) => void;
}

export const DropdownMenuRadioGroup = ({
  defaultValue,
  value,
  onValueChange,
  children,
  ...props
}: DropdownMenuRadioGroupProps) => {
  return (
    <div {...props}>
      {React.Children.map(children, (child) => React.cloneElement(child, {
        value: child.props.value || defaultValue,
        onValueChange: child.props.onValueChange || onValueChange,
      }))}
    </div>
  );
};
DropdownMenuRadioGroup.displayName = "DropdownMenuRadioGroup";

export const DropdownMenu = React.forwardRef<
  HTMLElement,
  React.HTMLAttributes<HTMLElement>
>(({ className, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("w-full", className)}
      {...props}
    >
      <DropdownMenuTrigger>{children}</DropdownMenuTrigger>
    </div>
  );
});
DropdownMenu.displayName = "DropdownMenu";

export { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuCheckboxItem, DropdownMenuRadioItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuGroup, DropdownMenuPortal, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuRadioGroup };
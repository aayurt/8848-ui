"use client";

import * as React from "react";
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import { cn } from "@aayurt/8848-ui-utils";

const NavigationMenu = NavigationMenuPrimitive.Root;

const NavigationMenuList = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.List>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.List
    ref={ref}
    className={cn("flex items-center", className)}
    {...props}
  />
));
NavigationMenuList.displayName = NavigationMenuPrimitive.List.displayName;

const NavigationMenuItem = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Item>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.Item
    ref={ref}
    className={cn("relative py-2 pl-8 pr-2 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent-500 dark:text-accent-400", className)}
    {...props}
  />
));
NavigationMenuItem.displayName = NavigationMenuPrimitive.Item.displayName;

const NavigationMenuTrigger = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.Trigger
    ref={ref}
    className={cn("w-full py-2 pl-8 pr-2 text-left text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent-500 dark:text-accent-400", className)}
    {...props}
  />
));
NavigationMenuTrigger.displayName = NavigationMenuPrimitive.Trigger.displayName;

const NavigationMenuContent = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Content
    ref={ref}
    className={cn(
      "z-50 rounded-ridge border bg-white p-3 shadow-ridge max-w-xs sm:max-w-md origin-top-left data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:duration-[var(--animation-duration)] data-[state=open]:duration-[var(--animation-duration)]",
      "data-[state=closed]:data-[state=open]:animate-in",
      className
    )}
    {...props}
  >
    {children}
  </NavigationMenuPrimitive.Content>
));
NavigationMenuContent.displayName = NavigationMenuPrimitive.Content.displayName;

const NavigationMenuLink = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Link>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Link>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.Link
    ref={ref}
    className={cn("block py-1 pl-8 pr-2 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 hover:text-alpine-500 dark:hover:text-alpine-400", className)}
    {...props}
  />
));
NavigationMenuLink.displayName = NavigationMenuPrimitive.Link.displayName;

const NavigationMenuIndicator = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Indicator>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Indicator>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.Indicator
    ref={ref}
    className={cn("-bottom-1/2 left-1/2 h-0.5 w-6 rounded-full bg-alpine-500 transform -translate-x-1/2 translate-y-1/2 transition-transform ease-out", className)}
    {...props}
  />
));
NavigationMenuIndicator.displayName = NavigationMenuPrimitive.Indicator.displayName;

const NavigationMenuViewport = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Viewport>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Viewport>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.Viewport
    ref={ref}
    className={cn("flex-1 overflow-hidden", className)}
    {...props}
  />
));
NavigationMenuViewport.displayName = NavigationMenuPrimitive.Viewport.displayName;

export {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
  NavigationMenuIndicator,
  NavigationMenuViewport,
};
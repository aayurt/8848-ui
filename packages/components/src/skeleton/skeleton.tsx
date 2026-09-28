"use client";

import * as React from "react";
import { cn } from "@aayurt/8848-ui-utils";

const variants = {
  text: "h-4 w-full rounded-valley animate-pulse bg-slate-200 dark:bg-slate-700",
  circular: "h-8 w-8 rounded-full animate-pulse bg-slate-200 dark:bg-slate-700",
  rectangular: "h-6 w-12 rounded-ridge animate-pulse bg-slate-200 dark:bg-slate-700",
  card: "h-24 w-48 rounded-ridge animate-pulse bg-card dark:bg-card-foreground",
};

export interface SkeletonProps {
  variant?: "text" | "circular" | "rectangular" | "card";
  width?: number | string;
  height?: number | string;
  className?: string;
}

const Skeleton = React.forwardRef<HTMLDivElement, SkeletonProps>(({ className, variant = "text", width, height, ...props }, ref) => {
  const variantStyle = variants[variant as keyof typeof variants] || variants.text;
  const style: React.CSSProperties = {};

  if (width !== undefined) {
    style.width = typeof width === "number" ? `${width}px` : width;
  }
  if (height !== undefined) {
    style.height = typeof height === "number" ? `${height}px` : height;
  }

  return (
    <div
      ref={ref}
      className={cn(variantStyle, className)}
      style={style}
      {...props}
    />
  );
});

Skeleton.displayName = "Skeleton";

export { Skeleton };
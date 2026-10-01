"use client";

import * as React from "react";
import { cn } from "@aayurt/8848-ui-utils";

export interface ShimmerProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export function Shimmer({ className, ...props }: ShimmerProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden bg-slate-200 dark:bg-slate-800",
        className
      )}
      {...props}
    >
      <div
        className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent dark:via-white/10 animate-[shimmer_1.5s_infinite]"
        style={{
          animationName: "shimmer",
          animationDuration: "1.5s",
          animationIterationCount: "infinite",
        }}
      />
    </div>
  );
}

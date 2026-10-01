"use client";

import * as React from "react";
import { Typing } from "@aayurt/8848-ui-motion";
import { cn } from "@aayurt/8848-ui-utils";

export interface StreamingTextProps {
  text: string;
  speed?: number;
  className?: string;
}

export function StreamingText({ text, speed = 0.02, className }: StreamingTextProps) {
  return (
    <div className={cn("font-mono text-sm", className)}>
      <Typing text={text} speed={speed} />
    </div>
  );
}

"use client";

import * as React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@aayurt/8848-ui-utils";

export interface ScaleProps extends HTMLMotionProps<"div"> {
  show?: boolean;
  initialScale?: number;
  duration?: number;
  delay?: number;
  className?: string;
  children: React.ReactNode;
}

export function Scale({
  show = true,
  initialScale = 0.95,
  duration = 0.2,
  delay = 0,
  className,
  children,
  ...props
}: ScaleProps) {
  return (
    <motion.div
      initial={{ scale: initialScale, opacity: 0 }}
      animate={show ? { scale: 1, opacity: 1 } : { scale: initialScale, opacity: 0 }}
      exit={{ scale: initialScale, opacity: 0 }}
      transition={{ duration, delay, ease: [0.87, 0, 0.13, 1] }}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}

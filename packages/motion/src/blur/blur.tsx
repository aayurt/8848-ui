"use client";

import * as React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@aayurt/8848-ui-utils";

export interface BlurProps extends HTMLMotionProps<"div"> {
  show?: boolean;
  blur?: string;
  duration?: number;
  delay?: number;
  className?: string;
  children?: React.ReactNode;
}

export function Blur({
  show = true,
  blur = "10px",
  duration = 0.4,
  delay = 0,
  className,
  children,
  ...props
}: BlurProps) {
  return (
    <motion.div
      initial={{ filter: `blur(${blur})`, opacity: 0 }}
      animate={show ? { filter: "blur(0px)", opacity: 1 } : { filter: `blur(${blur})`, opacity: 0 }}
      exit={{ filter: `blur(${blur})`, opacity: 0 }}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}

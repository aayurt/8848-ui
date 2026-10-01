"use client";

import * as React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@aayurt/8848-ui-utils";

export interface FadeProps extends HTMLMotionProps<"div"> {
  show?: boolean;
  duration?: number;
  delay?: number;
  className?: string;
  children: React.ReactNode;
}

export function Fade({
  show = true,
  duration = 0.2,
  delay = 0,
  className,
  children,
  ...props
}: FadeProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: show ? 1 : 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}

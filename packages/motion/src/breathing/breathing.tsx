"use client";

import * as React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@aayurt/8848-ui-utils";

export interface BreathingProps extends HTMLMotionProps<"div"> {
  duration?: number;
  scale?: number;
  className?: string;
  children: React.ReactNode;
}

export function Breathing({
  duration = 2,
  scale = 1.05,
  className,
  children,
  ...props
}: BreathingProps) {
  return (
    <motion.div
      animate={{ scale: [1, scale, 1] }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}

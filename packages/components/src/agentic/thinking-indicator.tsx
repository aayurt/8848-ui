"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@aayurt/8848-ui-utils";

export interface ThinkingIndicatorProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function ThinkingIndicator({ className, size = "md", ...props }: ThinkingIndicatorProps) {
  const dotVariants = {
    initial: { y: 0, opacity: 0.3 },
    animate: {
      y: [-3, 3, -3],
      opacity: [0.3, 1, 0.3],
      transition: {
        repeat: Infinity,
        duration: 1.5,
        ease: "easeInOut"
      }
    }
  };

  const sizeClass = {
    sm: "w-1 h-1",
    md: "w-1.5 h-1.5",
    lg: "w-2 h-2"
  }[size];

  return (
    <div className={cn("flex items-center space-x-1.5", className)} {...props}>
      <motion.div
        variants={dotVariants}
        initial="initial"
        animate="animate"
        className={cn("rounded-full bg-primary", sizeClass)}
      />
      <motion.div
        variants={dotVariants}
        initial="initial"
        animate="animate"
        transition={{ delay: 0.2 }}
        className={cn("rounded-full bg-primary", sizeClass)}
      />
      <motion.div
        variants={dotVariants}
        initial="initial"
        animate="animate"
        transition={{ delay: 0.4 }}
        className={cn("rounded-full bg-primary", sizeClass)}
      />
    </div>
  );
}

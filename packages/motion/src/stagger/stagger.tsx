"use client";

import * as React from "react";
import { motion, HTMLMotionProps, Variants } from "framer-motion";
import { cn } from "@aayurt/8848-ui-utils";

export interface StaggerProps extends HTMLMotionProps<"div"> {
  staggerDelay?: number;
  className?: string;
  children: React.ReactNode;
}

export const StaggerItem = React.forwardRef<HTMLDivElement, HTMLMotionProps<"div">>(
  ({ className, children, ...props }, ref) => {
    const itemVariants: Variants = {
      hidden: { y: 20, opacity: 0 },
      visible: {
        y: 0,
        opacity: 1,
        transition: { type: "spring", stiffness: 300, damping: 24 }
      }
    };

    return (
      <motion.div ref={ref} variants={itemVariants} className={cn(className)} {...props}>
        {children}
      </motion.div>
    );
  }
);
StaggerItem.displayName = "StaggerItem";

export function Stagger({
  staggerDelay = 0.05,
  className,
  children,
  ...props
}: StaggerProps) {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay
      }
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}

"use client";

import * as React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@aayurt/8848-ui-utils";

export interface ExpandProps extends HTMLMotionProps<"div"> {
  isExpanded: boolean;
  className?: string;
  children: React.ReactNode;
}

export function Expand({
  isExpanded,
  className,
  children,
  ...props
}: ExpandProps) {
  return (
    <motion.div
      layout
      data-expanded={isExpanded}
      className={cn(className)}
      transition={{ layout: { type: "spring", bounce: 0.1, duration: 0.4 } }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

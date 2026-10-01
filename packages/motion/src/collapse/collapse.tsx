"use client";

import * as React from "react";
import { motion, AnimatePresence, HTMLMotionProps } from "framer-motion";
import { cn } from "@aayurt/8848-ui-utils";

export interface CollapseProps extends Omit<HTMLMotionProps<"div">, "animate" | "initial" | "exit"> {
  open: boolean;
  duration?: number;
  className?: string;
  children: React.ReactNode;
}

export function Collapse({
  open,
  duration = 0.2,
  className,
  children,
  ...props
}: CollapseProps) {
  return (
    <AnimatePresence initial={false}>
      {open && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration, ease: [0.16, 1, 0.3, 1] }}
          className={cn("overflow-hidden", className)}
          {...props}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

"use client";

import * as React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@aayurt/8848-ui-utils";

export interface SlideProps extends HTMLMotionProps<"div"> {
  show?: boolean;
  direction?: "up" | "down" | "left" | "right";
  distance?: number | string;
  duration?: number;
  delay?: number;
  className?: string;
  children: React.ReactNode;
}

export function Slide({
  show = true,
  direction = "up",
  distance = 20,
  duration = 0.2,
  delay = 0,
  className,
  children,
  ...props
}: SlideProps) {
  const getInitial = () => {
    switch (direction) {
      case "up": return { y: distance, opacity: 0 };
      case "down": return { y: -distance, opacity: 0 };
      case "left": return { x: distance, opacity: 0 };
      case "right": return { x: -distance, opacity: 0 };
    }
  };

  const getAnimate = () => {
    switch (direction) {
      case "up":
      case "down": return { y: 0, opacity: 1 };
      case "left":
      case "right": return { x: 0, opacity: 1 };
    }
  };

  return (
    <motion.div
      initial={getInitial()}
      animate={show ? getAnimate() : getInitial()}
      exit={getInitial()}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}

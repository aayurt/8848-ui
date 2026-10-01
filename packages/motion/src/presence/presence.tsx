"use client";

import * as React from "react";
import { AnimatePresence, AnimatePresenceProps } from "framer-motion";

export interface PresenceProps extends AnimatePresenceProps {
  children: React.ReactNode;
}

export function Presence({ children, ...props }: PresenceProps) {
  return (
    <AnimatePresence {...props}>
      {children}
    </AnimatePresence>
  );
}

"use client";

import React, { useState, MouseEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface RippleType {
  x: number;
  y: number;
  size: number;
  id: number;
}

export function Ripple() {
  const [ripples, setRipples] = useState<RippleType[]>([]);

  const addRipple = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height) * 2;
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;
    const newRipple = { x, y, size, id: Date.now() };

    setRipples((prev) => [...prev, newRipple]);
  };

  return (
    <div
      className="absolute inset-0 z-0 overflow-hidden"
      onMouseDown={addRipple}
    >
      <AnimatePresence>
        {ripples.map((ripple) => (
          <motion.span
            key={ripple.id}
            initial={{ opacity: 0.35, scale: 0 }}
            animate={{ opacity: 0, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            onAnimationComplete={() => {
              setRipples((prev) => prev.filter((r) => r.id !== ripple.id));
            }}
            className="absolute rounded-full bg-current pointer-events-none"
            style={{
              left: ripple.x,
              top: ripple.y,
              width: ripple.size,
              height: ripple.size,
            }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
}

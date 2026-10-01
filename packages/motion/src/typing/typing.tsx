"use client";

import * as React from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { cn } from "@aayurt/8848-ui-utils";

export interface TypingProps extends React.HTMLAttributes<HTMLSpanElement> {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
}

export function Typing({
  text,
  speed = 0.05,
  delay = 0,
  className,
  ...props
}: TypingProps) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  React.useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <span ref={ref} className={cn("inline-block", className)} {...props}>
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, display: "none" },
            visible: {
              opacity: 1,
              display: "inline-block",
              transition: { delay: delay + index * speed },
            },
          }}
        >
          {char}
        </motion.span>
      ))}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
        className="inline-block w-[0.5ch] h-[1em] bg-current ml-[2px] align-middle"
      />
    </span>
  );
}

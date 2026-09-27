/**
 * Visually hidden utility
 * For accessible hiding while keeping content available to screen readers
 */
import { cn } from "./cn";

/**
 * Visually hidden classes
 * Use for labels, descriptions, or content that should be announced but not seen
 */
export const visuallyHidden = cn(
  "absolute",
  "h-px",
  "w-px",
  "p-0",
  "m-[-1px]",
  "overflow-hidden",
  "whitespace-nowrap",
  "border-0",
  "[clip:rect(0,0,0,0)]"
);

/**
 * Visually hidden but focusable
 * Becomes visible on focus (for skip links, etc.)
 */
export const visuallyHiddenFocusable = cn(
  visuallyHidden,
  "focus:static",
  "focus:h-auto",
  "focus:w-auto",
  "focus:p-0",
  "focus:m-0",
  "focus:overflow-visible",
  "focus:whitespace-normal",
  "focus:clip-auto"
);
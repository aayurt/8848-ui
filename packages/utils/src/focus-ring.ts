/**
 * Focus ring utility
 * Consistent focus styles across all interactive components
 */
import { cn } from "./cn";

export interface FocusRingOptions {
  /** Ring width (default: 2) */
  width?: number;
  /** Ring color (default: ring) */
  color?: string;
  /** Offset width (default: 2) */
  offset?: number;
  /** Offset color (default: background) */
  offsetColor?: string;
  /** Apply only on focus-visible (default: true) */
  visibleOnly?: boolean;
}

/**
 * Generate focus ring classes
 */
export function focusRing(options: FocusRingOptions = {}): string {
  const {
    width = 2,
    color = "ring",
    offset = 2,
    offsetColor = "background",
    visibleOnly = true,
  } = options;

  const base = visibleOnly ? "focus-visible:outline-none" : "focus:outline-none";
  const ring = `focus-visible:ring-${width} focus-visible:ring-${color}`;
  const ringOffset = `focus-visible:ring-offset-${offset} focus-visible:ring-offset-${offsetColor}`;

  return cn(base, ring, ringOffset);
}

/**
 * Predefined focus ring variants
 */
export const focusRingVariants = {
  default: focusRing(),
  none: "",
  auto: focusRing({ visibleOnly: true }),
  always: focusRing({ visibleOnly: false }),
  inset: focusRing({ color: "ring", offset: 0 }),
  error: focusRing({ color: "destructive", offsetColor: "background" }),
} as const;
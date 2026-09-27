import * as React from "react";

/**
 * Generate a unique ID for accessibility
 * Similar to React 18's useId but with custom prefix
 */
let idCounter = 0;

export function useId(prefix = "8848"): string {
  return React.useId?.() ?? React.useMemo(() => `${prefix}-${++idCounter}`, [prefix]);
}
import * as React from "react";

export interface UseControllableStateProps<T> {
  /** The controlled value */
  value?: T;
  /** The default value for uncontrolled mode */
  defaultValue?: T;
  /** Callback when value changes */
  onChange?: (value: T) => void;
}

/**
 * Hook that handles both controlled and uncontrolled state patterns
 */
export function useControllableState<T>({
  value: controlledValue,
  defaultValue,
  onChange,
}: UseControllableStateProps<T>): [T | undefined, React.Dispatch<React.SetStateAction<T | undefined>>] {
  const isControlled = controlledValue !== undefined;
  const [uncontrolledValue, setUncontrolledValue] = React.useState<T | undefined>(defaultValue);
  
  const value = isControlled ? controlledValue : uncontrolledValue;
  
  const setValue: React.Dispatch<React.SetStateAction<T | undefined>> = React.useCallback(
    (next) => {
      const nextValue = typeof next === "function" ? (next as (prev: T | undefined) => T | undefined)(value) : next;
      if (!isControlled) {
        setUncontrolledValue(nextValue);
      }
      if (nextValue !== undefined) {
        onChange?.(nextValue);
      }
    },
    [isControlled, onChange, value]
  );

  return [value, setValue];
}
import * as React from "react";

type EventTargetType = EventTarget | null;

interface UseEventListenerOptions extends AddEventListenerOptions {
  target?: EventTargetType | (() => EventTargetType);
}

/**
 * Hook to add an event listener with proper cleanup
 */
export function useEventListener<K extends keyof WindowEventMap>(
  type: K,
  listener: (event: WindowEventMap[K]) => void,
  options?: UseEventListenerOptions
): void;
export function useEventListener<K extends keyof DocumentEventMap>(
  type: K,
  listener: (event: DocumentEventMap[K]) => void,
  options?: UseEventListenerOptions
): void;
export function useEventListener<K extends keyof HTMLElementEventMap>(
  type: K,
  listener: (event: HTMLElementEventMap[K]) => void,
  options?: UseEventListenerOptions
): void;
export function useEventListener(
  type: string,
  listener: EventListener,
  options?: UseEventListenerOptions
): void {
  const listenerRef = React.useRef(listener);
  listenerRef.current = listener;

  React.useEffect(() => {
    const target = typeof options?.target === "function" ? options.target() : options?.target ?? window;
    if (!target) return;

    const handler = (event: Event) => listenerRef.current(event);
    target.addEventListener(type, handler, options);
    return () => target.removeEventListener(type, handler, options);
  }, [type, options?.target, options?.capture, options?.passive, options?.once]);
}
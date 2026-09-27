import * as React from "react";

/**
 * Hook to match a media query
 */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = React.useState(false);

  React.useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, [matches, query]);

  return matches;
}

/**
 * Breakpoint hooks for common screen sizes
 */
export const useIsMobile = () => useMediaQuery("(max-width: 640px)");
export const useIsTablet = () => useMediaQuery("(min-width: 641px) and (max-width: 1024px)");
export const useIsDesktop = () => useMediaQuery("(min-width: 1025px)");
export const useIsWide = () => useMediaQuery("(min-width: 1280px)");
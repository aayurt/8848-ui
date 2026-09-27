/**
 * 8848 UI Color Tokens
 * Mountain-inspired palette — OKLCH for perceptual uniformity
 * Brand: oklch(0.55 0.18 250) — Alpine blue
 * Accent: oklch(0.65 0.18 35) — Sunrise orange
 */

export const colors = {
  // Mountain palette (OKLCH)
  mountain: {
    // Summit whites
    snow: "oklch(0.98 0.01 280)",
    ice: "oklch(0.94 0.02 270)",

    // Rock/slate tones
    slate: {
      50: "oklch(0.97 0.02 280)",
      100: "oklch(0.92 0.03 270)",
      200: "oklch(0.84 0.04 260)",
      300: "oklch(0.70 0.04 250)",
      400: "oklch(0.55 0.05 240)",
      500: "oklch(0.42 0.05 235)",
      600: "oklch(0.32 0.04 240)",
      700: "oklch(0.25 0.04 250)",
      800: "oklch(0.18 0.03 260)",
      900: "oklch(0.12 0.02 270)",
      950: "oklch(0.05 0.01 270)",
    },

    // Alpine blue (brand)
    alpine: {
      50: "oklch(0.95 0.03 250)",
      100: "oklch(0.90 0.06 250)",
      200: "oklch(0.82 0.10 250)",
      300: "oklch(0.72 0.14 250)",
      400: "oklch(0.63 0.17 250)",
      500: "oklch(0.55 0.18 250)",  // Brand color
      600: "oklch(0.48 0.16 250)",
      700: "oklch(0.40 0.14 250)",
      800: "oklch(0.33 0.12 250)",
      900: "oklch(0.27 0.10 250)",
      950: "oklch(0.20 0.08 250)",
    },

    // Sunrise accent
    sunrise: {
      50: "oklch(0.97 0.02 35)",
      100: "oklch(0.93 0.04 35)",
      200: "oklch(0.86 0.08 35)",
      300: "oklch(0.78 0.12 35)",
      400: "oklch(0.71 0.16 35)",
      500: "oklch(0.65 0.18 35)",  // Accent color
      600: "oklch(0.58 0.16 35)",
      700: "oklch(0.48 0.14 35)",
      800: "oklch(0.38 0.12 35)",
      900: "oklch(0.30 0.10 35)",
      950: "oklch(0.22 0.08 35)",
    },

    // Forest/vegetation
    forest: {
      50: "oklch(0.96 0.02 150)",
      100: "oklch(0.91 0.04 150)",
      200: "oklch(0.83 0.08 150)",
      300: "oklch(0.73 0.12 150)",
      400: "oklch(0.62 0.15 150)",
      500: "oklch(0.53 0.16 150)",
      600: "oklch(0.44 0.14 150)",
      700: "oklch(0.35 0.12 150)",
      800: "oklch(0.27 0.10 150)",
      900: "oklch(0.21 0.08 150)",
      950: "oklch(0.15 0.06 150)",
    },

    // Earth/terrain
    earth: {
      50: "oklch(0.97 0.02 60)",
      100: "oklch(0.92 0.04 60)",
      200: "oklch(0.84 0.07 60)",
      300: "oklch(0.74 0.10 60)",
      400: "oklch(0.63 0.13 60)",
      500: "oklch(0.52 0.14 60)",
      600: "oklch(0.43 0.12 60)",
      700: "oklch(0.34 0.10 60)",
      800: "oklch(0.26 0.08 60)",
      900: "oklch(0.20 0.06 60)",
      950: "oklch(0.14 0.04 60)",
    },
  },

  // Semantic colors (map to CSS variables)
  semantic: {
    primary: {
      DEFAULT: "var(--primary)",
      foreground: "var(--primary-foreground)",
      50: "var(--primary-50)",
      100: "var(--primary-100)",
      200: "var(--primary-200)",
      300: "var(--primary-300)",
      400: "var(--primary-400)",
      500: "var(--primary-500)",
      600: "var(--primary-600)",
      700: "var(--primary-700)",
      800: "var(--primary-800)",
      900: "var(--primary-900)",
      950: "var(--primary-950)",
    },

    secondary: {
      DEFAULT: "var(--secondary)",
      foreground: "var(--secondary-foreground)",
      50: "var(--secondary-50)",
      100: "var(--secondary-100)",
      200: "var(--secondary-200)",
      300: "var(--secondary-300)",
      400: "var(--secondary-400)",
      500: "var(--secondary-500)",
      600: "var(--secondary-600)",
      700: "var(--secondary-700)",
      800: "var(--secondary-800)",
      900: "var(--secondary-900)",
      950: "var(--secondary-950)",
    },

    destructive: {
      DEFAULT: "var(--destructive)",
      foreground: "var(--destructive-foreground)",
      50: "oklch(0.97 0.02 25)",
      100: "oklch(0.93 0.04 25)",
      200: "oklch(0.86 0.08 25)",
      300: "oklch(0.77 0.12 25)",
      400: "oklch(0.68 0.16 25)",
      500: "oklch(0.62 0.2 25)",
      600: "oklch(0.55 0.18 25)",
      700: "oklch(0.45 0.16 25)",
      800: "oklch(0.38 0.14 25)",
      900: "oklch(0.32 0.12 25)",
      950: "oklch(0.25 0.1 25)",
    },

    muted: {
      DEFAULT: "var(--muted)",
      foreground: "var(--muted-foreground)",
    },

    accent: {
      DEFAULT: "var(--accent)",
      foreground: "var(--accent-foreground)",
    },

    background: "var(--background)",
    foreground: "var(--foreground)",

    border: "var(--border)",
    input: "var(--input)",
    ring: "var(--ring)",

    card: {
      DEFAULT: "var(--card)",
      foreground: "var(--card-foreground)",
    },
    popover: {
      DEFAULT: "var(--popover)",
      foreground: "var(--popover-foreground)",
    },
  },

  // Chart colors (mountain-inspired)
  chart: {
    1: "oklch(0.55 0.18 250)",  // Alpine
    2: "oklch(0.53 0.16 150)",  // Forest
    3: "oklch(0.65 0.18 35)",   // Sunrise
    4: "oklch(0.52 0.14 60)",   // Earth
    5: "oklch(0.42 0.05 235)",  // Slate
  },

  // Sidebar colors
  sidebar: {
    DEFAULT: "var(--sidebar-background)",
    foreground: "var(--sidebar-foreground)",
    primary: "var(--sidebar-primary)",
    "primary-foreground": "var(--sidebar-primary-foreground)",
    accent: "var(--sidebar-accent)",
    "accent-foreground": "var(--sidebar-accent-foreground)",
    border: "var(--sidebar-border)",
    ring: "var(--sidebar-ring)",
  },
} as const;

export type ColorScale = keyof typeof colors.mountain.slate;
export type SemanticColor = keyof typeof colors.semantic;
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "../../apps/**/*.{ts,tsx}",
    "../../packages/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Mountain palette
        mountain: {
          snow: "hsl(var(--color-mountain-snow))",
          ice: "hsl(var(--color-mountain-ice))",
        },
        slate: {
          50: "hsl(var(--color-slate-50))",
          100: "hsl(var(--color-slate-100))",
          200: "hsl(var(--color-slate-200))",
          300: "hsl(var(--color-slate-300))",
          400: "hsl(var(--color-slate-400))",
          500: "hsl(var(--color-slate-500))",
          600: "hsl(var(--color-slate-600))",
          700: "hsl(var(--color-slate-700))",
          800: "hsl(var(--color-slate-800))",
          900: "hsl(var(--color-slate-900))",
          950: "hsl(var(--color-slate-950))",
        },
        alpine: {
          50: "hsl(var(--color-alpine-50))",
          100: "hsl(var(--color-alpine-100))",
          200: "hsl(var(--color-alpine-200))",
          300: "hsl(var(--color-alpine-300))",
          400: "hsl(var(--color-alpine-400))",
          500: "hsl(var(--color-alpine-500))",
          600: "hsl(var(--color-alpine-600))",
          700: "hsl(var(--color-alpine-700))",
          800: "hsl(var(--color-alpine-800))",
          900: "hsl(var(--color-alpine-900))",
          950: "hsl(var(--color-alpine-950))",
        },
        sunrise: {
          50: "hsl(var(--color-sunrise-50))",
          100: "hsl(var(--color-sunrise-100))",
          200: "hsl(var(--color-sunrise-200))",
          300: "hsl(var(--color-sunrise-300))",
          400: "hsl(var(--color-sunrise-400))",
          500: "hsl(var(--color-sunrise-500))",
          600: "hsl(var(--color-sunrise-600))",
          700: "hsl(var(--color-sunrise-700))",
          800: "hsl(var(--color-sunrise-800))",
          900: "hsl(var(--color-sunrise-900))",
          950: "hsl(var(--color-sunrise-950))",
        },
        forest: {
          50: "hsl(var(--color-forest-50))",
          100: "hsl(var(--color-forest-100))",
          200: "hsl(var(--color-forest-200))",
          300: "hsl(var(--color-forest-300))",
          400: "hsl(var(--color-forest-400))",
          500: "hsl(var(--color-forest-500))",
          600: "hsl(var(--color-forest-600))",
          700: "hsl(var(--color-forest-700))",
          800: "hsl(var(--color-forest-800))",
          900: "hsl(var(--color-forest-900))",
          950: "hsl(var(--color-forest-950))",
        },
        earth: {
          50: "hsl(var(--color-earth-50))",
          100: "hsl(var(--color-earth-100))",
          200: "hsl(var(--color-earth-200))",
          300: "hsl(var(--color-earth-300))",
          400: "hsl(var(--color-earth-400))",
          500: "hsl(var(--color-earth-500))",
          600: "hsl(var(--color-earth-600))",
          700: "hsl(var(--color-earth-700))",
          800: "hsl(var(--color-earth-800))",
          900: "hsl(var(--color-earth-900))",
          950: "hsl(var(--color-earth-950))",
        },

        // Semantic colors mapped to CSS variables
        background: "hsl(var(--color-background))",
        foreground: "hsl(var(--color-foreground))",

        card: {
          DEFAULT: "hsl(var(--color-card))",
          foreground: "hsl(var(--color-card-foreground))",
        },

        popover: {
          DEFAULT: "hsl(var(--color-popover))",
          foreground: "hsl(var(--color-popover-foreground))",
        },

        primary: {
          DEFAULT: "hsl(var(--color-primary))",
          foreground: "hsl(var(--color-primary-foreground))",
          50: "hsl(var(--color-alpine-50))",
          100: "hsl(var(--color-alpine-100))",
          200: "hsl(var(--color-alpine-200))",
          300: "hsl(var(--color-alpine-300))",
          400: "hsl(var(--color-alpine-400))",
          500: "hsl(var(--color-alpine-500))",
          600: "hsl(var(--color-alpine-600))",
          700: "hsl(var(--color-alpine-700))",
          800: "hsl(var(--color-alpine-800))",
          900: "hsl(var(--color-alpine-900))",
          950: "hsl(var(--color-alpine-950))",
        },

        secondary: {
          DEFAULT: "hsl(var(--color-secondary))",
          foreground: "hsl(var(--color-secondary-foreground))",
          50: "hsl(var(--color-slate-50))",
          100: "hsl(var(--color-slate-100))",
          200: "hsl(var(--color-slate-200))",
          300: "hsl(var(--color-slate-300))",
          400: "hsl(var(--color-slate-400))",
          500: "hsl(var(--color-slate-500))",
          600: "hsl(var(--color-slate-600))",
          700: "hsl(var(--color-slate-700))",
          800: "hsl(var(--color-slate-800))",
          900: "hsl(var(--color-slate-900))",
          950: "hsl(var(--color-slate-950))",
        },

        muted: {
          DEFAULT: "hsl(var(--color-muted))",
          foreground: "hsl(var(--color-muted-foreground))",
        },

        accent: {
          DEFAULT: "hsl(var(--color-accent))",
          foreground: "hsl(var(--color-accent-foreground))",
        },

        destructive: {
          DEFAULT: "hsl(var(--color-destructive))",
          foreground: "hsl(var(--color-destructive-foreground))",
        },

        border: "hsl(var(--color-border))",
        input: "hsl(var(--color-input))",
        ring: "hsl(var(--color-ring))",

        chart: {
          1: "hsl(var(--color-chart-1))",
          2: "hsl(var(--color-chart-2))",
          3: "hsl(var(--color-chart-3))",
          4: "hsl(var(--color-chart-4))",
          5: "hsl(var(--color-chart-5))",
        },

        sidebar: {
          DEFAULT: "hsl(var(--color-sidebar-background))",
          foreground: "hsl(var(--color-sidebar-foreground))",
          primary: "hsl(var(--color-sidebar-primary))",
          "primary-foreground": "hsl(var(--color-sidebar-primary-foreground))",
          accent: "hsl(var(--color-sidebar-accent))",
          "accent-foreground": "hsl(var(--color-sidebar-accent-foreground))",
          border: "hsl(var(--color-sidebar-border))",
          ring: "hsl(var(--color-sidebar-ring))",
        },
      },

      borderRadius: {
        canyon: "var(--radius-canyon)",
        valley: "var(--radius-valley)",
        ridge: "var(--radius-ridge)",
        peak: "var(--radius-peak)",
        summit: "var(--radius-summit)",
        DEFAULT: "var(--radius-ridge)",
        full: "9999px",
      },

      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
        display: ["var(--font-display)"],
      },

      fontSize: {
        xs: ["0.75rem", { lineHeight: "1rem" }],
        sm: ["0.875rem", { lineHeight: "1.25rem" }],
        base: ["1rem", { lineHeight: "1.5rem" }],
        lg: ["1.125rem", { lineHeight: "1.75rem" }],
        xl: ["1.25rem", { lineHeight: "1.75rem" }],
        "2xl": ["1.5rem", { lineHeight: "2rem" }],
        "3xl": ["1.875rem", { lineHeight: "2.25rem" }],
        "4xl": ["2.25rem", { lineHeight: "2.5rem" }],
        "5xl": ["3rem", { lineHeight: "1" }],
        "6xl": ["3.75rem", { lineHeight: "1" }],
        "7xl": ["4.5rem", { lineHeight: "1" }],
        "8xl": ["6rem", { lineHeight: "1" }],
        "9xl": ["8rem", { lineHeight: "1" }],
      },

      spacing: {
        px: "var(--space-px)",
        0: "var(--space-0)",
        "0.5": "var(--space-0-5)",
        1: "var(--space-1)",
        1.5: "var(--space-1-5)",
        2: "var(--space-2)",
        2.5: "var(--space-2-5)",
        3: "var(--space-3)",
        3.5: "var(--space-3-5)",
        4: "var(--space-4)",
        5: "var(--space-5)",
        6: "var(--space-6)",
        7: "var(--space-7)",
        8: "var(--space-8)",
        9: "var(--space-9)",
        10: "var(--space-10)",
        basecamp: "var(--space-basecamp)",
        trail: "var(--space-trail)",
        ridge: "var(--space-ridge)",
        summit: "var(--space-summit)",
        expedition: "var(--space-expedition)",
      },

      boxShadow: {
        basecamp: "var(--shadow-basecamp)",
        trail: "var(--shadow-trail)",
        ridge: "var(--shadow-ridge)",
        summit: "var(--shadow-summit)",
        expedition: "var(--shadow-expedition)",
        DEFAULT: "var(--shadow-ridge)",
        inner: "inset 0 2px 4px 0 rgb(0 0 0 / 0.05)",
      },

      transitionDuration: {
        instant: "var(--duration-instant)",
        fast: "var(--duration-fast)",
        normal: "var(--duration-normal)",
        slow: "var(--duration-slow)",
        dramatic: "var(--duration-dramatic)",
      },

      transitionTimingFunction: {
        smooth: "var(--animate-easing-smooth)",
        ascend: "var(--animate-easing-ascend)",
        descend: "var(--animate-easing-descend)",
        mountain: "var(--ease-mountain)",
        avalanche: "var(--ease-avalanche)",
        wind: "var(--ease-wind)",
      },

      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "collapsible-down": {
          from: { height: "0" },
          to: { height: "var(--radix-collapsible-content-height)" },
        },
        "collapsible-up": {
          from: { height: "var(--radix-collapsible-content-height)" },
          to: { height: "0" },
        },
        "slide-in-from-top": {
          from: { transform: "translateY(-100%)" },
          to: { transform: "translateY(0)" },
        },
        "slide-in-from-bottom": {
          from: { transform: "translateY(100%)" },
          to: { transform: "translateY(0)" },
        },
        "slide-in-from-left": {
          from: { transform: "translateX(-100%)" },
          to: { transform: "translateX(0)" },
        },
        "slide-in-from-right": {
          from: { transform: "translateX(100%)" },
          to: { transform: "translateX(0)" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        "fade-out": {
          from: { opacity: "1" },
          to: { opacity: "0" },
        },
        "zoom-in": {
          from: { transform: "scale(0.95)", opacity: "0" },
          to: { transform: "scale(1)", opacity: "1" },
        },
        "zoom-out": {
          from: { transform: "scale(1)", opacity: "1" },
          to: { transform: "scale(0.95)", opacity: "0" },
        },
        "spin": {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        "pulse": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
        "bounce": {
          "0%, 100%": { transform: "translateY(-25%)", animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1)" },
          "50%": { transform: "translateY(0)", animationTimingFunction: "cubic-bezier(0, 0, 0.2, 1)" },
        },
                "shimmer": {
          "100%": { transform: "translateX(100%)" },
        },
        "elevate": {
          from: { transform: "translateY(0)", boxShadow: "var(--shadow-basecamp)" },
          to: { transform: "translateY(-4px)", boxShadow: "var(--shadow-summit)" },
        },
        "descend": {
          from: { transform: "translateY(-4px)", boxShadow: "var(--shadow-summit)" },
          to: { transform: "translateY(0)", boxShadow: "var(--shadow-basecamp)" },
        },
      },

      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "collapsible-down": "collapsible-down 0.2s ease-out",
        "collapsible-up": "collapsible-up 0.2s ease-out",
        "slide-in-from-top": "slide-in-from-top 0.2s ease-out",
        "slide-in-from-bottom": "slide-in-from-bottom 0.2s ease-out",
        "slide-in-from-left": "slide-in-from-left 0.2s ease-out",
        "slide-in-from-right": "slide-in-from-right 0.2s ease-out",
        "fade-in": "fade-in 0.2s ease-out",
        "fade-out": "fade-out 0.2s ease-out",
        "zoom-in": "zoom-in 0.2s ease-out",
        "zoom-out": "zoom-out 0.2s ease-out",
        "spin": "spin 1s linear infinite",
        "pulse": "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "bounce": "bounce 1s infinite",
        "elevate": "elevate 0.2s var(--animate-easing-ascend)",
        "descend": "descend 0.2s var(--animate-easing-descend)",
      },

      zIndex: {
        hide: "-1",
        auto: "auto",
        base: "0",
        basecamp: "100",
        trail: "500",
        ridge: "1000",
        summit: "1500",
        expedition: "2000",
        max: "2147483647",
      },
    },
  },
  plugins: [],
};

export default config;
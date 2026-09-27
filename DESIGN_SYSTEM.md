# 8848 UI — Design System Specification

## 1. Vision & Identity

**8848 UI** is an expedition-grade design system crafted for modern React and Next.js applications, tailored for developer tools, dashboards, and autonomous agent workflows.

- **Design Philosophy**: Minimalist, tactile, mountain-inspired. Subtle contour lines, elevation tiers, topographic structure, and crisp monospace telemetry.
- **Brand Aesthetic**: Deep neutral slates with an Alpine Blue primary (`oklch(55% 0.18 250)`) and a Sunrise Orange accent (`oklch(65% 0.18 35)`). No touristy cliches—strictly high-altitude precision.

---

## 2. Technical Stack & Standards

- **Core Framework**: React 19 + Next.js 15 (App Router)
- **Styling Architecture**: Tailwind CSS v4 + native CSS variables (`@theme inline`)
- **Primitive Engine**: Radix UI headless components
- **Icons**: Lucide React
- **Package Management**: pnpm workspaces + Turborepo
- **Testing**: Vitest + React Testing Library (RTL)
- **Documentation**: Next.js 15 + MDX (`apps/docs`)
- **Distribution Registry**: npm (`@aayurt/8848-ui`)

---

## 3. Thematic Architecture: The 8848 Hierarchy

```
8848 UI
│
├── Basecamp (Foundations)
│   ├── Color Palette (OKLCH Slate, Alpine Blue, Sunrise Orange)
│   ├── Typography (Inter + JetBrains Mono)
│   ├── Contour & Radius Scale (Canyon -> Summit)
│   └── Elevation Spacing (Meter-based increments)
│
├── Routes (Layout & Navigation)
│   ├── App Shell & Sidebar
│   ├── Navigation Menu & Breadcrumbs
│   └── Elevation Tabs
│
├── Equipment (Core Primitives)
│   ├── Button (hiker, climber, summit, trail, base-camp, ridge)
│   ├── Input & Textarea
│   ├── Card (ridge, valley, peak, canyon, snow)
│   ├── Dialog & Alert Dialog
│   ├── Badge (altitude, elevation, distance, summit, danger)
│   ├── Avatar & Separator
│   └── Table & Data Grids
│
├── Expedition (Agentic & Real-time Patterns)
│   ├── Agent Execution Pipeline Card
│   ├── Tool Call Inspector / Collapsible Traces
│   ├── Elevation Status Stepper (6,240m -> 8,848m Summit)
│   └── Monospace Telemetry Badges
│
└── Summit (Complex Workflows)
    ├── Command Palette (KBar / CMDK style)
    ├── Form Controller (React Hook Form + Zod)
    └── Dynamic Combobox & Virtualized Select
```

---

## 4. Tokens & Variable Mapping

### 4.1 Color Tokens (OKLCH)
```css
:root {
  /* Brand Primary: Alpine Blue */
  --color-primary: oklch(0.55 0.18 250);
  --color-primary-foreground: oklch(0.98 0.01 280);

  /* Brand Accent: Sunrise Orange */
  --color-accent: oklch(0.65 0.18 35);
  --color-accent-foreground: oklch(0.98 0.01 280);

  /* Foundation Slate Neutral Ramp */
  --color-slate-50:  oklch(0.97 0.02 280);
  --color-slate-100: oklch(0.92 0.03 270);
  --color-slate-200: oklch(0.84 0.04 260);
  --color-slate-300: oklch(0.70 0.04 250);
  --color-slate-400: oklch(0.55 0.05 240);
  --color-slate-500: oklch(0.42 0.05 235);
  --color-slate-600: oklch(0.32 0.04 240);
  --color-slate-700: oklch(0.25 0.04 250);
  --color-slate-800: oklch(0.18 0.03 260);
  --color-slate-900: oklch(0.12 0.02 270);
  --color-slate-950: oklch(0.05 0.01 270);
}
```

### 4.2 Elevation Radii & Shadows
- **Radii**:
  - `canyon`: `4px`
  - `valley`: `8px`
  - `ridge` (Base): `12px` (`rounded-md` equivalent)
  - `peak`: `16px`
  - `summit`: `9999px`
- **Shadows**:
  - `basecamp`: `0 1px 2px 0 rgb(0 0 0 / 0.03)`
  - `trail`: `0 2px 4px -1px rgb(0 0 0 / 0.05)`
  - `ridge`: `0 4px 8px -2px rgb(0 0 0 / 0.06)`
  - `summit`: `0 8px 16px -4px rgb(0 0 0 / 0.08)`
  - `expedition`: `0 16px 32px -8px rgb(0 0 0 / 0.10)`

---

## 5. Component API Standard (shadcn Pattern)

All components are distributed with:
1. **Zero-runtime style collisions**: Variants declared with `class-variance-authority` (`cva`).
2. **Polymorphic composition**: `asChild` support powered by Radix `Slot`.
3. **Accessibility by default**: ARIA attributes, semantic HTML tags, keyboard navigation, and focus rings.

---

## 6. Monorepo Project Layout

```
design-system/
├── apps/
│   └── docs/                     # Next.js 15 + MDX documentation site
├── packages/
│   ├── core/                     # CSS variables, tokens, Tailwind configuration
│   ├── utils/                    # cn, cva, focusRing, visuallyHidden
│   ├── hooks/                    # Reusable React hooks
│   └── components/               # React 19 UI primitives (@aayurt/8848-ui-react)
├── turbo.json
├── package.json
└── tsconfig.json
```

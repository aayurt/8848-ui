# 8848 UI — Implementation Roadmap & Tasks

## Decision Checklist (Completed)

| Item | Choice | Implementation Reference |
|---|---|---|
| **Package Scope** | `@aayurt/8848-ui` | `packages/components`, `packages/core`, etc. |
| **Brand Color** | Alpine Blue `oklch(55% 0.18 250)` | `packages/core/src/colors.ts` & `theme.css` |
| **Accent Color** | Sunrise Orange `oklch(65% 0.18 35)` | `packages/core/src/colors.ts` & `theme.css` |
| **Font – Sans** | `Inter` | `packages/core/src/theme.css` |
| **Font – Mono** | `JetBrains Mono` | `packages/core/src/theme.css` |
| **Base Radius** | `rounded-md` (`ridge` = 12px) | `--radius-ridge` in `theme.css` |
| **Shadow Style** | `subtle` | `basecamp`, `trail`, `ridge`, `summit` |
| **Animation Preset** | `smooth` | `duration-normal`, `ease-smooth` |
| **Icon Library** | `Lucide React` | `lucide-react` peer/dep |
| **Component Prefix** | None (shadcn style) | `Button`, `Input`, `Card`, etc. |
| **Testing** | `Vitest + RTL` | `vitest` in packages/components |
| **Docs Framework** | `Next.js 15 + MDX` | `apps/docs` |
| **Registry** | `npm` | Configured in root workspace |

---

## Phase 0: Foundation (Basecamp)
- [x] Root monorepo workspace (`package.json`, `turbo.json`, `tsconfig.json`)
- [x] Core package (`@aayurt/8848-ui-core`)
  - [x] OKLCH mountain color palette (Alpine, Sunrise, Slate, Forest, Earth)
  - [x] Tailwind CSS v4 configuration (`tailwind.config.ts`)
  - [x] CSS variables and theme tokens (`src/theme.css`)
- [x] Utilities package (`@aayurt/8848-ui-utils`)
  - [x] `cn` (clsx + tailwind-merge)
  - [x] `cva` shared primitives
  - [x] `focusRing` accessible focus outline helper
  - [x] `visuallyHidden` helper
- [x] Hooks package (`@aayurt/8848-ui-hooks`)
  - [x] `useMediaQuery` & breakpoint presets
  - [x] `usePrefersReducedMotion`
  - [x] `useId`
  - [x] `useControllableState`
  - [x] `useEventListener`

---

## Phase 1: Primitive Components (Equipment)
- [x] **Button** (`packages/components/src/button`)
  - [x] Variants: `hiker`, `climber`, `summit`, `trail`, `base-camp`, `ridge`
  - [x] Sizes: `xs`, `sm`, `md`, `lg`, `xl`, `icon`
  - [x] Elevations: `none`, `raised`, `floating`
  - [x] Radix `Slot` (`asChild`) integration & loading spinner
- [x] **Input & Textarea** (`packages/components/src/input`)
  - [x] Floating label, required markers, error states
  - [x] Leading & trailing icon slots
- [x] **Card** (`packages/components/src/card`)
  - [x] Variants: `ridge`, `valley`, `peak`, `canyon`, `snow`
  - [x] Header, Title, Description, Content, Footer primitives
- [x] **Label** (`packages/components/src/label`)
  - [x] Radix Label primitive wrapping
- [x] **Separator** (`packages/components/src/separator`)
  - [x] Radix Separator horizontal/vertical
- [x] **Badge** (`packages/components/src/badge`)
  - [x] Variants: `altitude`, `elevation`, `distance`, `summit`, `danger`, `contour`
- [x] **Avatar** (`packages/components/src/avatar`)
  - [x] Root, Image, Fallback, and AvatarGroup

---

## Phase 2: Feedback & Overlays (Equipment)
- [x] **Dialog & Alert Dialog** (Modal, Trigger, Portal, Content, Focus Trap)
- [x] **Dropdown Menu** (Radix Menu, Items, Groups, Shortcuts)
- [x] **Tooltip** (Delayed hover, trigger, arrow)
- [x] **Toast** (Sonner integration with high-altitude status styling)
- [x] **Switch / Checkbox / Radio**
- [x] **Tabs** (Contour tabs, line indicator, keyboard navigation)

---

## Phase 3: Expedition Patterns (Agentic & Specialized)
- [x] **Agent Execution Pipeline Card** (Elevation milestones: 6,240m Planning → 8,848m Summit)
- [x] **Tool Call Inspector** (Collapsible stream logs, execution timing, input/output inspection)
- [x] **Contour & Topo Grid Backgrounds** (SVG/CSS pattern generator utilities)
- [x] **Monospace Telemetry Chips** (Altitude, Token usage, Latency meters)
- [x] **Approval Prompt** (Human-in-the-loop action authorization card)
- [x] **Executor Node** (Status tracking node for autonomous agent workers)

---

## Phase 4: Summit & Complex Workflows
- [ ] **Form Controller** (React Hook Form + Zod validation wrapper)
- [x] **Select / Combobox** (Searchable dropdown with keyboard navigation)
- [x] **Data Table** (Semantic HTML table primitives with altitude header styling)
- [x] **Command Palette** (CMDK launcher with Dialog modal)

---

## Phase 5: Documentation & Publishing
- [x] Next.js 15 Docs site scaffold (`apps/docs`)
- [ ] MDX component documentation pages
- [ ] Live preview component playground
- [ ] Automated Changesets and npm publishing pipeline

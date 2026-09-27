# 8848 UI

> Mountain-inspired design system for modern React / Next.js and agentic interfaces.

```
                    /\
                   /  \
                  /    \
                 /      \
        ________/        \_______
                8848 UI
```

An accessible, customizable component system built on Tailwind CSS, Radix UI primitives, and modern TypeScript. Designed around elevation, contours, and expedition-grade engineering.

---

## Architecture: The Expedition Metaphor

| Layer | Domain | Contents |
|---|---|---|
| **Basecamp** | Foundations | Design tokens, OKLCH palette, typography, meter-based spacing |
| **Routes** | Layout & Navigation | App shells, headers, sidebars, breadcrumbs, tabs |
| **Equipment** | Core Primitives | Button, Input, Card, Dialog, Badge, Avatar, Table |
| **Expedition** | Agentic Patterns | Pipelines, Tool calls, Execution logs, Elevation status cards |
| **Summit** | Advanced Workflows | Combobox, Form validation, Data tables, Command palettes |

---

## Packages

- **`@aayurt/8848-ui`** — Main entry point (unified exports)
- **`@aayurt/8848-ui-core`** — Design tokens, Tailwind CSS v4 theme, and CSS variables
- **`@aayurt/8848-ui-react`** — React 19 component library (shadcn/ui style, headless Radix primitives)
- **`@aayurt/8848-ui-hooks`** — Utility hooks (`useMediaQuery`, `useControllableState`, `useId`, etc.)
- **`@aayurt/8848-ui-utils`** — Class merging (`cn`), variant authority (`cva`), focus ring helpers

---

## Design Tokens & Palette

### Color System (OKLCH)
- **Primary Brand (Alpine Blue)**: `oklch(55% 0.18 250)`
- **Accent (Sunrise Orange)**: `oklch(65% 0.18 35)`
- **Terrain Slate**: Perceptually uniform slate neutral scale (`50`–`950`)
- **Forest & Earth**: Extended natural shades for charts and status indicators

### Typography
- **Sans**: `Inter`, system-ui, sans-serif
- **Mono**: `JetBrains Mono`, monospace

### Elevation Spacing & Radii
- **Radii**: `canyon` (4px), `valley` (8px), `ridge` (12px / `rounded-md` base), `peak` (16px), `summit` (9999px)
- **Shadows**: `basecamp`, `trail`, `ridge`, `summit`, `expedition` (subtle elevation profile)

---

## Component Usage

```tsx
import { Button } from "@aayurt/8848-ui/button";
import { Input } from "@aayurt/8848-ui/input";
import { Card, CardHeader, CardTitle, CardContent } from "@aayurt/8848-ui/card";

export function FlightDeck() {
  return (
    <Card variant="ridge">
      <CardHeader>
        <CardTitle>Expedition Stage</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <Input label="Task Goal" placeholder="e.g. Synthesize agent run" />
        <Button variant="climber" elevation="raised">
          Begin Ascent
        </Button>
      </CardContent>
    </Card>
  );
}
```

---

## Monorepo Workflow

```bash
# Install dependencies
pnpm install

# Run documentation site & component playground
pnpm dev

# Typecheck all packages
pnpm typecheck

# Run test suite (Vitest + RTL)
pnpm test

# Build all packages
pnpm build

# Versioning & publish to npm
pnpm changeset
pnpm release
```

---

## License

MIT © [Aayurt Shrestha](https://github.com/aayurt)

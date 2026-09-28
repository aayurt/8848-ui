#!/usr/bin/env node
/**
 * Build the 8848 UI shadcn registry.
 *
 * Reads component sources from packages/ and emits registry-item JSON
 * into apps/docs/public/r/<name>.json (+ registry index), served at
 * https://8848.aayurtshrestha.com.np/r/<name>.json
 *
 *   node scripts/registry-build.mjs [--base-url https://...] [--out apps/docs/public/r]
 *
 * Import rewrites applied so files install cleanly into a stock shadcn project:
 *   @aayurt/8848-ui-utils -> @/lib/utils
 *   ../<sibling>         -> @/components/ui/<sibling>
 * Mountain tokens (alpine-*, rounded-ridge, duration-normal, …) are provided
 * by the `theme` registry item — install it first.
 */
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join, relative } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const SRC = join(ROOT, "packages/components/src");
const UTILS = join(ROOT, "packages/utils/src");
const CORE = join(ROOT, "packages/core/src");

const args = process.argv.slice(2);
const flag = (name, fallback) => {
  const i = args.indexOf(name);
  return i !== -1 && args[i + 1] ? args[i + 1] : fallback;
};
const baseUrl = flag("--base-url", process.env.REGISTRY_BASE_URL || "https://8848.aayurtshrestha.com.np").replace(
  /\/$/,
  ""
);
const outDir = flag("--out", join(ROOT, "apps/docs/public/r"));

const read = (p) => readFileSync(p, "utf8");

/** Rewrite 8848-internal imports to stock shadcn paths. */
function transform(content) {
  return content
    .replaceAll(`from "@aayurt/8848-ui-utils"`, `from "@/lib/utils"`)
    .replaceAll(`from "@aayurt/8848-ui-utils/cn"`, `from "@/lib/utils"`)
    .replace(/"\.\.\/([a-z-]+)"/g, '"@/components/ui/$1"')
    .replace(/"\.\/([a-z-]+)"/g, '"@/components/ui/$1"');
}

const file = (srcPath, target) => ({
  path: target.split("/").pop(),
  content: transform(read(srcPath)),
  type: "registry:ui",
  target,
});

/** Directory-index file ref: repo-relative source path, no content (per directory policy). */
const indexFile = (srcPath, target, type) => ({
  path: relative(ROOT, srcPath),
  type,
  target: "",
});

const depUrl = (name) => `${baseUrl}/r/${name}.json`;

/**
 * Manifest: name -> registry item definition.
 * files: [sourcePath, targetPath]. registryDeps: other item names.
 */
const ITEMS = [
  {
    name: "utils",
    type: "registry:lib",
    title: "cn() utility",
    description: "clsx + tailwind-merge class merger used by every 8848 component.",
    dependencies: ["clsx", "tailwind-merge"],
    registryDependencies: [],
    files: [[join(UTILS, "cn.ts"), "lib/utils.ts"]],
  },
  {
    name: "theme",
    type: "registry:file",
    title: "8848 theme tokens",
    description:
      "OKLCH mountain palette, semantic light/dark colors, radii and elevation tokens. Install first, then @import it from your CSS.",
    dependencies: [],
    registryDependencies: [],
    files: [[join(CORE, "theme.css"), "styles/8848-theme.css"]],
  },
  {
    name: "spinner",
    type: "registry:ui",
    title: "Spinner",
    description: "Standalone loading indicator in five sizes.",
    dependencies: ["class-variance-authority", "lucide-react"],
    registryDependencies: ["utils"],
    files: [[join(SRC, "spinner/spinner.tsx"), "components/ui/spinner.tsx"]],
  },
  {
    name: "button",
    type: "registry:ui",
    title: "Button",
    description:
      "Compact expedition button (28–44px, 6–9px radii, hover lift). Mountain names plus shadcn aliases and daisyUI colors.",
    dependencies: ["@radix-ui/react-slot", "class-variance-authority"],
    registryDependencies: ["utils", "spinner"],
    files: [
      [join(SRC, "button/button.tsx"), "components/ui/button.tsx"],
      [join(SRC, "spinner/spinner.tsx"), "components/ui/spinner.tsx"],
    ],
  },
  {
    name: "badge",
    type: "registry:ui",
    title: "Badge",
    description: "Altitude-themed status badges.",
    dependencies: ["class-variance-authority"],
    registryDependencies: ["utils"],
    files: [[join(SRC, "badge/badge.tsx"), "components/ui/badge.tsx"]],
  },
  {
    name: "card",
    type: "registry:ui",
    title: "Card",
    description: "Terrain-variant container with Header/Title/Description/Content/Footer.",
    dependencies: ["class-variance-authority"],
    registryDependencies: ["utils"],
    files: [[join(SRC, "card/card.tsx"), "components/ui/card.tsx"]],
  },
  {
    name: "alert",
    type: "registry:ui",
    title: "Alert",
    description: "Signal-beacon notice with semantic mountain variants.",
    dependencies: ["class-variance-authority"],
    registryDependencies: ["utils"],
    files: [[join(SRC, "alert/alert.tsx"), "components/ui/alert.tsx"]],
  },
  {
    name: "input",
    type: "registry:ui",
    title: "Input",
    description: "Text input and textarea with labels, hints, icons and error states.",
    dependencies: [],
    registryDependencies: ["utils"],
    files: [
      [join(SRC, "input/input.tsx"), "components/ui/input.tsx"],
      [join(SRC, "input/textarea.tsx"), "components/ui/textarea.tsx"],
    ],
  },
  {
    name: "accordion",
    type: "registry:ui",
    title: "Accordion",
    description: "Collapsible panels with rotating chevron and grid-row expand animation.",
    dependencies: ["@radix-ui/react-accordion", "lucide-react"],
    registryDependencies: ["utils"],
    files: [[join(SRC, "accordion/accordion.tsx"), "components/ui/accordion.tsx"]],
  },
  {
    name: "avatar",
    type: "registry:ui",
    title: "Avatar",
    description: "Image avatar with fallback initials and stacked AvatarGroup.",
    dependencies: ["@radix-ui/react-avatar"],
    registryDependencies: ["utils"],
    files: [[join(SRC, "avatar/avatar.tsx"), "components/ui/avatar.tsx"]],
  },
  {
    name: "checkbox",
    type: "registry:ui",
    title: "Checkbox",
    description: "Multi-selection check input on the Radix Checkbox primitive.",
    dependencies: ["@radix-ui/react-checkbox", "lucide-react"],
    registryDependencies: ["utils"],
    files: [[join(SRC, "checkbox/checkbox.tsx"), "components/ui/checkbox.tsx"]],
  },
  {
    name: "command",
    type: "registry:ui",
    title: "Command",
    description: "CMDK command palette with dialog modal.",
    dependencies: ["cmdk", "@radix-ui/react-dialog", "lucide-react"],
    registryDependencies: ["utils", "dialog"],
    files: [[join(SRC, "command/command.tsx"), "components/ui/command.tsx"]],
  },
  {
    name: "dialog",
    type: "registry:ui",
    title: "Dialog",
    description: "Accessible modal with backdrop blur, header/footer and close control.",
    dependencies: ["@radix-ui/react-dialog", "lucide-react"],
    registryDependencies: ["utils"],
    files: [[join(SRC, "dialog/dialog.tsx"), "components/ui/dialog.tsx"]],
  },
  {
    name: "dropdown-menu",
    type: "registry:ui",
    title: "Dropdown Menu",
    description: "Radix menu with items, groups, shortcuts and separators.",
    dependencies: ["@radix-ui/react-dropdown-menu", "lucide-react"],
    registryDependencies: ["utils"],
    files: [[join(SRC, "dropdown-menu/dropdown-menu.tsx"), "components/ui/dropdown-menu.tsx"]],
  },
  {
    name: "form",
    type: "registry:ui",
    title: "Form",
    description: "React Hook Form + Zod field wrapper with labels and error messages.",
    dependencies: ["react-hook-form", "@radix-ui/react-label", "@radix-ui/react-slot"],
    registryDependencies: ["utils", "label"],
    files: [[join(SRC, "form/form.tsx"), "components/ui/form.tsx"]],
  },
  {
    name: "hover-card",
    type: "registry:ui",
    title: "Hover Card",
    description: "Hover-triggered preview card for profiles and telemetry.",
    dependencies: ["@radix-ui/react-hover-card"],
    registryDependencies: ["utils"],
    files: [[join(SRC, "hover-card/hover-card.tsx"), "components/ui/hover-card.tsx"]],
  },
  {
    name: "kbd",
    type: "registry:ui",
    title: "Kbd",
    description: "Keyboard shortcut chip with keycap styling.",
    dependencies: ["class-variance-authority"],
    registryDependencies: ["utils"],
    files: [[join(SRC, "kbd/kbd.tsx"), "components/ui/kbd.tsx"]],
  },
  {
    name: "label",
    type: "registry:ui",
    title: "Label",
    description: "Accessible form label on the Radix Label primitive.",
    dependencies: ["@radix-ui/react-label"],
    registryDependencies: ["utils"],
    files: [[join(SRC, "label/label.tsx"), "components/ui/label.tsx"]],
  },
  {
    name: "navigation-menu",
    type: "registry:ui",
    title: "Navigation Menu",
    description: "Keyboard-navigable top-level nav with dropdown viewport.",
    dependencies: ["@radix-ui/react-navigation-menu", "lucide-react"],
    registryDependencies: ["utils"],
    files: [[join(SRC, "navigation-menu/navigation-menu.tsx"), "components/ui/navigation-menu.tsx"]],
  },
  {
    name: "popover",
    type: "registry:ui",
    title: "Popover",
    description: "Click-triggered floating panel for filters and actions.",
    dependencies: ["@radix-ui/react-popover"],
    registryDependencies: ["utils"],
    files: [[join(SRC, "popover/popover.tsx"), "components/ui/popover.tsx"]],
  },
  {
    name: "progress",
    type: "registry:ui",
    title: "Progress",
    description: "Determinate bar with animated stripes plus indeterminate mode.",
    dependencies: ["class-variance-authority"],
    registryDependencies: ["utils"],
    files: [[join(SRC, "progress/progress.tsx"), "components/ui/progress.tsx"]],
  },
  {
    name: "radio-group",
    type: "registry:ui",
    title: "Radio Group",
    description: "Single-select radio set on the Radix Radio Group primitive.",
    dependencies: ["@radix-ui/react-radio-group", "lucide-react"],
    registryDependencies: ["utils"],
    files: [[join(SRC, "radio-group/radio-group.tsx"), "components/ui/radio-group.tsx"]],
  },
  {
    name: "select",
    type: "registry:ui",
    title: "Select",
    description: "Searchable dropdown select with animated popover.",
    dependencies: ["@radix-ui/react-select", "lucide-react"],
    registryDependencies: ["utils"],
    files: [[join(SRC, "select/select.tsx"), "components/ui/select.tsx"]],
  },
  {
    name: "separator",
    type: "registry:ui",
    title: "Separator",
    description: "Theme-aware divider, horizontal or vertical.",
    dependencies: ["@radix-ui/react-separator"],
    registryDependencies: ["utils"],
    files: [[join(SRC, "separator/separator.tsx"), "components/ui/separator.tsx"]],
  },
  {
    name: "sheet",
    type: "registry:ui",
    title: "Sheet",
    description: "Slide-over panel (top/right/bottom/left) for inspectors and drawers.",
    dependencies: ["@radix-ui/react-dialog"],
    registryDependencies: ["utils"],
    files: [[join(SRC, "sheet/sheet.tsx"), "components/ui/sheet.tsx"]],
  },
  {
    name: "skeleton",
    type: "registry:ui",
    title: "Skeleton",
    description: "Loading placeholder with text, circular, rectangular and card variants.",
    dependencies: [],
    registryDependencies: ["utils"],
    files: [[join(SRC, "skeleton/skeleton.tsx"), "components/ui/skeleton.tsx"]],
  },
  {
    name: "switch",
    type: "registry:ui",
    title: "Switch",
    description: "Two-state toggle control on the Radix Switch primitive.",
    dependencies: ["@radix-ui/react-switch"],
    registryDependencies: ["utils"],
    files: [[join(SRC, "switch/switch.tsx"), "components/ui/switch.tsx"]],
  },
  {
    name: "table",
    type: "registry:ui",
    title: "Table",
    description: "Altitude-banded data table with sortable TableSortHead columns.",
    dependencies: ["lucide-react"],
    registryDependencies: ["utils"],
    files: [[join(SRC, "table/table.tsx"), "components/ui/table.tsx"]],
  },
  {
    name: "tabs",
    type: "registry:ui",
    title: "Tabs",
    description: "Contour tabs with line indicator and keyboard navigation.",
    dependencies: ["@radix-ui/react-tabs"],
    registryDependencies: ["utils"],
    files: [[join(SRC, "tabs/tabs.tsx"), "components/ui/tabs.tsx"]],
  },
  {
    name: "toast",
    type: "registry:ui",
    title: "Toast",
    description: "Sonner-powered toasts with high-altitude status styling.",
    dependencies: ["sonner"],
    registryDependencies: [],
    files: [[join(SRC, "toast/toast.tsx"), "components/ui/toast.tsx"]],
  },
  {
    name: "toggle",
    type: "registry:ui",
    title: "Toggle",
    description: "Two-state press button with outline and default variants.",
    dependencies: ["class-variance-authority"],
    registryDependencies: ["utils"],
    files: [[join(SRC, "toggle/toggle.tsx"), "components/ui/toggle.tsx"]],
  },
  {
    name: "tooltip",
    type: "registry:ui",
    title: "Tooltip",
    description: "Delayed hover popup with trigger and arrow.",
    dependencies: ["@radix-ui/react-tooltip"],
    registryDependencies: ["utils"],
    files: [[join(SRC, "tooltip/tooltip.tsx"), "components/ui/tooltip.tsx"]],
  },
  {
    name: "typography",
    type: "registry:ui",
    title: "Typography",
    description: "Expedition type scale: headings, lead, muted, blockquote, inline code.",
    dependencies: [],
    registryDependencies: ["utils"],
    files: [[join(SRC, "typography/typography.tsx"), "components/ui/typography.tsx"]],
  },
  {
    name: "telemetry-chip",
    type: "registry:ui",
    title: "Telemetry Chip",
    description: "Monospace telemetry chip for altitude, tokens and latency.",
    dependencies: ["class-variance-authority"],
    registryDependencies: ["utils"],
    files: [[join(SRC, "agentic/telemetry-chip.tsx"), "components/ui/telemetry-chip.tsx"]],
  },
  {
    name: "approval-prompt",
    type: "registry:ui",
    title: "Approval Prompt",
    description: "Human-in-the-loop authorization card for sensitive agent actions.",
    dependencies: ["lucide-react"],
    registryDependencies: ["utils", "button", "telemetry-chip"],
    files: [[join(SRC, "agentic/approval-prompt.tsx"), "components/ui/approval-prompt.tsx"]],
  },
  {
    name: "execution-card",
    type: "registry:ui",
    title: "Execution Card",
    description: "Real-time agent execution pipeline card with altitude milestones.",
    dependencies: ["lucide-react"],
    registryDependencies: ["utils", "telemetry-chip"],
    files: [[join(SRC, "agentic/execution-card.tsx"), "components/ui/execution-card.tsx"]],
  },
  {
    name: "executor-node",
    type: "registry:ui",
    title: "Executor Node",
    description: "Status tracking node for autonomous agent workers.",
    dependencies: ["lucide-react"],
    registryDependencies: ["utils", "telemetry-chip"],
    files: [[join(SRC, "agentic/executor-node.tsx"), "components/ui/executor-node.tsx"]],
  },
  {
    name: "tool-call-inspector",
    type: "registry:ui",
    title: "Tool Call Inspector",
    description: "Collapsible tool invocation panel with timing and I/O inspection.",
    dependencies: ["lucide-react"],
    registryDependencies: ["utils", "telemetry-chip"],
    files: [[join(SRC, "agentic/tool-call-inspector.tsx"), "components/ui/tool-call-inspector.tsx"]],
  },
  {
    name: "mountain-contour",
    type: "registry:ui",
    title: "Mountain Contour",
    description: "SVG/CSS contour and topo grid background generator.",
    dependencies: [],
    registryDependencies: ["utils"],
    files: [[join(SRC, "agentic/mountain-contour.tsx"), "components/ui/mountain-contour.tsx"]],
  },
];

mkdirSync(outDir, { recursive: true });

const index = [];
for (const item of ITEMS) {
  const registryDepUrls = item.registryDependencies.map(depUrl);
  const json = {
    $schema: "https://ui.shadcn.com/schema/registry-item.json",
    name: item.name,
    type: item.type,
    title: item.title,
    description: item.description,
    dependencies: item.dependencies,
    devDependencies: [],
    registryDependencies: registryDepUrls,
    files: item.files.map(([src, target]) => file(src, target)),
  };
  writeFileSync(join(outDir, `${item.name}.json`), JSON.stringify(json, null, 2) + "\n");
  // Aggregate index (registry.json): same shape minus file contents,
  // satisfying the registry-directory policy. registryDependencies stay
  // as bare names here, mirroring the canonical index.
  index.push({
    name: item.name,
    type: item.type,
    title: item.title,
    description: item.description,
    dependencies: item.dependencies,
    registryDependencies: item.registryDependencies,
    files: item.files.map(([src, target]) => indexFile(src, target, "registry:ui")),
  });
  console.log(`r/${item.name}.json (${json.files.length} file(s))`);
}

writeFileSync(
  join(outDir, "registry.json"),
  JSON.stringify(
    {
      $schema: "https://ui.shadcn.com/schema/registry.json",
      name: "8848",
      homepage: "https://8848.aayurtshrestha.com.np",
      items: index,
    },
    null,
    2
  ) + "\n"
);
console.log(`r/registry.json (${index.length} items)`);

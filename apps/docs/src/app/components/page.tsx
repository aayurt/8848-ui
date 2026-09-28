"use client";

import * as React from "react";
import Link from "next/link";
import {
  Button,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  Badge,
  Input,
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
  Switch,
  Checkbox,
  RadioGroup,
  RadioGroupItem,
  Label,
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuLabel,
  Avatar,
  AvatarFallback,
  AvatarGroup,
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
  Separator,
  MountainContour,
  ExecutionCard,
  ExecutorNode,
  TelemetryChip,
  ToolCallInspector,
  ApprovalPrompt,
  toast,
} from "@aayurt/8848-ui-react";
import {
  Mountain,
  Copy,
  Check,
  Search,
  ChevronDown,
  ArrowLeft,
} from "lucide-react";
import { ThemeToggle } from "../../components/theme-toggle";

const COMPONENT_GROUPS = [
  {
    title: "Summit (Agentic)",
    items: [
      { id: "execution-card", name: "ExecutionCard", tag: "Agentic" },
      { id: "tool-inspector", name: "ToolCallInspector", tag: "Agentic" },
      { id: "approval-prompt", name: "ApprovalPrompt", tag: "Agentic" },
      { id: "executor-node", name: "ExecutorNode", tag: "Agentic" },
      { id: "telemetry-chip", name: "TelemetryChip", tag: "Agentic" },
      { id: "mountain-contour", name: "MountainContour", tag: "Atmosphere" },
    ],
  },
  {
    title: "Equipment (Primitives)",
    items: [
      { id: "button", name: "Button", tag: "General" },
      { id: "input", name: "Input", tag: "Form" },
      { id: "card", name: "Card", tag: "Layout" },
      { id: "dialog", name: "Dialog", tag: "Overlay" },
      { id: "dropdown", name: "DropdownMenu", tag: "Overlay" },
      { id: "tabs", name: "Tabs", tag: "Navigation" },
      { id: "select", name: "Select", tag: "Form" },
      { id: "switch", name: "Switch", tag: "Form" },
      { id: "checkbox", name: "Checkbox", tag: "Form" },
      { id: "radio", name: "RadioGroup", tag: "Form" },
      { id: "table", name: "Table", tag: "Data" },
      { id: "badge", name: "Badge", tag: "Feedback" },
      { id: "avatar", name: "Avatar", tag: "Media" },
      { id: "tooltip", name: "Tooltip", tag: "Overlay" },
      { id: "separator", name: "Separator", tag: "Layout" },
    ],
  },
];

export default function ComponentsPage() {
  const [selectedId, setSelectedId] = React.useState("execution-card");
  const [searchQuery, setSearchQuery] = React.useState("");
  const [copiedCode, setCopiedCode] = React.useState<string | null>(null);

  // Filter components
  const filteredGroups = COMPONENT_GROUPS.map((group) => ({
    ...group,
    items: group.items.filter((item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    ),
  })).filter((group) => group.items.length > 0);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCode(id);
    toast.success("Snippet copied to clipboard");
    setTimeout(() => setCopiedCode(null), 2000);
  };

  return (
    <div className="relative min-h-screen flex flex-col bg-stone-50 text-stone-900 dark:bg-[#09090B] dark:text-[#FAFAFA] antialiased transition-colors duration-200">
      {/* Top Header */}
      <header className="sticky top-0 z-40 w-full border-b border-stone-200 dark:border-white/[0.08] bg-white/80 dark:bg-[#09090B]/85 backdrop-blur-md transition-colors">
        <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-6">
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="flex items-center gap-2 font-bold tracking-tight text-stone-900 dark:text-white text-base hover:opacity-80 transition-opacity"
            >
              <Mountain className="h-4 w-4 text-alpine-500 dark:text-alpine-400" />
              <span>8848</span>
              <span className="text-stone-400 dark:text-white/40 font-mono text-xs">UI</span>
            </Link>

            <span className="text-stone-300 dark:text-white/20">/</span>

            <span className="text-xs font-mono font-medium text-stone-600 dark:text-stone-300">
              Components Registry
            </span>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="flex items-center gap-1 text-xs text-stone-600 dark:text-white/70 hover:text-stone-900 dark:hover:text-white transition-colors"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              <span>Back to Home</span>
            </Link>

            <Separator orientation="vertical" className="h-4" />

            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Main Layout: Sidebar + Documentation Canvas */}
      <div className="mx-auto flex w-full max-w-7xl flex-1 px-4 sm:px-6">
        {/* Left Sidebar */}
        <aside className="sticky top-14 hidden h-[calc(100vh-3.5rem)] w-64 shrink-0 overflow-y-auto border-r border-stone-200 dark:border-white/[0.08] py-6 pr-6 md:block">
          {/* Quick Filter */}
          <div className="relative mb-6">
            <Search className="absolute left-2.5 top-2.5 h-3.5 w-3.5 text-stone-400" />
            <Input
              placeholder="Search components..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="h-8 pl-8 text-xs bg-stone-100/70 dark:bg-white/[0.04] border-stone-200 dark:border-white/10"
            />
          </div>

          <div className="space-y-6">
            {filteredGroups.map((group) => (
              <div key={group.title} className="space-y-1.5">
                <div className="text-[11px] font-mono uppercase tracking-wider text-stone-500 dark:text-white/40 font-semibold px-2">
                  {group.title}
                </div>
                <div className="space-y-0.5">
                  {group.items.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setSelectedId(item.id)}
                      className={`flex w-full items-center justify-between rounded-valley px-2.5 py-1.5 text-xs font-medium transition-all ${
                        selectedId === item.id
                          ? "bg-alpine-500/10 text-alpine-600 dark:bg-alpine-500/15 dark:text-alpine-400 font-semibold"
                          : "text-stone-600 dark:text-white/70 hover:bg-stone-100 dark:hover:bg-white/[0.04] hover:text-stone-900 dark:hover:text-white"
                      }`}
                    >
                      <span>{item.name}</span>
                      <span className="text-[10px] font-mono text-stone-400 dark:text-white/30">
                        {item.tag}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </aside>

        {/* Right Documentation & Live Interactive Canvas */}
        <main className="flex-1 py-8 md:pl-10 space-y-10 min-w-0">
          {/* 1. EXECUTION CARD */}
          {selectedId === "execution-card" && (
            <ComponentDoc
              title="ExecutionCard"
              description="A real-time telemetry card displaying multi-step autonomous agent execution, altitude checkpoints, latency, and tokens."
              importCode={`import { ExecutionCard } from "@aayurt/8848-ui-react";`}
              codeSnippet={`<ExecutionCard
  title="Autonomous Workflow Agent"
  subtitle="Orchestrating multi-model pipeline execution"
  status="executing"
  altitude="8,240m"
  latency="142ms"
  tokens="4.2k tok"
  steps={[
    { id: "1", label: "Task Decomposition & Plan", status: "completed", elevation: "5,364m" },
    { id: "2", label: "Context Retrieval (Vector DB)", status: "completed", elevation: "6,800m" },
    { id: "3", label: "Execute Tool Calls & Verification", status: "in_progress", elevation: "8,240m" },
    { id: "4", label: "Summit Synthesis & Response", status: "pending", elevation: "8,848m" },
  ]}
/>`}
              onCopy={copyToClipboard}
              copiedId={copiedCode}
            >
              <div className="max-w-xl">
                <ExecutionCard
                  title="Autonomous Workflow Agent"
                  subtitle="Orchestrating multi-model pipeline execution"
                  status="executing"
                  altitude="8,240m"
                  latency="142ms"
                  tokens="4.2k tok"
                  steps={[
                    { id: "1", label: "Task Decomposition & Plan", status: "completed", elevation: "5,364m" },
                    { id: "2", label: "Context Retrieval (Vector DB)", status: "completed", elevation: "6,800m" },
                    { id: "3", label: "Execute Tool Calls & Verification", status: "in_progress", elevation: "8,240m" },
                    { id: "4", label: "Summit Synthesis & Response", status: "pending", elevation: "8,848m" },
                  ]}
                />
              </div>
            </ComponentDoc>
          )}

          {/* 2. TOOL CALL INSPECTOR */}
          {selectedId === "tool-inspector" && (
            <ComponentDoc
              title="ToolCallInspector"
              description="Collapsible tool invocation panel displaying invocation parameters, execution duration, and JSON structured results."
              importCode={`import { ToolCallInspector } from "@aayurt/8848-ui-react";`}
              codeSnippet={`<ToolCallInspector
  toolName="terminal_execute"
  duration="84ms"
  elevation="7,120m"
  status="success"
  defaultOpen={true}
  args={{
    command: "pnpm exec turbo build",
    timeout: 180,
    workdir: "/projects/8848-ui",
  }}
  result={{
    exit_code: 0,
    tasks: "5 successful, 5 total",
    output: "✓ Compiled successfully in 1056ms",
  }}
/>`}
              onCopy={copyToClipboard}
              copiedId={copiedCode}
            >
              <div className="max-w-xl">
                <ToolCallInspector
                  toolName="terminal_execute"
                  duration="84ms"
                  elevation="7,120m"
                  status="success"
                  defaultOpen={true}
                  args={{
                    command: "pnpm exec turbo build",
                    timeout: 180,
                    workdir: "/projects/8848-ui",
                  }}
                  result={{
                    exit_code: 0,
                    tasks: "5 successful, 5 total",
                    output: "✓ Compiled successfully in 1056ms",
                  }}
                />
              </div>
            </ComponentDoc>
          )}

          {/* 3. APPROVAL PROMPT */}
          {selectedId === "approval-prompt" && (
            <ComponentDoc
              title="ApprovalPrompt"
              description="Human-in-the-loop authorization prompt for sensitive agent actions, migrations, or terminal executions."
              importCode={`import { ApprovalPrompt } from "@aayurt/8848-ui-react";`}
              codeSnippet={`<ApprovalPrompt
  title="Database Migration Authorization"
  description="The agent is requesting approval to execute a production schema migration."
  commandSnippet="pnpm prisma migrate deploy --preview-feature"
  severity="critical"
  altitude="8,480m"
  onApprove={() => toast.success("Approved")}
  onReject={() => toast.error("Rejected")}
/>`}
              onCopy={copyToClipboard}
              copiedId={copiedCode}
            >
              <div className="max-w-xl">
                <ApprovalPrompt
                  title="Database Migration Authorization"
                  description="The agent is requesting approval to execute a production schema migration."
                  commandSnippet="pnpm prisma migrate deploy --preview-feature"
                  severity="critical"
                  altitude="8,480m"
                  onApprove={() => toast.success("Migration Approved")}
                  onReject={() => toast.error("Migration Rejected")}
                />
              </div>
            </ComponentDoc>
          )}

          {/* 4. EXECUTOR NODE */}
          {selectedId === "executor-node" && (
            <ComponentDoc
              title="ExecutorNode"
              description="Micro-telemetry card for distributed worker nodes, showing runtime model, task assignment, and progress bar."
              importCode={`import { ExecutorNode } from "@aayurt/8848-ui-react";`}
              codeSnippet={`<ExecutorNode
  slotId="EXECUTOR-01"
  status="running"
  model="nemotron-3.5-lightning"
  taskId="UI8848-001"
  progress={85}
/>`}
              onCopy={copyToClipboard}
              copiedId={copiedCode}
            >
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl">
                <ExecutorNode slotId="EXECUTOR-01" status="running" model="nemotron-3.5-lightning" taskId="UI8848-001" progress={85} />
                <ExecutorNode slotId="EXECUTOR-02" status="verifying" model="opencode-free" taskId="UI8848-002" progress={95} />
                <ExecutorNode slotId="EXECUTOR-03" status="idle" model="qwen-2.5-coder" progress={0} />
              </div>
            </ComponentDoc>
          )}

          {/* 5. TELEMETRY CHIP */}
          {selectedId === "telemetry-chip" && (
            <ComponentDoc
              title="TelemetryChip"
              description="Monospace chip displaying mountain elevations, task statuses, or latency indicators."
              importCode={`import { TelemetryChip } from "@aayurt/8848-ui-react";`}
              codeSnippet={`<TelemetryChip variant="summit" size="sm">▲ 8,848m</TelemetryChip>
<TelemetryChip variant="altitude" size="sm">7,120m</TelemetryChip>
<TelemetryChip variant="contour" size="sm">Status: Nominal</TelemetryChip>`}
              onCopy={copyToClipboard}
              copiedId={copiedCode}
            >
              <div className="flex flex-wrap items-center gap-3">
                <TelemetryChip variant="summit" size="sm">▲ 8,848m</TelemetryChip>
                <TelemetryChip variant="altitude" size="sm">7,120m</TelemetryChip>
                <TelemetryChip variant="live" size="sm">Online</TelemetryChip>
                <TelemetryChip variant="muted" size="sm">Status: Nominal</TelemetryChip>
              </div>
            </ComponentDoc>
          )}

          {/* 6. MOUNTAIN CONTOUR */}
          {selectedId === "mountain-contour" && (
            <ComponentDoc
              title="MountainContour"
              description="Interactive SVG topographic mountain contour with daytime sun, nighttime moon, twinkling stars, and comet transitions."
              importCode={`import { MountainContour } from "@aayurt/8848-ui-react";`}
              codeSnippet={`<MountainContour elevationLabel="8,848 m" showPeak={true} />`}
              onCopy={copyToClipboard}
              copiedId={copiedCode}
            >
              <div className="w-full max-w-2xl rounded-ridge border border-stone-200 dark:border-white/10 p-4 bg-white dark:bg-white/[0.02]">
                <MountainContour elevationLabel="8,848 m" showPeak={true} />
              </div>
            </ComponentDoc>
          )}

          {/* 7. BUTTON */}
          {selectedId === "button" && (
            <ComponentDoc
              title="Button"
              description="Himalayan expedition button primitive with terrain elevations and altitude states."
              importCode={`import { Button } from "@aayurt/8848-ui-react";`}
              codeSnippet={`<Button variant="summit" size="md">Summit Action</Button>
<Button variant="hiker" size="md">Hiker Base</Button>
<Button variant="climber" size="md">Climber Route</Button>
<Button variant="trail" size="md">Trail Neutral</Button>`}
              onCopy={copyToClipboard}
              copiedId={copiedCode}
            >
              <div className="space-y-4">
                <div className="flex flex-wrap gap-3">
                  <Button variant="summit">Summit</Button>
                  <Button variant="hiker">Hiker</Button>
                  <Button variant="climber">Climber</Button>
                  <Button variant="trail">Trail</Button>
                </div>
                <div className="flex flex-wrap gap-2 items-center">
                  <Button variant="summit" size="xs">XS</Button>
                  <Button variant="summit" size="sm">SM</Button>
                  <Button variant="summit" size="md">MD</Button>
                  <Button variant="summit" size="lg">LG</Button>
                </div>
              </div>
            </ComponentDoc>
          )}

          {/* 8. INPUT */}
          {selectedId === "input" && (
            <ComponentDoc
              title="Input"
              description="Minimal text inputs with clean focus rings, altitude elevation borders, and monospace font options."
              importCode={`import { Input } from "@aayurt/8848-ui-react";`}
              codeSnippet={`<Input placeholder="Search routes or prompts..." />
<Input placeholder="git commit -m 'feat: 8848'" className="font-mono text-xs" />`}
              onCopy={copyToClipboard}
              copiedId={copiedCode}
            >
              <div className="max-w-md space-y-3">
                <Input placeholder="Search routes or prompts..." />
                <Input placeholder="git commit -m 'feat: 8848'" className="font-mono text-xs" />
              </div>
            </ComponentDoc>
          )}

          {/* 9. CARD */}
          {selectedId === "card" && (
            <ComponentDoc
              title="Card"
              description="Structured container component built with altitude-based elevation shadows (Basecamp, Trail, Ridge, Summit)."
              importCode={`import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@aayurt/8848-ui-react";`}
              codeSnippet={`<Card variant="ridge" padding="md">
  <CardHeader>
    <CardTitle>Camp Milestone</CardTitle>
    <CardDescription>Elevation 6,400m</CardDescription>
  </CardHeader>
  <CardContent>
    Weather window optimal for final ascent.
  </CardContent>
</Card>`}
              onCopy={copyToClipboard}
              copiedId={copiedCode}
            >
              <div className="max-w-md">
                <Card variant="ridge" padding="md">
                  <CardHeader>
                    <CardTitle>Camp Milestone</CardTitle>
                    <CardDescription className="text-stone-600 dark:text-slate-400">
                      Elevation 6,400m
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-xs text-stone-700 dark:text-slate-300">
                    Weather window optimal for final ascent. Team is preparing oxygen supplies and route rigging.
                  </CardContent>
                </Card>
              </div>
            </ComponentDoc>
          )}

          {/* 10. DIALOG */}
          {selectedId === "dialog" && (
            <ComponentDoc
              title="Dialog"
              description="Accessible modal dialog built on Radix Dialog primitive with backdrop blur and smooth altitude enter animations."
              importCode={`import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, Button } from "@aayurt/8848-ui-react";`}
              codeSnippet={`<Dialog>
  <DialogTrigger asChild>
    <Button variant="summit">Open Dialog</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Ascent Protocol</DialogTitle>
      <DialogDescription>Confirm your radio frequency.</DialogDescription>
    </DialogHeader>
    <DialogFooter>
      <Button variant="summit">Confirm</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>`}
              onCopy={copyToClipboard}
              copiedId={copiedCode}
            >
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="summit">Open Dialog Modal</Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Ascent Protocol</DialogTitle>
                    <DialogDescription>
                      Review oxygen pressure and radio frequency before advancing to Camp IV.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="py-2 text-xs font-mono space-y-1 text-stone-600 dark:text-stone-300">
                    <div>RADIO: 146.520 MHz</div>
                    <div>STATUS: Nominal</div>
                  </div>
                  <DialogFooter>
                    <Button variant="summit" size="sm">Confirm Protocol</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </ComponentDoc>
          )}

          {/* 11. DROPDOWN */}
          {selectedId === "dropdown" && (
            <ComponentDoc
              title="DropdownMenu"
              description="Menu triggered by a button displaying options, subheadings, keyboard shortcuts, and separators."
              importCode={`import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuShortcut } from "@aayurt/8848-ui-react";`}
              codeSnippet={`<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button variant="trail">Actions <ChevronDown className="ml-1 h-3.5 w-3.5" /></Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuItem>Save Checkpoint <DropdownMenuShortcut>⌘S</DropdownMenuShortcut></DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>`}
              onCopy={copyToClipboard}
              copiedId={copiedCode}
            >
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="trail" size="sm">
                    Route Actions <ChevronDown className="ml-1 h-3.5 w-3.5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-52">
                  <DropdownMenuLabel>Expedition Menu</DropdownMenuLabel>
                  <DropdownMenuItem onClick={() => toast("Checkpoint Saved")}>
                    Save Checkpoint
                    <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => toast("Exporting GeoJSON")}>
                    Export GeoJSON
                    <DropdownMenuShortcut>⌘E</DropdownMenuShortcut>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="text-red-500">
                    Abort Climb
                    <DropdownMenuShortcut>⌘Q</DropdownMenuShortcut>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </ComponentDoc>
          )}

          {/* 12. TABS */}
          {selectedId === "tabs" && (
            <ComponentDoc
              title="Tabs"
              description="Tabbed navigation interface built on Radix Tabs with active state styling."
              importCode={`import { Tabs, TabsList, TabsTrigger, TabsContent } from "@aayurt/8848-ui-react";`}
              codeSnippet={`<Tabs defaultValue="summit" className="max-w-md">
  <TabsList className="grid grid-cols-2">
    <TabsTrigger value="summit">Summit</TabsTrigger>
    <TabsTrigger value="basecamp">Basecamp</TabsTrigger>
  </TabsList>
  <TabsContent value="summit">Summit Details</TabsContent>
  <TabsContent value="basecamp">Basecamp Details</TabsContent>
</Tabs>`}
              onCopy={copyToClipboard}
              copiedId={copiedCode}
            >
              <Tabs defaultValue="summit" className="max-w-md">
                <TabsList className="grid grid-cols-2 border border-stone-200 dark:border-white/10">
                  <TabsTrigger value="summit">▲ Summit</TabsTrigger>
                  <TabsTrigger value="basecamp">🏕 Basecamp</TabsTrigger>
                </TabsList>
                <TabsContent value="summit" className="mt-3 text-xs text-stone-600 dark:text-stone-300">
                  Summit tier: 8,848m high-altitude developer interfaces and agents.
                </TabsContent>
                <TabsContent value="basecamp" className="mt-3 text-xs text-stone-600 dark:text-stone-300">
                  Basecamp tier: Foundational design tokens, elevation scales, and typography.
                </TabsContent>
              </Tabs>
            </ComponentDoc>
          )}

          {/* 13. SELECT */}
          {selectedId === "select" && (
            <ComponentDoc
              title="Select"
              description="Custom dropdown select primitive with animated popover and chevron indicators."
              importCode={`import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@aayurt/8848-ui-react";`}
              codeSnippet={`<Select defaultValue="summit">
  <SelectTrigger className="w-56">
    <SelectValue placeholder="Select Milestone" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="basecamp">Basecamp (5,364m)</SelectItem>
    <SelectItem value="summit">Summit (8,848m)</SelectItem>
  </SelectContent>
</Select>`}
              onCopy={copyToClipboard}
              copiedId={copiedCode}
            >
              <div className="w-64">
                <Select defaultValue="summit">
                  <SelectTrigger>
                    <SelectValue placeholder="Select altitude" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="basecamp">Basecamp (5,364m)</SelectItem>
                    <SelectItem value="camp2">Camp II (6,400m)</SelectItem>
                    <SelectItem value="southcol">South Col (7,900m)</SelectItem>
                    <SelectItem value="summit">Summit (8,848m)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </ComponentDoc>
          )}

          {/* 14. TABLE */}
          {selectedId === "table" && (
            <ComponentDoc
              title="Table"
              description="High-density data table formatted for telemetry registers and monospace data."
              importCode={`import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@aayurt/8848-ui-react";`}
              codeSnippet={`<Table>
  <TableHeader>
    <TableRow>
      <TableHead>Peak</TableHead>
      <TableHead>Altitude</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell>Sagarmatha</TableCell>
      <TableCell>8,848 m</TableCell>
    </TableRow>
  </TableBody>
</Table>`}
              onCopy={copyToClipboard}
              copiedId={copiedCode}
            >
              <div className="rounded-ridge border border-stone-200 dark:border-white/10 overflow-hidden bg-white dark:bg-white/[0.02] shadow-sm max-w-xl">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Peak</TableHead>
                      <TableHead>Altitude</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-semibold text-stone-900 dark:text-white">Everest</TableCell>
                      <TableCell className="font-mono text-alpine-600 dark:text-alpine-400 font-bold">8,848 m</TableCell>
                      <TableCell><Badge variant="summit">Summit Active</Badge></TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-semibold text-stone-900 dark:text-white">K2</TableCell>
                      <TableCell className="font-mono">8,611 m</TableCell>
                      <TableCell><Badge variant="contour">Monitoring</Badge></TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </ComponentDoc>
          )}

          {/* 15. AVATAR */}
          {selectedId === "avatar" && (
            <ComponentDoc
              title="Avatar & AvatarGroup"
              description="User and climber avatar representations with fallback initials and stacked avatar groups."
              importCode={`import { Avatar, AvatarFallback, AvatarGroup } from "@aayurt/8848-ui-react";`}
              codeSnippet={`<AvatarGroup>
  <Avatar><AvatarFallback>AS</AvatarFallback></Avatar>
  <Avatar><AvatarFallback>EZ</AvatarFallback></Avatar>
</AvatarGroup>`}
              onCopy={copyToClipboard}
              copiedId={copiedCode}
            >
              <div className="p-3 rounded-valley bg-stone-100/80 dark:bg-white/[0.03] border border-stone-200 dark:border-white/10 w-fit">
                <AvatarGroup>
                  <Avatar className="h-10 w-10">
                    <AvatarFallback className="p-2 text-xs font-semibold">AS</AvatarFallback>
                  </Avatar>
                  <Avatar className="h-10 w-10">
                    <AvatarFallback className="p-2 text-xs font-semibold">EZ</AvatarFallback>
                  </Avatar>
                  <Avatar className="h-10 w-10">
                    <AvatarFallback className="p-2 text-xs font-semibold">TS</AvatarFallback>
                  </Avatar>
                  <Avatar className="h-10 w-10">
                    <AvatarFallback className="p-2 text-xs font-semibold">NM</AvatarFallback>
                  </Avatar>
                </AvatarGroup>
              </div>
            </ComponentDoc>
          )}

          {/* 16. BADGE */}
          {selectedId === "badge" && (
            <ComponentDoc
              title="Badge"
              description="High-altitude status badge with elevation, terrain, and contour variants."
              importCode={`import { Badge } from "@aayurt/8848-ui-react";`}
              codeSnippet={`<Badge variant="summit">Active Summit</Badge>
<Badge variant="altitude">8,848m</Badge>
<Badge variant="elevation">Basecamp</Badge>`}
              onCopy={copyToClipboard}
              copiedId={copiedCode}
            >
              <div className="flex flex-wrap gap-2">
                <Badge variant="summit">Active Summit</Badge>
                <Badge variant="altitude">8,848m</Badge>
                <Badge variant="elevation">Basecamp</Badge>
                <Badge variant="contour">Monitoring</Badge>
                <Badge variant="distance">14.2 km</Badge>
              </div>
            </ComponentDoc>
          )}

          {/* 17. TOOLTIP */}
          {selectedId === "tooltip" && (
            <ComponentDoc
              title="Tooltip"
              description="Popup displaying contextual information on hover or focus."
              importCode={`import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider, Button } from "@aayurt/8848-ui-react";`}
              codeSnippet={`<TooltipProvider>
  <Tooltip>
    <TooltipTrigger asChild>
      <Button variant="trail">Hover Me</Button>
    </TooltipTrigger>
    <TooltipContent>Target elevation: 8,848m</TooltipContent>
  </Tooltip>
</TooltipProvider>`}
              onCopy={copyToClipboard}
              copiedId={copiedCode}
            >
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="trail" size="sm">Hover for Telemetry</Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    Target elevation: 8,848m · Atmospheric pressure: 337 mbar
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </ComponentDoc>
          )}

          {/* 18. SWITCH */}
          {selectedId === "switch" && (
            <ComponentDoc
              title="Switch"
              description="Two-state toggle control for real-time preferences and streaming options."
              importCode={`import { Switch, Label } from "@aayurt/8848-ui-react";`}
              codeSnippet={`<div className="flex items-center space-x-2">
  <Switch id="stream-mode" defaultChecked />
  <Label htmlFor="stream-mode">Stream Live Telemetry</Label>
</div>`}
              onCopy={copyToClipboard}
              copiedId={copiedCode}
            >
              <div className="flex items-center space-x-3">
                <Switch id="stream-mode" defaultChecked />
                <Label htmlFor="stream-mode" className="cursor-pointer text-xs font-medium">
                  Stream Live Telemetry
                </Label>
              </div>
            </ComponentDoc>
          )}

          {/* 19. CHECKBOX */}
          {selectedId === "checkbox" && (
            <ComponentDoc
              title="Checkbox"
              description="Multi-selection check input built on Radix Checkbox primitive."
              importCode={`import { Checkbox, Label } from "@aayurt/8848-ui-react";`}
              codeSnippet={`<div className="flex items-center space-x-2">
  <Checkbox id="terms" defaultChecked />
  <Label htmlFor="terms">Cache Vector Embeddings</Label>
</div>`}
              onCopy={copyToClipboard}
              copiedId={copiedCode}
            >
              <div className="flex items-center space-x-2">
                <Checkbox id="chk-doc" defaultChecked />
                <Label htmlFor="chk-doc" className="cursor-pointer text-xs font-medium">
                  Cache Vector Embeddings
                </Label>
              </div>
            </ComponentDoc>
          )}

          {/* 20. RADIO GROUP */}
          {selectedId === "radio" && (
            <ComponentDoc
              title="RadioGroup"
              description="A set of checkable buttons where only one may be checked at a time."
              importCode={`import { RadioGroup, RadioGroupItem, Label } from "@aayurt/8848-ui-react";`}
              codeSnippet={`<RadioGroup defaultValue="fast">
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="fast" id="r1" />
    <Label htmlFor="r1">Fast Inference</Label>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="deep" id="r2" />
    <Label htmlFor="r2">Deep Reasoning</Label>
  </div>
</RadioGroup>`}
              onCopy={copyToClipboard}
              copiedId={copiedCode}
            >
              <RadioGroup defaultValue="fast" className="space-y-2">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="fast" id="r1" />
                  <Label htmlFor="r1" className="cursor-pointer text-xs font-medium">
                    Fast Inference (142ms)
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="deep" id="r2" />
                  <Label htmlFor="r2" className="cursor-pointer text-xs font-medium">
                    Deep Reasoning (8,848m)
                  </Label>
                </div>
              </RadioGroup>
            </ComponentDoc>
          )}

          {/* 21. SEPARATOR */}
          {selectedId === "separator" && (
            <ComponentDoc
              title="Separator"
              description="Visual divider between sections with horizontal and vertical orientations."
              importCode={`import { Separator } from "@aayurt/8848-ui-react";`}
              codeSnippet={`<div>Section 1</div>
<Separator className="my-4" />
<div>Section 2</div>`}
              onCopy={copyToClipboard}
              copiedId={copiedCode}
            >
              <div className="max-w-md space-y-4">
                <div className="text-xs font-mono text-stone-500">SECTION ALPHA</div>
                <Separator />
                <div className="text-xs font-mono text-stone-500">SECTION BETA</div>
              </div>
            </ComponentDoc>
          )}
        </main>
      </div>
    </div>
  );
}

// Reusable Component Documentation Box
function ComponentDoc({
  title,
  description,
  importCode,
  codeSnippet,
  children,
  onCopy,
  copiedId,
}: {
  title: string;
  description: string;
  importCode: string;
  codeSnippet: string;
  children: React.ReactNode;
  onCopy: (text: string, id: string) => void;
  copiedId: string | null;
}) {
  return (
    <div className="space-y-8 animate-in fade-in-50 duration-200">
      {/* Title & Description */}
      <div className="space-y-1.5 border-b border-stone-200 dark:border-white/10 pb-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-extrabold tracking-tight text-stone-900 dark:text-white font-sans">
            {title}
          </h1>
          <Badge variant="altitude">Component</Badge>
        </div>
        <p className="text-sm text-stone-600 dark:text-white/60 leading-relaxed font-sans max-w-2xl">
          {description}
        </p>
      </div>

      {/* Live Interactive Preview Box */}
      <div className="space-y-3">
        <div className="text-xs font-mono uppercase tracking-wider text-stone-500 dark:text-white/40 font-semibold">
          Preview
        </div>
        <div className="flex min-h-[220px] w-full items-center justify-center rounded-ridge border border-stone-200 dark:border-white/10 bg-white dark:bg-[#111113]/60 p-8 shadow-sm">
          {children}
        </div>
      </div>

      {/* Code Snippets & Installation */}
      <div className="space-y-4">
        <div className="text-xs font-mono uppercase tracking-wider text-stone-500 dark:text-white/40 font-semibold">
          Installation & Usage
        </div>

        {/* Import Code */}
        <div className="relative rounded-ridge border border-stone-300 dark:border-white/15 bg-stone-100 dark:bg-white/[0.04] p-3 text-xs font-mono">
          <div className="text-stone-700 dark:text-white/90 overflow-x-auto pr-8">
            {importCode}
          </div>
          <button
            onClick={() => onCopy(importCode, title + "-import")}
            className="absolute right-3 top-3 text-stone-400 dark:text-white/40 hover:text-stone-900 dark:hover:text-white transition-colors"
            title="Copy import"
          >
            {copiedId === title + "-import" ? (
              <Check className="h-3.5 w-3.5 text-emerald-500" />
            ) : (
              <Copy className="h-3.5 w-3.5" />
            )}
          </button>
        </div>

        {/* Usage Snippet */}
        <div className="relative rounded-ridge border border-stone-300 dark:border-white/15 bg-stone-950 p-4 text-xs font-mono text-stone-100 overflow-x-auto">
          <pre>{codeSnippet}</pre>
          <button
            onClick={() => onCopy(codeSnippet, title + "-usage")}
            className="absolute right-3 top-3 text-white/40 hover:text-white transition-colors"
            title="Copy usage code"
          >
            {copiedId === title + "-usage" ? (
              <Check className="h-3.5 w-3.5 text-emerald-400" />
            ) : (
              <Copy className="h-3.5 w-3.5" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
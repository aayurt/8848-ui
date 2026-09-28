"use client";

import * as React from "react";
import {
  Button,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  Badge,
  Tabs,
  TabsList,
  TabsTrigger,
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
  SelectGroup,
  SelectLabel,
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
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandShortcut,
  MountainContour,
  ExecutionCard,
  ExecutorNode,
  TelemetryChip,
  ToolCallInspector,
  ApprovalPrompt,
  toast,
} from "@aayurt/8848-ui-react";
import {
  Github,
  Mountain,
  Copy,
  Check,
  Search,
  Sliders,
  ChevronDown,
  Terminal,
  Activity,
  Layers,
  Sparkles,
  Zap,
} from "lucide-react";

export default function HomePage() {
  const [activeTab, setActiveTab] = React.useState("summit");
  const [commandOpen, setCommandOpen] = React.useState(false);
  const [dialogOpen, setDialogOpen] = React.useState(false);
  const [copiedInstall, setCopiedInstall] = React.useState(false);
  const [switchChecked, setSwitchChecked] = React.useState(true);
  const [checkboxChecked, setCheckboxChecked] = React.useState(true);
  const [radioVal, setRadioVal] = React.useState("fast");

  // Handle Command + K shortcut
  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setCommandOpen((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const copyInstall = () => {
    navigator.clipboard.writeText("pnpm add @aayurt/8848-ui-react @aayurt/8848-ui-core");
    setCopiedInstall(true);
    toast.success("Command copied to clipboard", {
      description: "pnpm add @aayurt/8848-ui-react @aayurt/8848-ui-core",
    });
    setTimeout(() => setCopiedInstall(false), 2000);
  };

  return (
    <div className="relative min-h-screen flex flex-col bg-[#09090B] text-[#FAFAFA] antialiased">
      {/* Top Header */}
      <header className="sticky top-0 z-40 w-full border-b border-white/[0.08] bg-[#09090B]/85 backdrop-blur-md">
        <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-6">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-2 font-bold tracking-tight text-white text-base">
              <Mountain className="h-4 w-4 text-alpine-400" />
              8848 <span className="text-white/40 font-mono text-xs">UI</span>
            </span>

            <TelemetryChip variant="summit" size="sm">
              ▲ 8,848m
            </TelemetryChip>
          </div>

          <div className="flex items-center gap-3">
            {/* Command Palette Trigger */}
            <button
              onClick={() => setCommandOpen(true)}
              className="hidden sm:flex items-center gap-2 rounded-valley border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-white/50 hover:border-white/20 hover:text-white transition-all shadow-basecamp"
            >
              <Search className="h-3.5 w-3.5" />
              <span>Search components...</span>
              <kbd className="ml-2 font-mono text-[10px] bg-white/10 px-1.5 py-0.5 rounded text-white/70">
                ⌘K
              </kbd>
            </button>

            <nav className="flex items-center gap-4 text-xs text-white/70">
              <a
                href="#components"
                className="hover:text-white transition-colors"
                onClick={() => setActiveTab("summit")}
              >
                Summit
              </a>
              <a
                href="#components"
                className="hover:text-white transition-colors"
                onClick={() => setActiveTab("climb")}
              >
                Equipment
              </a>
              <a
                href="#components"
                className="hover:text-white transition-colors"
                onClick={() => setActiveTab("basecamp")}
              >
                Foundations
              </a>

              <a
                href="https://github.com/aayurt/8848-ui"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 rounded-valley bg-white/10 px-2.5 py-1 text-white hover:bg-white/20 transition-all"
              >
                <Github className="h-3.5 w-3.5" />
                <span>GitHub</span>
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-12 border-b border-white/[0.06]">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 mb-6 text-xs font-mono text-white/70">
            <span className="h-1.5 w-1.5 rounded-full bg-alpine-400 animate-pulse" />
            Elevation 8,848m · High-Altitude Developer Environment
          </div>

          <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl text-white font-sans">
            Build at Altitude.
          </h1>

          <p className="mx-auto mt-4 max-w-xl text-base text-white/60 leading-relaxed font-sans">
            A minimal, quiet, Himalayan-inspired design system for modern and
            agentic interfaces. Engineered with Radix primitives, Tailwind CSS, and altitude telemetry.
          </p>

          {/* Quick Install Banner */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <div className="flex items-center gap-2 rounded-ridge border border-white/15 bg-white/[0.04] px-4 py-2 text-xs font-mono text-white/90 shadow-trail">
              <Terminal className="h-3.5 w-3.5 text-alpine-400" />
              <span>pnpm add @aayurt/8848-ui-react @aayurt/8848-ui-core</span>
              <button
                onClick={copyInstall}
                className="ml-2 text-white/40 hover:text-white transition-colors"
                title="Copy command"
              >
                {copiedInstall ? (
                  <Check className="h-3.5 w-3.5 text-emerald-400" />
                ) : (
                  <Copy className="h-3.5 w-3.5" />
                )}
              </button>
            </div>

            <Button
              variant="summit"
              size="md"
              onClick={() => {
                document.getElementById("components")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <Sparkles className="mr-1.5 h-3.5 w-3.5" />
              Explore Components
            </Button>
          </div>

          {/* Live Action Triggers */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2 text-xs">
            <Button
              variant="trail"
              size="sm"
              onClick={() => {
                toast.success("Himalayan Telemetry Active", {
                  description: "Altitude: 8,848m · Worker slot: 02 · Status: Nominal",
                });
              }}
            >
              <Zap className="mr-1.5 h-3.5 w-3.5 text-alpine-400" />
              Trigger Toast
            </Button>

            <Button
              variant="trail"
              size="sm"
              onClick={() => setDialogOpen(true)}
            >
              Open Dialog
            </Button>

            <Button
              variant="trail"
              size="sm"
              onClick={() => setCommandOpen(true)}
            >
              Launch Command (⌘K)
            </Button>
          </div>
        </div>

        {/* Signature Topographic Mountain Linework */}
        <div className="mt-8 px-4">
          <MountainContour className="max-w-5xl mx-auto" elevationLabel="8,848 m" />
        </div>
      </section>

      {/* Main Interactive Showcase */}
      <main id="components" className="mx-auto max-w-7xl w-full px-4 py-16 sm:px-6 space-y-12">
        {/* Tier Switcher Navigation */}
        <div className="flex flex-col items-center gap-4">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full max-w-lg">
            <TabsList className="grid w-full grid-cols-3 bg-white/[0.04] border border-white/10 p-1">
              <TabsTrigger value="summit" className="text-xs">
                ▲ Summit (Agentic)
              </TabsTrigger>
              <TabsTrigger value="climb" className="text-xs">
                ⛰ Climb (Equipment)
              </TabsTrigger>
              <TabsTrigger value="basecamp" className="text-xs">
                🏕 Basecamp (Tokens)
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        {/* TAB 1: SUMMIT (Agentic UI) */}
        {activeTab === "summit" && (
          <section className="space-y-8 animate-in fade-in-50 duration-300">
            <div className="text-center max-w-xl mx-auto space-y-1">
              <h2 className="text-2xl font-bold tracking-tight text-white font-sans">
                Summit: Agentic UI
              </h2>
              <p className="text-xs text-white/50">
                Specialized components for autonomous agent workflows, step telemetry, and human-in-the-loop decisions.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              {/* Real-time Agent Execution Pipeline Card */}
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
              >
                <div className="mt-3 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs">
                  <span className="text-white/40 font-mono text-[11px]">AUTONOMOUS CONTROLLER</span>
                  <div className="flex gap-2">
                    <Button
                      variant="trail"
                      size="xs"
                      onClick={() => {
                        toast("Agent Paused", { description: "Execution halted at 8,240m" });
                      }}
                    >
                      Pause
                    </Button>
                    <Button
                      variant="summit"
                      size="xs"
                      onClick={() => {
                        toast.success("Pipeline Steered", { description: "Steering directive applied to slot 02" });
                      }}
                    >
                      Steer
                    </Button>
                  </div>
                </div>
              </ExecutionCard>

              {/* Tool Call Inspector & Human Approval Card */}
              <div className="space-y-4">
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

                <ApprovalPrompt
                  title="Database Migration Authorization"
                  description="The agent is requesting approval to execute a production schema migration."
                  commandSnippet="pnpm prisma migrate deploy --preview-feature"
                  severity="critical"
                  altitude="8,480m"
                  onApprove={() => {
                    toast.success("Migration Approved", {
                      description: "Executing migration in slot 03...",
                    });
                  }}
                  onReject={() => {
                    toast.error("Migration Denied", {
                      description: "Operation halted by operator.",
                    });
                  }}
                />
              </div>
            </div>

            {/* Active Worker Nodes Grid */}
            <div className="pt-4">
              <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4">
                <div className="text-xs font-mono uppercase tracking-wider text-white/50 flex items-center gap-2">
                  <Activity className="h-3.5 w-3.5 text-alpine-400" />
                  <span>Active Distributed Workers</span>
                </div>
                <span className="text-xs font-mono text-emerald-400">3/3 Online</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <ExecutorNode
                  slotId="EXECUTOR-01"
                  status="running"
                  model="nemotron-3.5-lightning"
                  taskId="UI8848-001"
                  progress={85}
                />
                <ExecutorNode
                  slotId="EXECUTOR-02"
                  status="verifying"
                  model="opencode-free"
                  taskId="UI8848-002"
                  progress={95}
                />
                <ExecutorNode
                  slotId="EXECUTOR-03"
                  status="idle"
                  model="qwen-2.5-coder"
                  progress={0}
                />
              </div>
            </div>
          </section>
        )}

        {/* TAB 2: CLIMB (Equipment Primitives) */}
        {activeTab === "climb" && (
          <section className="space-y-12 animate-in fade-in-50 duration-300">
            <div className="text-center max-w-xl mx-auto space-y-1">
              <h2 className="text-2xl font-bold tracking-tight text-white font-sans">
                Climb: Equipment Primitives
              </h2>
              <p className="text-xs text-white/50">
                Complete interactive component building blocks crafted with genuine Radix UI primitives.
              </p>
            </div>

            {/* Interactive Component Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* 1. Buttons */}
              <Card variant="ridge" padding="md">
                <CardHeader>
                  <CardTitle>Button System</CardTitle>
                  <CardDescription>Altitude and terrain variants</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    <Button variant="summit" size="sm">Summit</Button>
                    <Button variant="hiker" size="sm">Hiker</Button>
                    <Button variant="climber" size="sm">Climber</Button>
                    <Button variant="trail" size="sm">Trail</Button>
                  </div>

                  <div className="flex flex-wrap gap-2 items-center">
                    <Button variant="summit" size="xs">XS</Button>
                    <Button variant="summit" size="sm">SM</Button>
                    <Button variant="summit" size="md">MD</Button>
                    <Button variant="summit" size="lg">LG</Button>
                  </div>

                  <div className="flex gap-2">
                    <Button variant="trail" size="sm" loading>Loading</Button>
                    <Button variant="trail" size="sm" disabled>Disabled</Button>
                  </div>
                </CardContent>
              </Card>

              {/* 2. Overlays (Dropdown & Dialog) */}
              <Card variant="ridge" padding="md">
                <CardHeader>
                  <CardTitle>Interactive Overlays</CardTitle>
                  <CardDescription>Dropdown menus and modal dialogs</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    {/* Dropdown Menu */}
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="trail" size="sm">
                          Options <ChevronDown className="ml-1 h-3.5 w-3.5" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="start" className="w-48">
                        <DropdownMenuLabel>Route Actions</DropdownMenuLabel>
                        <DropdownMenuItem onClick={() => toast("Checkpoint Saved")}>
                          Save Checkpoint
                          <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => toast("Exporting GeoJSON")}>
                          Export GeoJSON
                          <DropdownMenuShortcut>⌘E</DropdownMenuShortcut>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-red-400">
                          Abort Climb
                          <DropdownMenuShortcut>⌘Q</DropdownMenuShortcut>
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>

                    {/* Modal Dialog */}
                    <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
                      <DialogTrigger asChild>
                        <Button variant="summit" size="sm">Open Modal</Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Summit Ascent Protocol</DialogTitle>
                          <DialogDescription>
                            Review your oxygen supply, weather window, and radio frequency before final push.
                          </DialogDescription>
                        </DialogHeader>
                        <div className="space-y-3 py-2 text-xs">
                          <div className="flex justify-between border-b border-white/10 pb-1.5">
                            <span className="text-white/50">TARGET ALTITUDE</span>
                            <span className="font-mono font-bold text-alpine-400">8,848 m</span>
                          </div>
                          <div className="flex justify-between border-b border-white/10 pb-1.5">
                            <span className="text-white/50">WIND SPEED</span>
                            <span className="font-mono">14 km/h (Optimal)</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-white/50">BASECAMP FREQ</span>
                            <span className="font-mono">146.520 MHz</span>
                          </div>
                        </div>
                        <DialogFooter>
                          <Button variant="trail" size="sm" onClick={() => setDialogOpen(false)}>
                            Cancel
                          </Button>
                          <Button
                            variant="summit"
                            size="sm"
                            onClick={() => {
                              setDialogOpen(false);
                              toast.success("Ascent Initiated", { description: "Pushing to the summit!" });
                            }}
                          >
                            Confirm Ascent
                          </Button>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                  </div>

                  {/* Avatars */}
                  <div className="pt-2">
                    <Label className="text-xs text-white/50 mb-2 block">Climber Avatars</Label>
                    <AvatarGroup>
                      <Avatar>
                        <AvatarFallback>AS</AvatarFallback>
                      </Avatar>
                      <Avatar>
                        <AvatarFallback>EZ</AvatarFallback>
                      </Avatar>
                      <Avatar>
                        <AvatarFallback>TS</AvatarFallback>
                      </Avatar>
                      <Avatar>
                        <AvatarFallback>NM</AvatarFallback>
                      </Avatar>
                    </AvatarGroup>
                  </div>
                </CardContent>
              </Card>

              {/* 3. Form Controls & Inputs */}
              <Card variant="ridge" padding="md">
                <CardHeader>
                  <CardTitle>Form Selection</CardTitle>
                  <CardDescription>Select, switch, and radio groups</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-1.5">
                    <Label>Altitude Preset</Label>
                    <Select defaultValue="summit">
                      <SelectTrigger>
                        <SelectValue placeholder="Select altitude" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>Camp Milestones</SelectLabel>
                          <SelectItem value="basecamp">Basecamp (5,364m)</SelectItem>
                          <SelectItem value="camp2">Camp II (6,400m)</SelectItem>
                          <SelectItem value="southcol">South Col (7,900m)</SelectItem>
                          <SelectItem value="summit">Summit (8,848m)</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex items-center justify-between">
                    <Label htmlFor="toggle-stream" className="cursor-pointer">
                      Stream Telemetry
                    </Label>
                    <Switch
                      id="toggle-stream"
                      checked={switchChecked}
                      onCheckedChange={setSwitchChecked}
                    />
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="chk-telemetry"
                      checked={checkboxChecked}
                      onCheckedChange={(val) => setCheckboxChecked(!!val)}
                    />
                    <Label htmlFor="chk-telemetry" className="cursor-pointer">
                      Cache vector embeddings
                    </Label>
                  </div>

                  <RadioGroup value={radioVal} onValueChange={setRadioVal} className="pt-1">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="fast" id="r-fast" />
                      <Label htmlFor="r-fast">Fast Inference (142ms)</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="deep" id="r-deep" />
                      <Label htmlFor="r-deep">Deep Reasoning (8,848m)</Label>
                    </div>
                  </RadioGroup>
                </CardContent>
              </Card>
            </div>

            {/* 4. Topographic Data Table */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-semibold tracking-tight text-white font-mono uppercase">
                  Elevation Register (Himalayan 8000ers)
                </h3>
                <Badge variant="altitude">5 Peaks Registered</Badge>
              </div>

              <div className="rounded-ridge border border-white/10 overflow-hidden bg-white/[0.02]">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Peak</TableHead>
                      <TableHead>Altitude</TableHead>
                      <TableHead>Range</TableHead>
                      <TableHead>First Ascent</TableHead>
                      <TableHead>Telemetry Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-semibold text-white">Sagarmatha / Everest</TableCell>
                      <TableCell className="font-mono text-alpine-400 font-bold">8,848 m</TableCell>
                      <TableCell>Mahalangur Himal</TableCell>
                      <TableCell className="font-mono">1953</TableCell>
                      <TableCell>
                        <Badge variant="summit">Active Summit</Badge>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-semibold text-white">K2 / Chhogori</TableCell>
                      <TableCell className="font-mono text-white/90">8,611 m</TableCell>
                      <TableCell>Baltoro Karakoram</TableCell>
                      <TableCell className="font-mono">1954</TableCell>
                      <TableCell>
                        <Badge variant="contour">Monitoring</Badge>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-semibold text-white">Kangchenjunga</TableCell>
                      <TableCell className="font-mono text-white/90">8,586 m</TableCell>
                      <TableCell>Kangchenjunga Himal</TableCell>
                      <TableCell className="font-mono">1955</TableCell>
                      <TableCell>
                        <Badge variant="elevation">Camp IV</Badge>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-semibold text-white">Lhotse</TableCell>
                      <TableCell className="font-mono text-white/90">8,516 m</TableCell>
                      <TableCell>Everest Massif</TableCell>
                      <TableCell className="font-mono">1956</TableCell>
                      <TableCell>
                        <Badge variant="altitude">Route Clear</Badge>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-semibold text-white">Makalu</TableCell>
                      <TableCell className="font-mono text-white/90">8,485 m</TableCell>
                      <TableCell>Makalu Himal</TableCell>
                      <TableCell className="font-mono">1955</TableCell>
                      <TableCell>
                        <Badge variant="distance">Standby</Badge>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </div>
          </section>
        )}

        {/* TAB 3: BASECAMP (Tokens & Foundations) */}
        {activeTab === "basecamp" && (
          <section className="space-y-8 animate-in fade-in-50 duration-300">
            <div className="text-center max-w-xl mx-auto space-y-1">
              <h2 className="text-2xl font-bold tracking-tight text-white font-sans">
                Basecamp: Design Foundations
              </h2>
              <p className="text-xs text-white/50">
                Calm monochrome baseline, Himalayan Blue accent, and altitude elevation scales.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <Card variant="ridge" padding="md">
                <CardHeader>
                  <CardTitle>OKLCH Color Palette</CardTitle>
                  <CardDescription>Perceptually uniform colors engineered for contrast</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                    <div className="p-3 rounded-valley bg-[#09090B] border border-white/15">
                      <div className="font-bold">Background</div>
                      <div className="text-white/40">#09090B</div>
                    </div>
                    <div className="p-3 rounded-valley bg-[#111113] border border-white/15">
                      <div className="font-bold">Surface</div>
                      <div className="text-white/40">#111113</div>
                    </div>
                    <div className="p-3 rounded-valley bg-alpine-600 text-white">
                      <div className="font-bold">Alpine Blue</div>
                      <div className="text-white/80">oklch(55% 0.18 250)</div>
                    </div>
                    <div className="p-3 rounded-valley bg-sunrise-500 text-white">
                      <div className="font-bold">Sunrise Orange</div>
                      <div className="text-white/80">oklch(65% 0.18 35)</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card variant="ridge" padding="md">
                <CardHeader>
                  <CardTitle>Typography System</CardTitle>
                  <CardDescription>Inter (body) + JetBrains Mono (metrics)</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-1">
                    <div className="text-xs text-white/50 font-mono">Inter · Interface & Prose</div>
                    <div className="text-sm font-sans font-medium">
                      The mountain should be atmosphere, not the UI itself.
                    </div>
                  </div>
                  <div className="space-y-1 pt-2 border-t border-white/10">
                    <div className="text-xs text-white/50 font-mono">JetBrains Mono · Telemetry & Code</div>
                    <div className="text-xs font-mono text-alpine-300">
                      8,848m · LATENCY: 142ms · TOKENS: 4,281 tok
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>
        )}
      </main>

      {/* Interactive Command Dialog Modal (CMDK) */}
      <CommandDialog open={commandOpen} onOpenChange={setCommandOpen}>
        <CommandInput placeholder="Type a component name or action..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Agentic (Summit)">
            <CommandItem
              onSelect={() => {
                setActiveTab("summit");
                setCommandOpen(false);
              }}
            >
              <Activity className="mr-2 h-4 w-4" />
              <span>Execution Pipeline Card</span>
              <CommandShortcut>▲ 8,240m</CommandShortcut>
            </CommandItem>
            <CommandItem
              onSelect={() => {
                setActiveTab("summit");
                setCommandOpen(false);
              }}
            >
              <Terminal className="mr-2 h-4 w-4" />
              <span>Tool Call Inspector</span>
            </CommandItem>
            <CommandItem
              onSelect={() => {
                setActiveTab("summit");
                setCommandOpen(false);
              }}
            >
              <Layers className="mr-2 h-4 w-4" />
              <span>Distributed Worker Node</span>
            </CommandItem>
          </CommandGroup>
          <CommandGroup heading="Equipment (Climb)">
            <CommandItem
              onSelect={() => {
                setActiveTab("climb");
                setCommandOpen(false);
              }}
            >
              <Sliders className="mr-2 h-4 w-4" />
              <span>Form Controls (Select, Switch, Checkbox)</span>
            </CommandItem>
            <CommandItem
              onSelect={() => {
                setActiveTab("climb");
                setCommandOpen(false);
              }}
            >
              <Mountain className="mr-2 h-4 w-4" />
              <span>Topographic Elevation Table</span>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>

      {/* Footer */}
      <footer className="border-t border-white/[0.08] py-8 text-center text-xs text-white/40 font-mono">
        <p>8848 UI · Built by Aayurt Shrestha · Public Domain / MIT</p>
      </footer>
    </div>
  );
}
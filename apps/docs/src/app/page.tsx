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
  Input,
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
  Switch,
  Checkbox,
  Label,
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
  MountainContour,
  ExecutionCard,
  ExecutorNode,
  TelemetryChip,
  ToolCallInspector,
  ApprovalPrompt,
} from "@aayurt/8848-ui-react";
import { Github, Terminal, Mountain, Layers, Cpu, ShieldCheck } from "lucide-react";

export default function HomePage() {
  const [activeTab, setActiveTab] = React.useState("summit");
  const [switchChecked, setSwitchChecked] = React.useState(true);
  const [checkboxChecked, setCheckboxChecked] = React.useState(true);

  return (
    <div className="relative min-h-screen flex flex-col bg-[#09090B] text-[#FAFAFA]">
      {/* Top Header */}
      <header className="sticky top-0 z-40 w-full border-b border-white/[0.08] bg-[#09090B]/80 backdrop-blur-md">
        <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-6">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 font-bold tracking-tight text-white text-base">
              <Mountain className="h-4 w-4 text-alpine-400" />
              8848 <span className="text-white/40 font-mono text-xs">UI</span>
            </span>
            <TelemetryChip variant="summit" size="sm">
              8,848m
            </TelemetryChip>
          </div>

          <nav className="flex items-center gap-6 text-xs text-white/60">
            <a href="#basecamp" className="hover:text-white transition-colors">
              Basecamp
            </a>
            <a href="#climb" className="hover:text-white transition-colors">
              Climb
            </a>
            <a href="#summit" className="hover:text-white transition-colors">
              Summit
            </a>
            <a
              href="https://github.com/aayurt/8848-ui"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1 text-white hover:text-alpine-400 transition-colors"
            >
              <Github className="h-3.5 w-3.5" />
              <span>GitHub</span>
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-16 border-b border-white/[0.06]">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 mb-6 text-xs font-mono text-white/70">
            <span className="h-1.5 w-1.5 rounded-full bg-alpine-400 animate-pulse" />
            Elevation 8,848m · Atmospheric Developer Environment
          </div>

          <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl text-white font-sans">
            Build at Altitude.
          </h1>

          <p className="mx-auto mt-4 max-w-xl text-base text-white/60 leading-relaxed">
            A minimal, quiet, Himalayan-inspired design system for modern and
            agentic interfaces. Engineered for systems that reason, execute, and scale.
          </p>

          <div className="mt-8 flex items-center justify-center gap-3">
            <Button
              variant="summit"
              size="lg"
              onClick={() => {
                document.getElementById("components")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Explore Components
            </Button>

            <Button
              variant="trail"
              size="lg"
              onClick={() => {
                window.open("https://github.com/aayurt/8848-ui", "_blank");
              }}
            >
              <Github className="mr-2 h-4 w-4" />
              GitHub
            </Button>
          </div>
        </div>

        {/* Signature Topographic Mountain Linework */}
        <div className="mt-12 px-4">
          <MountainContour className="max-w-5xl mx-auto opacity-70" elevationLabel="8,848 m" />
        </div>
      </section>

      {/* Main Component Playground */}
      <main id="components" className="mx-auto max-w-7xl w-full px-4 py-16 sm:px-6 space-y-16">
        {/* Tier Tabs: Basecamp / Climb / Summit */}
        <div className="flex flex-col items-center gap-4">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full max-w-md">
            <TabsList className="grid w-full grid-cols-3 bg-white/[0.04] border border-white/10">
              <TabsTrigger value="basecamp">Basecamp</TabsTrigger>
              <TabsTrigger value="climb">Climb</TabsTrigger>
              <TabsTrigger value="summit">Summit</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        {/* SUMMIT: Agentic UI Showcase */}
        {activeTab === "summit" && (
          <section className="space-y-8 animate-in fade-in-50 duration-300">
            <div className="text-center max-w-xl mx-auto space-y-1">
              <h2 className="text-2xl font-bold tracking-tight text-white">Summit: Agentic UI</h2>
              <p className="text-xs text-white/50">
                Specialized interfaces for autonomous agents, tool invocations, and telemetry.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              {/* Execution Card */}
              <ExecutionCard
                title="Deep Research Agent"
                subtitle="Analyzing competitive architecture specifications"
                status="executing"
                altitude="8,240m"
                latency="142ms"
                tokens="4.2k tok"
                steps={[
                  { id: "1", label: "Decompose query objectives", status: "completed", elevation: "5,364m" },
                  { id: "2", label: "Search vector knowledge base", status: "completed", elevation: "6,800m" },
                  { id: "3", label: "Execute tool calls & web crawl", status: "in_progress", elevation: "8,240m" },
                  { id: "4", label: "Synthesize summary report", status: "pending", elevation: "8,848m" },
                ]}
              />

              {/* Tool Call Inspector & Approval */}
              <div className="space-y-4">
                <ToolCallInspector
                  toolName="web_search"
                  duration="84ms"
                  elevation="7,120m"
                  status="success"
                  defaultOpen={true}
                  args={{ query: "8848 ui design system", max_results: 5 }}
                  result={{ status: 200, matches: 5, time_elapsed: "0.084s" }}
                />

                <ApprovalPrompt
                  title="Execute Database Schema Migration"
                  description="Agent requested permission to apply remote postgres migration 0012_tasks."
                  commandSnippet="pnpm prisma migrate deploy --preview-feature"
                  severity="critical"
                  altitude="8,480m"
                  onApprove={() => alert("Action authorized!")}
                  onReject={() => alert("Action rejected.")}
                />
              </div>
            </div>

            {/* Executor Nodes Grid */}
            <div className="pt-6">
              <div className="text-xs font-mono uppercase tracking-wider text-white/40 pb-3">
                Active Worker Nodes
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <ExecutorNode slotId="EXECUTOR-01" status="running" model="nemotron-3.5-lightning" taskId="UI8848-001" progress={80} />
                <ExecutorNode slotId="EXECUTOR-02" status="verifying" model="opencode-free" taskId="UI8848-002" progress={95} />
                <ExecutorNode slotId="EXECUTOR-03" status="idle" model="qwen-2.5-coder" progress={0} />
              </div>
            </div>
          </section>
        )}

        {/* CLIMB: Core Interactive Primitives */}
        {activeTab === "climb" && (
          <section className="space-y-8 animate-in fade-in-50 duration-300">
            <div className="text-center max-w-xl mx-auto space-y-1">
              <h2 className="text-2xl font-bold tracking-tight text-white">Climb: Equipment</h2>
              <p className="text-xs text-white/50">
                Core interactive building blocks crafted with Radix primitives.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Buttons Card */}
              <Card variant="ridge" padding="md">
                <CardHeader>
                  <CardTitle>Button Variants</CardTitle>
                  <CardDescription>Elevation-based button actions</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex flex-wrap gap-2">
                    <Button variant="summit">Summit</Button>
                    <Button variant="hiker">Hiker</Button>
                    <Button variant="climber">Climber</Button>
                    <Button variant="trail">Trail</Button>
                  </div>
                </CardContent>
              </Card>

              {/* Form Controls */}
              <Card variant="ridge" padding="md">
                <CardHeader>
                  <CardTitle>Form Controls</CardTitle>
                  <CardDescription>Selection, switches & checkboxes</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="airplane-mode">High-Altitude Mode</Label>
                    <Switch id="airplane-mode" checked={switchChecked} onCheckedChange={setSwitchChecked} />
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="terms" checked={checkboxChecked} onCheckedChange={(val) => setCheckboxChecked(!!val)} />
                    <Label htmlFor="terms">Stream live tokens</Label>
                  </div>
                  <div className="space-y-1.5">
                    <Label>Elevation Preset</Label>
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
                </CardContent>
              </Card>

              {/* Inputs */}
              <Card variant="ridge" padding="md">
                <CardHeader>
                  <CardTitle>Text Inputs</CardTitle>
                  <CardDescription>Monospace and standard inputs</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Input placeholder="Enter prompt or query..." />
                  <Input placeholder="git commit -m 'feat: 8848'" className="font-mono text-xs" />
                </CardContent>
              </Card>
            </div>
          </section>
        )}

        {/* BASECAMP: Tokens & Foundations */}
        {activeTab === "basecamp" && (
          <section className="space-y-8 animate-in fade-in-50 duration-300">
            <div className="text-center max-w-xl mx-auto space-y-1">
              <h2 className="text-2xl font-bold tracking-tight text-white">Basecamp: Foundations</h2>
              <p className="text-xs text-white/50">
                Colors, typography, elevations, and design tokens.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <Card variant="ridge" padding="md">
                <CardHeader>
                  <CardTitle>Color Tokens</CardTitle>
                  <CardDescription>Monochromatic slate base with Himalayan Blue accent</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                    <div className="p-3 rounded-valley bg-slate-900 border border-white/10">
                      <div>Background</div>
                      <div className="text-white/40">#09090B</div>
                    </div>
                    <div className="p-3 rounded-valley bg-slate-800 border border-white/10">
                      <div>Surface</div>
                      <div className="text-white/40">#111113</div>
                    </div>
                    <div className="p-3 rounded-valley bg-alpine-600 text-white">
                      <div>Alpine Blue</div>
                      <div className="text-white/80">#0ea5e9</div>
                    </div>
                    <div className="p-3 rounded-valley bg-white/5 border border-white/10">
                      <div>Mountain Line</div>
                      <div className="text-white/40">#27272A</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card variant="ridge" padding="md">
                <CardHeader>
                  <CardTitle>Typography</CardTitle>
                  <CardDescription>Inter (sans) + JetBrains Mono (metrics)</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="space-y-1">
                    <div className="text-xs text-white/50 font-mono">Sans: Inter</div>
                    <div className="text-sm font-sans font-medium">
                      The quick brown fox jumps over the lazy dog.
                    </div>
                  </div>
                  <div className="space-y-1 pt-2">
                    <div className="text-xs text-white/50 font-mono">Mono: JetBrains Mono</div>
                    <div className="text-xs font-mono text-alpine-300">
                      ELEVATION: 8,848m · LATENCY: 142ms · TOKENS: 4,281
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-white/[0.08] py-8 text-center text-xs text-white/40 font-mono">
        <p>8848 UI · Built by Aayurt Shrestha · Public Domain / MIT</p>
      </footer>
    </div>
  );
}
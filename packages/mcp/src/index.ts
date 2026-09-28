#!/usr/bin/env node
/**
 * 8848 UI MCP server — exposes the shadcn registry to AI assistants.
 *
 * Transport: stdio. Registry source: live /r/registry.json (+ per-item
 * JSON), so listings never go stale. Override with REGISTRY_BASE_URL.
 *
 * Tools: registry_info, list_components, search_components,
 *        get_component, get_component_file
 */
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { createRequire } from "node:module";
import { z } from "zod";

const require = createRequire(import.meta.url);
const { version: SERVER_VERSION } = require("../package.json") as { version: string };

const BASE = (process.env.REGISTRY_BASE_URL ?? "https://8848.aayurtshrestha.com.np").replace(/\/$/, "");
const REGISTRY_URL = `${BASE}/r/registry.json`;
const CACHE_TTL_MS = 5 * 60 * 1000;

interface RegistryFile {
  path: string;
  type: string;
  target: string;
}

interface RegistryItem {
  name: string;
  type: string;
  title?: string;
  description?: string;
  dependencies?: string[];
  registryDependencies?: string[];
  files?: RegistryFile[];
}

let cache: { at: number; items: RegistryItem[] } | null = null;

async function fetchJson(url: string): Promise<unknown> {
  const res = await fetch(url, { headers: { accept: "application/json" } });
  if (!res.ok) throw new Error(`registry fetch failed: ${url} (HTTP ${res.status})`);
  return res.json();
}

async function getIndex(): Promise<RegistryItem[]> {
  if (cache && Date.now() - cache.at < CACHE_TTL_MS) return cache.items;
  const data = (await fetchJson(REGISTRY_URL)) as { items?: RegistryItem[] };
  if (!Array.isArray(data.items)) throw new Error("registry index has no items array");
  cache = { at: Date.now(), items: data.items };
  return data.items;
}

async function getItem(name: string): Promise<Record<string, unknown>> {
  const data = (await fetchJson(`${BASE}/r/${name}.json`)) as Record<string, unknown>;
  if (!data || typeof data !== "object" || !("files" in data)) {
    throw new Error(`unknown component: ${name}`);
  }
  return data;
}

const text = (value: unknown) => ({
  content: [{ type: "text" as const, text: typeof value === "string" ? value : JSON.stringify(value, null, 2) }],
});

const server = new McpServer({ name: "8848-ui", version: SERVER_VERSION });

server.registerTool(
  "registry_info",
  {
    title: "Registry info",
    description: "About the 8848 UI component registry: homepage, install methods and namespace config.",
  },
  async () => {
    const items = await getIndex();
    return text({
      name: "8848 UI",
      homepage: BASE,
      items: items.length,
      installUrl: `${BASE}/r/{name}.json`,
      cli: `pnpm dlx shadcn@latest add ${BASE}/r/button.json`,
      namespace: { "@aayurt": `${BASE}/r/{name}.json` },
      note: "Install the `theme` item first — it provides the mountain design tokens the components reference.",
    });
  }
);

server.registerTool(
  "list_components",
  {
    title: "List components",
    description: "List every component in the 8848 UI registry with titles and descriptions.",
    inputSchema: {
      type: z
        .string()
        .optional()
        .describe("Filter by item type, e.g. registry:ui, registry:lib, registry:file"),
    },
  },
  async ({ type }) => {
    const items = await getIndex();
    const filtered = type ? items.filter((i) => i.type === type) : items;
    return text(
      filtered.map((i) => ({ name: i.name, title: i.title, description: i.description, type: i.type }))
    );
  }
);

server.registerTool(
  "search_components",
  {
    title: "Search components",
    description: "Search components by name, title or description.",
    inputSchema: { query: z.string().describe("Search text, e.g. dialog, table, toast") },
  },
  async ({ query }) => {
    const q = query.toLowerCase();
    const items = await getIndex();
    const hits = items.filter((i) =>
      [i.name, i.title, i.description].filter(Boolean).join(" ").toLowerCase().includes(q)
    );
    return text(hits.map((i) => ({ name: i.name, title: i.title, description: i.description })));
  }
);

server.registerTool(
  "get_component",
  {
    title: "Get component",
    description:
      "Full metadata for one component: install snippet, npm/registry dependencies and file list (no source — use get_component_file for that).",
    inputSchema: { name: z.string().describe("Component name, e.g. button, dialog, theme") },
  },
  async ({ name }) => {
    const item = await getItem(name);
    const files = ((item.files as RegistryFile[] | undefined) ?? []).map((f) => ({
      path: f.path,
      target: f.target,
      type: f.type,
    }));
    return text({
      name: item.name,
      title: item.title,
      description: item.description,
      install: `pnpm dlx shadcn@latest add ${BASE}/r/${name}.json`,
      dependencies: item.dependencies ?? [],
      registryDependencies: item.registryDependencies ?? [],
      files,
    });
  }
);

server.registerTool(
  "get_component_file",
  {
    title: "Get component file",
    description: "Source content of one file from a component item.",
    inputSchema: {
      name: z.string().describe("Component name, e.g. button"),
      path: z.string().describe("File path as listed by get_component, e.g. ui/button.tsx"),
    },
  },
  async ({ name, path }) => {
    const item = await getItem(name);
    const files = (item.files ?? []) as (RegistryFile & { content?: string })[];
    const match =
      files.find(
        (f) =>
          f.path === path ||
          f.target === path ||
          f.target.endsWith(`/${path}`) ||
          f.path.endsWith(`/${path}`)
      ) ?? null;
    if (!match || typeof match.content !== "string") {
      throw new Error(`file not found: ${path} in ${name}`);
    }
    return text({ name, path: match.path, target: match.target, content: match.content });
  }
);

async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
}

main().catch((error) => {
  console.error("[8848-ui-mcp]", error instanceof Error ? error.message : error);
  process.exit(1);
});

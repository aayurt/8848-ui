# @aayurt/8848-ui-mcp

Model Context Protocol server for the **8848 UI** shadcn registry. Lets AI assistants list, search and fetch components (39 items) instead of guessing APIs.

## Use

**Claude Code** (project scope):

```sh
claude mcp add --transport stdio 8848 -- node ./node_modules/@aayurt/8848-ui-mcp/dist/index.js
```

**Claude Code / Cursor / VS Code** (`.mcp.json` in your project root):

```json
{
  "mcpServers": {
    "8848-ui": {
      "command": "npx",
      "args": ["-y", "@aayurt/8848-ui-mcp"],
      "env": {
        "REGISTRY_BASE_URL": "https://8848.aayurtshrestha.com.np"
      }
    }
  }
}
```

From source (this monorepo): `pnpm --filter @aayurt/8848-ui-mcp build`, then point your client at `packages/mcp/dist/index.js`.

## Tools

| Tool | Args | Does |
|---|---|---|
| `registry_info` | — | Registry homepage, item count, install + namespace config |
| `list_components` | `type?` | All items: name, title, description |
| `search_components` | `query` | Filter by name/title/description |
| `get_component` | `name` | Metadata, install snippet, deps, file list (no source) |
| `get_component_file` | `name`, `path` | Source content of one file |

The server reads the live registry (`/r/registry.json`), cached for 5 minutes. Point `REGISTRY_BASE_URL` at a local dev server to test registry changes.

## Develop

```sh
pnpm --filter @aayurt/8848-ui-mcp build   # tsc -> dist/
pnpm --filter @aayurt/8848-ui-mcp smoke   # stdio smoke test (11 checks, hits live registry)
```

License: MIT

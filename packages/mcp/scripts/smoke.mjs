#!/usr/bin/env node
/** Smoke-test the MCP server over stdio: initialize, list tools, call each one. */
import { spawn } from "node:child_process";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const SERVER = join(dirname(fileURLToPath(import.meta.url)), "..", "dist", "index.js");

const child = spawn(process.execPath, [SERVER], { stdio: ["pipe", "pipe", "inherit"] });

let buf = "";
let pending = [];
child.stdout.on("data", (d) => {
  buf += d.toString();
  let idx;
  while ((idx = buf.indexOf("\n")) >= 0) {
    const line = buf.slice(0, idx).trim();
    buf = buf.slice(idx + 1);
    if (!line) continue;
    const msg = JSON.parse(line);
    const cb = pending.find((p) => p.id === msg.id);
    if (cb) {
      pending = pending.filter((p) => p !== cb);
      cb.resolve(msg);
    }
  }
});

let nextId = 1;
const send = (method, params) =>
  new Promise((resolve) => {
    const id = nextId++;
    pending.push({ id, resolve });
    child.stdin.write(JSON.stringify({ jsonrpc: "2.0", id, method, params }) + "\n");
  });

const assert = (cond, label, extra = "") => {
  console.log(cond ? `ok   ${label}` : `FAIL ${label} ${extra}`);
  if (!cond) process.exitCode = 1;
};

const init = await send("initialize", {
  protocolVersion: "2024-11-05",
  capabilities: {},
  clientInfo: { name: "smoke", version: "0.0.0" },
});
assert(init.result?.serverInfo?.name === "8848-ui", "initialize");

const tools = await send("tools/list", {});
const names = (tools.result?.tools ?? []).map((t) => t.name);
for (const t of ["registry_info", "list_components", "search_components", "get_component", "get_component_file"]) {
  assert(names.includes(t), `tool registered: ${t}`);
}

const call = async (name, args) => {
  const res = await send("tools/call", { name, arguments: args });
  if (res.error) throw new Error(`${name}: ${JSON.stringify(res.error)}`);
  return res.result.content.map((c) => c.text).join("\n");
};

const info = JSON.parse(await call("registry_info", {}));
assert(info.items >= 30, `registry_info items=${info.items}`);

const list = JSON.parse(await call("list_components", {}));
assert(list.some((i) => i.name === "button"), "list_components has button");

const search = JSON.parse(await call("search_components", { query: "toast" }));
assert(search.some((i) => i.name === "toast"), "search_components finds toast");

const comp = JSON.parse(await call("get_component", { name: "button" }));
assert(comp.files.length === 2 && comp.install.includes("/r/button.json"), "get_component button");

const file = JSON.parse(await call("get_component_file", { name: "button", path: "ui/button.tsx" }));
assert(file.content.includes("buttonVariants"), "get_component_file source");

child.kill();
setTimeout(() => process.exit(process.exitCode ?? 0), 200);

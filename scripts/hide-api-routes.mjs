/**
 * Temporarily hides API route files so Next.js static export succeeds.
 * API routes require a running server and are incompatible with output: "export".
 * They are restored after the build by restore-api-routes.mjs.
 */
import { rename, readdir, stat } from "node:fs/promises";
import { join } from "node:path";

const API_DIR = "src/app/api";

async function findRouteFiles(dir) {
  const files = [];
  for (const entry of await readdir(dir)) {
    const full = join(dir, entry);
    const s = await stat(full);
    if (s.isDirectory()) {
      files.push(...(await findRouteFiles(full)));
    } else if (entry === "route.ts" || entry === "route.tsx") {
      files.push(full);
    }
  }
  return files;
}

const routes = await findRouteFiles(API_DIR);
for (const f of routes) {
  await rename(f, f + ".dev-only");
  console.log(`  hidden: ${f}`);
}
console.log(`Hid ${routes.length} API route(s) for static export`);

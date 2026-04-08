/**
 * Restores API route files hidden by hide-api-routes.mjs.
 * Runs after static export build (even if build fails).
 */
import { rename, readdir, stat } from "node:fs/promises";
import { join } from "node:path";

const API_DIR = "src/app/api";

async function findHiddenFiles(dir) {
  const files = [];
  for (const entry of await readdir(dir)) {
    const full = join(dir, entry);
    const s = await stat(full);
    if (s.isDirectory()) {
      files.push(...(await findHiddenFiles(full)));
    } else if (entry.endsWith(".dev-only")) {
      files.push(full);
    }
  }
  return files;
}

const hidden = await findHiddenFiles(API_DIR);
for (const f of hidden) {
  await rename(f, f.replace(/\.dev-only$/, ""));
  console.log(`  restored: ${f.replace(/\.dev-only$/, "")}`);
}
console.log(`Restored ${hidden.length} API route(s)`);

# Covalent TinaDocs POC — setup notes

## What works (verified locally)

- **`pnpm dev`** — TinaCMS dev server (GraphQL on `http://localhost:4001/graphql`) plus Next.js on **port 3000**. After freeing port **4001** (see below), `/docs` returned **200** and the page contained **Covalent** content.
- **`http://localhost:3000/admin/index.html`** — Returned **200** (TinaCMS admin loads).
- **Theming and site title** — Set via `content/settings/config.json` (same data the **Settings** collection edits in the admin): `selectedTheme` is **`default`** (neutral monochrome), `title` / `applicationName` are **Covalent Design System**. Logos left at default paths in `content/navigation-bar/docs-navigation-bar.json` (Tina SVG placeholders).
- **Navigation** — Updated in `content/navigation-bar/docs-navigation-bar.json` with Introduction plus Components, Foundations, Patterns, and Guidelines groups matching the requested IA.
- **Seed MDX** — All requested files live under `content/docs/` with TinaDocs MDX components (`Callout`, `cardGrid`, `codeTabs`, tables, etc.).

## Issues and workarounds

### 1. Port **4001** already in use (GraphQL schema mismatch)

**Symptom:** `/docs` returns **500** with errors like `Cannot query field "navigationBar" on type "Query"` and many `Unknown type "NavigationBar"`.

**Cause:** Next.js in development always talks to **`http://localhost:4001/graphql`** (see `src/utils/get-tina-endpoint.tsx`). If another process (often another TinaCMS dev server) is already bound to **4001**, requests hit the **wrong** GraphQL schema.

**Workaround:** Stop the other Tina process using port **4001**, then restart `pnpm dev` for this project. Verify with `lsof -i :4001` (or Activity Monitor) before starting dev.

### 2. `pnpm build` / `tinacms build` without TinaCloud

**Symptom:** `tinacms build` fails with missing `NEXT_PUBLIC_TINA_CLIENT_ID` / `TINA_TOKEN`, or Next.js build fails fetching TinaCloud with schema errors.

**Cause:** Production build path expects **TinaCloud** credentials (see `README.md` and `.env.example`).

**Workaround for local codegen only:**

```bash
pnpm exec tinacms build --local --skip-cloud-checks --datalayer-port 9002
```

Full **`pnpm build`** (Next production build) still expects a working Tina data layer / cloud configuration in this template; a local-only production build was **not** fully verified here.

### 3. Pagefind / search in dev

**Symptom:** `predev` warns that Pagefind index is missing; search may not work until an index exists.

**Workaround:** After a successful Next build that outputs `.next`, run Pagefind per `package.json` (e.g. `build-local-pagefind` once credentials or local build pipeline are sorted), or rely on dev without search for content editing evaluation.

### 4. `defaultOGImage` in settings

**Change:** Set to an empty string in `content/settings/config.json` because bundled OG assets under `public/og/` were removed by the cleanup script. If the admin UI or metadata complains, point **Default OG Image** at a valid file under `public/` or restore an image.

## Editing through the admin

Saving in the admin should write MDX/JSON back to `content/` when the Tina dev server is running and the repo is writable. Confirm by editing a paragraph on a docs page, saving, and checking the corresponding `.mdx` file on disk.

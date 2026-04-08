import { tinaField } from "tinacms/dist/react";

const DEFAULT_STORYBOOK_BASE =
  "https://teradata.github.io/covalent/docs/components";

/** Single-story canvas (default). Works with story IDs like components-button--raised. */
function buildStoryEmbedSrc(base: string, storyId: string): string {
  const params = new URLSearchParams({
    id: storyId,
    viewMode: "story",
  });
  return `${base}/iframe.html?${params.toString()}`;
}

/** Docs page: preview + props; use a docs story id (typically *--docs). See https://storybook.js.org/docs/sharing/embed */
function buildDocsEmbedSrc(base: string, storyId: string): string {
  const params = new URLSearchParams({
    id: storyId,
    viewMode: "docs",
    shortcuts: "false",
    singleStory: "true",
  });
  return `${base}/iframe.html?${params.toString()}`;
}

function normalizeStorybookBase(): string | null {
  const raw = process.env.NEXT_PUBLIC_STORYBOOK_URL;
  const s = (raw ?? "").trim() || DEFAULT_STORYBOOK_BASE;
  try {
    const u = new URL(s);
    const path = u.pathname.replace(/\/$/, "");
    return `${u.origin}${path}`;
  } catch {
    return null;
  }
}

function parseHeight(height: unknown): number {
  if (typeof height === "number" && Number.isFinite(height) && height > 0) {
    return height;
  }
  const n = Number(height);
  if (Number.isFinite(n) && n > 0) {
    return n;
  }
  return 300;
}

function isDocsMode(embedMode: unknown): boolean {
  return embedMode === "docs";
}

export default function StorybookEmbed(props: {
  storyId?: string;
  height?: number;
  /** `"story"` = canvas (default). `"docs"` = docs page with props. */
  embedMode?: string;
}) {
  const { storyId, height, embedMode } = props;
  const base = normalizeStorybookBase();
  const h = parseHeight(height);
  const docs = isDocsMode(embedMode);

  if (!storyId?.trim()) {
    return (
      <div className="my-6 rounded-lg border border-dashed border-neutral-border bg-neutral-background-secondary px-4 py-6 text-center text-sm text-neutral-text-secondary">
        Add a Story ID in the Storybook Embed block (e.g.
        components-button--raised for canvas, or use a *--docs id with Embed
        type set to Docs page).
      </div>
    );
  }

  if (!base) {
    return (
      <div className="my-6 rounded-lg border border-dashed border-neutral-border bg-neutral-background-secondary px-4 py-6 text-center text-sm text-neutral-text-secondary">
        NEXT_PUBLIC_STORYBOOK_URL is not a valid URL. Set it to your Storybook
        base URL (for example {DEFAULT_STORYBOOK_BASE}).
      </div>
    );
  }

  const sid = storyId.trim();
  const src = docs
    ? buildDocsEmbedSrc(base, sid)
    : buildStoryEmbedSrc(base, sid);
  const titlePrefix = docs ? "Storybook docs" : "Storybook";

  return (
    <div className="my-6 w-full" data-tina-field={tinaField(props, "storyId")}>
      <div
        className="w-full overflow-hidden rounded-lg border border-neutral-border bg-neutral-background-secondary shadow-sm"
        style={{ height: h }}
        data-tina-field={tinaField(props, "height")}
      >
        <iframe
          className="h-full w-full border-0"
          src={src}
          title={`${titlePrefix}: ${sid}`}
          allow="fullscreen"
        />
      </div>
    </div>
  );
}

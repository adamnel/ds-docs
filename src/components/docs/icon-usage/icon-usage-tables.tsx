import type { ReactNode } from "react";

type MaterialPreview = { kind: "material"; ligature: string; fill?: 0 | 1 };
/** `handle` matches the icon handle column (maps to `cov-*` where the set differs). */
type CovalentPreview = { kind: "covalent"; handle: string };
type NonePreview = { kind: "none" };
type ProgressPreview = { kind: "progress" };

export type IconPreview =
  | MaterialPreview
  | CovalentPreview
  | NonePreview
  | ProgressPreview;

/** Product handle → Covalent `cov-*` class (see `@covalent/icons/covalent-icons.css`). */
function covalentClassForHandle(handle: string): string | null {
  const map: Record<string, string> = {
    state_cancelled: "cov-state_cancelled",
    state_caution: "cov-state_caution",
    state_changed: "cov-state_changed",
    state_error: "cov-state_negative",
    state_paused: "cov-state_paused",
    state_positive: "cov-state_positive",
  };
  return map[handle] ?? null;
}

function CovalentIconPreview({ handle }: { handle: string }) {
  const covClass = covalentClassForHandle(handle);
  if (!covClass) {
    return (
      <span
        className="text-xs text-neutral-text-secondary"
        title="No matching glyph in @covalent/icons for this handle"
      >
        —
      </span>
    );
  }
  return (
    <span
      className={`${covClass} inline-block shrink-0 text-center text-[24px] leading-none text-neutral-text`}
      style={{ width: 24, height: 24 }}
      aria-hidden
      title={
        handle === "state_error"
          ? "Covalent icon name: state_negative"
          : undefined
      }
    />
  );
}

function MaterialSymbolPreview({
  ligature,
  fill = 0,
}: {
  ligature: string;
  fill?: 0 | 1;
}) {
  return (
    <span
      className="material-symbols-outlined inline-block shrink-0 select-none text-center text-neutral-text"
      style={{
        fontSize: 24,
        width: 24,
        height: 24,
        lineHeight: "24px",
        fontVariationSettings: `'FILL' ${fill}, 'wght' 400, 'GRAD' 0, 'opsz' 24`,
      }}
      aria-hidden
    >
      {ligature}
    </span>
  );
}

function PreviewCell({ preview }: { preview: IconPreview }) {
  if (preview.kind === "material") {
    return (
      <MaterialSymbolPreview
        ligature={preview.ligature}
        fill={preview.fill ?? 0}
      />
    );
  }
  if (preview.kind === "covalent") {
    return <CovalentIconPreview handle={preview.handle} />;
  }
  if (preview.kind === "progress") {
    return (
      <span
        className="text-xs text-neutral-text-secondary"
        title="Use cv-circular-progress component"
      >
        —
      </span>
    );
  }
  return <span className="text-neutral-text-secondary">—</span>;
}

const tableWrap = "my-6 overflow-x-auto rounded-lg shadow-md";
const th =
  "px-4 pt-2 text-left font-tuner bg-neutral-background-secondary border-b-[0.5px] border-neutral-border";
const td =
  "px-4 py-2 border-b border-neutral-border bg-neutral-background-secondary/50";
const tdFirst = "max-w-xs break-words";

function FunctionsTable() {
  const rows: {
    useCase: string;
    preview: IconPreview;
    handle: string;
    set: string;
  }[] = [
    {
      useCase: "Add",
      preview: { kind: "material", ligature: "add" },
      handle: "add",
      set: "Material Symbols",
    },
    {
      useCase: "Close",
      preview: { kind: "material", ligature: "close" },
      handle: "close",
      set: "Material Symbols",
    },
    {
      useCase: "Configure",
      preview: { kind: "material", ligature: "settings", fill: 0 },
      handle: "settings_outlined",
      set: "Material Symbols",
    },
    {
      useCase: "Create",
      preview: { kind: "material", ligature: "add" },
      handle: "add",
      set: "Material Symbols",
    },
    {
      useCase: "Delete",
      preview: { kind: "material", ligature: "delete", fill: 0 },
      handle: "delete_outlined",
      set: "Material Symbols",
    },
    {
      useCase: "Favorite item",
      preview: { kind: "material", ligature: "favorite", fill: 0 },
      handle: "favorite_outlined",
      set: "Material Symbols",
    },
    {
      useCase: "Favorited item",
      preview: { kind: "material", ligature: "favorite", fill: 1 },
      handle: "favorite",
      set: "Material Symbols",
    },
    {
      useCase: "Filter",
      preview: { kind: "material", ligature: "filter_list" },
      handle: "filter_list",
      set: "Material Symbols",
    },
    {
      useCase: "Help",
      preview: { kind: "material", ligature: "help", fill: 0 },
      handle: "help_outlined",
      set: "Material Symbols",
    },
    {
      useCase: "Info",
      preview: { kind: "material", ligature: "info", fill: 0 },
      handle: "info_outlined",
      set: "Material Symbols",
    },
    {
      useCase: "Notifications (active)",
      preview: { kind: "material", ligature: "notifications" },
      handle: "notifications",
      set: "Material Symbols",
    },
    {
      useCase: "Notifications (none)",
      preview: { kind: "material", ligature: "notifications_off" },
      handle: "notifications_none",
      set: "Material Symbols",
    },
    {
      useCase: "Open in new tab/window",
      preview: { kind: "material", ligature: "open_in_new" },
      handle: "open_in_new",
      set: "Material Symbols",
    },
    {
      useCase: "Save",
      preview: { kind: "none" },
      handle: "Use a text button",
      set: "—",
    },
    {
      useCase: "Search",
      preview: { kind: "material", ligature: "search" },
      handle: "search",
      set: "Material Symbols",
    },
    {
      useCase: "Settings (in-page elements like charts)",
      preview: { kind: "material", ligature: "tune" },
      handle: "tune",
      set: "Material Symbols",
    },
    {
      useCase: "Settings (section)",
      preview: { kind: "material", ligature: "settings", fill: 0 },
      handle: "settings_outlined",
      set: "Material Symbols",
    },
    {
      useCase: "Star item",
      preview: { kind: "material", ligature: "star", fill: 0 },
      handle: "star_outlined",
      set: "Material Symbols",
    },
    {
      useCase: "Starred item",
      preview: { kind: "material", ligature: "star", fill: 1 },
      handle: "star",
      set: "Material Symbols",
    },
  ];

  return (
    <div className={tableWrap}>
      <table className="w-full table-auto">
        <thead>
          <tr>
            <th className={th}>Use case</th>
            <th className={`${th} w-14`}>Preview</th>
            <th className={th}>Icon handle</th>
            <th className={th}>Icon set</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={`${row.useCase}-${row.handle}`}>
              <td className={`${td} ${tdFirst}`}>{row.useCase}</td>
              <td className={`${td} w-14 align-middle`}>
                <div className="flex h-9 w-9 items-center justify-center">
                  <PreviewCell preview={row.preview} />
                </div>
              </td>
              <td className={td}>
                <code className="rounded border border-neutral-border bg-neutral-surface px-1 py-0.5 text-brand-primary">
                  {row.handle}
                </code>
              </td>
              <td className={td}>{row.set}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function StatesTable() {
  const rows: {
    useCase: string;
    preview: IconPreview;
    handle: string;
    set: string;
    color: string;
  }[] = [
    {
      useCase: "Cancelled",
      preview: { kind: "covalent", handle: "state_cancelled" },
      handle: "state_cancelled",
      set: "Covalent Icons",
      color: "on-surface-38",
    },
    {
      useCase: "Caution/warning",
      preview: { kind: "covalent", handle: "state_caution" },
      handle: "state_caution",
      set: "Covalent Icons",
      color: "caution",
    },
    {
      useCase: "Changed",
      preview: { kind: "covalent", handle: "state_changed" },
      handle: "state_changed",
      set: "Covalent Icons",
      color: "on-surface-variant",
    },
    {
      useCase: "Error",
      preview: { kind: "covalent", handle: "state_error" },
      handle: "state_error",
      set: "Covalent Icons",
      color: "negative",
    },
    {
      useCase: "Paused",
      preview: { kind: "covalent", handle: "state_paused" },
      handle: "state_paused",
      set: "Covalent Icons",
      color: "on-surface-variant",
    },
    {
      useCase: "Pending/waiting",
      preview: { kind: "covalent", handle: "state_pending" },
      handle: "state_pending",
      set: "Covalent Icons",
      color: "on-surface-variant",
    },
    {
      useCase: "Running",
      preview: { kind: "progress" },
      handle: "Use cv-circular-progress",
      set: "—",
      color: "primary",
    },
    {
      useCase: "Success",
      preview: { kind: "covalent", handle: "state_positive" },
      handle: "state_positive",
      set: "Covalent Icons",
      color: "positive",
    },
  ];

  return (
    <div className={tableWrap}>
      <table className="w-full table-auto">
        <thead>
          <tr>
            <th className={th}>Use case</th>
            <th className={`${th} w-14`}>Preview</th>
            <th className={th}>Icon handle</th>
            <th className={th}>Icon set</th>
            <th className={th}>Color</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={`${row.useCase}-${row.handle}`}>
              <td className={`${td} ${tdFirst}`}>{row.useCase}</td>
              <td className={`${td} w-14 align-middle`}>
                <div className="flex h-9 w-9 items-center justify-center">
                  <PreviewCell preview={row.preview} />
                </div>
              </td>
              <td className={td}>
                <code className="rounded border border-neutral-border bg-neutral-surface px-1 py-0.5 text-brand-primary">
                  {row.handle}
                </code>
              </td>
              <td className={td}>{row.set}</td>
              <td className={td}>
                <code className="text-sm text-neutral-text">{row.color}</code>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function VisualizationsTable() {
  const rows: {
    useCase: string;
    preview: IconPreview;
    handle: string;
    set: string;
  }[] = [
    {
      useCase: "Visualization settings",
      preview: { kind: "material", ligature: "tune" },
      handle: "tune",
      set: "Material Symbols",
    },
    {
      useCase: "Bar chart",
      preview: { kind: "material", ligature: "bar_chart", fill: 0 },
      handle: "bar_chart_outlined",
      set: "Material Symbols",
    },
    {
      useCase: "Bubble chart",
      preview: { kind: "material", ligature: "bubble_chart", fill: 0 },
      handle: "bubble_chart_outlined",
      set: "Material Symbols",
    },
    {
      useCase: "Card view",
      preview: { kind: "material", ligature: "view_module", fill: 0 },
      handle: "view_module_outlined",
      set: "Material Symbols",
    },
    {
      useCase: "Line chart",
      preview: { kind: "material", ligature: "show_chart", fill: 0 },
      handle: "show_chart_outlined",
      set: "Material Symbols",
    },
    {
      useCase: "List or table",
      preview: { kind: "material", ligature: "view_list", fill: 0 },
      handle: "view_list_outlined",
      set: "Material Symbols",
    },
    {
      useCase: "Text",
      preview: { kind: "material", ligature: "short_text", fill: 0 },
      handle: "short_text_outlined",
      set: "Material Symbols",
    },
  ];

  return (
    <div className={tableWrap}>
      <table className="w-full table-auto">
        <thead>
          <tr>
            <th className={th}>Use case</th>
            <th className={`${th} w-14`}>Preview</th>
            <th className={th}>Icon handle</th>
            <th className={th}>Icon set</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={`${row.useCase}-${row.handle}`}>
              <td className={`${td} ${tdFirst}`}>{row.useCase}</td>
              <td className={`${td} w-14 align-middle`}>
                <div className="flex h-9 w-9 items-center justify-center">
                  <PreviewCell preview={row.preview} />
                </div>
              </td>
              <td className={td}>
                <code className="rounded border border-neutral-border bg-neutral-surface px-1 py-0.5 text-brand-primary">
                  {row.handle}
                </code>
              </td>
              <td className={td}>{row.set}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export type IconUsageTablesVariant = "functions" | "states" | "visualizations";

export function IconUsageTables({
  variant,
}: {
  variant: IconUsageTablesVariant;
}): ReactNode {
  if (variant === "functions") {
    return <FunctionsTable />;
  }
  if (variant === "states") {
    return <StatesTable />;
  }
  return <VisualizationsTable />;
}

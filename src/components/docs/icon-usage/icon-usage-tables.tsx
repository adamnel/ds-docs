import type { IconPreview, IconRow } from "./icon-usage-data";
import { COVALENT_CLASS_MAP, iconTableConfigs } from "./icon-usage-data";

const tableWrap = "my-6 overflow-x-auto rounded-lg shadow-md";
const th =
  "px-4 pt-2 text-left font-tuner bg-neutral-background-secondary border-b-[0.5px] border-neutral-border";
const td =
  "px-4 py-2 border-b border-neutral-border bg-neutral-background-secondary/50";

function PreviewCell({ preview }: { preview: IconPreview }) {
  if (preview.kind === "material") {
    return (
      <span
        className="material-symbols-outlined inline-block shrink-0 select-none text-center text-neutral-text"
        style={{
          fontSize: 24,
          width: 24,
          height: 24,
          lineHeight: "24px",
          fontVariationSettings: `'FILL' ${preview.fill ?? 0}, 'wght' 400, 'GRAD' 0, 'opsz' 24`,
        }}
        aria-hidden
      >
        {preview.ligature}
      </span>
    );
  }
  if (preview.kind === "covalent") {
    const covClass = COVALENT_CLASS_MAP[preview.handle];
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
      />
    );
  }
  return <span className="text-neutral-text-secondary">—</span>;
}

function CellValue({ row, columnKey }: { row: IconRow; columnKey: string }) {
  if (columnKey === "preview") {
    return (
      <div className="flex h-9 w-9 items-center justify-center">
        <PreviewCell preview={row.preview} />
      </div>
    );
  }
  if (columnKey === "handle") {
    return (
      <code className="rounded border border-neutral-border bg-neutral-surface px-1 py-0.5 text-brand-primary">
        {row.handle}
      </code>
    );
  }
  if (columnKey === "color") {
    return <code className="text-sm text-neutral-text">{row.color}</code>;
  }
  return <>{row[columnKey as keyof IconRow]}</>;
}

export type IconUsageTablesVariant = "functions" | "states" | "visualizations";

export function IconUsageTables({
  variant,
}: {
  variant: IconUsageTablesVariant;
}) {
  const config = iconTableConfigs[variant];
  if (!config) return null;

  return (
    <div className={tableWrap}>
      <table className="w-full table-auto">
        <thead>
          <tr>
            {config.columns.map((col) => (
              <th
                key={col.key}
                className={`${th}${col.className ? ` ${col.className}` : ""}`}
              >
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {config.rows.map((row) => (
            <tr key={`${row.useCase}-${row.handle}`}>
              {config.columns.map((col, i) => (
                <td
                  key={col.key}
                  className={`${td}${col.className ? ` ${col.className} align-middle` : ""}${i === 0 ? " max-w-xs break-words" : ""}`}
                >
                  <CellValue row={row} columnKey={col.key} />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

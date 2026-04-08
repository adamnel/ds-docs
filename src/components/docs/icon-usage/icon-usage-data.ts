type MaterialPreview = { kind: "material"; ligature: string; fill?: 0 | 1 };
type CovalentPreview = { kind: "covalent"; handle: string };
type NonePreview = { kind: "none" };
type ProgressPreview = { kind: "progress" };

export type IconPreview =
  | MaterialPreview
  | CovalentPreview
  | NonePreview
  | ProgressPreview;

export type IconRow = {
  useCase: string;
  preview: IconPreview;
  handle: string;
  set: string;
  color?: string;
};

export type IconTableConfig = {
  columns: { key: string; label: string; className?: string }[];
  rows: IconRow[];
};

export const COVALENT_CLASS_MAP: Record<string, string> = {
  state_cancelled: "cov-state_cancelled",
  state_caution: "cov-state_caution",
  state_changed: "cov-state_changed",
  state_error: "cov-state_negative",
  state_paused: "cov-state_paused",
  state_positive: "cov-state_positive",
};

const functionsRows: IconRow[] = [
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

const statesRows: IconRow[] = [
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

const visualizationsRows: IconRow[] = [
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

const baseColumns = [
  { key: "useCase", label: "Use case" },
  { key: "preview", label: "Preview", className: "w-14" },
  { key: "handle", label: "Icon handle" },
  { key: "set", label: "Icon set" },
];

export const iconTableConfigs: Record<string, IconTableConfig> = {
  functions: { columns: baseColumns, rows: functionsRows },
  states: {
    columns: [...baseColumns, { key: "color", label: "Color" }],
    rows: statesRows,
  },
  visualizations: { columns: baseColumns, rows: visualizationsRows },
};

export interface ApiEndpoint {
  method: string;
  path: string;
  summary: string;
  operationId?: string;
  schema: string;
}

export interface ApiGroup {
  tag: string;
  endpoints: ApiEndpoint[];
}

export interface ApiGroupData {
  schema: string;
  tag: string;
  endpoints: ApiEndpoint[] | string[];
}

export interface NavTitleProps {
  children: React.ReactNode;
  level?: number;
  selected?: boolean;
  childSelected?: boolean;
  onClick?: () => void;
  [key: string]: any;
}

export interface DocsNavProps {
  navItems: any[];
  /** Links shown above supermenu groups (e.g. Home) */
  sidebarTopLinks?: { label?: string; slug?: string }[];
  onNavigate?: () => void;
}

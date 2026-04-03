import siteConfig from "@/content/siteConfig.json";
import { normalizeHrefPath } from "@/utils/get-url";
import { titleCase } from "title-case";

/**
 * A single navigation item
 */
export interface NavItem {
  _template?: string;
  slug?: string;
  title?: string;
  items?: NavItem[];
  [key: string]: unknown;
}

/**
 * A group of navigation items (i.e., supermenu)
 */
export interface SupermenuGroup {
  title?: string;
  items?: NavItem[];
  [key: string]: unknown;
}

/** Link rendered above grouped nav (not inside a supermenu group) */
export interface SidebarTopLink {
  label?: string;
  slug?: string;
}

/**
 * A tab in the navigation bar
 */
export interface Tab {
  title?: string | null;
  __typename?: string | null;
  sidebarTopLinks?: SidebarTopLink[] | null;
  supermenuGroup?: SupermenuGroup[] | null;
}

/**
 * Raw structure of navigation data returned by TinaCMS
 */
export interface NavigationBarData {
  navigationBar: {
    lightModeLogo?: string | null | undefined;
    darkModeLogo?: string | null | undefined;
    tabs: Tab[];
    ctaButtons?:
      | {
          button1?:
            | {
                label?: string | null | undefined;
                link?: string | null | undefined;
                variant?: string | null | undefined;
              }
            | null
            | undefined;
          button2?:
            | {
                label?: string | null | undefined;
                link?: string | null | undefined;
                variant?: string | null | undefined;
              }
            | null
            | undefined;
        }
      | null
      | undefined;
  };
}

/**
 * Final formatted structure returned by our utility
 */
export interface FormattedNavigation {
  lightModeLogo?: string | null | undefined;
  darkModeLogo?: string | null | undefined;
  ctaButtons?:
    | {
        button1?:
          | {
              label?: string | null | undefined;
              link?: string | null | undefined;
              variant?: string | null | undefined;
            }
          | null
          | undefined;
        button2?:
          | {
              label?: string | null | undefined;
              link?: string | null | undefined;
              variant?: string | null | undefined;
            }
          | null
          | undefined;
      }
    | null
    | undefined;
  data: {
    title: string;
    __typename: string;
    items: SupermenuGroup[];
    sidebarTopLinks?: SidebarTopLink[];
  }[];
  sha: string;
  preview: boolean;
}

/**
 * Transforms document references into proper URL slugs
 *
 * @param navItems - Array of navigation items to process
 * @returns Processed navigation items with transformed slugs
 */
const transformReferencesToSlugs = (navItems: NavItem[]): NavItem[] => {
  navItems.forEach((item, index, array) => {
    if (item._template) {
      if (item._template === "items") {
        array[index].items = transformReferencesToSlugs(
          cloneNavItems(item.items || [])
        );
      } else {
        const raw = array[index].slug;
        const str =
          typeof raw === "string"
            ? raw
            : raw && typeof raw === "object" && "id" in raw
              ? String((raw as { id?: string }).id ?? "")
              : "";
        array[index].slug =
          str === `content${siteConfig.docsHomepage}.mdx`
            ? "/docs"
            : str.replace(/^content\/|\.mdx$/g, "/") || "";
        const resolved = array[index].slug;
        if (
          typeof resolved === "string" &&
          resolved &&
          !(array[index] as NavItem).title
        ) {
          (array[index] as NavItem).title =
            resolved === "/docs" ? "Home" : titleFromResolvedSlug(resolved);
        }
      }
    }
  });
  return navItems;
};

/** Derive a readable label from a resolved docs path when JSON has no `title`. */
function titleFromResolvedSlug(slug: string): string {
  const trimmed = slug.replace(/\/$/, "");
  const last = trimmed.split("/").filter(Boolean).pop() ?? "";
  const base = last.replace(/\.mdx$/i, "");
  if (!base) return "";
  return titleCase(base.replace(/-/g, " "));
}

/** Avoid mutating shared JSON module / Tina cache — transform runs on a fresh copy. */
function cloneNavItems(items: NavItem[]): NavItem[] {
  return JSON.parse(JSON.stringify(items)) as NavItem[];
}

function normalizeSidebarTopLink(link: {
  label?: string | null;
  slug?: unknown;
}): SidebarTopLink {
  const raw = link.slug;
  if (raw == null || raw === "") {
    return { label: link.label ?? undefined, slug: "" };
  }
  return {
    label: link.label ?? undefined,
    slug: normalizeHrefPath(raw),
  };
}

/** First page path in a nav subtree (formatted tab content). */
function firstPageSlugInNavItems(
  navItems: NavItem[] | undefined
): string | undefined {
  if (!navItems?.length) return undefined;
  for (const item of navItems) {
    if (item._template === "items" && item.items?.length) {
      const nested = firstPageSlugInNavItems(item.items);
      if (nested) return nested;
    }
    if (item.slug != null && item.slug !== "") {
      return typeof item.slug === "string"
        ? item.slug
        : normalizeHrefPath(item.slug);
    }
  }
  return undefined;
}

/**
 * Landing URL for a docs bar tab (first top link, else first page in first group).
 * Used when switching tabs so the route matches the active section.
 */
export function getFirstPathForDocsTab(tabContent: {
  sidebarTopLinks?: SidebarTopLink[];
  items?: SupermenuGroup[];
}): string | null {
  const firstTop = tabContent.sidebarTopLinks?.[0];
  if (firstTop?.slug) {
    const s = firstTop.slug;
    if (typeof s === "string" && s.startsWith("/")) return s;
    const p = normalizeHrefPath(s);
    return p || null;
  }
  for (const group of tabContent.items || []) {
    const href = firstPageSlugInNavItems(group.items);
    if (href) return href;
  }
  return null;
}

/**
 * Processes navigation data into a standardized structure
 *
 * @param navigationData - Raw navigation data from Tina CMS
 * @param preview - Whether in preview mode
 * @returns Formatted navigation data with proper URL structures
 */
export const formatNavigationData = (
  navigationData: NavigationBarData,
  preview = false
): FormattedNavigation => {
  const tabs = navigationData.navigationBar.tabs || [];
  const lightModeLogo = navigationData.navigationBar?.lightModeLogo || "";
  const darkModeLogo = navigationData.navigationBar?.darkModeLogo || "";
  const ctaButtons = navigationData.navigationBar?.ctaButtons;

  const tabsData = tabs.map((tab) => {
    const groups = (tab.supermenuGroup || []).map((group) => ({
      ...group,
      items: transformReferencesToSlugs(cloneNavItems(group.items || [])),
    }));

    const sidebarTopLinks = (
      JSON.parse(JSON.stringify(tab.sidebarTopLinks || [])) as SidebarTopLink[]
    )
      .map((link) => normalizeSidebarTopLink(link))
      .filter((link) => link.slug && link.slug !== "/");

    return {
      title: tab.title || "",
      __typename: tab.__typename || "",
      items: groups,
      sidebarTopLinks,
      lightModeLogo: lightModeLogo,
      darkModeLogo: darkModeLogo,
    };
  });

  return {
    data: tabsData,
    sha: "",
    preview,
    ctaButtons,
    lightModeLogo,
    darkModeLogo,
  };
};

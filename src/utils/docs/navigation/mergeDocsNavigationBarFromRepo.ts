import docsNavigationBar from "@/content/navigation-bar/docs-navigation-bar.json";
import type { NavigationBarData } from "./documentNavigation";

function cloneRepoNavigationBar(): Record<string, unknown> {
  return JSON.parse(JSON.stringify(docsNavigationBar)) as Record<
    string,
    unknown
  >;
}

/**
 * Tina's client (useTina) often replaces server data with a GraphQL payload that
 * drops nested `supermenuGroup` trees while keeping tab titles. Merge the repo JSON
 * so nav structure always matches source control, while preserving Tina document ids.
 *
 * Always deep-clones the file JSON so we never share references with Tina's mutable
 * `data` object (which would empty nested `items` after hydration).
 */
export function mergeDocsNavigationBarFromRepo(
  data: Record<string, unknown> | undefined
): NavigationBarData {
  const raw = data as NavigationBarData | undefined;
  const nb = raw?.navigationBar as
    | (Record<string, unknown> & {
        _sys?: unknown;
        id?: unknown;
        __typename?: unknown;
      })
    | undefined;

  const clonedNav = cloneRepoNavigationBar();

  if (!raw) {
    return {
      navigationBar: clonedNav,
    } as NavigationBarData;
  }

  if (!nb) {
    return {
      ...raw,
      navigationBar: clonedNav,
    } as NavigationBarData;
  }

  return {
    ...raw,
    navigationBar: {
      ...clonedNav,
      _sys: nb._sys,
      id: nb.id,
      __typename: nb.__typename,
    },
  } as NavigationBarData;
}

import {
  hasMatchingApiEndpoint,
  hasNestedSlug,
} from "@/components/navigation/navigation-items/utils";
import { matchActualTarget } from "@/utils/docs/urls";
import { getUrl } from "@/utils/get-url";

interface Tab {
  label: string;
  content: {
    items: any[];
    __typename?: string;
    sidebarTopLinks?: { slug?: unknown }[];
  };
}

export const findTabWithPath = (tabs: Tab[], path: string) => {
  for (const tab of tabs) {
    const top = tab.content?.sidebarTopLinks;
    if (Array.isArray(top)) {
      for (const link of top) {
        if (link?.slug != null && matchActualTarget(getUrl(link.slug), path)) {
          return tab.label;
        }
      }
    }
    if (tab.content?.items && hasNestedSlug(tab.content?.items, path)) {
      return tab.label;
    }

    if (
      tab.content?.__typename === "NavigationBarTabsApiTab" &&
      hasMatchingApiEndpoint(tab.content?.items, path)
    ) {
      return tab.label;
    }
  }
  return tabs[0]?.label;
};

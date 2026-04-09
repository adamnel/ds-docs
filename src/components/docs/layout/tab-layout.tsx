"use client";

import { formatNavigationData } from "@/src/utils/docs/navigation/documentNavigation";
import type {
  FormattedNavigation,
  NavigationBarData,
  SupermenuGroup,
} from "@/src/utils/docs/navigation/documentNavigation";
import { stripBasePath } from "@/utils/base-path";
import * as Tabs from "@radix-ui/react-tabs";
import { usePathname } from "next/navigation";
import React from "react";
import { Body } from "./body";
import { NavigationProvider } from "./navigation-context";
import { Sidebar } from "./sidebar";
import { TopNav } from "./top-nav";
import { findTabWithPath } from "./utils";

type TabItem = {
  label: string;
  content: { title: string; __typename: string; items: SupermenuGroup[] };
  __typename: string;
  overviewSlug?: string;
};

export const TabsLayout = ({
  props: { children },
  tinaProps,
}: {
  props: {
    children: React.ReactNode;
  };
  tinaProps: { data: Record<string, unknown> };
}) => {
  const navigationDocsData = React.useMemo(
    () =>
      formatNavigationData(
        tinaProps.data as unknown as NavigationBarData,
        false
      ),
    [tinaProps.data]
  );
  const tabs = React.useMemo(
    () =>
      navigationDocsData.data.map((tab) => ({
        label: tab.title,
        content: tab,
        __typename: tab.__typename,
        overviewSlug: tab.overviewSlug,
      })),
    [navigationDocsData]
  );
  const [selectedTab, setSelectedTab] = React.useState<string>(
    tabs[0]?.label || ""
  );
  const pathname = usePathname();
  const currentPath = stripBasePath(pathname);
  const showSidebar = currentPath !== "/docs" && currentPath !== "/docs/";
  const objectOfSelectedTab =
    tabs.find((tab) => tab.label === selectedTab) || tabs[0];

  React.useEffect(() => {
    // Find the tab that contains the current path
    if (!tabs.length || !pathname) return;

    const initialTab = findTabWithPath(tabs, stripBasePath(pathname));
    setSelectedTab(initialTab);
    // Dispatch initial tab change with index
    const initialIndex = tabs.findIndex((tab) => tab.label === initialTab);
    window.dispatchEvent(
      new CustomEvent("tabChange", {
        detail: { value: initialIndex.toString() },
      })
    );
  }, [tabs, pathname]);

  const handleTabChange = (value: string) => {
    setSelectedTab(value);
    const newIndex = tabs.findIndex((tab) => tab.label === value);
    window.dispatchEvent(
      new CustomEvent("tabChange", { detail: { value: newIndex.toString() } })
    );
  };

  return (
    <Tabs.Root
      value={selectedTab || tabs[0]?.label || ""}
      onValueChange={handleTabChange}
      className="relative flex flex-col w-full"
    >
      <div className={showSidebar ? "" : "absolute top-0 left-0 right-0 z-10 dark"}>
        <TopNav tabs={tabs} navigationDocsData={navigationDocsData} isHome={!showSidebar} />
      </div>
      <NavigationProvider navigationData={navigationDocsData}>
        <div className={`w-full flex flex-col md:flex-row ${showSidebar ? "max-w-[2560px] mx-auto gap-4 md:p-4" : ""}`}>
          {showSidebar ? <Sidebar tabs={tabs} /> : null}
          <main className="flex-1">
            <Body
              navigationDocsData={objectOfSelectedTab?.content}
              children={children}
            />
          </main>
        </div>
      </NavigationProvider>
    </Tabs.Root>
  );
};

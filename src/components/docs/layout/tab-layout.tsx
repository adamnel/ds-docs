"use client";

import type {
  FormattedNavigation,
  SupermenuGroup,
} from "@/src/utils/docs/navigation/documentNavigation";
import {
  formatNavigationData,
  getFirstPathForDocsTab,
  mergeDocsNavigationBarFromRepo,
} from "@/utils/docs/navigation";
import * as Tabs from "@radix-ui/react-tabs";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { Body } from "./body";
import { NavigationProvider } from "./navigation-context";
import { Sidebar } from "./sidebar";
import { TopNav } from "./top-nav";
import { findTabWithPath } from "./utils";

type TabItem = {
  label: string;
  content: {
    title: string;
    __typename: string;
    items: SupermenuGroup[];
    sidebarTopLinks?: { label?: string; slug?: string }[];
  };
  __typename: string;
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
  const [navigationDocsData, setNavigationDocsData] = React.useState<
    FormattedNavigation | undefined
  >();
  const [tabs, setTabs] = React.useState<TabItem[]>([]);
  const [selectedTab, setSelectedTab] = React.useState<string | undefined>();
  const [objectOfSelectedTab, setObjectOfSelectedTab] = React.useState<
    TabItem | undefined
  >();
  const pathname = usePathname();
  const router = useRouter();

  React.useEffect(() => {
    const merged = mergeDocsNavigationBarFromRepo(tinaProps.data);
    const formattedNavData = formatNavigationData(merged, false);
    setNavigationDocsData(formattedNavData);
    const tabs = formattedNavData.data.map((tab) => ({
      label: tab.title,
      content: tab,
      __typename: tab.__typename,
    }));
    setTabs(tabs);
    setSelectedTab(tabs[0]?.label);
    setObjectOfSelectedTab(tabs[0]);
  }, [tinaProps.data]);

  React.useEffect(() => {
    // Find the tab that contains the current path
    if (!tabs.length || !pathname) return;

    const initialTab = findTabWithPath(tabs, pathname);
    setSelectedTab(initialTab);
  }, [tabs, pathname]);

  const handleTabChange = (value: string) => {
    const tab = tabs.find((t) => t.label === value);
    setSelectedTab(value);
    setObjectOfSelectedTab(tab);
    if (tab?.content && tab.content.__typename !== "NavigationBarTabsApiTab") {
      const target = getFirstPathForDocsTab(tab.content);
      if (target) {
        router.push(target);
      }
    }
  };

  return (
    <Tabs.Root
      value={selectedTab}
      onValueChange={handleTabChange}
      className="flex flex-col w-full"
    >
      <TopNav tabs={tabs} navigationDocsData={navigationDocsData} />
      <NavigationProvider navigationData={navigationDocsData}>
        <div className="w-full flex flex-col md:flex-row gap-4 md:p-4 max-w-[2560px] mx-auto">
          <Sidebar tabs={tabs} />
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

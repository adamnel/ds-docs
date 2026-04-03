"use client";

import * as Tabs from "@radix-ui/react-tabs";
import { NavigationSideBar } from "../../navigation/navigation-sidebar";

/**
 * Only Radix Tabs.Content should control which panel is visible. A previous
 * horizontal translateX() carousel fought Radix: inactive content was hidden
 * while the carousel still showed the wrong column — empty sidebars or titles only.
 */
export const Sidebar = ({
  tabs,
}: {
  tabs: { label: string; content: any }[];
}) => {
  return (
    <div className="border border-neutral-border/50 sticky hidden brand-glass-gradient lg:block mr-4 min-h-[calc(100vh-8rem)] h-fit w-80 p-4 ml-8 top-4 rounded-2xl dark:border dark:border-neutral-border-subtle/30 shadow-xl flex-shrink-0">
      <div className="relative w-full min-w-0 overflow-x-hidden">
        {tabs.map((tab) => (
          <Tabs.Content
            key={tab.label}
            value={tab.label}
            className="min-w-0 w-full outline-none data-[state=inactive]:hidden"
          >
            <NavigationSideBar tableOfContents={tab?.content} />
          </Tabs.Content>
        ))}
      </div>
    </div>
  );
};

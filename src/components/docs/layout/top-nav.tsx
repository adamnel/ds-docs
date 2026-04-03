import { MobileNavSidebar } from "@/components/navigation/mobile-navigation-sidebar";
import * as Tabs from "@radix-ui/react-tabs";
import { Search } from "../../search-docs/search";
import LightDarkSwitch from "../../ui/light-dark-switch";
import { NavbarLogo } from "./navbar-logo";

export const TopNav = ({
  tabs,
  navigationDocsData,
}: {
  tabs: { label: string; content: any }[];
  navigationDocsData: any;
}) => {
  return (
    <div className="border border-neutral-border/50 mb-2 md:mb-4 w-full lg:px-8 py-1 dark:bg-glass-gradient-end dark:border-b dark:border-neutral-border-subtle/60 shadow-md/5">
      <div className="max-w-[2560px] mx-auto flex items-center justify-between gap-2 lg:py-0 py-2 min-w-0">
        <div className="flex min-w-0 items-center flex-1 lg:flex-initial gap-1">
          <NavbarLogo navigationDocsData={[navigationDocsData]} />
          {tabs.length > 0 ? (
            <Tabs.List
              className="flex shrink-0 min-w-0 max-w-[min(100%,56rem)] overflow-x-auto scrollbar-thin gap-0.5 py-0.5 pl-1 border-l border-neutral-border/50 dark:border-neutral-border-subtle/40 ml-1"
              aria-label="Documentation sections"
            >
              {tabs.map((tab) => (
                <Tabs.Trigger
                  key={tab.label}
                  value={tab.label}
                  className="shrink-0 px-2.5 py-1.5 text-sm relative text-brand-primary-contrast focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary/30 rounded-md cursor-pointer font-semibold data-[state=active]:text-brand-primary-text data-[state=active]:bg-brand-primary/10 whitespace-nowrap"
                >
                  {tab.label || "Untitled Tab"}
                </Tabs.Trigger>
              ))}
            </Tabs.List>
          ) : null}
        </div>
        <div className="flex shrink-0 justify-center max-w-[min(100%,20rem)] lg:max-w-[min(100%,24rem)] w-full lg:w-auto">
          <Search />
        </div>
        <div className="flex items-center gap-4 shrink-0">
          <MobileNavSidebar tocData={tabs} />
          <div className="w-full hidden lg:flex justify-end">
            <LightDarkSwitch />
          </div>
        </div>
      </div>
    </div>
  );
};

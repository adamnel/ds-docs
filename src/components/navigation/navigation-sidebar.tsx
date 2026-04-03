"use client";

import {
  ApiNavigationItems,
  DocsNavigationItems,
} from "./navigation-items/index";

export const NavigationSideBar = ({
  tableOfContents,
}: {
  tableOfContents: any;
}) => {
  const typename = tableOfContents.__typename ?? "";
  const isApiTab = typename === "NavigationBarTabsApiTab";

  return (
    <div className="overflow-y-auto overflow-x-hidden">
      {isApiTab ? (
        <ApiNavigationItems
          navItems={tableOfContents.items}
          __typename={tableOfContents.__typename}
        />
      ) : (
        <DocsNavigationItems
          navItems={tableOfContents.items}
          sidebarTopLinks={tableOfContents.sidebarTopLinks}
          __typename={tableOfContents.__typename}
        />
      )}
    </div>
  );
};

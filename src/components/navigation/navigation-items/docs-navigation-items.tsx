import { DynamicLink } from "@/components/ui/dynamic-link";
import { getUrl } from "@/utils/get-url";
import { usePathname } from "next/navigation";
import React from "react";
import { NavLevel } from "./nav-level";
import { NavTitle } from "./nav-title";
import type { DocsNavProps } from "./types";
import { getDocsNavTree } from "./utils";

export const DocsNavigationItems: React.FC<
  DocsNavProps & { __typename: string }
> = ({ navItems, sidebarTopLinks, __typename, onNavigate }) => {
  const navListElem = React.useRef(null);
  const pathname = usePathname();
  const path = pathname || "";
  const { items: navTree, startLevel } = getDocsNavTree(navItems || []);

  return (
    <div
      className="overflow-x-hidden px-0 pb-6 -mr-[1px] scrollbar-thin lg:pb-8"
      ref={navListElem}
    >
      {sidebarTopLinks && sidebarTopLinks.length > 0 && (
        <div className="pb-3 mb-1 border-b border-neutral-border/40 dark:border-neutral-border-subtle/30">
          {sidebarTopLinks.map((link) => {
            const href = getUrl(link.slug);
            const slug = href.replace(/\/$/, "");
            const selected =
              path.split("#")[0] === slug ||
              (slug === "/docs" && path === "/docs/");
            return (
              <DynamicLink
                key={`top-${slug}`}
                href={href}
                passHref
                onClick={onNavigate}
                isFullWidth={true}
              >
                <NavTitle level={1} selected={selected} className="!pl-0 pt-0">
                  <span className="font-body w-full">{link.label}</span>
                </NavTitle>
              </DynamicLink>
            );
          })}
        </div>
      )}
      {navTree.length > 0 &&
        navTree.map((categoryData, index) => (
          <div
            key={`mobile-${
              categoryData.slug
                ? getUrl(categoryData.slug)
                : categoryData.title
                  ? categoryData.title
                  : categoryData.id
                    ? categoryData.id
                    : `item-${index}`
            }`}
          >
            <NavLevel
              navListElem={navListElem}
              categoryData={categoryData}
              level={startLevel}
              onNavigate={onNavigate}
            />
          </div>
        ))}
    </div>
  );
};

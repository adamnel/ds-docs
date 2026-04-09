import { isInternalPath, normalizeStaticHref } from "@/utils/base-path";
import Link, { type LinkProps } from "next/link";
import type React from "react";

type AnchorProps = Omit<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  "href" | "children"
>;
type ExtraProps = Omit<LinkProps, "as" | "href"> & AnchorProps;

interface DynamicLinkProps extends ExtraProps {
  href: string;
  children?: React.ReactNode;
  isFullWidth?: boolean;
}

export const DynamicLink = ({
  href,
  children,
  isFullWidth = false,
  ...props
}: DynamicLinkProps) => {
  const hasBasePath = Boolean(process.env.NEXT_PUBLIC_BASE_PATH);
  const normalizedHref =
    hasBasePath && isInternalPath(href) ? normalizeStaticHref(href) : href;
  const shouldUseNativeNavigation = hasBasePath && isInternalPath(href);

  if (shouldUseNativeNavigation) {
    const {
      replace,
      scroll,
      shallow,
      prefetch,
      locale,
      className,
      ...anchorProps
    } = props;

    return (
      <a
        href={normalizedHref}
        {...anchorProps}
        className={`cursor-pointer ${className || ""} ${isFullWidth ? "" : ""}`}
      >
        {children}
      </a>
    );
  }

  return (
    <Link
      href={normalizedHref}
      prefetch={false}
      {...props}
      className={`cursor-pointer ${props.className || ""} ${
        isFullWidth ? "" : ""
      }`}
    >
      {children}
    </Link>
  );
};

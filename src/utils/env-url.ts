import { getSiteUrl } from "./site-url";

export const envUrl = (url: string | URL | null | undefined) => {
  if (!url) return "";

  const siteUrl = getSiteUrl();
  const normalizedUrl = url.toString();

  if (normalizedUrl.startsWith("http")) {
    return normalizedUrl;
  }

  return `${siteUrl}${normalizedUrl}`;
};

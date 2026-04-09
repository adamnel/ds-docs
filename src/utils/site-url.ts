import settings from "@/content/settings/config.json";

const PROTOCOL_PREFIX = /^https?:\/\//i;

export function getSiteUrl() {
  const explicitUrl =
    process.env.NEXT_PUBLIC_SITE_URL ||
    process.env.SITE_URL ||
    process.env.VERCEL_PROJECT_PRODUCTION_URL ||
    settings.siteUrl;

  if (process.env.NODE_ENV === "development") {
    return "http://localhost:3000";
  }

  if (PROTOCOL_PREFIX.test(explicitUrl)) {
    return explicitUrl.replace(/\/$/, "");
  }

  return `https://${explicitUrl}`.replace(/\/$/, "");
}

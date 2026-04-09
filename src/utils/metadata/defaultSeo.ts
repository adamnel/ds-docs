import type { Metadata } from "next";

import settings from "@/content/settings/config.json";
import { getSiteUrl } from "../site-url";

const siteUrl = getSiteUrl();

export const DEFAULT_SEO: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: settings.title,
    template: "%s",
  },
  generator: "Next.js",
  applicationName: settings.applicationName,
  publisher: settings.publisher,
  description: settings.description,
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: siteUrl,
    title: settings.title,
    description: settings.description,
    siteName: settings.title,
    images: [
      {
        url: settings.defaultOGImage,
        width: 1200,
        height: 630,
        alt: "TinaCMS Docs",
      },
    ],
  },
  twitter: {
    site: settings.social.twitter,
    card: "summary_large_image",
  },
  keywords: settings.keywords,
};

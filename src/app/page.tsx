import { TinaClient } from "@/app/tina-client";
import { fetchTinaData } from "@/services/tina/fetch-tina-data";
import { getSeo } from "@/utils/metadata/getSeo";
import { getSiteUrl } from "@/utils/site-url";
import client from "@/tina/__generated__/client";
import HomeDocument from "./home-document";

const siteUrl = getSiteUrl();

export async function generateMetadata() {
  const slug = "index";
  const { data } = await client.queries.docs({ relativePath: `${slug}.mdx` });
  if (!data.docs.seo) {
    data.docs.seo = {
      __typename: "DocsSeo",
      canonicalUrl: siteUrl,
    };
  } else if (!data.docs.seo?.canonicalUrl) {
    data.docs.seo.canonicalUrl = siteUrl;
  }

  return getSeo(data.docs.seo, {
    pageTitle: data.docs.title,
    body: data.docs.body,
  });
}

async function getData() {
  return fetchTinaData(client.queries.docs, "index");
}

export default async function HomePage() {
  const data = await getData();

  return (
    <TinaClient
      Component={HomeDocument}
      props={{
        query: data.query,
        variables: data.variables,
        data: data.data,
        forceExperimental: data.variables.relativePath,
      }}
    />
  );
}

import HomeDocument from "@/app/home-document";
import { fetchTinaData } from "@/services/tina/fetch-tina-data";
import { getSeo } from "@/utils/metadata/getSeo";
import { getSiteUrl } from "@/utils/site-url";
import client from "@/tina/__generated__/client";

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

export default async function DocsHomePage() {
  const data = await getData();

  return (
    <HomeDocument
      tinaProps={{ data: data.data }}
      props={{
        query: data.query,
        variables: data.variables,
        data: data.data,
      }}
    />
  );
}

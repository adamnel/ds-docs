import { TinaClient } from "@/app/tina-client";
import { fetchTinaData } from "@/services/tina/fetch-tina-data";
import client from "@/tina/__generated__/client";
import { generateMetadata as generateDocsMetadata } from "./docs/page";
import HomeDocument from "./home-document";

export const generateMetadata = generateDocsMetadata;

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

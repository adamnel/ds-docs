import DocsPage, {
  generateMetadata as generateDocsMetadata,
} from "./docs/page";

export const generateMetadata = generateDocsMetadata;

export default async function HomePage() {
  return <DocsPage />;
}

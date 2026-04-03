import HeaderFormat from "@/components/tina-markdown/standard-elements/header-format";
import { IconUsageTables } from "./icon-usage-tables";

/**
 * Single embed for the Foundations → Icons “Usage” section so TinaCMS
 * registers one MDX block (see tina/templates + docs collection).
 */
export function IconsUsageGuide() {
  return (
    <div className="space-y-8">
      <section>
        <HeaderFormat level={3}>Functions</HeaderFormat>
        <p className="mb-4 text-neutral-text">
          We&apos;ve standardized which icons we use for various use cases.{" "}
          <strong>Preview</strong> shows the Material Symbols glyph at 24×24px
          where applicable.
        </p>
        <IconUsageTables variant="functions" />
      </section>

      <section>
        <HeaderFormat level={3}>States</HeaderFormat>
        <p className="mb-4 text-neutral-text">
          For giving opinionated feedback: error messages, loading, status
          indicators, and similar patterns. State icons use{" "}
          <strong>Covalent Icons</strong> (not Material Symbols); previews use
          the Covalent icon font where a glyph exists in the package.
        </p>
        <IconUsageTables variant="states" />
      </section>

      <section>
        <HeaderFormat level={3}>Visualizations</HeaderFormat>
        <p className="mb-4 text-neutral-text">
          Use these when toggling between different views of data—for example,
          switching from a bar chart to a line graph.
        </p>
        <IconUsageTables variant="visualizations" />
      </section>
    </div>
  );
}

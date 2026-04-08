import type { ReactNode } from "react";
import { isValidElement } from "react";
import { MdOutlineCheck } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { tinaField } from "tinacms/dist/react";
import { TinaMarkdown, type TinaMarkdownContent } from "tinacms/dist/rich-text";
import MarkdownComponentMapping from "../markdown-component-mapping";

export type DoDontProps = {
  doBody?: TinaMarkdownContent | ReactNode;
  dontBody?: TinaMarkdownContent | ReactNode;
};

/** Tina rich-text AST (CMS) or React nodes from MDX fragments. */
function hasRenderableBody(content: unknown): boolean {
  if (content == null) return false;
  if (isValidElement(content)) return true;
  if (
    typeof content === "object" &&
    content !== null &&
    "children" in content
  ) {
    const ch = (content as { children?: unknown[] }).children;
    return Array.isArray(ch) && ch.length > 0;
  }
  return false;
}

function renderBody(content: unknown) {
  if (content == null) return null;
  if (isValidElement(content)) {
    return (
      <div className="leading-6 text-neutral-text [&_p:first-child]:mt-0 [&_p:last-child]:mb-0">
        {content}
      </div>
    );
  }
  const ast = content as TinaMarkdownContent;
  if (
    typeof ast === "object" &&
    ast !== null &&
    Array.isArray(ast.children) &&
    ast.children.length > 0
  ) {
    return <TinaMarkdown content={ast} components={MarkdownComponentMapping} />;
  }
  return null;
}

export function DoDont(props: DoDontProps) {
  const { doBody, dontBody } = props;
  const showDo = hasRenderableBody(doBody);
  const showDont = hasRenderableBody(dontBody);

  if (!showDo && !showDont) {
    return null;
  }

  const both = showDo && showDont;

  return (
    <fieldset
      className={
        both
          ? "my-6 grid min-w-0 grid-cols-1 gap-4 border-0 p-0 md:grid-cols-2 md:gap-6"
          : "my-6 grid min-w-0 grid-cols-1 gap-4 border-0 p-0"
      }
    >
      <legend className="sr-only">Do and don&apos;t guidance</legend>
      {showDo ? (
        <section
          className="rounded-lg border border-neutral-border border-l-4 border-l-green-600 bg-neutral-background-secondary shadow-sm"
          data-tina-field={tinaField(props, "doBody")}
        >
          <div className="flex flex-col gap-2 px-4 py-3">
            <div className="flex items-center gap-2 text-green-700">
              <MdOutlineCheck className="shrink-0" size={22} aria-hidden />
              <span className="font-heading text-sm font-semibold uppercase tracking-wide">
                Do
              </span>
            </div>
            <div className="leading-6 text-neutral-text [&_p:first-child]:mt-0 [&_p:last-child]:mb-0">
              {renderBody(doBody)}
            </div>
          </div>
        </section>
      ) : null}

      {showDont ? (
        <section
          className="rounded-lg border border-neutral-border border-l-4 border-l-red-500 bg-neutral-background-secondary shadow-sm"
          data-tina-field={tinaField(props, "dontBody")}
        >
          <div className="flex flex-col gap-2 px-4 py-3">
            <div className="flex items-center gap-2 text-red-600">
              <RxCross2 className="shrink-0" size={20} aria-hidden />
              <span className="font-heading text-sm font-semibold uppercase tracking-wide">
                Don&apos;t
              </span>
            </div>
            <div className="leading-6 text-neutral-text [&_p:first-child]:mt-0 [&_p:last-child]:mb-0">
              {renderBody(dontBody)}
            </div>
          </div>
        </section>
      ) : null}
    </fieldset>
  );
}

"use client";

import MarkdownComponentMapping from "@/components/tina-markdown/markdown-component-mapping";
import type { DocsQuery } from "@/tina/__generated__/types";
import { tinaField } from "tinacms/dist/react";
import { TinaMarkdown } from "tinacms/dist/rich-text";

type HomeDocumentProps = {
  props: Record<string, unknown>;
  tinaProps: { data: Record<string, unknown> };
};

export default function HomeDocument({ tinaProps }: HomeDocumentProps) {
  const documentationData = (tinaProps.data as DocsQuery).docs;

  return (
    <div className="w-full">
      <section className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden border-y border-neutral-border/50 bg-[#030712] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(48,83,244,0.45),transparent_42%),radial-gradient(circle_at_bottom,rgba(48,83,244,0.18),transparent_55%),linear-gradient(180deg,rgba(2,6,23,0.92),rgba(3,7,18,0.98))]" />
        <div
          className="home-hero-terminal absolute inset-0 opacity-80"
          aria-hidden="true"
        />
        <div
          className="home-hero-scanlines absolute inset-0 opacity-30"
          aria-hidden="true"
        />
        <div
          className="home-hero-noise absolute inset-0 opacity-20"
          aria-hidden="true"
        />
        <div className="relative mx-auto flex min-h-[48vh] max-w-7xl items-center justify-center px-6 py-24 text-center sm:min-h-[56vh] sm:px-10">
          <div className="max-w-4xl">
            <p className="mb-4 font-mono text-sm uppercase tracking-[0.4em] text-[#8ea3ff]">
              Covalent
            </p>
            <h1
              className="font-heading text-5xl leading-tight text-white sm:text-6xl lg:text-7xl"
              data-tina-field={tinaField(documentationData, "title")}
              data-pagefind-meta="title"
            >
              {documentationData?.title}
            </h1>
          </div>
        </div>
      </section>

      <div className="mx-auto w-full max-w-6xl px-6 py-10 sm:px-10 sm:py-14">
        <div
          data-tina-field={tinaField(documentationData, "body")}
          className="font-body font-light leading-normal tracking-normal"
        >
          <TinaMarkdown
            content={documentationData?.body}
            components={MarkdownComponentMapping}
          />
        </div>
      </div>
    </div>
  );
}

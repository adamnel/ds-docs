"use client";

import FaultyTerminal from "@/components/backgrounds/faulty-terminal";
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
      <section className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden bg-[#030712] text-white">
        <div className="absolute inset-0">
          <FaultyTerminal
            scale={1.5}
            digitSize={1.2}
            scanlineIntensity={0.5}
            noiseAmp={1}
            curvature={0.1}
            tint="#3053f4"
            mouseStrength={0.5}
            brightness={0.6}
          />
        </div>
        <div className="relative mx-auto flex min-h-[48vh] max-w-7xl items-center justify-center px-6 py-24 text-center sm:min-h-[56vh] sm:px-10">
          <div className="max-w-4xl">
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
          className="font-body font-light leading-normal tracking-normal [&_.my-8.grid]:sm:grid-cols-2 [&_.my-8.grid]:lg:grid-cols-3"
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

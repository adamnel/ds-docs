"use client";

import React from "react";
import { useTina } from "tinacms/dist/react";

export type UseTinaProps = {
  query: string;
  variables: Record<string, unknown>;
  data: Record<string, unknown>;
  forceExperimental?: string;
};

export type TinaClientProps<T> = {
  props: UseTinaProps & T;
  Component: React.ComponentType<{
    tinaProps: { data: Record<string, unknown> };
    props: UseTinaProps & T;
  }>;
};

class TinaErrorBoundary extends React.Component<
  { children: React.ReactNode; fallback: React.ReactNode },
  { hasError: boolean }
> {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidUpdate(prevProps: { children: React.ReactNode }) {
    if (this.state.hasError && prevProps.children !== this.props.children) {
      this.setState({ hasError: false });
    }
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}

function TinaClientLive<T>({ props, Component }: TinaClientProps<T>) {
  const tinaOptions = {
    query: props.query,
    variables: props.variables,
    data: props.data,
    ...(props.forceExperimental && {
      experimental___selectFormByFormId() {
        return `content/docs/${props.forceExperimental}`;
      },
    }),
  };
  const { data } = useTina(tinaOptions);

  return <Component tinaProps={{ data }} props={{ ...props }} />;
}

export function TinaClient<T>({ props, Component }: TinaClientProps<T>) {
  return (
    <TinaErrorBoundary
      fallback={
        <Component tinaProps={{ data: props.data }} props={{ ...props }} />
      }
    >
      <TinaClientLive props={props} Component={Component} />
    </TinaErrorBoundary>
  );
}

export function ImagePlaceholder({ imageId }: { imageId: string }) {
  return (
    <p className="my-6 flex min-h-[120px] items-center justify-center rounded-lg border border-dashed border-neutral-border bg-neutral-background-secondary px-4 text-center font-mono text-sm text-neutral-text-secondary">
      {imageId}
    </p>
  );
}

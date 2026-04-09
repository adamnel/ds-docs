const ABSOLUTE_URL_PATTERN = /^(?:[a-z]+:)?\/\//i;

export function withBasePath(path?: string | null): string {
  if (!path) return "";
  if (ABSOLUTE_URL_PATTERN.test(path)) return path;

  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

  if (path === "/") {
    return basePath || "/";
  }

  if (basePath && path.startsWith(basePath)) {
    return path;
  }

  if (path.startsWith("/")) {
    return `${basePath}${path}`;
  }

  return `${basePath}/${path}`;
}

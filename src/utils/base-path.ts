const ABSOLUTE_URL_PATTERN = /^(?:[a-z]+:)?\/\//i;
const SPECIAL_PATH_PATTERN = /^(?:#|mailto:|tel:|sms:|javascript:)/i;
const FILE_PATH_PATTERN = /\/[^/]+\.[a-z0-9]+$/i;

export function withBasePath(path?: string | null): string {
  if (!path) return "";
  if (ABSOLUTE_URL_PATTERN.test(path) || SPECIAL_PATH_PATTERN.test(path)) {
    return path;
  }

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

export function stripBasePath(path?: string | null): string {
  if (!path) return "";
  if (ABSOLUTE_URL_PATTERN.test(path) || SPECIAL_PATH_PATTERN.test(path)) {
    return path;
  }

  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  if (!basePath) return path;
  if (path === basePath) return "/";
  if (path.startsWith(`${basePath}/`)) {
    return path.slice(basePath.length) || "/";
  }

  return path;
}

export function isInternalPath(path?: string | null): boolean {
  if (!path) return false;
  return !ABSOLUTE_URL_PATTERN.test(path) && !SPECIAL_PATH_PATTERN.test(path);
}

export function normalizeStaticHref(path?: string | null): string {
  if (!path) return "";
  if (!isInternalPath(path)) return path;

  const [pathnameWithQuery, hash = ""] = path.split("#");
  const [pathname, query = ""] = pathnameWithQuery.split("?");

  let normalizedPath = stripBasePath(pathname);
  if (!normalizedPath.startsWith("/")) {
    normalizedPath = `/${normalizedPath}`;
  }

  if (
    normalizedPath !== "/" &&
    !normalizedPath.endsWith("/") &&
    !FILE_PATH_PATTERN.test(normalizedPath)
  ) {
    normalizedPath = `${normalizedPath}/`;
  }

  const prefixedPath = withBasePath(normalizedPath);
  const querySuffix = query ? `?${query}` : "";
  const hashSuffix = hash ? `#${hash}` : "";

  return `${prefixedPath}${querySuffix}${hashSuffix}`;
}

const normalizeBase = (base: string) => {
  const trimmedBase = base.trim()
  const basePath = trimmedBase.replace(/^\/+|\/+$/g, "")

  return basePath ? `/${basePath}/` : "/"
}

const normalizePath = (path: string) => path.trim().replace(/^\/+/, "")

const joinBaseAndPath = (path: string, base: string) => {
  const normalizedBase = normalizeBase(base)
  const normalizedPath = normalizePath(path)

  return normalizedPath ? `${normalizedBase}${normalizedPath}` : normalizedBase
}

export const assetUrl = (
  path: string,
  base = import.meta.env.BASE_URL,
) => joinBaseAndPath(path, base)

export const appUrl = (
  path = "/",
  base = import.meta.env.BASE_URL,
) => joinBaseAndPath(path, base)

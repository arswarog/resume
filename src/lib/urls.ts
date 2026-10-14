function normalizeBase(base: string) {
    const trimmedBase = base.trim();
    const basePath = trimmedBase.replace(/^\/+|\/+$/g, '');

    return basePath ? `/${basePath}/` : '/';
}

function normalizePath(path: string) {
    return path.trim().replace(/^\/+/, '');
}

function joinBaseAndPath(path: string, base: string) {
    const normalizedBase = normalizeBase(base);
    const normalizedPath = normalizePath(path);

    return normalizedPath ? `${normalizedBase}${normalizedPath}` : normalizedBase;
}

export function assetUrl(path: string, base = import.meta.env.BASE_URL) {
    return joinBaseAndPath(path, base);
}

export function appUrl(path = '/', base = import.meta.env.BASE_URL) {
    return joinBaseAndPath(path, base);
}

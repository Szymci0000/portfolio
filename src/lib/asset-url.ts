/** Prefix a public-folder path with Vite's base URL (e.g. `/portfolio/` on GitHub Pages). */
export function assetUrl(path: string) {
  const normalized = path.replace(/^\//, "")
  return `${import.meta.env.BASE_URL}${normalized}`
}

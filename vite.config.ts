import { fileURLToPath, URL } from "node:url"
import { defineConfig, loadEnv } from "vite"
import react from "@vitejs/plugin-react"

const normalizeBasePath = (value: string | undefined) => {
  const basePath = (value ?? "/").trim().replace(/^\/+|\/+$/g, "")
  return basePath ? `/${basePath}/` : "/"
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "VITE_")
  const base = normalizeBasePath(env.VITE_BASE_PATH)

  return {
    base,
    plugins: [react()],
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
  }
})

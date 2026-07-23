import path from "path"
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Sitemap and robots.txt are maintained by hand in /public (single source of truth):
//   public/sitemap.xml, public/robots.txt, public/llms.txt
// vite-plugin-sitemap was removed to avoid a second, conflicting generator.
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3001',
        changeOrigin: true,
      },
    },
  },
})

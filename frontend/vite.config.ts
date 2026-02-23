import path from "path"
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import Sitemap from 'vite-plugin-sitemap'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    Sitemap({
      hostname: 'https://shivmines.in',
      dynamicRoutes: [
        '/products/construction-sand',
        '/products/industrial-sand',
        '/products/glass-sand',
        '/products/foundry-sand',
        '/products/frac-sand',
        '/products/custom-specification'
      ],
      robots: [{
        userAgent: '*',
        allow: '/',
        disallow: '/api/'
      }]
    })
  ],
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

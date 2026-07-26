import { defineConfig } from 'vite'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import viteReact from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import tsConfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  base: '/caleb-portfolio/',
  plugins: [
    tsConfigPaths({ projects: ['./tsconfig.json'] }),
    tailwindcss(),
    tanstackStart({
      prerender: {
        enabled: true,
        crawlLinks: true,
        filter: ({ path }) => !/\.(pdf|mp4|jpg|jpeg|png|webp|gif|svg)$/i.test(path),
      },
    }),
    viteReact(),
  ],
})
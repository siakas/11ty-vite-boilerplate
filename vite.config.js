import { defineConfig } from 'vite'
import { eleventyPlugin } from 'vite-plugin-eleventy'

export default defineConfig({
  root: 'src',
  plugins: [eleventyPlugin()],
  build: {
    outDir: '../dist',
    emptyOutDir: true,
  },
})

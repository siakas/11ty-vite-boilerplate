import { defineConfig } from 'vite'
import { eleventyPlugin } from 'vite-plugin-eleventy'

export default defineConfig({
  root: 'src/site/pages',
  plugins: [eleventyPlugin()],
  build: {
    outDir: '../../../dist',
    emptyOutDir: true,
  },
})

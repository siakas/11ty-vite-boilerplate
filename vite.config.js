import { defineConfig } from 'vite'
import { eleventyPlugin } from 'vite-plugin-eleventy'
import sassGlobImports from 'vite-plugin-sass-glob-import'

export default defineConfig({
  root: 'src/site/pages',
  plugins: [eleventyPlugin(), sassGlobImports()],
  build: {
    outDir: '../../../dist',
    emptyOutDir: true,
  },
  resolve: {
    alias: {
      '@styles': new URL('src/styles', import.meta.url).pathname,
      '@scripts': new URL('src/scripts', import.meta.url).pathname,
    },
  },
  css: {
    devSourcemap: true,
    postcss: {
      plugins: [require('autoprefixer')],
    },
  },
})

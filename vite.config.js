
import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
 //   root: resolve(__dirname, 'src'),
//   publicDir: '../public',

//   base: './',

  build: {
    outDir: './dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'aboutus.html'),
        product: resolve(__dirname, 'product.html'),
      },
    },
  },

  resolve: {
    alias: {
      '~bootstrap': resolve(__dirname, 'node_modules/bootstrap'),
    },
  },
//   server: {
//     port: 8080,
//   },
})
const path = require('path')

export default {
  root: path.resolve(__dirname, 'src'),
  publicDir: '../public', // This tells Vite the public folder is one level up
  build: {
    outDir: '../dist',
  },
  resolve: {
    alias: {
      '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
    }
  },
  server: {
    port: 8080,
    hot: true
  }
}
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// APKiD 官网：静态单页，base 用相对路径以便与文档站产物合并部署
// （覆盖 VitePress 的 index.html 成为站点首页，可部署到任意子路径）。
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: './',
  build: {
    target: 'es2020',
    outDir: 'dist',
  },
})

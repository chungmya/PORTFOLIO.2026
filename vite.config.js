import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        // 전역 SCSS 변수/믹스인 자동 주입 (각 컴포넌트에서 @use 없이 접근 불필요)
        api: 'modern-compiler',
      },
    },
  },
})

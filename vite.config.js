import { defineConfig } from 'vite'
export default defineConfig({
  css: {
    // 这里可以添加CSS相关的配置，如预处理器等
    preprocessorOptions: {
      scss: {
        additionalData: '@import "@/styles/variables.scss";'
      }
    }
  }
})

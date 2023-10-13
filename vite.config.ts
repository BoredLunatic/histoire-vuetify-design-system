import { defineConfig } from 'vite'
import { resolve } from 'path'
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  base: resolve(__dirname, 'src'),
  plugins: [
    vue()
  ],
  build: {
    lib: {
      entry: [
        resolve(__dirname, 'src/index.ts'),
        resolve(__dirname, 'src/design.ts'),
      ],
      name: 'Histoire Vuetify Design System',
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
          // vuetify: 'vuetify',
          // histoire: 'histoire'
        }
      }
    }
  }
})

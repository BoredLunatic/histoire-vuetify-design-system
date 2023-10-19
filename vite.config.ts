import { defineConfig } from 'vite'
import { resolve } from 'path'
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  base: './',
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
      external: ['vue', 'fs'],
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

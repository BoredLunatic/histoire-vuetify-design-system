import { defineConfig } from "histoire";
import { HstVue } from "@histoire/plugin-vue";
import { vuetifyDesignSystem } from '../dist/design'

export default defineConfig({
  outDir: './.histoire/dist',
  setupFile: 'src/histoire.setup.ts',
  plugins: [
    HstVue(), 
    vuetifyDesignSystem({
      configFile: __dirname + '/src/vuetify/options.ts',
    })
  ],
});
  
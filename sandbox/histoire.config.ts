import { defineConfig } from "histoire";
import { HstVue } from "@histoire/plugin-vue";
import { vuetifyDesignSystem } from '../src'

export default defineConfig({
  outDir: './.histoire/dist',
  setupFile: 'src/histoire.setup.ts',
  plugins: [
    HstVue(), 
    vuetifyDesignSystem({
      configFile: __dirname + '/src/vuetify/options.ts',
    })
  ],
  // theme: {
  //   colors: {
  //     gray: {
  //       50: '#FFF',
  //       100: '#000',
  //       200: '#000',
  //       300: '#000',
  //       400: '#000',
  //       500: '#000',
  //       600: '#000',
  //       700: '#000',
  //       750: '#000',
  //       800: '#000',
  //       850: '#000',
  //       900: '#000',
  //       950: '#000',
  //     },
  //     primary: {
  //       50: '#ecfeff',
  //       100: '#cffafe',
  //       200: '#a5f3fc',
  //       300: '#67e8f9',
  //       400: '#22d3ee',
  //       500: '#06b6d4',
  //       600: '#0891b2',
  //       700: '#0e7490',
  //       800: '#155e75',
  //       900: '#164e63',
  //     }
  //   }
  // }
});
  
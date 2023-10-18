import { defineConfig } from "histoire";
import { HstVue } from "@histoire/plugin-vue";
import { resolve } from "path";
import { container } from "@mdit/plugin-container";

export default defineConfig({
  outDir: resolve(__dirname, "docs"),
  setupFile: './src/docs/histoire.setup.ts',
  routerMode: "hash",
  plugins: [
    HstVue(), 
  ],
  vite: {
    base: "./"
  },
  theme: {
    title: "Histoire Vuetify Design System Documentation",
    logo: {
      square: './src/docs/histoirefy-transparent-background.svg',
      light: './src/docs/histoirefy-transparent-background.svg',
      dark: './src/docs/histoirefy-transparent-background.svg'
    },
  },
  tree: {
    groups: [
      {
        id: "top",
        title: "",
      },
      {
        id: "getting-started",
        title: "Getting Started",
      },
      {
        id: "examples",
        title: "Example Configs",
      },
    ],
  },
  markdown: (md) => {
    md.use(container, {
      name: "alert",
      openRender: (tokens: any, index: any) => {
        return `<div class="${tokens[index].info || "alert"}"><div class="contents">`;
      },
      closeRender: () => {
        return `</div></div>\n`;
      },
    });
    md.use(container, {
      name: "div",
      openRender: (tokens: any, index: any) => {
        return `<div class="${tokens[index].info || ""}">`;
      },
      closeRender: () => {
        return `</div>\n`;
      },
    });
    return md;
  },
});
  
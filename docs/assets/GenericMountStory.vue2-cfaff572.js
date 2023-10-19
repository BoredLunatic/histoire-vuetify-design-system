import { Q as createRouter, R as createWebHistory, S as createWebHashHistory, U as useDark, V as useToggle, k as watch, W as markRaw, E as reactive, d as defineComponent, r as ref, X as watchEffect, o as openBlock, q as createBlock, Y as mergeProps, Z as resolveDynamicComponent, h as createCommentVNode } from "./vendor-fb6acbf7.js";
const scriptRel = "modulepreload";
const assetsURL = function(dep, importerUrl) {
  return new URL(dep, importerUrl).href;
};
const seen = {};
const __vitePreload = function preload(baseModule, deps, importerUrl) {
  if (!deps || deps.length === 0) {
    return baseModule();
  }
  const links = document.getElementsByTagName("link");
  return Promise.all(deps.map((dep) => {
    dep = assetsURL(dep, importerUrl);
    if (dep in seen)
      return;
    seen[dep] = true;
    const isCss = dep.endsWith(".css");
    const cssSelector = isCss ? '[rel="stylesheet"]' : "";
    const isBaseRelative = !!importerUrl;
    if (isBaseRelative) {
      for (let i = links.length - 1; i >= 0; i--) {
        const link2 = links[i];
        if (link2.href === dep && (!isCss || link2.rel === "stylesheet")) {
          return;
        }
      }
    } else if (document.querySelector(`link[href="${dep}"]${cssSelector}`)) {
      return;
    }
    const link = document.createElement("link");
    link.rel = isCss ? "stylesheet" : scriptRel;
    if (!isCss) {
      link.as = "script";
      link.crossOrigin = "";
    }
    link.href = dep;
    document.head.appendChild(link);
    if (isCss) {
      return new Promise((res, rej) => {
        link.addEventListener("load", res);
        link.addEventListener("error", () => rej(new Error(`Unable to preload CSS for ${dep}`)));
      });
    }
  })).then(() => baseModule()).catch((err) => {
    const e = new Event("vite:preloadError", { cancelable: true });
    e.payload = err;
    window.dispatchEvent(e);
    if (!e.defaultPrevented) {
      throw err;
    }
  });
};
const Comp0 = { "title": "Introduction", "icon": "carbon:monster", "group": "top", "docsOnly": true, "variants": [] };
const Comp1 = { "title": "List of Templates", "icon": "carbon:list-boxes", "group": "top", "docsOnly": true, "variants": [] };
const Comp2 = { "title": "Hiding A Variant", "icon": "carbon:incomplete-cancel", "group": "examples", "docsOnly": true, "variants": [] };
const Comp3 = { "title": "Updating Playground", "icon": "carbon:game-wireless", "group": "examples", "docsOnly": true, "variants": [] };
const Comp4 = { "title": "Updating Playground Text", "icon": "carbon:game-console", "group": "examples", "docsOnly": true, "variants": [] };
const Comp5 = { "title": "Installation", "icon": "carbon:insert-syntax", "group": "getting-started", "docsOnly": true, "variants": [] };
const Comp6 = { "title": "Options Interfaces", "icon": "carbon:floorplan", "group": "getting-started", "docsOnly": true, "variants": [] };
const Comp7 = { "title": "Templates", "icon": "carbon:template", "group": "getting-started", "docsOnly": true, "variants": [] };
const Comp8 = { "title": "Variants", "icon": "carbon:settings-adjust", "group": "getting-started", "docsOnly": true, "variants": [] };
let files = [
  { "id": "src-docs-introduction-story-js", "path": ["Introduction"], "filePath": "src/docs/Introduction.story.js", "story": { "id": "src-docs-introduction-story-js", "title": "Introduction", "group": "top", "layout": { "type": "single", "iframe": true }, "icon": "carbon:monster", "docsOnly": true, "variants": [] }, "supportPluginId": "vanilla", "docsFilePath": "src/docs/Introduction.story.md", "index": 0, component: Comp0, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_src-docs-introduction-story-js-41c3478b.js"), true ? [] : void 0, import.meta.url) },
  { "id": "src-docs-templatelist-story-js", "path": ["List of Templates"], "filePath": "src/docs/TemplateList.story.js", "story": { "id": "src-docs-templatelist-story-js", "title": "List of Templates", "group": "top", "layout": { "type": "single", "iframe": true }, "icon": "carbon:list-boxes", "docsOnly": true, "variants": [] }, "supportPluginId": "vanilla", "docsFilePath": "src/docs/TemplateList.story.md", "index": 1, component: Comp1, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_src-docs-templatelist-story-js-7627db35.js"), true ? [] : void 0, import.meta.url) },
  { "id": "src-docs-examples-hidingvariant-story-js", "path": ["Hiding A Variant"], "filePath": "src/docs/examples/HidingVariant.story.js", "story": { "id": "src-docs-examples-hidingvariant-story-js", "title": "Hiding A Variant", "group": "examples", "layout": { "type": "single", "iframe": true }, "icon": "carbon:incomplete-cancel", "docsOnly": true, "variants": [] }, "supportPluginId": "vanilla", "docsFilePath": "src/docs/examples/HidingVariant.story.md", "index": 2, component: Comp2, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_src-docs-examples-hidingvariant-story-js-00982437.js"), true ? [] : void 0, import.meta.url) },
  { "id": "src-docs-examples-updatingplayground-story-js", "path": ["Updating Playground"], "filePath": "src/docs/examples/UpdatingPlayground.story.js", "story": { "id": "src-docs-examples-updatingplayground-story-js", "title": "Updating Playground", "group": "examples", "layout": { "type": "single", "iframe": true }, "icon": "carbon:game-wireless", "docsOnly": true, "variants": [] }, "supportPluginId": "vanilla", "docsFilePath": "src/docs/examples/UpdatingPlayground.story.md", "index": 3, component: Comp3, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_src-docs-examples-updatingplayground-story-js-46c26ebb.js"), true ? [] : void 0, import.meta.url) },
  { "id": "src-docs-examples-updatingplaygroundtext-story-js", "path": ["Updating Playground Text"], "filePath": "src/docs/examples/UpdatingPlaygroundText.story.js", "story": { "id": "src-docs-examples-updatingplaygroundtext-story-js", "title": "Updating Playground Text", "group": "examples", "layout": { "type": "single", "iframe": true }, "icon": "carbon:game-console", "docsOnly": true, "variants": [] }, "supportPluginId": "vanilla", "docsFilePath": "src/docs/examples/UpdatingPlaygroundText.story.md", "index": 4, component: Comp4, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_src-docs-examples-updatingplaygroundtext-story-js-e663d10f.js"), true ? [] : void 0, import.meta.url) },
  { "id": "src-docs-getting-started-installation-story-js", "path": ["Installation"], "filePath": "src/docs/getting-started/Installation.story.js", "story": { "id": "src-docs-getting-started-installation-story-js", "title": "Installation", "group": "getting-started", "layout": { "type": "single", "iframe": true }, "icon": "carbon:insert-syntax", "docsOnly": true, "variants": [] }, "supportPluginId": "vanilla", "docsFilePath": "src/docs/getting-started/Installation.story.md", "index": 5, component: Comp5, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_src-docs-getting-started-installation-story-js-8a634856.js"), true ? [] : void 0, import.meta.url) },
  { "id": "src-docs-getting-started-interfaces-story-js", "path": ["Options Interfaces"], "filePath": "src/docs/getting-started/Interfaces.story.js", "story": { "id": "src-docs-getting-started-interfaces-story-js", "title": "Options Interfaces", "group": "getting-started", "layout": { "type": "single", "iframe": true }, "icon": "carbon:floorplan", "docsOnly": true, "variants": [] }, "supportPluginId": "vanilla", "docsFilePath": "src/docs/getting-started/Interfaces.story.md", "index": 6, component: Comp6, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_src-docs-getting-started-interfaces-story-js-06d44211.js"), true ? [] : void 0, import.meta.url) },
  { "id": "src-docs-getting-started-templates-story-js", "path": ["Templates"], "filePath": "src/docs/getting-started/Templates.story.js", "story": { "id": "src-docs-getting-started-templates-story-js", "title": "Templates", "group": "getting-started", "layout": { "type": "single", "iframe": true }, "icon": "carbon:template", "docsOnly": true, "variants": [] }, "supportPluginId": "vanilla", "docsFilePath": "src/docs/getting-started/Templates.story.md", "index": 7, component: Comp7, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_src-docs-getting-started-templates-story-js-ba70b7eb.js"), true ? [] : void 0, import.meta.url) },
  { "id": "src-docs-getting-started-variants-story-js", "path": ["Variants"], "filePath": "src/docs/getting-started/Variants.story.js", "story": { "id": "src-docs-getting-started-variants-story-js", "title": "Variants", "group": "getting-started", "layout": { "type": "single", "iframe": true }, "icon": "carbon:settings-adjust", "docsOnly": true, "variants": [] }, "supportPluginId": "vanilla", "docsFilePath": "src/docs/getting-started/Variants.story.md", "index": 8, component: Comp8, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_src-docs-getting-started-variants-story-js-c33fecab.js"), true ? [] : void 0, import.meta.url) }
];
let tree = [{ "group": true, "id": "top", "title": "", "children": [{ "title": "Introduction", "index": 0 }, { "title": "List of Templates", "index": 1 }] }, { "group": true, "id": "getting-started", "title": "Getting Started", "children": [{ "title": "Installation", "index": 5 }, { "title": "Options Interfaces", "index": 6 }, { "title": "Templates", "index": 7 }, { "title": "Variants", "index": 8 }] }, { "group": true, "id": "examples", "title": "Example Configs", "children": [{ "title": "Hiding A Variant", "index": 2 }, { "title": "Updating Playground", "index": 3 }, { "title": "Updating Playground Text", "index": 4 }] }];
const Logo_square = "" + new URL("square-logo-transparent-bg-454cfb95.png", import.meta.url).href;
const Logo_dark = "" + new URL("histoirefy-logo-large-transparent-bg-0442a3ad.png", import.meta.url).href;
const config = { "plugins": [{ "name": "builtin:tailwind-tokens" }, { "name": "builtin:vanilla-support", "supportPlugin": { "id": "vanilla", "moduleName": "/development/plustime/histoire-vuetify-tokens/node_modules/histoire/dist/node/builtin-plugins/vanilla-support", "setupFn": "setupVanilla" } }, { "name": "@histoire/plugin-vue", "supportPlugin": { "id": "vue3", "moduleName": "@histoire/plugin-vue", "setupFn": "setupVue3", "importStoriesPrepend": "import { defineAsyncComponent as defineAsyncComponentVue3 } from 'vue'" }, "commands": [{ "id": "histoire:plugin-vue:generate-story", "label": "Generate Vue 3 story from component", "icon": "https://vuejs.org/logo.svg", "searchText": "generate create", "clientSetupFile": "@histoire/plugin-vue/dist/commands/generate-story.client.js" }] }], "outDir": "/development/plustime/histoire-vuetify-tokens/docs", "storyMatch": ["**/*.story.vue", "**/*.story.svelte"], "storyIgnored": ["**/node_modules/**", "**/dist/**"], "supportMatch": [{ "id": "vanilla", "patterns": ["**/*.js"], "pluginIds": ["vanilla"] }, { "id": "vue", "patterns": ["**/*.vue"], "pluginIds": ["vue3"] }], "tree": { "file": "title", "order": "asc", "groups": [{ "id": "top", "title": "" }, { "id": "getting-started", "title": "Getting Started" }, { "id": "examples", "title": "Example Configs" }] }, "theme": { "title": "Histoire Vuetify Design System Documentation", "colors": { "primary": { "50": "#ecfdf5", "100": "#d1fae5", "200": "#a7f3d0", "300": "#6ee7b7", "400": "#34d399", "500": "#10b981", "600": "#059669", "700": "#047857", "800": "#065f46", "900": "#064e3b" }, "gray": { "50": "#fafafa", "100": "#f4f4f5", "200": "#e4e4e7", "300": "#d4d4d8", "400": "#a1a1aa", "500": "#71717a", "600": "#52525b", "700": "#3f3f46", "750": "#323238", "800": "#27272a", "850": "#1f1f21", "900": "#18181b", "950": "#101012" } }, "defaultColorScheme": "auto", "storeColorScheme": true, "darkClass": "dark", "logo": { "square": "/development/plustime/histoire-vuetify-tokens/src/docs/logos/square-logo-transparent-bg.png", "light": "/development/plustime/histoire-vuetify-tokens/src/docs/logos/histoirefy-logo-large-transparent-bg.png", "dark": "/development/plustime/histoire-vuetify-tokens/src/docs/logos/histoirefy-logo-large-transparent-bg.png" } }, "responsivePresets": [{ "label": "Mobile (Small)", "width": 320, "height": 560 }, { "label": "Mobile (Medium)", "width": 360, "height": 640 }, { "label": "Mobile (Large)", "width": 414, "height": 896 }, { "label": "Tablet", "width": 768, "height": 1024 }, { "label": "Laptop (Small)", "width": 1024, "height": null }, { "label": "Laptop (Large)", "width": 1366, "height": null }, { "label": "Desktop", "width": 1920, "height": null }, { "label": "4K", "width": 3840, "height": null }], "backgroundPresets": [{ "label": "Transparent", "color": "transparent", "contrastColor": "#333" }, { "label": "White", "color": "#fff", "contrastColor": "#333" }, { "label": "Light gray", "color": "#aaa", "contrastColor": "#000" }, { "label": "Dark gray", "color": "#333", "contrastColor": "#fff" }, { "label": "Black", "color": "#000", "contrastColor": "#eee" }], "sandboxDarkClass": "dark", "routerMode": "hash", "build": { "excludeFromVendorsChunk": [] }, "viteIgnorePlugins": [], "setupFile": "./src/docs/histoire.setup.ts" };
const logos = { square: Logo_square, light: Logo_dark, dark: Logo_dark };
const histoireConfig = config;
const customLogos = logos;
const base = "./";
function createRouterHistory() {
  switch (histoireConfig.routerMode) {
    case "hash":
      return createWebHashHistory(base);
    case "history":
    default:
      return createWebHistory(base);
  }
}
const router = createRouter({
  history: createRouterHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => __vitePreload(() => import("./HomeView.vue-dd911925.js"), true ? ["./HomeView.vue-dd911925.js","./vendor-fb6acbf7.js"] : void 0, import.meta.url)
    },
    {
      path: "/story/:storyId",
      name: "story",
      component: () => __vitePreload(() => import("./StoryView.vue-a47e0544.js"), true ? ["./StoryView.vue-a47e0544.js","./vendor-fb6acbf7.js","./MobileOverlay.vue2-b7b7af07.js","./BaseEmpty.vue-cad3fea6.js","./state-2b8b83f6.js"] : void 0, import.meta.url)
    }
  ]
});
const isDark = useDark({
  valueDark: "htw-dark",
  initialValue: histoireConfig.theme.defaultColorScheme,
  storageKey: "histoire-color-scheme",
  storage: histoireConfig.theme.storeColorScheme ? localStorage : sessionStorage
});
const toggleDark = useToggle(isDark);
function applyDarkToControls() {
  var _a;
  (_a = window.__hst_controls_dark) == null ? void 0 : _a.forEach((ref2) => {
    ref2.value = isDark.value;
  });
}
watch(isDark, () => {
  applyDarkToControls();
}, {
  immediate: true
});
window.__hst_controls_dark_ready = () => {
  applyDarkToControls();
};
const copiedFromExistingVariant = [
  "state",
  "slots",
  "source",
  "responsiveDisabled",
  "autoPropsDisabled",
  "setupApp",
  "configReady",
  "previewReady"
];
function mapFile(file, existingFile) {
  let result;
  if (existingFile) {
    result = existingFile;
    for (const key in file) {
      if (key === "story") {
        result.story = {
          ...result.story,
          ...file.story,
          file: markRaw(result),
          variants: file.story.variants.map((v) => mapVariant(v, existingFile.story.variants.find((item) => item.id === v.id)))
        };
      } else if (key !== "component") {
        result[key] = file[key];
      }
    }
  } else {
    result = {
      ...file,
      component: markRaw(file.component),
      story: {
        ...file.story,
        title: file.story.title,
        file: markRaw(file),
        variants: file.story.variants.map((v) => mapVariant(v)),
        slots: () => ({})
      }
    };
  }
  return result;
}
function mapVariant(variant, existingVariant) {
  let result;
  if (existingVariant) {
    result = existingVariant;
    for (const key in variant) {
      if (!copiedFromExistingVariant.includes(key)) {
        result[key] = variant[key];
      }
    }
  } else {
    result = {
      ...variant,
      state: reactive({
        _hPropState: {},
        _hPropDefs: {}
      }),
      setupApp: null,
      slots: () => ({}),
      previewReady: false
    };
  }
  return result;
}
const clientSupportPlugins = {
  "vanilla": () => __vitePreload(() => import("./vendor-fb6acbf7.js").then((n) => n.as), true ? [] : void 0, import.meta.url),
  "vue3": () => __vitePreload(() => import("./vendor-fb6acbf7.js").then((n) => n.at), true ? [] : void 0, import.meta.url)
};
const __default__ = {
  inheritAttrs: false
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  __name: "GenericMountStory",
  props: {
    story: {}
  },
  setup(__props) {
    const props = __props;
    const mountComponent = ref(null);
    watchEffect(async () => {
      var _a;
      const clientPlugin = clientSupportPlugins[(_a = props.story.file) == null ? void 0 : _a.supportPluginId];
      if (clientPlugin) {
        const pluginModule = await clientPlugin();
        mountComponent.value = markRaw(pluginModule.MountStory);
      }
    });
    return (_ctx, _cache) => {
      return mountComponent.value ? (openBlock(), createBlock(resolveDynamicComponent(mountComponent.value), mergeProps({
        key: 0,
        class: "histoire-generic-mount-story",
        story: _ctx.story
      }, _ctx.$attrs), null, 16, ["story"])) : createCommentVNode("", true);
    };
  }
});
export {
  __vitePreload as _,
  tree as a,
  _sfc_main as b,
  customLogos as c,
  clientSupportPlugins as d,
  base as e,
  files as f,
  histoireConfig as h,
  isDark as i,
  mapFile as m,
  router as r,
  toggleDark as t
};

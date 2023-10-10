import { _ as __vitePreload, Y as defineAsyncComponent, Z as createRouter, v as histoireConfig, $ as createWebHistory, a0 as createWebHashHistory, a1 as markRaw, K as reactive, d as defineComponent, r as ref, a2 as watchEffect, o as openBlock, q as createBlock, a3 as mergeProps, a4 as resolveDynamicComponent, h as createCommentVNode } from "./vendor-111ef619.js";
const Comp0 = defineAsyncComponent(() => __vitePreload(() => import("./v-btn.story-1d14c2f9.js"), true ? ["assets/v-btn.story-1d14c2f9.js","assets/vendor-111ef619.js"] : void 0));
const Comp1 = defineAsyncComponent(() => __vitePreload(() => import("./vendor-111ef619.js").then((n) => n.aL), true ? [] : void 0));
let files = [
  { "id": "src-components-v-btn-story-vue", "path": ["v-btn"], "filePath": "src/components/v-btn.story.vue", "story": { "id": "src-components-v-btn-story-vue", "title": "v-btn", "group": "design-system/vuetify", "layout": { "type": "single", "iframe": true }, "docsOnly": false, "variants": [{ "id": "_default", "title": "default" }] }, "supportPluginId": "vue3", "index": 0, component: Comp0, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_src-components-v-btn-story-vue-4c408d00.js"), true ? [] : void 0) },
  { "id": "vuetify", "path": ["Vuetify"], "filePath": "/development/plustime/histoire-vuetify-tokens/sandbox/node_modules/.histoire/plugins/vuetify-tokens/Vuetify.story.vue", "story": { "id": "vuetify", "title": "Vuetify", "group": "design-system", "layout": { "type": "single", "iframe": true }, "icon": "mdi:vuetify", "docsOnly": false, "variants": [{ "id": "vuetify-0", "title": "Material Colors", "icon": "mdi:palette" }, { "id": "vuetify-1", "title": "Text And Typography", "icon": "mdi:format-font" }, { "id": "vuetify-2", "title": "Border Radius", "icon": "mdi:border-all" }, { "id": "vuetify-3", "title": "Content", "icon": "mdi:view-grid-plus" }, { "id": "vuetify-4", "title": "Elevation", "icon": "mdi:box-shadow" }, { "id": "vuetify-5", "title": "Display", "icon": "mdi:monitor-screenshot" }, { "id": "vuetify-6", "title": "Float", "icon": "mdi:format-float-left" }, { "id": "vuetify-7", "title": "Overflow", "icon": "mdi:format-text-wrapping-overflow" }, { "id": "vuetify-8", "title": "Sizing", "icon": "mdi:image-size-select-small" }, { "id": "vuetify-9", "title": "Spacing", "icon": "mdi:space-invaders" }] }, "supportPluginId": "vue3", "index": 1, component: Comp1, source: () => __vitePreload(() => import("./__resolved__virtual_story-source_vuetify-6b61c117.js"), true ? [] : void 0) }
];
let tree = [{ "group": true, "id": "design-system", "title": "Design System", "children": [{ "title": "Vuetify", "index": 1 }] }, { "title": "v-btn", "index": 0 }];
const base = "/";
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
      component: () => __vitePreload(() => import("./HomeView.vue-8ebe8b46.js"), true ? ["assets/HomeView.vue-8ebe8b46.js","assets/vendor-111ef619.js"] : void 0)
    },
    {
      path: "/story/:storyId",
      name: "story",
      component: () => __vitePreload(() => import("./StoryView.vue-fb58f63e.js"), true ? ["assets/StoryView.vue-fb58f63e.js","assets/vendor-111ef619.js","assets/story-e819ca7a.js","assets/MobileOverlay.vue2-1d1b9cb4.js","assets/BaseEmpty.vue-70bf3421.js","assets/state-d9237e49.js","assets/events-f17e9831.js"] : void 0)
    }
  ]
});
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
  "vanilla": () => __vitePreload(() => import("./vendor-111ef619.js").then((n) => n.aM), true ? [] : void 0),
  "vue3": () => __vitePreload(() => import("./vendor-111ef619.js").then((n) => n.aN), true ? [] : void 0)
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
  _sfc_main as _,
  base as b,
  clientSupportPlugins as c,
  files as f,
  mapFile as m,
  router as r,
  tree as t
};

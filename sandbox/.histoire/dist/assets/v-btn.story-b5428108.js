import { ax as _export_sfc, ay as ref, az as resolveComponent, aA as openBlock, aB as createBlock, aC as withCtx, aD as logEvent, aE as createVNode, aF as createTextVNode, aG as toDisplayString, aH as VBtn } from "./vendor-3c4078ee.js";
const _sfc_main = {
  __name: "v-btn.story",
  setup(__props, { expose: __expose }) {
    __expose();
    const text = ref("Click me!");
    const __returned__ = { text, ref, get logEvent() {
      return logEvent;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_HstText = resolveComponent("HstText");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, null, {
    controls: withCtx(() => [
      createVNode(_component_HstText, {
        modelValue: $setup.text,
        "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.text = $event),
        title: "Default slot"
      }, null, 8, ["modelValue"])
    ]),
    default: withCtx(() => [
      createVNode(VBtn, {
        onClick: _cache[0] || (_cache[0] = ($event) => $setup.logEvent("click", $event))
      }, {
        default: withCtx(() => [
          createTextVNode(
            toDisplayString($setup.text),
            1
            /* TEXT */
          )
        ]),
        _: 1
        /* STABLE */
      })
    ]),
    _: 1
    /* STABLE */
  });
}
_sfc_main.__file = "src/components/v-btn.story.vue";
const vBtn_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/development/plustime/histoire-vuetify-tokens/sandbox/src/components/v-btn.story.vue"]]);
export {
  vBtn_story as default
};

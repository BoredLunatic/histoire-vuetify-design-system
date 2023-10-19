import { defineComponent as f, computed as b, openBlock as t, createElementBlock as n, Fragment as m, createElementVNode as k, normalizeClass as u, toDisplayString as o, unref as F, ref as h, watchEffect as x, renderList as p, createBlock as v, createCommentVNode as _, resolveComponent as $, resolveDynamicComponent as w, withCtx as j, createTextVNode as L, createVNode as N, withDirectives as E, vShow as P } from "vue";
import { t as H } from "./helper-3cde6550.js";
const T = { class: "mt-2 info" }, U = /* @__PURE__ */ f({
  __name: "VariantControlPlayground",
  props: {
    type: {},
    model: {},
    sample: {},
    classes: {}
  },
  setup(c) {
    const e = c, l = b(() => {
      let s = {};
      return typeof e.classes == "string" && (s[e.classes] = !0), e.type === "class" && typeof e.model == "string" && (s[e.model] = !0), s;
    });
    return (s, r) => (t(), n(m, null, [
      k("div", {
        class: u(l.value)
      }, o(e.sample), 3),
      k("div", T, o(F(H)(e.type)) + ": " + o(e.model), 1)
    ], 64));
  }
}), q = { class: "mt-2 info" }, A = /* @__PURE__ */ f({
  __name: "ClassVariantLoader",
  props: {
    variants: {},
    text: {},
    classes: {},
    inline: { type: Boolean },
    state: {}
  },
  setup(c) {
    const e = c, l = h(e.state ?? {});
    return x(() => l.value = e.state ?? {}), (s, r) => (t(!0), n(m, null, p(s.variants, (a, y) => (t(), n("div", {
      key: y,
      class: u(["ma-4 pa-4", s.inline ? "d-inline-block" : ""])
    }, [
      (t(!0), n(m, null, p(a.duplicate ?? 1, (i) => (t(), n("div", {
        key: i,
        class: u(["ma-4", s.inline ? "d-inline-block" : ""])
      }, [
        k("div", {
          class: u(a.classes + " " + s.classes)
        }, o(a[s.text] ?? l.value[s.text]), 3),
        k("div", q, "Class: " + o(a.classes), 1)
      ], 2))), 128))
    ], 2))), 128));
  }
}), G = /* @__PURE__ */ k("div", { class: "text-caption" }, "Base Color", -1), I = { class: "font-italic" }, J = /* @__PURE__ */ f({
  __name: "ColorVariantLoader",
  props: {
    variants: {},
    text: {},
    classes: {},
    state: {}
  },
  setup(c) {
    const e = c, l = h(e.state ?? {});
    return x(() => l.value = e.state ?? {}), (s, r) => (t(!0), n(m, null, p(s.variants, (a, y) => (t(), n("div", {
      key: y,
      class: "pa-4 w-50 d-inline-block"
    }, [
      k("div", {
        class: u(s.classes + " bg-" + a.name)
      }, [
        G,
        k("div", I, o(a[s.text]), 1)
      ], 2),
      (t(!0), n(m, null, p(a.lighten === !1 ? 0 : a.lighten, (i) => (t(), n("div", {
        key: "l" + i,
        class: u(["${variant.classes ? `${variant.classes}` : ``}", s.classes + " bg-" + a.name + "-lighten-" + i.toString()])
      }, o(a.name + "-lighten-" + i.toString()), 3))), 128)),
      (t(!0), n(m, null, p(a.darken === !1 ? 0 : a.darken, (i) => (t(), n("div", {
        key: "d" + i,
        class: u(s.classes + " bg-" + a.name + "-darken-" + i.toString())
      }, o(a.name + "-darken-" + i.toString()), 3))), 128)),
      (t(!0), n(m, null, p(a.accent === !1 ? 0 : a.accent, (i) => (t(), n("div", {
        key: "a" + i,
        class: u(s.classes + " bg-" + a.name + "-accent-" + i.toString())
      }, o(a.name + "-accent-" + i.toString()), 3))), 128))
    ]))), 128));
  }
}), K = ["target", "href"], D = /* @__PURE__ */ f({
  __name: "VariantLink",
  props: {
    text: {},
    blank: { type: Boolean },
    url: {},
    classes: {}
  },
  setup(c) {
    const e = c, l = b(() => e.blank ? "_blank" : "");
    return (s, r) => (t(), n("a", {
      class: u(e.classes),
      target: l.value,
      href: e.url
    }, o(e.text), 11, K));
  }
}), M = /* @__PURE__ */ f({
  __name: "DisplayVariantLoader",
  props: {
    variants: {},
    classes: {},
    link: {}
  },
  setup(c) {
    const e = c;
    return (l, s) => (t(), n("div", {
      class: u(l.classes)
    }, [
      e.link !== void 0 ? (t(), v(D, {
        key: 0,
        text: e.link.text,
        url: e.link.url,
        blank: e.link.blank ?? !1,
        classes: e.link.classes ?? ""
      }, null, 8, ["text", "url", "blank", "classes"])) : _("", !0),
      (t(!0), n(m, null, p(e.variants, (r, a) => (t(), n("div", {
        key: a,
        class: "mt-2 info"
      }, o(r), 1))), 128))
    ], 2));
  }
}), Q = /* @__PURE__ */ f({
  __name: "ContainerizedLoader",
  props: {
    component: {},
    states: {},
    state: {},
    builder: {}
  },
  setup(c) {
    const e = c, l = h(e.state ?? {}), s = h(e.component);
    x(() => l.value = e.state ?? {});
    const r = b(() => e.states.map((i) => l.value[i])), a = b(() => e.builder === void 0 ? null : new Function(...e.builder.args, e.builder.body)(...r.value)), y = b(() => {
      let i = {};
      return a.value !== null && (i[a.value] = !0), s.value.classes !== void 0 && s.value.classes !== "" && (i[s.value.classes ?? ""] = !0), i;
    });
    return (i, V) => {
      const C = $("containerized-loader", !0);
      return t(), v(w(s.value.component), {
        class: u(y.value)
      }, {
        default: j(() => [
          s.value.children && s.value.children.length > 0 ? (t(!0), n(m, { key: 0 }, p(s.value.children, (g, d) => (t(), v(C, {
            key: d,
            component: g,
            states: g.states ?? [],
            builder: g.builder,
            state: l.value
          }, null, 8, ["component", "states", "builder", "state"]))), 128)) : (t(), n(m, { key: 1 }, [
            L(o(s.value.content ?? ""), 1)
          ], 64))
        ]),
        _: 1
      }, 8, ["class"]);
    };
  }
}), R = { class: "mt-2 info" }, W = /* @__PURE__ */ f({
  __name: "ComponentVariantLoader",
  props: {
    variants: {},
    text: {},
    classes: {},
    inline: { type: Boolean },
    containerized: { type: Boolean },
    state: {}
  },
  setup(c) {
    const e = c, l = h(e.state ?? {});
    return x(() => l.value = e.state ?? {}), (s, r) => (t(), n("div", null, [
      s.containerized ? (t(), v(Q, {
        key: 0,
        component: s.variants[0],
        states: s.variants[0].states ?? [],
        builder: s.variants[0].builder,
        state: l.value
      }, null, 8, ["component", "states", "builder", "state"])) : (t(!0), n(m, { key: 1 }, p(s.variants, (a, y) => (t(), n("div", {
        key: y,
        class: "ma-4 pa-4"
      }, [
        k("div", {
          class: u(s.classes)
        }, [
          (t(), v(w(a.component), {
            class: u(s.classes + " " + a.classes)
          }, {
            default: j(() => [
              L(o(a.content), 1)
            ]),
            _: 2
          }, 1032, ["class"]))
        ], 2),
        k("div", R, "Component: " + o(a.title), 1)
      ]))), 128))
    ]));
  }
}), X = { key: 0 }, Y = /* @__PURE__ */ f({
  __name: "VariantDescription",
  props: {
    text: {},
    classes: {},
    divider: {},
    link: {}
  },
  setup(c) {
    const e = c;
    return (l, s) => {
      const r = $("v-divider");
      return e.text !== "" || e.link !== void 0 ? (t(), n("div", X, [
        e.text ? (t(), n("div", {
          key: 0,
          class: u(e.classes)
        }, o(e.text), 3)) : _("", !0),
        N(D, {
          text: e.link.text,
          url: e.link.url,
          blank: e.link.blank ?? !1,
          classes: e.link.classes ?? ""
        }, null, 8, ["text", "url", "blank", "classes"]),
        e.divider.show ? (t(), v(r, {
          key: 1,
          class: u(e.divider.classes)
        }, null, 8, ["class"])) : _("", !0)
      ])) : _("", !0);
    };
  }
}), Z = {
  key: 0,
  class: "ma-4 pa-4"
}, ee = { class: "ma-4 pa-4" }, se = /* @__PURE__ */ f({
  __name: "VuetifyVariant",
  props: {
    discriminator: {},
    title: {},
    classes: {},
    text: {},
    inline: { type: Boolean },
    state: {},
    playground: {},
    description: {},
    controls: {},
    variants: {},
    containerized: { type: Boolean }
  },
  setup(c) {
    const e = c, l = h(e.state ?? {});
    x(() => l.value = e.state ?? {});
    const s = b(
      () => {
        var r, a;
        return (((a = (r = e.controls) == null ? void 0 : r.filter((y) => y.playground !== void 0)) == null ? void 0 : a.length) ?? 0) > 0;
      }
    );
    return (r, a) => {
      var i, V, C, g;
      const y = $("v-divider");
      return t(), n(m, null, [
        s.value ? (t(), n("div", Z, [
          k("div", {
            class: u(e.playground.classes)
          }, o(e.playground.title), 3),
          (t(!0), n(m, null, p(r.controls, (d, O) => {
            var S, z, B;
            return E((t(), v(U, {
              key: O,
              type: ((S = d == null ? void 0 : d.playground) == null ? void 0 : S.type) ?? "",
              sample: l.value[((z = d == null ? void 0 : d.playground) == null ? void 0 : z.sample) ?? "sample"],
              classes: (B = d == null ? void 0 : d.playground) == null ? void 0 : B.classes,
              model: l.value[d == null ? void 0 : d.model]
            }, null, 8, ["type", "sample", "classes", "model"])), [
              [P, d.playground ?? !1]
            ]);
          }), 128))
        ])) : _("", !0),
        s.value && e.playground.divider.show ? (t(), v(y, {
          key: 1,
          class: u(e.playground.divider.classes)
        }, null, 8, ["class"])) : _("", !0),
        k("div", ee, [
          k("div", {
            class: u(e.title.classes)
          }, o(e.title.text), 3),
          e.description !== void 0 ? (t(), v(Y, {
            key: 0,
            link: ((i = e.description) == null ? void 0 : i.link) ?? void 0,
            text: ((V = e.description) == null ? void 0 : V.text) ?? "",
            classes: ((C = e.description) == null ? void 0 : C.classes) ?? "",
            divider: ((g = e.description) == null ? void 0 : g.divider) ?? { show: !1 }
          }, null, 8, ["link", "text", "classes", "divider"])) : _("", !0),
          r.discriminator === "color" ? (t(), v(J, {
            key: 1,
            text: (e == null ? void 0 : e.text) ?? "name",
            variants: (e == null ? void 0 : e.variants) ?? [],
            classes: (e == null ? void 0 : e.classes) ?? "",
            inline: (e == null ? void 0 : e.inline) ?? !1,
            state: l.value
          }, null, 8, ["text", "variants", "classes", "inline", "state"])) : _("", !0),
          r.discriminator === "class" ? (t(), v(A, {
            key: 2,
            variants: (e == null ? void 0 : e.variants) ?? [],
            text: (e == null ? void 0 : e.text) ?? "title",
            classes: (e == null ? void 0 : e.classes) ?? "",
            inline: (e == null ? void 0 : e.inline) ?? !1,
            state: l.value
          }, null, 8, ["variants", "text", "classes", "inline", "state"])) : _("", !0),
          r.discriminator === "display" ? (t(), v(M, {
            key: 3,
            variants: (e == null ? void 0 : e.variants) ?? [],
            text: (e == null ? void 0 : e.text) ?? "title",
            classes: (e == null ? void 0 : e.classes) ?? "",
            inline: (e == null ? void 0 : e.inline) ?? !1,
            state: l.value
          }, null, 8, ["variants", "text", "classes", "inline", "state"])) : _("", !0),
          r.discriminator === "component" ? (t(), v(W, {
            key: 4,
            variants: (e == null ? void 0 : e.variants) ?? [],
            text: (e == null ? void 0 : e.text) ?? "title",
            containerized: (e == null ? void 0 : e.containerized) ?? !1,
            classes: (e == null ? void 0 : e.classes) ?? "",
            inline: (e == null ? void 0 : e.inline) ?? !1,
            state: l.value
          }, null, 8, ["variants", "text", "containerized", "classes", "inline", "state"])) : _("", !0)
        ])
      ], 64);
    };
  }
}), ne = {
  install(c) {
    c.component("VuetifyVariant", se);
  }
};
export {
  ne as default
};

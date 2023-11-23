import u from "fs";
import { a as d } from "./helper-3cde6550.js";
function c(s, a, t = ".", e) {
  if (!r(a))
    return c(s, {}, t, e);
  const l = Object.assign({}, a);
  for (const i in s) {
    if (i === "__proto__" || i === "constructor")
      continue;
    const o = s[i];
    o != null && (e && e(l, i, o, t) || (Array.isArray(o) && Array.isArray(l[i]) ? l[i] = [...o, ...l[i]] : r(o) && r(l[i]) ? l[i] = c(
      o,
      l[i],
      (t ? `${t}.` : "") + i.toString(),
      e
    ) : l[i] = o));
  }
  return l;
}
function r(s) {
  if (s === null || typeof s != "object")
    return !1;
  const a = Object.getPrototypeOf(s);
  return (a === null || a === Object.prototype || Object.getPrototypeOf(a) === null) && !(Symbol.toStringTag in s) && !(Symbol.iterator in s);
}
function p(s) {
  return (...a) => (
    // eslint-disable-next-line unicorn/no-array-reduce
    a.reduce((t, e) => c(t, e, "", s), {})
  );
}
const y = p(), h = {
  blueprint: {
    autoPropsDisabled: !0,
    discriminator: "display",
    // TODO: sort out blueprint / display variant.
    show: !1,
    order: 0,
    icon: "mdi:fingerprint",
    classes: "bg-grey-darken-4 pa-4 display-block rounded-lg",
    state: [],
    description: {
      classes: "my-4 htw-text-gray-900 dark:htw-text-gray-100",
      divider: {
        show: !0,
        classes: "my-4"
      },
      text: "Vuetify blueprints are a new way to pre-configure your entire application with a completely unique design system.",
      link: {
        url: "https://vuetifyjs.com/en/features/blueprints/",
        text: "More information",
        blank: !0,
        classes: "my-4 htw-text-gray-900 dark:htw-text-gray-100 font-weight-bold"
      }
    },
    title: {
      classes: "mb-2 text-h4 htw-text-gray-900 dark:htw-text-gray-100",
      text: "Blueprint"
    },
    variable: "hasBlueprint",
    variants: [
      {
        title: "Material Design 2",
        link: {
          url: "https://m2.material.io/",
          text: "Material Design 2",
          classes: "text-white",
          blank: !0
        },
        variants: [{ title: "release", value: "2017" }]
      }
    ]
  },
  "material-colors": {
    autoPropsDisabled: !0,
    discriminator: "color",
    description: {
      classes: "my-4 htw-text-gray-900 dark:htw-text-gray-100",
      divider: {
        show: !0,
        classes: "my-4"
      },
      text: "Each color from the specification gets converted to a background and text variant for styling within your application through a class, e.g. bg-red or text-red",
      link: {
        url: "https://vuetifyjs.com/en/styles/colors/",
        text: "More information",
        blank: !0,
        classes: "my-4 htw-text-gray-900 dark:htw-text-gray-100 font-weight-bold"
      }
    },
    show: !0,
    order: 1,
    icon: "mdi:palette",
    classes: "pa-4 display-block",
    text: "name",
    inline: !0,
    state: ["materialColors: 'red'"],
    title: {
      classes: "mb-2 text-h4 htw-text-gray-900 dark:htw-text-gray-100",
      text: "Material Colors"
    },
    variants: [
      { name: "primary", darken: 1, lighten: 0, accent: 0 },
      { name: "secondary", darken: 1, lighten: 0, accent: 0 },
      { name: "success", darken: 0, lighten: 0, accent: 0 },
      { name: "error", darken: 0, lighten: 0, accent: 0 },
      { name: "warning", darken: 0, lighten: 0, accent: 0 },
      { name: "info", darken: 0, lighten: 0, accent: 0 },
      { name: "red", darken: 4, lighten: 5, accent: 4 },
      { name: "pink", darken: 4, lighten: 5, accent: 4 },
      { name: "purple", darken: 4, lighten: 5, accent: 4 },
      { name: "deep-purple", darken: 4, lighten: 5, accent: 4 },
      { name: "indigo", darken: 4, lighten: 5, accent: 4 },
      { name: "blue", darken: 4, lighten: 5, accent: 4 },
      { name: "light-blue", darken: 4, lighten: 5, accent: 4 },
      { name: "cyan", darken: 4, lighten: 5, accent: 4 },
      { name: "teal", darken: 4, lighten: 5, accent: 4 },
      { name: "green", darken: 4, lighten: 5, accent: 4 },
      { name: "light-green", darken: 4, lighten: 5, accent: 4 },
      { name: "lime", darken: 4, lighten: 5, accent: 4 },
      { name: "yellow", darken: 4, lighten: 5, accent: 4 },
      { name: "amber", darken: 4, lighten: 5, accent: 4 },
      { name: "orange", darken: 4, lighten: 5, accent: 4 },
      { name: "deep-orange", darken: 4, lighten: 5, accent: 4 },
      { name: "brown", darken: 4, lighten: 5, accent: 0 },
      { name: "blue-grey", darken: 4, lighten: 5, accent: 0 },
      { name: "grey", darken: 4, lighten: 5, accent: 0 }
    ]
  },
  typography: {
    autoPropsDisabled: !0,
    discriminator: "class",
    show: !0,
    order: 2,
    icon: "mdi:format-font",
    classes: "bg-grey-darken-4 pa-4 display-block rounded-lg",
    description: {
      classes: "my-4 htw-text-gray-900 dark:htw-text-gray-100",
      divider: {
        show: !0,
        classes: "my-4"
      },
      text: "Text size, alignment, wrapping, overflow, transforms and more. By default, Vuetify uses the Material Design specification Roboto Font",
      link: {
        url: "https://vuetifyjs.com/en/styles/text-and-typography/",
        text: "More information",
        blank: !0,
        classes: "my-4 htw-text-gray-900 dark:htw-text-gray-100 font-weight-bold"
      }
    },
    state: ["typography: 'text-h1'"],
    text: "title",
    inline: !1,
    title: {
      classes: "mb-2 text-h4 htw-text-gray-900 dark:htw-text-gray-100",
      text: "Text and Typography"
    },
    variants: [
      { title: "Heading 1", classes: "text-h1" },
      { title: "Heading 2", classes: "text-h2" },
      { title: "Heading 3", classes: "text-h3" },
      { title: "Heading 4", classes: "text-h4" },
      { title: "Heading 5", classes: "text-h5" },
      { title: "Heading 6", classes: "text-h6" },
      { title: "Subtitle 1", classes: "text-subtitle-1" },
      { title: "Subtitle 2", classes: "text-subtitle-2" },
      { title: "Body 1", classes: "text-body-1" },
      { title: "Body 2", classes: "text-body-2" },
      { title: "Button", classes: "text-button" },
      { title: "Caption", classes: "text-caption" },
      { title: "Overline", classes: "text-overline" },
      { title: "Font Weight Black", classes: "font-weight-black" },
      { title: "Font Weight Bold", classes: "font-weight-bold" },
      { title: "Font Weight Medium", classes: "font-weight-medium" },
      { title: "Font Weight Regular", classes: "font-weight-regular" },
      { title: "Font Weight Light", classes: "font-weight-light" },
      { title: "Font Weight Thin", classes: "font-weight-thin" },
      { title: "Font Italic", classes: "font-italic" },
      { title: "Text Left", classes: "text-left" },
      { title: "Text Right", classes: "text-right" },
      { title: "Text Center", classes: "text-center" },
      { title: "Text Justify", classes: "text-justify" },
      { title: "Text Start", classes: "text-start" },
      { title: "Text End", classes: "text-end" },
      { title: "Text Decoration None", classes: "text-decoration-none" },
      { title: "Text Decoration Line Through", classes: "text-decoration-line-through" },
      { title: "Text Decoration Overline", classes: "text-decoration-overline" },
      { title: "Text Decoration Underline", classes: "text-decoration-underline" },
      { title: "Text High Emphasis", classes: "text-high-emphasis" },
      { title: "Text Medium Emphasis", classes: "text-medium-emphasis" },
      { title: "Text Disabled", classes: "text-disabled" },
      { title: "Text Lowercase", classes: "text-lowercase" },
      { title: "Text Uppercase", classes: "text-uppercase" },
      { title: "Text Capitalize", classes: "text-capitalize" },
      { title: "Text No Wrap", classes: "text-no-wrap" },
      { title: "Text Truncate", classes: "text-truncate" }
    ],
    controls: [
      {
        component: "v-autocomplete",
        model: "typography",
        label: "Typography Classes",
        itemsTitle: "title",
        itemsValue: "classes",
        playground: {
          type: "class",
          sample: "sample",
          classes: "bg-grey-darken-4 pa-4 display-block rounded-lg"
        }
      }
    ]
  },
  "border-radius": {
    autoPropsDisabled: !0,
    discriminator: "class",
    description: {
      classes: "my-4 htw-text-gray-900 dark:htw-text-gray-100",
      divider: {
        show: !0,
        classes: "my-4"
      },
      text: "Use border utilities to quickly style the border-radius of any element.",
      link: {
        url: "https://vuetifyjs.com/en/styles/border-radius/",
        text: "More information",
        blank: !0,
        classes: "my-4 htw-text-gray-900 dark:htw-text-gray-100 font-weight-bold"
      }
    },
    show: !0,
    order: 3,
    icon: "mdi:border-all",
    classes: "bg-grey-darken-4 pa-4 display-square pt-10 text-center",
    state: ["borderRadius: 'rounded-0'"],
    text: "title",
    inline: !0,
    title: {
      classes: "mb-2 text-h4 htw-text-gray-900 dark:htw-text-gray-100",
      text: "Border Radius"
    },
    variants: [
      { title: "Rounded 0", classes: "rounded-0" },
      { title: "Rounded SM", classes: "rounded-sm" },
      { title: "Rounded", classes: "rounded" },
      { title: "Rounded LG", classes: "rounded-lg" },
      { title: "Rounded XL", classes: "rounded-xl" },
      { title: "Rounded Pill", classes: "rounded-pill" },
      { title: "Rounded Circle", classes: "rounded-circle" },
      { title: "Rounded Shaped", classes: "rounded-shaped" }
    ],
    controls: [
      {
        component: "v-autocomplete",
        model: "borderRadius",
        label: "Border Radius Classes",
        itemsTitle: "title",
        itemsValue: "classes",
        playground: {
          type: "class",
          classes: "bg-grey-darken-4 pa-4 display-block"
        }
      }
    ]
  },
  content: {
    autoPropsDisabled: !0,
    discriminator: "component",
    description: {
      classes: "my-4 htw-text-gray-900 dark:htw-text-gray-100",
      divider: {
        show: !0,
        classes: "my-4"
      },
      text: "Vuetify has custom styling for multiple standard elements.",
      link: {
        url: "https://vuetifyjs.com/en/styles/content/",
        text: "More information",
        blank: !0,
        classes: "my-4 htw-text-gray-900 dark:htw-text-gray-100 font-weight-bold"
      }
    },
    show: !0,
    order: 4,
    icon: "mdi:view-grid-plus",
    classes: "bg-grey-darken-4 pa-4 display-block rounded-lg",
    text: "",
    inline: !1,
    state: ["content: 'rounded-0'"],
    title: {
      classes: "mb-2 text-h4 htw-text-gray-900 dark:htw-text-gray-100",
      text: "Content"
    },
    variants: [
      {
        title: "Block Quote",
        component: "blockquote",
        classes: "",
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
      },
      {
        title: "Paragraph",
        component: "p",
        classes: "",
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum maiores modi quidem veniam, expedita quis laboriosam, ullam facere adipisci, iusto, voluptate sapiente corrupti asperiores rem nemo numquam fuga ab at."
      },
      {
        title: "Code",
        component: "code",
        classes: "",
        content: "<div>This is a code example.</div>"
      },
      { title: "Variable", component: "var", classes: "", content: "v" }
    ]
  },
  display: {
    autoPropsDisabled: !0,
    discriminator: "class",
    description: {
      classes: "my-4 htw-text-gray-900 dark:htw-text-gray-100",
      divider: {
        show: !0,
        classes: "my-4"
      },
      text: "The display helpers allow you to control the display of content.",
      link: {
        url: "https://vuetifyjs.com/en/styles/display/",
        text: "More information",
        blank: !0,
        classes: "my-4 htw-text-gray-900 dark:htw-text-gray-100 font-weight-bold"
      }
    },
    icon: "mdi:monitor-screenshot",
    show: !0,
    order: 6,
    classes: "bg-grey-darken-4 pa-4 display-square rounded-lg text-center",
    state: ["display: 'd-inline-block'"],
    text: "title",
    inline: !0,
    title: {
      classes: "mb-2 text-h4 htw-text-gray-900 dark:htw-text-gray-100",
      text: "Display"
    },
    variants: [
      { title: "Display Inline Block", classes: "d-inline-block", duplicate: 3 },
      { title: "Display Inline", classes: "d-inline" },
      { title: "Display Block", classes: "d-block" },
      { title: "Display Block Breakpoint SM", classes: "d-block d-sm-inline-block" },
      { title: "Display Block Breakpoint MD", classes: "d-block d-md-inline-block" },
      { title: "Display Block Breakpoint LG", classes: "d-block d-lg-inline-block" },
      { title: "Display Block Breakpoint XL", classes: "d-block d-xl-inline-block" },
      { title: "Display Block Breakpoint XXL", classes: "d-block d-xxl-inline-block" },
      { title: "Hidden On All", classes: "d-none" },
      { title: "Hidden Only On XS", classes: "d-none d-sm-block" },
      { title: "Hidden Only On SM", classes: "d-none d-md-block" },
      { title: "Hidden Only On MD", classes: "d-none d-lg-block" },
      { title: "Hidden Only On LG", classes: "d-none d-xl-block" },
      { title: "Hidden Only On XL", classes: "d-none d-xxl-block" },
      { title: "Hidden Only On XXL", classes: "d-none" },
      { title: "Visible On All", classes: "d-block" },
      { title: "Visible Only On XS", classes: "d-block d-sm-none" },
      { title: "Visible Only On SM", classes: "d-none d-sm-block d-md-none" },
      { title: "Visible Only On MD", classes: "d-none d-md-block d-lg-none" },
      { title: "Visible Only On LG", classes: "d-none d-lg-block d-xl-none" },
      { title: "Visible Only On XL", classes: "d-none d-xl-block d-xxl-none" },
      { title: "Visible Only On XXL", classes: "d-none d-xxl-block" }
    ],
    controls: [
      {
        component: "v-autocomplete",
        model: "display",
        label: "Display",
        itemsTitle: "title",
        itemsValue: "classes",
        playground: {
          type: "class",
          sample: "sample",
          classes: "bg-grey-darken-4 pa-4 rounded-lg"
        }
      }
    ]
  },
  elevation: {
    autoPropsDisabled: !0,
    discriminator: "class",
    description: {
      classes: "my-4 htw-text-gray-900 dark:htw-text-gray-100",
      divider: {
        show: !0,
        classes: "my-4"
      },
      text: "The elevation helpers allow you to control relative depth, or distance, between two surfaces along the z-axis.",
      link: {
        url: "https://vuetifyjs.com/en/styles/elevation/",
        text: "More information",
        blank: !0,
        classes: "my-4 htw-text-gray-900 dark:htw-text-gray-100 font-weight-bold"
      }
    },
    show: !0,
    order: 5,
    icon: "mdi:box-shadow",
    classes: "bg-grey-darken-4 pa-4 display-square d-line-block rounded-lg text-center",
    state: ["elevation: 'elevation-1'"],
    text: "item.title",
    inline: !0,
    title: {
      classes: "mb-2 text-h4 htw-text-gray-900 dark:htw-text-gray-100",
      text: "Elevation"
    },
    variants: [
      { title: "Elevation 0", classes: "elevation-0" },
      { title: "Elevation 1", classes: "elevation-1" },
      { title: "Elevation 2", classes: "elevation-2" },
      { title: "Elevation 3", classes: "elevation-3" },
      { title: "Elevation 4", classes: "elevation-4" },
      { title: "Elevation 5", classes: "elevation-5" },
      { title: "Elevation 6", classes: "elevation-6" },
      { title: "Elevation 7", classes: "elevation-7" },
      { title: "Elevation 8", classes: "elevation-8" },
      { title: "Elevation 9", classes: "elevation-9" },
      { title: "Elevation 10", classes: "elevation-10" },
      { title: "Elevation 11", classes: "elevation-11" },
      { title: "Elevation 12", classes: "elevation-12" },
      { title: "Elevation 13", classes: "elevation-13" },
      { title: "Elevation 14", classes: "elevation-14" },
      { title: "Elevation 15", classes: "elevation-15" },
      { title: "Elevation 16", classes: "elevation-16" },
      { title: "Elevation 17", classes: "elevation-17" },
      { title: "Elevation 18", classes: "elevation-18" },
      { title: "Elevation 19", classes: "elevation-19" },
      { title: "Elevation 20", classes: "elevation-20" },
      { title: "Elevation 21", classes: "elevation-21" },
      { title: "Elevation 22", classes: "elevation-22" },
      { title: "Elevation 23", classes: "elevation-23" },
      { title: "Elevation 24", classes: "elevation-24" }
      // { title:'Elevation 25', classes:'elevation-25' },
    ],
    controls: [
      {
        component: "v-autocomplete",
        model: "elevation",
        label: "Elevation",
        itemsTitle: "title",
        itemsValue: "classes",
        playground: {
          type: "class",
          sample: "sample",
          classes: "bg-grey-darken-4 pa-4 rounded-lg"
        }
      }
    ]
  },
  float: {
    autoPropsDisabled: !0,
    discriminator: "class",
    description: {
      classes: "my-4 htw-text-gray-900 dark:htw-text-gray-100",
      divider: {
        show: !0,
        classes: "my-4"
      },
      text: "Applies a custom float across any breakpoint with responsive float utilities.",
      link: {
        url: "https://vuetifyjs.com/en/styles/float/",
        text: "More information",
        blank: !0,
        classes: "my-4 htw-text-gray-900 dark:htw-text-gray-100 font-weight-bold"
      }
    },
    show: !0,
    order: 7,
    icon: "mdi:format-float-left",
    // icon: 'mdi:arm-flex',
    classes: "bg-grey-darken-4 pa-4 display-square rounded-lg text-center",
    state: ["float: 'float-left'"],
    text: "item.title",
    inline: !1,
    title: {
      classes: "mb-2 text-h4 htw-text-gray-900 dark:htw-text-gray-100",
      text: "Float"
    },
    variants: [
      { title: "Float Left", classes: "float-left" },
      { title: "Float Right", classes: "float-right" },
      { title: "Float Start", classes: "float-start" },
      { title: "Float End", classes: "float-end" },
      { title: "Float None", classes: "float-none" },
      { title: "Float SM Left", classes: "float-sm-left" },
      { title: "Float SM Right", classes: "float-sm-right" },
      { title: "Float SM Start", classes: "float-sm-start" },
      { title: "Float SM End", classes: "float-sm-end" },
      { title: "Float SM None", classes: "float-sm-none" },
      { title: "Float MD Left", classes: "float-md-left" },
      { title: "Float MD Right", classes: "float-md-right" },
      { title: "Float MD Start", classes: "float-md-start" },
      { title: "Float MD End", classes: "float-md-end" },
      { title: "Float MD None", classes: "float-md-none" },
      { title: "Float LG Left", classes: "float-lg-left" },
      { title: "Float LG Right", classes: "float-lg-right" },
      { title: "Float LG Start", classes: "float-lg-start" },
      { title: "Float LG End", classes: "float-lg-end" },
      { title: "Float LG None", classes: "float-lg-none" },
      { title: "Float XL Left", classes: "float-xl-left" },
      { title: "Float XL Right", classes: "float-xl-right" },
      { title: "Float XL Start", classes: "float-xl-start" },
      { title: "Float XL End", classes: "float-xl-end" },
      { title: "Float XL None", classes: "float-xl-none" }
    ],
    controls: [
      {
        component: "v-autocomplete",
        model: "float",
        label: "Float",
        itemsTitle: "title",
        itemsValue: "classes",
        playground: {
          type: "class",
          sample: "sample",
          classes: "bg-grey-darken-4 pa-4 rounded-lg display-square "
        }
      }
    ]
  },
  overflow: {
    autoPropsDisabled: !0,
    discriminator: "class",
    description: {
      classes: "my-4 htw-text-gray-900 dark:htw-text-gray-100",
      divider: {
        show: !0,
        classes: "my-4"
      },
      text: "Configure how content overflows when it becomes out of container bounds.",
      link: {
        url: "https://vuetifyjs.com/en/styles/overflow/",
        text: "More information",
        blank: !0,
        classes: "my-4 htw-text-gray-900 dark:htw-text-gray-100 font-weight-bold"
      }
    },
    show: !0,
    order: 8,
    icon: "mdi:format-text-wrapping-overflow",
    classes: "bg-grey-darken-4 pa-4 display-square rounded-lg text-center",
    state: [
      "overflow: 'overflow-auto'",
      "overflowSample: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis facilis dicta esse molestias vero hic laudantium provident nisi eos quasi iusto alias sequi, aut aliquid voluptatibus commodi! Minima, eum voluptates?'"
    ],
    text: "overflowSample",
    inline: !0,
    title: {
      classes: "mb-2 text-h4 htw-text-gray-900 dark:htw-text-gray-100",
      text: "Overflow"
    },
    variants: [
      { title: "Overflow Auto", classes: "overflow-auto" },
      { title: "Overflow Hidden", classes: "overflow-hidden" },
      { title: "Overflow Visible", classes: "overflow-visible" },
      { title: "Overflow X Auto", classes: "overflow-x-auto force-nowrap" },
      { title: "Overflow X Hidden", classes: "overflow-x-hidden force-nowrap" },
      { title: "Overflow X Visible", classes: "overflow-x-visible force-nowrap" },
      { title: "Overflow Y Auto", classes: "overflow-y-auto" },
      { title: "Overflow Y Hidden", classes: "overflow-y-hidden" },
      { title: "Overflow Y Visible", classes: "overflow-y-visible" }
    ],
    controls: [
      {
        component: "v-autocomplete",
        model: "overflow",
        label: "Overflow",
        itemsTitle: "title",
        itemsValue: "classes",
        playground: {
          type: "class",
          sample: "overflowSample",
          classes: "bg-grey-darken-4 pa-4 rounded-lg display-square "
        }
      }
    ]
  },
  sizing: {
    autoPropsDisabled: !0,
    discriminator: "class",
    description: {
      classes: "my-4 htw-text-gray-900 dark:htw-text-gray-100",
      divider: {
        show: !0,
        classes: "my-4"
      },
      text: "Sizing utility classes are used to modify the dimensions of an element.",
      link: {
        url: "https://vuetifyjs.com/en/styles/sizing/",
        text: "More information",
        blank: !0,
        classes: "my-4 htw-text-gray-900 dark:htw-text-gray-100 font-weight-bold"
      }
    },
    show: !0,
    order: 9,
    icon: "mdi:image-size-select-small",
    classes: "bg-grey-darken-4 pa-4 display-square rounded-lg text-center",
    state: ["sizing: 'h-auto'"],
    text: "title",
    inline: !0,
    title: {
      classes: "mb-2 text-h4 htw-text-gray-900 dark:htw-text-gray-100",
      text: "Sizing"
    },
    variants: [
      { title: "Width Auto", classes: "w-auto" },
      { title: "Width 0", classes: "w-0" },
      { title: "Width 25", classes: "w-25" },
      { title: "Width 50", classes: "w-50" },
      { title: "Width 75", classes: "w-75" },
      { title: "Width 100", classes: "w-100" },
      { title: "Height Auto", classes: "h-auto" },
      { title: "Height 0", classes: "h-0" },
      { title: "Height 25", classes: "h-25" },
      { title: "Height 50", classes: "h-50" },
      { title: "Height 75", classes: "h-75" },
      { title: "Height 100", classes: "h-100" },
      { title: "Height Screen", classes: "h-screen" }
    ],
    controls: [
      {
        component: "v-autocomplete",
        model: "sizing",
        label: "Sizing",
        itemsTitle: "title",
        itemsValue: "classes",
        playground: {
          type: "class",
          sample: "sample",
          classes: "bg-grey-darken-4 pa-4 rounded-lg display-square "
        }
      }
    ]
  },
  spacing: {
    autoPropsDisabled: !0,
    discriminator: "component",
    description: {
      classes: "my-4 htw-text-gray-900 dark:htw-text-gray-100",
      divider: {
        show: !0,
        classes: "my-4"
      },
      text: "Update your layout without creating new classes.",
      link: {
        url: "https://vuetifyjs.com/en/styles/spacing/",
        text: "More information",
        blank: !0,
        classes: "my-4 htw-text-gray-900 dark:htw-text-gray-100 font-weight-bold"
      }
    },
    show: !0,
    order: 10,
    icon: "mdi:space-invaders",
    classes: "bg-orange-lighten-3",
    containerized: !0,
    text: "title",
    inline: !1,
    state: ["padding: 'a'", "paddingSize: 6", "margin: 'a'", "marginSize: 2"],
    title: {
      classes: "mb-2 text-h4 htw-text-gray-900 dark:htw-text-gray-100",
      text: "Spacing"
    },
    variables: [
      "      \n      const spacingDirections = ['t', 'b', 'l', 'r', 's', 'e', 'x', 'y', 'a']\n      const spacingAmounts = Array.from({ length: 17 }, (val, i) => `${i}`)\n      const spacingNegativeAmounts = Array.from({ length: 16 }, (val, i) => `n${i + 1}`)\n      const spacingDefaults = ['auto', ...spacingAmounts]\n      const spacingMarginAmounts = [...spacingDefaults, ...spacingNegativeAmounts]\n      "
    ],
    variants: [
      {
        title: "Container",
        component: "div",
        states: ["margin", "marginSize"],
        classes: "bg-orange-lighten-3 pa-0 ma-4 overflow-auto",
        children: [
          {
            title: "Parent",
            component: "div",
            states: ["margin", "marginSize"],
            builder: {
              args: ["direction", "size"],
              body: "return `m${direction}-${size}`"
            },
            classes: "elevation-4",
            children: [
              {
                title: "Child",
                component: "div",
                states: ["padding", "paddingSize"],
                builder: {
                  args: ["direction", "size"],
                  body: "return `p${direction}-${size}`"
                },
                classes: "bg-light-green-lighten-3 elevation-4",
                children: [
                  {
                    title: "Content",
                    component: "div",
                    classes: "bg-white text-center py-6",
                    content: "Use the controls on the right to try out the different spacing helpers."
                  }
                ]
              }
            ]
          }
        ]
      }
    ],
    controls: [
      {
        component: "v-autocomplete",
        model: "padding",
        label: "Padding",
        items: "spacingDirections"
      },
      {
        component: "v-autocomplete",
        model: "paddingSize",
        label: "Padding Size",
        items: "spacingDefaults"
      },
      {
        component: "v-autocomplete",
        model: "margin",
        label: "Margin",
        items: "spacingDirections"
      },
      {
        component: "v-autocomplete",
        model: "marginSize",
        label: "Margin Size",
        items: "spacingMarginAmounts"
      }
    ]
  }
}, f = {
  configFile: "",
  sample: "This is some sample text.",
  playground: {
    title: "Playground",
    classes: "mb-2 text-h4 htw-text-gray-900 dark:htw-text-gray-100",
    divider: {
      show: !0,
      classes: "ma-4"
    }
  },
  display: {
    icon: "mdi:vuetify",
    title: "Vuetify",
    group: "design-system",
    layout: { type: "single", iframe: !0 },
    responsiveDisabled: !1
  },
  templates: Object.fromEntries(
    Object.entries(h).sort((s, a) => s[1].order - a[1].order).filter((s) => s[1].show)
  )
};
function x(s, a) {
  let t = "<template #controls>";
  for (const e of a)
    t += `
      <div>
        <${e.component} 
          v-model="state.${e.model}" 
          label="${e.label}"
          :items='${e.items !== void 0 ? e.items : `${s}Data`}'
          ${e.itemsTitle !== void 0 ? `item-title="${e.itemsTitle}"` : ""}
          ${e.itemsValue !== void 0 ? `item-value="${e.itemsValue}"` : ""}
        />
      </div>
    `;
  return t += "</template>", t;
}
function w(s, a, t) {
  const e = d(t.title.text);
  return `
  <Variant
    icon="${t.icon}"
    title="${e}"
    :autoPropsDisabled="${t.autoPropsDisabled ?? !1}"
  >
    ${t.controls !== void 0 ? x(s, t.controls) : ""}
    <VuetifyVariant
      discriminator="${t.discriminator}"
      classes="${t.classes}"
      text="${t.text}"
      :title='${JSON.stringify(t.title)}'
      :inline="${(t == null ? void 0 : t.inline) ?? !1}"
      :description='${JSON.stringify(t.description ?? void 0)}'
      :controls='${JSON.stringify(t.controls ?? [])}'
      :variants='${JSON.stringify(t.variants ?? [])}'
      :playground='${JSON.stringify(a ?? [])}'
      :state="state"
      :containerized="${t.discriminator === "component" && t.containerized ? "true" : "false"}"
    />
  </Variant>`;
}
function b(s, a) {
  let t = [], e = [], l = [];
  const i = [];
  for (const o in s.templates) {
    const g = d(o).replaceAll(" ", "").replaceAll("-", ""), n = s.templates[o];
    if (!(n === void 0 || !n.show)) {
      if (n.variants !== void 0) {
        const m = `
      const ${g}Data = markRaw(${JSON.stringify(n.variants)})
      `;
        l.push(m);
      }
      e = [...e, ...n.imports ?? []], l = [...l, ...n.variables ?? []], t = [...t, ...n.state ?? []], i.push(w(g, s.playground, n));
    }
  }
  return e = [...new Set(e)], l = [...new Set(l)], t = [...new Set(t)], `
  <script setup lang="ts">
  // default imports
  import '@histoire/app/dist/style.css'
  import 'virtual:$histoire-theme.css'
  import './style.css'
  import { ref, markRaw, computed, reactive } from 'vue'

  // loaded imports
  ${e.join(`
`)}

  // default variables
  const config = markRaw(${JSON.stringify(a, null, 2)})
  
  const state = reactive({
    sample: '${s.sample}',
    ${t.join(`,
`)}
  })

  // loaded variables
  ${l.join(`
`)}

  <\/script>

  <template>
    <Story 
      id="vuetify"
      title="${s.display.title}"
      group="${s.display.group}"
      icon="${s.display.icon}"
      :layout='${JSON.stringify(s.display.layout)}'
      :responsiveDisabled='${JSON.stringify(s.display.responsiveDisabled)}'
    >
      ${i.join(`
`)}
    </Story>
  </template>`;
}
function S(s = {}) {
  const a = y(s, f);
  async function t(e) {
    try {
      await e.fs.ensureDir(e.pluginTempDir), await e.fs.emptyDir(e.pluginTempDir), e.moduleLoader.clearCache(), await e.fs.writeFile(e.path.resolve(e.pluginTempDir, "style.css"), v);
      let l = {};
      a.configFile !== "" && u.existsSync(a.configFile) && (l = await import(a.configFile));
      const i = e.path.resolve(e.pluginTempDir, "Vuetify.story.vue");
      await e.fs.writeFile(i, b(a, l)), e.addStoryFile(i);
    } catch (l) {
      e.error(l.stack ?? l.message);
    }
  }
  return {
    name: "vuetify-design-system",
    config(e) {
      if (e.tree || (e.tree = {}), e.tree.groups || (e.tree.groups = []), !e.tree.groups.some((l) => l.id === a.display.group)) {
        let l = 0;
        const i = e.tree.groups.findIndex((o) => o.id === "top");
        i > -1 && (l = i + 1), e.tree.groups.splice(l, 0, {
          id: a.display.group,
          title: d(a.display.group.replaceAll("-", " "))
        });
      }
    },
    async onDev(e, l) {
      await t(e);
      const i = e.watcher.watch(a.configFile).on("change", () => t(e)).on("add", () => t(e));
      l(() => {
        i.close();
      });
    },
    async onBuild(e) {
      await t(e);
    }
  };
}
const v = `
.display-block{
  min-height: 50px;
}
.display-square{
  height: 150px;
  width: 150px;
}
.info{
  font-style: italic;
  text-transform: lowercase;
  clear: both;
}
.info a{
  text-decoration: none;
}
.force-nowrap{
  text-wrap: nowrap;
}
`;
export {
  S as vuetifyDesignSystem
};

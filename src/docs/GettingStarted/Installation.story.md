---
group: 'getting-started'
icon: 'carbon:insert-syntax'
title: 'Installation'
---

## Installation

----

### Requirements

Your main project should have the following dependencies installed:

:::div data-table
| Package  | Minimum Version |
| :------- | :-------------: |
| Vue 3    |     ^3.3.4      |
| Vuetify  |     ^3.3.7      |
| Histoire |     ^0.17.2     |
:::

----

### NPM Install

Install NPM Package:

```shell
npm install histoire-vuetify-design-system
```

----

### Making Your Vuetify Options Exportable

Typically when setting up Vuetify you don't need to make your options object exportable, but for this package we need to setup vuetify a little bit different. There isn't much you need to change, but start with creating an options file where you would normally initilise your vuetify instance. It needs to export default so this package can import them dynamically.

````typescript
/** plugins/vuetify/options.ts */
import type { VuetifyOptions, ThemeDefinition } from 'vuetify'

const vuetifyTheme: ThemeDefinition = {
  dark: false,
  // other vuetify options
}

const Vuetify3Options: VuetifyOptions = {
  theme: {
    defaultTheme: 'vuetifyTheme',
    themes: {
      vuetifyTheme
    }
  }
}

export default Vuetify3Options

````

Inside your vuetify  file, you can import your options and include anything else.

````typescript
/** plugins/vuetify/index.ts */

import { createVuetify } from "vuetify";
import * as labs from "vuetify/labs/components";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import Vuetify3Options from './options'
import 'vuetify/styles'

export default createVuetify({
  components: {
    ...components,
    ...labs,
  },
  directives,
  ...Vuetify3Options
})

````

Then initialise vuetify how your normally would:

````typescript
/** main.ts */
import { createApp } from 'vue'
import vuetify from './vuetify'

import App from './App.vue'

createApp(App).use(vuetify).mount('#app')

````

----

### Histoire Setup File

You'll need to make sure you are importing your projects vuetify options (from above) and set these for histoire to display the correct options.

````typescript
/** histoire.setup.ts */
import { defineSetupVue3 } from '@histoire/plugin-vue'
import vuetify from './plugins/vuetify'
import HistoireVuetifyDS from 'histoire-vuetify-design-system'

export const setupVue3 = defineSetupVue3(({ app }) => {
  app
    .use(vuetify)
    .use(HistoireVuetifyDS);
})

````

----

### Histoire Configuration File

The plugin is aimed to be customisable and but will be merged with the defaults.

````typescript
/** histoire.setup.ts */
import { defineConfig } from "histoire";
import { HstVue } from "@histoire/plugin-vue";
import { vuetifyDesignSystem } from '../dist/design'

export default defineConfig({
  setupFile: 'histoire.setup.ts',
  routerMode: "hash",
  plugins: [
    HstVue(), 
    vuetifyDesignSystem({
      configFile: __dirname + '/plugins/vuetify/options.ts',
    })
  ],  
});

````

The flow is pretty simple.
Vuetify -> Template -> Variants
eg. Vuetify -> Material Colors -> Primary, Secondary etc.

Example of default configuration (this is the same as doing above):

````typescript
vuetifyDesignSystem({
    configFile: __dirname + '/plugins/vuetify/options.ts',
    sample: 'This is some sample text.',
    playground:{
        title: "Playground",
        classes: "mb-2 text-h4 htw-text-gray-900 dark:htw-text-gray-100",
        divider: {
            show: true,
            classes: "ma-4"
        },
    },
    display: {
        icon: 'mdi:vuetify',
        title: 'Vuetify',
        group: 'design-system',
        layout: { type: 'single', iframe: true },
        responsiveDisabled: false,
    },
    templates: {
        /** Complete list of Templates and Variants to load. */
    }
})
````

----

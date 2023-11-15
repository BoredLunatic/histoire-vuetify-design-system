import { defineSetupVue3 } from '@histoire/plugin-vue'
import { createVuetify } from "vuetify";
import * as labs from "vuetify/labs/components";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import Vuetify3Options from './vuetify/options'
import HistoireVuetifyDS from '../../dist'
// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

export const setupVue3 = defineSetupVue3(({ app }) => {
  app
    .use(createVuetify({
    components: {
      ...components,
      ...labs,
    },
    directives,
    ...Vuetify3Options
  }))
    .use(HistoireVuetifyDS)
})

import { defineSetupVue3 } from '@histoire/plugin-vue'
import vuetify from '../plugins/vuetify'
import HistoireWrapper from './HistoireWrapper.vue'
import HistoireVuetifyDS from '../'
import './styles/histoire.css'
import 'vuetify/styles'

export const setupVue3 = defineSetupVue3(({ app, addWrapper }) => {
  app.use(vuetify)
  app.use(HistoireVuetifyDS)
  addWrapper(HistoireWrapper)
})

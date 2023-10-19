import { defineSetupVue3 } from '@histoire/plugin-vue'
import vuetify from '../plugins/vuetify'
import HistoireWrapper from './HistoireWrapper.vue'
import './styles/histoire.css'

export const setupVue3 = defineSetupVue3(({ app, addWrapper }) => {
  app.use(vuetify)
  addWrapper(HistoireWrapper)
})

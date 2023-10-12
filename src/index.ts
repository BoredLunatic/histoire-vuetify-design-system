import { App, Plugin } from "vue";
import VuetifyVariant from './components/VuetifyVariant.vue'

const HistoireVuetifyDS: Plugin = {
  install(app: App) {
    // configure the app
    app.component('VuetifyVariant', VuetifyVariant)
  }
}

export default HistoireVuetifyDS;
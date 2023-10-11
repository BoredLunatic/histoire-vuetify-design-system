import { createApp } from 'vue'
import './style.css'
import vuetify from './vuetify'
import { HistoireVuetifyDS } from '../../src/plugin'

import App from './App.vue'

createApp(App).use(vuetify).use(HistoireVuetifyDS).mount('#app')

import { VuetifyOptions } from 'vuetify'
import { md3 } from 'vuetify/blueprints'
import { ThemeDefinition } from 'vuetify'

const vuetifyTheme: ThemeDefinition = {
  dark: false
}

const Vuetify3Options: VuetifyOptions = {
  blueprint: md3,
  theme: {
    defaultTheme: 'vuetifyTheme',
    themes: {
      vuetifyTheme
    }
  }
}

export default Vuetify3Options

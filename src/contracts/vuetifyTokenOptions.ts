import { StoryLayout } from 'histoire'
import { VuetifyTemplates, defaultVariantTemplates } from './templates'
import { VariantDivider } from './variants'

interface DisplayOptions {
  icon?: string
  title?: string
  group?: string
  layout?: StoryLayout
  responsiveDisabled?: boolean
}

export interface PlaygroundOptions {
  title?: string
  classes?: string
  divider?: VariantDivider
}

export interface VuetifyTokenOptions {
  configFile?: string
  sample?: string
  templates?: VuetifyTemplates
  display?: DisplayOptions
  playground?: PlaygroundOptions
}

const defaultOptions: VuetifyTokenOptions =  {
  configFile: '',
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
    layout: {type: 'single', iframe: true},
    responsiveDisabled: false,
  },
  templates: Object.fromEntries(
    Object.entries(defaultVariantTemplates).sort((a,b) => a[1].order - b[1].order).filter((v) => v[1].show)
  ) as VuetifyTemplates
}

export { defaultOptions }

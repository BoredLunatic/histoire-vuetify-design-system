
# Histoire Vuetify Design System

Plugin to display Vuetify Design System in [Histoire.](https://histoire.dev/).

You can customise what is displayed and also add styling for almost all sections. It currently utilise vuetify styling and components.

Below is a list of the default variant templates the plugin can currently show:

|    Template Name    |   Has Playground   |
| :-----------------: | :----------------: |
|      Blueprint      |        :x:         |
|   Material Colors   |        :x:         |
| Text and Typography | :heavy_check_mark: |
|    Border Radius    | :heavy_check_mark: |
|       Content       | :heavy_check_mark: |
|      Elevation      | :heavy_check_mark: |
|       Display       | :heavy_check_mark: |
|        Float        | :heavy_check_mark: |
|      Overflow       | :heavy_check_mark: |
|       Sizing        | :heavy_check_mark: |
|       Spacing       | :heavy_check_mark: |

## Dependencies

There are a couple of package dependencies for this plugin, so you'll need to make sure your application is running at minimum:

| Package  | Version |
| :------: | :-----: |
| histoire | ^0.17.2 |
|   vue    | ^3.3.4  |
| vuetify  | ^3.3.17 |

## Getting Started

Next install the package:

````shell
npm i histoire-vuetify-design-system
````

Import the package into your histoire.config file.

````typescript
import { vuetifyDesignSystem } from '../src'

export default defineConfig({
  /** Usual Histoire config */
  plugins: [
    HstVue(),
    /** Include plugin.*/
    vuetifyDesignSystem()
  ],
});

````

This will generate a Vuetify story and populate it with all the current default variants.

## Configuration

The plugin is fully customisable and your provided configuration will will be merged with the defaults.

The flow is pretty simple.
Vuetify -> Template -> Variants
eg. Vuetify -> Material Colors -> Primary, Secondary etc.

Example of default configuration (this is the same as doing above):

````typescript
vuetifyDesignSystem({
    /** Vuetify configuration file - this needs to be split and default exported */
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
        layout: { type: 'single', iframe: true },
        responsiveDisabled: false,
    },
    templates: {
        /** Complete list of Templates and Variants to load. */
    }
})
````

Templates interface:

````typescript
interface VuetifyTemplates {
  blueprint?: DisplayTemplate
  typography?: ClassTemplate
  'border-radius'?: ClassTemplate
  'material-colors'?: ColorTemplate
  content?: ComponentTemplate
  display?: ClassTemplate
  elevation?: ClassTemplate
  float?: ClassTemplate
  overflow?: ClassTemplate
  sizing?: ClassTemplate
  spacing?: ComponentTemplate
}
````

There are currently 4 types of Templates:

1. Class Template: Styling that can be applied via a class
2. Color Template: Display color patches like vuetify
3. Component Template: Show 1 or more components
4. Display Template: Show a piece of data or computed property.

If you just want to update some basic styling or do something like hide a variant, the complete list below will be useless for you.

Below is a few examples for hiding a variant, changing classes, and updating text. Even further down is a complete list of attributes that are shared and ones that are unique.

### Example 1: Hiding a Variant

Hiding Overflow Variant

````typescript
vuetifyDesignSystem({
    templates: {
       overflow: {
        show: false
       }
    }
})
````

### Example 2: Updating Playground Title Styles

Updating Overflow Variant Container Classes

````typescript
vuetifyDesignSystem({
    templates: {
       overflow: {
        classes: 'text--primary'
       }
    }
})
````

### Example 3: UUpdating Text

Updating Playground Text

````typescript
vuetifyDesignSystem({
    playground: {
       title: {
        text: 'Sandbox Area'
       }
    }
})
````

## Template Attributes

Each template extends a BaseTemplate with the following attributes

````typescript
interface BaseTemplate {
  /** Type VariantDiscriminator is a string of either class, color, display, component and is just a quick reference */
  discriminator: VariantDiscriminator
  /** Should the template be shown/included in the story. */
  show: boolean
  /** Display order in menu. */
  order: number
  /** This is the current state for the playground - automatically handled */
  state: string[] | object
  /** Title object for styling titles */
  title: TemplateTitle
  /** Template icon for menu */
  icon: string
  /** Template icon for menu */
  text?: string
  /** Template container classes */
  classes?: string
  /** Imports are used when you need to include a package import dynamically. */
  imports?: string[]
  /** Variable definitions to be included dynamically. */
  variables?: string[]
  /** Array of Variant Controls that should be included */
  controls?: VariantControl[]
  /** Whether a description should be included or not. */
  description?: VariantDescription
  /** If true this will add d-inline-block class to each variant */
  inline?: boolean
  /** Testing. */
  autoPropsDisabled?: boolean
   /** Included variants that should be included and shown for this template */
  variants?: VariantClass[] | VariantColors[] | VariantDisplay[] | VariantComponent[]
}
````

### ClassTemplate & ColorTemplate

Both of thee templates only extend the BaseTemplate for now. There are no additional attributes.

### ComponentTemplate

````typescript
export interface ComponentTemplate extends BaseTemplate {
  /** Puts all component variants into cascading containers */
  containerized?: boolean
}
````

### DisplayTemplate

````typescript
export interface DisplayTemplate extends BaseTemplate {
  /** Variable to included from the Variables list */
  variable: string
  /** Link to be Displayed */
  link?: VariantLink
}
````

### TemplateTitle

````typescript
export interface TemplateTitle {
  /** Styling classes to be included on this templates title */
  classes: string
  /** Text to be displayed for this templates title */
  text: string
}
````

### VariantControl

````typescript
export interface VariantControl {
    /** Component to be used as control */
  component: string
  /** Which state variable should be used as it's model */
  model: string
   /** Label to display on component */
  label: string
  /** Variable name for how to pull items. If not found in state, will check variants array from the template */ 
  items?: string
  /** Items attribute for displaying text  */
  itemsTitle?: string
  /** Items attribute for the value  */
  itemsValue?: string
  /** object attribute for value  */
  playground?: VariantControlPlayground
}
````

### VariantControlPlayground

````typescript
export interface VariantControlPlayground {
    /** Just a placeholder for now. */
  type: string
   /** Where to pull sample text from for playground */
  sample?: string
   /** Additional styling for Playground */
  classes?: string
}
````

### VariantLink

````typescript
export interface VariantLink {
    /** Link url */
  url: string
  /** Display text */
  text: string 
  /** Classes to style link */
  classes?: string 
  /** Set target to blank for new tab on click */
  blank?: boolean 
}
````

### VariantDescription

````typescript
export interface VariantDescription {
    /** Text to be displayed in the description area */
  text?: string
  /** Provide a link underneath the description */
  link?: VariantLink
  /** Provide additional styling to the description section */
  classes?: string
  /** Display a divider underneath the description */
  divider?: VariantDivider
}
````

### VariantDivider

````typescript
export interface VariantDivider {
    /** Styling classes for the divider */
  classes?: string
  /** Should the divider be shown */
  show?: boolean
}
````

### Creating Variants for each template

````typescript
export interface VariantClass {
    /** Title of variant */
  title: string
  /** Class that styles variant */
  classes: string
  /** Duplicate variant 'x' number of times */
  duplicate?: number
  /** Content inside container */
  content?: string
}

export interface VariantDisplay {
    /** Title of variant */
  title: string
  name?: string
  link?: VariantLink
  variants?: DisplayVariants[]
}

export interface VariantColors {
    /** Title of variant */
  name: string
  /** How many darken iterations to show */
  darken: number | boolean
  /** How many lighten iterations to show */
  lighten: number | boolean
  /** How many accent iterations to show */
  accent: number | boolean
}

export interface VariantComponent {
    /** Title of variant */
  title: string
  /** Component name for variant */
  component: string
  /**  Styling classes */
  classes?: string
  /** Array of states needed */
  states?: string[]
  /** Build classes with a custom function (since JSON cant handle arrow functions) */
  builder?: BuilderFunction
  /** Content inside container */
  content?: string
  /** Used when template is containerized. */
  children?: VariantComponent[]
}
````

### Building class values for component variants

````typescript
export interface BuilderFunction {
    /** Function arguments */
  args: string[]
  /** Function Body */
  body: string
}
````
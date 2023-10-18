---
group: 'getting-started'
icon: 'carbon:template'
title: 'Templates'
---

## Templates

There are currently 4 types of Templates:

1. Class Template: Styling that can be applied via a class
2. Color Template: Display color patches like vuetify
3. Component Template: Show 1 or more components
4. Display Template: Show a piece of data or computed property.

If you only need to make small changes like hiding certain variants, go check out the examples as you don't need to know anything below besides `VuetifyTemplates`. The rest of the information is handy if you would like to make more complex updates to the data or even create your own.

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

Each type of template is extended from the `BaseTemplate`

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

----

### ClassTemplate & ColorTemplate

Both of these templates only extend the BaseTemplate for now. There are no additional attributes.

----

### ComponentTemplate

````typescript
export interface ComponentTemplate extends BaseTemplate {
  /** Puts all component variants into cascading containers */
  containerized?: boolean
}
````

----

### DisplayTemplate

````typescript
export interface DisplayTemplate extends BaseTemplate {
  /** Variable to included from the Variables list */
  variable: string
  /** Link to be Displayed */
  link?: VariantLink
}
````

----

### TemplateTitle

````typescript
export interface TemplateTitle {
  /** Styling classes to be included on this templates title */
  classes: string
  /** Text to be displayed for this templates title */
  text: string
}
````

----

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

----

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

----

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

----

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

----

### VariantDivider

````typescript
export interface VariantDivider {
    /** Styling classes for the divider */
  classes?: string
  /** Should the divider be shown */
  show?: boolean
}
````

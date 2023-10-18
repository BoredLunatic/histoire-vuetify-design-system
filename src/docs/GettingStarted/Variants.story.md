---
group: 'getting-started'
icon: 'carbon:settings-adjust'
title: 'Variants'
---

## Variants

Creating different variants for each template.

````typescript
export interface VariantClass {
  /** Class that styles variant */
  classes: string
  /** Content inside container */
  content?: string
  /** Duplicate variant 'x' number of times */
  duplicate?: number
  /** Title of variant */
  title: string
}

export interface VariantDisplay {
  link?: VariantLink
  name?: string
  title: string
  variants?: DisplayVariants[]
}

export interface VariantColors {
  /** How many accent iterations to show */
  accent: number | boolean
  /** How many darken iterations to show */
  darken: number | boolean
  /** How many lighten iterations to show */
  lighten: number | boolean
  /** Title of variant */
  name: string
}

export interface VariantComponent {
  /** Build classes with a custom function (since JSON cant handle arrow functions) */
  builder?: BuilderFunction
  /** Used when template is containerized. */
  children?: VariantComponent[]
  /**  Styling classes */
  classes?: string
  /** Component name for variant */
  component: string
  /** Content inside container */
  content?: string  
  /** Array of states needed */
  states?: string[]
  /** Title of variant */
  title: string
}
````

----

### Building class values for component variants

````typescript
export interface BuilderFunction {
  /** Function arguments */
  args: string[]
  /** Function Body */
  body: string
}
````

----

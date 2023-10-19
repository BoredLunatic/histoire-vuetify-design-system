---
group: 'getting-started'
icon: 'carbon:floorplan'
title: 'Options Interfaces'
---

## Options Interfaces

---

Options interface:

```typescript
export interface VuetifyDesignSystemOptions {
  /** Vuetify configuration file - this needs to be split and default exported */
  configFile?: string
  /** Main display options for Story */
  display?: DisplayOptions
  /** Default Playground options */
  playground?: PlaygroundOptions
  /** Default sample text */
  sample?: string
  /** Template Variants top display */
  templates?: VuetifyTemplates
}
```

```typescript
interface DisplayOptions {
  group?: string
  icon?: string
  layout?: StoryLayout
  responsiveDisabled?: boolean
  title?: string
}

export interface PlaygroundOptions {
  classes?: string
  divider?: VariantDivider
  title?: string
}
```

---

Playground Options interface:

```typescript
export interface PlaygroundOptions {
  /** Playground container classes */
  classes?: string
  /** Divider options */
  divider?: VariantDivider
  /** Title text for playground */
  title?: string
}
```

import { ClassTemplate, ColorTemplate, ComponentTemplate, DisplayTemplate, VariantControl} from './contracts/variants'
import { VuetifyDesignSystemOptions, PlaygroundOptions } from './contracts/vuetifyDesignSystemOptions'
import { toPascalCase } from "./utils/helper"
import path from 'node:path'

function generateControls(variantName: string , controls: VariantControl[]): string {
  let contents = `<template #controls>`
  // loop controls
  for(let control of controls){
    contents += `
      <div>
        <${control.component} 
          v-model="state.${control.model}" 
          label="${control.label}"
          :items='${control.items !== undefined ? control.items : `${variantName}Data`}'
          ${control.itemsTitle !== undefined ? `item-title="${control.itemsTitle}"` : ``}
          ${control.itemsValue !== undefined ? `item-value="${control.itemsValue}"` : ``}
        />
      </div>
    `
  }
  contents += `</template>`
  return contents
}

// used to create variant templates
function generateVariant(name: string, playgroundOptions: PlaygroundOptions, variant: DisplayTemplate | ComponentTemplate | ClassTemplate | ColorTemplate): string {
  const title = toPascalCase(variant.title.text)
  return `
  <Variant
    icon="${variant.icon}"
    title="${title}"
    :autoPropsDisabled="${variant.autoPropsDisabled ?? false}"
  >
    ${variant.controls !== undefined ? generateControls(name, variant.controls) : ``}
    <vuetify-variant
      discriminator="${variant.discriminator}"
      classes="${variant.classes}"
      text="${variant.text}"
      :title='${JSON.stringify(variant.title)}'
      :inline="${variant?.inline ?? false}"
      :description='${JSON.stringify(variant.description ?? undefined)}'
      :controls='${JSON.stringify(variant.controls ?? [])}'
      :variants='${JSON.stringify(variant.variants ?? [])}'
      :playground='${JSON.stringify(playgroundOptions ?? [])}'
      :state="state"
      :containerized="${variant.discriminator === 'component' && (variant as ComponentTemplate).containerized ? `true` : `false`}"
    />
  </Variant>`
}

//autoPropsDisabled="true"

export function generateStory(options: VuetifyDesignSystemOptions, vuetifyConfig: any) {
  let allStates = []
  let allImports = []
  let allVariables = []
  let allVariants = []

  // const finalVariants = options.variants.filter((variant) => variant.show)
  // check token options for which variants to show.
  for(const template in options.templates){
  const name = toPascalCase(template).replaceAll(' ', '').replaceAll('-', '')
  const variant = options.templates[template]

    // see if default data is present for variant.
    if(variant === undefined || !variant.show){
      // not found continue
      continue
    }

    if(variant.variants !== undefined){
      const variantData =
      `
      const ${name}Data = markRaw(${JSON.stringify(variant.variants)})
      `
      allVariables.push(variantData)
    }

    // merge states, imports and variables.
    allImports = [...allImports, ...(variant.imports ?? [])]
    allVariables = [...allVariables, ...(variant.variables ?? [])]
    allStates = [...allStates, ...(variant.state ?? [])]
    allVariants.push(generateVariant(name, options.playground, variant))
  }

  // make lists unique
  allImports = [...new Set(allImports)]
  allVariables = [...new Set(allVariables)]
  allStates = [...new Set(allStates)]

  // merge variants - merge variables
  return `
  <script setup lang="ts">
  // default imports
  import '@histoire/app/dist/style.css'
  import 'virtual:$histoire-theme.css'
  import './style.css'
  import { ref, markRaw, computed, reactive } from 'vue'

  // loaded imports
  ${allImports.join(`\n`)}

  // default variables
  const config = markRaw(${JSON.stringify(vuetifyConfig, null, 2)})
  
  const state = reactive({
    sample: '${options.sample}',
    ${allStates.join(`,\n`)}
  })

  // loaded variables
  ${allVariables.join(`\n`)}

  </script>

  <template>
    <Story 
      id="vuetify"
      title="${options.display.title}"
      group="${options.display.group}"
      icon="${options.display.icon}"
      :layout='${JSON.stringify(options.display.layout)}'
      :responsiveDisabled='${JSON.stringify(options.display.responsiveDisabled)}'
    >
      ${allVariants.join(`\n`)}
    </Story>
  </template>`
}

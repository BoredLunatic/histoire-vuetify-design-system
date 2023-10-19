<script setup lang="ts">
import { VariantComponent } from '../contracts/variants'
import ContainerizedLoader from './ContainerizedLoader.vue'
import { watchEffect, ref, Ref } from 'vue'

const props = defineProps<{
  variants: VariantComponent[]
  text: string
  classes: string
  inline: boolean
  containerized: boolean
  state: object
}>()

const stateObj: Ref<object> = ref(props.state ?? {})
watchEffect(() => (stateObj.value = props.state ?? {}))
</script>

<template>
  <div>
    <containerized-loader
      v-if="containerized"
      :component="variants[0]"
      :states="variants[0].states ?? []"
      :builder="variants[0].builder"
      :state="stateObj"
    />
    <div v-else v-for="(variant, i) in variants" :key="i" class="ma-4 pa-4">
      <div :class="classes">
        <component :is="variant.component" :class="classes + ' ' + variant.classes">
          {{ variant.content }}
        </component>
      </div>
      <div class="mt-2 info">Component: {{ variant.title }}</div>
    </div>
  </div>
</template>

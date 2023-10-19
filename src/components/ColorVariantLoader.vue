<script setup lang="ts">
import { VariantColors } from '../contracts/variants'
import { watchEffect, ref, Ref } from 'vue'

const props = defineProps<{
  variants: VariantColors[]
  text: string
  classes: string
  state: object
}>()

const stateObj: Ref<object> = ref(props.state ?? {})
watchEffect(() => (stateObj.value = props.state ?? {}))
</script>

<template>
  <div v-for="variant in variants" class="pa-4 w-50 d-inline-block">
    <div :class="classes + ' bg-' + variant.name">
      <div class="text-caption">Base Color</div>
      <div class="font-italic">{{ variant[text] }}</div>
    </div>
    <div
      v-for="i in variant.lighten === false ? 0 : variant.lighten"
      class="${variant.classes ? `${variant.classes}` : ``}"
      :class="classes + ' bg-' + variant.name + '-lighten-' + i.toString()"
    >
      {{ variant.name + '-lighten-' + i.toString() }}
    </div>
    <div
      v-for="i in variant.darken === false ? 0 : variant.darken"
      :class="classes + ' bg-' + variant.name + '-darken-' + i.toString()"
    >
      {{ variant.name + '-darken-' + i.toString() }}
    </div>
    <div
      v-for="i in variant.accent === false ? 0 : variant.accent"
      :class="classes + ' bg-' + variant.name + '-accent-' + i.toString()"
    >
      {{ variant.name + '-accent-' + i.toString() }}
    </div>
  </div>
</template>

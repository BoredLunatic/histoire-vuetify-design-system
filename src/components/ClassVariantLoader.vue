<script setup lang="ts">
import { VariantClass } from '../contracts/variants'
import { watchEffect, ref, Ref } from 'vue'

const props = defineProps<{
  variants: VariantClass[]
  text: string
  classes: string
  inline: boolean
  state: object
}>()

const stateObj: Ref<object> = ref(props.state ?? {})
watchEffect(() => (stateObj.value = props.state ?? {}))
</script>

<template>
  <div v-for="variant in variants" class="ma-4 pa-4" :class="inline ? 'd-inline-block' : ''">
    <div v-for="i in variant.duplicate ?? 1" class="ma-4" :class="inline ? 'd-inline-block' : ''">
      <div :class="variant.classes + ' ' + classes">
        {{ variant[text] ?? stateObj[text] }}
      </div>
      <div class="mt-2 info">Class: {{ variant.classes }}</div>
    </div>
  </div>
</template>

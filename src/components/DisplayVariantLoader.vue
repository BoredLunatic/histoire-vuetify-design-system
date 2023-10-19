<script setup lang="ts">
import { VariantLink as VariantLinkType, VariantDisplay } from '../contracts/variants'
import VariantLink from './VariantLink.vue'

const props = defineProps<{
  variants: VariantDisplay[]
  classes: string
  link?: VariantLinkType
}>()
</script>

<template>
  <div :class="classes">
    <variant-link
      v-if="props.link !== undefined"
      :text="props.link.text"
      :url="props.link.url"
      :blank="props.link.blank ?? false"
      :classes="props.link.classes ?? ''"
    />
    <div v-for="(variant, i) in props.variants" :key="i" class="mt-2 info">
      {{ variant }}
    </div>
  </div>
</template>

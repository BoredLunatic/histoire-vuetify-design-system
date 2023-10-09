<script setup lang="ts">
import { VariantLink as VariantLinkType, VariantDisplay } from '../contracts/variants';
import VariantLink from './VariantLink.vue'

const props = defineProps<{
  variants: VariantDisplay[]
  classes: string
  link?: VariantLinkType
}>()

</script>

<template>
  <div 
    :class="classes"
  >
  
  <variant-link
    v-if="link !== undefined"
    :text="link.text"
    :url="link.url"
    :blank="link.blank ?? false"
    :classes="link.classes ?? ''"
  />
  <div 
    v-for="variant in variants"
    class="mt-2 info"
  >
    {{ variant }}
  </div>
</div>

</template>
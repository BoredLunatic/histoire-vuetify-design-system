<script setup lang="ts">
import { VariantLink as VariantLinkType, VariantDivider } from '../contracts/variants';
import VariantLink from './VariantLink.vue';

const props = defineProps<{
  text: string
  classes: string
  divider: VariantDivider
  link: VariantLinkType
}>()

</script>

<template>
  <div 
    v-if="props.text !== '' || props.link !== undefined"
  >
    <div
      v-if="props.text"
      :class="props.classes"
    >
      {{ props.text }}
    </div>
    <variant-link
      :text="props.link.text"
      :url="props.link.url"
      :blank="props.link.blank ?? false"
      :classes="props.link.classes ?? ''"
    />
    <v-divider v-if="props.divider.show" :class="props.divider.classes"/>
  </div>

</template>
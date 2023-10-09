<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  text: string
  blank: boolean
  url: string
  classes: string
}>()

const target = computed(() => (props.blank ? '_blank' : ''))

</script>

<template>
  <a 
    :class="props.classes"
    :target="target"
    :href="props.url"
  >
    {{ props.text }}
  </a>
</template>
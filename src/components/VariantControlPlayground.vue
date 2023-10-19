<script setup lang="ts">
import { toUpperCaseFirst } from '../utils/helper'
import { computed } from 'vue'

const props = defineProps<{
  type: string
  model: string
  sample?: string
  classes?: string
}>()

const classString = computed(() => {
  let objectClass = {}
  if (typeof props.classes == 'string') {
    objectClass[props.classes] = true
  }
  if (props.type === 'class' && typeof props.model == 'string') {
    objectClass[props.model] = true
  }
  return objectClass
})
</script>

<template>
  <div :class="classString">
    {{ props.sample }}
  </div>
  <div class="mt-2 info">{{ toUpperCaseFirst(props.type) }}: {{ props.model }}</div>
</template>

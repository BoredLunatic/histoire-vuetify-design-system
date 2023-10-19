<script setup lang="ts">
import { VariantComponent, BuilderFunction } from '../contracts/variants'
import { computed, Ref, ref, watchEffect } from 'vue'

const props = defineProps<{
  component: VariantComponent
  states: string[]
  state: object
  builder?: BuilderFunction | undefined
}>()

const stateObj: Ref<object> = ref(props.state ?? {})
const component: Ref<VariantComponent> = ref(props.component)

watchEffect(() => (stateObj.value = props.state ?? {}))

const stateValues = computed(() => props.states.map((s) => stateObj.value[s]))
// compute builder.
const builderFunction = computed(() => {
  if (props.builder === undefined) {
    return null
  }

  const callback = new Function(...props.builder.args, props.builder.body)
  return callback(...stateValues.value)
})

const classString = computed(() => {
  let objectClass = {}
  if (builderFunction.value !== null) {
    objectClass[builderFunction.value] = true
  }
  if (component.value.classes !== undefined && component.value.classes !== '') {
    objectClass[component.value.classes ?? ''] = true
  }

  return objectClass
})
</script>

<template>
  <component :is="component.component" :class="classString">
    <template v-if="component.children && component.children.length > 0">
      <containerized-loader
        v-for="container in component.children"
        :component="container"
        :states="container.states ?? []"
        :builder="container.builder"
        :state="stateObj"
      />
    </template>
    <template v-else>
      {{ component.content ?? '' }}
    </template>
  </component>
</template>

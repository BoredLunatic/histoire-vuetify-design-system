<script setup lang="ts">
import VariantControlPlayground from './VariantControlPlayground.vue'
import ClassVariantLoader from './ClassVariantLoader.vue'
import ColorVariantLoader from './ColorVariantLoader.vue'
import DisplayVariantLoader from './DisplayVariantLoader.vue'
import ComponentVariantLoader from './ComponentVariantLoader.vue'
import VariantDescription from './VariantDescription.vue'
import { VariantControl, VariantClass, VariantColors, VariantDisplay, VariantComponent, VariantDescription as VariantDescriptionType, VariantLink, TemplateTitle } from '../contracts/variants';
import type { VariantDiscriminator } from '../contracts/variants';
import { computed, watchEffect, ref, Ref } from 'vue';
import { PlaygroundOptions } from '../contracts/vuetifyTokenOptions';

const props = defineProps<{
  discriminator: VariantDiscriminator
  title: TemplateTitle
  classes: string
  text: string
  inline: boolean
  state: object
  playground: PlaygroundOptions
  description?: VariantDescriptionType
  controls?: VariantControl[]
  variants?: VariantClass[] | VariantColors[] | VariantDisplay[] | VariantComponent[] | undefined
  containerized?: boolean
}>()

const stateObj: Ref<object> = ref(props.state ?? {});
watchEffect(() => (stateObj.value = props.state ?? {}));

const hasPlayground = computed(() => (props.controls?.filter((c) => c.playground !== undefined)?.length ?? 0) > 0)

</script>

<template>
  <div 
    v-if="hasPlayground"
    class="ma-4 pa-4"
  >
    <div :class="props.playground.classes">
      {{ props.playground.title }}
    </div>
    
    <variant-control-playground
      v-for="control of controls"
      v-show="control.playground ?? false"
      :type="control?.playground?.type ?? ''"
      :sample="stateObj[control?.playground?.sample ?? 'sample']"
      :classes="control?.playground?.classes"
      :model="stateObj[control?.model]"
    >
    </variant-control-playground>
  </div>
  <v-divider v-if="hasPlayground && props.playground.divider.show" :class="props.playground.divider.classes"/>
  <div class="ma-4 pa-4">
    <div :class="props.title.classes">
      {{ props.title.text }}
    </div>
    <variant-description
      v-if="props.description !== undefined"
      :link="(props.description?.link as VariantLink) ?? undefined"
      :text="props.description?.text ?? ''"
      :classes="props.description?.classes ?? ''"
      :divider="props.description?.divider ?? {show:false}"
    >
    </variant-description>
    <color-variant-loader
      v-if="discriminator === 'color'"
      :text="props?.text ?? 'name'"
      :variants="(props?.variants as VariantColors[]) ?? []"
      :classes="props?.classes ?? ''"
      :inline="props?.inline ?? false"
      :state="stateObj"
    />
    <class-variant-loader
      v-if="discriminator === 'class'"
      :variants="(props?.variants as VariantClass[]) ?? []"
      :text="props?.text ?? 'title'"
      :classes="props?.classes ?? ''"
      :inline="props?.inline ?? false"
      :state="stateObj"
    />
    <display-variant-loader
      v-if="discriminator === 'display'"
      :variants="(props?.variants as VariantDisplay[]) ?? []"
      :text="props?.text ?? 'title'"
      :classes="props?.classes ?? ''"
      :inline="props?.inline ?? false"
      :state="stateObj"
    />
    <component-variant-loader
      v-if="discriminator === 'component'"
      :variants="(props?.variants as VariantComponent[]) ?? []"
      :text="props?.text ?? 'title'"
      :containerized="props?.containerized ?? false"
      :classes="props?.classes ?? ''"
      :inline="props?.inline ?? false"
      :state="stateObj"
    />
  </div>
</template>
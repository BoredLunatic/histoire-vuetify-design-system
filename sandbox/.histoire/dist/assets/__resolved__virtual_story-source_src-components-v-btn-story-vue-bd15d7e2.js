const __resolved__virtual_storySource_srcComponentsVBtnStoryVue = `<script setup>
import { ref } from 'vue'
import { logEvent } from 'histoire/client'

const text = ref('Click me!')
<\/script>

<template>
  <Story>
    <v-btn
      @click="logEvent('click', $event)"
    >
      {{ text }}
    </v-btn>

    <template #controls>
      <HstText
        v-model="text"
        title="Default slot"
      />
    </template>
  </Story>
</template>`;
export {
  __resolved__virtual_storySource_srcComponentsVBtnStoryVue as default
};

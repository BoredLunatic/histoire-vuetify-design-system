import { defu } from 'defu'
import fs from 'fs'
import type { PluginApiBase, Plugin } from '@histoire/shared'
import { VuetifyDesignSystemOptions, defaultOptions } from './contracts/vuetifyDesignSystemOptions'
import { generateStory } from './generator'
import { toPascalCase } from './utils/helper'

export function vuetifyDesignSystem(options: VuetifyDesignSystemOptions = {}): Plugin {
  const finalOptions: VuetifyDesignSystemOptions = defu(options, defaultOptions)

  async function generate(api: PluginApiBase) {
    try {
      await api.fs.ensureDir(api.pluginTempDir)
      await api.fs.emptyDir(api.pluginTempDir)
      api.moduleLoader.clearCache()
      await api.fs.writeFile(api.path.resolve(api.pluginTempDir, 'style.css'), css)
      let resolveConfig = {}

      if (finalOptions.configFile !== '' && fs.existsSync(finalOptions.configFile)) {
        resolveConfig = await import(finalOptions.configFile)
      }

      const storyFile = api.path.resolve(api.pluginTempDir, 'Vuetify.story.vue')
      await api.fs.writeFile(storyFile, generateStory(finalOptions, resolveConfig))
      api.addStoryFile(storyFile)
    } catch (e) {
      api.error(e.stack ?? e.message)
    }
  }

  return {
    name: 'vuetify-design-system',
    config(config) {
      // Add 'design-system' group
      if (!config.tree) {
        config.tree = {}
      }
      if (!config.tree.groups) {
        config.tree.groups = []
      }
      if (!config.tree.groups.some((g) => g.id === finalOptions.display.group)) {
        let index = 0
        // After 'top' group
        const topIndex = config.tree.groups.findIndex((g) => g.id === 'top')
        if (topIndex > -1) {
          index = topIndex + 1
        }
        // Insert group
        config.tree.groups.splice(index, 0, {
          id: finalOptions.display.group,
          title: toPascalCase(finalOptions.display.group.replaceAll('-', ' '))
        })
      }
    },

    onDev(api, onCleanup) {
      const watcher = api.watcher
        .watch(finalOptions.configFile)
        .on('change', () => generate(api))
        .on('add', () => generate(api))

      onCleanup(() => {
        watcher.close()
      })
    },

    async onBuild(api) {
      await generate(api)
    }
  }
}

const css = `
.display-block{
  min-height: 50px;
}
.display-square{
  height: 150px;
  width: 150px;
}
.info{
  font-style: italic;
  text-transform: lowercase;
  clear: both;
}
.info a{
  text-decoration: none;
}
.force-nowrap{
  text-wrap: nowrap;
}
`

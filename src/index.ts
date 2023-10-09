import { defu } from 'defu'
import type { PluginApiBase, Plugin } from '@histoire/shared'
import { VuetifyTokenOptions, defaultOptions } from './contracts/vuetifyTokenOptions'
import { generateStory } from './generator'
import { toPascalCase } from './utils/helper'
import { findUp } from 'histoire/src/node/util/find-up.js'

export function vuetifyTokens (options: VuetifyTokenOptions = {}): Plugin {
  const finalOptions: VuetifyTokenOptions = defu(options, defaultOptions)

  // merge vuetify theme with histoire theme.
  const vuetifyConfigFile = finalOptions.configFile ?? findUp(process.cwd(), [
    'vuetify.config.js',
    'vuetify.config.cjs',
    'vuetify.config.mjs',
    'vuetify.config.ts',
    'vuetify-config.js',
    'vuetify-config.cjs',
    'vuetify-config.mjs',
    'vuetify-config.ts',
  ])

  async function generate (api: PluginApiBase) {
    try {
      await api.fs.ensureDir(api.pluginTempDir)
      await api.fs.emptyDir(api.pluginTempDir)
      api.moduleLoader.clearCache()
      await api.fs.writeFile(api.path.resolve(api.pluginTempDir, 'style.css'), css)
      const { default: resolveConfig } = await import(vuetifyConfigFile)
      const storyFile = api.path.resolve(api.pluginTempDir, 'Vuetify.story.vue')
      await api.fs.writeFile(storyFile, generateStory(finalOptions, resolveConfig))
      api.addStoryFile(storyFile)
    } catch (e) {
      api.error(e.stack ?? e.message)
    }
  }

  return {
    name: 'vuetify-tokens',
    config (config) {
      if (vuetifyConfigFile) {
        // Add 'design-system' group
        if (!config.tree) {
          config.tree = {}
        }
        if (!config.tree.groups) {
          config.tree.groups = []
        }
        if (!config.tree.groups.some(g => g.id === finalOptions.display.group)) {
          let index = 0
          // After 'top' group
          const topIndex = config.tree.groups.findIndex(g => g.id === 'top')
          if (topIndex > -1) {
            index = topIndex + 1
          }
          // Insert group
          config.tree.groups.splice(index, 0, {
            id: finalOptions.display.group,
            title: toPascalCase(finalOptions.display.group.replaceAll('-', ' ')),
          })
        }
      }
    },

    onDev (api, onCleanup) {
      if (vuetifyConfigFile) {
        const watcher = api.watcher.watch(vuetifyConfigFile)
          .on('change', () => generate(api))
          .on('add', () => generate(api))

        onCleanup(() => {
          watcher.close()
        })
      }
    },

    async onBuild (api) {
      if (vuetifyConfigFile) {
        await generate(api)
      }
    },
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

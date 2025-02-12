import type { PluginOption } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import VueDevtools from 'vite-plugin-vue-devtools'
import progress from 'vite-plugin-progress'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { setupHtmlPlugin } from './html'

export function setupVitePlugins(viteEnv: Env.ImportMeta, buildTime: string) {
  const plugins: PluginOption = [
    vue(),
    vueJsx(),
    VueDevtools(),
    // setupElegantRouter(),
    // setupUnocss(viteEnv),
    // ...setupUnplugin(viteEnv),
    progress(),
    setupHtmlPlugin(buildTime),
    AutoImport({
      resolvers: [ElementPlusResolver()]
    }),
    Components({
      resolvers: [ElementPlusResolver()]
    })
  ]

  return plugins
}

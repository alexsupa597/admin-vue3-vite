import { defineConfig, loadEnv } from 'vite'
import { URL, fileURLToPath } from 'node:url'
import { getBuildTime } from './build/config'
import { setupVitePlugins } from './build/plugins'

export default defineConfig(configEnv => {
  const viteEnv = loadEnv(configEnv.mode, process.cwd()) as unknown as Env.ImportMeta

  const buildTime = getBuildTime()

  // const enableProxy = configEnv.command === 'serve' && !configEnv.isPreview;

  return {
    resolve: {
      alias: {
        '~': fileURLToPath(new URL('./', import.meta.url)),
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler',
          additionalData: `@use "@/styles/scss/global.scss" as *;`
        }
      }
    },
    plugins: [...setupVitePlugins(viteEnv, buildTime)],
    define: {
      BUILD_TIME: JSON.stringify(buildTime)
    },
    server: {
      host: 'localhost',
      port: 3001,
      open: true,
      // proxy: createViteProxy(viteEnv, enableProxy),
      proxy: {
        '/api': {
          target: 'http://localhost:3002',
          changeOrigin: true
        }
      }
    }
  }
})

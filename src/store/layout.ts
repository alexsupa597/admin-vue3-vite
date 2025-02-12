import type { App } from 'vue'
import { createPinia } from 'pinia'

/** Setup Vue store plugin pinia */
export function layoutStore(app: App) {
  const store = createPinia()

  app.use(store)
}

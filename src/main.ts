import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import './style.css'

const app = createApp(App)

app.use(router)
app.use(ElementPlus)

// 添加路由初始化逻辑
router.isReady().then(() => {
  app.mount('#app')
})

<template>
  <div class="aside-con">
    <el-scrollbar class="vertical-menus-scrollbar">
      <el-menu
        :collapse="isCollapse"
        @open="handleOpen"
        @close="handleClose"
        :default-active="activeMenuPath"
        class="el-menu-vertical-demo"
        router
      >
        <sidebar-item v-for="subItem in menus" :key="subItem.path" :item="subItem" />
      </el-menu>
    </el-scrollbar>
  </div>
</template>
<script setup lang="ts">
  import { ref, computed } from 'vue'
  import { useRoute, useRouter } from 'vue-router'

  import SidebarItem from './components/index.vue'

  const isCollapse = ref(false)
  const handleOpen = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
  }
  const handleClose = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
  }

  const router = useRouter()
  const routes = router.options.routes

  console.log(routes, 'routes....')

  const menus = computed(() => {
    let menu = router.options.routes.filter(item => item.children)
    return menu[0].children
  })

  console.log(menus, 'menus....')
  const currentRoute = useRoute()
  const activeMenuPath = computed(() => {
    const { path } = currentRoute
    return path
  })

  // // 添加调试输出
  // console.log('有效路由:', routes)
  // console.log('当前路由:', currentRoute)
</script>

<style scoped>
  .aside-con {
    height: 100vh;
    overflow: hidden;
    background-color: #f6f6f6;
  }

  .el-menu-vertical-demo {
    background: #f6f6f6;
    border-right: none;
  }

  /* 确保滚动容器可见 */
  .el-scrollbar {
    height: calc(100vh - 60px); /* 根据实际header高度调整 */
  }

  /* 菜单项悬停效果 */
  .el-menu-item:hover {
    background-color: #e6f7ff !important;
  }

  /* 确保菜单项可点击 */
  .el-menu-item {
    cursor: pointer;
  }
</style>

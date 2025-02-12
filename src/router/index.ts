import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/layout/index.vue'
const routes = [
  {
    path: '/',
    redirect: '/dashboard'
  },
  {
    name: 'login',
    path: '/login',
    meta: {
      title: '登录',
      icon: 'Login'
    },
    component: () => import('@/views/user/login/index.vue')
  },
  {
    component: Layout,
    path: '/',
    children: [
      {
        path: '/dashboard',
        name: 'dashboard',
        meta: {
          title: '展板',
          icon: 'House'
        },
        component: () => import('@/views/dashboard/index.vue')
      },
      {
        path: '/system',
        name: 'system',
        meta: {
          title: '系统管理',
          icon: 'Avatar'
        },
        children: [
          {
            path: '/system/dept',
            name: 'dept',
            meta: {
              title: '部门管理',
              icon: 'TakeawayBox'
            },
            component: () => import('@/views/system/dept/index.vue')
          },
          {
            path: '/system/user',
            name: 'user',
            meta: {
              title: '用户管理',
              icon: 'TakeawayBox'
            },
            component: () => import('@/views/system/user/index.vue')
          },
          {
            path: '/system/role',
            name: 'role',
            meta: {
              title: '角色管理',
              icon: 'TakeawayBox'
            },
            component: () => import('@/views/system/role/index.vue')
          },
          {
            path: '/system/menu',
            name: 'menu',
            meta: {
              title: '菜单管理',
              icon: 'TakeawayBox'
            },
            component: () => import('@/views/system/menu/index.vue')
          }
        ]
      }
      // {
      //   path: '/productManagement',
      //   name: 'productManagement',
      //   meta: {
      //     title: '产品管理',
      //     icon: 'TakeawayBox'
      //   },
      //   /** 在src/views 文件下创建productManagement文件 */
      //   component: () => import('@/views/productManagement/index.vue')
      // },
      // {
      //   path: '/information',
      //   name: 'information',
      //   meta: {
      //     title: '消息管理',
      //     icon: 'ChatLineSquare'
      //   },
      //   /** 在src/views 文件下创建information文件 */
      //   component: () => import('@/views/information/index.vue')
      // },
      // {
      //   path: '/contract',
      //   name: 'contract',
      //   meta: {
      //     title: '合同管理',
      //     icon: 'Tickets'
      //   },
      //   /** 在src/views 文件下创建information文件 */
      //   component: () => import('@/views/contract/index.vue')
      // },
      // {
      //   path: '/operation',
      //   name: 'operation',
      //   meta: {
      //     title: '操作日志',
      //     icon: 'Pointer'
      //   },
      //   /** 在src/views 文件下创建information文件 */
      //   component: () => import('@/views/operation/index.vue')
      // },
      // {
      //   path: '/conLog',
      //   name: 'conLog',
      //   meta: {
      //     title: '登录日志',
      //     icon: 'Document'
      //   },
      //   /** 在src/views 文件下创建information文件 */
      //   component: () => import('@/views/conLog/index.vue')
      // },
      // {
      //   path: '/setting',
      //   name: 'setting',
      //   meta: {
      //     title: '系统设置',
      //     icon: 'Setting'
      //   },
      //   /** 在src/views 文件下创建information文件 */
      //   component: () => import('@/views/setting/index.vue')
      // }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

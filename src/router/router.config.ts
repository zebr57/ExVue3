// router/router.config.ts
import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router'

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    redirect: '/home',
    meta: {
      title: '首页',
      keepAlive: false
    },
    component: import('@/layout/index.vue'),
    children: [
      {
        path: '/home',
        name: 'Home',
        component: import('@/views/home/index.vue'),
        meta: {
          title: '首页',
          keepAlive: false,
          showTab: true
        }
      }
    ]
  }
]

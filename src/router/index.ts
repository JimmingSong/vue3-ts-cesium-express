import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Chat',
    component: () => import(/* webpackChunkName: "about" */ '../views/chat.vue')
  },
  {
    path: '/cesium',
    name: 'Cesium',
    component: () => import(/* webpackChunkName */'../views/cesiumCom.vue')
  },
  {
    path: '/socket',
    name: 'Socket',
    component: () => import(/* webpackChunkName: "about" */ '../views/chat.vue')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

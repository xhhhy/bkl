import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home.vue'
Vue.use(VueRouter)
const routes = [
  {
    path: '/login',
    name: 'login',
    component: Home
  },
  {
    path: '/password',
    name: 'password',
    component: () => {
      return import('../views/password/password.vue')
    }
  },
  {
    path: '/index',
    name: 'index',
    component: () => {
      return import('../views/index/index.vue')
    }
  },
  {
    path: '/ustd',
    name: 'ustd',
    component: () => {
      return import('../views/ustd/ustd.vue')
    }
  },
  {
    path: '/message',
    name: 'message',
    component: () => {
      return import('../views/message/message.vue')
    }
  },
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

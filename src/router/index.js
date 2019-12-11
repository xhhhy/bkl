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
    path: '/myorder',
    name: 'myorder',
    component: () => {
      return import('../views/myorder/myorder.vue')
    }
  },
  {
    path: '/message',
    name: 'message',
    component: () => {
      return import('../views/message/message.vue')
    }
  },
  {
    path: '/user',
    name: 'user',
    component: () => {
      return import('../views/user/user.vue')
    }
  },
  {
    path: '/myorder',
    name: 'myorder',
    component: () => {
      return import('../views/myorder/myorder.vue')
    }
  },
  {
    path: '/msgcontent',
    name: 'msgcontent',
    component: () => {
      return import('../views/message/msgcontent.vue')
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
    path: '/ustdtake',
    name: 'ustdtake',
    component: () => {
      return import('../views/ustd/ustdtake.vue')
    }
  },
  {
    path: '/firend',
    name: 'firend',
    component: () => {
      return import('../views/firend/firend.vue')
    }
  },
  {
    path: '/myfirend',
    name: 'myfirend',
    component: () => {
      return import('../views/firend/myfirend.vue')
    }
  },
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

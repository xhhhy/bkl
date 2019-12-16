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
  {
    path: '/firustd',
    name: 'firustd',
    component: () => {
      return import('../views/firend/firustd.vue')
    }
  },
  
  {
    path: '/phonebind',
    name: 'phonebind',
    component: () => {
      return import('../views/user/phonebind.vue')
    }
  },
  {
    path: '/changepss',
    name: 'changepss',
    component: () => {
      return import('../views/user/changepss.vue')
    }
  },
  {
    path: '/language',
    name: 'language',
    component: () => {
      return import('../views/user/language.vue')
    }
  },
  {
    path: '/about',
    name: 'about',
    component: () => {
      return import('../views/user/about.vue')
    }
  },
  {
    path: '/security',
    name: 'security',
    component: () => {
      return import('../views/user/security.vue')
    }
  },
  {
    path: '/ustdinto',
    name: 'ustdinto',
    component: () => {
      return import('../views/myorder/ustdinto.vue')
    }
  },

]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

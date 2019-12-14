import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/About.vue')
  },
  {
    path: '/dayone',
    name: 'dayone',
    component: () => import('../views/Dayone.vue')
  },
  {
    path: '/daytwo',
    name: 'daytwo',
    component: () => import('../views/Daytwo.vue')
  },
  {
    path: '/daythree',
    name: 'daythree',
    component: () => import('../views/Daythree.vue')
  },
  {
    path: '/dayfour',
    name: 'dayfour',
    component: () => import('../views/Dayfour.vue')
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

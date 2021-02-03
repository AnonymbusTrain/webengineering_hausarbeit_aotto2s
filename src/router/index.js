import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/uebung1',
    name: 'Uebung1',
    component: () => import(/* webpackChunkName: "uebung1" */ '../views/Uebung1.vue')
  },
  {
    path: '/uebung2',
    name: 'Uebung2',
    component: () => import(/* webpackChunkName: "uebung2" */ '../views/Uebung2.vue')
  },
  {
    path: '/uebung3',
    name: 'Uebung3',
    component: () => import(/* webpackChunkName: "uebung3" */ '../views/Uebung3.vue')
  },
  {
    path: '/uebung4',
    name: 'Uebung4',
    component: () => import(/* webpackChunkName: "uebung4" */ '../views/Uebung4.vue')
  },
  {
    path: '/uebung5',
    name: 'Uebung5',
    component: () => import(/* webpackChunkName: "uebung5" */ '../views/Uebung5.vue')
  },
  {
    path: '/uebung6',
    name: 'Uebung6',
    component: () => import(/* webpackChunkName: "uebung6" */ '../views/Uebung1.vue')
  },
  {
    path: '/uebung7',
    name: 'Uebung7',
    component: () => import(/* webpackChunkName: "uebung7" */ '../views/Uebung1.vue')
  },
  {
    path: '/uebung8',
    name: 'Uebung8',
    component: () => import(/* webpackChunkName: "uebung8" */ '../views/Uebung1.vue')
  },
  {
    path: '/uebung9',
    name: 'Uebung9',
    component: () => import(/* webpackChunkName: "uebung9" */ '../views/Uebung1.vue')
  },
  {
    path: '/uebung10',
    name: 'Uebung10',
    component: () => import(/* webpackChunkName: "uebung10" */ '../views/Uebung1.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router

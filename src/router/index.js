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
    component: () => import(/* webpackChunkName: "about" */ '../views/Uebung1.vue')
  },
  {
    path: '/uebung1/aufgabe4',
    name: 'Aufgabe4',
    component: () => import(/* webpackChunkName: "about" */ '../uebungen/uebung1/Aufgabe4.vue')
  }

]

const router = new VueRouter({
  routes
})

export default router

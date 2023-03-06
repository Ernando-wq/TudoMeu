import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/cursos',
    name: 'cursos',
    component: () => import('../views/Cursos.vue')
  },
  {
    path: '/acoes',
    name: 'acoes',
    component: () => import('../views/Acoes.vue'),
    children: [
      {
        path: ':simbolo',
        component: () => import('../views/AcoesDados.vue'),
        props: true
      }
    ],
  },

]

const router = new VueRouter({
  routes
})

export default router

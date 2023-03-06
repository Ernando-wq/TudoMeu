import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Curso from '../views/Curso.vue'
import Cursos from '../views/Cursos.vue'
import CursoAulas from '../views/CursoAulas.vue'
import CursoDescricao from '../views/CursoDescricao.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/cursos',
    name: 'cursos',
    component: Cursos,
    props: true,
    children: [
      {
        path: ':curso',
        name: 'curso',
        component: Curso,
        props: true,
        children:[
          {
            path: "aulas",
            name: 'aulas',
            component: CursoAulas
          },
          {
            path: "descricao",
            name: 'descricao',
            component: CursoDescricao
          }
        ]
      }
    ],
  },
]

const router = new VueRouter({
  routes
})

export default router

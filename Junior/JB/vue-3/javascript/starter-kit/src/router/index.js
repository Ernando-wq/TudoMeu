import axios from 'axios';
import { setupLayouts } from 'virtual:generated-layouts';
import { createRouter, createWebHistory } from 'vue-router';
import routes from '~pages';
import { store } from './../store';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      beforeEnter: (to, from, next) => {
        guard(to, from, next);
       
      }
    },
    {
      path: '/admincreate',
      name: 'admincreate',
      beforeEnter: (to, from, next) => {
        guard(to, from, next);
      }
    },
    {
      path: '/gerentecreate',
      name: 'gerentecreate',
      beforeEnter: (to, from, next) => {
        guard(to, from, next);
      }
    },
    {
      path: '/vendendorcreate',
      name: 'vendendorcreate',
      beforeEnter: (to, from, next) => {
        guard(to, from, next);
      }
    },
    {
      path: '/sitescreate',
      name: 'sitescreate',
      beforeEnter: (to, from, next) => {
        guard(to, from, next);
      }
    },
    {
      path: '/newadmins',
      name: 'newadmins',
      beforeEnter: (to, from, next) => {
        guard(to, from, next);
      }
    },
    // {
    //   path: '/sites/:id',
    //   name: 'sites-id',
    //   // component: () => import('../pages/sites/[id].vue'),
    //   // beforeEnter: (to, from, next) => {
    //   //   guard(to, from, next);
    //   // }
    // },
    

    ...setupLayouts(routes),
  ],
  scrollBehavior() {
    return { top: 0 }
  },
})

const getMenu = async (to, from, next) =>{
  const response = await axios.get('menu')
  // const {setMenu} = mapActions(['setMenu'])
  store.dispatch('setMenu', response.data);
  // setMenu(response.data)
  // console.log(response.data)

}

const guard = async (to, from, next) =>{
  try {
    const token = localStorage.getItem('token')
    const response = await axios.get('auth')
    
    if(response.data){

      console.log('logado')
      await getMenu()
      router.push({name: 'index'})
      next()
      
    }
  } catch (error) {
    console.log(error)
    alert('usuario não autenticado')
    router.push({name:'login'})
    
  }
}

export default router

import { createApp, VueElement } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'

import VueSweetalert2 from "vue-sweetalert2";

import "sweetalert2/dist/sweetalert2.min.css";




loadFonts()


createApp(App)
  .use(VueSweetalert2)
  .use(router)
  .use(store)
  .use(vuetify)
  .mount('#app')

import Vue from 'vue'
import App from './App.vue'

import VueResource from 'vue-resource';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import VueRouter from 'vue-router';
import VueTheMask from 'vue-the-mask';
import VueSweetalert2 from 'vue-sweetalert2';

import { routes } from './routes';

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'sweetalert2/dist/sweetalert2.min.css'


Vue.use(BootstrapVue);
Vue.use(VueResource);
Vue.use(VueRouter);
Vue.use(VueTheMask);
Vue.use(VueSweetalert2);

const router = new VueRouter({ mode: 'history', routes: routes });


router.beforeEach((to, from, next) => {

  if (to.meta.requiresAuth) {

    console.log(to.meta.requiresAuth);
    const usuarioAutorizado = JSON.parse(window.localStorage.getItem('usuarioAutorizado'));
    if (usuarioAutorizado && usuarioAutorizado.access_token) {

      next();
    } else {

      next({ name: 'Login' });
    }
  } else {
    
    next();
  }
})


new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

import Vue from 'vue'
import VueRouter from 'vue-router'
import middlewares from './middleware'

Vue.use(VueRouter)
let routes = [

  {
    path: '/login', name: 'login', component: Login, beforeEnter: middlewares.guest
  },
//   {
//     path: '/general', name: 'homeIndex', component: HomeIndex, beforeEnter: middlewares.auth
//   },

]

const router = new VueRouter({
  routes
});

export default router;
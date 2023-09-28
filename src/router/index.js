
import { createRouter, createWebHistory } from 'vue-router';

import HomeView from '../views/views.home.vue';
import AuthView from '../views/views.login.vue';

const routes = [

  {path:'/', name:"Homeview", component: HomeView},
  {path:'/user/login', name:"Loginview", component: AuthView}

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
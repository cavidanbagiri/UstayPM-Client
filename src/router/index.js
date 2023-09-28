
import { createRouter, createWebHistory } from 'vue-router';

import HomeView from '../views/views.home.vue';
import AuthView from '../views/views.login.vue';
import STFView from '../views/views.stf.vue';

const routes = [

  {path:'/', name:"Homeview", component: HomeView},
  {path:'/stf', name:"STFView", component: STFView},
  {path:'/user/login', name:"Loginview", component: AuthView}

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
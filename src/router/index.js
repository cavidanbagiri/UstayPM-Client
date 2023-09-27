
import { createRouter, createWebHistory } from 'vue-router';

import HomeView from '../views/views.home.vue';

const routes = [

  {path:'/', name:"homeview", component: HomeView}

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
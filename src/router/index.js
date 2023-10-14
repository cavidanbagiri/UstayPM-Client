
import { createRouter, createWebHashHistory } from 'vue-router';

import HomeView from '../views/views.home.vue';
import AuthView from '../views/views.login.vue';
import STFView from '../views/views.stf.vue';
import ProcurementViews from '../views/views.procurement.vue';
import WarehouseView from '../views/views.warehouse.vue';

const routes = [

  {path:'/', name:"Homeview", component: HomeView},
  {path:'/stf', name:"STFView", component: STFView},
  {path:'/user/login', name:"Loginview", component: AuthView},
  {path:'/procurement',name:"ProcurementView", component: ProcurementViews},
  {path:'/warehouse',name:"WarehouseView", component: WarehouseView},

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
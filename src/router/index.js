
import { createRouter, createWebHashHistory } from 'vue-router';

const HomeView = () => import('../views/views.home.vue');
const AuthView  = () => import('../views/views.login.vue');
const STFView  = () => import('../views/views.stf.vue');
const ProcurementViews  = () => import('../views/views.procurement.vue');
const WarehouseView  = () => import('../views/views.warehouse.vue');
const ProfileView = () => import('../views/views.profile.vue');
const StarredView = () => import('../views/views.starred.vue');

const routes = [

  {path:'/', name:"Homeview", component: HomeView},
  {path:'/stf', name:"STFView", component: STFView},
  {path:'/user/login', name:"Loginview", component: AuthView},
  {path:'/procurement',name:"ProcurementView", component: ProcurementViews},
  {path:'/warehouse',name:"WarehouseView", component: WarehouseView},
  {path:'/profile',name:"ProfileView", component: ProfileView},
  {path:'/starred',name:"StarredView", component: StarredView},

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
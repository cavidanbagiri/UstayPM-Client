<template>
  <div class="flex flex-col bg-gray-100">
    <Dashboard/>
    <span class="text-start text-5xl font-bold my-3 text-gray-600 pl-10">Charts</span>
    <div class="grid grid-cols-12 gap-2 px-3 ">
      <OrderChart :statistic_data = 'index_store.statistic_data' />
      <ProcurementChart :statistic_data = 'index_store.statistic_data' />
      <WarehouseChart/>
    </div>
    <div class="">
      <UserTable/>
    </div>
  </div>

</template>

<script setup>

import { onMounted } from 'vue';

import Dashboard from '../components/home/Dashboard.vue';
import OrderChart from '../components/home/charts/OrderChart.vue';
import ProcurementChart from '../components/home/charts/ProcurementChart.vue';
import WarehouseChart from '../components/home/charts/WarehouseChart.vue';
import UserTable from '../components/home/usertable/UserTable.vue';
import UserStore from '../store/store.user_store';
import IndexStore from '../store/store.index';
const index_store = IndexStore();
const user_store = UserStore();
onMounted(async ()=>{
  if(user_store.user){
    console.log('yes user : ',user_store.user);
    await index_store.fetchStatisticResult(user_store.user.id);
  }

})

</script>

<style lang="scss" scoped>

</style>

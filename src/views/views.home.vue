<template>
  <div class="flex flex-col bg-gray-100">
    
    <!-- Dashboard Information -->
    <Dashboard />

    <!-- Common Charts -->
    <div>
      <div class="px-4 py-4" style="font-family: 'ROboto';">
        <span class="text-6xl">Common Charts</span>
      </div>
      <div class="grid grid-cols-12 gap-2 px-3 pt-2 ">
        <WarehouseChart />
        <OrderChart :statistic_data='index_store.statistic_data' />
        <ProcurementChart :statistic_data='index_store.statistic_data' />
      </div>
    </div>
    
    <!-- User Information Charts -->
    <div>
      <div class="px-4 py-4" style="font-family: 'ROboto';">
        <span class="text-6xl">User Information Charts</span>
      </div>
      <div class="grid grid-cols-12 mt-3 mb-5 px-3 gap-4 h-4/5 overflow-hidden">
        <Inform />
        <UserTable />
        <Companies />
      </div>
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
import Inform from '../components/home/inform/Inform.vue';
import UserStore from '../store/store.user_store';
import IndexStore from '../store/store.index';
import Companies from '../components/home/companies/Companies.vue';
const index_store = IndexStore();
const user_store = UserStore();
onMounted(async () => {
  if (user_store.user) {
    console.log('yes user : ', user_store.user);
    await index_store.fetchStatisticResult(user_store.user.id);
  }

})

</script>

<style lang="scss" scoped></style>

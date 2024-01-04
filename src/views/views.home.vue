<template>
  <div class="flex flex-col bg-gray-100">
    
    <!-- Dashboard Information -->
    <Dashboard />

    <!-- Common Charts -->
    <div>
      <div class="px-4 py-4" style="font-family: 'Roboto';">
        <span class="text-6xl">Common Charts</span>
      </div>
      <div class="grid grid-cols-12 gap-2 px-3 pt-2 ">
        <WarehouseChart />
        <STFChart :statistic_data='index_store.statistic_data' />
        <SMChart :statistic_data='index_store.statistic_data' />
      </div>
    </div>
    
    <!-- User Information Charts -->
    <div>
      <div class="px-4 py-4" style="font-family: 'Roboto';">
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

import Dashboard from '../components/home/Dashboard.vue';
import STFChart from '../components/home/charts/STFChart.vue';
import SMChart from '../components/home/charts/SMChart.vue';
import WarehouseChart from '../components/home/charts/WarehouseChart.vue';
import UserTable from '../components/home/usertable/UserTable.vue';
import Inform from '../components/home/inform/Inform.vue';
import IndexStore from '../store/store.index';
import Companies from '../components/home/companies/Companies.vue';
const index_store = IndexStore();


</script>

<style lang="scss" scoped></style>

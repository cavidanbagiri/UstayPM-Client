<template>
  <div class="flex flex-col bg-gray-100">
    <!-- Show Dashboard -->
    <Dashboard/>
    <span class="text-start text-5xl font-bold my-3 text-gray-600 pl-10">Charts</span>
    <div class="grid grid-cols-12 gap-2 px-3 ">
      <OrderChart/>
      <ProcurementChart/>
      <WarehouseChart/>
    </div>
    <div class="">
      <UserTable/>
    </div>
  </div>

</template>

<script setup>

import Dashboard from '../components/home/dashboard.vue';
import OrderChart from '../components/home/charts/OrderChart.vue';
import ProcurementChart from '../components/home/charts/ProcurementChart.vue';
import WarehouseChart from '../components/home/charts/WarehouseChart.vue';
import UserTable from '../components/home/usertable/UserTable.vue';

</script>

<style lang="scss" scoped>

</style>
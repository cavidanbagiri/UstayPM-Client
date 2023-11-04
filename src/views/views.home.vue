<template>
  <div class="flex flex-col">
    <!-- Show Dashboard -->
    <Dashboard/>
    <span class="text-start text-5xl font-bold my-2 text-gray-600 pl-10">Quick Look</span>
    <div class="flex flex-row justify-between">
      <OrderChart/>
      <ProcurementChart/>
      <WarehouseChart/>
      <WorkspaceChart/>
    </div>
    <UserTable/>
  </div>

</template>

<script setup>

import Dashboard from '../components/home/dashboard.vue';
import OrderChart from '../components/home/charts/OrderChart.vue';
import ProcurementChart from '../components/home/charts/ProcurementChart.vue';
import WarehouseChart from '../components/home/charts/WarehouseChart.vue';
import WorkspaceChart from '../components/home/charts/WorkspaceChart.vue';
import UserTable from '../components/home/usertable/UserTable.vue';

</script>

<style lang="scss" scoped>

</style>
<template>
  <div class="flex flex-col">
    <!-- Show Dashboard -->
    <Dashboard/>
    <div class="flex flex-row justify-between">
      <OrderChart/>
      <ProcurementChart/>
      <WarehouseChart/>
      <WorkspaceChart/>
    </div>
  </div>
</template>

<script setup>

import Dashboard from '../components/home/dashboard.vue';
import OrderChart from '../components/home/charts/OrderChart.vue';
import ProcurementChart from '../components/home/charts/ProcurementChart.vue';
import WarehouseChart from '../components/home/charts/WarehouseChart.vue';
import WorkspaceChart from '../components/home/charts/WorkspaceChart.vue';


</script>

<style lang="scss" scoped>

</style>
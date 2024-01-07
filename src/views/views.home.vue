<template>
  <div class="flex flex-col bg-gray-100">
    
    <!-- Dashboard Information -->
    <Dashboard />

    <div>
      <!-- Title Section -->
      <div class="px-4 pb-3 pt-4" style="font-family: 'Roboto';">
        <span class="text-4xl">Dashboard</span>
      </div>

      <!-- STF SM Statistic Data For Each -->
      <div class="px-4 mb-5">
        <STFStatistics/>
      </div>

      <!-- Group Chart, STF and SM statistic Data Chart -->
      <div class="grid grid-cols-12 gap-2 px-3 pt-2 ">
        <GroupOrderChart />
        <STFChart />
        <SMChart  />
      </div>
      
      <!-- Warehouse Chart -->
      <div class="grid grid-cols-12 gap-4 px-3 pt-2 mt-5 ">
        <WarehouseStockGroup />
        <MaterialTypeChart />
        <FieldChart />
      </div>
    </div>
    
    <!-- STF Table -->
    <div>
      <div class="grid grid-cols-12 gap-2 mt-5 mb-5 py-2 mx-4 ">
        <STFTable/>
      </div>
    </div>

  </div>
</template>

<script setup>

import Dashboard from '../components/home/Dashboard.vue';
import STFChart from '../components/home/charts/STFChart.vue';
import SMChart from '../components/home/charts/SMChart.vue';
import GroupOrderChart from '../components/home/charts/GroupOrderChart.vue';
import IndexStore from '../store/store.index';
import MaterialTypeChart from '../components/home/charts/MaterialTypeChart.vue';
import WarehouseStockGroup from '../components/home/charts/WarehouseStockGroup.vue';
import FieldChart from '../components/home/charts/FieldChart.vue';
import STFStatistics from '../layouts/STFStatistics.vue'
import STFTable from '../components/home/charts/STFTable.vue';
const index_store = IndexStore();


</script>

<style lang="scss" scoped></style>

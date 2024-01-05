<template>
  <div class="flex flex-col bg-gray-100">
    
    <!-- Dashboard Information -->
    <Dashboard />

    <!-- Common Charts -->
    <div>
      <div class="px-4 pb-3 pt-4" style="font-family: 'Roboto';">
        <span class="text-4xl">Dashboard</span>
      </div>

      <!-- Common Chart -->
      <div class="px-4 mb-5">
        <!-- <TotalInformChart :statistic_data='index_store.statistic_data' /> -->
        <STFStatistics/>
      </div>

      <!-- Procurement Chart -->
      <div class="grid grid-cols-12 gap-2 px-3 pt-2 ">
        <GroupOrderChart />
        <STFChart :statistic_data='index_store.statistic_data' />
        <SMChart :statistic_data='index_store.statistic_data' />
      </div>
      
      <!-- Warehouse Chart -->
      <div class="grid grid-cols-12 gap-4 px-3 pt-2 mt-5 ">
        <WarehouseChart :statistic_data='index_store.statistic_data'/>
        <WarehouseStockGroup />
        <MaterialTypeChart />
        <FieldChart />
      </div>
    </div>
    
    <!-- STF Charts -->
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
import WarehouseChart from '../components/home/charts/WarehouseChart.vue';
import WarehouseStockGroup from '../components/home/charts/WarehouseStockGroup.vue';
import FieldChart from '../components/home/charts/FieldChart.vue';
import STFStatistics from '../layouts/STFStatistics.vue'
import TotalInformChart from '../components/home/charts/TotalInformChart.vue';
import STFTable from '../components/home/charts/STFTable.vue';
const index_store = IndexStore();


</script>

<style lang="scss" scoped></style>

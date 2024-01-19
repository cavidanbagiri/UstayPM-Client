<template>
  <div class="flex flex-col bg-gray-100 px-5">
    
    <!-- Dashboard Information -->
    <Dashboard />

    <!-- New Admin Dashboard Section -->
    <div class=" py-4 flex flex-col">
      <TotalStatistic/>
      <STFSMChart/>
    </div>
    
    <!-- STF Table -->
    <div>
      <div class="grid grid-cols-12  gap-6 mb-5  ">
        <STFTable/>
        <UserTable/>
        <WarehouseStockChart/>
      </div>
    </div>

  </div>
</template>

<script setup>

import Dashboard from '../components/home/newversioncahrt/Dashboard.vue';
import TotalStatistic from '../components/home/newversioncahrt/TotalStatistic.vue';
import STFSMChart from '../components/home/newversioncahrt/STFSMChart.vue';
import STFTable from '../components/home/newversioncahrt/STFTable.vue';
import UserTable from '../components/home/newversioncahrt/UserTable.vue';
import WarehouseStockChart from '../components/home/newversioncahrt/WarehouseStockChart.vue';
import IndexStore from '../store/store.index';
const index_store = IndexStore();


</script>

<style lang="scss" scoped></style>

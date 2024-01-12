<template>
  <div class="flex flex-col bg-gray-100 px-5">
    
    <!-- Dashboard Information -->
    <Dashboard />

    <!-- New Admin Dashboard Section -->
    <div class=" py-4 flex flex-col">
      <!-- <div class=" text-4xl my-1 font-bold" style="font-family: 'Figtree';">Dashboard</div> -->
      <TotalStatistic/>
      <STFSMChart/>
    </div>
    
    <!-- STF Table -->
    <div>
      <div class="grid grid-cols-12 my-2 gap-2 mb-5 px-8 ">
        <STFTable/>
      </div>
    </div>

  </div>
</template>

<script setup>

import Dashboard from '../components/home/Dashboard.vue';
import TotalStatistic from '../components/home/newversioncahrt/TotalStatistic.vue';
import STFSMChart from '../components/home/newversioncahrt/STFSMChart.vue';
import STFTable from '../components/home/charts/STFTable.vue';
import IndexStore from '../store/store.index';
const index_store = IndexStore();


</script>

<style lang="scss" scoped></style>

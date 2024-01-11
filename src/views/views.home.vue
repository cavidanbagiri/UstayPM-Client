<template>
  <div class="flex flex-col bg-gray-100">
    
    <!-- Dashboard Information -->
    <!-- <Dashboard /> -->

    <!-- New Admin Dashboard Section -->
    <div class=" py-5 px-8 flex flex-col">
      <div class=" text-4xl my-1 font-bold" style="font-family: 'Figtree';">Dashboard</div>
      <TotalStatistic/>
      <STFSMChart/>
    </div>

    <!-- <div>
      <div class="px-4 pb-3 pt-4" style="font-family: 'Roboto';">
        <span class="text-4xl">Dashboard</span>
      </div>

      <div class="px-4 mb-5">
        <STFStatistics/>
      </div>

      <div class="grid grid-cols-12 gap-2 px-3 pt-2 ">
        <GroupOrderChart />
        <STFChart />
        <SMChart  />
      </div>
      
      <div class="grid grid-cols-12 gap-4 px-3 pt-2 mt-5 grid-rows-12">
        <div class="col-span-6">
          <WarehouseStockGroup />
          <div class="grid grid-cols-12 mt-5 gap-4">
          <MaterialTypeChart />
          <FieldChart />
          </div>
        </div>
        <div class="col-span-6">
          <WarehouseStockGroup1 />
        </div>
      </div>
    </div> -->
    
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
// import STFChart from '../components/home/charts/STFChart.vue';
// import SMChart from '../components/home/charts/SMChart.vue';
// import GroupOrderChart from '../components/home/charts/GroupOrderChart.vue';
// import MaterialTypeChart from '../components/home/charts/MaterialTypeChart.vue';
// import WarehouseStockGroup from '../components/home/charts/WarehouseStockGroup.vue';
// import WarehouseStockGroup1 from '../components/home/charts/WarehouseStockGroup1.vue';
// import FieldChart from '../components/home/charts/FieldChart.vue';
// import STFStatistics from '../layouts/STFStatistics.vue'
import STFTable from '../components/home/charts/STFTable.vue';
import IndexStore from '../store/store.index';
const index_store = IndexStore();


</script>

<style lang="scss" scoped></style>

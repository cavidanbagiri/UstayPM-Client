<template>
  <div class="flex flex-col bg-gray-100 px-5">

    <!-- Dashboard Information -->
    <Dashboard />

    <!-- New Admin Dashboard Section -->
    <div class=" py-4 flex flex-col">

      <!-- Sommon STF SM Canceled Count -->
      <TotalStatistic />
      
      <div class="grid grid-cols-12 gap-6 my-3 ">

        <!-- STF Chart -->
        <STFChart />

        <!-- SM Chart -->
        <SMChart />

        <!-- Warehouse Group Stock -->
        <WarehouseStockChart1 />

        <!-- Group Order Chart -->
        <GroupCountChart />

        <!-- Warehouse Expand Chart -->
        <WarehouseDatasChart />

      </div>
    </div>

    <!-- Tables Section -->
    <div>
      <div class="grid grid-cols-12  gap-6 mb-5  ">
        <!-- Show Warehouse Stock -->
        <WarehouseStockChart />
        <!-- STF Table -->
        <STFTable />
        <!-- User Table -->
        <UserTable />
      </div>
    </div>

  </div>
</template>

<script setup>

import { onMounted } from 'vue';

import Dashboard from '../components/home/newversioncahrt/Dashboard.vue';
import TotalStatistic from '../components/home/newversioncahrt/TotalStatistic.vue';
import STFChart from '../components/home/newversioncahrt/STFChart.vue';
import SMChart from '../components/home/newversioncahrt/SMChart.vue';
import WarehouseStockChart1 from '../components/home/newversioncahrt/WarehouseStockChart1.vue';
import GroupCountChart from '../components/home/newversioncahrt/GroupCountChart.vue';
import WarehouseDatasChart from '../components/home/newversioncahrt/WarehouseDatasChart.vue'
import STFTable from '../components/home/newversioncahrt/STFTable.vue';
import UserTable from '../components/home/newversioncahrt/UserTable.vue';
import WarehouseStockChart from '../components/home/newversioncahrt/WarehouseStockChart.vue';
import IndexStore from '../store/store.index';
import UserStore from '../store/store.user';

const index_store = IndexStore();
const user_store = UserStore();

onMounted(async () => {await index_store.groupChartStatisticData(user_store.user?.projectId);})

</script>

<style lang="scss" scoped></style>

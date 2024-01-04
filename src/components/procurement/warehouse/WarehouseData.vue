<template>
  <div class="flex flex-col" style="display: inline-block;">
    <TableCommonComp/>
    <!-- Filter Statistic Section-->
    <div class="sticky top-10 px-1 z-10">
      <div class=" sticky left-16 flex flex-col bg-white" style="display: inline-block; width: calc(100vw - 5rem);">

        <STFStatistics />


        <!-- Table Filter Section -->
        <TableFilterWarehouse @filterFunction="filterFunction">
          <TableExpand v-if="true" :table_headers="procurement_store.GETWAREHOUSEHEADERS" />
        </TableFilterWarehouse>

      </div>
    </div>

    <table v-if="procurement_store.GETWAREHOUSEHEADERS.length" class=" mx-2 text-gray-800 dark:text-gray-400 w-full shadow-xl bg-white mt-1">
      <TableHeader :table_headers="procurement_store.GETWAREHOUSEHEADERS" />
      <ShowWarehouseEachRow v-for="(i, index) in procurement_store.warehouse_data" :each="i" :index="index" />
    </table>

    <div v-else class="flex flex-row justify-center items-center w-full h-96">
      <span class="loading loading-dots loading-lg"></span>
    </div>

    <div v-if="procurement_store.warehouse_data?.length === 0" class="flex flex-row justify-center items-center w-full h-96">
        <span class="text-3xl">
            There is not any Orders for showing
        </span>
    </div>

    <!-- <table-row-inform :row_inform="index_store.row_detail_data" :row_inform_condition="index_store.row_inform_condition"
      @closeRowInform="closeRowInform" />-->

    <SelectingRows />
  </div>
</template>
   
<script setup>

import { onMounted } from 'vue';
import ProcurementStore from '../../../store/store.procurement';
import STFStatistics from '../../../layouts/STFStatistics.vue';
import TableHeader from '../../../layouts/TableHeader.vue';
import ShowWarehouseEachRow from './ShowWarehouseEachRow.vue';
import SelectingRows from './SelectingRows.vue';
import TableFilterWarehouse from '../../../layouts/TableFilterWarehouse.vue';
import TableExpand from '../../../layouts/TableExpand.vue'
import TableCommonComp from '../../design/TableCommonComp.vue';
import UserStore from '../../../store/store.user';
import WarehouseStore from '../../../store/store.warehouse';

const procurement_store = ProcurementStore();
const user_store = UserStore();
const warehouse_store = WarehouseStore();

onMounted(async () => {
  if(user_store.user){
    await procurement_store.fetchWarehouseData(user_store.user.projectId);
    await warehouse_store.getCompaniesNames();
    await warehouse_store.fetchSTFCreateUsernames(user_store.user.projectId);
    if(procurement_store.GETWAREHOUSEHEADERS.length === 0){ 
      await procurement_store.getWarehouseHeaders();
    }
  }
  
})


// Get Filtered Data
const filterFunction = async (filtered_objects)=>{
    if(user_store.GETUSER !== undefined ){
        filtered_objects.user = user_store?.GETUSER?.id
        await procurement_store.getFilteredWarehouseData(filtered_objects);
    }
}


</script> 

<style lang="scss" scoped></style>
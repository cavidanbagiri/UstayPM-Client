<template>
  <div class="flex flex-col" style="display: inline-block;">
    <TableCommonComp/>
    <!-- Filter Statistic Section-->
    <div class="sticky top-10 px-1 ">
      <div class=" sticky left-16 flex flex-col bg-white" style="display: inline-block; width: calc(100vw - 5rem);">

        <STFStatistics />


        <!-- Table Filter Section -->
        <TableFilterWarehouse @filterFunction="filterFunction">
          <TableExpand v-if="true" :table_headers="stf_store.GETWAREHOUSEHEADERS" />
        </TableFilterWarehouse>

      </div>
    </div>

    <table v-if="stf_store.GETWAREHOUSEHEADERS.length" class=" mx-2 text-gray-800  w-full shadow-xl bg-white mt-1">
      <TableHeader :table_headers="stf_store.GETWAREHOUSEHEADERS" />
      <ShowWarehouseEachRow v-for="(i, index) in stf_store.warehouse_data" :each="i" :index="index" />
    </table>

    <div v-if="stf_store.warehouse_data_loading" class="flex flex-row justify-center items-center w-full h-96">
      <span class="loading loading-dots loading-lg"></span>
    </div>

    <div v-if="stf_store.warehouse_data_cond_text" class="flex flex-row justify-center items-center w-full h-96">
      <span class="text-3xl">
          There is not any data in warehouse which created by <span class="font-bold">{{user_store.user.name}} {{user_store.user.surname}}</span>
        </span>
    </div>

    <!-- <table-row-inform :row_inform="index_store.row_detail_data" :row_inform_condition="index_store.row_inform_condition"
      @closeRowInform="closeRowInform" />-->

    <SelectingRows />
  </div>
</template>
   
<script setup>

import { onMounted } from 'vue';
import STFStore from '../../../store/store.stf';
import STFStatistics from '../../../layouts/STFStatistics.vue';
import TableHeader from '../../../layouts/TableHeader.vue';
import ShowWarehouseEachRow from './ShowWarehouseEachRow.vue';
import SelectingRows from './SelectingRows.vue';
import UserStore from '../../../store/store.user_store';
import TableFilterWarehouse from '../../../layouts/TableFilterWarehouse.vue';
import TableExpand from '../../../layouts/TableExpand.vue'
import TableCommonComp from '../../design/TableCommonComp.vue';
import WarehouseStore from '../../../store/store.warehouse';

const stf_store = STFStore();
const user_store = UserStore();
const warehouse_store = WarehouseStore();

onMounted(async () => {
  const user = user_store.GETUSER;
  if (user === undefined) {
  }
  else {
    await stf_store.fetchWarehouseData(user);
    await warehouse_store.getCompaniesNames();
    if(stf_store.GETWAREHOUSEHEADERS.length === 0){ 
      await stf_store.getWarehouseHeaders();
    }
  }
})


// Get Filtered Data
const filterFunction = async (filtered_objects)=>{
    if(user_store.GETUSER !== undefined ){
        filtered_objects.user = user_store?.GETUSER?.id
        await stf_store.getFilteredWarehouseData(filtered_objects);
    }
}


</script> 

<style lang="scss" scoped></style>
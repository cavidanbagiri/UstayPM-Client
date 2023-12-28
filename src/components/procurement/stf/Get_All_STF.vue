
<template>
  <div class="flex flex-col" style="display: inline-block;">
    <TableCommonComp/>
    <div class="h-40 sticky top-10 bg-white w-full z-10">
      <div class=" sticky left-16 flex flex-col bg-white" style="display: inline-block; width: calc(100vw - 5rem);">
        <!-- <table-stf-statistics :statistic_result="procurement_store.statistic_result"
          @fetchCurrentData="fetchCurrentData" /> -->
          <STFStatistics/>


        <!-- <Filter_Section_Comp /> -->
        <TableFilter @filterFunction="filterFunction">
          <TableExpand v-if="true" :table_headers="procurement_store.stf_table_headers" />
        </TableFilter>

      </div>
    </div>

    <div v-if="procurement_store.stf_table_headers.length>0" class="mt-1 shadow-md sm:rounded-lg w-full border-2 analyz_header">

      <!-- Table -->
      <table  class="text-left text-gray-800 dark:text-gray-400 w-full">
        <!-- Table Header -->
        <TableHeader :table_headers="procurement_store.stf_table_headers" />
         <!-- Table Border -->
        <Get_All_STF_Table_Body_Comp /> 
      </table>
    </div>

    <div v-else class="flex flex-row justify-center items-center w-full h-96">  
      <span class="loading loading-dots loading-lg"></span>
    </div>

    <div v-if="procurement_store.all_stf?.length === 0" class="flex flex-row justify-center items-center w-full h-96">
      <span class="text-3xl">
        There is not any Orders for showing
      </span>
    </div>

    <!-- <table-row-inform :row_inform="index_store.row_detail_data" :row_inform_condition="index_store.row_inform_condition"
      @closeRowInform="closeRowInform" /> -->
    <Show_STF_Selecting_Task />

  </div>
</template>

<script setup>

// Import Section
import { onMounted, watchEffect } from 'vue'

import TableHeader from '../../../layouts/TableHeader.vue';
import TableCommonComp from '../../design/TableCommonComp.vue';

import Show_STF_Selecting_Task from './Show_STF_Selecting_Task.vue';
import Get_All_STF_Table_Body_Comp from './Get_All_STF_Table_Body_Comp.vue';
import STFStatistics from '../../../layouts/STFStatistics.vue';
import TableFilter from '../../../layouts/TableFilter.vue';
import TableExpand from '../../../layouts/TableExpand.vue'
import ProcurementStore from '../../../store/store.procurement';
// Create variable for importing data
const procurement_store = ProcurementStore();
// const index_store = IndexStore();

onMounted(async () => {
  // Fetch All STF
  await procurement_store.fetchSTF()
  if (procurement_store.stf_table_headers.length === 0) {
    procurement_store.getSTFHeaders();
  }
  await procurement_store.fetchSTFCreateUsernames();
  await procurement_store.getCompaniesNames();
}
)

//Get Filtered Data
const filterFunction = async (filtered_objects) => {
  await procurement_store.getFilteredDataSTF(filtered_objects);
}

// After Creating SM, This code will work
watchEffect(async () => {

  // For Fetch All STF
  if (procurement_store.after_created) {
    await procurement_store.fetchSTF();
  }

})

// const fetchCurrentData = async (statistic_result_value) => {
//   if (statistic_result_value === 0) {
//     await procurement_store.fetchAllSTF();
//   }
//   else if(statistic_result_value === 4){
//     procurement_store.tab_num = 4;
//   } 
//   else {
//     await procurement_store.fetchStatisticResultData(statistic_result_value);
//   }
// }

// const closeRowInform = () => index_store.row_inform_condition = false;

</script>

<style lang="scss" scoped></style>

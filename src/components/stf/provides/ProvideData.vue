
<template>
  <div class="flex flex-col" style="display:inline-block">
    <TableCommonComp />
    <div class="sticky h-40 top-10 bg-white z-10">
      <div class=" sticky left-16 flex flex-col w-max bg-white" style="display:inline-block; width: calc(100vw - 5rem);">

        <STFStatistics />

        <!-- <Filter_Section_Comp /> -->
        <!-- <TableFilter @filterFunction="filterFunction"> -->
        <TableFilterProvide @filterFunction="filterFunction">
          <TableExpand v-if="true" :table_headers="stf_store.provided_data_headers" />
        </TableFilterProvide>

      </div>
    </div>

    <!-- Table -->
    <div class="">
      <table v-if="stf_store.provided_data_headers.length"
        class=" mx-2 text-gray-800 dark:text-gray-400 w-full shadow-xl bg-white mt-1" style="font-size: xx-small;">
        <TableHeader :table_headers="stf_store.provided_data_headers" />
        <Provided_Table_Body />
      </table>
      <div v-if="stf_store.provide_data_loading" class="flex flex-row justify-center items-center w-full h-96">
        <span class="loading loading-dots loading-lg"></span>
      </div>
      <div v-if="stf_store.provide_data_cond_text" class="flex flex-row justify-center items-center w-full h-96">
      <span class="text-3xl">
        There is not any provide data which created by <span class="font-bold">{{user_store.user.name}} {{user_store.user.surname}}</span>
      </span>
    </div>
    </div>

  </div>
</template>

<script setup>

// Import Section
import { onMounted } from 'vue';

import STFStatistics from '../../../layouts/STFStatistics.vue';
import TableFilterProvide from '../../../layouts/TableFilterProvide.vue';
import TableExpand from '../../../layouts/TableExpand.vue';
import TableHeader from '../../../layouts/TableHeader.vue';
import Provided_Table_Body from './Provided_Table_Body.vue'
import TableCommonComp from '../../design/TableCommonComp.vue';
import UserStore from '../../../store/store.user';
import STFStore from '../../../store/store.stf';
const stf_store = STFStore();
const user_store = UserStore();

onMounted(async () => {
  const user = user_store.GETUSER;
  if (user === undefined) {
  }
  else {
    console.log('else work');
    await stf_store.fetchProvidedData(user);
    if (stf_store.provided_data_headers.length === 0) {
      stf_store.getProvidedDataHeaders();
    }
  }
})

// Get Filtered Data
const filterFunction = async (filtered_objects) => {
  if(user_store.GETUSER !== undefined ){
        filtered_objects.department = user_store?.GETUSER?.departmentId
        await stf_store.getFilteredDataProvided(filtered_objects);
    }
}

// Get Filtered Data
// const filterFunction = async (filtered_objects)=>{
//     await warehouse_store.getFilteredDataReceivedSMS(filtered_objects);
// }

// const fetchCurrentData = async (statistic_result_value) => {
//     if(statistic_result_value === 0){
//         await warehouse_store.getWaitingsSMS();
//     }
//     if (statistic_result_value === 4) {
//         warehouse_store.tab_num = 5;
//     }
//     else {
//         await warehouse_store.getStatisticResultData(statistic_result_value);
//     }
//   if (statistic_result_value !== 0) {
//     await warehouse_store.getStatisticResultData(statistic_result_value);
//   }
//   else {
//     await warehouse_store.getWaitingsSMS();
//   }
// }

// const closeRowInform = () => index_store.row_inform_condition = false;



</script>

<style lang="scss" scoped></style>

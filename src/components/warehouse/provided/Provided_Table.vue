
<template>
  <div class="flex flex-col" style="display:inline-block">
    <TableCommonComp />
    <div class="sticky h-40 top-10 bg-white z-10">
      <div class=" sticky left-16 flex flex-col w-max bg-white" style="display:inline-block; width: calc(100vw - 5rem);">

        <STFStatistics />

        <!-- <Filter_Section_Comp /> -->
        <!-- <TableFilter @filterFunction="filterFunction"> -->
        <TableFilterProvide @filterFunction="filterFunction">
          <TableExpand v-if="true" :table_headers="warehouse_store.provided_data_headers" />
        </TableFilterProvide>

      </div>
    </div>

    <!-- Table -->
    <div class="">
      <table v-if="warehouse_store.provided_data_headers.length"
        class=" mx-2 text-gray-800 dark:text-gray-400 w-full shadow-xl bg-white mt-1" style="font-size: xx-small;">
        <TableHeader :table_headers="warehouse_store.provided_data_headers" >
          <template #RC>
            <th class="px-2 py-3 text-center">
              <div class="flex flex-col items-center font-thin ">
                  RC
              </div>
          </th>
          </template>
        </TableHeader>
        <Provided_Table_Body />
      </table>
      <div v-else class="flex flex-row justify-center items-center w-full h-96">
        <span class="loading loading-dots loading-lg"></span>
      </div>
    </div>

  </div>

  <UpdateProvidedMaterial v-if="toggle_update_provide_material" @closeProvidedUpdateComp="closeProvidedUpdateComp" />
  <Show_STF_Selecting_Task @openUpdateProvidedMaterial="openUpdateProvidedMaterial" />
  <Toast :cond="show_toast.cond" :messages="show_toast.messages" />

</template>

<script setup>

// Import Section
import { ref, reactive, watchEffect } from 'vue';

import STFStatistics from '../../../layouts/STFStatistics.vue';
import TableFilterProvide from '../../../layouts/TableFilterProvide.vue';
import TableExpand from '../../../layouts/TableExpand.vue';
import TableHeader from '../../../layouts/TableHeader.vue';
import Provided_Table_Body from './Provided_Table_Body.vue'
import TableCommonComp from '../../design/TableCommonComp.vue';
import UpdateProvidedMaterial from './UpdateProvidedMaterial.vue';
import Show_STF_Selecting_Task from './Show_STF_Selecting_Task.vue';
import Toast from '../../design/Toast.vue';
import WarehouseStore from '../../../store/store.warehouse';
import UserStore from '../../../store/store.user';

const warehouse_store = WarehouseStore();
const user_store = UserStore();


watchEffect(()=>{
  if (warehouse_store.provided_data_headers.length === 0) {
      warehouse_store.getProvidedDataHeaders();
    }
})

const show_toast = reactive({
  cond: false,
  messages: ''
})

// Get Filtered Data
const filterFunction = async (filtered_objects) => {
  await warehouse_store.getFilteredDataProvided(filtered_objects);
}

// Toggle Update Return Component
const toggle_update_provide_material = ref(false);
const closeProvidedUpdateComp = () => {
    toggle_update_provide_material.value = false;
}
const openUpdateProvidedMaterial = () => {
  if(user_store.user?.projectId == 3 ){
    toggle_update_provide_material.value = true;
  }
  else{
    show_toast.cond = true;
    show_toast.messages = 'You Dont Have Authority For This Operation'
    setTimeout(()=>{
      show_toast.cond = false;
      show_toast.messages = ''
    },2000)
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

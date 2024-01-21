
<template>
  <div class="flex flex-col" style="display: inline-block;">
    <TableCommonComp />

    <!-- Statistic and Filter Place -->
    <div class="h-40 sticky top-10 bg-white w-full z-10">
      <div class=" sticky left-16 flex flex-col bg-white" style="display: inline-block; width: calc(100vw - 5rem);">
        <!-- <table-stf-statistics :statistic_result="procurement_store.statistic_result"
          @fetchCurrentData="fetchCurrentData" /> -->
        <STFStatistics />


        <!-- <Filter_Section_Comp /> -->
        <TableFilter @filterFunction="filterFunction">
          <TableExpand v-if="true" :table_headers="procurement_store.stf_table_headers" />
        </TableFilter>

      </div>
    </div>

    <div v-if="procurement_store.stf_table_headers.length > 0"
      class="mt-1 shadow-md sm:rounded-lg w-full border-2 ">

      <!-- Table -->
      <table class="text-xs text-left text-gray-800 dark:text-gray-400 w-full" style="font-family: 'Roboto';">
        <!-- Table Header -->
        <TableHeader :table_headers="procurement_store.stf_table_headers" >
        <template #star>
          <th class="px-2 py-3 text-center">
            <div class="flex flex-col font-thin">
              Star
            </div>
          </th>
        </template>
        </TableHeader>
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

    <Show_STF_Selecting_Task @createSM="createSM" />

    <Toast :cond = showToastval.cond :messages=showToastval.messages />

  </div>
</template>

<script setup>

// Import Section
import { onMounted, watchEffect, reactive } from 'vue'

import TableHeader from '../../../layouts/TableHeader.vue';
import TableCommonComp from '../../design/TableCommonComp.vue';

import Show_STF_Selecting_Task from './Show_STF_Selecting_Task.vue';
import Get_All_STF_Table_Body_Comp from './Get_All_STF_Table_Body_Comp.vue';
import STFStatistics from '../../../layouts/STFStatistics.vue';
import TableFilter from '../../../layouts/TableFilter.vue';
import TableExpand from '../../../layouts/TableExpand.vue'
import ProcurementStore from '../../../store/store.procurement';
import UserStore from '../../../store/store.user';
import Toast from '../../design/Toast.vue';

const procurement_store = ProcurementStore();
const user_store = UserStore();

onMounted(async () => {
  if (user_store.user) {
    const data = {
      project_id : user_store.user?.projectId,
      user_id: user_store.user?.id
    }
    // Fetch All STF
    // await procurement_store.fetchSTF(data)
    if (procurement_store.stf_table_headers.length === 0) {
      procurement_store.getSTFHeaders();
    }
    await procurement_store.fetchSTFCreateUsernames(user_store.user.projectId);
    await procurement_store.getCompaniesNames();
  }
}
)

// For Showing Toast
const showToastval = reactive({
    cond: false,
    messages: ''
})
const createSM = async () => {
    if(user_store.user){
        if(user_store.user.departmentId !== 2) {
            // ... Only Procurement Users can create a new sms
            showToastval.cond = true;
            showToastval.messages = "You dont have authority for creating new SM";
            setTimeout(()=>{
                showToastval.cond = false
            },3000)
        }
        else{
            procurement_store.tab_num = 2;
        }
    }
    else{
        // ... User Not Login Error Return
        showToastval.cond = true;
        showToastval.messages = "User Not Login";
    }
}


//Get Filtered Data
const filterFunction = async (filtered_objects) => {
  const data = {
    filtered_objects: filtered_objects,
    user_id: user_store.user?.id
  }
  await procurement_store.getFilteredDataSTF(data);
}

// After Creating SM, This code will work
watchEffect(async () => {

  if (user_store.user) {
    const data = {
      project_id : user_store.user?.projectId,
      user_id: user_store.user?.id
    }
    if (procurement_store.stf_table_headers.length === 0) {
      procurement_store.getSTFHeaders();
    }
  }

  // For Fetch All STF
  if (procurement_store.after_created) {
    await procurement_store.fetchSTF(user_store.user.projectId);
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

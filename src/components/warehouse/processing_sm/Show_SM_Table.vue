

<template>
    <div class="flex flex-col" style="display:inline-block">
        <TableCommonComp/>
        <div class="sticky h-40 top-10 bg-white z-10">
            <div class=" sticky left-16 flex flex-col w-max bg-white"
                style="display:inline-block; width: calc(100vw - 5rem);">

                <!-- <table-sm-statistics :statistic_result="warehouse_store.statistic_result" @fetchCurrentData="fetchCurrentData" /> -->

                <!-- <table-filter @filterFunction = "filterFunction">
                    <table-expand v-if="true" :table_headers="warehouse_store.processing_sm_headers" />
                </table-filter> -->

                <STFStatistics />


                <!-- <Filter_Section_Comp /> -->
                <TableFilterSM @filterFunction="filterFunction">
                    <TableExpand v-if="true" :table_headers="warehouse_store.processing_sm_headers" /> 
                </TableFilterSM>

            </div>
        </div>

        <!-- Table -->
        <div class="">
            <table v-if="warehouse_store.processing_sm_headers.length" class=" text-xs text-left text-gray-800 dark:text-gray-400 w-full " style="font-size: xx-small;">
                <TableHeader :table_headers="warehouse_store.processing_sm_headers" />
                <Get_SM_Body_Table />
            </table>
            <div v-else class="flex flex-row justify-center items-center w-full h-96">
              <span class="loading loading-dots loading-lg"></span>
            </div>
        </div>

        <Show_STF_Selecting_Task />
        
    </div>
</template>

<script setup>

// Import Section
import { onMounted } from 'vue';

import STFStatistics from '../../../layouts/STFStatistics.vue';
import TableFilterSM from '../../../layouts/TableFilterSM.vue';
import TableExpand from '../../../layouts/TableExpand.vue'
import Get_SM_Body_Table from './Get_SM_Body_Table.vue';
import Show_STF_Selecting_Task from './Show_STF_Selecting_Task.vue';
import TableCommonComp from '../../design/TableCommonComp.vue';

import UserStore from '../../../store/store.user';
import WarehouseStore from '../../../store/store.warehouse';
import ProcurementStore from '../../../store/store.procurement';
// import IndexStore from '../../../store';

import TableHeader from '../../../layouts/TableHeader.vue';

// Create variable for importing data
const warehouse_store = WarehouseStore();
const user_store = UserStore();
const procurement_store = ProcurementStore();
// const index_store = IndexStore();

onMounted(async () => {
    // Get All Waiting SMS
    const user = user_store.GETUSER;
    if (user === null || user === undefined ) {
        console.log('if work');
    }
    else{
        await warehouse_store.getProcessingSMS(user?.projectId);
        // Get All Companies Names For Filtering 
        await warehouse_store.getCompaniesNames();
        await procurement_store.getCompaniesNames();
        // Get All Creating Users Names For Users
        await warehouse_store.fetchSTFCreateUsernames(user_store.user.projectId);
        await procurement_store.fetchSTFCreateUsernames(user_store.user.projectId);
        // Get Table Headers
        if(warehouse_store.processing_sm_headers.length === 0){
            await warehouse_store.getProcessingSMHeaders()
        }
    }
})

// Get Filtered Data
const filterFunction = async (filtered_objects)=>{
    await warehouse_store.getFilteredDataProcessingSM(filtered_objects);
}

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




const closeRowInform = () => index_store.row_inform_condition = false;


</script>

<style lang="scss" scoped></style>
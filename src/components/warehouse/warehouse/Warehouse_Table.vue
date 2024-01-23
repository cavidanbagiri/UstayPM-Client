
<template>
    <div class="flex flex-col" style="display:inline-block">
        <TableCommonComp />
        <div class="sticky h-40 top-10 bg-white z-10">
            <div class=" sticky left-16 flex flex-col w-max bg-white"
                style="display:inline-block; width: calc(100vw - 5rem);">

                <STFStatistics />

                <!-- <TableFilter @filterFunction="filterFunction"> -->
                <TableFilterWarehouse @filterFunction="filterFunction">
                    <TableExpand v-if="true" :table_headers="warehouse_store.warehouse_data_headers" />
                </TableFilterWarehouse>

            </div>
        </div>

        <!-- Table -->
        <div class="">
            <table v-if="warehouse_store.warehouse_data_headers.length"
                class=" mx-2 text-gray-800 dark:text-gray-400 w-full shadow-xl bg-white mt-1" style="font-size: xx-small;">
                <TableHeader :table_headers="warehouse_store.warehouse_data_headers" />
                <Warehouse_Table_Body />
            </table>
            <div v-else class="flex flex-row justify-center items-center w-full h-96">
                <span class="loading loading-dots loading-lg"></span>
            </div>
        </div>

        <Show_Warehouse_Selecting_Task @provideSM="provideSM" />



        <!-- <table-row-inform 
        :row_inform="index_store.row_detail_data" 
        :row_inform_condition="index_store.row_inform_condition" 
        @closeRowInform="closeRowInform"
        /> -->
        <Toast :cond = showToastval.cond :messages=showToastval.messages />

    </div>
</template>

<script setup>

// Import Section
import { reactive, watchEffect } from 'vue';

import STFStatistics from '../../../layouts/STFStatistics.vue';
import TableFilterWarehouse from '../../../layouts/TableFilterWarehouse.vue';
import TableExpand from '../../../layouts/TableExpand.vue';
import TableHeader from '../../../layouts/TableHeader.vue';
import Warehouse_Table_Body from './Warehouse_Table_Body.vue'
import Show_Warehouse_Selecting_Task from './Show_Warehouse_Selecting_Task.vue';
import TableCommonComp from '../../design/TableCommonComp.vue';
import Toast from '../../design/Toast.vue';
import WarehouseStore from '../../../store/store.warehouse';
import UserStore from '../../../store/store.user';

const warehouse_store = WarehouseStore();
const user_store = UserStore();

watchEffect(()=>{
    if (warehouse_store.warehouse_data_headers.length === 0) {
            warehouse_store.getWarehouseDataHeaders();
        }
})

// Show Toast Message
const showToastval = reactive({
    cond: false,
    messages: ''
})
const provideSM = async () => {
    if(user_store.user){
        if(user_store.user.departmentId !== 3) {
            // ... Only Procurement Users can create a new sms
            showToastval.cond = true;
            showToastval.messages = "You dont have authority for providing data";
            setTimeout(()=>{
                showToastval.cond = false
            },1000)
        }
        else{
            warehouse_store.tab_num = 3;
        }
    }
    else{
        // ... User Not Login Error Return
        showToastval.cond = true;
        showToastval.messages = "User Not Login";
    }
}


// Get Filtered Data
const filterFunction = async (filtered_objects) => {
    await warehouse_store.getFilteredDataWarehouse(filtered_objects);
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

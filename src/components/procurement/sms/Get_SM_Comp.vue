<template>
    
    <div class="flex flex-col" style="display:inline-block">
        <TableCommonComp/>
        <div class="sticky h-40 top-10 bg-white">
            <div class=" sticky left-16 flex flex-col w-max bg-white" style="display:inline-block; width: calc(100vw - 5rem);">
                <STFStatistics/>
                <!-- <table-sm-statistics :statistic_result="procurement_store.sm_statistic_result" @fetchCurrentData="fetchCurrentData" />

                <table-filter @filterFunction = "filterFunction">
                    <table-expand v-if="true" :table_headers="procurement_store.sm_table_headers" />
                </table-filter> -->
                <!-- Table Filter Section -->
        <TableFilter @filterFunction="filterFunction">
          <TableExpand v-if="true" :table_headers="procurement_store.sm_table_headers" />
        </TableFilter>

            </div>
        </div>

        <div v-if ="procurement_store.sm_table_headers.length" class="">
            <table class="text-left text-gray-800 w-full">
                <!-- <Table-Header :table_headers="procurement_store.sm_table_headers" /> -->
                <TableHeader :table_headers="procurement_store.sm_table_headers" />
                
                <tbody class="">
                    <Get_SM_Body_Table />
                </tbody>

            </table>
        </div>

        <div v-else class="flex flex-row justify-center items-center w-full h-96">  
            <span class="loading loading-dots loading-lg"></span>
        </div>

        <!-- <table-row-inform 
        :row_inform="index_store.row_detail_data" 
        :row_inform_condition="index_store.row_inform_condition" 
        @closeRowInform="closeRowInform"
        /> -->


    </div>

</template>

<script setup>

// Import Section
import { onMounted } from 'vue';
// import Show_SM_Table from './Show_SM_Table.vue';
import STFStatistics from '../../../layouts/STFStatistics.vue';
import TableFilter from '../../../layouts/TableFilter.vue';
import TableExpand from '../../../layouts/TableExpand.vue'
import Get_SM_Body_Table from './Get_SM_Body_Table.vue';
import TableHeader from '../../../layouts/TableHeader.vue';
import ProcurementStore from '../../../store/store.procurement';
import TableCommonComp from '../../design/TableCommonComp.vue';
// import IndexStore from '../../../store';

// Create variable for importing data
const procurement_store = ProcurementStore();
// const index_store = IndexStore();


onMounted(async()=>{
    // Fetch All SM
    await procurement_store.fetchAllSM();
    // Fetch SM Statistic Result
    // await procurement_store.getSMStatisticsResult();
    // Fetch Table Headers For SM
    // procurement_store.getSMHeaders();
    if (procurement_store.sm_table_headers.length === 0) {
    procurement_store.getSMHeaders();
  }
})

// Get Filtered Data
// const filterFunction = async (filtered_objects)=>{
//     await procurement_store.getFilteredDataSM(filtered_objects);
// }



// const fetchCurrentData = async (statistic_result_value) => {
//     if (statistic_result_value === 0) {
//         await procurement_store.fetchAllSM();
//     }
//     else if(statistic_result_value === 4){
//         procurement_store.tab_num = 4;
//     } 
//     else {
//         await procurement_store.fetchStatisticResultDataSM(statistic_result_value);
//     }
// }

// Close Row Information Tab
// const closeRowInform = () => index_store.row_inform_condition = false;

</script>

<style lang="scss" scoped></style>
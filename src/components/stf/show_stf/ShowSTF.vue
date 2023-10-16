<template>
  <div class="flex flex-col" style="display: inline-block;">
    <TableCommonComp/>
    <!-- Filter Statistic Section-->
    <div class="sticky top-10 px-1 ">
      <div class=" sticky left-16 flex flex-col bg-white" style="display: inline-block; width: calc(100vw - 5rem);">

        <STFStatistics />


        <!-- Table Filter Section -->
        <TableFilter @filterFunction="filterFunction">
          <TableExpand v-if="true" :table_headers="stf_store.GETALLSTFHEADERS" />
        </TableFilter>

      </div>
    </div>

    <table class=" mx-2 text-gray-800 dark:text-gray-400 w-full shadow-xl bg-white mt-1">
      <TableHeader :table_headers="stf_store.GETALLSTFHEADERS" />
      <ShowSTFEachRow v-for="(i, index) in stf_store.all_stf" :each="i" :index="index" />
    </table>

    <!-- <table-row-inform :row_inform="index_store.row_detail_data" :row_inform_condition="index_store.row_inform_condition"
      @closeRowInform="closeRowInform" />-->

    <SelectingRows />
  </div>
</template>
   
<script setup>

import { onMounted, watchEffect, ref } from 'vue';
import STFStore from '../../../store/store.stf';
import STFStatistics from '../../../layouts/STFStatistics.vue';
import TableHeader from '../../../layouts/TableHeader.vue';
import ShowSTFEachRow from './ShowSTFEachRow.vue';
import SelectingRows from './SelectingRows.vue';
import UserStore from '../../../store/store.user_store';
import TableFilter from '../../../layouts/TableFilter.vue';
import TableExpand from '../../../layouts/TableExpand.vue'
import TableCommonComp from '../../design/TableCommonComp.vue';

const stf_store = STFStore();
const user_store = UserStore();
// const table_headers = ref([]);
// const user = ref('') 

onMounted(async () => {
  const user = user_store.GETUSER;
  if (user === undefined) {
  }
  else {
    // console.log('user is : ',user);
    // // Get Data For statistic result
    // await order_store.getUserStatisticResult(user.id);
    // // Get Data For Showing STF
    // await order_store.showSTF(user);
    // // Get Data For Table Headers
    // if (order_store.GETORDERHEADERS.length === 0) {
    //     await order_store.getHeaders();
    // }
    await stf_store.fetchUserSTFAll(user);
    if(stf_store.GETALLSTFHEADERS.length === 0){ 
      await stf_store.getHeaders();
      // table_headers.value = stf_store.all_stf_headers;
    }
  }
  // Fetch All STF Data
})

// Get Statistic Result And Show
watchEffect(async () => {
  if(stf_store.GETALLSTFHEADERS.length === 0){ 
      await stf_store.getHeaders();
      // table_headers.value = stf_store.all_stf_headers;
    }
  // For Created STF
  if (stf_store.after_created === true) {
    // user.value = user_store.GETUSER;
    const user = user_store.GETUSER;
    if(user === undefined){
    }else{
      await stf_store.fetchUserSTFAll(user.id);
    }
    stf_store.after_created = false;
  }
})

// Get Filtered Data
const filterFunction = async (filtered_objects)=>{
    if(user_store.GETUSER !== undefined ){
        filtered_objects.user = user_store?.GETUSER?.id
        await stf_store.getFilteredData(filtered_objects);
    }
}


</script> 

<style lang="scss" scoped></style>
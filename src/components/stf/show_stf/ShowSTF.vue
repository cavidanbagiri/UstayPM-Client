<template>
  <div class="flex flex-col " style="display: inline-block;">
    <TableCommonComp />
    <!-- Filter Statistic Section-->
    <div class="sticky top-10 px-1 z-10">
      <div class=" sticky left-16 flex flex-col bg-white " style="display: inline-block; width: calc(100vw - 5rem);">
        <STFStatistics />


        <!-- Table Filter Section -->
        <TableFilter @filterFunction="filterFunction">
          <TableExpand v-if="true" :table_headers="stf_store.GETALLSTFHEADERS" />
        </TableFilter>

      </div>
    </div>

    <table v-if="stf_store.GETALLSTFHEADERS.length" class=" mx-2 w-full shadow-xl  mt-1">

      <TableHeader :table_headers="stf_store.GETALLSTFHEADERS">
        <template #star>
          <th class="px-2 py-3 text-center">
            <div class="flex flex-col font-thin">
              Star
            </div>
          </th>
        </template>
      </TableHeader>

      <ShowSTFEachRow v-for="(i, index) in stf_store.all_stf" :each="i" :index="index" />
    </table>

    <div v-if="stf_store.all_stf_loading" class="flex flex-row justify-center items-center w-full h-96">
      <span class="loading loading-dots loading-lg"></span>
    </div>

    <div v-if="stf_store.all_stf_cond_text" class="flex flex-row justify-center items-center w-full h-96">
      <span class="text-3xl">
        There is not any data in warehouse which created by <span class="font-bold">{{ user_store.user.name }}
          {{ user_store.user.surname }}</span>
      </span>
    </div>

    <!-- <table-row-inform :row_inform="index_store.row_detail_data" :row_inform_condition="index_store.row_inform_condition"
      @closeRowInform="closeRowInform" />-->

    <SelectingRows />
  </div>
</template>
   
<script setup>

import { watchEffect } from 'vue';
import STFStore from '../../../store/store.stf';
import STFStatistics from '../../../layouts/STFStatistics.vue';
import TableHeader from '../../../layouts/TableHeader.vue';
import ShowSTFEachRow from './ShowSTFEachRow.vue';
import SelectingRows from './SelectingRows.vue';
import UserStore from '../../../store/store.user';
import TableFilter from '../../../layouts/TableFilter.vue';
import TableExpand from '../../../layouts/TableExpand.vue'
import TableCommonComp from '../../design/TableCommonComp.vue';

const stf_store = STFStore();
const user_store = UserStore();


watchEffect(async()=>{
  const user = user_store.GETUSER;
  if (user === undefined) {
  }
  else {
    // await stf_store.fetchUserSTFAll(user);
    if (stf_store.GETALLSTFHEADERS.length === 0) {
      stf_store.getHeaders();
    }
  }
})

// Get Filtered Data
const filterFunction = async (filtered_objects) => {
  if (user_store.GETUSER !== undefined) {
    filtered_objects.user = user_store?.GETUSER?.id
    const data = {
    filtered_objects: filtered_objects,
    user_id: user_store.user?.id
  }
    await stf_store.getFilteredData(data);
  }
}

</script> 

<style lang="scss" scoped></style>
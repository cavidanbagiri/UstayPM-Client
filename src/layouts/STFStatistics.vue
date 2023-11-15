<template>
  <div class="grid grid-cols-12 gap-4 justify-between sticky bg-white">

    <div class=" col-span-2 flex flex-row justify-between border shadow-md w-full p-3 rounded-md
          hover:shadow-xl hover:cursor-pointer ">
      <div class="flex flex-col justify-between">
        <span class="text-gray-600 analyz_header">
          <span class="bg-gray-200 text-gray-500 rounded-full px-2 py-2"><i class="fa-solid fa-clock fa-lg"></i></span> 
          Waiting
        </span>
        <span class="bg-gray-200 rounded-md text-gray-800 p-2 analyz_get_data text-center">Get Data</span>
      </div>
      <div class="flex items-center ">
        <div class="rounded-full flex border-8 border-gray-600 w-16 h-16  items-center justify-center analyz_show_data">
          {{ index_store.statistic_data?.stf_false }}
        </div>
      </div>
    </div>
    <div class=" col-span-2 flex flex-row justify-between border shadow-md w-full p-3 rounded-md
          hover:shadow-xl hover:cursor-pointer ">
      <div class="flex flex-col justify-between">
        <span class="text-gray-600 analyz_header">
          <span class="bg-red-200 text-red-500 rounded-full px-3 py-2"><i class="fa-regular fa-clipboard fa-lg"></i></span> 
          Completed
        </span>
        <span class="bg-red-200 rounded-md text-red-800 p-2 analyz_get_data text-center">Get Data</span>
      </div>
      <div class="flex items-center ">
        <div class="rounded-full flex border-8 border-red-500 w-16 h-16  items-center justify-center analyz_show_data">
          {{ index_store.statistic_data?.stf_true }}
        </div>
      </div>
    </div>

    <div class=" col-span-2 flex flex-row justify-between border w-full p-3 rounded-md shadow-md 
          hover:shadow-xl hover:cursor-pointer ">
      <div class="flex flex-col justify-between">
        <span class="text-gray-600 analyz_header">
          <span class="bg-blue-200 text-blue-500 rounded-full px-2 py-2"><i class="fa-solid fa-person-digging fa-lg"></i></span>
          Processing
        </span>
        <span class="bg-blue-200 rounded-md text-blue-800 p-2 analyz_get_data text-center">Get Data</span>
      </div>
      <div class="flex items-center ">
        <div class="rounded-full flex border-8 border-blue-500 w-16 h-16  items-center justify-center analyz_show_data">
          {{ index_store.statistic_data?.sm_process }}
        </div>
      </div>
    </div>

    <div class=" col-span-2 flex flex-row justify-between border w-full p-3 rounded-md
          shadow-md hover:shadow-xl hover:cursor-pointer ">
      <div class="flex flex-col justify-between">
        <span class="text-gray-600 analyz_header">
          <span class="bg-green-200 text-green-500 rounded-full px-2 py-2"><i class="fa-solid fa-satellite-dish fa-lg"></i></span>
          Received
        </span>
        <span class="bg-green-200 rounded-md text-green-800 p-2 analyz_get_data text-center">Get Data</span>
      </div>
      <div class="flex items-center ">
        <div class="rounded-full flex border-8 border-green-500 w-16 h-16  items-center justify-center analyz_show_data">
          {{ index_store.statistic_data?.sm_completed }}
        </div>
      </div>
    </div>

    <div class=" col-span-2 flex flex-row justify-between border w-full p-3 rounded-md
          shadow-md hover:shadow-xl hover:cursor-pointer ">
      <div class="flex flex-col justify-between">
        <span class="text-gray-600 analyz_header">
          <span class="bg-pink-200 text-pink-500 rounded-full px-2 py-2"><i class="fa-solid fa-warehouse fa-lg"></i></span>
          Warehouse
        </span>
        <span class="bg-pink-200 rounded-md text-pink-800 p-2 analyz_get_data text-center">Get Data</span>
      </div>
      <div class="flex items-center ">
        <div class="rounded-full flex border-8 border-pink-500 w-16 h-16  items-center justify-center analyz_show_data">
          {{ index_store.statistic_data?.warehouse_inform }}
        </div>
      </div>
    </div>

    <div class=" col-span-2 flex flex-row justify-between border shadow-md w-full p-3 rounded-md
          hover:shadow-xl hover:cursor-pointer ">
      <div class="flex flex-col justify-between">
        <span class="text-gray-600 analyz_header">
          <span class="bg-orange-200 text-orange-500 rounded-full px-2 py-2"><i class="fa-solid fa-ban fa-lg"></i></span> 
          Canceled
        </span>
        <span class="bg-orange-200 rounded-md text-orange-800 p-2 analyz_get_data text-center">Get Data</span>
      </div>
      <div class="flex items-center ">
        <div class="rounded-full flex border-8 border-orange-600 w-16 h-16  items-center justify-center analyz_show_data">
          12
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>

import { onMounted } from 'vue';

import IndexStore from '../store/store.index';
const index_store = IndexStore();

onMounted(async ()=>{
  if(!index_store.statistic_data){
    await index_store.fetchStatisticResult();
  }
})

</script>

<style lang="scss" scoped>
</style>
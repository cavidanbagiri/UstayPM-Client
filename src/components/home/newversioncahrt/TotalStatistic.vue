<template>
    <div class="grid grid-cols-10 gap-6 my-3">
        <div class="col-span-2 border rounded-xl py-3 px-5 my-3 bg-white h-44 flex flex-col items-center justify-around" style="font-family: 'Figtree';">
            <div class="flex flex-row justify-between  w-full items-center">
                <div class="flex flex-col">
                    <span class="text-4xl font-bold " >{{ index_store.statistic_data?.stf_false }}</span>
                    <span class="text-md font-thin" style="font-family: 'Jost';">STF Waiting</span>
                </div>
                <img class="w-16 p-4 bg-red-200 rounded-xl" src="../../../assets/statistic_icons/waiting.png" alt="">
            </div>
            <div class="flex flex-row justify-between bg-gray-100 w-full items-center p-3 rounded-xl" style="font-family: 'Jost';">
                <span class="text-green-500 font-bold text-sm">15-01-2023 
                    <span class="text-gray-500 font-medium text-md">Last Created</span>
                </span>
            </div>
        </div>
        <div class="col-span-2 border rounded-xl py-3 px-5 my-3 bg-white h-44 flex flex-col items-center justify-around" style="font-family: 'Figtree';">
            <div class="flex flex-row justify-between  w-full items-center">
                <div class="flex flex-col">
                    <span class="text-4xl font-bold " >{{ index_store.statistic_data?.stf_true }}</span>
                    <span class="text-md font-thin"  style="font-family: 'Jost';">STF Complete</span>
                </div>
                <img class="w-16 p-4 bg-green-200 rounded-xl" src="../../../assets/statistic_icons/complete.png" alt="">
            </div>
            <div class="flex flex-row justify-between bg-gray-100 w-full items-center p-3 rounded-xl" style="font-family: 'Jost';">
                <span class="text-green-500 font-bold text-sm">15-01-2023 
                    <span class="text-gray-500  font-medium text-md">Last Created</span>
                </span>
            </div>
        </div>
        <div class="col-span-2 border rounded-xl py-3 px-5 my-3 bg-white h-44 flex flex-col items-center justify-around" style="font-family: 'Figtree';">
            <div class="flex flex-row justify-between  w-full items-center">
                <div class="flex flex-col">
                    <span class="text-4xl font-bold " >{{ index_store.statistic_data?.sm_process }}</span>
                    <span class="text-md font-thin"  style="font-family: 'Jost';">Sm Processing</span>
                </div>
                <img class="w-16 p-4 bg-sky-200 rounded-xl" src="../../../assets/statistic_icons/processing2.png" alt="">
            </div>
            <div class="flex flex-row justify-between bg-gray-100 w-full items-center p-3 rounded-xl" style="font-family: 'Jost';">
                <span class="text-green-500 font-bold text-sm">15-01-2023 
                    <span class="text-gray-500  font-medium text-md" >Last Created</span>
                </span>
            </div>
        </div>
        <div class="col-span-2 border rounded-xl py-3 px-5 my-3 bg-white h-44 flex flex-col items-center justify-around" style="font-family: 'Figtree';">
            <div class="flex flex-row justify-between  w-full items-center">
                <div class="flex flex-col">
                    <span class="text-4xl font-bold " >{{ index_store.statistic_data?.sm_completed }}</span>
                    <span class="text-md font-thin"  style="font-family: 'Jost';">SM Complete</span>
                </div>
                <img class="w-16 p-4 bg-green-200 rounded-xl" src="../../../assets/statistic_icons/complete.png" alt="">
            </div>
            <div class="flex flex-row justify-between bg-gray-100 w-full items-center p-3 rounded-xl">
                <span class="text-green-500 font-bold text-sm">15-01-2023 
                    <span class="text-gray-500  font-medium text-md">Last Created</span>
                </span>
            </div>
        </div>
        <div class="col-span-2 border rounded-xl py-3 px-5 my-3 bg-white h-44 flex flex-col items-center justify-around" style="font-family: 'Figtree';">
            <div class="flex flex-row justify-between  w-full items-center">
                <div class="flex flex-col">
                    <span class="text-4xl font-bold " >{{ index_store.statistic_data?.stf_canceled}}</span>
                    <span class="text-md font-thin"  style="font-family: 'Jost';">Canceled STF</span>
                </div>
                <img class="w-16 p-4 bg-orange-200 rounded-xl" src="../../../assets/statistic_icons/warehouse.png" alt="">
            </div>
            <div class="flex flex-row justify-between bg-gray-100 w-full items-center p-3 rounded-xl">
                <span class="text-green-500 font-bold text-sm">15-01-2023 
                    <span class="text-gray-500  font-medium text-md">Last Created</span>
                </span>
            </div>
        </div>

    </div>
</template>

<script setup>

import { onMounted } from 'vue';

import IndexStore from '../../../store/store.index';
const index_store = IndexStore();

onMounted(async ()=>{
  if(!index_store.statistic_data){
    await index_store.fetchStatisticResult();
  }
})

</script>

<style lang="scss" scoped>

</style>
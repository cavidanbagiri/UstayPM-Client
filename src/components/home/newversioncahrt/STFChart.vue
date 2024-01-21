<template>
    <!-- STF Section-->
    <div class="col-span-4 bg-white rounded-xl flex flex-col items-center justify-between h-[30rem]"
        style="font-family: 'Jost';">
        <!-- Title Section -->
        <div class="w-full pl-8 border-b py-3 flex justify-between items-center">
            <span class="text-2xl font-bold w-full" style="font-family: 'Figtree';">
                Total STF
            </span>
            <div class="pl-3 text-sm relative w-full text-end" @click="data_cond = !data_cond">
                <span class="text-2xl font-bold text-gray-500 pr-4 cursor-pointer">
                    <i class="fa-solid fa-ellipsis fa-xs"></i>
                </span>
                <div v-if="data_cond" class="p-5 absolute top-5 right-5">
                    <router-link to="/procurement" class="">
                    <span class=" border bg-white px-5 py-3 font-bold text-[16px] hover:cursor-pointer hover:underline">Get Data</span>
                </router-link>
                </div>
            </div>
        </div>
        <!-- Title Center Section -->
        <div class="border-[24px]  w-[16rem] h-[16rem] border-violet-600 rounded-full flex justify-center items-center"
            style="">
            <span class="text-5xl font-bold text-violet-700">
                {{ parseInt(index_store?.statistic_data?.stf_false) +
                    parseInt(index_store?.statistic_data?.stf_true) +
                    parseInt(index_store?.statistic_data?.stf_canceled)
                }}
            </span>
        </div>
        <!-- Footer Section -->
        <div class="w-full flex flex-row justify-around my-3">
            <div class="  flex flex-col items-center">
                <span class="text-xl font-bold text-gray-400">Waiting</span>
                <span class="text-3xl font-bold">{{ index_store?.statistic_data?.stf_false }}</span>
            </div>
            <div class="  flex flex-col items-center">
                <span class="text-xl font-bold text-gray-400">Complete</span>
                <span class="text-3xl font-bold">{{ index_store?.statistic_data?.stf_true }}</span>
            </div>
            <div class="  flex flex-col items-center">
                <span class="text-xl font-bold text-gray-400">Canceled</span>
                <span class="text-3xl font-bold">{{ index_store?.statistic_data?.stf_canceled }}</span>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

import IndexStore from '../../../store/store.index';
const index_store = IndexStore();

const data_cond = ref(false);


</script>

<style lang="scss" scoped></style>
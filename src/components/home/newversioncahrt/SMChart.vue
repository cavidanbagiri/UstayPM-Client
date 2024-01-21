<template>
    <!-- Sm Section-->
    <div class="col-span-4 ml-3 bg-white rounded-xl flex flex-col items-center justify-between h-[30rem]"
        style="font-family: 'Jost';">
        <!-- Title Section -->
        <div class="w-full pl-8 border-b py-3 flex justify-between items-center">
            <span class="text-2xl font-bold w-full" style="font-family: 'Figtree';">
                Total SM
            </span>
            <div class="pl-3 text-sm relative w-full text-end" @click="data_cond = !data_cond">
                <span class="text-2xl font-bold text-gray-500 pr-4 cursor-pointer">
                    <i class="fa-solid fa-ellipsis fa-xs"></i>
                </span>
                <div v-if="data_cond" class="p-5 absolute top-5 right-5">
                    <!-- <router-link to="/procurement" class=""> -->
                        <span @click="openProcurementSTFPage"
                            class=" border bg-white px-5 py-3 font-bold text-[16px] hover:cursor-pointer hover:underline">Get
                            Data</span>
                    <!-- </router-link> -->
                </div>
            </div>
        </div>
        <!--  Chart Section -->
        <div class=" w-[16rem] h-[16rem] flex justify-center items-center" style="">
            <Pie :data="chartDataSM" />
            <!-- <span class="text-5xl font-bold text-violet-700">434</span> -->
        </div>
        <!-- Footer Section -->
        <div class="w-full flex flex-row justify-around my-3">
            <div class="  flex flex-col items-center">
                <span class="text-xl font-bold text-gray-400">Processing</span>
                <span class="text-3xl font-bold">{{ index_store?.statistic_data?.sm_process }}</span>
            </div>
            <div class="  flex flex-col items-center">
                <span class="text-xl font-bold text-gray-400">Complete</span>
                <span class="text-3xl font-bold">{{ index_store?.statistic_data?.sm_completed }}</span>
            </div>
        </div>
    </div>
</template>

<script setup>
import { watchEffect, ref } from 'vue';
import { useRouter } from 'vue-router';
import { Pie } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
import IndexStore from '../../../store/store.index';
import ProcurementStore from '../../../store/store.procurement';
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

const index_store = IndexStore();
const procurement_store = ProcurementStore();

const router = useRouter()

// Get Procurement SM Tab
const openProcurementSTFPage = () => {
    procurement_store.tab_num = 1;
    router.push('/procurement')    
}

const chartDataSM = ref();

const data_cond = ref(false);

watchEffect(() => {

    chartDataSM.value = {
        datasets: [
            {
                backgroundColor: [
                    'rgb(107, 3, 252)',
                    'rgb(61, 72, 224)'
                ],
                data: [
                    index_store?.statistic_data?.sm_process,
                    index_store?.statistic_data?.sm_completed
                ]
            }
        ]
    }

})





</script>

<style lang="scss" scoped></style>
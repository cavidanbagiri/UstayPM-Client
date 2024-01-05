<template>
    <div class="col-span-6 w-full h-full bg-white rounded-xs p-1 shadow-xl border flex"  style="font-family: 'Roboto';">
        <div class="flex flex-col items-center w-1/2  py-1">
            <span class="text-3xl font-bold text-start pl-5 text-gray-600 mt-1 mb-3">Warehouse Stock</span>
            <Pie :data="chartData" />
        </div>
        <div class="flex- flex-col w-1/2 mx-4 bg-red-400">

            <div class="flex flex-col py-1 justify-around">

                <span class="text-3xl font-bold text-center bg-blue-300 w-full pl-5 text-gray-600 mt-1 mb-3">Quick View</span>
                
                <div class="flex flex-col justify-between w-full bg-green-500  ">
                    <!-- Project -->
                    <div class="flex flex-row items-center text-2xl justify-between px-5 py-2">
                        <span class="text-2xl">
                            Project : 
                        </span>
                        <span class="text-end">45</span>
                    </div>
                    <!-- Consumables -->
                    <div class="flex flex-row items-center text-2xl justify-between px-5 py-2">
                        <span class="text-2xl">
                            Consumables : 
                        </span>
                        <span class="text-end">45</span>
                    </div>
                    <!-- Consumables -->
                    <div class="flex flex-row items-center text-2xl justify-between px-5 py-2">
                        <span class="text-2xl">
                            Fixture : 
                        </span>
                        <span class="text-end">45</span>
                    </div>
                    <!-- Consumables -->
                    <div class="flex flex-row items-center text-2xl justify-between px-5 py-2">
                        <span class="text-2xl">
                            Fixture : 
                        </span>
                        <span class="text-end">45</span>
                    </div>
                    <!-- Consumables -->
                    <div class="flex flex-row items-center text-2xl justify-between px-5 py-2">
                        <span class="text-2xl">
                            Fixture : 
                        </span>
                        <span class="text-end">45</span>
                    </div>
                    <!-- Consumables -->
                    <div class="flex flex-row items-center text-2xl justify-between px-5 py-2">
                        <span class="text-2xl">
                            Fixture : 
                        </span>
                        <span class="text-end">45</span>
                    </div>
                </div>

            </div>

        </div>
    </div>
</template>

<script setup>

import { ref, watchEffect } from 'vue';
import { Pie } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

// Get Statistic Result
const prop = defineProps(['statistic_data']);

const data = ref();

const chartData = ref();

watchEffect(() => {
    chartData.value = {
        labels: ['Project', 'Consumables', 'Fixture', 'Break', 'Loses', 'Unusable'],
        datasets: [
            {
                label: 'Data One',
                backgroundColor: [
                    'rgb(255, 99, 132)',
                    'rgb(54, 162, 235)',
                    'rgb(255, 205, 86)',
                    'rgb(255, 205, 186)',
                    'rgb(255, 205, 120)'
                ],
                data: [
                    45,402,130,13,4,2// prop?.statistic_data?.sm_canceled,
                    // prop?.statistic_data?.sm_process,
                    // prop?.statistic_data?.sm_completed
                ]
            }
        ]
    }
})


</script>

<style lang="scss" scoped></style>
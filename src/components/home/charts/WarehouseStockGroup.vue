<template>
    <div class="col-span-4 bg-white rounded-xs p-1 shadow-xl border flex "  style="font-family: 'Roboto';">
        <div class="flex flex-col w-full items-center justify-between py-1">
            <span class="text-3xl font-bold text-start pl-5 text-gray-600 mt-1 mb-3">Warehouse Stock</span>
            <div class="w-1/2">
                <Pie :data="chartData" />
            </div>
            <div class="h-24 bg-blue-400 w-full">
                1
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
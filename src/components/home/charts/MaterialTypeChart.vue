
<template>
    <div class="col-span-3 p-1 h-3/12 border rounded-xs shadow-xl mx-1 bg-white" style="font-family: 'Roboto';">
        <div class="flex flex-col items-center">
            <!-- Title -->
            <span class="text-3xl font-bold text-start pl-5 text-gray-600 mt-1 mb-3">Ordering Material Type</span>
            <!-- Chart -->
            <PolarArea :data="chartData" />
        </div>
    </div>
</template>
  
<script setup>

import { ref, watchEffect } from 'vue';
import { PolarArea } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, RadialLinearScale } from 'chart.js'
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, RadialLinearScale)


// Get Statistic Result
const prop = defineProps(['statistic_data']);

const data = ref();

const chartData = ref();

watchEffect(() => {
    chartData.value = {
        labels: [
            'Consumables',
            'Fixture',
            'Project',
        ],
        datasets: [{
            label: 'My First Dataset',
            data: [11, 7, 16],
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(255, 205, 86)',
                'rgb(75, 192, 192)',
            ]
        }]
    }
})

</script>
  
  
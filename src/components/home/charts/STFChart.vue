
<template>
  <div class="col-span-3 p-1  border rounded-xl shadow-xl mx-1 bg-white" style="font-family: 'Roboto';">
    <div class="flex flex-col items-center">
      <!-- Title -->
      <span class="text-3xl font-bold text-start pl-5 text-gray-600 mt-1 mb-3">STF Balance</span>
      <!-- Chart -->
      <Doughnut :data="chartData" />
    </div>
  </div>
</template>

<script setup>

import { ref, watchEffect } from 'vue';
import { Doughnut } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)


// Get Statistic Result
const prop = defineProps(['statistic_data']);

const data = ref();

const chartData = ref();

watchEffect(() => {
  chartData.value = {
    labels: ['Canceled', 'Waiting', 'Completed'],
    datasets: [
      {
        label: 'Data One',
        backgroundColor: [
          'rgb(59 130 246)',
          'rgb(132 204 22)',
          'rgb(239 68 68)'
        ],
        data: [
          prop?.statistic_data?.stf_canceled,
          prop?.statistic_data?.stf_false,
          prop?.statistic_data?.stf_true
        ]
      }
    ]
  }
})

</script>


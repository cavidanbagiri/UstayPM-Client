
<template>
  <div class="col-span-3 p-1  border rounded-xl shadow-xl mx-1 bg-white" style="font-family: 'Roboto';">
    <div class="flex flex-col items-center">
      <!-- Title -->
      <span class="text-3xl font-bold text-start pl-5 text-gray-600 mt-1 mb-3">STF Balance</span>
      <!-- Inform -->
      <div class="flex flex-row justify-center items-center text-gray-500 w-full ">

        <div class="flex flex-col  justify-center w-full items-center ">
          <span class="text-center text-md font-bold">Canceled</span>
          <span class="my-1 text-center text-lg font-bold text-gray-700">0</span>
        </div>

        <div class="flex flex-col  justify-center w-full items-center ">
          <span class="text-center text-md font-bold">Waiting</span>
          <span class="my-1 text-center text-lg font-bold text-gray-700">{{ prop?.statistic_data?.stf_false }}</span>
        </div>

        <div class="flex flex-col  justify-center w-full items-center ">
          <span class="text-center text-md font-bold">Completed</span>
          <span class="my-1 text-center text-lg font-bold text-gray-700">{{ prop?.statistic_data?.stf_true }}</span>
        </div>

      </div>
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
          1,
          prop?.statistic_data?.stf_false,
          prop?.statistic_data?.stf_true
        ]
      }
    ]
  }
})

</script>



<template>
  <div class="col-span-6 p-1 border rounded-xs shadow-xl bg-white" style="font-family: 'Roboto';">
      <div class="flex flex-col items-center justify-between">
          <!-- Title -->
          <span class="text-3xl font-bold text-start pl-5 text-gray-600 mt-1 mb-3">Field Chart</span>
          <!-- Chart -->
          <!-- <div class="w-3/4"> -->
              <Doughnut :data="chartData" />
          <!-- </div> -->
          <!-- <div class="h-24 bg-blue-400 w-full">
              1
          </div> -->
      </div>
  </div>
</template>

<script setup>

import { ref, watchEffect } from 'vue';
import { Doughnut } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, RadialLinearScale } from 'chart.js'
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, RadialLinearScale)


// Get Statistic Result
const prop = defineProps(['statistic_data']);

const data = ref();

const chartData = ref();

watchEffect(() => {
  chartData.value = {
      labels: [
          'Common Uses',
          'Avinovka 33',
          'Alekseyevskoe 1',
          'PR-2',
          'PR-10',
          'Unit-8',
      ],
      datasets: [{
          label: 'My First Dataset',
          data: [62, 37, 16, 45, 14, 23],
          backgroundColor: [
              'rgb(255, 99, 132)',
              'rgb(255, 205, 86)',
              'rgb(75, 192, 192)',
              'rgb(75, 192, 92)',
              'rgb(75, 92, 192)',
              'rgb(175, 192, 192)'
          ]
      }]
  }
})

</script>


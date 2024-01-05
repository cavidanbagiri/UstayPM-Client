
<template>
    <div class="col-span-3 p-1  border rounded-xs shadow-xl mx-1  bg-white" style="font-family: 'Roboto';">
      <div class="flex flex-col items-center justify-between">
        <span class="text-3xl font-bold text-start pl-5 text-gray-600 mt-1 mb-3">Warehouse Balance</span>
        <!-- <div class="w-3/4"> -->
          <Pie :data="chartData" />
        <!-- </div>
        <div class="h-24 bg-blue-400 w-full">
          1
        </div> -->
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
      labels: ['Canceled', 'Processing', 'Completed'],
      datasets: [
        {
          label: 'Data One',
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)'
          ],
          data: [
            prop?.statistic_data?.sm_canceled,
            prop?.statistic_data?.sm_process,
            prop?.statistic_data?.sm_completed
          ]
        }
      ]
    }
  })
  
  </script>
  
  
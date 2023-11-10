
<template>
  <div class="col-span-3 p-1  border rounded-xl shadow-xl mx-1  bg-white" style="font-family: 'Roboto';">
      <div class="flex flex-col items-center">
        <span class="text-3xl font-bold text-start pl-5 text-gray-600 my-3">SM Balance</span>
        <Doughnut :data="chartData" />
      </div>
  </div>
</template>

<script setup>

import { ref, watchEffect } from 'vue';
import { Doughnut } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'


ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

const data = ref();

const chartData = ref();

watchEffect(() => {
  chartData.value = {
    labels: ['Attached', 'Working', 'Completed'],
    datasets: [
      {
        label: 'Data One',
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)'
        ],
        data: [
          20,
          15,
          3
        ]
      }
    ]
  }
})

</script>


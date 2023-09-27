
<template>
  <div class="flex flex-col p-1 w-96">
    <div class="flex justify-center">
      <span class="text-lg font-bold">Order</span>
    </div>
    <div>
      <Doughnut :data="chartData" />
    </div>
  </div>
</template>

<script setup>

import { ref, watchEffect, reactive } from 'vue';
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


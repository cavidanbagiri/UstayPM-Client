
<template>
  <div class="col-span-3 p-1  border rounded-xs shadow-xl mx-1  bg-white" style="font-family: 'Roboto';">
    <div class="flex flex-col items-center">
      <span class="text-3xl font-bold text-start pl-5 text-gray-600 mt-1 mb-3">SM Balance</span>
      <Doughnut :data="chartData" />
    </div>
  </div>
</template>

<script setup>

import { ref, watchEffect, onMounted } from 'vue';
import { Doughnut } from 'vue-chartjs';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';
import IndexStore from '../../../store/store.index';
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

// Get Statistic Result
const prop = defineProps(['statistic_data']);

const index_store = IndexStore();

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
          index_store?.statistic_data?.sm_canceled,
          index_store?.statistic_data?.sm_process,
          index_store?.statistic_data?.sm_completed
        ]
      }
    ]
  }
})

</script>



<template>
  <div class="col-span-3 p-1  border rounded-xs shadow-xl mx-1 bg-white" style="font-family: 'Roboto';">
    <div class="flex flex-col items-center">
      <!-- Title -->
      <span class="text-3xl font-bold text-start pl-5 text-gray-600 mt-1 mb-3">STF Balance</span>
      <!-- Chart -->
      <Doughnut :data="chartData" />
    </div>
  </div>
</template>

<script setup>

import { ref, watchEffect, onMounted } from 'vue';
import { Doughnut } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
import IndexStore from '../../../store/store.index';
import UserStore from '../../../store/store.user';

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

const index_store = IndexStore();
const user_store = UserStore();

onMounted(async()=>{
  if (user_store.user) {
    const data = {
      user_id: user_store.user.id,
      project_id: user_store.user.projectId
    }
    index_store.fetchStatisticResult(data);
  }
})


// Get Statistic Result
const prop = defineProps(['statistic_data']);


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
          index_store?.statistic_data?.stf_canceled,
          index_store?.statistic_data?.stf_false,
          index_store?.statistic_data?.stf_true
        ]
      }
    ]
  }
})

</script>


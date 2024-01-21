
<template>
  <div class="col-span-6 p-1  border rounded-xs shadow-xl mx-1 bg-white"  style="font-family: 'Roboto';">
    <div class="flex flex-col justify-center items-center">
      <span class="text-3xl font-bold text-center pl-5 text-gray-600 mt-1 mb-3">Group Order Information</span>
      <!-- Chart Side -->
      <div class="w-full h-1/3">
        <Bar :data="chartData" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { watchEffect, reactive, ref, onMounted } from 'vue';
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
import IndexStore from '../../../store/store.index';
import UserStore from '../../../store/store.user';
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

const index_store = IndexStore();
const user_store = UserStore();
onMounted(async ()=>{
  await index_store.groupChartStatisticData(user_store.user?.projectId);
})


const chartData = ref()

watchEffect(()=>{

  const label = [];
  const data = [];
  for(let i of index_store?.group_chart_statistic_data){
    // console.log('department : ', i);
    label.push(i.department_id)
    data.push(i.stf_count)
  } 

  chartData.value = {
  // labels: label,
  labels: label,
  datasets: [{
    label: 'Group Order Count',
    data: data,
    backgroundColor: [
      'rgba(255, 99, 132, 0.2)',
      'rgba(255, 159, 64, 0.2)',
      'rgba(255, 205, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(201, 203, 207, 0.2)',
      'rgba(201, 203, 107, 0.2)',
      'rgba(201, 203, 207, 0.2)'
    ],
    borderColor: [
      'rgb(255, 99, 132)',
      'rgb(255, 159, 64)',
      'rgb(255, 205, 86)',
      'rgb(75, 192, 192)',
      'rgb(54, 162, 235)',
      'rgb(153, 102, 255)',
      'rgb(201, 203, 207)',
      'rgb(201, 203, 207)',
      'rgb(201, 203, 207)',
      'rgb(201, 203, 207)',
    ],
    borderWidth: 1
  }]
};
})


</script>


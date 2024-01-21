<template>
  <!-- Chart Datas -->
  <div class="col-span-7 bg-white p-2 my-3 rounded-xl flex flex-col items-center justify-around ">
    <div class="w-full pl-8 py-3   flex justify-between">
      <span class="text-2xl font-bold " style="font-family: 'Figtree';">
        Group Orders
      </span>
    </div>
    <Bar :data="chartData" :options="chartOption" class="bg-white p-2 border-none " />
  </div>
</template>

<script setup>

import { watchEffect, ref, onMounted } from 'vue';
import { Bar} from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
import IndexStore from '../../../store/store.index';
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)


const chartData = ref();
const chartOption = ref();

const index_store = IndexStore();


watchEffect(() => {

  const label = [];
  const data = [];
  for (let i of index_store?.group_chart_statistic_data) {
    label.push(i.department_id)
    data.push(i.stf_count)
  }

  chartData.value = {
    labels: label,
    datasets: [{
      label: 'Some',
      data: data,
      backgroundColor: [
        'rgba(61, 72, 224)',
      ],
    }],
  };

  chartOption.value = {
    plugins: {
      legend: {
        display: false
      }
    },
    scales: {
      // y: {
      //   beginAtZero: true,
      //   grid: {
      //     display: false
      //   }
      // },
      x: {
        beginAtZero: true,
        grid: {
          display: false
        }
      },

    }
  }

})

</script>

<style lang="scss" scoped></style>
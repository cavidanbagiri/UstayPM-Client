
<template>
  <div class="col-span-6 p-1  border rounded-xl shadow-xl mx-1 bg-white"  style="font-family: 'Roboto';">
    <div class="flex flex-col justify-center items-center">
      <span class="text-3xl font-bold text-center pl-5 text-gray-600 mt-1 mb-3">Common Information</span>
      <!-- Information Section -->
      <div class="flex flex-row justify-between items-between text-gray-500 w-full ">
        
        <div class="flex flex-col  justify-center w-full items-center pl-3">
          <span class="text-center text-md font-bold">Total STF</span>
          <span class="my-1 text-center text-lg font-bold text-gray-700">523</span>
        </div>

        <div class="flex flex-col  justify-center w-full items-center pl-3">
          <span class="text-center text-md font-bold">Total SM</span>
          <span class="my-1 text-center text- font-bold text-gray-700">523</span>
        </div>
        
        <div class="flex flex-col  justify-center w-full items-center pl-3">
          <span class="text-center text-md font-bold">Total Processing</span>
          <span class="my-1  text-center text-lg font-bold text-gray-700">21</span>
        </div>
        
        <div class="flex flex-col  justify-center w-full items-center pl-3">
          <span class="text-center text-md font-bold">Total Warehouse</span>
          <span class="my-1 text-center text-lg font-bold text-gray-700">414</span>
        </div>
        
      </div>
      <!-- Chart Side -->
      <div class="w-full h-1/3">
        <Bar :data="chartData" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { watchEffect, ref } from 'vue';
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

const chartData = ref();

watchEffect(()=>{
  chartData.value = {
  labels: [1,2,3,4,5,6,7],
  datasets: [{
    label: 'Total Dataset',
    data: [65, 59, 80, 152, 56, 55, 40],
    backgroundColor: [
      'rgba(255, 99, 132, 0.2)',
      'rgba(255, 159, 64, 0.2)',
      'rgba(255, 205, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(201, 203, 207, 0.2)'
    ],
    borderColor: [
      'rgb(255, 99, 132)',
      'rgb(255, 159, 64)',
      'rgb(255, 205, 86)',
      'rgb(75, 192, 192)',
      'rgb(54, 162, 235)',
      'rgb(153, 102, 255)',
      'rgb(201, 203, 207)'
    ],
    borderWidth: 1
  }]
};
})


</script>


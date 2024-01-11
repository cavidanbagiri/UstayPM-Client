<template>
    <div class="grid grid-cols-12 gap-6 my-3">

        <div class="col-span-4 bg-white rounded-xl flex flex-col items-center justify-between" style="font-family: 'Jost';">
            <div class="w-full pl-8 border-b py-3   flex justify-between">
                <span class="text-2xl font-bold "  style="font-family: 'Roboto';">
                    Total STF
                </span>
                <span class="text-2xl font-bold text-gray-500 pr-4 cursor-pointer">
                    <i class="fa-solid fa-ellipsis fa-xs"></i>
                </span>
            </div>
            <div class="border-[25px] border-violet-600 rounded-full flex justify-center items-center my-5"
                style="height: calc(50% - 0.59em); width: calc(50% - 0.59em);">
                <span class="text-5xl font-bold text-violet-700">434</span>
            </div>
            <div class="w-full flex flex-row justify-around my-3">
                <div class="  flex flex-col items-center">
                    <span class="text-xl font-bold text-gray-400">Waiting</span>
                    <span class="text-3xl font-bold">15</span>
                </div>
                <div class="  flex flex-col items-center">
                    <span class="text-xl font-bold text-gray-400">Complete</span>
                    <span class="text-3xl font-bold">415</span>
                </div>
                <div class="  flex flex-col items-center">
                    <span class="text-xl font-bold text-gray-400">Canceled</span>
                    <span class="text-3xl font-bold">4</span>
                </div>
            </div>
        </div>
        <div class="col-span-8 bg-white p-1 rounded-xl flex flex-col items-center justify-around  ">
            <!-- <div class="w-full pl-8 border-b pb-3 pt-2  flex justify-between" style="font-family: 'Roboto';">
                <span class="text-2xl font-bold ">
                    Group Order 
                </span>
                <span class="text-2xl font-bold text-gray-500 pr-4 cursor-pointer">
                    <i class="fa-solid fa-ellipsis fa-xs"></i>
                </span>
            </div> -->
            <Bar :data="chartData" />
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
onMounted(async () => {
    await index_store.groupChartStatisticData(user_store.user?.projectId);
})


// const chartData = reactive({
//   label:[],
//   data:[]
// });

const chartData = ref()

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
            borderWidth: 1,
        }],
        
    };
})


</script>

<style lang="scss" scoped></style>
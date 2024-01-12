<template>
    <div class="grid grid-cols-12 gap-6 my-3 ">

        <!-- STF Section-->
        <div class="col-span-4 bg-white rounded-xl flex flex-col items-center justify-between h-[30rem]"
            style="font-family: 'Jost';">
            <!-- Title Section -->
            <div class="w-full pl-8 border-b py-3   flex justify-between">
                <span class="text-2xl font-bold " style="font-family: 'Roboto';">
                    Total STF
                </span>
                <span class="text-2xl font-bold text-gray-500 pr-4 cursor-pointer">
                    <i class="fa-solid fa-ellipsis fa-xs"></i>
                </span>
            </div>
            <!-- Title Center Section -->
            <div class="border-[20px]  w-[15rem] h-[15rem] border-violet-600 rounded-full flex justify-center items-center"
                style="">
                <span class="text-5xl font-bold text-violet-700">434</span>
            </div>
            <!-- Footer Section -->
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

        <!-- Sm Section-->
        <div class="col-span-4 ml-4 bg-white rounded-xl flex flex-col items-center justify-between h-[30rem]"
            style="font-family: 'Jost';">
            <!-- Title Section -->
            <div class="w-full pl-8 border-b py-3   flex justify-between">
                <span class="text-2xl font-bold " style="font-family: 'Roboto';">
                    Total SM
                </span>
                <span class="text-2xl font-bold text-gray-500 pr-4 cursor-pointer">
                    <i class="fa-solid fa-ellipsis fa-xs"></i>
                </span>
            </div>
            <!--  Chart Section -->
            <div class=" w-[15rem] h-[15rem] flex justify-center items-center" style="">
                <Pie :data="chartDataSM" />
                <!-- <span class="text-5xl font-bold text-violet-700">434</span> -->
            </div>
            <!-- Footer Section -->
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

        <!-- User Profile Section -->
        <div class="col-span-4 ml-4 bg-white rounded-xl flex flex-col items-center justify-between h-[30rem]"
            style="font-family: 'Jost';">
            <!-- Title Section -->
            <div class="w-full pl-8 border-b py-3   flex justify-between">
                <span class="text-2xl font-bold " style="font-family: 'Roboto';">
                    User Profile
                </span>
                <span class="text-2xl font-bold text-gray-500 pr-4 cursor-pointer">
                    <i class="fa-solid fa-ellipsis fa-xs"></i>
                </span>
            </div>
            <!--  Chart Section -->
            <div class="flex flex-col  w-full h-full items-center rounded-b-xl">
                <div class=" w-[15rem] h-[15rem] flex justify-center items-center" style="">
                    <img class="w-[12rem] h-[12rem] rounded-full" src="https://blog.photofeeler.com/wp-content/uploads/2017/12/linkedin-profile-picture.jpg" alt="">
                </div>
                <div class="flex flex-col justify-center items-center">
                    <div>
                        <span class="text-4xl font-bold text-center " >Cavidan Bagirli</span>
                    </div>
                    <div>
                        <span class="text-xl  text-center text-gray-400 " >cbagirli@ustay.com</span>
                    </div>
                    <div class="flex justify-between mt-5">
                        <button class="p-2 rounded-lg mx-3 text-white font-bold bg-violet-600">Edit Profile</button>
                        <button class="p-2 rounded-lg mx-3 text-white font-bold bg-violet-600">Edit Image</button>
                    </div>
                </div>
            </div>
           
        </div>

        <!-- Chart Datas -->
        <div class="col-span-6 bg-white p-2 my-3 rounded-xl flex flex-col items-center justify-around ">
            <Bar :data="chartData" class="bg-white p-2 border-none " />
        </div>

    </div>
</template>

<script setup>

import { watchEffect, ref, onMounted } from 'vue';
import { Bar, Pie } from 'vue-chartjs'
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
const chartDataSM = ref();

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
                'rgba(107, 3, 252)',
                'rgba(107, 3, 252)',
                'rgba(107, 3, 252)',
                'rgba(107, 3, 252)',
                'rgba(107, 3, 252)',
                'rgba(107, 3, 252)',
                'rgba(107, 3, 252)',
                'rgba(107, 3, 252)',
            ],
            
        }],

    };

    chartDataSM.value = {
        // labels: ['Canceled', 'Processing', 'Completed'],
        datasets: [
            {
                label: 'Data One',
                backgroundColor: [
                    'rgb(3, 107, 252)',
                    'rgb(107, 3, 252)',
                    'rgb(61, 72, 224)'
                ],
                data: [
                    15, 23, 47
                    //   index_store?.statistic_data?.sm_canceled,
                    //   index_store?.statistic_data?.sm_process,
                    //   index_store?.statistic_data?.sm_completed
                ]
            }
        ]
    }

})


</script>

<style lang="scss" scoped></style>
<template>
    <div class="col-span-6 bg-white rounded-xs p-1 shadow-xl border flex " style="font-family: 'Roboto';">
        <div class="flex flex-col w-full items-center justify-between py-1">
            <span class="text-3xl font-bold text-start pl-5 text-gray-600 mt-1 mb-3">Warehouse Stock</span>
            <div class="flex w-full h-full">
                <div class=" w-1/2 flex">
                    <Doughnut :data="chartData" />
                </div>
                <div class=" flex flex-col w-1/2 justify-around">

                    <template v-for="i in index_store.ws_statistic_data">
                        <!-- Warehouse Stock Consumables -->
                        <div v-if="i.material_type == 'Consumables'"
                            class="flex  border shadow-lg mx-10 p-3 items-center justify-between ">
                            <div class="flex items-center">
                                <div>
                                    <img class="w-12" src="../../../assets/consumables.png" alt="">
                                </div>
                                <div class=" flex flex-col ml-6 justify-around  h-full ">
                                    <span class="text-lg  w-full">
                                        Consumables
                                    </span>
                                    <span class=" text-lg ">Total {{ i.count }}</span>
                                </div>
                            </div>
                            <div
                                class="text-lg w-14 h-14 p-3 bg-blue-200 text-blue-600 font-bold rounded-full flex items-center justify-center">
                                {{ Math.round(100 * i.count / total) }}%
                            </div>
                        </div>

                        <!-- Warehouse Stock Projects -->
                        <div v-if="i.material_type == 'Project'"
                            class="flex  border shadow-lg mx-10 p-3 items-center justify-between ">
                            <div class="flex items-center">
                                <div>
                                    <img class="w-12" src="../../../assets/concrete.png" alt="">
                                </div>
                                <div class=" flex flex-col ml-6 justify-around  h-full ">
                                    <span class="text-lg  w-full">
                                        Projects
                                    </span>
                                    <span class=" text-lg">{{ i.count }}</span>
                                </div>
                            </div>
                            <div
                                class="text-lg w-14 h-14 p-3 bg-green-200 text-green-600 font-bold rounded-full flex items-center justify-center">
                                {{ Math.round(100 * i.count / total) }}%
                            </div>
                        </div>

                        <!-- Warehouse Stock Fixture -->
                        <div v-if="i.material_type == 'Fixture'"
                            class="flex  border shadow-lg mx-10 p-3 items-center justify-between ">
                            <div class="flex items-center">
                                <div>
                                    <img class="w-12" src="../../../assets/driller.png" alt="">
                                </div>
                                <div class=" flex flex-col ml-6 justify-around  h-full ">
                                    <span class="text-lg  w-full">
                                        Fixture
                                    </span>
                                    <span class=" text-lg">{{ i.count }}</span>
                                </div>
                            </div>
                            <div
                                class="text-lg w-14 h-14 p-3 bg-red-200 text-red-600 font-bold rounded-full flex items-center justify-center">
                                {{ Math.round(100 * i.count / total) }}%
                            </div>
                        </div>

                    </template>
                    <!-- Warehouse Stock Fixture -->
                    <div class="flex  border shadow-lg mx-10 p-3 items-center justify-between ">
                        <div class="flex items-center">
                            <div>
                                <img class="w-12" src="../../../assets/unusable.png" alt="">
                            </div>
                            <div class=" flex flex-col ml-6 justify-around  h-full ">
                                <span class="text-lg  w-full font-bold">
                                    Unusable
                                </span>
                                <span class=" text-xl font-bold">0</span>
                            </div>
                        </div>
                        <div
                            class="text-lg w-14 h-14 p-3 bg-yellow-200 text-yellow-600 font-bold rounded-full flex items-center justify-center">
                            0%
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

import { ref, watchEffect, onMounted, reactive } from 'vue';
import { Doughnut } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

import IndexStore from '../../../store/store.index';
import UserStore from '../../../store/store.user';

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

const index_store = IndexStore();
const user_store = UserStore();

onMounted(async () => {

    await index_store.wsStatisticData(user_store.user?.projectId)

})

// Get Statistic Result
const prop = defineProps(['statistic_data']);

const total = ref(0);

const chartData = ref();

watchEffect(() => {
    const chart_data = reactive({
        label: [],
        data: []
    })
    for (let i of index_store.ws_statistic_data) {
        // i.material_type = i.material_type[0].toUpperCase()+i.material_type.slice(1);
        chart_data.label.push(i.material_type);
        chart_data.data.push(i.count);
        total.value += Number(i.count)
    }
    console.log('total is : ', total.value);
    chartData.value = {
        labels: chart_data.label,
        datasets: [
            {
                label: 'Data One',
                backgroundColor: [
                    'rgb(255, 99, 132)',
                    'rgb(54, 162, 235)',
                    'rgb(255, 205, 86)',
                ],
                data: chart_data.data
            }
        ]
    }
})


</script>

<style lang="scss" scoped></style>
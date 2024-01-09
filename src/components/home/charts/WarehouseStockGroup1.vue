<template>
    <div class="col-span-6 bg-white rounded-xs p-1 shadow-xl border flex h-full" style="font-family: 'Roboto';">
        
    </div>
</template>

<script setup>

import { ref, watchEffect, onMounted, reactive } from 'vue';
import { PolarArea } from 'vue-chartjs'
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
<template>
    <div class="grid grid-cols-12 gap-6 my-3 ">

        <STFChart/>

        <SMChart/>

        <!-- <WarehouseStockChart/> -->

        <WarehouseStockChart1/>
        
        <GroupCountChart/>

        <WarehouseDatasChart/>

        <!-- <UserProfileChart/> -->
        

    </div>
</template>

<script setup>

import { ref, onMounted } from 'vue';
import STFChart from './STFChart.vue';
import SMChart from './SMChart.vue';
import WarehouseStockChart from './WarehouseStockChart.vue';
import WarehouseStockChart1 from './WarehouseStockChart1.vue';
import GroupCountChart from './GroupCountChart.vue';
import UserProfileChart from './UserProfileChart.vue';
import WarehouseDatasChart from './WarehouseDatasChart.vue'
import { Bar, Doughnut } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
import IndexStore from '../../../store/store.index';
import UserStore from '../../../store/store.user';
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

const index_store = IndexStore();
const user_store = UserStore();
onMounted(async () => {
    await index_store.groupChartStatisticData(user_store.user?.projectId);
})

const chartData = ref()

// watchEffect(() => {

//     const label = [];
//     const data = [];
//     for (let i of index_store?.group_chart_statistic_data) {
//         label.push(i.department_id)
//         data.push(i.stf_count)
//     }

//     chartData.value = {
//         labels: label,
//         datasets: [{
//             label: 'Group Order',
//             data: data,
//             backgroundColor: [
//                 'rgba(61, 72, 224)',
//             ],

//         }],

//     };

    

// })


</script>

<style lang="scss" scoped></style>
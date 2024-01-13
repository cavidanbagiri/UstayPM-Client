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

import { onMounted } from 'vue';
import STFChart from './STFChart.vue';
import SMChart from './SMChart.vue';
import WarehouseStockChart1 from './WarehouseStockChart1.vue';
import GroupCountChart from './GroupCountChart.vue';
import WarehouseDatasChart from './WarehouseDatasChart.vue'
// import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
import IndexStore from '../../../store/store.index';
import UserStore from '../../../store/store.user';
// ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

const index_store = IndexStore();
const user_store = UserStore();
onMounted(async () => {
    await index_store.groupChartStatisticData(user_store.user?.projectId);
})




</script>

<style lang="scss" scoped></style>
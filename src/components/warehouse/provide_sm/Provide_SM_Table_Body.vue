
<template>

    <Provide_Sm_Table_Body_Each_Row
    v-for="(each_item, index) in warehouse_store?.warehouse_data_checked_values"
    :each_item="each_item" :index="index" :entering_rows="entering_rows" :store="warehouse_store"
    />
    
</template>

<script setup>

import Provide_Sm_Table_Body_Each_Row from './Provide_Sm_Table_Body_Each_Row.vue';
import WarehouseStore from '../../../store/store.warehouse';
const warehouse_store = WarehouseStore();

const prop = defineProps(['entering_rows']);

</script>

<style lang="scss" scoped>

</style>

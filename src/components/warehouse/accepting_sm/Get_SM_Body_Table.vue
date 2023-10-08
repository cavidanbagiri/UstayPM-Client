
<template>
    
    <Get_SM_Body_Table_Each_Row_Comp :table_data="table_data"
    v-for="(each_item, index) in warehouse_store?.processing_checked_values"
    :each_item="each_item" :index="index"
    />

</template>

<script setup>

    import Get_SM_Body_Table_Each_Row_Comp from './Get_SM_Body_Table_Each_Row_Comp.vue'
    import WarehouseStore from '../../../store/store.warehouse';
    const warehouse_store = WarehouseStore();

    const prop = defineProps(['table_data']);

</script>

<style lang="scss" scoped>

</style>
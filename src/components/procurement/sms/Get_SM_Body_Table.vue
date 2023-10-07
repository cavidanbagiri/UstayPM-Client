
<template>
    
    <Get_SM_Body_Table_Each_Row_Comp 
    v-for="(each, index) in procurement_store.all_sms"
    :each="each" :index="index"
    />

</template>

<script setup>

    import Get_SM_Body_Table_Each_Row_Comp from './Get_SM_Body_Table_Each_Row_Comp.vue'

    import ProcurementStore from '../../../store/store.procurement';
    const procurement_store = ProcurementStore();

</script>

<style lang="scss" scoped>

</style>
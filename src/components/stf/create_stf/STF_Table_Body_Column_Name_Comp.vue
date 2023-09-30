<template>

    <tr  v-for="i in prop.row_size" :class="i===1 ? 'bg-red-50' : ''"
        class="bg-white border-b  hover:bg-gray-50 table_row">
        <STF_Table_Body_Each_Row_Comp :id=i :key=i :order_list="order_list" />
    </tr>

</template>

<script setup>

import STF_Table_Body_Each_Row_Comp from './STF_Table_Body_Each_Row_Comp.vue';

const prop = defineProps(['row_size', 'order_list'])




</script>

<style scoped>
    
    .error {
        background-color: red;
    }

</style>
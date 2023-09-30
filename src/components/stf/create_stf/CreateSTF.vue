
<template>
    <div class=" overflow-x-auto shadow-xl sm:rounded-lg border p-2">
        <button
            class="font-bold py-2 px-2 my-1 text-xs outline-none font-mono  border text-gray-100 rounded-xl bg-green-500 mb-2"
            v-if="row_size === 0" @click= 'againFunc()'> Create New STF </button>
        <!-- Table Section -->
        <table class="w-full text-left text-gray-500 dark:text-gray-400">

            <!-- Table Header -->
            <STF_Table_Header_Comp />

            <!-- Table Body -->
            <STF_Table_Body_Comp :row_size=row_size :order_list="order_list" />

        </table>

        <!-- Add New Column -->
        <STF_Table_Row_Count_Comp @emitAddNewRow="addNewRow" @emitRemoveRow="removeRow" />

        <!-- Create STF Button-->
        <STF_Create_Button_Comp @setRowSize="setRowSize" :row_size="row_size" />

        <Toast />

    </div>
</template>

<script setup>

import { ref, onMounted } from 'vue';
import STF_Table_Header_Comp from './STF_Table_Header_Comp.vue';
import STF_Table_Body_Comp from './STF_Table_Body_Comp.vue';
import STF_Table_Row_Count_Comp from './STF_Table_Row_Count_Comp.vue';
import STF_Create_Button_Comp from './STF_Create_Button_Comp.vue';
import Toast from '../../design/Toast.vue';

/************************************************* Row Management ****************/
const row_size = ref(1);
const addNewRow = () => {
    row_size.value += 1;
}
const removeRow = () => {
    if(row_size.value > 1){
        row_size.value -= 1
    } 
    else{
        row_size.value
    }
} 

const setRowSize = () => {
    row_size.value = 0;
}
/****************************************************************************** */

/************************************************* Create Creating Items List ***/
let order_list = ref([]);
const againFunc = () => {
    row_size.value=1;
}
/******************************************************************************* */


</script>


<style lang="">
    
</style>

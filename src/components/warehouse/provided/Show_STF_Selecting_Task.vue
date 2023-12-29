<template>
    <div v-if="warehouse_store.return_checked_values.length >= 1" class="mtf-anim z-10 fixed left-1/4 bottom-10 flex flex-row mb-4 justify-center rounded-lg w-1/2">
        <div class="flex justify-between bg-white w-full border rounded-md shadow-2xl">
            <div class="flex items-center">
                <span class="bg-blue-600 py-4 px-6 text-white font-bold rounded-l-md text-3xl">{{ warehouse_store.return_checked_values.length
                }}</span>
                <div class="ml-3">
                    <p>Task Selected</p>
                    <span v-for="i in warehouse_store.return_checked_values.length" class="text-blue-600">&#9679</span>
                </div>
            </div>
            <div class="flex items-center">
                <!-- Un Selected Selecting Rows -->
                <button @click="unselect()"
                    class="flex flex-col items-center mx-3 cursor-pointer p-1 hover:bg-gray-100 "> <i
                        class="fa-regular fa-trash-can"></i> <span class="text-xs">Unselect</span></button>
                <!-- Add Archieve -->
                <!-- <button v-font-family class="flex flex-col items-center mx-3 cursor-pointer p-1 hover:bg-gray-100 "> <i
                        class="fa-regular fa-file-zipper"></i> <span class="text-xs">Add Archieve</span></button> -->
                <!-- Create SM -->        
                <button @click="returnMaterial()"
                    class="flex flex-col items-center mx-3 cursor-pointer p-1 hover:bg-gray-100 "> <i
                        class="fa-regular fa-handshake"></i> <span class="text-xs">Return</span></button>
                <!-- Set Star -->        
                <button class="flex flex-col items-center mx-3 cursor-pointer p-1 hover:bg-gray-100 "> <i
                        class="fa-regular fa-star"></i> <span class="text-xs">Set Star</span></button>
            </div>
        </div>
        
        <UpdateProvidedMaterial v-if="toggle_update_provide_material" @closeProvidedUpdateComp="closeProvidedUpdateComp" />

    </div>
</template>

<script setup>

import { reactive, ref } from 'vue';
import UpdateProvidedMaterial from './UpdateProvidedMaterial.vue';
import WarehouseStore from '../../../store/store.warehouse';
const warehouse_store = WarehouseStore();


// Toggle Update Return Component
const toggle_update_provide_material = ref(false);
const closeProvidedUpdateComp = () => {
    toggle_update_provide_material.value = false;
}


const returnMaterial = async () => {
    toggle_update_provide_material.value = true;
}

const unselect = () => {
    warehouse_store.after_returning = true;
    warehouse_store.return_checked_values = warehouse_store.return_checked_values.filter((item) => item.provide_id === -1)
    setTimeout(()=>{
        warehouse_store.after_returning = false;
    })
}

</script>

<style scoped>
.mtf-anim {
    animation: openfilter 0.5s;
}

@keyframes openfilter {
    from {
        transform: translateY(120%);
    }

    to {
        transform: translateY(0%);
    }
}</style>
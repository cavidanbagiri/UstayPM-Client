<template>
    <div v-if="warehouse_store.warehouse_data_checked_values?.length >= 1" class="mtf-anim fixed w-full bottom-10 flex flex-col mb-4 items-center rounded-lg">
        <div class="flex justify-between bg-white w-1/2 border rounded-md shadow-2xl">
            <div class="flex items-center">
                <span class="bg-blue-600 py-4 px-6 text-white font-bold rounded-l-md text-3xl">{{ warehouse_store.warehouse_data_checked_values.length
                }}</span>
                <div class="ml-3">
                    <p>Task Selected</p>
                    <span v-for="i in warehouse_store.warehouse_data_checked_values.length" class="text-blue-600">&#9679</span>
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
                <button @click="provideSM()" :disabled="warehouse_store.toggle_received_sm"
                    :class="warehouse_store.toggle_received_sm ? 'text-gray-400 hover:bg-white cursor-default ' : ''"
                    class="flex flex-col items-center mx-3 cursor-pointer p-1 hover:bg-gray-100 "> <i
                        class="fa-regular fa-handshake"></i> <span class="text-xs">Provide SM</span></button>
                <!-- Set Star -->        
                <button class="flex flex-col items-center mx-3 cursor-pointer p-1 hover:bg-gray-100 "> <i
                        class="fa-regular fa-star"></i> <span class="text-xs">Set Star</span></button>
            </div>
        </div>
    </div>
</template>

<script setup>

import WarehouseStore from '../../../store/store.warehouse';
const warehouse_store = WarehouseStore();


const provideSM = async () => warehouse_store.tab_num = 3;

const unselect = () => {
    warehouse_store.after_created = true
    warehouse_store.warehouse_data_checked_values = warehouse_store.warehouse_data_checked_values.filter((item) => item.id === -1)
    setTimeout(() => {
        warehouse_store.after_created = false;
    }, 1000)
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
<template>
    <div v-if="selecting_rows.length >= 1" class="mtf-anim fixed w-full bottom-10 flex flex-col mb-4 items-center rounded-lg">
        <div class="flex justify-between bg-white w-1/2 border rounded-md shadow-2xl">
            <div class="flex items-center">
                <span class="bg-blue-600 py-4 px-6 text-white font-bold rounded-l-md text-3xl">{{ selecting_rows.length
                }}</span>
                <div class="ml-3">
                    <p>Task Selected</p>
                    <span v-for="i in selecting_rows.length" class="text-blue-600">&#9679</span>
                </div>
            </div>
            <div class="flex items-center">
                <!-- Un Selected Selecting Rows -->
                <button @click="unselect()"
                    class="flex flex-col items-center mx-3 cursor-pointer p-1 hover:bg-gray-100 "> <i
                        class="fa-regular fa-trash-can"></i> <span class="text-xs">Unselect</span></button>
                <!-- Add Archieve -->
                <button class="flex flex-col items-center mx-3 cursor-pointer p-1 hover:bg-gray-100 "> <i
                        class="fa-regular fa-file-zipper"></i> <span class="text-xs">Add Archieve</span></button>
                <!-- Create SM -->        
                <button @click="createSM()" :disabled="procurement_store.toggle_createsm"
                    :class="procurement_store.toggle_createsm ? 'text-gray-400 hover:bg-white cursor-default ' : ''"
                    class="flex flex-col items-center mx-3 cursor-pointer p-1 hover:bg-gray-100 "> <i
                        class="fa-regular fa-handshake"></i> <span class="text-xs">Create SM</span></button>
                <!-- Set Star -->        
                <button v-font-family class="flex flex-col items-center mx-3 cursor-pointer p-1 hover:bg-gray-100 "> <i
                        class="fa-regular fa-star"></i> <span class="text-xs">Set Star</span></button>
            </div>
        </div>
    </div>
</template>

<script setup>

import { ref, watchEffect } from 'vue';
import ProcurementStore from '../../../store/procurement_store';
const procurement_store = ProcurementStore();

const selecting_rows = ref([]);

watchEffect(() => {
    selecting_rows.value = procurement_store.checked_values_sm
})

const createSM = async () => {
    procurement_store.tab_num = 2;
}

const unselect = () => {
    procurement_store.after_created = true
    procurement_store.checked_values_sm = procurement_store.checked_values_sm.filter((item) => item.id === -1)
    setTimeout(() => {
        procurement_store.after_created = false;
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
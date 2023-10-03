
<template>
    <!-- Filter Section -->
    <div class="mtf-anim z-70 " style="letter-spacing: 1px;font-size: x-small;">
        <!-- Common Filters Section -->
        <div class="relative flex flex-row items-center justify-between">
            <!-- Common Filter Keys -->
            <div class="flex flex-row start">
                <!-- Date Order -->
                <div class="flex flex-col my-1 mr-3" style="font-size: x-small;">
                    <span class="m-1">Date Order</span>
                    <select
                        class="border outline-none font-sans rounded-lg  h-full p-1 border-blue-300 hover:border-blue-600 shadow-lg"
                        v-model="filtered_objects.date_order">
                        <option value="Descending">Descendig</option>
                        <option>Ascending</option>
                    </select>
                </div>
                <!-- Search With Date -->
                <div class="flex flex-col m-1">
                    <span class="m-1">Search Date</span>
                    <input class="border outline-none rounded-md border-gray-300 p-2" type="date" name="" id=""
                        placeholder="Date" v-model="filtered_objects.createdAt" />
                </div>
                <!-- Search With Material Type-->
                <div class="flex flex-col m-1">
                    <span class="m-1">Search Type</span>
                    <select v-model="filtered_objects.material_type"
                        class="border outline-none font-sans rounded-lg  h-full p-1 border-blue-300 hover:border-blue-600 shadow-lg"
                        >
                        <option>All</option>
                        <option>Project</option>
                        <option>Consumables</option>
                        <option>Fixture</option>
                    </select>
                </div>
                <!-- Search With MTF -->
                <div class="flex flex-col m-1">
                    <span class="m-1">Search STF</span>
                    <label for="search"
                        class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                    <div class="relative">
                        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg aria-hidden="true" class="w-4 h-4 text-gray-500 " fill="none" stroke="currentColor"
                                viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                            </svg>
                        </div>
                        <input type="text" id="search"
                            class="block w-full p-2 pl-10 outline-none text-gray-900 border border-blue-300 rounded-lg  hover:border-blue-600  shadow-lg"
                            placeholder="MTF..." v-model="filtered_objects.stf_num" >

                    </div>
                </div>
            </div>
            <div class="flex flex-row justify-end">
                <!-- Search With Material Name -->
                <div class="flex flex-col m-1 items-start">
                    <span class="m-1">Search Type</span>
                    <label for="search"
                        class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                    <div class="relative  w-96">
                        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none w-96">
                            <svg aria-hidden="true" class="w-4 h-4 text-gray-500 dark:text-gray-400" fill="none"
                                stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                            </svg>
                        </div>
                        <input type="search" id="search" 
                            class="outline-none w-full p-2 pl-10 text-gray-900 border border-blue-300 rounded-lg hover:border-blue-600 shadow-lg"
                            placeholder="Search" v-model="filtered_objects.material_name" >

                    </div>
                </div>
                <!-- Table Specification -->
                <div class="flex m-1 items-end text-gray-500 cursor-pointer relative ">
                    <button class="p-2 hover:bg-gray-300 rounded-md" @click="show_table_spec = !show_table_spec">
                        <i class="fa-solid fa-gear fa-2xl"></i>
                    </button>
                    
                    <slot v-if="show_table_spec">
                    </slot>

                </div>
                <!-- Table Specification -->
                <div class="flex m-1 items-end text-gray-500 cursor-pointer relative">
                    <button class="p-2 hover:bg-gray-300 rounded-md">
                        <i class="fa-solid fa-chart-line fa-2xl"></i>
                    </button>
                </div>
            </div>


        </div>
    </div>
</template>

<script setup>

import { ref, reactive, watchEffect } from 'vue';

// Define Emits
const emits = defineEmits(['filterFunction', 'filtered_fields']);

// Create Filtered Object
const filtered_objects = reactive({
    user : '',
    date_order : '',
    createdAt : '',
    material_type : '',
    material_name : '',
    stf_num : '',
})

watchEffect(()=>{
    emits('filterFunction',filtered_objects);
})

// Show Table Headers Spec
const show_table_spec = ref(false);




</script>

<style lang="scss" scoped></style>
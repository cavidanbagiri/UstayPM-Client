
<template>
    <!-- Filter Section -->
    <div class="mtf-anim z-70 " style="letter-spacing: 1px;font-size: x-small;">
        <!-- Common Filters Section -->
        <div class="relative flex flex-row items-center justify-between filter_headers">
            <!-- Common Filter Keys -->
            <div class="flex flex-row start">
                <!-- Date Order -->
                <div class="sm:hidden 2xl:flex flex-col my-1 mr-3" style="font-size: x-small;">
                    <span class="m-1">Date Order</span>
                    <select
                        class="border outline-none  rounded-lg  h-full p-1 border-blue-300 hover:border-blue-600 shadow-lg"
                        v-model="filtered_objects.date_order">
                        <option value="Descending">Descendig</option>
                        <option>Ascending</option>
                    </select>
                </div>
                <!-- Search With Material Type-->
                <div class="sm:hidden xl:flex flex-col m-1">
                    <span class="m-1">Search Type</span>
                    <select v-model="filtered_objects.material_type"
                        class="border outline-none text-md rounded-lg  h-full p-1 border-blue-300 hover:border-blue-600 shadow-lg">
                        <option>All</option>
                        <option>Project</option>
                        <option>Consumables</option>
                        <option>Fixture</option>
                    </select>
                </div>
                <!-- Search With Username -->
                <div class="sm:hidden xl:flex flex-col m-1">
                    <span class="m-1">Search Username</span>
                    <select v-model="filtered_objects.usernames"
                        class="border outline-none  rounded-lg  h-full p-1 border-blue-300 hover:border-blue-600 shadow-lg" style="font-size: 16px;">
                        <option value="All">-- All --</option>
                        <option v-for="i in procurement_store.created_stf_username" :value="i.id"
                            style="font-family: 'Poppins', sans-serif;">
                            {{ i.ordered_name }}
                        </option>
                    </select>
                </div>
                <!-- Selected Vendorname -->
                <VendorNames @selectedComp="selectedComp" :companies_list="procurement_store.companies_names" />
                <!-- Search With Date -->
                <div class="sm:hidden 2xl:flex flex-col m-1">
                    <span class="m-1">Search Date</span>
                    <input class="border outline-none rounded-md border-gray-300 p-2" type="date" name="" id=""
                        placeholder="Date" v-model="filtered_objects.createdAt" />
                </div>
                <!-- Search With STF -->
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
                            placeholder="STF..." v-model="filtered_objects.stf_num">
                    </div>
                </div>
                <!-- Search With SM -->
                <div class="flex flex-col m-1">
                    <span class="m-1">Search SM</span>
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
                            placeholder="SM..." v-model="filtered_objects.sm_num">
                    </div>
                </div>
                
            </div>
            <div class="flex flex-row justify-end">
                <!-- Search With Material Name -->
                <div class="flex flex-col m-1 items-start">
                    <span class="m-1">Search Type</span>
                    <label for="search"
                        class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                    <div class="relative sm:48 lg:w-64 2xl:w-96">
                        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none w-96">
                            <svg aria-hidden="true" class="w-4 h-4 text-gray-500 dark:text-gray-400" fill="none"
                                stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                            </svg>
                        </div>
                        <input type="search" id="search"
                            class="outline-none w-full p-2 pl-10 text-gray-900 border border-blue-300 rounded-lg hover:border-blue-600 shadow-lg"
                            placeholder="Search" v-model="filtered_objects.sm_material_name">

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
import ProcurementStore from '../store/store.procurement';
import UserStore from '../store/store.user';
const user_store = UserStore();
import VendorNames from './VendorNames.vue';
const procurement_store = ProcurementStore();
// Define Emits
const emits = defineEmits(['filterFunction', 'filtered_fields']);

const selectedComp = (val) => {
    val !== 'All' ? 
    filtered_objects.vendor_name = val.company_id :  
    filtered_objects.vendor_name = val      
}

// Create Filtered Object
const filtered_objects = reactive({
    project_id:user_store.user?.projectId,
    createdAt: '',
    sm_material_name: '',
    vendor_name: '',
    usernames: '',
    stf_num: '',
    sm_num: '',
    material_type: '',
    date_order: '',
})

watchEffect(() => {
    emits('filterFunction', filtered_objects);
})

// Show Table Headers Spec
const show_table_spec = ref(false);

const closeComp = () => {
    show.value = false;
}


</script>

<style lang="scss" scoped></style>
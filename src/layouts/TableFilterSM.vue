
<template>
    <!-- Filter Section -->
    <div class="mtf-anim z-70 " style="letter-spacing: 1px;font-size: x-small;">
        <!-- Common Filters Section -->
        <div class="relative flex flex-row items-center justify-between filter_headers">
            <!-- Common Filter Keys -->
            <div class="flex flex-row start">
                <!-- Date Order -->
                <div class="flex flex-col my-1 mr-3" style="font-size: x-small;">
                    <span class="m-1">Date Order</span>
                    <select
                        class="border outline-none  rounded-lg  h-full p-1 border-blue-300 hover:border-blue-600 shadow-lg"
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
                        class="border outline-none  rounded-lg  h-full p-1 border-blue-300 hover:border-blue-600 shadow-lg">
                        <option>All</option>
                        <option>Project</option>
                        <option>Consumables</option>
                        <option>Fixture</option>
                    </select>
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
                <!-- Search Vendor Name -->
                <!-- <div class="flex flex-col m-1">
                    <span class="m-1">Search Vendor Name</span>
                    <select v-model="filtered_objects.vendor_name"
                        class="border outline-none  rounded-lg  h-full p-1 border-blue-300 hover:border-blue-600 shadow-lg"
                        >
                        <option v-for="i in procurement_store.companies_names" class="text-lg" 
                        :value="i.company_id"
                        style="font-family: 'Lato', sans-serif;">
                          {{ i.vendor_name }}
                        </option>
                    </select>
                </div> -->
                <!-- Vendor Name -->
                <div class="flex flex-col m-1 relative">
                    <span class="m-1">Search Vendor Name</span>
                    <div class="p-0 flex items-center m-1">
                        <button class="border py-3 mx-5 rounded-xl text-sm px-3" @click="show = !show">
                            Select Vendor
                        </button>
                    </div>
                    <Transition name="show">
                        <div v-if="show"
                            class="flex flex-col bg-white border rounded-xl shadow-2xl absolute top-10 right-10 p-0 min-w-[700px] max-h-[600px] overflow-auto">
                            <!-- Title Section -->
                            <div class="sticky top-0 bg-white p-2 height-[30px]">
                                <div class="flex justify-between text-gray-600">
                                    <span class="font-bold text-2xl"
                                        style="font-family: 'Lato', sans-serif ;">Companies</span>
                                    <button @click=closeComp
                                        class="font-bold text-lg hover:bg-gray-100 py-1 px-2 rounded-md">
                                        <i class="fa-solid fa-xmark"></i>
                                    </button>
                                </div>
                            </div>
                            <!-- Search Company Name Section -->
                            <div class=" sticky top-[36px] p-2 bg-white">
                                <input class="border-2 border-indigo-600 my-2 w-full p-2 rounded-lg text-sm outline-none "
                                    type="text" name="" id="" placeholder="Company Name..." style="font-style: italic;">
                            </div>
                            <!-- Companies Names Section -->
                            <ul class="">
                                <li v-for="i in procurement_store.companies_names" @click="selectedComp(i)"
                                    style="font-family:'Lato', sans-serif;"
                                    class="m-1 p-1 px-2 hover:bg-gray-100  cursor-pointer rounded-md ">
                                    {{ i.vendor_name }}
                                </li>
                            </ul>
                        </div>
                    </Transition>
                </div>
                <!-- Search With Username -->
                <div class="flex flex-col m-1">
                    <span class="m-1">Search Username</span>
                    <select v-model="filtered_objects.usernames"
                        class="border outline-none  rounded-lg  h-full p-1 border-blue-300 hover:border-blue-600 shadow-lg">
                        <option v-for="i in procurement_store.created_stf_username" class="text-lg" :value="i.id"
                            style="font-family: 'Lato', sans-serif;">
                            {{ i.ordered_name }}
                        </option>
                    </select>
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
const procurement_store = ProcurementStore();
// Define Emits
const emits = defineEmits(['filterFunction', 'filtered_fields']);

const show = ref(false);
const selectedComp = (val) => {
    filtered_objects.vendor_name = val.company_id;
    show.value = false
}

// Create Filtered Object
const filtered_objects = reactive({
    createdAt: '',
    sm_material_name: '',
    vendor_name: '',
    usernames: '',
    stf_num: '',
    sm_num: '',
    date_order: '',
})

watchEffect(() => {
    emits('filterFunction', filtered_objects);
})

// Show Table Headers Spec
const show_table_spec = ref(false);




</script>

<style lang="scss" scoped></style>
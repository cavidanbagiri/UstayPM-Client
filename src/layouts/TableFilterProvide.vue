
<template>
    <!-- Filter Section -->
    <div class="mtf-anim z-70 " style="letter-spacing: 1px;font-size: x-small;">
        <!-- Common Filters Section -->
        <div class="relative flex flex-row items-center justify-between filter_headers">
            <!-- Common Filter Keys -->
            <div class="flex flex-row start">
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
                <!-- Search With Delivery Type-->
                <div class="flex flex-col m-1">
                    <span class="m-1">Delivery Type</span>
                    <select v-model="filtered_objects.delivery_type"
                        class="border outline-none  rounded-lg  h-full p-1 border-blue-300 hover:border-blue-600 shadow-lg">
                        <option>All</option>
                        <option value="1" >Temporary</option>
                        <option value="2" >Debit</option>
                        <option value="3" >Daily Debit</option>
                    </select>
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
                <!-- Search With Username -->
                <div class="flex flex-col m-1">
                    <span class="m-1">Name and Surname</span>
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
                            placeholder="Name Surname" v-model="filtered_objects.deliver_to">
                    </div>
                </div>
                <!-- Search With Card Number -->
                <div class="flex flex-col m-1">
                    <span class="m-1">Card Number</span>
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
                            placeholder="Name Surname" v-model="filtered_objects.card_number">
                    </div>
                </div>
                <!-- Search With Serial No -->
                <div class="flex flex-col m-1">
                    <span class="m-1">Serial No</span>
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
                            placeholder="SN/123..." v-model="filtered_objects.serial_no">
                    </div>
                </div>
                <!-- Search With Serial No -->
                <div class="flex flex-col m-1">
                    <span class="m-1">Unique Id</span>
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
                            placeholder="KM-18" v-model="filtered_objects.unique_id">
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
import WarehouseStore from '../store/store.warehouse';
import UserStore from '../store/store.user_store';
const user_store = UserStore();
const warehouse_store = WarehouseStore();
// Define Emits
const emits = defineEmits(['filterFunction', 'filtered_fields']);

const show = ref(false);
const selectedComp = (val) => {
    val !== 'All' ? 
    filtered_objects.vendor_name = val.company_id :  
    filtered_objects.vendor_name = val  
    show.value = false
}

// Create Filtered Object
const filtered_objects = reactive({
    project_id:user_store.user?.projectId,
    sm_material_name: '',
    sm_num: '',
    material_type: '',
    delivery_type: '',
    providing_type: '',
    serial_no: '',
    unique_id: '',
    deliver_to: '',
    card_number: '',
})

watchEffect(() => {
    emits('filterFunction', filtered_objects);
})

// Show Table Headers Spec
const show_table_spec = ref(false);




</script>

<style lang="scss" scoped></style>
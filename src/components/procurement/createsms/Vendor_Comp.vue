
<template>
    <div class="flex flex-col relative">
        <div class="p-0 flex items-center">
            <span v-if="selecting_vendor != '' " class="text-sm max-w-[200px]">
                <span class="font-bold">
                    Selecting Vendor
                </span> 
                : " {{ selecting_vendor }} "
            </span>
            <button class="border py-3 mx-5 rounded-xl text-sm px-3" @click="show=!show">
                Select Vendor
            </button>
        </div>

        <Transition name="show">
            <div v-if="show" class="flex flex-col bg-white border rounded-xl shadow-2xl absolute top-10 right-10 p-0 min-w-[700px] max-h-[600px] overflow-auto" >
                <!-- Title Section -->
                <div class="sticky top-0 bg-white p-2 height-[30px]">
                    <div class="flex justify-between text-gray-600">
                        <span class="font-bold text-2xl" style="font-family: 'Lato', sans-serif ;">Companies</span>
                        <button @click = closeComp class="font-bold text-lg hover:bg-gray-100 py-1 px-2 rounded-md"><i class="fa-solid fa-xmark"></i></button>
                    </div>
                </div>
                <!-- Search Company Name Section -->
                <div class=" sticky top-[36px] p-2 bg-white border-2 border-indigo-600 m-2 rounded-lg ">
                    <div class="flex items-center">
                        <span>
                            <i class="fa-solid fa-magnifying-glass text-xl text-gray-500"></i>
                        </span>
                        <input v-model="selected_vendor_name" class="w-full p-2 text-sm outline-none " type="text" name="" id="" placeholder="Company Name...">
                    </div>
                </div>
                <!-- Companies Names Section -->
                <ul class="">
                    <li v-for="i in prop.vendor_list" @click="selectVendor(i)" style="font-family:'Lato', sans-serif;"
                        class="m-1 p-1 px-2 hover:bg-gray-100  cursor-pointer rounded-md ">
                       {{ i.vendor_name }}
                    </li>
                </ul>
            </div>
        </Transition>
    </div>
</template>

<script setup>

import { ref, watchEffect } from 'vue';
import ProcurementStore from '../../../store/store.procurement';

const show = ref(false);
const selecting_vendor = ref('');

const prop = defineProps(['vendor_list']);
const emit = defineEmits(['selectVendor']);

const procurement_store = ProcurementStore();

// Search Vendor Comp
const selected_vendor_name = ref('');
watchEffect(async ()=>{
    // if(selected_vendor_name.value.toString().trim()!=''){
        // console.log(selected_vendor_name.value);
        await procurement_store.filterVendorName(selected_vendor_name.value)
    // }
})

// Close Vendor Comp
const closeComp = () => {show.value = false}

// Select Vendor
const selectVendor = (vendor) => {
    selecting_vendor.value = vendor.vendor_name;
    show.value = false;
}

</script>

<style scoped>


.show-enter-active {
    animation: show 0.2s;
}

.show-leave-active {
    animation: show 0.2s reverse;
}

@keyframes show {
    
    0% {
        transform : scaleY(0);
        transform-origin: top;
    }
    100% {
        transform: scaleY(1);
    }

}

</style>
<template>
  <!-- Vendor Name -->
  <div class="flex flex-col m-1 relative  justify-start items-start">
    <span class="m-1">Search Vendor Name</span>
    <div class="p-0 flex items-start">
      <button class="border border-blue-300 py-2  rounded-lg text-sm px-3" @click="show = !show">
        Select Vendor
      </button>
    </div>
    <Transition name="show">
      <div v-if="show"
        class="flex flex-col bg-white border rounded-xl shadow-2xl absolute top-10 left-10 p-0 min-w-[700px] max-h-[600px] overflow-auto">
        <!-- Title Section -->
        <div class="sticky top-0 bg-white p-2 height-[30px]">
          <div class="flex justify-between text-gray-600">
            <span class="font-bold text-2xl" style="font-family: 'Poppins', sans-serif ;">Companies</span>
            <button @click=closeComp class="font-bold text-lg hover:bg-gray-100 py-1 px-2 rounded-md">
              <i class="fa-solid fa-xmark"></i>
            </button>
          </div>
        </div>
        <!-- Search Company Name Section -->
        <div class=" sticky top-[36px] p-2 bg-white">
          <input class="border-2 border-indigo-600 my-2 w-full p-2 rounded-lg text-sm outline-none " type="text" name=""
            id="" placeholder="Company Name..." style="">
        </div>
        <!-- Companies Names Section -->
        <ul class="text-lg" style="font-family:'Poppins', sans-serif;">
          <li @click="selectedComp('All')" class="m-1 p-1 px-2 hover:bg-gray-100  cursor-pointer rounded-md ">
            <span style="font-family:'Poppins', sans-serif;" class="text-lg">
              -- All --
            </span>
          </li>
          <li v-for="i in companies_list" @click="selectedComp(i)"
            style="font-family:'Poppins', sans-serif;" class="m-1 p-1 px-2 hover:bg-gray-100  cursor-pointer rounded-md ">
            {{ i.vendor_name }}
          </li>
        </ul>
      </div>
    </Transition>
  </div>
</template>

<script setup>

import {ref} from 'vue'

const prop = defineProps(['companies_list']);
const emits = defineEmits(['selectedComp']);

const show = ref(false);

const selectedComp = (val) => {
  show.value = false
  emits("selectedComp", val);
}

const closeComp = () => {
    show.value = false;
}

</script>

<style lang="scss" scoped></style>
<template>
  <div v-if="prop.cond"
    class="border flex flex-col bg-white absolute top-5 left-5 shadow-2xl p-2 px-4 rounded-2xl w-80">
    <div class="flex justify-end items-center">
      <span class="text-xl" @click="close">
        <i class="fa-solid fa-xmark text-gray-400 hover:text-black"></i>
      </span>
    </div>
    <div class="flex flex-col">
      <span @click="getSTFInform" class=" py-2  text-gray-900 row_item">
          <i class="fa-brands fa-joget px-1 text-gray-500"></i>
        Get STF Information</span>
      <span class=" py-2  text-gray-900 row_item">
          <i class="fa-regular fa-circle-question px-1 text-gray-500"></i>
        Get SM Information</span>
      <span class=" py-2  text-gray-900 row_item">
          <i class="fa-regular fa-eye-slash px-1 text-gray-500"></i>
        Set Hide</span>
      <span class=" py-2  text-gray-900 row_item">
          <i class="fa-regular fa-star px-1 text-gray-500"></i>
        Set Star</span>
      <span class=" py-2  text-gray-900 row_item">
          <i class="fa-regular fa-pen-to-square px-1 text-gray-500"></i>
        Update Row</span>
      <span class=" py-2  text-gray-900 row_item">
          <i class="fa-regular fa-trash-can px-1 text-gray-500"></i>
        Remove Row</span>
    </div>

    <div class="my-3 flex flex-col justify-between ">
      <span class="row_item p-1 hover:bg-none"> Set Status</span>
      <div class="text-lg px-1">
        <select class="select select-bordered w-full max-w-xs row_item">
          <option disabled selected>Normal</option>
          <option>Completed</option>
          <option>Waiting</option>
        </select>
      </div>
    </div>

  </div>
</template>

<script setup>

import IndexStore from '../../store/store.index';

const index_store = IndexStore();
const prop = defineProps(['cond', 'each'])
const emit = defineEmits(['closeInform'])

// Close Inform Button 
const close = () => {emit('closeInform')}

// Get STF Information
const getSTFInform = () => {
  index_store.fetchSTFRowInform(prop?.each?.stf_id)
}

</script>

<style scoped>

  .row_item {
    font-family: 'Poppins', sans-serif;
    font-size: 17px;
  }
  .row_item:hover{
    background-color: rgb(22, 233, 110);
    border-radius: 10px;
    padding-left: 5px;
    transition: 0.3s;
  }

</style>
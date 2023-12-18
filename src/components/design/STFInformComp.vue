<template>
  <div v-if="prop.cond"
    class="border flex flex-col bg-white absolute top-5 left-5 shadow-2xl p-2 px-4 rounded-2xl w-80">
    <div class="flex justify-end items-center">
      <span class="text-xl" @click="close">
        <i class="fa-solid fa-xmark text-gray-400 hover:text-black"></i>
      </span>
    </div>
    <div class="flex my-2 font-bold w-full text-lg ">
      <span v-if="prop?.each?.completed" class="px-2 py-2  text-green-500 bg-green-100 w-full rounded-lg text-center">
        Completed : {{ prop?.each?.completed }}
      </span>
      <span v-else class="px-2 py-2 text-red-500 bg-red-100 w-full rounded-lg  text-center">
        Completed : {{ prop?.each?.completed }}
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
      <span @click="cancelSTF"  class=" py-2  text-red-500 font-bold row_item">
          <i class="fa-solid fa-xmark px-1 text-red-500"></i>
        Cancel STF</span>
    </div>

    <div class="my-3 flex flex-col justify-between ">
      <span class="p-1 hover:bg-none text-lg"> Change STF Status</span>
      <div class="text-lg px-1">
        <select class="select select-bordered w-full max-w-xs" v-model="stf_status.completed" 
        @change="changeStatus">
          <option class="my-2 py-2 text-lg" value=false>Wait</option>
          <option class="my-2 py-2 text-lg" value="true">Complete</option>
        </select>
      </div>
    </div>

    <CancelSTF :toggle_cancelstf = "toggle_cancelstf" :user_id="user_store.user?.id" :stf_id="prop?.each?.stf_id"
     @closeCanceledSTF = "closeCanceledSTF" />

  </div>
</template>

<script setup>

import { reactive, ref, watchEffect } from 'vue'; 
import CancelSTF  from './CancelSTF.vue';

import IndexStore from '../../store/store.index';
import UserStore from '../../store/store.user_store';

const index_store = IndexStore();
const user_store = UserStore();

const prop = defineProps(['cond', 'each'])
const emit = defineEmits(['closeInform'])

// Show Or Hide Cancel STF Component
const toggle_cancelstf = ref(false);
const closeCanceledSTF = () => {
  toggle_cancelstf.value = false;
}


// Close Inform Button 
const close = () => {emit('closeInform')}

// Get STF Information
const getSTFInform = () => {
  index_store.fetchSTFRowInform(prop?.each?.stf_id)
  index_store.row_inform_condition = true;
}

// STF Informm
const stf_status = reactive({
  stf_id: prop?.each?.stf_id,
  completed: prop?.each?.completed,
  user: user_store.user.id,
})

const cancelSTF = async () => {
  toggle_cancelstf.value = true;
  // await index_store.cancelSTF({user_id: user_store.user?.id, stf_id: prop?.each?.stf_id, comment: 'just cancel'});
}

const changeStatus = async () => {
  if(user_store.user && user_store.user.departmentId === 2){ 
    await index_store.setStfStatus(stf_status)
    .then((respond)=>{
      if(stf_status.completed === 'true'){
        prop.each.completed = true
      }
      else{
        prop.each.completed = false
      }
      emit('closeInform')
    })
  }
  else{
    console.log('Authorization Error ');
  }
}

</script>

<style scoped>

  .row_item {
    font-family: 'Roboto', sans-serif;
    font-size: 17px;
  }
  .row_item:hover{
    background-color: rgb(22, 233, 110);
    border-radius: 10px;
    padding-left: 5px;
    transition: 0.3s;
  }

</style>
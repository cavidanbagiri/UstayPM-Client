<template>
  <div v-if="prop.cond" class="border flex flex-col bg-white absolute top-5 left-6 shadow-2xl p-2 px-6 rounded-2xl w-80 text-black z-10" style="font-family: 'Figtree';">
    <div class="flex justify-end items-center">
      <span class="text-3xl my-1" @click="close">
        <i class="fa-solid fa-xmark text-gray-400 hover:text-black"></i>
      </span>
    </div>
    <div v-if="prop.each?.canceled_id" class="flex text-lg bg-red-400 text-white rounded-md py-1 mb-1">
      <span class="text-center  w-full">
        STF Canceled
      </span>
    </div>
    <div v-else class="flex font-bold w-full text-[1.0rem] " >
        <span v-if="prop?.each?.completed" class="px-2 py-2  text-green-500 bg-green-100 w-full rounded-lg">
          Completed : {{ prop?.each?.completed }}
        </span>
        <span v-else class="px-2 py-2 text-red-500 bg-red-100 w-full rounded-lg">
          Completed : {{ prop?.each?.completed }}
        </span>
    </div>
    <div class="flex flex-col pb-2 text-[16px] ">
      
      <!-- Change STF Status -->
      <div v-if="!prop.each?.canceled_id"  class="my-3 flex flex-col justify-between text-gray-500" style="font-family: 'Figtree';">
        <span class="p-1 hover:bg-none text-[15px] text-start"> Change STF Status</span>
        <div class="text-[0.8rem] ">
          <select class="select select-bordered w-full max-w-xs" v-model="stf_status.completed" @change="changeStatus">
            <option class="my-2 py-2 text-[15px]" value=false>Wait</option>
            <option class="my-2 py-2 text-[15px]" value="true">Complete</option>
          </select>
        </div>
      </div>

      <!-- Return Material To Warehouse -->
      <slot name="return_material"></slot>
      <!-- Get STF Information -->
      <span @click="getSTFInform" class="flex items-center py-2 row_item">
        <img class="mr-3 w-5 h-5" src="../../assets/icons/information.png" alt="">
        STF Information</span>
      <!-- Get SM Information -->
      <span @click="getSTFInform" class="flex py-2 items-center text-gray-900 row_item">
        <img class="mr-3 w-5 h-5" src="../../assets/icons/info.png" alt="">
        SM Information</span>
      <!-- Set Hide -->
      <span class="flex py-2  items-center row_item">
        <img class="mr-3 w-5 h-5" src="../../assets/icons/hide.png" alt="">
        Set Hide</span>
      <span class="flex py-2  items-center row_item">
        <img class="mr-3 w-5 h-5" src="../../assets/icons/starblack.png" alt="">
        Set Star</span>
      <span class="flex py-2  items-center row_item">
        <img class="mr-3 w-5 h-5" src="../../assets/icons/refresh.png" alt="">
        Update</span>
      <span class="flex  py-2  items-center row_item">
        <img class="mr-3 w-5 h-5" src="../../assets/icons/trash.png" alt="">
        Remove</span>
      <span v-if="!prop.each?.canceled_id" @click="cancelSTF"
        class="flex py-2 items-center row_item text-[1.1rem] duration-300">
        <img class="mr-4 w-4 h-4" src="../../assets/icons/close.png" alt="">
        Cancel STF</span>
    </div>

    <CancelSTF :toggle_cancelstf="toggle_cancelstf" :user_id="user_store.user?.id" :stf="prop?.each"
      @closeCanceledSTF="closeCanceledSTF" />

  </div>

  <Toast :cond="cancelstf_authority" messages="You Dont Have Authority For Cancel STF" />
</template>

<script setup>

import { reactive, ref } from 'vue';
import Toast from './Toast.vue';
import CancelSTF from './CancelSTF.vue';

import IndexStore from '../../store/store.index';
import UserStore from '../../store/store.user_store';

const index_store = IndexStore();
const user_store = UserStore();

const prop = defineProps(['cond', 'each'])
const emit = defineEmits(['closeInform'])

// Cancelstf Authority Error
const cancelstf_authority = ref(false);

// Show Or Hide Cancel STF Component
const toggle_cancelstf = ref(false);
const closeCanceledSTF = () => {
  toggle_cancelstf.value = false;
}


// Close Inform Button 
const close = () => { emit('closeInform') }

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
  if (user_store.user.departmentId === 2 || user_store.user.departmentId === 3) {
    toggle_cancelstf.value = true;
  }
  else {
    cancelstf_authority.value = true;
    setTimeout(() => {
      cancelstf_authority.value = false;
    }, 2000)
  }
  // await index_store.cancelSTF({user_id: user_store.user?.id, stf_id: prop?.each?.stf_id, comment: 'just cancel'});
}

const changeStatus = async () => {
  if (user_store.user.departmentId === 2) {
    if (user_store.user && user_store.user.departmentId === 2) {
      await index_store.setStfStatus(stf_status)
        .then((respond) => {
          if (stf_status.completed === 'true') {
            prop.each.completed = true
          }
          else {
            prop.each.completed = false
          }
          emit('closeInform')
        })
    }
    else {
      console.log('Authorization Error ');
    }
  }
  else {
    cancelstf_authority.value = true;
    setTimeout(() => {
      cancelstf_authority.value = false;
    }, 2000)
  }
}

</script>

<style scoped>
.row_item {
  font-family: 'Figtree', sans-serif;
  font-weight: 400;
  font-size: 1.0rem;
}

.row_item:hover {
  background-color: rgb(22, 233, 110);
  border-radius: 10px;
  padding-left: 5px;
  transition: 0.3s;
}
</style>
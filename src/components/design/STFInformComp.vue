<template>
  <div v-if="prop.cond" class="border flex flex-col bg-white absolute top-5 left-6 shadow-2xl p-2 px-4 w-80 text-black z-10" style="font-family: 'Jost';">
    <div class="flex justify-end items-center">
      <span class="text-3xl " @click="close">
        <i class="fa-solid fa-xmark text-gray-400 hover:text-black fa-sm"></i>
      </span>
    </div>
    
    <div class="flex flex-col pb-2 text-[16px] ">
      
      <!-- Show STF Complete Or Not In User and Procurement Side -->
      <slot name="stf_complete"></slot>

      <!-- Return Change STF Status For SHowing Only In Procurement Side -->
      <slot name="change_stf_status"></slot>

      <!-- Return Material To Warehouse Slot and will show only in provide material section in warehouse module -->
      <slot name="return_material"></slot>

      <!-- Get STF Information -->
      <span @click="getSTFInform" class="flex items-center py-2 row_item">
        <img class="mr-3 w-5 h-5" src="../../assets/icons/information.png" alt="">
        STF Information</span>
      <!-- Get SM Information -->
      <span @click="getSTFInform" class="flex py-2 items-center text-gray-900 row_item" >
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

      <!-- Cancel stf will show only inside of Procurement Module, all stf section -->
      <slot name="cancel_stf"></slot>

    </div>

  </div>

  <Toast :cond="cancelstf_authority" messages="You Dont Have Authority For Cancel STF" />
</template>

<script setup>

import { reactive, ref } from 'vue';
import Toast from './Toast.vue';

import IndexStore from '../../store/store.index';
import UserStore from '../../store/store.user';

const index_store = IndexStore();
const user_store = UserStore();

const prop = defineProps(['cond', 'each'])
const emit = defineEmits(['closeInform'])

// Cancelstf Authority Error
const cancelstf_authority = ref(false);


// Close Inform Button 
const close = () => { emit('closeInform') }

// Get STF Information
const getSTFInform = () => {
  index_store.fetchSTFRowInform(prop?.each?.stf_id)
  index_store.row_inform_condition = true;
}

// STF Informm
// const stf_status = reactive({
//   stf_id: prop?.each?.stf_id,
//   completed: prop?.each?.completed,
//   user: user_store.user.id,
// })


// const changeStatus = async () => {
//   if (user_store.user.departmentId === 2) {
//     if (user_store.user && user_store.user.departmentId === 2) {
//       await index_store.setStfStatus(stf_status)
//         .then((respond) => {
//           if (stf_status.completed === 'true') {
//             prop.each.completed = true
//           }
//           else {
//             prop.each.completed = false
//           }
//           emit('closeInform')
//         })
//     }
//     else {
//       console.log('Authorization Error ');
//     }
//   }
//   else {
//     cancelstf_authority.value = true;
//     setTimeout(() => {
//       cancelstf_authority.value = false;
//     }, 2000)
//   }
// }

</script>

<style scoped>
.row_item {
  font-family: 'Jost', sans-serif;
  /* font-weight: 400; */
  font-size: 1.1rem;
}

.row_item:hover {
  background-color: rgb(22, 233, 110);
  border-radius: 10px;
  padding-left: 5px;
  transition: 0.3s;
}
</style>
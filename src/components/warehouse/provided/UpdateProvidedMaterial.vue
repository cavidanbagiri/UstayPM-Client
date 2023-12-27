<template>
  <div v-if="prop.cond"
    class="flex justify-end fixed right-0 top-0 w-screen h-screen z-50 border text-gray-600 bg-opacity-80 bg-gray-300">

    <div class="flex flex-col w-1/2 bg-white rounded-lg p-5">

      <!-- Close Component -->
      <div class="flex justify-end mx-5 text-xl font-bold px-2 py-1">
        <span @click="closeUpdateProvidedMaterialComp" class="cursor-pointer">
          <i class="fa-solid fa-xmark fa-xl text-gray-500"></i>
        </span>
      </div>

      <div v-if="success_cond" class="bg-green-500 text-white text-xl text-end py-4 pr-2">
        <span class="">{{ success_message }}</span>
      </div>

      <!-- Component Title -->
      <span class="text-center text-4xl my-3">
        Update Provided Material
      </span>

      <!-- Material Name -->
      <span class="text-xl">
        <span class="text-black">Material Name : </span>
        {{ prop?.each?.material_name }}
      </span>

      <!-- Selecting Amount Name -->
      <span class="text-xl">
        <span class="text-black">Current Amount : </span>
        {{ prop?.each?.amount }}
      </span>

      <!-- Show error message for entering new amount -->
      <div v-if="amount_error" class="mt-3 text-lg">
        <span class="text-red-500">Entering Amount cant be greater than current amount</span>
      </div>

      <!-- Change -->
      <div>
        <span class="text-xl">
          Amount
        </span>
        <input class="p-3 border rounded-lg mt-1 mb-3 text-xl outline-none hover:shadow-lg duration-300"
          v-model="current_value" type="number">
      </div>

      <div class=" flex justify-end mr-10 py-1">
        <button class="btn btn-active btn-secondary" @click="returnMaterial">
          Update
        </button>
      </div>

      {{ prop.each }}

    </div>

  </div>
</template>

<script setup>

import { ref, watchEffect } from 'vue';

import WarehouseStore from '../../../store/store.warehouse';
import UserStore from '../../../store/store.user_store';

const warehouse_store = WarehouseStore();
const user_store = UserStore();

const prop = defineProps(['cond', 'each']);
const emits = defineEmits(['closeProvidedUpdateComp'])


// Emit For Closing Current Comp
const closeUpdateProvidedMaterialComp = () => emits('closeProvidedUpdateComp');

// Get Selectiong each amount;
const current_value = ref(prop?.each?.amount)

// After Returning, Show SUccess Message
const success_cond = ref(false);
const success_message = ref('');

// Wrong Entering Amount Error 
const amount_error = ref(false);

// Check Entering Amount
watchEffect(() => {
  if (current_value.value > prop?.each?.amount || current_value.value < 0.001) {
    amount_error.value = true;
  }
  else {
    amount_error.value = false;
  }
})

const returnMaterial = async () => {
  // Set Entering amount inside of each
  prop.each.amount = current_value.value;
  if (user_store.user && user_store.user.departmentId === 3) {
    console.log('entering if');
    warehouse_store.return_checked_values.push(prop.each);
    await warehouse_store.returnMaterial(user_store.user.id)
      .then((respond) => {
        success_cond.value = true;
        success_message.value = 'Successfuly Update'
        setTimeout(() => {
          success_cond.value = false;
        }, 1000)
        closeUpdateProvidedMaterialComp();
      })
      .catch((err) => {
        console.log('return material from provide to warehouse error : ', err);
      })
  }
  else {
    success_cond.value = true;
    success_message.value = 'You Dont Have Authority For this operation'
    setTimeout(() => {
      success_cond.value = false;
    }, 1000)
  }

}

</script>

<style lang="scss" scoped></style>
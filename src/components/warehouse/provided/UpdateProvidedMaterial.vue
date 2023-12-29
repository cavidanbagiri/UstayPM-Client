<template>
  <div class="flex justify-end fixed right-0 top-0 w-screen h-screen z-10 border text-gray-600 bg-opacity-80 bg-gray-300">

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

      <!-- Each Components -->
      <div v-for="(i, index) in warehouse_store.return_checked_values" class="flex flex-col">

        <!-- Material Name -->
        <span class="text-xl">
          <span class="text-black">Material Name : </span>
          <span>{{ i.material_name }}</span>
        </span>

        <!-- Selecting Amount Name -->
        <span class="text-xl">
          <span class="text-black">Current Amount : </span>
          <span>{{ provide_values[index].amount }}</span>
        </span>

        <!-- Show error message for entering new amount -->
        <div v-if="amount_error.error && amount_error.id == index " class="mt-3 text-lg">
          <span class="text-red-500">Entering Amount cant be greater than current amount</span>
        </div>

        <!-- Change -->
        <div>
          <span class="text-xl">
            Amount
          </span>
          <input class="p-3 border rounded-lg mt-1 mb-3 text-xl outline-none hover:shadow-lg duration-300"
            v-model="i.amount" type="number">
        </div>

      </div>

      <div class=" flex justify-end mr-10 py-1">
        <button class="btn btn-active btn-secondary" @click="returnMaterial">
          Update
        </button>
      </div>

      {{ warehouse_store.return_checked_values }}
      {{ provide_values }}
    </div>


  </div>
</template>

<script setup>

import { ref, watchEffect, reactive } from 'vue';

import WarehouseStore from '../../../store/store.warehouse';
import UserStore from '../../../store/store.user_store.js';

const warehouse_store = WarehouseStore();
const user_store = UserStore();

// const prop = defineProps(['cond']);
const emits = defineEmits(['closeProvidedUpdateComp'])

// Emit For Closing Current Comp
const closeUpdateProvidedMaterialComp = () => emits('closeProvidedUpdateComp');

// Create Permanent Amount
const provide_values = []

watchEffect(() => {
  // Write All Values Inside Of Permanent Array
  if (provide_values.length < warehouse_store.return_checked_values.length) {
    for (let i of warehouse_store.return_checked_values) {
      let obj = {
        amount: i.amount,
        id: i.provided_id,
      }
      provide_values.push(obj);
    }
  }

})

// After Returning, Show SUccess Message
const success_cond = ref(false);
const success_message = ref('');

// Wrong Entering Amount Error 
const amount_error = reactive({
  id: '',
  error: false
})


const returnMaterial = async () => {

  let cond = true;

  for (let i in warehouse_store.return_checked_values) {

    if(warehouse_store.return_checked_values[i].amount > provide_values[i].amount
      ||
      warehouse_store.return_checked_values[i].amount < 0
    ){
      amount_error.id = i;
      amount_error.error = true
      cond = false;
    }

  }

  if (cond) {
    if (user_store.user && user_store.user.departmentId === 3) {
      await warehouse_store.returnMaterial(user_store.user.id)
        .then((respond) => {
          success_cond.value = true;
          success_message.value = 'Successfuly Update'
          setTimeout(() => {
            warehouse_store.return_checked_values = warehouse_store.return_checked_values.filter((item) => item.id === -1)
            success_cond.value = false;
            closeUpdateProvidedMaterialComp();
          }, 1000)
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
  else{
    console.log('cond false -> ', cond);
  }

}

</script>

<style lang="scss" scoped></style>
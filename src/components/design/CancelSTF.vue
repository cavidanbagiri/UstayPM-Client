<template>
  <!-- Cancel STF -->
  <div v-if="prop.toggle_cancelstf"
    class="fixed top-0 left-0 w-full h-full bg-black bg-opacity-40 flex justify-center items-center text-gray-500"
    style="font-family: 'Poppins';">

    
    <div
      class=" border bg-white rounded-lg bg-opacity-100 flex flex-col justify-between  w-1/3 z-50 items-center px-3 pb-4">

      <div class="flex flex-col w-full">
        <!-- Close Current Cancel STF Comp -->
        <div class="flex justify-end">
          <span @click="closeCanceledSTF" class=" px-5 pt-1 pb-2">
            <i class="fa-solid fa-xmark text-3xl text-gray-500 hover:text-gray-400 duration-300"></i>
          </span>
        </div>

        <span v-if="inform_message" class="bg-green-100 text-end text-lg text-green-500 py-2 px-2">
          STF Successfully Canceled 
        </span>


        <!-- Cancel STF Title -->
        <div class="flex justify-center items-center mb-2">
          <span class="text-4xl py-2 text-center text-gray-700 font-bold">
            Canceled STF
          </span>
        </div>

        <!-- STF Inform Title -->
        <div class="ml-2 pl-2 text-2xl mt-4 text-gray-500">
          <span>STF Information</span>
        </div>

        <!-- STF Information Section -->
        <div class="px-2 mx-2 text-[13px] flex justify-between items-center border-b mt-4 pb-1 text-lg">
          <span>STF No: </span>
          <span class="font-bold bg-orange-100 text-orange-500 py-1 px-2 rounded-lg">{{ prop.stf.stf_num }}</span>
        </div>

        <div class="px-2 mx-2 text-[13px] flex justify-between items-center border-b mt-4 text-lg">
          <span>Created At: </span>
          <DateFormat :time="prop.stf?.createdAt" />
        </div>

        <!-- STF Information Section -->
        <div class="px-2 mx-2 text-[13px] flex justify-between items-center border-b mt-4  text-lg">
          <span>Orderer: </span>
          <span class="text-lg">{{ prop.stf.username }}</span>
        </div>

        <!-- STF Information Section -->
        <div class="px-2 mx-2 text-[13px] flex justify-between items-center border-b mt-4 text-lg">
          <span>Material Name: </span>
          <span class="pl-4 text-lg">{{ prop.stf.material_name }}</span>
        </div>

        <!-- STF Information Section -->
        <div class="px-2 mx-2 text-[13px] flex justify-between items-center border-b mt-4  text-lg">
          <span>Amount: </span>
          <span class="text-lg">{{ prop.stf.amount }} {{ prop.stf.unit }} </span>
        </div>

        <!-- Cancel STF Comment -->
        <div class="flex flex-col mt-10 mx-2">
          <span class="text-xl px-2 text-gray-500">Comment</span>
          <textarea
            class="h-48 py-3 px-2 border w-full mb-5 text-lg outline-none text-gray-400 hover:shadow-lg duration-300"
            type="area" name="" id="" placeholder="Comment Cant Be Empty" v-model="comment"></textarea>
        </div>
      </div>

      <div class="flex  w-full">
        <!-- Post Cancel STF -->
        <button @click="postCancelSTF"
          class="w-full text-white btn bg-red-500 hover:bg-red-300 duration-300">Confirm</button>
      </div>

    </div>


  </div>
</template>

<script setup>

import { ref } from 'vue';

import IndexStore from '../../store/store.index';
import DateFormat from '../../layouts/DateFormat.vue';

const index_store = IndexStore();

const prop = defineProps(['toggle_cancelstf', 'user_id', 'stf' ]); 
const emit = defineEmits(['closeCanceledSTF']);

// After Canceled STF, THis Message will show
const inform_message = ref(false)

const comment = ref('');

const closeCanceledSTF = () => {
  emit("closeCanceledSTF");
}

const postCancelSTF = async () => {
  await index_store.cancelSTF({ user_id: prop.user_id, stf_id: prop.stf.stf_id, comment: comment.value })
    .then((respond) => {
      inform_message.value = true;
      setTimeout(()=>{
        inform_message.value = false;
        closeCanceledSTF();
      },2000)
    })
}

</script>

<style lang="scss" scoped></style>
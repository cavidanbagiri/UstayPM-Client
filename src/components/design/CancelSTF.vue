<template>
  <!-- Cancel STF -->
  <div v-if="prop.toggle_cancelstf"
    class="fixed top-0 left-0 w-full h-full bg-black bg-opacity-40 flex justify-center items-center text-gray-500"
    style="font-family: 'Figtree', sans-serif;">

    
    <div
      class=" border bg-white rounded-lg bg-opacity-100 flex flex-col justify-between  w-1/3 z-50 items-center px-3 pb-4">

      <div class="flex flex-col w-full">
        <!-- Close Current Cancel STF Comp -->
        <div class="flex justify-end">
          <span @click="closeCanceledSTF" class=" px-5 pt-1 pb-2">
            <i class="fa-solid fa-xmark text-3xl text-gray-500 hover:text-gray-400 duration-300"></i>
          </span>
        </div>

        <span v-if="inform_message" class="bg-green-100 text-end  text-green-500 py-2 px-2">
          STF Successfully Canceled 
        </span>


        <!-- Cancel STF Title -->
        <div class="flex justify-center items-center mb-2">
          <span class="text-4xl  text-center text-gray-700 font-bold">
            Canceled STF
          </span>
        </div>

        <!-- Cancel STF Comment -->
        <div class="flex flex-col mt-8 mx-2">
          <span v-if="empty_comment_error" class="bg-red-400 text-white text-end py-2  px-2 rounded-md">
            Comment Side Cant be Empty, Please Fill It
          </span>
          <span class="text-2xl px-2 py-2 text-gray-500">Comment</span>
          <textarea
            class="h-48 py-3 px-2 border w-full mb-5 text-[16px] outline-none text-gray-400 hover:shadow-lg duration-300"
            type="area" name="" id="" placeholder="Comment Cant Be Empty" v-model="comment"></textarea>
        </div>

        <!-- STF Inform Title -->
        <div class="ml-2 pl-2 text-2xl mt-4 text-gray-500">
          <span>STF Information</span>
        </div>

        <!-- STF Information Section -->
        <div class="px-2 mx-2 text-[16px] flex justify-between items-center border-b mt-4 pb-1 ">
          <span>STF No: </span>
          <span class=" bg-orange-100 text-orange-500 py-1 px-2 rounded-lg">{{ prop.stf.stf_num }}</span>
        </div>

        <div class="px-2 mx-2 text-[16px] flex justify-between items-center border-b mt-4">
          <span>Created At: </span>
          <DateFormat :time="prop.stf?.createdAt" />
        </div>

        <!-- STF Information Section -->
        <div class="px-2 mx-2 text-[16px] flex justify-between items-center border-b mt-4  ">
          <span>Orderer: </span>
          <span class="">{{ prop.stf.username }}</span>
        </div>

        <!-- STF Information Section -->
        <div class="px-2 mx-2 text-[16px] flex justify-between items-center border-b mt-4 ">
          <span>Material Type: </span>
          <span class="pl-4 ">{{ prop.stf.material_type }}</span>
        </div>

        <!-- STF Information Section -->
        <div class="px-2 mx-2 text-[16px] flex justify-between items-center border-b mt-4  ">
          <span>Amount: </span>
          <span class="">{{ prop.stf.amount }} {{ prop.stf.unit }} </span>
        </div>

        <!-- STF Information Section -->
        <div class="px-2 mx-2 text-[16px] flex justify-between items-center border-b my-4 ">
          <span>Material Name: </span>
          <span class="pl-10 ">{{ prop.stf.material_name }}</span>
        </div>

      </div>

      <div class="flex  w-full">
        <!-- Post Cancel STF -->
        <button @click="postCancelSTF"
          class="w-full text-white btn bg-red-500 hover:bg-red-300 duration-300 shadow-xl">Confirm</button>
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
const inform_message = ref(false);
// Empty Commecnt Error
const empty_comment_error = ref(false);

const comment = ref('');

const closeCanceledSTF = () => {
  emit("closeCanceledSTF");
}

const postCancelSTF = async () => {

  if(comment.value.toString().trim() === ''){
    empty_comment_error.value = true;
  }
  else{
    await index_store.cancelSTF({ user_id: prop.user_id, stf_id: prop.stf.stf_id, comment: comment.value })
    .then((respond) => {
      inform_message.value = true;
      setTimeout(()=>{
        inform_message.value = false;
        empty_comment_error.value = false;
        closeCanceledSTF();
      },2000)
    })
  }
}

</script>

<style lang="scss" scoped></style>
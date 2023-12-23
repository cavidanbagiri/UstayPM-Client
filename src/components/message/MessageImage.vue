<template>
  <div class="z-50 fixed bottom-10 right-10 w-[45px] h-[45px] ">

    <div class="relative">
      <img @click="openChatArea" @mouseover="showItem" @mouseleave = "closeItem"
    class="cursor-pointer" src="../../assets/messagenewicon.png" alt="">
      <span v-if="show_online_chat" class="absolute -top-6 right-8 duration-300 border p-2 bg-purple-500 text-white w-32 flex justify-center rounded-lg font-bold  ">
        Online Chat
      </span>
  </div>
    <MessageMain/>


  </div>
</template>

<script setup>

import { ref } from 'vue';
import MessageStore from '../../store/store.message';
import MessageMain from './MessageMain.vue';

const message_store = MessageStore();

const show_online_chat = ref(false);

const openChatArea = () => {
  message_store.toggle_message = true;
}

const showItem = () => {

  show_online_chat.value = true;

} 

const closeItem = () => {

show_online_chat.value = false;

} 

</script>

<style lang="scss" scoped>

</style>
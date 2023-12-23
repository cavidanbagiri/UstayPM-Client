<template>
  <div class="z-50 fixed bottom-10 right-10 ">

    <div class="relative">
      <img @click="openChatArea" @mouseover="showItem" @mouseleave="closeItem" class="cursor-pointer w-[55px] h-[55px]"
        src="../../assets/messagenewicon.png" alt="">
      <span v-if="show_online_chat"
        class="absolute -top-6 right-12 p-2 bg-purple-500 text-white flex justify-center items-center rounded-lg font-bold shadow-xl show_online_chat_anim">
        Online Chat
      </span>
    </div>
    <MessageMain />


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

  setTimeout(() => {
    show_online_chat.value = true;
  }, 200)

}

const closeItem = () => {

  show_online_chat.value = false;

}

</script>

<style scoped>
.show_online_chat_anim {
  width: 130px;
  white-space: nowrap;
  overflow: hidden;
  animation: chat_anim 0.2s
}

@keyframes chat_anim {
  0% {
    width: 0px;
  }
}
</style>
<template>
  <div class="z-50 fixed bottom-10 right-10 w-20 h-20">

    <img @click="openChatArea" class="cursor-pointer" src="../../assets/message.png" alt="">
    <MessageMain/>


  </div>
</template>

<script setup>

import MessageStore from '../../store/store.message';
import MessageMain from './MessageMain.vue';

const message_store = MessageStore();

const openChatArea = () => {
  message_store.toggle_message = true;
  console.log('Open Chat Area');
}

</script>

<style lang="scss" scoped>

</style>
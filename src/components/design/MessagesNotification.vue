<template>
  <div style="font-family: 'Inter';"
      class="flex flex-col text-xl absolute top-0 left-12 w-[500px] max-h-[650px] overflow-auto bg-white py-2 px-3 border rounded-lg shadow-2xl">
      <div class="flex justify-between">
          <div class="flex">
              <span>
                  <img src="../../assets/bellicon.webp" class="w-10 h-10" alt="">
              </span>
              <span class="text-center text-3xl pt-1 pb-2 font-bold">
                  Messages Notifications
              </span>
          </div>
          <div>
              <span @click="closeMessagesNotification" class="hover:cursor-pointer hover:text-gray-500">
                  <i class="fa-solid fa-xmark"></i>
              </span>
          </div>
      </div>
      <ul class="text-sm" style="font-family: 'Roboto';">
          <li v-for="i in message_store?.unread_messages" @click="openChatArea(i)" class="border p-1 flex my-2 rounded-lg hover:cursor-pointer hover:bg-gray-100 items-center">
              <!-- User Image -->
              <div class="flex  w-full">
                  <img class="w-14 h-14 rounded-full"
                      src="https://static.wixstatic.com/media/033319_e0f92699ac1741baa4b84b6755734bb6~mv2.png/v1/crop/x_89,y_0,w_2601,h_1732/fill/w_480,h_486,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/IMG_0297_edited.png"
                      alt="">
                  <div class="flex flex-col pl-2 justify-center w-full">
                      <span class="text-lg font-bold">
                          {{i.username}}
                      </span>
                      <span class="font-bolg text-sm text-gray-500 pl-2" style="font-family: 'Jost';">
                          Send You New Message
                      </span>
                      <!-- <div class=" flex items-center my-1 justify-end">
                          <span class="text-gray-400 text-xs font-bold" style="font-family: 'Poppins';">
                              <DateFormatMonth :time="i.createdAt" />
                          </span>
                      </div> -->
                  </div>
              </div>
          </li>
          
      </ul>
  </div>
</template>

<script setup>


import { inject } from 'vue';

import DateFormatMonth from '../../layouts/DateFormatMonth.vue';

import UserStore from '../../store/store.user';
import MessageStore from '../../store/store.message';
const user_store = UserStore();
const message_store = MessageStore();

// Inject Socket Section For Selecting User
const socket = inject('socket');

// Emit Section
const emit = defineEmits(['closeMessagesNotification']);
const closeMessagesNotification = () => {
  emit('closeMessagesNotification');
}

const openChatArea = async (user) => {
  message_store.toggle_message = true;
  if (user_store.user) {
        message_store.selected_user = user;
        message_store.selected_user.count = 0;
        await message_store.fetchMessage(user_store.user?.id, message_store.selected_user.id);
        if (message_store.selected_user_fetch_messages.length) {
            if(!message_store.selected_user?.roomid){
                message_store.selected_user.roomid = message_store.selected_user_fetch_messages[0]?.roomId;
            }
            socket.emit('join_room', user_store.user.id, user.id, message_store.selected_user_fetch_messages[0]?.roomId);
            await message_store.setTrueReadingMessages({current_id: user_store.user?.id, room_id: message_store.selected_user_fetch_messages[0]?.roomId});
            message_store.selected_user.count = 0;
        }
        // Set Unread Message 0 in Selected User Side
        for(let i of message_store.unread_messages_and_users){
            if(message_store.selected_user.id === i.id){
                i.count = 0;
            }
        }
        // Set Unread Message read in message notification side
        message_store.unread_messages = message_store.unread_messages.filter((item)=>{
            return message_store.selected_user?.id !== item.id 
        })
        emit('closeMessagesNotification');
    }
}


</script>

<style lang="scss" scoped></style>
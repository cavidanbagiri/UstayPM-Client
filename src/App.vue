
<template>
  <div class="p-0 m-0 relative bg-white">

    <div class="sticky top-0 left-0 float-left p-0 z-10 m-0">

      <NavbarLayout :socket="socket" />
    </div>

    <div class="p-0">

      <MenuCanvas v-if="index_store.canvas_toggle"/>

      <router-view></router-view>

    </div>

    <MessageImage/>

    <STFInformBar v-if="index_store.row_inform_condition"/>

  </div>
</template>

<script setup>

import { watchEffect, ref, onMounted, provide } from 'vue';
import { io } from 'socket.io-client';
// import { provide } from vue;

import NavbarLayout from './layouts/NavbarLayout.vue';
import MessageImage from './components/message/MessageImage.vue';
import MenuCanvas from './layouts/MenuCanvas.vue';
import STFInformBar from './layouts/STFInformBar.vue';
import { ArcElement,Chart as ChartJS } from "chart.js";

import IndexStore from './store/store.index';
import UserStore from './store/store.user_store';
import MessageStore from './store/store.message';

const user_store = UserStore();
const index_store = IndexStore();
const message_store = MessageStore();

ChartJS.register(ArcElement);


// Check If User Login, Create Socket Connection
const URL = import.meta.env.VITE_API
const socket = io(URL);
provide('socket', socket);


onMounted(()=>{
  if (user_store.user) {
    index_store.fetchStatisticResult(user_store.user.id);
  }
})


watchEffect(()=>{
  if(user_store.user){
    
    // Send User Information With This emit and handle in server
    socket.emit('setup', user_store.user);

    // Create Connection Woth Backend with Socket IO
    socket.on("connected",()=>{
    })

    /*  
      ----------------------------------------------------------- New STF Notification Socket
    */
    // Send Notification emit and listen
    socket.emit("newstfnotification", user_store.user);
    // create stf emit
    socket.on("createstf",()=>{
      socket.emit("newstfnotification", user_store.user);
    })
    // Check New Notification
    socket.on("getstfnotification", (data)=>{
      index_store.new_stf_notification = data;
    })
    // Check Accept SM Notification
    socket.on("accept_sms", (data)=>{
      if(data?.orderer_id === user_store.user?.id || user_store.user.departmentId === 2 ){
        console.log('coming data to you : ', data);
        index_store.accept_sms_notification.push(data);
      }
    })

    /*
      ---------------------------------------------------------- Unread Messages Notification
    */
    message_store.fetchUnreadMessages(user_store.user?.id);


    /*
      ---------------------------------------------------------- Unread Real Comin Messages
    */
    socket.on('broadcastmessage', data => {
        if(data[data.length - 1].senderId == user_store.user?.id){
          message_store.fetchUnreadMessages(user_store.user?.id);
        }
    });

    socket.on('broadcastunreadcountingmessages', data => {
        if(data[data.length - 1].senderId == user_store.user?.id){
            // Iterate All User and find it
            for(let user of message_store.unread_messages_and_users){
                if(user.id == data[data.length-1].receiverId ){
                    // Replace finding user with sending message user
                    user.roomid = data[0].roomId;
                    if(message_store.selected_user?.id == data[data.length-1].receiverId ){
                        user.count = 0;
                        message_store.setTrueReadingMessages({current_id: user_store.user?.id, room_id: message_store.selected_user_fetch_messages[0]?.roomId});
                    }
                    else{
                        user.count = data[0].count;
                    }
                }
            }
            message_store.unread_messages_and_users
        }
    });


  }
});


</script>

<style lang="scss" scped>
 @import './assets/style.scss';
</style>

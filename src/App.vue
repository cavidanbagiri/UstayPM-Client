
<template>
  <!-- If User Login -->
  <div v-if="user_login" class="p-0 m-0 relative bg-white">
    <div class="sticky top-0 left-0 float-left p-0 z-20 m-0">
      <NavbarLayout :socket="socket" />
    </div>
    <div class="p-0">
      <MenuCanvas v-if="index_store.canvas_toggle" />
      <router-view></router-view>
    </div>
    <MessageImage />
    <STFInformBar v-if="index_store.row_inform_condition" />
  </div>

  <!-- If Not, Go To Login Page -->
  <div v-else>
    <Login />
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
import Login from './components/auth/Login.vue';
import { ArcElement, Chart as ChartJS } from "chart.js";

import IndexStore from './store/store.index';
import UserStore from './store/store.user_store';
import MessageStore from './store/store.message';

const user_store = UserStore();
const index_store = IndexStore();
const message_store = MessageStore();

ChartJS.register(ArcElement);

// User Login or Not Value
const user_login = ref(false);

// Check If User Login, Create Socket Connection
const URL = import.meta.env.VITE_API
// Create Socket and create connection
const socket = io(URL);
// Send Socket To User Side
provide('socket', socket);


onMounted(() => {
  if (user_store.user) {
    const data = {
      user_id: user_store.user.id,
      project_id: user_store.user.projectId
    }
    index_store.fetchStatisticResult(data);
  }
})


watchEffect(() => {
  // If User Not Login, Redirect To User Login Page
  if (JSON.parse(sessionStorage?.getItem('user'))) {
    user_store.user = JSON.parse(sessionStorage?.getItem('user'))
    user_login.value = true;
  }
  else {
    user_login.value = false;
  }
  if (user_store.user) {

    /*
      ----------------------------------------------------------- Creating Socket Connection
    */
    // Send User Information With This emit and handle in server
    socket.emit('setup', user_store.user);

    // Create Connection Woth Backend with Socket IO
    socket.on("connected", () => {
    })

    /*  
      ----------------------------------------------------------- New STF Notification Socket
    */
    // Send Notification emit and listen
    socket.emit("newstfnotification", user_store.user);
    // create stf emit
    socket.on("createstf", () => {
      socket.emit("newstfnotification", user_store.user);
    })
    // Check New Notification
    socket.on("getstfnotification", (data) => {
      index_store.new_stf_notification = data;
    })
    // Check Accept SM Notification
    socket.on("accept_sms", (data) => {
      if (data?.orderer_id === user_store.user?.id || user_store.user.departmentId === 2) {
        index_store.accept_sms_notification.push(data);
      }
    })

    /*
      ---------------------------------------------------------- Unread Messages Notification, WHen User Login, for first time all unread messages
    */
    message_store.fetchUnreadMessages(user_store.user?.id);


    /*
      ---------------------------------------------------------- Unread Real Coming Messages
    */
    // If User Not Selected, this broadcast will show unread message in navbar section during realtime 
    socket.on('broadcastmessage', data => {
      if (data[data.length - 1].senderId == user_store.user?.id && data[data.length - 1].receiverId != message_store.selected_user?.id) {
        message_store.fetchUnreadMessages(user_store.user?.id);
      }
    });

    socket.on('broadcastunreadcountingmessages', data => {
      console.log(' broadcastunreadcountingmessages data is : ', data);

      // 1 STEP - If Coming message is for current user
      if (data[data.length - 1].senderId == user_store.user?.id) {


        // 2 STEP - Iterate All User and find which user send message to current user
        for (let user of message_store.unread_messages_and_users) {

          // 3 STEP - If sender id is available inside of unread messages users list
          if (user.id == data[data.length - 1].receiverId) {

            // 4 STEP Replace and add roomid for selecting users
            user.roomid = data[0].roomId;
            if (message_store.selected_user?.id == data[data.length - 1].receiverId) {

              // 5 STEP - If sending message user is selected user, set counting 0
              user.count = 0;
              message_store.setTrueReadingMessages({ current_id: user_store.user?.id, room_id: message_store.selected_user_fetch_messages[0]?.roomId });
            }
            // 6 STEP - If Not, Set How many counting messages are available, show inside of user list
            else {
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

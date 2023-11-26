
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

import { watchEffect, ref, onMounted } from 'vue';
import { io } from 'socket.io-client';


import NavbarLayout from './layouts/NavbarLayout.vue';
import MessageImage from './components/message/MessageImage.vue';
import MenuCanvas from './layouts/MenuCanvas.vue';
import STFInformBar from './layouts/STFInformBar.vue';
import { ArcElement,Chart as ChartJS } from "chart.js";

import IndexStore from './store/store.index';
import UserStore from './store/store.user_store';

ChartJS.register(ArcElement);
const user_store = UserStore();
const index_store = IndexStore();


// Check If User Login, Create Socket Connection
const URL = import.meta.env.VITE_API
const socket = io(URL);
watchEffect(()=>{
  if(user_store.user){
    // Create Connection Woth Backend with Socket IO
    socket.on("connect",()=>{
      console.log("socket id : ",socket.id);
    })
    // Send User Information With This emit and handle in server
    socket.emit('setup', user_store.user);
    
    // Send Notification emit and listen
    socket.emit("newstfnotification");
    // Cavidan EMit
    socket.on("createstf",()=>{
      socket.emit("newstfnotification");
    })
    // Check New Notification
    socket.on("getstfnotification", (data)=>{
      index_store.new_stf_notification = data;
    })

  }
});


</script>

<style lang="scss" scped>
 @import './assets/style.scss';
</style>

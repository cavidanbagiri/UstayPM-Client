
<template>
  <div class="p-0 m-0 relative bg-white">
    <div class="sticky top-0 left-0 float-left p-0 z-10 m-0">

      <NavbarLayout />
    </div>

    <div class="p-0">

      <MenuCanvas v-if="index_store.canvas_toggle"/>

      <router-view></router-view>

    </div>

    <MessageMain/>

    <STFInformBar v-if="index_store.row_inform_condition"/>

  </div>
</template>

<script setup>

import { watchEffect, ref } from 'vue';
import { io } from 'socket.io-client';


import NavbarLayout from './layouts/NavbarLayout.vue';
import MessageMain from './components/message/MessageMain.vue';
import MenuCanvas from './layouts/MenuCanvas.vue';
import STFInformBar from './layouts/STFInformBar.vue';

import UserStore from './store/store.user_store';

const user_store = UserStore();

// Check If User Login, Create Socket Connection
watchEffect(()=>{
  if(user_store.user){
    socket.on("connection");
    // Send User Information With This emit and handle in server
    socket.emit('setup', user_store.user);
  }
  else{
    console.log('User Not Login');
  }
});

const URL = import.meta.env.VITE_API

const socket = io(URL);

const some = {name:"cavidan"};


import IndexStore from './store/store.index';
import { ArcElement,Chart as ChartJS } from "chart.js";

const index_store = IndexStore();

ChartJS.register(ArcElement);


const sendsocket = () => {
  socket.emit('first', {message:"this is my first socket"})
}

const coming_data = ref('temp');

watchEffect(()=>{
  socket.on("returnfirst", (data)=>{
    coming_data.value = data
  })
})

</script>

<style lang="scss" scped>
 @import './assets/style.scss';
</style>

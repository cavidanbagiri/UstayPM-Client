<template>
  <div class="flex flex-col h-screen bg-gradient-to-r from-slate-700 to-slate-900 w-[4.5rem] items-center justify-start p-0 m-0 rounded-r-md 
  border-r-2">
      <!-- Open Toggle Canvas -->
      <div class="relative" @click="toggleCanvas">
          <span
              class="rounded-md cursor-pointer  mt-5 w-10 h-10 flex flex-row justify-center items-center hover:bg-green-500 duration-300">
              <!-- <i class="fa-solid fa-bars fa-md" style="color:white;"></i> -->
              <img src="../assets/icons/menu.png" alt="">
          </span>
          <span v-if="menu_tooltip" 
              class="duration-150 absolute top-5 left-10 ml-1 bg-slate-800 py-2 px-4 text-white text-md rounded-md flex">
              Catalog
          </span>
      </div>

      <!-- Home Menu -->
      <div class="relative">
          <router-link to="/">
              <span @mouseover="home_tooltip = true" @mouseleave="home_tooltip = false"
                  class="rounded-md cursor-pointer  mt-5 w-10 h-10 flex flex-row justify-center items-center hover:bg-green-500 duration-300">
                  <img src="../assets/icons/home.png" alt="">
              </span>
              <span v-if="home_tooltip"
                  class="duration-150 absolute top-5 left-10 ml-1 bg-slate-800 py-2 px-4 text-white text-md rounded-md flex">
                  Home
              </span>
          </router-link>
      </div>

      <!-- Notification -->
      <div class="relative mt-3">
            <div v-if="index_store.new_stf_notification?.length || index_store.accept_sms_notification?.length" class="badge bg-red-500 border-none text-white badge-md absolute top-0 right-0 w-5 h-5 font-bold p-[11px]">{{ index_store.new_stf_notification?.length + index_store.accept_sms_notification?.length }}</div>
            <span @click="showNotification" @mouseover="notification_tooltip = true" @mouseleave="notification_tooltip = false"
                class="rounded-md cursor-pointer mt-[11px] w-10 h-10 flex flex-row justify-center items-center hover:bg-green-500 duration-300">
                <!-- <i class="fa-solid fa-bell fa-md " style="color:white"></i> -->
                <img src="../assets/icons/bell.png" alt="">
            </span>
            <span v-if="notification_tooltip"
                class="duration-150 absolute top-5 left-10 ml-1 bg-slate-800 py-2 px-4 text-white text-md rounded-md flex">
                Notification
            </span>
            <Notification v-if="notification_toggle" @closeNotification="closeNotification" />
      </div>

      <!-- Messages Notification -->
      <div class="relative mt-3">
            <div v-if="message_store.unread_messages?.length" class="badge bg-red-500 border-none text-white badge-md absolute top-0 right-0 w-5 h-5 font-bold p-[11px]">
                {{ message_store.unread_messages?.length }}
            </div>
              <span @click="showMessagesNotification" @mouseover="messages_tooltip = true" @mouseleave="messages_tooltip = false"
                  class="rounded-md cursor-pointer mt-[11px] w-10 h-10 flex flex-row justify-center items-center hover:bg-green-500 duration-300">
                  <!-- <i class="fa-solid fa-message fa-md" style="color:white"></i> -->
                  <img src="../assets/icons/email.png" alt="">
                </span>
              <span v-if="messages_tooltip"
                  class="duration-150 absolute top-5 left-10 ml-1 bg-slate-800 py-2 px-4 text-white text-md rounded-md flex">
                  Messages
              </span>
              <MessagesNotificaion v-if="messages_notification_toggle" @closeMessagesNotification="closeMessagesNotification" />
      </div>

      <!-- Stars -->
      <div class="relative">
          <router-link to="/">
              <span @mouseover="star_tooltip = true" @mouseleave="star_tooltip = false"
                  class="rounded-md cursor-pointer  mt-5 w-10 h-10 flex flex-row justify-center items-center hover:bg-green-500 duration-300">
                  <!-- <i class="fa-solid fa-star fa-md" style="color:white"></i> -->
                  <img src="../assets/icons/star.png" alt="">
                </span>
              <span v-if="star_tooltip"
                  class="duration-150 absolute top-5 left-10 ml-1 bg-slate-800 py-2 px-4 text-white text-md rounded-md flex">
                  Stars
              </span>
          </router-link>
      </div>

      <!-- STF Menu -->
      <div class="relative">
          <router-link to="/stf" class="no-underline ">
              <span @mouseover="stf_tooltip = true" @mouseleave="stf_tooltip = false"
                  class=" rounded-md cursor-pointer  mt-5  w-10 h-10 flex flex-row justify-center items-center hover:bg-green-500 duration-300">
                  <!-- <i class="fa-solid fa-plus fa-md" style="color:white"></i> -->
                  <img src="../assets/icons/tab.png" alt="">
            </span>
              <span v-if="stf_tooltip"
                  class="duration-150 absolute top-5 left-10 ml-1 bg-slate-800 py-2 px-4 text-white text-md rounded-md flex">
                  Orders
              </span>
          </router-link>
      </div>

      <!-- Warehouse Menu -->
      <div class="relative">
          <router-link to="/procurement" class="no-underline ">
              <span @mouseover="procurement_tooltip = true" @mouseleave="procurement_tooltip = false"
                  class=" rounded-md cursor-pointer  mt-5  w-10 h-10 flex flex-row justify-center items-center hover:bg-green-500 duration-300">
                  <img src="../assets/icons/cart.png" alt="">
              </span>
              <span v-if="procurement_tooltip"
                  class="duration-150 absolute top-5 left-10 ml-1 bg-slate-800 py-2 px-4 text-white text-md rounded-md">
                  Procurement
              </span>
          </router-link>
      </div>

      <!-- Procurement Menu -->
      <div class="relative">
          <router-link to="/warehouse" class="no-underline ">
              <span @mouseover="warehouse_tooltip = true" @mouseleave="warehouse_tooltip = false"
                  class="rounded-md cursor-pointer  mt-5  w-10 h-10 flex flex-row justify-center items-center hover:bg-green-500 duration-300">
                  <!-- <i class="fa-solid fa-warehouse fa-sm" style="color:white;"></i> -->
                  <img src="../assets/icons/warehouse.png" alt="">
              </span>
              <span v-if="warehouse_tooltip"
                  class="duration-150 absolute top-5 left-10 ml-1 bg-slate-800 py-2 px-4 text-white text-md rounded-md">
                  Warehouse
              </span>
          </router-link>
      </div>

      <!-- WorkSpace Menu -->
      <div class="relative">
          <router-link to="/">
              <span @mouseover="workspace_tooltip = true" @mouseleave="workspace_tooltip = false"
                  class="rounded-md cursor-pointer  mt-5 w-10 h-10 flex flex-row justify-center items-center hover:bg-green-500 duration-300">
                  <img src="../assets/icons/clipboard.png" alt="">
                </span>
              <span v-if="workspace_tooltip"
                  class="duration-150 absolute top-5 left-10 ml-1 bg-slate-800 py-2 px-4 text-white text-md rounded-md flex">
                  Workspace
              </span>
          </router-link>
      </div>

      <!-- User Profile -->
      <div class="relative">
          <router-link to="/profile">
              <span @mouseover="profile_tooltip = true" @mouseleave="profile_tooltip = false"
                  class="rounded-md cursor-pointer  mt-5  w-10 h-10 flex flex-row justify-center items-center hover:bg-green-500 duration-300">
                  <!-- <i class="fa-solid fa-user fa-sm" style="color:white;"></i> -->
                  <img src="../assets/icons/user.png" alt="">
              </span>
              <span v-if="profile_tooltip"
                  class="duration-150 absolute top-5 left-10 ml-1 bg-slate-800 py-2 px-4 text-white text-md rounded-md">
                  Profile
              </span>
          </router-link>
      </div>

      <!-- User Login and Logout -->
      <div v-if="!user_store.user" class="relative">
          <router-link to="/user/login">
              <span @mouseover="login_tooltip = true" @mouseleave="login_tooltip = false"
                  class="rounded-md cursor-pointer  mt-5  w-10 h-10 flex flex-row justify-center items-center hover:bg-green-500 duration-300">
                  <!-- <i class="fa-solid fa-right-to-bracket fa-sm" style="color:white;"></i> -->
                  <img src="../assets/icons/logout.png" alt="">
              </span>
              <span v-if="login_tooltip"
                  class="duration-150 absolute top-5 left-10 ml-1 bg-slate-800 py-2 px-4 text-white text-md rounded-md">
                  Login
              </span>
          </router-link>
      </div>
      <div v-else class="relative" @click="logout">
          <router-link to="/user/login">
              <span @mouseover="logout_tooltip = true" @mouseleave="logout_tooltip = false"
                  class="rounded-md cursor-pointer  mt-5  w-10 h-10 flex flex-row justify-center items-center hover:bg-green-500 duration-300">
                  <!-- <i class="fa-solid fa-right-from-bracket fa-sm" style="color:white;"></i> -->
                  <img src="../assets/icons/log-in.png" alt="">
                </span>
              <span v-if="logout_tooltip"
                  class="duration-150 absolute top-5 left-10 ml-1 bg-slate-800 py-2 px-4 text-white text-md rounded-md">
                  Logout
              </span>
          </router-link>
      </div>

      
  </div>
</template>

<script setup>

import { ref, watchEffect, reactive } from 'vue';
import Notification from '../components/design/Notification.vue';
import MessagesNotificaion from '../components/design/MessagesNotification.vue';
import UserStore from '../store/store.user_store';
import IndexStore from '../store/store.index';
import MessageStore from '../store/store.message';

const user_store = UserStore();
const index_store = IndexStore();
const message_store = MessageStore();

const prop = defineProps(['socket']);

// Show Tooltips
const home_tooltip = ref(false)
const warehouse_tooltip = ref(false)
const profile_tooltip = ref(false)
const procurement_tooltip = ref(false)
const stf_tooltip = ref(false)
const star_tooltip = ref(false)
const notification_tooltip = ref(false)
const messages_tooltip = ref(false)
const workspace_tooltip = ref(false)
const menu_tooltip = ref(false)
const login_tooltip = ref(false);
const logout_tooltip = ref(false);


// Get User Inform
// const user = ref();
const notification_toggle = ref(false);
const messages_notification_toggle = ref(false);


watchEffect(() => {
    // user.value = JSON.parse(sessionStorage?.getItem('user'));
    // user_store.user = user.value;
})

// After Clicking, Notification Model Will Open
const showNotification = () => {
    if(user_store.user){
        notification_toggle.value = !notification_toggle.value
    }
}



// After Clicking New STF Notification, Close That Window
const closeNotification = () => notification_toggle.value = false;



// After Clicking, Notification Model Will Open
const showMessagesNotification = () => {
    if(user_store.user){
        messages_notification_toggle.value = !messages_notification_toggle.value
    }
}

// After Clicking Messages, Messages Netification Will open
const closeMessagesNotification = () => messages_notification_toggle.value = false;



// Expand Navbar
const toggleCanvas = () => index_store.TOGGLECANVAS()

// User logout
const logout = () => user_store.LOGOUTUSER();

</script>

<style lang="scss" scoped></style>
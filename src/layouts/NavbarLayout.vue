<template>
  <div class="flex flex-col h-screen bg-gradient-to-r from-slate-800 to-slate-900 w-16 items-center justify-start p-0 m-0 rounded-r-md 
  border-r-2 ">
      <!-- Open Toggle Canvas -->
      <div class="relative" @click="toggleCanvas">
          <span
              class="rounded-md cursor-pointer  mt-5 w-10 h-10 flex flex-row justify-center items-center hover:bg-green-500 duration-300"><i
                  class="fa-solid fa-bars fa-md" style="color:white;"></i>
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
                  class="rounded-md cursor-pointer  mt-5 w-10 h-10 flex flex-row justify-center items-center hover:bg-green-500 duration-300"><i
                      class="fa-solid fa-house fa-md" style="color:white"></i>
              </span>
              <span v-if="home_tooltip"
                  class="duration-150 absolute top-5 left-10 ml-1 bg-slate-800 py-2 px-4 text-white text-md rounded-md flex">
                  Home
              </span>
          </router-link>
      </div>
      <!-- WorkSpace Menu -->
      <div class="relative">
          <router-link to="/">
              <span @mouseover="workspace_tooltip = true" @mouseleave="workspace_tooltip = false"
                  class="rounded-md cursor-pointer  mt-5 w-10 h-10 flex flex-row justify-center items-center hover:bg-green-500 duration-300"><i
                      class="fa-solid fa-briefcase fa-md" style="color:white"></i>
              </span>
              <span v-if="workspace_tooltip"
                  class="duration-150 absolute top-5 left-10 ml-1 bg-slate-800 py-2 px-4 text-white text-md rounded-md flex">
                  Workspace
              </span>
          </router-link>
      </div>

      <div class="relative">
          <router-link to="/">
              <span @mouseover="notification_tooltip = true" @mouseleave="notification_tooltip = false"
                  class="rounded-md cursor-pointer  mt-5 w-10 h-10 flex flex-row justify-center items-center hover:bg-green-500 duration-300"><i
                      class="fa-solid fa-bell fa-md " style="color:white"></i></span>
              <span v-if="notification_tooltip"
                  class="duration-150 absolute top-5 left-10 ml-1 bg-slate-800 py-2 px-4 text-white text-md rounded-md flex">
                  Notification
              </span>
          </router-link>
      </div>
      <div class="relative">
          <router-link to="/">
              <span @mouseover="messages_tooltip = true" @mouseleave="messages_tooltip = false"
                  class="rounded-md cursor-pointer  mt-5 w-10 h-10 flex flex-row justify-center items-center hover:bg-green-500 duration-300"><i
                      class="fa-solid fa-message fa-md" style="color:white"></i></span>
              <span v-if="messages_tooltip"
                  class="duration-150 absolute top-5 left-10 ml-1 bg-slate-800 py-2 px-4 text-white text-md rounded-md flex">
                  Messages
              </span>
          </router-link>
      </div>
      <div class="relative">
          <router-link to="/">
              <span @mouseover="star_tooltip = true" @mouseleave="star_tooltip = false"
                  class="rounded-md cursor-pointer  mt-5 w-10 h-10 flex flex-row justify-center items-center hover:bg-green-500 duration-300"><i
                      class="fa-solid fa-star fa-md" style="color:white"></i></span>
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
                  class="py-2 px-4 rounded-md cursor-pointer  mt-5 w-8  h-8 flex flex-row justify-center items-center hover:bg-green-500 duration-300"><i
                      class="fa-solid fa-plus fa-md" style="color:white"></i>
              </span>
              <span v-if="stf_tooltip"
                  class="duration-150 absolute top-5 left-10 ml-1 bg-slate-800 py-2 px-4 text-white text-md rounded-md flex">
                  STF
              </span>
          </router-link>
      </div>
      <!-- Warehouse Menu -->
      <div class="relative">
          <router-link to="/procurement" class="no-underline ">
              <span @mouseover="procurement_tooltip = true" @mouseleave="procurement_tooltip = false"
                  class="py-2 px-4 rounded-md cursor-pointer  mt-5 w-8  h-8 flex flex-row justify-center items-center hover:bg-green-500 duration-300">
                  <i class="fa-regular fa-handshake fa-sm" style="color:white;"></i>
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
                  class="py-2 px-4 rounded-md cursor-pointer  mt-5 w-8  h-8 flex flex-row justify-center items-center hover:bg-green-500 duration-300">
                  <i class="fa-solid fa-warehouse fa-sm" style="color:white;"></i>
              </span>
              <span v-if="warehouse_tooltip"
                  class="duration-150 absolute top-5 left-10 ml-1 bg-slate-800 py-2 px-4 text-white text-md rounded-md">
                  Warehouse
              </span>
          </router-link>
      </div>

      <div class="relative">
          <router-link to="/">
              <span @mouseover="profile_tooltip = true" @mouseleave="profile_tooltip = false"
                  class="py-2 px-4 rounded-md cursor-pointer  mt-5 w-8  h-8 flex flex-row justify-center items-center hover:bg-green-500 duration-300">
                  <i class="fa-solid fa-user fa-sm" style="color:white;"></i>
              </span>
              <span v-if="profile_tooltip"
                  class="duration-150 absolute top-5 left-10 ml-1 bg-slate-800 py-2 px-4 text-white text-md rounded-md">
                  Profile
              </span>
          </router-link>
      </div>

      

      <div v-if="!user_store.user" class="relative">
          <router-link to="/user/login">
              <span @mouseover="login_tooltip = true" @mouseleave="login_tooltip = false"
                  class="py-2 px-4 rounded-md cursor-pointer  mt-5 w-8  h-8 flex flex-row justify-center items-center hover:bg-green-500 duration-300">
                  <i class="fa-solid fa-right-to-bracket fa-sm" style="color:white;"></i>
              </span>
              <span v-if="login_tooltip"
                  class="duration-150 absolute top-5 left-10 ml-1 bg-slate-800 py-2 px-4 text-white text-md rounded-md">
                  Login
              </span>
          </router-link>
      </div>

      <div v-else class="relative">
          <router-link to="/user/login">
              <span @mouseover="logout_tooltip = true" @mouseleave="logout_tooltip = false"
                  class="py-2 px-4 rounded-md cursor-pointer  mt-5 w-8  h-8 flex flex-row justify-center items-center hover:bg-green-500 duration-300">
                  <i class="fa-solid fa-right-from-bracket fa-sm" style="color:white;"></i>
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

import { ref, watchEffect } from 'vue';
import UserStore from '../store/store.user_store';
import IndexStore from '../store/store.index';

const user_store = UserStore();
const index_store = IndexStore();

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
const user = ref();
watchEffect(() => {
    user.value = JSON.parse(sessionStorage?.getItem('user'));
    user_store.user = user.value;
})

const toggleCanvas = () => index_store.TOGGLECANVAS()

</script>

<style lang="scss" scoped></style>
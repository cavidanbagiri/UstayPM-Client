<template>
    <div :class="anim_toggle ? 'mtf-anim-open' : 'mtf-anim-close' "  class=" fixed shadow-xl z-10 px-2 py-1 h-screen bg-slate-900 w-80 rounded-xl">

        <!-- <div class="flex justify-end "> -->
            <span class="  bg-green-500 hover:bg-green-400 p-1 w-8 h-8  rounded-full cursor-pointer absolute top-1 -right-3 flex items-center justify-center" @click="closeOffCanvas">
                <i class="fa-solid fa-chevron-left fa-sm text-white hover:text-gray-100"></i>
            </span>
        <!-- </div> -->
        <div class="p-2 rounded-xl cursor-pointer mt-10 hover:bg-green-500 hover:duration-300 flex flex-row items-center hover:text-white border border-green-500">
            <img class="w-10 h-10 rounded-full"
                src="https://img.freepik.com/free-photo/the-beautiful-girl-stands-near-walll-with-leaves_8353-5377.jpg?w=2000"
                alt="">
            <span  style="font-family: 'Poppins', sans-serif; font-size: 1.1rem;" class=" pl-1 text-gray-200 ">{{ user_store?.user?.name }} {{
                user_store?.user?.surname
            }}  </span>
        </div>
        <ul class="p-0 mt-5 text-gray-300" style="font-family: 'Poppins', sans-serif; font-size: 1.1rem;">
            <li class="hover:bg-green-500 hover:text-gray-100 hover:duration-300 p-2 mt-2 rounded-lg cursor-pointer flex items-center">
                <div class="text-md w-10 flex items-center justify-center">
                        <i class="fa-solid fa-briefcase fa-md"></i>
                </div>
                <span>
                    Workspace
                </span>
            </li>
            <li class="hover:bg-green-500 hover:text-gray-100 hover:duration-300  p-2 mt-2 rounded-lg cursor-pointer flex items-center ">
                <div class="text-md w-10 flex items-center justify-center">
                    <i class="fa-solid fa-message fa-md"></i>
                </div>
                <span>
                    Messages
                </span>
            </li>
            <li class="hover:bg-green-500 hover:text-gray-100 hover:duration-300  p-2 mt-2 rounded-lg cursor-pointer flex items-center">
                <div class="text-md w-10 flex items-center justify-center">
                    <i class="fa-solid fa-bell fa-md"></i>
                </div>
                <span>
                    Notification
                </span>
            </li>
            <li class="hover:bg-green-500 hover:text-gray-100 hover:duration-300  p-2 mt-2 rounded-lg cursor-pointer flex items-center ">
                <div class="text-md w-10 flex items-center justify-center">
                    <i class="fa-solid fa-star fa-md"></i>
                </div>
                <span>
                    Starred
                </span>
            </li>
            <li class="hover:bg-green-500 hover:text-gray-100 hover:duration-300  p-2 mt-2 rounded-lg cursor-pointer flex items-center ">
                <div class="text-md w-10 flex items-center justify-center">
                    <i class="fa-solid fa-eye fa-md"></i>
                </div>
                <span>
                    Hide
                </span>
            </li>
            <!-- Procurement -->
            <router-link to="/procurement">
                <li class="hover:bg-green-500 hover:text-gray-100 hover:duration-300  p-2  mt-2 rounded-lg  py-2 px-4 cursor-pointer "
                    @click="show_procurement_dropdown = !show_procurement_dropdown">
                    <div class="">
                        <div class="flex justify-between">
                            <div class="flex justify-center items-center">
                                <div class="w-8"><i class="fa-solid fa-cart-shopping fa-sm"></i></div>
                                <span>Procurement</span>
                            </div>
                            <div>
                                <i v-if="!show_procurement_dropdown" class="fa-solid fa-chevron-left fa-xs"></i>
                                <i v-else class="fa-solid fa-chevron-down fa-xs"></i>
                            </div>
                        </div>
                        <!-- Show Procurement Dropdown -->

                        <!-- Dropdown menu -->
                        <transition name="slide-fade">
                            <div id="dropdownUsers" v-if="show_procurement_dropdown"
                                class="z-10 rounded-lg shadow w-50 dark:bg-gray-700">

                                <ul class="h-auto py-2 dark:text-gray-200 " aria-labelledby="dropdownUsersButton">
                                    <li class="hover:bg-green-400 rounded-lg" style="font-size: 1rem;"
                                        @click="procurement_store.tab_num = 0">
                                        <div class=" flex items-center px-4">
                                            <i class="fa-regular fa-clock fa-lg"></i>
                                            <a href="#" class="flex items-center rounded-lg px-4 py-2 ">
                                                Waiting STF
                                            </a>
                                        </div>
                                    </li>
                                    <li class=" hover:bg-green-400 rounded-lg" style="font-size: 1rem;"
                                        @click="procurement_store.tab_num = 1">
                                        <div class=" flex items-center px-4">
                                            <i class="fa-solid fa-arrow-rotate-left fa-lg"></i>
                                            <a href="#" class="flex items-center rounded-lg px-4 py-2 ">
                                                Processing SM
                                            </a>
                                        </div>
                                    </li>
                                    <li class=" hover:bg-green-400 rounded-lg" style="font-size: 1rem;"
                                        @click="procurement_store.tab_num = 2">
                                        <div class=" flex items-center px-4">
                                            <i class="fa-solid fa-download fa-lg"></i>
                                            <a href="#" class="flex items-center rounded-lg px-4 py-2">
                                                Received SM
                                            </a>
                                        </div>

                                    </li>
                                    <li class=" hover:bg-green-400 rounded-lg" style="font-size: 1rem;"
                                        @click="procurement_store.tab_num = 3">
                                        <div class=" flex items-center px-4">
                                            <i class="fa-solid fa-reply-all fa-lg"></i>
                                            <a href="#" class="flex items-center rounded-lg px-4 py-2">
                                                All SM
                                            </a>
                                        </div>

                                    </li>
                                </ul>

                            </div>
                        </transition>
                    </div>

                </li>
            </router-link>
            <!-- Warehouse -->
            <router-link to="/warehouse">
                <li class="hover:bg-green-500 hover:text-gray-100  hover:duration-300  p-2 mt-2 rounded-lg  py-2 px-4 cursor-pointer"
                    @click="show_warehouse_dropdown = !show_warehouse_dropdown">
                    <div>
                        <div class="flex justify-between">
                            <div class="flex justify-center items-center">
                                <div class="w-8">
                                    <i class="fa-solid fa-warehouse fa-sm"></i>
                                </div>
                                <span class="">
                                    Warehouse
                                </span>
                            </div>
                            <div>
                                <i v-if="!show_warehouse_dropdown" class="fa-solid fa-chevron-left fa-xs"></i>
                                <i v-else class="fa-solid fa-chevron-down fa-xs"></i>
                            </div>
                        </div>

                        <!-- Dropdown menu -->
                        <transition name="slide-fade">
                            <div id="dropdownUsers" v-if="show_warehouse_dropdown"
                                class="z-10 rounded-lg shadow w-50 dark:bg-green-700">
                                <ul class="h-auto py-2 dark:text-gray-200 " aria-labelledby="dropdownUsersButton">
                                    <li class=" hover:bg-green-400 rounded-lg" @click="warehouse_store.tab_num=0">
                                        <div class=" flex items-center px-4">
                                            <i class="fa-solid fa-arrow-rotate-left fa-lg"></i>
                                            <a href="#" class="flex items-center rounded-lg px-4 py-2 "  style="font-size: 1rem;">
                                                Processing SM
                                            </a>
                                        </div>
                                    </li>
                                    <!-- <router-link to="/warehouse/received"> -->
                                        <li class=" hover:bg-green-400 rounded-lg" @click="warehouse_store.tab_num=1">
                                            <div class=" flex items-center px-4">
                                                <i class="fa-solid fa-download fa-lg"></i>
                                                <span class="flex items-center rounded-lg px-4 py-2"  style="font-size: 1rem;">
                                                    Received SM
                                                </span>
                                            </div>
                                        </li>
                                    <!-- </router-link> -->
                                    <li class=" hover:bg-green-400 rounded-lg"  @click="warehouse_store.tab_num=2">
                                        <div class=" flex items-center px-4">
                                            <i class="fa-solid fa-check-double fa-lg"></i>
                                            <a href="#" class="flex items-center rounded-lg px-4 py-2"  style="font-size: 1rem;">
                                                Provided SM
                                            </a>
                                        </div>

                                    </li>
                                </ul>

                            </div>
                        </transition>
                    </div>
                </li>
            </router-link>
            <!-- User profile -->
            <li class="hover:bg-green-500 hover:text-gray-100 hover:duration-300  p-2 mt-2 rounded-lg cursor-pointer flex items-center ">
                <div class="text-md w-10 flex items-center justify-center">
                    <i class="fa-solid fa-user fa-md"></i>
                </div>
                <span>
                    User Profile
                </span>
            </li>
            <!-- Login Logout -->
            <li v-if="!user_store?.user" class="hover:bg-green-500 hover:duration-300  hover:text-gray-100  p-2 mt-2 rounded-lg cursor-pointer flex items-center " @click="openUserLogin" >
                
                <!-- <span @click="openUserLogin" >
                    <i class="fa-solid fa-right-to-bracket fa-md"></i>
                    Log In
                </span> -->

                <div  @click="openUserLogin" class="text-md w-10 flex items-center justify-center">
                    <i class="fa-solid fa-right-to-bracket  fa-md"></i>
                </div>
                <span>
                    Log In
                </span>

            </li>
            <li v-else class="hover:bg-green-500 hover:text-gray-100  hover:duration-300  p-2 mt-2 rounded-lg cursor-pointer flex items-center"  @click="openUserLogout" >
                
                <!-- <span @click="openUserLogout">
                    <i class="fa-solid fa-arrow-right-from-bracket fa-md"></i>
                    Log Out
                </span> -->

                <div @click="openUserLogout" class="text-md w-10 flex items-center justify-center">
                    <i class="fa-solid fa-arrow-right-from-bracket fa-md"></i>
                </div>
                <span>
                    Log Out
                </span>

            </li>
        </ul>

    </div>
</template>

<script setup>

import { ref, watchEffect } from 'vue';

import IndexStore from '../store/store.index.js';
import UserStore from '../store/store.user_store.js';
import ProcurementStore from '../store/store.procurement';
import WarehouseStore from '../store/store.warehouse';

import router from '../router';

const index_store = IndexStore();
const user_store = UserStore();
const procurement_store = ProcurementStore();
const warehouse_store = WarehouseStore();

const anim_toggle = ref(true);

const openUserLogin = () => {
    anim_toggle.value = true;
    index_store.canvas_toggle = true;
}

const openUserLogout = () => {
    sessionStorage.clear();
    user_store.user = null;
    router.push('/');
    location.reload();
}

const closeOffCanvas = () => {
    anim_toggle.value = false;
    setTimeout(()=>{
        index_store.canvas_toggle = false;
    },500)
}

// Show procurement Dropdown
const show_procurement_dropdown = ref(true);
const show_warehouse_dropdown = ref(true);

</script>

<style scoped>
.mtf-anim-open {
    animation: openfilter 0.5s;
}
.mtf-anim-close {
    animation: closefilter 0.5s;
}

@keyframes openfilter {
    from {
        transform: translateX(-100%);
    }

    to {
        transform: translateX(0%);
    }
}
@keyframes closefilter {
    from {
        transform: translateX(0%);
    }

    to {
        transform: translateX(-100%);
    }
}



/* Procurement*/
.slide-fade-enter-active {
    transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
    transition: all 0.3s ease-in;
}

.slide-fade-enter-from {
    transform: translateY(-20%);
}

.slide-fade-leave-to {
    transform: translateY(-30%);
    /* opacity: 0; */
}</style>
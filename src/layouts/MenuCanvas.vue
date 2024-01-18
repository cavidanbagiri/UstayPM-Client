<template>
    <div :class="anim_toggle ? 'mtf-anim-open' : 'mtf-anim-close'"
        class=" fixed shadow-2xl z-20 px-2 py-1 h-screen bg-slate-900 w-80 rounded-xl " style="font-family: 'Figtree', sans-serif;">
        <!-- <div class="flex justify-end "> -->
        <span
            class="  bg-indigo-600 hover:bg-indigo-500 p-1 w-8 h-8  rounded-full cursor-pointer absolute top-1 -right-3 flex items-center justify-center"
            @click="closeOffCanvas">
            <i class="fa-solid fa-chevron-left fa-sm text-white hover:text-white"></i>
        </span>
        <!-- </div> -->
        <div
            class="p-2 rounded-xl cursor-pointer mt-10 hover:bg-indigo-600 hover:duration-300 flex flex-row items-center hover:text-white border border-indigo-600">
            <img class="w-10 h-10 rounded-full"
                :src="user_store.user?.image_url"
                alt="">
            <span style="font-family: 'Poppins', sans-serif; font-size: 1.1rem;" class=" pl-2 text-white ">{{
                user_store?.user?.name }} {{ user_store?.user?.surname }} </span>
        </div>

        <!-- Home Menu -->
        <div class="  mt-3 hover:bg-indigo-600 duration-300 rounded-lg py-1">
            <router-link to="/" class="flex items-center">
                <span @mouseover="home_tooltip = true" @mouseleave="home_tooltip = false"
                    class="rounded-md cursor-pointer   w-10 h-10 flex flex-row justify-center items-center ">
                    <img src="../assets/icons/home.png" alt="">
                </span>
                <span class="text-white text-lg ps-3">
                    Home
                </span>
            </router-link>
        </div>

        <!-- Notification -->
        <div class=" relative mt-3 hover:bg-indigo-600 duration-300 rounded-lg py-1 flex items-center  cursor-pointer ">
            <div v-if="index_store.new_stf_notification?.length"
                class="badge  border-none text-white bg-red-500 badge-md absolute top-1 right-0 w-5 h-5 font-bold p-[11px]">
                {{ index_store.new_stf_notification?.length }}</div>
            <span @click="showNotification" @mouseover="notification_tooltip = true"
                @mouseleave="notification_tooltip = false"
                class="rounded-md cursor-pointer w-10 h-10 flex flex-row justify-center items-center ">
                <!-- <i class="fa-solid fa-bell fa-md " style="color:white"></i> -->
                <img src="../assets/icons/bell.png" alt="">
            </span>
            <span class="text-white text-lg ps-3">
                    Notification
                </span>
            <Notification v-if="notification_toggle" @closeNotification="closeNotification" />
        </div>

        <!-- Messages Notification -->
        <div  class=" relative mt-3 hover:bg-indigo-600 duration-300 rounded-lg py-1">
            <router-link to="/" class="flex items-center">
                <div v-if="message_store.unread_messages?.length"
                    class="badge bg-red-500 border-none text-white badge-md absolute top-1 right-0 w-5 h-5 font-bold p-[11px]">
                    {{ message_store.unread_messages?.length }}
                </div>
                <span @mouseover="messages_tooltip = true" @mouseleave="messages_tooltip = false"
                    class="rounded-md cursor-pointer w-10 h-10 flex flex-row justify-center items-center hover:bg-indigo-600 duration-300 py-1">
                    <!-- <i class="fa-solid fa-message fa-md" style="color:white"></i> -->
                    <img src="../assets/icons/email.png" alt="">
                </span>
                <span class="text-white text-lg ps-3">
                    Messages
                </span>
            </router-link>
        </div>

        <!-- Stars -->
        <div class="  mt-3 hover:bg-indigo-600 duration-300 rounded-lg py-1">
            <router-link to="/" class="flex items-center">
                <span @mouseover="star_tooltip = true" @mouseleave="star_tooltip = false"
                    class="rounded-md cursor-pointer w-10 h-10 flex flex-row justify-center items-center hover:bg-indigo-600 duration-300 py-1">
                    <!-- <i class="fa-solid fa-star fa-md" style="color:white"></i> -->
                    <img src="../assets/icons/star.png" alt="">
                </span>
                <span class="text-white text-lg ps-3">
                    Stars
                </span>
            </router-link>
        </div>

        <!-- STF Menu -->
        <div class="  mt-3 hover:bg-indigo-600 duration-300 rounded-lg py-1">
            <router-link to="/stf" class="flex items-center">
                <span @mouseover="stf_tooltip = true" @mouseleave="stf_tooltip = false"
                    class=" rounded-md cursor-pointer  w-10 h-10 flex flex-row justify-center items-center hover:bg-indigo-600 duration-300 py-1">
                    <!-- <i class="fa-solid fa-plus fa-md" style="color:white"></i> -->
                    <img src="../assets/icons/tab.png" alt="">
                </span>
                <span class="text-white text-lg ps-3">
                    Orders
                </span>
            </router-link>
        </div>

        <!-- Warehouse Menu -->
        <div class="  mt-3 hover:bg-indigo-600 duration-300 rounded-lg py-1">
            <router-link to="/procurement" class="flex items-center">
                <span @mouseover="procurement_tooltip = true" @mouseleave="procurement_tooltip = false"
                    class=" rounded-md cursor-pointer  w-10 h-10 flex flex-row justify-center items-center hover:bg-indigo-600 duration-300 py-1">
                    <img src="../assets/icons/cart.png" alt="">
                </span>
                <span class="text-white text-lg ps-3">
                    Procurement
                </span>
            </router-link>
        </div>

        <!-- Procurement Menu -->
        <div class="  mt-3 hover:bg-indigo-600 duration-300 rounded-lg py-1">
            <router-link to="/warehouse" class="flex items-center">
                <span @mouseover="warehouse_tooltip = true" @mouseleave="warehouse_tooltip = false"
                    class="rounded-md cursor-pointer  w-10 h-10 flex flex-row justify-center items-center hover:bg-indigo-600 duration-300 py-1">
                    <!-- <i class="fa-solid fa-warehouse fa-sm" style="color:white;"></i> -->
                    <img src="../assets/icons/warehouse.png" alt="">
                </span>
                <span class="text-white text-lg ps-3">
                    Warehouse
                </span>
            </router-link>
        </div>

        <!-- WorkSpace Menu -->
        <!-- <div class="  mt-3 hover:bg-indigo-600 duration-300 rounded-lg py-1">
            <router-link to="/" class="flex items-center">
                <span @mouseover="workspace_tooltip = true" @mouseleave="workspace_tooltip = false"
                    class="rounded-md cursor-pointer w-10 h-10 flex flex-row justify-center items-center hover:bg-indigo-600 duration-300 py-1">
                    <img src="../assets/icons/clipboard.png" alt="">
                </span>
                <span class="text-white text-lg ps-3">
                    Tasks
                </span>
            </router-link>
        </div> -->

        <!-- User Profile -->
        <div class="  mt-3 hover:bg-indigo-600 duration-300 rounded-lg py-1">
            <router-link to="/profile" class="flex items-center">
                <span @mouseover="profile_tooltip = true" @mouseleave="profile_tooltip = false"
                    class="rounded-md cursor-pointer  w-10 h-10 flex flex-row justify-center items-center hover:bg-indigo-600 duration-300 py-1">
                    <!-- <i class="fa-solid fa-user fa-sm" style="color:white;"></i> -->
                    <img src="../assets/icons/user.png" alt="">
                </span>
                <span class="text-white text-lg ps-3">
                    User Profile
                </span>
            </router-link>
        </div>

        <!-- User Login and Logout -->
        <div v-if="!user_store.user" class="  mt-3 hover:bg-indigo-600 duration-300 rounded-lg py-1">
            <router-link to="/user/login" class="flex items-center">
                <span @mouseover="login_tooltip = true" @mouseleave="login_tooltip = false"
                    class="rounded-md cursor-pointer  w-10 h-10 flex flex-row justify-center items-center hover:bg-indigo-600 duration-300 py-1">
                    <!-- <i class="fa-solid fa-right-to-bracket fa-sm" style="color:white;"></i> -->
                    <img src="../assets/icons/logout.png" alt="">
                </span>
                <span class="text-white text-lg ps-3">
                    Login
                </span>
            </router-link>
        </div>
        <div v-else class="  mt-3 hover:bg-indigo-600 duration-300 rounded-lg py-1" @click="logout">
            <router-link to="/user/login" class="flex items-center">
                <span @mouseover="logout_tooltip = true" @mouseleave="logout_tooltip = false"
                    class="rounded-md cursor-pointer  w-10 h-10 flex flex-row justify-center items-center hover:bg-indigo-600 duration-300 py-1">
                    <!-- <i class="fa-solid fa-right-from-bracket fa-sm" style="color:white;"></i> -->
                    <img src="../assets/icons/log-in.png" alt="">
                </span>
                <span class="text-white text-lg ps-3">
                    Logout
                </span>
            </router-link>
        </div>

    </div>
</template>

<script setup>

import { ref } from 'vue';

import IndexStore from '../store/store.index.js';
import UserStore from '../store/store.user.js';
import MessageStore from '../store/store.message';

import router from '../router';

const index_store = IndexStore();
const user_store = UserStore();
const message_store = MessageStore();

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
    setTimeout(() => {
        index_store.canvas_toggle = false;
    }, 500)
}

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
}
</style>
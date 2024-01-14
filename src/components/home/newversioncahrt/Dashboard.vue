<template>
    <div class="flex flex-col shadow-xl " style="font-family: 'Jost'">
        <!-- Chart Pie Sides -->
        <div class="flex flex-col h-48  bg-slate-900 p-5  justify-between rounded-b-xl">
            <!-- Name and Dashboard Text Section -->
            <div class="flex flex-row justify-between items-center ">
                <div class="flex flex-col ">
                    <div class="flex flex-row items-center">
                        <img class="w-16 h-16 rounded-full " :src="user_store.user?.image_url" alt="">
                        <span class="text-gray-200 text-5xl pl-5 font-thin"
                            style="font-family: 'Jost'">
                            Welcome Back, {{ user_store.user?.name }}
                        </span>
                    </div>
                    <span class="text-gray-300 text-sm mt-1 pt-4">For Showing an Orders, Click + Button</span>
                </div>
                <div class="">
                    <span class="border-2 border-gray-400 p-2 rounded-full text-sm font-bold text-gray-300 my-3"
                        style="letter-spacing: 1px;">
                        <i class="fa-solid fa-gauge-high text-lg"></i> Dashboard Page
                    </span>
                </div>
            </div>
            <!-- Overview Section -->
            <div class="flex items-center justify-between font-bold" style="letter-spacing: 1px; font-family: 'Jost';">
                <!-- Menu Section -->
                <div>
                    <router-link to="/">
                        <span
                            class=" mx-1 text-sm text-gray-200 px-8 py-2 cursor-pointer border font-bold rounded-full bg-gray-500">
                            Dashboard
                        </span>
                    </router-link>
                    <router-link to="/">
                        <span class=" mx-1 text-sm text-gray-300 px-8 dashboard-button-hover">
                            Workspace
                        </span>
                    </router-link>
                    <router-link to="/stf">
                        <span class=" mx-1 text-sm text-gray-300 px-8 dashboard-button-hover">
                            Orders
                        </span>
                    </router-link>
                    <router-link to="/procurement">
                        <span class=" mx-1 text-sm text-gray-300 px-8 dashboard-button-hover">
                            Procurement
                        </span>
                    </router-link>
                    <router-link to="/warehouse">
                        <span class=" mx-1 text-sm text-gray-300 px-8 dashboard-button-hover">
                            Warehouse
                        </span>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

import UserStore from '../../../store/store.user';
const user_store = UserStore();

</script>

<style lang="scss" scoped></style>
<template>
    <div class="flex flex-col">
        <!-- Chart Pie Sides -->
        <div class="flex flex-col h-44 bg-gradient-to-r from-slate-700 to-slate-900 mr-1 p-4 justify-between">
            <!-- Name and Dashboard Text Section -->
            <div class="flex flex-row justify-between items-center ">
                <div class="flex flex-col ">
                    <div class="flex flex-row">
                        <img class="w-14 h-14 rounded-full"
                src="https://img.freepik.com/free-photo/the-beautiful-girl-stands-near-walll-with-leaves_8353-5377.jpg?w=2000"
                alt="">
                <span class="text-gray-200 text-4xl p-1 "
                    style="font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;">
                    Welcome Back, {{ user_store.user?.name }}
                </span>
                    </div>
                    <span class="text-gray-300 text-xs mt-3 p-1">For Showing an Orders, Click + Button</span>
                </div>
                <div class="">
                    <span class="border-2 border-gray-400 p-2 rounded-full text-xs font-bold text-gray-300 my-3"
                        style="letter-spacing: 1px;">
                        <i class="fa-solid fa-gauge-high"></i> Dashboard Page
                    </span>
                </div>
            </div>
            <!-- Overview Section -->
            <div class="flex items-center justify-between" style="letter-spacing: 1px; font-family: 'Lato';">
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

import UserStore from '../../store/store.user_store';
const user_store = UserStore();


</script>

<style lang="scss" scoped></style>
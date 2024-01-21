<template>
    <div class="flex flex-row  justify-around">
        <div class="flex flex-col items-center my-2  rounded-sm w-full" style="font-family: 'Figtree';">
            <!-- Profile Section -->
            <div class="bg-white w-full h-full flex flex-col pt-2 px-4">
                
                    
                <!-- Title Section -->
                <div class=" p-2 flex justify-center">
                 <span class="w-full text-4xl font-bold text-center pl-5 mb-5" style="font-family: Inter;">Profile</span>
                 </div>
                <!-- Image Section -->
                <div class=" mt-1 flex flex-col items-center w-full py-1">
                    <div class="avatar">
                        <div class="w-64 rounded-full border">
                            <img :src="user_store.user?.image_url" />
                        </div>
                    </div>
                    <div class="text-2xl mt-3 font-bold ">
                        <span >{{ user_store.user?.name }} {{ user_store.user?.surname }}</span>
                    </div>
                    <span class="text-red-500 mt-3 text-xl font-bold">
                        Ustay
                        <span class="text-black font-medium text-lg">
                            {{ user_store.user?.ProjectModel?.project_name }}
                        </span>
                    </span>
                </div>
                <span class=" text-xl mt-3 mb-3 text-black" style="font-family: 'Figtree';">
                    Department Information
                </span>
                <span class="text-gray-400 mt-1 flex justify-between p-1 border-b text-md">
                    Location
                    <span class="text-gray-900">
                        Russia, Moscow
                    </span>
                </span>
                <span class="text-gray-400 mt-1 flex justify-between p-1 border-b">
                    Experience
                    <span class="text-gray-900">
                        4+ Years
                    </span>
                </span>
                <span class="text-gray-400 mt-1 flex justify-between p-1 border-b">
                    Department
                    <span class="text-gray-900">
                        {{ user_store.user?.DepartmentModel?.department_name }}
                    </span>
                </span>
                <span class="text-gray-400 mt-1 flex justify-between p-1 border-b">
                    Position
                    <span  class="text-gray-900">
                        {{ user_store.user?.StatusModel?.status_name }}
                    </span>
                </span>
                <span class=" text-xl mt-5 mb-3 text-black" style="font-family: 'Figtree';">
                    Contact Information
                </span>
                <div class="flex mt-1">
                    <img src="../../assets/icons/call.png" alt="">
                    <span class="mt-1 ml-4">
                        +8 965-167-34-13
                    </span>
                </div>
                <div class="flex mt-3">
                    <img src="../../assets/icons/mail.png" alt="">
                    <span velse class="mt-1 ml-4">
                        {{ user_store.user.email }}
                    </span>
                </div>
            </div>

        </div>

    </div>
</template>

<script setup>
import UserStore from '../../store/store.user';
const user_store = UserStore();



</script>

<style lang="scss" scoped>

</style>
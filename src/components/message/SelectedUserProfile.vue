<template>
    <div class="flex flex-row w-4/12  justify-around">

        <div class="flex flex-col items-center my-2  rounded-sm w-full" style="font-family: 'Figtree';">
            <!-- Profile Section -->
            <div class="bg-white w-full h-full flex flex-col pt-2 px-2">
                <!-- Close Chat Section -->
                <span class="cursor-pointer text-end" @click="closeChat"><i
                    class=" hover:text-blue-400 fa-solid fa-xmark fa-2xl text-gray-500"></i></span>
                    
                <!-- Title Section -->
                <div class="flex justify-center text-4xl w-full text-center p-1  py-2 " style="font-family: 'Figtree';">
                    <span class="">Profile</span>
                    <div class="bg-red-400">
                    </div>
                </div>
                <!-- Image Section -->
                <div class=" mt-1 flex flex-col items-center w-full py-1">
                    <div class="avatar">
                        <div class="w-64 rounded-full">
                            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </div>
                    <div class="text-2xl mt-3 font-bold ">
                        <span v-if="message_store.selected_user">{{ message_store.selected_user.username }}</span>
                        <span v-else>{{ user_store.user?.name }} {{ user_store.user?.surname }}</span>
                    </div>
                    <span class="text-red-500 mt-3 text-xl font-bold">
                        Ustay
                        <span v-if="message_store.selected_user" class="text-black font-medium text-lg">
                            {{ message_store.selected_user?.projectId }}
                        </span>
                        <span v-else class="text-black font-medium text-lg">
                            {{ user_store.user?.projectId }}
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
                    <span v-if="message_store.selected_user" class="text-gray-900">
                        {{ message_store.selected_user.department_name }}
                    </span>
                    <span v-else class="text-gray-900">
                        {{ user_store.user.departmentId }}
                    </span>
                </span>
                <span class="text-gray-400 mt-1 flex justify-between p-1 border-b">
                    Position
                    <span class="text-gray-900">
                        Specialist
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
                    <span v-if="message_store.selected_user" class="mt-1">
                        {{ message_store.selected_user.email }}
                    </span>
                    <span velse class="mt-1 ml-4">
                        {{ user_store.user.email }}
                    </span>
                </div>
            </div>

        </div>

        <div class=" flex justify-around pt-2  px-2">

        </div>

    </div>
</template>

<script setup>
import MessageStore from '../../store/store.message';
import UserStore from '../../store/store.user_store';

const message_store = MessageStore();
const user_store = UserStore();

// Close Chat Bar
const closeChat = () => { 
    message_store.toggle_message = false;
    message_store.selected_user = null;
    console.log('message store selected user is : ', message_store.selected_user);
}



</script>

<style lang="scss" scoped></style>
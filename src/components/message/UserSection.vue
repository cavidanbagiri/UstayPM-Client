<template>
    <div v-if="message_store.toggle_user"
        class="flex flex-col w-[480px] py-1 px-1 my-2 ml-1 hover:overflow-auto duration-300 rounded-s-sm bg-white border-r">
        <!-- Text Section -->
        <div class="text-center mt-2">
            <span class=" text-4xl" style="font-family: 'Poppins';">Users</span>
        </div>
        <!-- Search Bar -->
        <div class="flex items-center border-2 rounded-xs py-2 px-2 mx-4 my-5 bg-gray-100 rounded-lg ">
            <span class="pl-2 pr-3 text-gray-500">
                <i class="fa-solid fa-magnifying-glass text-xl"></i>
            </span>
            <input
                class="  w-full me-1 outline-none hover:orange-pink-500 text-gray-500 bg-gray-100 py-1 "
                style="font-family: 'Figtree';" type="text" placeholder="Search Contact ...">
        </div>
        <!-- User Liste Section -->
        <div>
            <ul class="" style="font-family: 'Roboto';">
                <!-- Each User -->
                <li @click="selectedUser(user)" v-for="user in message_store.unread_messages_and_users" :key="user.id"
                    class=" my-1 p-2 py-3 relative  flex justify-between  items-center rounded-lg cursor-pointer hover:bg-slate-100 duration-300  ">
                    <div class="flex justify-start items-center">
                        <img class="w-12 h-12 rounded-full"
                            :src=" user.image_url "
                            alt="">
                        <div class="flex flex-col pl-2 ">
                            <span class="text-md text-gray-700 ">
                                {{ user.username }}
                            </span>
                            <span class="text-sm text-gray-400" style="font-family:'Figtree'">
                                {{ user.status_name }}
                            </span>
                        </div>
                    </div>
                    <div  class="flex items-center">
                        <!-- Unread Messages Length -->
                        <!-- <div class="flex items-center mr-1"> -->
                            <div v-if="user.count"  class="flex items-center mr-1">
                            <div class="badge bg-red-500 badge-md text-white rounded-full  w-5 h-5 font-bold p-[11px]">
                                <span style="font-size:;">
                                    {{ user.count }}
                                </span>
                            </div>
                        </div>
                        <!-- User Dialog Inform -->
                        <div class="px-3 flex items-center justify-around mr-1 hover:text-black  rounded-full border" @click="toggleDialog(user)">
                            <span class="">
                                <i class="fa-solid fa-ellipsis-vertical text-gray-400 text-lg"></i>
                            </span>
                            <ul v-if="show_dialog && user_key === user.id " class="mr-1 bg-white absolute z-10 top-8 right-5 p-2 border-2 shadow-lg rounded-lg">
                                <li class="text-lg my-1 hover:bg-gray-200 border-b px-4 py-1 rounded-md flex items-center">
                                    <span class="pr-6 w-8 h-8">
                                        <i class="fa-regular fa-user"></i>
                                    </span>
                                    <span class="" @click="userInform(user)">
                                        Get User profile
                                    </span>
                                </li>
                                <li class="text-lg my-1 hover:bg-gray-200 border-b px-4 py-1 rounded-md flex items-center">
                                    <span class="pr-6 w-8 h-8">
                                        <i class="fa-regular fa-eye-slash"></i>
                                    </span>
                                    <span class="" @click="userInform(user)">
                                        Hide User
                                    </span>
                                </li>
                                <li class="text-lg my-1 hover:bg-gray-200 border-b px-4 py-1 rounded-md flex items-center">
                                    <span class="pr-6 w-8 h-8">
                                        <i class="fa-regular fa-bell-slash"></i>
                                    </span>
                                    <span class="" @click="userInform(user)">
                                        Mute User
                                    </span>
                                </li>
                                <li class="text-lg my-1 hover:bg-gray-200 border-b px-4 py-1 rounded-md flex items-center">
                                    <span class="pr-6 w-8 h-8">
                                        <i class="fa-solid fa-user-plus"></i>
                                    </span>
                                    <span class="" @click="userInform(user)">
                                        Add Favorites
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>

                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>
import { inject, ref, watchEffect } from 'vue';
import UserStore from '../../store/store.user';
import MessageStore from '../../store/store.message';
const user_store = UserStore();
const message_store = MessageStore();

const socket = inject('socket');

const show_dialog = ref(false);
const user_key = ref(0);
const toggleDialog = (user) => {
    show_dialog.value = !show_dialog.value
    user_key.value = user.id;
}

const selectedUser = async (user) => {
    if (user_store.user) {
        
        // 1 STEP - Set Selected User TO CLicked User
        message_store.selected_user = user;
        
        // 2 STEP - Fetch All Messages From Selected User, If Not any room, create new room betweem two users
        await message_store.fetchMessage(user_store.user?.id, message_store.selected_user.id);

        // 3 STEP - If There Is Not Any Message Between current user and selected user, room id will be not, thats why add room id for that user
        if (message_store.selected_user_fetch_messages.length) {

            // 4 STEP - If Selected User roomid is null
            if(!message_store.selected_user?.roomid){
                
                // 5 STEP - SET roomid for selecting user from coming data from backend during selecting user
                message_store.selected_user.roomid = message_store.selected_user_fetch_messages[0]?.roomId;
            }

            // 6 STEP Send Coming Room between this two user to backend side for creating realtime chatting
            socket.emit('join_room', user_store.user.id, user.id, message_store.selected_user_fetch_messages[0]?.roomId);
            
            // 7 STEP - Set true unread messages for current user  
            await message_store.setTrueReadingMessages({current_id: user_store.user?.id, room_id: message_store.selected_user_fetch_messages[0]?.roomId});
            
            // 8 STEP - Set Selected User Unread Messages Count as 0
            message_store.selected_user.count = 0;
        }
        // 9 STEP - Set Unread Message 0 in Selected User Side
        for(let i of message_store.unread_messages_and_users){
            if(message_store.selected_user.id === i.id){
                i.count = 0;
            }
        }
        // 10 STEP - Set Unread Message read in message notification side
        message_store.unread_messages = message_store.unread_messages?.filter((item)=>{
            return message_store.selected_user?.id !== item.id 
        })
    }
}



</script>

<style lang="scss" scoped></style>
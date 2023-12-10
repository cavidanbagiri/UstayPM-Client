<template>
    <div v-if="message_store.toggle_user"
        class="flex flex-col w-1/2 py-2 px-3 overflow-auto  rounded-s-xl bg-white ">
        <!-- Text Section -->
        <!-- <div class="text-center">
            <span class=" text-4xl" style="font-family: 'Poppins';">Users</span>
        </div> -->
        <!-- Search Bar -->
        <div class="flex items-center border-2 rounded-full py-2 px-2 my-5 bg-white">
            <span class="pl-2 pr-3 text-gray-500">
                <i class="fa-solid fa-magnifying-glass"></i>
            </span>
            <input
                class="  w-full me-1 outline-none hover:orange-pink-500 text-gray-500 "
                style="font-family: 'Poppins';" type="text" placeholder="Search Contact ...">
        </div>
        <!-- User Liste Section -->
        <div>
            <ul class="" style="font-family: 'Roboto';">
                <!-- Each User -->
                <li @click="selectedUser(user)" v-for="user in message_store.unread_messages_and_users" :key="user.id"
                    class=" my-4 p-2 py-3 relative  flex justify-between border-b items-center rounded-lg cursor-pointer hover:bg-slate-100 duration-300  ">
                    <div class="flex justify-start items-center">
                        <img class="w-12 h-12 rounded-full"
                            src="https://static.wixstatic.com/media/033319_e0f92699ac1741baa4b84b6755734bb6~mv2.png/v1/crop/x_89,y_0,w_2601,h_1732/fill/w_480,h_486,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/IMG_0297_edited.png"
                            alt="">
                        <div class="flex flex-col pl-2 font-bold">
                            <span class="text-md text-gray-600 ">
                                {{ user.username }}
                            </span>
                            <span class="text-sm text-gray-400" style="font-family:'Poppins'">
                                {{ user.status_name }}
                            </span>
                        </div>
                    </div>
                    <div v-if="user.count" class="flex items-center">
                        <!-- Unread Messages Length -->
                        <div class="flex items-center">
                            <div class="badge bg-red-500 badge-md text-white rounded-full  w-5 h-5 font-bold p-[11px]">
                                <span style="font-size:;">
                                    {{ user.count }}
                                </span>
                            </div>
                        </div>
                        <!-- User Dialog Inform -->
                        <div class="px-1 mr-1 hover:text-black" @click="toggleDialog(user)">
                            <i class="fa-solid fa-ellipsis-vertical text-gray-500 text-2xl"></i>
                            <ul v-if="show_dialog && user_key === user.id " class="bg-white absolute z-10 top-8 right-5 p-2 border-2 shadow-lg rounded-lg">
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
import { inject, ref } from 'vue';
import UserStore from '../../store/store.user_store';
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

const userInform = (user) => {
    console.log('clicked user btn : ',user);
}


const selectedUser = async (user) => {
    if (user_store.user) {
        message_store.selected_user = user;
        await message_store.fetchMessage(user_store.user?.id, message_store.selected_user.id);
        if (message_store.selected_user_fetch_messages.length) {
            socket.emit('join_room', user_store.user.id, user.id, message_store.selected_user_fetch_messages[0]?.roomId);
        }
        else {
            console.log('there is not');
        }
    }

}


</script>

<style lang="scss" scoped></style>
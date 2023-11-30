<template>
    <div v-if="message_store.toggle_user" class="flex flex-col w-1/2 p-2 overflow-auto border shadow-2xl">
            <!-- Text Section -->
            <div class="text-center">
                <span class=" text-4xl" style="font-family: 'Poppins';">Users</span>
            </div>
            <!-- Search Bar -->
            <div>
                <input
                    class="py-3 px-2 border-2 rounded-xl w-full me-1 outline-none hover:orange-pink-500 text-gray-500 shadow-lg"
                    style="font-family: 'Poppins';" type="text" placeholder="Search ...">
            </div>
            <!-- User Liste Section -->
            <div>
                <ul class="" style="font-family: 'Roboto';">
                    <li @click="selectedUser(user)" v-for="user in message_store.users" class="bg-white my-2 p-2 py-3 flex items-center rounded-lg cursor-pointer hover:bg-gray-100" >
                        <img class="w-14 h-14 rounded-full"
                            src="https://static.wixstatic.com/media/033319_e0f92699ac1741baa4b84b6755734bb6~mv2.png/v1/crop/x_89,y_0,w_2601,h_1732/fill/w_480,h_486,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/IMG_0297_edited.png"
                            alt="">
                        <div class="flex flex-col pl-2">
                            <span class="text-lg">
                                {{ user.username }}
                            </span>
                            <span class="text-sm text-gray-400" style="font-family:'Poppins'">
                                {{ user.status_name }}
                            </span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
</template>

<script setup>
import { inject } from 'vue';
import UserStore from '../../store/store.user_store';
import MessageStore from '../../store/store.message';
const user_store = UserStore();
const message_store = MessageStore();

const socket = inject('socket');

const selectedUser = async (user) => {
    if(user_store.user){
        message_store.selected_user = user;
        await message_store.fetchMessage(user_store.user?.id, message_store.selected_user.id);
        if(message_store.selected_user_fetch_messages.length){
            socket.emit('join_room', user_store.user.id, user.id, message_store.selected_user_fetch_messages[0]?.roomId);
        }
        else{
            console.log('there is not');
        }
        
    }

}

</script>

<style lang="scss" scoped>

</style>
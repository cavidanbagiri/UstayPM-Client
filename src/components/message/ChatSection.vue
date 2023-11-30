<template>
    <div :class="message_store.toggle_user ? 'w-1/2' : 'w-full'"
        class="justify-between p-1 shadow-2xl flex flex-col border rounded-xl ">

        <!-- Close Button and Userlist Toggle Section -->
        <div class=" flex justify-between py-2 px-5">
            <span class="cursor-pointer" @click="toggleUsers"><i
                    class=" hover:text-blue-400 fa-solid fa-users fa-xl text-gray-500"></i></span>
            <span class="cursor-pointer" @click="closeChat"><i
                    class=" hover:text-blue-400 fa-solid fa-xmark fa-2xl text-gray-400"></i></span>
        </div>

        <!-- Sender Information Section -->
        <div v-if="message_store.selected_user" class="mx-2 bg-white" style="font-family: 'Poppins';">
            <div class="flex flex-row items-center justify-start p-1">
                <img class="w-10 h-10 rounded-full"
                    src="https://imgv3.fotor.com/images/gallery/Realistic-Male-Profile-Picture.jpg" alt="">
                <span class="text-xl pl-5">{{ message_store.selected_user?.username }}</span>
            </div>
        </div>

        <!-- Message Area -->
        <div v-if="message_store.selected_user"
            class="flex flex-col bg-white h-full p-2 rounded-xl mx-2 mt-2 overflow-scroll">

            <!-- {{ message_store.selected_user_fetch_messages }} -->

            <template v-for="i in message_store.selected_user_fetch_messages">

                <!-- Receiver Or Current -->
                <div v-if="i.receiverId === user_store.user.id " class="flex flex-row justify-end p-1 items-center">
                    <span class="receiver">{{ i.message_text }}</span>
                    <img class="w-11 h-11 rounded-full"
                        src="https://pics.craiyon.com/2023-06-18/0136ddc42a664843ad7c509dd59c7d98.webp" alt="">
                </div>

                <!-- Sender or Selected -->
                <div v-else class="flex flex-row justify-start p-1 items-center">
                    <img class="w-11 h-11 rounded-full"
                        src="https://imgv3.fotor.com/images/gallery/Realistic-Male-Profile-Picture.jpg" alt="">
                    <span class="sender">{{ i.message_text }}</span>
                </div>


            </template>



        </div>

        <!-- If User Not Selected -->
        <div v-else class="flex flex-col bg-white h-full p-2 rounded-xl mx-2 mt-2 justify-center items-center">
            <span class="text-gray-500 text-5xl">
                User Not Selected
            </span>
            <span class="mt-10 text-gray-400 text-xl text-center">
                For Selecting User, Please Click Top Right Users Icon
            </span>
        </div>
        <!-- Text Input Area -->
        <div class="flex flex-row items-center justify-between py-2 px-1">
            <input @keyup.enter="sendMessage" :disabled="!message_store.selected_user" v-model="message_data.message_text"
                class="py-3 px-2 border-2 rounded-full w-full me-1 outline-none hover:orange-pink-500 text-gray-500 shadow-xl"
                style="font-family: 'Poppins';" type="text" placeholder="Text ...">
            <button :disabled="!message_store.selected_user" @click="sendMessage"
                class="p-3 bg-orange-500 rounded-full text-gray-100 shadow-xl">
                <i class="fa-regular fa-paper-plane fa-xl"></i>
            </button>
        </div>
    </div>
</template>

<script setup>

import { inject, watchEffect, reactive } from 'vue';

import UserStore from '../../store/store.user_store';
import MessageStore from '../../store/store.message';
const user_store = UserStore();
const message_store = MessageStore();

// Close Chat Bar
const closeChat = () => { message_store.toggle_message = false; }
// Close Users List
const toggleUsers = () => { message_store.toggle_user = !message_store.toggle_user }

const socket = inject('socket');

watchEffect(()=>{
    socket.on('fetch_messages', data=>{
        message_store.selected_user_fetch_messages = data;
    });
})


// Send Message
const message_data = reactive({
    message_text: '',
    current_id: user_store.user?.id,
    sender_id: '',
    room_id: '',
    receiverId: '',
    senderId: '',
})
const sendMessage = async () => {
    if (user_store.user) {
        message_data.sender_id = message_store.selected_user.id;
        if(message_store.selected_user_fetch_messages){
            if(message_store.selected_user_fetch_messages.length){
                message_data.room_id = message_store.selected_user_fetch_messages[0].roomId;
            }
            else{
                message_data.room_id = message_store.selected_user_fetch_messages.roomId
            }
        }
        // await socket.emit('send_message', message_data);
        // await socket.on('fetch_messages', )
        await message_store.sendMessage(
            message_data
        ).then(async (respond)=>{
            console.log('fetch messages is : ', message_store.selected_user_fetch_messages);
            //socket.emit('send_message', message_text.value);
            message_data.receiverId = message_data.current_id;
            // const temp_text =  message_data.message_text;
            // message_data.message_text = temp_text;
            // message_store.selected_user_fetch_messages.push(message_data)
            await message_store.fetchMessage(message_data.current_id, message_data.sender_id);
            message_data.message_text = '';
            socket.emit('new_messages', message_data)
        }).catch((err)=>{
            console.log('Send Message Error : ',err);
        })
    }
}

</script>

<style lang="scss" scoped>
.sender {
    padding: 8px;
    color: white;
    font-size: large;
    margin-left: 5px;
    margin-right: 5px;
    margin-top: 3px;
    margin-bottom: 3px;
    background-color: #a855f7;
    border-radius: 10px;
}

.receiver {
    padding: 8px;
    color: white;
    font-size: large;
    margin-left: 5px;
    margin-right: 5px;
    margin-top: 3px;
    margin-bottom: 3px;
    text-align: right;
    background-color: #2563eb;
    border-radius: 10px;
}
</style>
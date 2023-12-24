<template>
    <div class="justify-between px-1 my-1 flex flex-col bg-white w-9/12 mt-2 mb-2 border-r">

        <!-- Close Button and Userlist Toggle Section -->
        <!-- <div class=" flex justify-end py-2 px-5">
            <span class="cursor-pointer" @click="closeChat"><i
                    class=" hover:text-blue-400 fa-solid fa-xmark fa-2xl text-gray-400"></i></span>
        </div> -->

        <div class="flex justify-center text-4xl mt-2" style="font-family: 'Poppins';">
            Chats
        </div>

        <!-- Sender Information Section -->
        <div v-if="message_store.selected_user"
            class="mx-1 flex justify-between items-end border-b hover:bg-gray-100 cursor-pointer"
            style="font-family: 'Roboto';">
            <div class="flex flex-row items-center justify-start p-1">
                <img class="w-10 h-10 rounded-full"
                    src="https://imgv3.fotor.com/images/gallery/Realistic-Male-Profile-Picture.jpg" alt="">
                <div class="flex flex-col">
                    <span class="text-lg pl-5">{{ message_store.selected_user?.username }}</span>
                    <span class="text-sm pl-5 text-gray-400">{{ message_store.selected_user?.status_name }}</span>
                </div>
            </div>
            <div>
                <span v-if="selected_typing" class="loading loading-dots loading-sm">write</span>
            </div>
        </div>

        <!-- Message Area -->
        <div v-if="message_store.selected_user"
            class="flex flex-col bg-white h-full p-2 rounded-sm  mx-2 mt-2 hover:overflow-y-scroll overflow-hidden ">

            <template v-for="i in message_store.selected_user_fetch_messages">

                <!-- If Message Text Is Empty Down Show -->

                <span v-if="i.message_text === ''"></span>

                <!-- Receiver Or Current -->
                <div v-else-if="i.receiverId === user_store.user.id" class="flex flex-col text-end">
                    <!-- Show User Image and Message Section -->
                    <div class="flex flex-row justify-end p-1 items-end">
                        <div class="chat chat-end w-full">
                            <div class="chat-bubble pr-1 bg-pink-500 text-white">
                                <span class="pr-3">
                                    {{ i.message_text }}
                                </span>
                                <span class="flex justify-end">
                                    <i class="fa-solid fa-check-double fa-xs text-gray-50"></i>
                                    <!-- <i class="fa-solid fa-check fa-xs text-gray-50"></i> -->
                                </span>
                            </div>
                        </div>
                        <img class="w-11 h-11 rounded-full"
                            src="https://pics.craiyon.com/2023-06-18/0136ddc42a664843ad7c509dd59c7d98.webp" alt="">
                    </div>
                    <!-- Show Date and time -->
                    <div class="px-2 text-sm">
                        <DateFormatTime :time="i.createdAt" />
                    </div>
                </div>

                <!-- Sender or Selected -->
                <div v-else class="flex flex-col text-start">
                    <div class="flex flex-row justify-start p-1 items-end ">
                        <img class="w-11 h-11 rounded-full"
                           src="https://imgv3.fotor.com/images/gallery/Realistic-Male-Profile-Picture.jpg" alt="">
                        <div class="chat chat-start w-full">
                            <div class="chat-bubble chat-bubble-primary text-white">
                                <span class="">
                                    {{ i.message_text }}
                                </span>
                            </div>
                        </div>
                    </div>
                    <!-- Show Date and time -->
                    <div class="px-2 text-sm">
                        <DateFormatTime :time="i.createdAt" />  
                    </div>
                </div>

            </template>

        </div>

        <!-- If User Not Selected -->
        <div v-else class="flex flex-col bg-white h-full p-2 rounded-sm mx-1 mt-1 justify-center items-center">
            <span class="text-gray-500 text-5xl">
                User Not Selected
            </span>
            <span class="mt-10 text-gray-400 text-xl text-center">
                For Selecting User, Please Click Top Right Users Icon
            </span>
        </div>
        <!-- <span v-if="selected_typing" class="loading loading-dots loading-sm"></span> -->
        <!-- Text Input Area -->
        <div class="flex flex-row items-center justify-between py-2 px-1">
            <input @keyup.enter="sendMessage" :disabled="!message_store.selected_user" v-model="message_data.message_text"
                @input="msgTyping"
                class="py-3 px-2 bg-gray-100 rounded-sm w-full me-1 outline-none hover:orange-pink-500 text-gray-500 "
                style="font-family: 'Poppins';" type="text" placeholder="Type a message ...">
            <button :disabled="!message_store.selected_user " @click="sendMessage"
                class="p-3 bg-blue-500 rounded-xl text-gray-100 shadow-xl">
                <i class="fa-regular fa-paper-plane fa-xl "></i>
            </button>
        </div>
    </div>
</template>

<script setup>

import { ref, inject, watchEffect, reactive } from 'vue';
import sendringtone from '../../assets/sendringtone.mp3';
import DateFormatTime from '../../layouts/DateFormatTime.vue';

import UserStore from '../../store/store.user_store';
import MessageStore from '../../store/store.message';
const user_store = UserStore();
const message_store = MessageStore();

// After Send Message, This Send Sound Will Play
const send_ringtone = new Audio(sendringtone);

// Close Chat Bar
//const closeChat = () => { message_store.toggle_message = false; }
// Close Users List
const toggleUsers = () => { message_store.toggle_user = !message_store.toggle_user }

const socket = inject('socket');

// Message Controleer for one time sending to one message
const now_message_sending = ref(true);

//***************************************************** Typing Events ***************/
// When Selected User Typing, writing spinner will shown 
const selected_typing = ref(false);

const msgTyping = () => {
    socket.emit('typing', message_store.selected_user_fetch_messages[0]?.roomId);
}
//********************************************************************************* */

watchEffect(() => {
    socket.on('fetch_messages', data => {
        if (message_store.selected_user?.roomid === data[0].roomId) {
            message_store.selected_user_fetch_messages = data;
        }
    });
    socket.on('typing', (room_id) => {
        if (message_store.selected_user?.roomid === room_id) {
            selected_typing.value = true;
            setTimeout(() => {
                selected_typing.value = false;
            }, 2000)
        }
    })
})

// Send Message
const message_data = reactive({
    message_text: '',
    current_id: user_store.user?.id,
    sender_id: '',
    room_id: '',
    senderId: '',
})
const sendMessage = async () => {
    if (user_store.user && message_data.message_text.trim().length > 0) {
        message_data.sender_id = message_store.selected_user.id;
        if (message_store.selected_user_fetch_messages) {
            if (message_store.selected_user_fetch_messages.length) {
                message_data.room_id = message_store.selected_user_fetch_messages[0].roomId;
            }
            else {
                message_data.room_id = message_store.selected_user_fetch_messages.roomId
            }
        }
        if (now_message_sending.value) {
            now_message_sending.value = false;
            await message_store.sendMessage(
                message_data
            ).then(async (respond) => {
                message_data.receiverId = message_data.current_id;
                const temp_message_data = {
                    createdAt: new Date().getDate(),
                    message_text: message_data.message_text,
                    receiverId: message_data.current_id,
                    roomId: message_data.room_id,
                    senderId: message_data.senderId
                }
                message_store.selected_user_fetch_messages?.push(temp_message_data);
                now_message_sending.value = true;
                send_ringtone.play();
                message_data.message_text = '';
                socket.emit('new_messages', message_data)
                // await message_store.setTrueReadingMessages({current_id: user_store.user?.id, room_id: selected_user_fetch_messages.roomId});
            }).catch((err) => {
                console.log('Send Message Error : ', err);
            })
        }
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
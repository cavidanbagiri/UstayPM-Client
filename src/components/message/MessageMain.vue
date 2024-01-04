<template>
    <div >
        <div class="z-50 flex flex-row bg-white fixed bottom-0 right-0 rounded-md px-2 pt-1 pb-1 shadow-2xl message_main">

            <!-- Show All Users -->
            <UserSection />
            <!-- Chat Section -->
            <ChatSection />
            <!-- Selected User Section -->
            <SelectedUserProfile/>
            
        </div>

    </div>
    <!-- User Section -->
</template>

<script setup>

import { onMounted, watchEffect, inject } from 'vue';

import ChatSection from './ChatSection.vue';
import UserSection from './UserSection.vue';
import MessageStore from '../../store/store.message';
import UserStore from '../../store/store.user';
import SelectedUserProfile from './SelectedUserProfile.vue';

const socket = inject('socket');

const user_store = UserStore();
const message_store = MessageStore();

onMounted(async () => {
    await message_store.fetchUnreadMessagesAndUsers(user_store.user?.id)
})

// watchEffect(() => {
    // socket.on('fetch_messages', data => {
    //     for (let user of message_store.unread_messages_and_users) {
    //         if (user.roomid === data[0].roomId) {
    //             user.count = Number(user.count) + 1;
    //         }
    //     }
    // });
// })

</script>

<style scoped>

.message_main {
    width: 100%;
    height: 100%;
    animation: message_main_anim 0.4s;
}

@keyframes message_main_anim {
    0%{
        width: 0px;
        height: 0px;
    }
}

</style>
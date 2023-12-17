<template>
    <div v-if="message_store.toggle_message" >
        <div class="z-50 flex flex-row bg-slate-100 fixed bottom-0 right-0 w-full h-full rounded-lg px-2 pt-2 pb-4 shadow-2xl">
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
import UserStore from '../../store/store.user_store';
import SelectedUserProfile from './SelectedUserProfile.vue';

const socket = inject('socket');

const user_store = UserStore();
const message_store = MessageStore();

onMounted(async () => {
    // await message_store.fetchUsers();
    await message_store.fetchUnreadMessagesAndUsers(user_store.user?.id)
})

watchEffect(() => {
    // socket.on('fetch_messages', data => {
    //     for (let user of message_store.unread_messages_and_users) {
    //         if (user.roomid === data[0].roomId) {
    //             user.count = Number(user.count) + 1;
    //         }
    //     }
    // });
})

</script>

<style lang="scss" scoped></style>
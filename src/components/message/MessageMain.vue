<template>
    <div v-if="message_store.toggle_message"
        
        :class="message_store.toggle_user ? 'w-[55rem]' : 'w-3/12' "
        class="z-50 flex flex-row bg-white fixed bottom-10 right-10 rounded-xl h-5/6 shadow-2xl">
        <!-- User Section -->
        <UserSection/>
        <!-- Chat Section -->
        <ChatSection/>
    </div>
</template>

<script setup>

import { onMounted } from 'vue';

import ChatSection from './ChatSection.vue';
import UserSection from './UserSection.vue';
import MessageStore from '../../store/store.message';
import UserStore from '../../store/store.user_store';

const user_store = UserStore();
const message_store = MessageStore();

onMounted(async ()=>{
    // await message_store.fetchUsers();
    await message_store.fetchUnreadMessagesAndUsers(user_store.user?.id)    
})

</script>

<style lang="scss" scoped>

</style>
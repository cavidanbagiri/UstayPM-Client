<template>
    <div v-if="message_store.toggle_message"
        :class="message_store.toggle_user ? 'w-1/2' : 'w-3/12' "
        class="z-50 flex flex-row bg-gray-100 fixed bottom-10 right-10 rounded-xl h-5/6">
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
const message_store = MessageStore();

onMounted(async ()=>{
    await message_store.fetchUsers();    
})

</script>

<style lang="scss" scoped>

</style>
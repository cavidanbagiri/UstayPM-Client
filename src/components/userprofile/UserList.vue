<template>
    <div class="flex flex-col justify-center">
        <!-- Title Section -->
        <div class=" p-2 flex justify-center">
            <span class="w-full text-5xl font-bold text-center pl-5" style="font-family: Inter;">Users</span>
        </div>
        <!-- Users Table Section -->
        <div class="flex flex-col w-full ">
            <div class="my-2 text-end pr-5 flex flex-row justify-end">
                <span class="rounded-xl bg-white items-center border p-2">
                    <i class="fa-solid fa-magnifying-glass fa-lg text-gray-400"></i>
                    <input class="bg-white text-gray-500 pl-2" type="search" name="" id="" placeholder="Search Name ...">
                </span>
            </div>
            <table class=" p-5 w-full h-full overflow-hidden ">
                <UserTableHeaders :table_headers="user_store.all_users_headers" />
                <UserEachRow v-for="(i, index) in user_store.all_users" :each="i" :index="index"/>
            </table>
        </div>
    </div>
</template>

<script setup>

import { onMounted } from 'vue';
import UserTableHeaders from './UserTableHeaders.vue';
import UserEachRow from './UserEachRow.vue';
import UserStore from '../../store/store.user';
const user_store = UserStore();

onMounted(async () => {
    if(user_store.user){
        const data = {
            user_id: user_store.user.id,
            project_id: user_store.user.projectId
        }
        await user_store.fetahAllUsers(data);
        if(user_store.all_users_headers.length === 0){
            user_store.getUsersHeaders();
        }
    }
})


</script>

<style lang="scss" scoped>

</style>
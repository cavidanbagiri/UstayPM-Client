<template>
    <div class="flex flex-col mt-4">
        <span class="text-start text-5xl font-bold text-gray-600 pl-10">User Table</span>
        <table class=" mt-3 border-2">
            <UserTableHeaders/>
            <UserTableRows/>
        </table>
    </div>
</template>

<script setup>

import UserTableHeaders from './UserTableHeaders.vue';
import UserTableRows from './UserTableRows.vue';

</script>

<style lang="scss" scoped>

</style>
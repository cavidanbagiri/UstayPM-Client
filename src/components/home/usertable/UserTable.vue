<template>
    <div class="col-span-6 overflow-hidden mx-1 rounded-lg shadow-2xl">
        <table class="bg-white w-full rounded-2xl">
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
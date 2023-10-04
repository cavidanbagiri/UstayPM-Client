<template>
    <div v-if="procurement_store.sm_success_show_message" class=" absolute w-full top-20 flex justify-center">
        <div class="flex flex-row w-1/3 items-center bg-green-600 text-white justify-center py-3  rounded-lg">
            <span>New Task Succesffuly Created</span>
        </div>
    </div>
</template>

<script setup>

import ProcurementStore from '../../../store/store.procurement.js';
const procurement_store = ProcurementStore();

</script>

<style scoped>

</style>
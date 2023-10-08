<template>
    <div v-if="warehouse_store.receive_success_show_message" class=" absolute w-full top-20 flex justify-center">
        <div class="flex flex-row w-1/3 items-center bg-green-600 text-white justify-center py-3  rounded-lg">
            <span>SM Succesffuly Received </span>
        </div>
    </div>
</template>

<script setup>

import WarehouseStore from '../../../store/store.warehouse';
const warehouse_store = WarehouseStore();

</script>

<style scoped>

</style>
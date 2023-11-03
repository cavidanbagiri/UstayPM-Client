
<template>
    <div v-if="index_store.row_inform_condition" class="fixed right-0 top-0 w-3/4 h-screen bg-gray-100 z-50 overflow-auto">
        <div class="flex flex-col">
            <div class="flex justify-end mx-5 text-lg font-bold">
                <span @click="closeInformBar" class="cursor-pointer">X</span>
            </div>
            <div>
                <pre>
                    {{ index_store.row_detail_data }}
                </pre>
            </div>
        </div>
    </div>
</template>

<script setup>

import IndexStore from '../store/store.index';
const index_store = IndexStore();

const closeInformBar = () => {
    index_store.row_inform_condition = false;
}

</script>

<style lang="scss" scoped>

</style>


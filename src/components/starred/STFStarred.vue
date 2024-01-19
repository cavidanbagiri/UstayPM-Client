<template>
    <div class="flex flex-col p-2">
        <table class=" mx-2 w-full shadow-xl  mt-1">
            <TableHeader :table_headers="index_store.starred_stf_headers">
                <template #star>
                    <th class="px-2 py-3 text-center">
                        <div class="flex flex-col font-thin">
                            Star
                        </div>
                    </th>
                </template>
            </TableHeader>

            <StarredSTFEachRow v-for="(i, index) in index_store.starred_stf" :each="i" :index="index" />
        </table>

        <div v-if="index_store.all_starred_loading" class="flex flex-row justify-center items-center w-full h-96">
            <span class="loading loading-dots loading-lg"></span>
        </div>

        <div v-if="index_store.all_starred_cond_text" class="flex flex-row justify-center items-center w-full h-96">
            <span class="text-3xl">
                There is not any starred data 
            </span>
        </div>

    </div>
</template>

<script setup>


import TableHeader from '../../layouts/TableHeader.vue';
import IndexStore from '../../store/store.index';
import StarredSTFEachRow from './StarredSTFEachRow.vue';
const index_store = IndexStore();


</script>

<style lang="scss" scoped></style>
<template>
    <div class="flex flex-col p-2">
        {{ index_store.starred_stf_headers }}
        <table>
            <TableHeader :table_headers="index_store.starred_stf_headers">
                <template #star>
                    <th class="px-2 py-3 text-center">
                        <div class="flex flex-col font-thin">
                            Star
                        </div>
                    </th>
                </template>
            </TableHeader>
            {{ index_store.starred_stf[0]?.STFModel }}
            <ShowSTFEachRow v-for="(i, index) in index_store.starred_stf" :each="i?.STFModel" :index="index" />
        </table>

    </div>
</template>

<script setup>


import TableHeader from '../../layouts/TableHeader.vue';
import ShowSTFEachRow from '../stf/show_stf/ShowSTFEachRow.vue';
import IndexStore from '../../store/store.index';
const index_store = IndexStore();


</script>

<style lang="scss" scoped></style>
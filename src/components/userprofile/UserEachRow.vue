<template>
    <tr :class="checked ? 'text-white  bg-blue-600 hover:bg-blue-500 ' : 'bg-white  hover:bg-blue-600 hover:text-white hover:duration-200 '"
        class="border-b  hover:cursor-pointer table_row hover:m-2">

        <!-- Show Checked or Not Section -->
        <!-- <td class="w-1 p-4 py-2 ">
            <div class="flex items-center">
                <label class="flex cursor-pointer items-center rounded-sm p-1" for="selected_row" data-ripple-dark="true">
                    <input :id="prop.each.id" type="checkbox" v-model="checked" @change="checkboxCond"
                        class="checkbox checkbox-xs checkbox-primary" />
                </label>
            </div>
        </td> -->

        <!-- Show Index Num -->
        <th class="px-2 py-2 font-medium text-center text-lg">
            {{ prop?.index + 1 }}
        </th>

        <TableRow :each="prop?.each" :table_headers="user_store.all_users_headers" />

    </tr>
</template>

<script setup>

import { ref } from 'vue';
import TableRow from './TableRow.vue';

import UserStore from '../../store/store.user';
const user_store = UserStore();

const prop = defineProps(['each', 'index']);

const checked = ref(false);

</script>

<style lang="scss" scoped>

</style>
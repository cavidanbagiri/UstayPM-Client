<template>
    <tr :class="checked_style ? 'text-white bg-blue-600  hover:bg-blue-500 ' :
        ' bg-white  hover:bg-indigo-500 '" class="border-b  hover:cursor-pointer table_row ">
        <TableRowInform :each="prop?.each" />
        <td class="w-1 p-4 py-2 ">
            <div class="flex items-center">
                <label class=" flex cursor-pointer items-center rounded-sm p-1" for="selected_row" data-ripple-dark="true">
                    <input :id="prop.each.id" type="checkbox" @change="checkedRows(prop.each.id)"
                        class="checkbox checkbox-xs checkbox-primary" />
                </label>
            </div>
        </td>
        <!-- S/S Section -->
        <th class="px-2 py-2 font-medium text-center">{{ prop.index + 1 }}</th>
        <TableRow :each="prop?.each" :table_headers="stf_store.all_stf_headers" />
    </tr>
</template>

<script setup>

import { ref } from 'vue';

import STFStore from '../../../store/store.stf.js';

import TableRow from '../../../layouts/TableRow.vue';
import TableRowInform from '../../../layouts/TableRowInform.vue';

const stf_store = STFStore();

const prop = defineProps(['each', 'index'])

const checked_style = ref(false);

// Row Checked Controll and add selecting Rows from dell
const checkedRows = () => {
    checked_style.value = !checked_style.value
    if (checked_style.value) {
        stf_store.warehouse_selecting_rows.push(prop.each)
    }
    else {
        stf_store.warehouse_selecting_rows = stf_store.warehouse_selecting_rows.filter((item) => item.stf_id !== prop.each.stf_id)
    }
}

</script>

<style lang="scss" scoped></style>
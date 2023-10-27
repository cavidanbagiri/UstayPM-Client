
<template>
    <tr :class="checked ? 'text-white  bg-blue-600 hover:bg-blue-500 ' : 
    'bg-white hover:bg-gray-100'"
    class="border-b table_row hover:cursor-pointer">
        <TableRowInform :each="prop?.each" />
        <td class="w-1 p-4 py-2 ">
            <div class="flex items-center">
                <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                <input id="checkbox-table-search-1" type="checkbox" v-model="checked" @change="checkboxCond"
                class="checkbox checkbox-xs checkbox-primary" />
            </div>
        </td>
        <th class="px-2 py-3  text-center">
            {{ prop?.index + 1 }}
        </th>

        <TableRow :each = "prop?.each" :table_headers="warehouse_store.warehouse_data_headers" />

    </tr>
</template>

<script setup>

import { ref } from 'vue';
import TableRow from '../../../layouts/TableRow.vue';
import WarehouseStore from '../../../store/store.warehouse';
import TableRowInform from '../../../layouts/TableRowInform.vue'
const warehouse_store = WarehouseStore();

// Get Each Item from parent
const prop = defineProps(['each', 'index']);

// Create an Emit for clicking checkbox
const emit = defineEmits(['addChecked', 'removeChecked']);

const checked = ref(false);

const checkboxCond = () => checked.value === true ? emit('addChecked', prop?.each) : emit('removeChecked', prop?.each);



</script>

<style lang="scss" scoped></style>

<template>
<tr :class="checked ? 'text-white  bg-blue-600 hover:bg-blue-500 ' : 
    'bg-white hover:bg-blue-600 hover:text-white hover:duration-200'"
    class="border-b table_row hover:cursor-pointer">
        <TableRowInform :each="prop?.each" />
        <td class="w-1 p-4 py-2 ">

            <div class="flex items-center">
                <label class="flex cursor-pointer items-center rounded-sm p-1" for="selected_row" data-ripple-dark="true">
                    <input :id="prop.each.id" type="checkbox" v-model="checked" @change="checkboxCond"
                        class="checkbox checkbox-xs checkbox-primary" />
                </label>
            </div>

        </td>
        <th class="px-2 py-2  text-center">
            {{ prop?.index + 1 }}
        </th>

        <TableRow :each = "prop?.each" :table_headers="warehouse_store.processing_sm_headers" />

    </tr>
</template>

<script setup>

import { ref, watchEffect } from 'vue';
import TableRow from '../../../layouts/TableRow.vue';
import TableRowInform from '../../../layouts/TableRowInform.vue';
import WarehouseStore from '../../../store/store.warehouse';
const warehouse_store = WarehouseStore();


// Get Each Item from parent
const prop = defineProps(['each', 'index']);


// Create an Emit for clicking checkbox
const emit = defineEmits(['addChecked', 'removeChecked']);

const checked = ref(false);

const checkboxCond = () => checked.value === true ? emit('addChecked', prop?.each) : emit('removeChecked', prop?.each);

watchEffect(() => {
    if (warehouse_store.after_created) {
        checked.value = false;
    }
})

</script>

<style lang="scss" scoped></style>
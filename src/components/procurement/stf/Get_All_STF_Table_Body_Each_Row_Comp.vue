
<template>
    <tr :class="checked ? 'text-white  bg-blue-600 hover:bg-blue-500 ' : 'bg-white transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-10 hover:bg-indigo-500 duration-100'"
        class="border-b  hover:cursor-pointer table_row ">
        <TableRowInform :each="prop?.each" />
        <td class="w-1 p-4 py-2 ">

            <div class="flex items-center">
                <label class="flex cursor-pointer items-center rounded-sm p-1" for="selected_row"
                    data-ripple-dark="true">
                    <input :id="prop.each.id" type="checkbox" v-model="checked" @change="checkboxCond"
                    class="checkbox checkbox-xs checkbox-primary"      
                    />
                    <div
                        class="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"
                            stroke="currentColor" stroke-width="1">
                            <path fill-rule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clip-rule="evenodd"></path>
                        </svg>
                    </div>
                </label>
            </div>

        </td>
        <th class="px-2 py-2  font-bold text-center">
            {{ prop?.index + 1 }}
        </th>

        <TableRow :each = "prop?.each" :table_headers="procurement_store.stf_table_headers" />

    </tr>
</template>

<script setup>

import { ref, watchEffect } from 'vue';
import TableRow from '../../../layouts/TableRow.vue';
import TableRowInform from '../../../layouts/TableRowInform.vue';
import ProcurementStore from '../../../store/store.procurement';

const procurement_store = ProcurementStore();

// Get Each Item from parent
const prop = defineProps(['each', 'index', 'checked_style']);

// Create an Emit for clicking checkbox
const emit = defineEmits(['addChecked', 'removeChecked']);

const checked = ref(false);

const checkboxCond = () => {
    if (checked.value === true) {
        emit('addChecked', prop?.each)
    }
    else {
        emit('removeChecked', prop?.each);
    }
}


watchEffect(() => {

    if (procurement_store.after_created) {
        checked.value = false;
    }

})


</script>

<style lang="scss" scoped></style>

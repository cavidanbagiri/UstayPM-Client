
<template>
    <tr :class="checked ? 'text-white  bg-blue-600 hover:bg-blue-500 ' :
        'bg-white hover:bg-blue-600 hover:text-white hover:duration-200'"
        class="border-b table_row hover:cursor-pointer">


        <TableRowInform :each="prop?.each">

            <!-- Return Material Slot -->
            <template #return_material>
                <span @click="returnMaterial" class="flex items-center py-2 text-gray-900 row_item">
                    <img class="mr-3 w-5 h-5" src="../../../assets/icons/return.png" alt="">
                    Return Material
                </span>
            </template>

        </TableRowInform>

        <td class="w-1 p-4 py-2 ">
            <div class="flex items-center">
                <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                <input id="checkbox-table-search-1" type="checkbox" v-model="checked" @change="checkboxCond"
                    class="checkbox checkbox-xs checkbox-primary" />
            </div>
        </td>
        <td class="px-2 py-3  text-center">
            {{ prop?.index + 1 }}
        </td>
        <td class="px-2 py-3  text-center">

            <span v-if="prop?.each?.type_name === 'Temporary'" class="relative flex h-3 w-3">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                <span class="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
            </span>

            <div v-if="prop?.each?.type_name === 'Daily Debit'">
                <span v-if="prop?.each?.type_name === 'Daily Debit'" class="relative flex h-3 w-3">
                    <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                    <span class="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                </span>

                <span v-else class="relative flex h-3 w-3">
                    <span
                        class="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-200 opacity-75"></span>
                    <span class="relative inline-flex rounded-full h-3 w-3 bg-red-300"></span>
                </span>
            </div>

            <div v-if="prop?.each?.type_name === 'Debit' ">
                <span v-if="prop?.each?.type_name === 'Debit' && prop?.each?.return_date" class="relative flex h-3 w-3">
                    <!-- <span>{{ prop?.each }}</span> -->
                    <span
                        class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span class="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>

                <span v-else class="relative flex h-3 w-3">
                    <span
                        class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-200 opacity-75"></span>
                    <span class="relative inline-flex rounded-full h-3 w-3 bg-green-300"></span>
                </span>
            </div>




        </td>

        <TableRow :each="prop?.each" :table_headers="warehouse_store.provided_data_headers" />

        <UpdateProvidedMaterial v-if="toggle_update_provide_material" @closeProvidedUpdateComp="closeProvidedUpdateComp" />

    </tr>
</template>

<script setup>

import { ref, watchEffect, reactive } from 'vue';
import TableRow from '../../../layouts/TableRow.vue';
import TableRowInform from '../../../layouts/TableRowInform.vue'
import UpdateProvidedMaterial from './UpdateProvidedMaterial.vue';

import WarehouseStore from '../../../store/store.warehouse';
// import UserStore from '../../../store/store.user_store';

const warehouse_store = WarehouseStore();
// const user_store = UserStore();

// Get Each Item from parent
const prop = defineProps(['each', 'index']);

// Create an Emit for clicking checkbox
const emit = defineEmits(['addChecked', 'removeChecked']);

// Toggle Update Return Component
const toggle_update_provide_material = ref(false);
const closeProvidedUpdateComp = () => {
    toggle_update_provide_material.value = false;
}

//  Row Selected
const checked = ref(false);
const checkboxCond = () => checked.value === true ? emit('addChecked', prop?.each) : emit('removeChecked', prop?.each);


// Return material from provided to warehouse
const returnMaterial = async () => {

    warehouse_store.return_checked_values.push(prop.each);

    toggle_update_provide_material.value = true;

    // if (user_store.user && user_store.user.departmentId === 3) {
    //     warehouse_store.return_checked_values.push(prop.each);
    //     await warehouse_store.returnMaterial(user_store.user.id)
    //         .then((respond) => {
    //             toast_condition.cond = true;
    //             toast_condition.message = 'Material Successfully Returned';
    //             setTimeout(() => {
    //                 toast_condition.cond = false;
    //             }, 1000)
    //         })
    //         .catch((err) => {
    //             console.log('return material from provide to warehouse error : ', err);
    //         })
    // }
    // else {
    //     // Import Show Toast and show Message Inside Of That Toast
    //     toast_condition.cond = true;
    //     toast_condition.message = 'Material Cant Returned';
    //     setTimeout(() => {
    //         toast_condition.cond = false;
    //     }, 1000)
    // }

}


// If Unselect Clicked, checked row will be false
watchEffect(() => {
    if (warehouse_store.after_provide) {
        checked.value = false;
    }
})

</script>

<style lang="scss" scoped>
.row_item {
    font-family: 'Figtree', sans-serif;
    font-weight: 400;
    font-size: 17px;
}

.row_item:hover {
    background-color: rgb(22, 233, 110);
    border-radius: 10px;
    padding-left: 5px;
    transition: 0.3s;
}</style>

<template>
    <!-- S/S -->
    <td scope="row" class="w-8 text-gray-900 whitespace-nowrap dark:text-white text-center table_row">
        <div class="flex justify-between items-center px-1">
            <span>{{ each.each_id }}</span>
            <span class="relative flex h-3 w-3">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                <span class="relative inline-flex rounded-full h-3 w-3 bg-orange-500"></span>
            </span>
        </div>
    </td>
    <!-- Material Type Selected -->
    <td scope="row" class="p-1   border text-gray-900 whitespace-nowrap dark:text-white table_row" style="">
        <!-- <input class="border outline-none  rounded-lg w-full h-full p-2" type="text" placeholder="Material Type..."> -->
        <select class="border border-red-500 outline-none  rounded-lg w-full h-full p-2 "
            v-model="each.material_type">
            <option disabled value="">Type</option>
            <option>Project</option>
            <option>Consumables</option>
            <option>Fixture</option>
        </select>
    </td>
    <!-- Material Name -->
    <td class="p-1   border text-gray-900 whitespace-nowrap dark:text-white ">
        <input class="border border-red-500 outline-none rounded-lg w-full h-full p-2 " type="text"
            placeholder="Material Name..." v-model=each.material_name>
    </td>
    <!-- Material Link -->
    <td class="p-1   border text-gray-900 whitespace-nowrap dark:text-white">
        <input class="border outline-none  rounded-lg w-full h-full p-2 " type="text"
            placeholder="Material Link..." v-model=each.link>
    </td>
    <!-- Material Count -->
    <td class="p-1 border">
        <input class="border border-red-500 outline-none  rounded-lg w-full h-full p-2 " type="number" min="0.001"
            placeholder="Count..." v-model=each.material_amount>
    </td>
    <!-- Material Unit -->
    <td class="p-1 border" style=";">
        <!-- <input class="border outline-none  rounded-lg w-full h-full p-2 " type="text" placeholder="Unit..."> -->
        <select class="border border-red-500 outline-none  rounded-lg w-full h-full p-2 " v-model="each.material_unit">
            <option disabled value="">Unit</option>
            <option>Adet</option>
            <option>M2</option>
            <option>M3</option>
            <option>Ton</option>
            <option>Kg</option>
        </select>
    </td>
    <!-- Area Field -->
    <td class="p-1 border">
        <!-- <input class="border outline-none  rounded-lg w-full h-full p-2" type="text" placeholder="Field..."> -->
        <select class="border border-red-500 outline-none  rounded-lg w-full h-full p-2 "
            v-model="each.fieldId">
            <option disabled value="">Field</option>
            <option v-for="i in stf_store.GETFIELDSNAME" :value="i.id">{{ i.field_name }}</option>
        </select>
    </td>
    
    <!-- Comment Section -->
    <td class="p-1 border" style=";">
        <input class="border outline-none  rounded-lg w-full h-full p-2 " type="text" placeholder="Comment..."
            v-model=each.comment>
    </td>
</template>

<script setup>

import { reactive, watchEffect } from 'vue';

import STFStore from '../../../store/store.stf';
const stf_store = STFStore();

const prop = defineProps(['id', 'order_list']);

const each = reactive({
    each_id: prop?.id,
    material_type: '',
    material_name: '',
    material_amount: 0,
    material_unit: '',
    link: '',
    fieldId: 0,
    comment: '',
});

watchEffect(() => {
    if (stf_store.order_list?.length >= 1) {
        let check = false;
        for (let i of stf_store.order_list) {
            if (i.each_id === each.each_id) {
                check = true;
                break;
            }
        }
        if (!check && (each.material_name!=='' || each.material_type!=='') ) {
        // if (!check && (each.material_name!=='') ) {
            stf_store.order_list.push(each);
        }
    }
    else {
        stf_store.order_list.push(each)
    }
    if (stf_store.after_created) {
        for (let i = 0; i < stf_store.order_list.length; i++) {
            each.each_id = 0;
            each.material_type = '';
            each.material_name = '';
            each.link = '';
            each.material_amount = 0;
            each.material_unit = '';
            each.fieldId = 0;
            stf_store.order_list.splice(i, 1);
        }
    }
})

</script>

<style></style>
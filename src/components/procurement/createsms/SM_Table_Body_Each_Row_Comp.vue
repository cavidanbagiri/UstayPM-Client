<template>
    <tr 
        class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 table_row">
        <td class="w-1 p-4 py-2 ">
            <div class="flex items-center">
                <input id="checkbox-table-search-1" type="checkbox" @change="checkboxCond"
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
            </div>
        </td>
        <th class="px-2 py-2   text-center">
            {{ prop?.index + 1  }}
        </th>
        <th class="px-2 py-2   border text-center">
            <span class="bg-orange-50 text-orange-400 p-1 rounded-full ">{{ prop?.each?.stf_num }}</span>
        </th>
        <th class="px-2 py-2   border  text-center">
            <DateFormat :time="prop?.each?.created_at" />
        </th>
        <th class="px-2 py-2   border">
            <span>{{ prop?.each?.material_name }}</span>
        </th>
        <!-- User Import Sm Material Name -->
        <th class="px-2 py-2   border">
            <!-- <span>{{ prop?.each?.material_name }}</span> -->
            <input class="border outline-none font-sans border-red-400 rounded-lg w-full h-full p-2 text-xs" type="text" placeholder="Sm Material Name"
            v-model="each.sm_material_name">
        </th>
        <th class="px-2 py-2   border text-center">
            <span>{{ prop?.each?.material_amount }}</span>
        </th>
        <!-- User Import SM Material Count -->
        <th class="px-2 py-2   border text-center">
            <input class="border outline-none font-sans border-red-400 rounded-lg w-full h-full p-2 text-xs" type="number" placeholder="Price"
            v-model="each.sm_material_amount">
        </th>
        <th class="px-2 py-2   border text-center">
            <span>{{ prop?.each?.material_unit }}</span>
        </th>
        <th class="px-2 py-2   border text-center">
            <select class="border border-red-400 outline-none font-sans rounded-lg w-full h-full p-2 " v-model="each.sm_material_unit">
            <option disabled value="">Unit</option>
            <option>Adet</option>
            <option>M2</option>
            <option>M3</option>
            <option>Ton</option>
            <option>Kg</option>
        </select>
        </th>
        <th class="px-2 py-2   border text-center">
            <input class="border outline-none font-sans border-red-400 rounded-lg w-full h-full p-2 text-xs" type="number" min="0.001" placeholder="Price"
            v-model="each.price">
        </th>
        <th class="px-2 py-2   border text-center">
            <span>{{ each.total }}</span>
        </th>
        <th class="px-2 py-2   border  text-center">
            <select class="border outline-none font-sans rounded-lg w-full h-full p-2 text-xs cursor-pointer" v-model="each.currency">
            <option v-for="i in currency_list">{{ i }}</option>
        </select>
        </th>

        

    </tr>
</template>

<script setup>

import { reactive, watchEffect, computed } from 'vue';

import ProcurementStore from '../../../store/store.procurement';
const procurement_store = ProcurementStore();

const currency_list = ['₽ - RUR','$ - USD','₺ - TL','€ - EURO','₼ - MANAT']

// Create Each Row For Taking Value and sending To Server
const each = reactive({
    // ProjectModelId: prop?.each?.ProjectModelId,
    // DepartmentModelId: prop?.each?.DepartmentModelId,
    stfId: prop?.each?.stf_id,
    // sms_amount:prop?.each?.count,
    // left_over_amount:prop?.each?.count,
    // left_over_amount:this?.sm_material_amount,
    price : 0,
    sm_material_name : prop?.each?.material_name,
    sm_material_amount : prop?.each?.count,
    sm_material_unit : prop?.each?.unit,
    total : 0,
    currency : '₽ - RUR',
})

// Create a prop for getting a value from parent
const prop = defineProps(['each', 'index']);


each.total=computed(()=>{
    return (each.price * each?.sm_material_amount).toFixed(2)
})

watchEffect(()=>{
    procurement_store.creating_STF_datas.push(each);
    // each.total = (each.price * prop?.each?.count).toFixed(2)
})

</script>

<style lang="scss" scoped>

</style>
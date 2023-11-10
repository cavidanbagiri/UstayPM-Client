
<template>
    <tr class="bg-white border-b hover:bg-gray-50 table_row ">
        <td class="w-1 p-4 py-2 ">
            <div class="flex items-center">
                <input id="checkbox-table-search-1" type="checkbox"
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
            </div>
        </td>
        <td class="px-2 py-2  text-center">
            {{ prop?.index + 1 }}
        </td>
        <td class="px-2  text-start border-y ">
            <div class=" bg-orange-100 text-orange-500 py-1 px-2 rounded-xl ">
                <span>{{ prop?.each_item?.stf_num }}</span>
            </div>
        </td>
        <td class="px-2 py-2   border  text-center">
            <!-- <span>{{ prop?.each_item?.created_at }}</span> -->
            <DateFormat :time="prop?.each_item?.created_at" />
        </td>
        <td class="px-2  text-start border-y ">
            <div class=" bg-red-100 text-red-500 py-1 px-2 rounded-xl ">
                {{ prop?.each_item?.sm_num }}
            </div>
        </td>
        <td class="px-2  text-start border-y-y ">
            <input class="border-y outline-none font-sans rounded-lg w-full h-full p-1 text-xs" type="text"
                placeholder="Count..." v-model="each_row_data.entering_delivery_amount">
        </td>
        <td class="px-2  text-start border-y-y ">
            <select class="border-y outline-none font-sans rounded-lg w-full h-full p-1 text-xs"
                v-model="each_row_data.delivery_unit">
                <option disabled value="">Unit</option>
                <option>Adet</option>
                <option>M2</option>
                <option>M3</option>
                <option>Ton</option>
                <option>Kg</option>
            </select>
        </td>
        <td class="px-2  text-center border-y ">
            <input id="checkbox-table-search-1" type="checkbox" v-model="each_row_data.certificate"
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500  focus:ring-2 ">
        </td>
        <td class="px-2  text-center border-y ">
            <input id="checkbox-table-search-1" type="checkbox" v-model="each_row_data.passport"
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500  focus:ring-2 ">
        </td>
        <td class="px-2 py-2   border-y">
            {{ prop?.each_item?.sm_material_name }}
        </td>
        <td class="px-2 py-2   border-y text-start">
            {{ prop?.each_item?.amount }}
        </td>
        <td class="px-2 py-2   border-y text-center">
            {{ prop?.each_item?.unit }}
        </td>
        <td class="px-2 py-2   border-y text-center">
            {{ prop?.each_item?.price }}
        </td>
        <td class="px-2 py-2   border-y text-center">
            {{ prop?.each_item?.total }}
        </td>
        <td class="px-2 py-2   border-y text-center">
            {{ prop?.each_item?.currency }}
        </td>
        <td class="px-2 py-2   border-y text-start">
            {{ prop?.each_item?.vendor_name }}
        </td>
        <td class="px-2 py-2    border-y text-center">
            {{ prop?.each_item?.orderer }}
        </td>
        <td class="px-2 py-2    border text-center">
            {{ prop?.each_item?.supplier }}
        </td>
    </tr>
</template>

<script setup>

import { reactive, watchEffect, computed } from 'vue';
import DateFormat from '../../../layouts/DateFormat.vue';
import WarehouseStore from '../../../store/store.warehouse';
const warehouse_store = WarehouseStore();

// Get Each Item from parent
const prop = defineProps(['each_item', 'index', 'table_data']);

const each_row_data = reactive({
    sm_id: prop?.each_item.sm_id,
    entering_delivery_amount: prop?.each_item?.left_over, // 1000
    delivery_amount: prop?.each_item?.left_over, // 100
    delivery_unit: prop?.each_item?.sm_material_unit,
    certificate: false,
    passport: false
})



watchEffect(() => {
    if (each_row_data?.entering_delivery_amount < ((each_row_data?.delivery_amount) + (each_row_data?.delivery_amount * 10) / 100)) {
        if (warehouse_store.processing_checked_values.length > prop.table_data.length) {
            prop.table_data.push(each_row_data);
        }
        warehouse_store.accepted_condition = true;
    }
    else {
        alert("u cant enter this value because bigger than %10")
        warehouse_store.accepted_condition = false;
    }

})

</script>

<style lang="scss" scoped></style>


<template>
    <tr class="bg-white border-b hover:bg-gray-50 table_row ">
        <!-- Checkbox section -->
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
            <div class="   py-1 px-2 rounded-xl ">
                <span>{{ prop?.each_item?.material_name }}</span>
            </div>
        </td>
        <td class="px-2  text-start border-y ">
            <div class="   py-1 px-2 rounded-xl ">
                <span>{{ prop?.each_item?.stock }}</span>
            </div>
        </td>
        <td class="px-2  text-start border-y ">
            <div class="   py-1 px-2 rounded-xl ">
                <span>{{ prop?.each_item?.unit }}</span>
            </div>
        </td>
        <td class="px-2  text-start border-y ">
            <div class=" py-1 px-2 rounded-xl ">
                <select name="" id="" v-model="entering_data.type" class="border w-full p-1 rounded-md outline-none ">
                    <option v-for="i in types" :value="i.id">{{ i.type_name }}</option>
                </select>
            </div>
        </td>
        <td class="px-2  text-start border-y ">
            <div class=" py-1 px-2 rounded-xl ">
                <input class="border w-full p-1 rounded-md outline-none" type="num" name="" placeholder="Enter Amount"
                    v-model="entering_data.provide_amount">
            </div>
        </td>
        <td class="px-2  text-start border-y ">
            <div class=" py-1 px-2 rounded-xl ">
                <input class="border w-full p-1 rounded-md outline-none" type="text" name="" placeholder="Serial NO"
                    v-model="entering_data.serial_no">
            </div>
        </td>
        <td class="px-2  text-start border-y ">
            <div class=" py-1 px-2 rounded-xl ">
                <input class="border w-full p-1 rounded-md outline-none" type="text" name="" placeholder="Unique ID"
                    v-model="entering_data.unique_id">
            </div>
        </td>
        <td class="px-2  text-start border-y ">
            <div class=" py-1 px-2 rounded-xl ">
                <input class="border w-full p-1 rounded-md outline-none" type="text" name="" placeholder="Name Surname"
                    v-model="entering_data.provide_user">
            </div>
        </td>
        <td class="px-2  text-start border-y ">
            <div class=" py-1 px-2 rounded-xl ">
                <input class="border w-full p-1 rounded-md outline-none" type="text" name="" placeholder="Card Number"
                    v-model="entering_data.provide_user_card_number">
            </div>
        </td>
        <td class="px-2  text-start border-y ">
            <div class=" py-1 px-2 rounded-xl ">
                <select name="" id="" v-model="entering_data.provide_department"
                    class="border w-full p-1 rounded-md outline-none ">
                    <option v-for="i in departments" :value="i.id">{{ i.department_name }}</option>
                </select>
            </div>
        </td>

    </tr>
</template>

<script setup>

import { reactive, watchEffect, ref, createElementBlock } from 'vue';
import WarehouseStore from '../../../store/store.warehouse';
const warehouse_store = WarehouseStore();
const prop = defineProps(['each_item', 'index', 'entering_rows', 'store']);

const entering_data = reactive({
    warehouse_id: prop?.each_item.warehouse_id,
    department_id: prop?.each_item.department_id,
    stock: prop?.each_item?.stock,
    type: '',
    provide_amount: 0,
    serial_no: '',
    unique_id: '',
    provide_user: '',
    provide_user_card_number: '',
    provide_department: ''
});

const types = ref([]);
const departments = ref([]);

watchEffect(() => {
    console.log('entering data : ', entering_data);
    if (types.value.length === 0) {
        types.value = prop?.store?.delivery_types
    }
    if (departments.value.length === 0) {
        departments.value = prop?.store?.departments
    }
    if( entering_data.provide_amount > entering_data.stock){
        warehouse_store.warehouse_data_stock_cond = false;
        alert(`Stock ${entering_data.stock}, Provide Amount ${entering_data.provide_amount}.`)
    }
    else{
        warehouse_store.warehouse_data_stock_cond = true;
    }
    if (prop.entering_rows?.length === 0) {
        prop.entering_rows.push(entering_data);
    }
    else {
        let check = true
        for (let i of prop.entering_rows) {
            if (entering_data.warehouse_id === i.warehouse_id) {
                check = false;
            }
        }
        if (check) {
            prop.entering_rows.push(entering_data);
        }
    }
})

</script>

<style lang="scss" scoped></style>
<template>
    <tr v-if="!prop.each?.canceled_id" :class="checked_style ? 'text-white bg-blue-600  hover:bg-blue-500 ' :
        'bg-white  hover:bg-blue-600 hover:text-white hover:duration-200 '"
        class="border-b  hover:cursor-pointer table_row">

        <!-- STF Complete Section Inside Of TableRowInform -->
        <TableRowInform :each="prop?.each">
            <!-- Check STF Complete Or Not Section -->
            <template #stf_complete>
                <div v-if="prop.each?.canceled_id" class="flex text-lg bg-red-400 text-white rounded-md py-1 mb-1">
                    <span class="text-center  w-full">
                        STF Canceled
                    </span>
                </div>
                <div v-else class="flex font-bold w-full text-[1.0rem] ">
                    <span v-if="prop?.each?.completed" class="px-2 py-2  text-green-500 bg-green-100 w-full rounded-lg">
                        Completed : {{ prop?.each?.completed }}
                    </span>
                    <span v-else class="px-2 py-2 text-red-500 bg-red-100 w-full rounded-lg">
                        Completed : {{ prop?.each?.completed }}
                    </span>
                </div>
            </template>
        </TableRowInform>

        <!-- Checkbox Row -->
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

        <!-- Starred Section -->
        <th class="px-2 py-2 font-medium text-center ">
            <span v-if="!starred_image" class="flex items-center justify-center"><img @click="toggleStar(prop.each)" class="w-4 " src="../../../assets/emptystar.png" alt=""></span>
            <span v-if="starred_image" class="flex items-center justify-center"><img @click="toggleStar(prop.each)" class="w-4 " src="../../../assets/fullstar.png" alt=""></span>
        </th>

        <!-- The Abother Rows -->
        <TableRow :each="prop?.each" :table_headers="stf_store.all_stf_headers" />

    </tr>
    <tr v-else :class="checked_style ? 'text-white bg-blue-600  hover:bg-blue-500 ' :
        'bg-red-200  hover:bg-blue-600 hover:text-white hover:duration-200 '"
        class="border-b  hover:cursor-pointer table_row">

        <!-- STF Complete Section Inside Of TableRowInform -->
        <TableRowInform :each="prop?.each">
            <!-- Check STF Complete Or Not Section -->
            <template #stf_complete>
                <div v-if="prop.each?.canceled_id" class="flex text-lg bg-red-400 text-white rounded-md py-1 mb-1">
                    <span class="text-center  w-full">
                        STF Canceled
                    </span>
                </div>
                <div v-else class="flex font-bold w-full text-[1.0rem] ">
                    <span v-if="prop?.each?.completed" class="px-2 py-2  text-green-500 bg-green-100 w-full rounded-lg">
                        Completed : {{ prop?.each?.completed }}
                    </span>
                    <span v-else class="px-2 py-2 text-red-500 bg-red-100 w-full rounded-lg">
                        Completed : {{ prop?.each?.completed }}
                    </span>
                </div>
            </template>
        </TableRowInform>
        
        <!-- Checked Rows -->
        <td class="w-1 p-4 py-2 ">
            <div class="flex items-center">
                <label class=" flex cursor-pointer items-center rounded-sm p-1" for="selected_row" data-ripple-dark="true">
                    <input :id="prop.each.id" type="checkbox" @change="checkedRows(prop.each.id)"
                        class="checkbox checkbox-xs checkbox-primary" />
                </label>
            </div>
        </td>

        <!-- S/No Section -->
        <th class="px-2 py-2 font-medium text-center">{{ prop.index + 1 }}</th>
        
        <!-- Starred Section -->
        <th class="px-2 py-2 font-medium text-center ">
            <span class="flex items-center justify-center"><img class="w-4 " :src="starred_image" alt=""></span>
        </th>

        <!-- The Abother Rows -->
        <TableRow :each="prop?.each" :table_headers="stf_store.all_stf_headers" />
        
    </tr>
</template>

<script setup>

import { ref } from 'vue';

import TableRow from '../../../layouts/TableRow.vue';
import TableRowInform from '../../../layouts/TableRowInform.vue';

import STFStore from '../../../store/store.stf.js';
import IndexStore from '../../../store/store.index.js';
const stf_store = STFStore();
const index_store = IndexStore();

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

// Check Starred Material Or Not according to each star image
const starred_image = ref(false);

// Toggle Star
const toggleStar = async (data) => {
    await index_store.toggleStar(data)
    .then((respond)=>{
        console.log(respond?.data);
        if(respond?.data === 'Row Starred'){
            console.log('inside if');
            // starred_image.value = 'fullstar.png'
            starred_image.value = true;
        }
        else{
            console.log('inside else');
            // starred_image.value = 'emptystar.png'
            starred_image.value = false;
        }
    })
}

</script>

<style lang="scss" scoped></style>
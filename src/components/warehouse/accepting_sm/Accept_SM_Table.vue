

<template>
    <div class="mt-1 shadow-md sm:rounded-lg w-screen overflow-x-scroll border-2 ">

        <!-- Accept Button -->
        <!-- <button @click="acceptedByWarehouse" v-if="warehouse_store.processing_checked_values?.length"  -->
        <button v-show = "btn_toggle" @click="acceptedByWarehouse" v-if="warehouse_store.processing_checked_values?.length > 0"
            :disabled="!warehouse_store.accepted_condition" class="p-2 px-3 text-white font-weight rounded-lg my-1"
            :class="warehouse_store?.accepted_condition ? 'bg-red-600 ' : 'bg-red-200'">
            Accept
        </button>

        <button v-show = "!btn_toggle"  class="p-2 px-3 text-white font-weight rounded-lg my-1 bg-red-600">
        <span class="loading loading-spinner"></span>
            Loading
        </button>

        <!-- Accepting Data Inform -->
        <Accepting_data :sms_data="sms_data" />


        <!-- Table -->
        <table class="text-xs text-left text-gray-800 dark:text-gray-400 w-full">

            <Get_SM_Header_Table />
            <Get_SM_Body_Table :table_data="table_data" />

        </table>

        <Toast :cond="warehouse_store.after_created" messages="SM Successfuly Received" />

    </div>
</template>

<script setup>

import { reactive, ref } from 'vue';
import Get_SM_Header_Table from './Get_SM_Header_Table.vue';
import Get_SM_Body_Table from './Get_SM_Body_Table.vue';
import Accepting_data from './Accepting_data.vue';

import WarehouseStore from '../../../store/store.warehouse';
import UserStore from '../../../store/store.user_store';
import Toast from '../../design/Toast.vue';
const warehouse_store = WarehouseStore();
const user_store = UserStore();

const btn_toggle = ref(true);

// Accepting Data Information
const sms_data = reactive({
    doc_date: '',
    providing_date: '',
    doc_number: ''
});
// Accepting Material Data
const table_data = ref([]);

// Checked Values;
const acceptedByWarehouse = async () => {
    btn_toggle.value = false;
    let check = true;
    for( let [key, value] of Object.entries(sms_data) ){
        value = value.toString().trim();
        if(key === "doc_number" && value === '' ){
            check = false;
            alert("Doc Number Cant Be Empty")
            break;
        }
        if( key === 'providing_date' && value === '' ){
            check = false;
            alert("Provind Date Cant Be Empty");
            break;
        }
        if( key === 'doc_date' && value === '' ){
            check = false;
            alert("Doc Date Cant Be Empty");
            break;
        }
    }
    for(let i = 0 ; i < table_data.value.length > 0; i++){
        if(!table_data.value[i].delivery_unit){
            check = false;
            alert(`${i+1} Row, Delivery Unit Not Selected`)
            break;
        }
    }
    if (check) {
        const data = {
            user: user_store.user,
            checked_values: warehouse_store.processing_checked_values,
            sms_data: sms_data,
            table_data: table_data.value
        }
        await warehouse_store.acceptWaitingSM(data)
            .then((respond) => {
                warehouse_store.after_created = true;
                warehouse_store.processing_checked_values = warehouse_store.processing_checked_values.filter((item) => item.id === -1)
                setTimeout(async () => {
                    await warehouse_store.getProcessingSMS();
                    btn_toggle.value = true;
                    sms_data.doc_date = '';
                    sms_data.providing_date = '';
                    sms_data.doc_number = '';
                    warehouse_store.tab_num = 0;
                }, 1000)
                setTimeout(() => {
                    warehouse_store.after_created = false;
                },2000)
            }).catch((err) => {
                console.log('Received Material Error : ', err);
            })
    }
    else{
        btn_toggle.value = true;
    }

}


</script>

<style lang="scss" scoped></style>
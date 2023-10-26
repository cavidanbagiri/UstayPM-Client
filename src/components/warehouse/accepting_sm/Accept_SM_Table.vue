

<template>
    <div class="mt-1 shadow-md sm:rounded-lg w-screen overflow-x-scroll border-2 ">

        <Accept_Received_Data_Message />

        <!-- Accept Button -->
        <!-- <button @click="acceptedByWarehouse" v-if="warehouse_store.processing_checked_values?.length"  -->
        <button @click="acceptedByWarehouse" v-if="warehouse_store.processing_checked_values?.length > 0"
            :disabled="!warehouse_store.accepted_condition" class="p-2 px-3 text-white font-weight rounded-lg my-1"
            :class="warehouse_store?.accepted_condition ? 'bg-red-600 ' : 'bg-red-200'">
            Accept
        </button>

        <!-- Accepting Data Inform -->
        <Accepting_data :sms_data="sms_data" />


        <!-- Table -->
        <table class="text-xs text-left text-gray-800 dark:text-gray-400 w-full">

            <Get_SM_Header_Table />
            <Get_SM_Body_Table :table_data="table_data" />

        </table>

    </div>
</template>

<script setup>

import { reactive, ref } from 'vue';
import Get_SM_Header_Table from './Get_SM_Header_Table.vue';
import Get_SM_Body_Table from './Get_SM_Body_Table.vue';
import Accepting_data from './Accepting_data.vue';

import WarehouseStore from '../../../store/store.warehouse';
import UserStore from '../../../store/store.user_store';
import Accept_Received_Data_Message from './Accept_Received_Data_Message.vue';
const warehouse_store = WarehouseStore();
const user_store = UserStore();

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

    let check = true;
    console.log('l am working');
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

    if (check) {
        const data = {
            user: user_store.user,
            checked_values: warehouse_store.processing_checked_values,
            sms_data: sms_data,
            table_data: table_data.value
        }
        await warehouse_store.acceptWaitingSM(data)
            .then((respond) => {
                warehouse_store.receive_success_show_message = true
                warehouse_store.after_created = true;
                warehouse_store.processing_checked_values = warehouse_store.processing_checked_values.filter((item) => item.id === -1)
                setTimeout(async () => {
                    warehouse_store.receive_success_show_message = false;
                    await warehouse_store.getProcessingSMS();
                    sms_data.doc_date = '';
                    sms_data.providing_date = '';
                    sms_data.doc_number = '';
                    warehouse_store.tab_num = 0;
                }, 1000)
                setTimeout(() => {
                    warehouse_store.after_created = false;
                })
            }).catch((err) => {
                console.log('Received Material Error : ', err);
            })
    }

}


</script>

<style lang="scss" scoped></style>
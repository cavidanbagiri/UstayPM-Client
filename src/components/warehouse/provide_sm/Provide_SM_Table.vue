
<template>
    <div class="mt-1 shadow-md sm:rounded-lg w-screen overflow-x-scroll p-2">

        <!-- <Accept_Received_Data_Message /> -->

        <!-- Accept Button -->
        <button @click="provideSM" v-if="warehouse_store.warehouse_data_checked_values?.length"
            class="bg-red-600 p-2 px-3 text-white font-weight rounded-lg my-1">
            Provide
        </button>

        <!-- Accepting Data Inform -->
        <!-- <Accepting_data :sms_data="sms_data" /> -->


        <!-- Table -->
        <table class="text-xs text-left text-gray-800 dark:text-gray-400 w-full">

            <Provide_SM_Table_Header/>
            <Provide_SM_Table_Body :entering_rows="entering_rows" />

        </table>

    </div>
</template>

<script setup>

import { ref, onMounted } from 'vue';

import Provide_SM_Table_Body from './Provide_SM_Table_Body.vue';
import Provide_SM_Table_Header from './Provide_SM_Table_Header.vue';

import UserStore from '../../../store/store.user_store';
import WarehouseStore from '../../../store/store.warehouse';
const user_store = UserStore(); 
const warehouse_store = WarehouseStore();

const entering_rows = ref([]);

onMounted(async()=>{
    await warehouse_store.fetchDepartments();
    await warehouse_store.fetchWarehouseDeliveryTypes();
})

// Provide Sm Call Backend
const provideSM = async () => {
    const sending_data = {};
    if (user_store.user !== null ){
        sending_data.user = user_store.user.id;
        sending_data.data = entering_rows.value;
        await warehouse_store.provideSM(sending_data)
        .then((respond)=>{
            // warehouse_store.after_provide = true;
            warehouse_store.warehouse_data_checked_values = warehouse_store.warehouse_data_checked_values.filter((item) => item.id === -1);
            setTimeout(()=>{
                warehouse_store.tab_num=1;
                // warehouse_store.after_provide = false;
            },1000)
        })
    }
}

</script>

<style lang="scss" scoped></style>
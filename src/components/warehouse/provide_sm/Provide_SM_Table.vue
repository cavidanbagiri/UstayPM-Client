
<template>
    <div class="mt-1 shadow-md sm:rounded-lg w-screen overflow-x-scroll p-2">

        
        <!-- Accepting Data Inform -->
        <!-- <Accepting_data :sms_data="sms_data" /> -->
        <h1 class=" text-center text-3xl py-4" 
        style="font-family: 'Poppins';">
        Material Provide Form</h1>

        <!-- Table -->
        <table class="text-xs text-left text-gray-800 dark:text-gray-400 w-full">

            <Provide_SM_Table_Header/>
            <Provide_SM_Table_Body :entering_rows="entering_rows" />

        </table>

        <!-- <Accept_Received_Data_Message /> -->

        <!-- Accept Button -->
        <button v-show="btn_toggle" @click="provideSM" v-if="warehouse_store.return_checked_values?.length"
            :disabled="!warehouse_store.warehouse_data_stock_cond"
            class="p-2 px-3 text-white font-weight rounded-lg my-1"
            :class="warehouse_store.warehouse_data_stock_cond ? 'bg-red-600 cursor-pointer' : 'bg-red-200 cursor-default' "
            >
            Provide
        </button>
        <button v-show="!btn_toggle" 
            class="p-2 px-3 text-white font-weight rounded-lg my-1 bg-red-600"
            >
            <span class="loading loading-spinner"></span>
            Loading
        </button>

        <Toast :cond="warehouse_store.after_provide" messages="Material Successfully Provided" />

    </div>
</template>

<script setup>

import { ref, onMounted } from 'vue';

import Provide_SM_Table_Body from './Provide_SM_Table_Body.vue';
import Provide_SM_Table_Header from './Provide_SM_Table_Header.vue';
import Toast from '../../design/Toast.vue';

import UserStore from '../../../store/store.user';
import WarehouseStore from '../../../store/store.warehouse';
const user_store = UserStore(); 
const warehouse_store = WarehouseStore();

const btn_toggle = ref(true);

const entering_rows = ref([]);

onMounted(async()=>{
    await warehouse_store.fetchDepartments();
    await warehouse_store.fetchWarehouseDeliveryTypes();
})

// Provide Sm Call Backend
const provideSM = async () => {
    btn_toggle.value = false;
    const sending_data = {};
    if (user_store.user !== null ){
        sending_data.user = user_store.user.id;
        let check = true;
        for(let i = 0 ; i < entering_rows.value.length; i++){
            if(entering_rows?.value[i]?.type === ''){
                check = false;
                alert(`${i+1} Row, Type Is Not Selected`);
                break;
            }
            if(entering_rows?.value[i]?.provide_amount <=0 ){
                check = false;
                alert(`${i+1} Row, Provided Amount Is Not True`);
                break
            }
            let provided_user = entering_rows?.value[i]?.provide_user.toString().trim();
            if(provided_user === '' ){
                check = false;
                alert(`${i+1} Row, Provided User Name Is Not Included`);
                break;
            }
            let provided_card_number = entering_rows?.value[i]?.provide_user_card_number.toString().trim();
            if(provided_card_number === '' ){
                check = false;
                alert(`${i+1} Row, Provided User Card Number Is Not Included`);
                break;
            }
            if(entering_rows?.value[i]?.provide_department === ''){
                check = false;
                alert(`${i+1} Row, Department Is Not Selected`);
                break;
            }
        }

        if(check){
            sending_data.data = entering_rows.value;
            await warehouse_store.provideSM(sending_data)
            .then((respond)=>{
                warehouse_store.after_provide = true;
                setTimeout(()=>{
                    btn_toggle.value = true;
                    warehouse_store.return_checked_values = warehouse_store.return_checked_values.filter((item) => item.id === -1);
                    warehouse_store.tab_num=1;
                },1000)
                setTimeout(()=>{
                    entering_rows.value = [];
                    warehouse_store.after_provide = false;
                },2000)
            })
        }
        else{
            btn_toggle.value = true;
        }

    }
}

</script>

<style lang="scss" scoped></style>
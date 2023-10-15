
<template>
    <Get_SM_Body_Table_Each_Row_Comp v-for="(each, index) in warehouse_store.processing_sms" :each="each" :index="index"
        @addChecked="addChecked" @removeChecked="removeChecked" />
</template>

<script setup>

import { ref, watchEffect } from 'vue';
import Get_SM_Body_Table_Each_Row_Comp from './Get_Sm_Body_Table_Each_Row_Comp.vue'
import WarehouseStore from '../../../store/store.warehouse'; 
const warehouse_store = WarehouseStore();


const addChecked = (item) => {
    warehouse_store.processing_checked_values.push(item);
}

// Remove Operation FIx Needed
const removeChecked = (selected_item) => {
    warehouse_store.processing_checked_values = warehouse_store.processing_checked_values.filter((each) => each.sm_id !== selected_item.sm_id)

    for(let i=0; i<warehouse_store.processing_checked_values.length; i ++){
        if(warehouse_store.processing_checked_values[i].stf_id===selected_item.stf_id){
            warehouse_store.processing_checked_values.splice(i,1);
        }
    }

}

watchEffect(() => {
    const check = ref(false);
    // for (let i = 0; i < warehouse_store.processing_checked_values?.length; i++) {
    //     if (warehouse_store.processing_checked_values[i].situation === 'Received') {
    //         check.value = true
    //         break;
    //     }
    // }
    if (warehouse_store.processing_checked_values?.length > 1) {
        for (let i = 0; i < warehouse_store.processing_checked_values?.length - 1; i++) {
            if (warehouse_store.processing_checked_values[i].stf_num !== warehouse_store.processing_checked_values[i + 1].stf_num) {
                check.value = true
                break;
            }
        }
    }
    check.value ? warehouse_store.toggle_accept_sm = true : warehouse_store.toggle_accept_sm = false
})


</script>

<style lang="scss" scoped></style>
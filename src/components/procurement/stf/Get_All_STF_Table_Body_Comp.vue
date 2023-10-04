<template>
    <tbody class="text-gray-500">
        
        <Get_All_STF_Table_Body_Each_Row_Comp 
        v-for="(each, index) in procurement_store.all_stf"
        :each=each :index = index 
        @addChecked='addChecked' @removeChecked='removeChecked'
        />

    </tbody>
</template>

<script setup>

import { watchEffect, ref } from 'vue';
import Get_All_STF_Table_Body_Each_Row_Comp from './Get_All_STF_Table_Body_Each_Row_Comp.vue';
import ProcuremntStore from '../../../store/store.procurement.js';
const procurement_store = ProcuremntStore();


const addChecked = (item) => {
    procurement_store.checked_values.push(item);
    console.log('procurement checked values : ', procurement_store.checked_values);
}

const removeChecked = (selected_item) => {
    for(let i=0; i<procurement_store.checked_values.length; i ++){
        if(procurement_store.checked_values[i].stf_id===selected_item.stf_id){
            procurement_store.checked_values.splice(i,1);
        }
    }
    console.log('procurement checked values : ', procurement_store.checked_values);
}


watchEffect(()=>{
    const check = ref(false);
    // for(let i=0; i<procurement_store.checked_values?.length; i ++){
    //     if(procurement_store.checked_values[i].situation === 'Processing' || procurement_store.checked_values[i].situation === 'Received' ){
    //         check.value = true
    //         break;
    //     }
    // }
    // if(procurement_store.checked_values?.length>1){
    //     for(let i = 0 ; i < procurement_store.checked_values?.length - 1; i++ ){
    //         if( procurement_store.checked_values[i].stf_num !== procurement_store.checked_values[i+1].stf_num ){
    //             check.value = true
    //             break;
    //         }
    //     }
    // }
    check.value ? procurement_store.toggle_createsm = true : procurement_store.toggle_createsm = false  
})

</script>

<style lang="scss" scoped></style>
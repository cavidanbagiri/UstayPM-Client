
<template>
    <div class="flex items-center justify-end mt-10">
        <button v-if="btn_toggle" type="button" @click="createSTF" class="text-white bg-gradient-to-r bg-blue-600 hover:bg-blue-500 hover:shadow-xl
              font-medium rounded-lg text-md px-4 py-2 text-center mr-2 mb-2">
            <i class="fa-solid fa-plus"></i>
            Create</button>
        <button v-else type="button" class="text-white bg-gradient-to-r bg-blue-600 hover:bg-blue-500 hover:shadow-xl
              font-medium rounded-lg text-md px-4 py-2 text-center mr-2 mb-2">
            <span class="loading loading-spinner"></span>
            Loading</button>
    </div>
</template>

<script setup>

import { ref } from 'vue';
import STFStore from '../../../store/store.stf';
import UserStore from '../../../store/store.user_store';

const stf_store = STFStore();

const user_store = UserStore();

// Define Prop For Getting All Rows Values
const prop = defineProps(['row_size']);

// Set Row Size 0 after creating mtf
const emit = defineEmits(['setRowSize']);

const btn_toggle = ref(true);

const createSTF = async () => {
    btn_toggle.value = false;
    if (stf_store.order_list.length === 0) {
        alert('Must Create at least 1 data');
    }
    if (prop.row_size === 0) {
        alert('Must Create at least 1 data');
    }
    else {
        let check = true;
        // Check All Of Orders True Or Not
        for (let i = 0; i < prop.row_size; i++) {

            // Check If material type and material name is not empty
            if (stf_store.order_list[i]?.material_name === '') {
                check = false;
                alert(`${i + 1} Row Material Name is Empty`)
                break;
            }
            else if (stf_store.order_list[i]?.material_type === '' ) {
                check = false;
                alert(`${i + 1} Row Material Type Cant Be An Empty`)
                break;
            }
            else if (stf_store.order_list[i]?.material_amount <= 0) {
                check = false;
                alert(`${i + 1} Row Material Amount In Not True Amount`)
                break;
            }
            else if (stf_store.order_list[i]?.material_unit === '') {
                check = false;
                alert(`${i + 1} Row Unit Is Not Selected`)
                break;
            }
            else if (stf_store.order_list[i]?.fieldId === 0) {
                check = false;
                alert(`${i + 1} Row Field Not Selected`)
                break;
            }
        }
        if (check) {
            
            try {
                const data = {
                    orders: stf_store.order_list,
                    user: user_store?.user
                }
                for(let i = stf_store.order_list?.length ; i > prop.row_size ; i -- ){
                    const some = stf_store.order_list?.pop();
                }
                await stf_store.createSTF(data)
                    .then(async (respond) => {
                        if (respond?.response?.status === 400) {
                            alert('MTF Cant Create');
                        }
                        else {
                            stf_store.msg_cond=true
                            setTimeout(() => {
                                emit('setRowSize');
                                btn_toggle.value = true;
                                stf_store.after_created = true;
                                stf_store.tab_num = 0;
                                stf_store.fetchUserSTFAll(data.user);
                            }, 500);
                            setTimeout(()=>{
                                stf_store.msg_cond=false
                            },1000)
                        }
                    }).catch((err) => {
                        console.log('from create Error component : ', err);
                    })
            } catch (error) {
                console.log('error : ', error);
            }
        }
        else{
            btn_toggle.value = true;
        }
    }
}







</script>

<style lang="">
    
</style>
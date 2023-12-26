<template>
    <div v-if="warehouse_store.return_checked_values.length >= 1" class="mtf-anim fixed left-1/4 bottom-10 flex flex-row mb-4 justify-center rounded-lg w-1/2">
        <div class="flex justify-between bg-white w-full border rounded-md shadow-2xl">
            <div class="flex items-center">
                <span class="bg-blue-600 py-4 px-6 text-white font-bold rounded-l-md text-3xl">{{ warehouse_store.return_checked_values.length
                }}</span>
                <div class="ml-3">
                    <p>Task Selected</p>
                    <span v-for="i in warehouse_store.return_checked_values.length" class="text-blue-600">&#9679</span>
                </div>
            </div>
            <div class="flex items-center">
                <!-- Un Selected Selecting Rows -->
                <button @click="unselect()"
                    class="flex flex-col items-center mx-3 cursor-pointer p-1 hover:bg-gray-100 "> <i
                        class="fa-regular fa-trash-can"></i> <span class="text-xs">Unselect</span></button>
                <!-- Add Archieve -->
                <!-- <button v-font-family class="flex flex-col items-center mx-3 cursor-pointer p-1 hover:bg-gray-100 "> <i
                        class="fa-regular fa-file-zipper"></i> <span class="text-xs">Add Archieve</span></button> -->
                <!-- Create SM -->        
                <button @click="returnMaterial()"
                    class="flex flex-col items-center mx-3 cursor-pointer p-1 hover:bg-gray-100 "> <i
                        class="fa-regular fa-handshake"></i> <span class="text-xs">Return</span></button>
                <!-- Set Star -->        
                <button class="flex flex-col items-center mx-3 cursor-pointer p-1 hover:bg-gray-100 "> <i
                        class="fa-regular fa-star"></i> <span class="text-xs">Set Star</span></button>
            </div>
        </div>
        <Toast :cond = showToastval.cond :messages=showToastval.messages />
    </div>
</template>

<script setup>

import { ref, watchEffect, reactive } from 'vue';
import Toast from '../../design/Toast.vue';
import WarehouseStore from '../../../store/store.warehouse';
import UserStore from '../../../store/store.user_store';
const warehouse_store = WarehouseStore();
const user_store = UserStore();

const showToastval = reactive({
    cond: false,
    messages: ''
})


const returnMaterial = async () => {
    console.log('retur material is : ', warehouse_store.return_checked_values);
    if(user_store.user){
        if(user_store.user.departmentId !== 3) {
            // ... Only Procurement Users can create a new sms
            showToastval.cond = true;
            showToastval.messages = "You dont have authority for Accepting SM";
            setTimeout(()=>{
                showToastval.cond = false
            },1000)
        }
        else{                                               
        }
    }                                                          
    else{
        // ... User Not Login Error Return
        showToastval.cond = true;
        showToastval.messages = "User Not Login";
    }
}

const unselect = () => {
    warehouse_store.return_checked_values = warehouse_store.return_checked_values.filter((item) => item.id === -1)
    console.log('warehouse return checked values : ', warehouse_store.return_checked_values);
}

</script>

<style scoped>
.mtf-anim {
    animation: openfilter 0.5s;
}

@keyframes openfilter {
    from {
        transform: translateY(120%);
    }

    to {
        transform: translateY(0%);
    }
}</style>

<template>
    <div class="flex items-center justify-end mt-10">
        <button type="button" @click="createSTF" class="text-white bg-gradient-to-r bg-blue-600 hover:bg-blue-500 hover:shadow-xl
              font-medium rounded-lg text-md px-4 py-2 text-center mr-2 mb-2">
            <i class="fa-solid fa-plus"></i>
            Create</button>
    </div>
</template>

<script setup>


import STFStore from '../../../store/store.stf';
const stf_store = STFStore();

// Define Prop For Getting All Rows Values
const prop = defineProps(['row_size']);

// Set Row Size 0 after creating mtf
const emit = defineEmits(['setRowSize']);

const createSTF = async () => {
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
            if (stf_store.order_list[i].material_name === '') {
                check = false;
                alert(`${i + 1} Row Material Name is Empty`)
                break;
            }
            else if (stf_store.order_list[i].material_amount <= 0) {
                check = false;
                alert(`${i + 1} Row Count Is Not True`)
                break;
            }
            else if (stf_store.order_list[i].material_unit === '') {
                check = false;
                alert(`${i + 1} Row Unit Is Not Selected`)
                break;
            }
            else if (stf_store.order_list[i].fieldId === '') {
                check = false;
                alert(`${i + 1} Row Field Not Selected`)
                break;
            }
        }
        if (check) {
            try {
                //Excute Post Method
                
                const data = {
                    orders: stf_store.order_list,
                    // user: user_store?.user
                }
                console.log('sending data : ',stf_store.order_list);
                for(let i = stf_store.order_list?.length ; i > prop.row_size ; i -- ){
                    const some = stf_store.order_list?.pop();
                }
                await stf_store.createSTF(data)
                    .then(async (respond) => {
                        if (respond?.response?.status === 400) {
                            alert('MTF Cant Create');
                        }
                        // else {
                        //     stf_store.creating_mtf_toast=true
                        //     setTimeout(() => {
                        //         stf_store.creating_mtf_toast=false
                        //         emit('setRowSize');
                        //         stf_store.after_created = true;
                        //         stf_store.tab_num = 0;
                        //         stf_store.fetchUserSTFAll(data.user);
                        //     }, 500);
                        // }
                    }).catch((err) => {
                        console.log('from create Error component : ', err);
                    })
            } catch (error) {
                console.log('error : ', error);
            }
        }
    }
}
</script>

<style lang="">
    
</style>
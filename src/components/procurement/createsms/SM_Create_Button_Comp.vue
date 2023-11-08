
<template>
    <div class="mb-1 mt-3 flex justify-between ">
        <button v-if="procurement_store.GETCHECKEDVALUES.length >= 1" @click="createSM" class="btn btn-outline btn-primary">
            Create SM
        </button>
        <!-- <button 
            class="bg-red-600 font-medium text-xs py-1 px-3 rounded-md text-white">
            Create SM
        </button> -->
        <div class="flex">
            <Vendor_Comp :vendor_list="vendor_list" @selectVendor="selectVendor" />
            <!-- Choosing Procurement Coming Date-->
            <div class="mr-5">
                <input class="border outline-none font-sans rounded-lg w-full h-full py-2 px-1 text-xs" type="date" name=""
                    id="" v-model="common_data.procurement_coming_date">
            </div>
            <div>
                <!-- {{ supplier_list }} -->
                <select class="border outline-none font-sans rounded-lg w-full h-full p-2 text-xs"
                    v-model="common_data.supplierName">
                    <option v-for="i in supplier_list" :value="i.user_id" >{{ i.procurement_users }}</option>
                </select>
            </div>
        </div>
        <Toast :cond="procurement_store.msg_cond" messages="New STF Successfuly Created" />
    </div>
</template>

<script setup>

import { reactive, computed, watchEffect} from 'vue';
import Toast from '../../design/Toast.vue';

import ProcurementStore from '../../../store/store.procurement.js';
import UserStore from '../../../store/store.user_store';
import Vendor_Comp from './Vendor_Comp.vue';
const procurement_store = ProcurementStore();
const user_store = UserStore();

const common_data = reactive({
    procurement_coming_date: '',
    VendorModelId: 0,
    supplierName: 0,
    createdBy: '',
})

watchEffect(()=>{
    // if(common_data){
    //     common_data?.createdBy = user_store?.user?.id
    // }
})

// Get All Vendors and Show in vendors List
const vendor_list = computed(() => {
    return procurement_store.GETCOMPANIESNAMES;
})
// Get All Suppliers and show in supplier List
const supplier_list = computed(() => {
    return procurement_store.GETPROCUREMENTUSERSNAMES;
})

// Select Vendor
const selectVendor = (vendor) => {
    common_data.VendorModelId = vendor?.company_id;
}

const createSM = async () => {
    let check_valid = true;
    if (common_data.VendorModelId === 0) {
        check_valid = false;
        alert('Vendor name must be choosed')
    }
    else if (common_data.supplierName === 0) {
        check_valid = false;
        alert('Supplier Name Must Be Choosed')
    }
    else {
        common_data.createdBy = user_store.user.id;
        for (let i = 0; i < procurement_store.GETCREATINGSTFDATA.length; i++) {            
            if (procurement_store.GETCREATINGSTFDATA[i].price <= 0) {
                check_valid = false;
                alert(`Price Must Be Greater Than 0 in ${i + 1} Row`)
                break;
            }
            else if(procurement_store.GETCREATINGSTFDATA[i].sm_material_name.trim().length === 0  ){
                check_valid = false;
                alert('Importing SM Material Name Can Be Empty');
                break;
            }
            else if(procurement_store.GETCREATINGSTFDATA[i].sm_material_amount === 0 ){
                check_valid = false;
                alert('Import SM Material Count Cant Be 0');
                break;
            }
            else {
                procurement_store.creating_STF_datas[i].VendorModelId = common_data.VendorModelId;
                procurement_store.creating_STF_datas[i].supplierName = common_data.supplierName;
                procurement_store.creating_STF_datas[i].ProcurementComingDate = common_data.procurement_coming_date;
                procurement_store.creating_STF_datas[i].createdBy = common_data.createdBy;
            }
        }
    }
    if (check_valid) {
        await procurement_store.createSM(procurement_store.GETCREATINGSTFDATA)
            .then((respond) => {
                procurement_store.creating_STF_datas = [];
                procurement_store.msg_cond = true;
                procurement_store.after_created = true;
                // Show Error Message and Return Back All STF Page
                setTimeout(() => {
                    procurement_store.tab_num = 0;
                    procurement_store.msg_cond = false;
                    procurement_store.checked_values = procurement_store.checked_values.filter((item) => item.stf_id === -1)
                    common_data.procurement_coming_date = '',
                    common_data.supplierName = 0,
                    common_data.VendorModelId = 0,
                    common_data.createdBy = ''
                }, 1000)
                
                setTimeout(() => {
                    procurement_store.after_created = false;
                    procurement_store.creating_STF_datas = procurement_store.creating_STF_datas.filter((item) => item.project_id === -1)
                    console.log('checked values : \n',procurement_store.checked_values);
                    console.log('createating stf data \n : ',procurement_store.checked_values);
                }, 2000)

            }).catch((err) => {

            })
    }
    else{
        console.log('not valied');
    }

}

</script>

<style lang="scss" scoped></style>
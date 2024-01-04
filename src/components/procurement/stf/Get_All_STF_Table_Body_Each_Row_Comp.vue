
<template>
    <tr :class="checked ? 'text-white  bg-blue-600 hover:bg-blue-500 ' : 'bg-white  hover:bg-blue-600 hover:text-white hover:duration-200 '"
        class="border-b  hover:cursor-pointer table_row hover:m-2">

        <TableRowInform :each="prop?.each">

            <!-- Cancel STF Only Work Inside Of Procurement Section -->
            <template #cancel_stf>
                <span v-if="!prop.each?.canceled_id" @click="cancelSTF"
                    class="flex items-center py-2 text-gray-900 row_item">
                    <img class="mr-4 w-4 h-4" src="../../../assets/icons/close.png" alt="">
                    Cancel STF
                </span>
            </template>

            <!-- Change STF STF Status -->
            <template #change_stf_status>
                <!-- Change STF Status -->
                <div v-if="!prop.each?.canceled_id" class="my-3 flex flex-col justify-between text-gray-500"
                    style="font-family: 'Figtree';">
                    <span class="p-1 hover:bg-none text-[15px] text-start"> Change STF Status</span>
                    <div class="text-[0.8rem] ">
                        <select class="select select-bordered w-full max-w-xs" v-model="stf_status.completed"
                            @change="changeStatus">
                            <option class="my-2 py-2 text-[15px]" value=false>Wait</option>
                            <option class="my-2 py-2 text-[15px]" value="true">Complete</option>
                        </select>
                    </div>
                </div>
            </template>

            <!-- Check STF Complete Or Not Section -->
            <template #stf_complete>
                <div v-if="prop.each?.canceled_id" class="flex text-lg bg-red-400 text-white rounded-md py-1 mb-1">
                    <span class="text-center  w-full">
                        STF Canceled
                    </span>
                </div>
                <div v-else class="flex font-bold w-full text-[1.0rem] ">
                    <span v-if="prop?.each?.completed" class="px-2 py-2  text-green-500 bg-green-100 w-full rounded-lg">
                        Completed : {{ prop?.each?.completed }}
                    </span>
                    <span v-else class="px-2 py-2 text-red-500 bg-red-100 w-full rounded-lg">
                        Completed : {{ prop?.each?.completed }}
                    </span>
                </div>
            </template>

        </TableRowInform>

        <!-- Show Checked or Not Section -->
        <td class="w-1 p-4 py-2 ">
            <div class="flex items-center">
                <label class="flex cursor-pointer items-center rounded-sm p-1" for="selected_row" data-ripple-dark="true">
                    <input :id="prop.each.id" type="checkbox" v-model="checked" @change="checkboxCond"
                        class="checkbox checkbox-xs checkbox-primary" />
                </label>
            </div>
        </td>
        <!-- Show Index Num -->
        <th class="px-2 py-2  font-bold text-center">
            {{ prop?.index + 1 }}
        </th>

        <TableRow :each="prop?.each" :table_headers="procurement_store.stf_table_headers" />

        <CancelSTF :toggle_cancelstf="toggle_cancelstf" :user_id="user_store.user?.id" :stf="prop?.each"
            @closeCanceledSTF="closeCanceledSTF" />

        <Toast :cond="cancelstf_authority" messages="You Dont Have Authority For Cancel STF" />

    </tr>
</template>

<script setup>

import { ref, watchEffect, reactive } from 'vue';
import TableRow from '../../../layouts/TableRow.vue';
import TableRowInform from '../../../layouts/TableRowInform.vue';
import CancelSTF from '../../design/Cancelstf.vue';
import Toast from '../../design/Toast.vue';
import ProcurementStore from '../../../store/store.procurement';
import UserStore from '../../../store/store.user';
import IndexStore from '../../../store/store.index';

const procurement_store = ProcurementStore();
const user_store = UserStore();
const index_store = IndexStore();

// Get Each Item from parent
const prop = defineProps(['each', 'index', 'checked_style']);

// Create an Emit for clicking checkbox
const emit = defineEmits(['addChecked', 'removeChecked']);

// Check Row Checkbox selected or not
const checked = ref(false);
const checkboxCond = () => {
    if (checked.value === true) {
        emit('addChecked', prop?.each)
    }
    else {
        emit('removeChecked', prop?.each);
    }
}

// --------------------------------------------------------- Cancel STF
// Cancelstf Authority Error
const cancelstf_authority = ref(false);
// Show Or Hide Cancel STF Component
const toggle_cancelstf = ref(false);
const closeCanceledSTF = () => {
    toggle_cancelstf.value = false;
}
const cancelSTF = async () => {
    if (user_store.user.departmentId === 2 || user_store.user.departmentId === 3) {
        toggle_cancelstf.value = true;
    }
    else {
        cancelstf_authority.value = true;
        setTimeout(() => {
            cancelstf_authority.value = false;
        }, 2000)
    }
}
// ------------------------------------------------------- Cahnge STf Status
// STF Informm
const stf_status = reactive({
    stf_id: prop?.each?.stf_id,
    completed: prop?.each?.completed,
    user: user_store.user.id,
})
const changeStatus = async () => {
    if (user_store.user.departmentId === 2) {
        if (user_store.user && user_store.user.departmentId === 2) {
            await index_store.setStfStatus(stf_status)
                .then((respond) => {
                    if (stf_status.completed === 'true') {
                        prop.each.completed = true
                    }
                    else {
                        prop.each.completed = false
                    }
                })
        }
        else {
            console.log('Authorization Error ');
        }
    }
    else {
        cancelstf_authority.value = true;
        setTimeout(() => {
            cancelstf_authority.value = false;
        }, 2000)
    }
}


// After Createting New SMS, Set checkbox false
watchEffect(() => {
    if (procurement_store.after_created) {
        checked.value = false;
    }
})


</script>

<style lang="scss" scoped></style>

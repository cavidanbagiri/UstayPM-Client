
<template>
    <div v-if="index_store.row_inform_condition"
        class="flex justify-end fixed right-0 top-0 w-screen h-screen z-50 border bg-opacity-80 bg-gray-300"
        style="font-family: 'Figtree', sans-serif;">
        <div class="flex flex-col w-1/2 bg-gray-100 rounded-lg">
            <div class="flex justify-end mx-5 text-xl font-bold px-2 py-1">
                <span @click="closeInformBar" class="cursor-pointer">
                    <i class="fa-solid fa-xmark fa-xl text-gray-500"></i>
                </span>
            </div>
            <div v-if="index_store.row_detail_data" class="flex flex-col  overflow-auto">
                <!-- If STF Canceled -->
                <div v-if="index_store.row_detail_data?.canceled_stf?.length" class="flex flex-col bg-white mx-2 p-4  text-black">
                    <span class="text-center text-xl bg-red-400 py-2">
                        This STF Canceled
                    </span>
                    <br>
                    <span class="text-left text-lg">
                        Canceled Date
                    </span>
                    <span class="text-md border rounded-lg p-2 text-start">
                        <DateFormat :time="index_store.row_detail_data?.canceled_stf[0]?.canceled_date"/>
                        <!-- {{ index_store.row_detail_data[0].canceled_date }} -->
                    </span>
                    <span class="text-left text-lg">
                        Canceled By
                    </span>
                    <span class="text-lg border rounded-lg p-2 text-center">
                        <!-- <DateFormat :time="index_store.row_detail_data[0].canceled_by"/> -->
                        {{ index_store.row_detail_data?.canceled_stf[0]?.UserModel?.name }} {{ index_store.row_detail_data?.canceled_stf[0]?.UserModel?.surname }}
                    </span>
                    <span class="text-left text-lg">
                        Comment
                    </span>
                    <span class="text-md border bg-white  rounded-lg p-2">
                        {{ index_store.row_detail_data?.canceled_stf[0]?.comment }}
                    </span>
                </div>

                <!-- STF Information Section -->
                <div class="flex flex-col  p-2 m-2 rounded-sm shadow-md my-3 bg-white" style="font-family: 'Figtree';">
                    <span class="text-header">STF Information</span>
                    <div class="flex justify-start items-center ">
                        <div class="w-64 column-header column-header">STF Num</div>
                        <span class="column-value bg-orange-100 py-1 px-2 rounded-lg text-orange-400 font-bold">{{
                            index_store.row_detail_data?.stf_result?.stf_num }}</span>
                    </div>
                    <div class="flex justify-start items-center">
                        <div class="w-64 column-header">Material Type</div>
                        <div class="column-value">{{ index_store.row_detail_data?.stf_result?.material_type }}</div>
                    </div>
                    <div class="flex justify-start items-center">
                        <div class="w-64 column-header">Material Name</div>
                        <div class="column-value">{{ index_store.row_detail_data?.stf_result?.material_name }}</div>
                    </div>
                    <div class="flex justify-start items-center">
                        <div class="w-64 column-header">Material Amount</div>
                        <div class="column-value">{{ index_store.row_detail_data?.stf_result?.material_amount }} {{
                            index_store.row_detail_data?.stf_result?.material_unit }}</div>
                    </div>
                    <div class="flex justify-start items-center">
                        <div class="w-64 column-header">Material Link</div>
                        <div v-if="index_store.row_detail_data?.stf_result?.material_link"  
                        class="column-value">{{ index_store.row_detail_data?.stf_result?.material_link }}</div>
                        <div v-else>
                            -
                        </div>
                    </div>
                    <div class="flex justify-start items-center">
                        <div class="w-64 column-header">Material Comment</div>
                        <div  v-if="index_store.row_detail_data?.stf_result?.material_comment"   
                        class="column-value">{{ index_store.row_detail_data?.stf_result?.material_comment }}</div>
                        <div v-else>
                            -
                        </div>
                    </div>
                    <div class="flex justify-start items-center">
                        <div class="w-64 column-header">Status</div>
                        <div class="column-value w-6 h-6" >
                            <div v-if="index_store.row_detail_data?.stf_result?.completed">
                                <!-- <img src="../assets/trueicon.png" alt=""> -->
                                <span class="text-green-500 font-bold text-lg">Complete</span>
                            </div>
                            <div v-else>
                                <!-- <img src="../assets/falseicon.png" alt=""> -->
                                <span class="text-red-500 font-bold text-lg">Waiting</span>
                            </div>
                        </div>
                    </div>
                    <div class="flex justify-start items-center">
                        <div class="w-64 column-header">Created Date</div>
                        <div class="column-value">
                            <DateFormat :time="index_store.row_detail_data?.stf_result?.createdAt" />
                        </div>
                    </div>
                    <div class="flex justify-start items-center">
                        <div class="w-64 column-header">Field Name</div>
                        <div class="column-value">{{ index_store.row_detail_data?.stf_result?.FieldsModel?.field_name }}
                        </div>
                    </div>
                    <div class="flex justify-start items-center">
                        <div class="w-64 column-header">Ordered By</div>
                        <div class="column-value">
                            <div class="flex items-center justify-start p-2 px-4 border rounded-lg shadow-md">
                                <img class="w-12 h-12 rounded-full border"
                                    :src="index_store.row_detail_data?.stf_result?.UserModel?.image_url"
                                    alt="">
                                <div class="flex flex-col">
                                    <span style="font-family: 'Poppins', sans-serif; font-size: 0.9rem;"
                                        class=" pl-2 text-gray-600 ">
                                        {{ index_store.row_detail_data?.stf_result?.UserModel?.name }} {{
                                            index_store.row_detail_data?.stf_result?.UserModel?.surname }}
                                    </span>
                                    <span style="font-family: 'Poppins', sans-serif; font-size: 0.8rem;"
                                        class="pl-2 text-gray-500">Warehouse Worker</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- SM Information Section -->
                <template v-for="i in index_store?.row_detail_data?.sm_result">
                    <div class="flex flex-col  p-2 m-2 rounded-sm shadow-md my-3 bg-white">
                        <span class="text-header ">SM Information</span>
                        <div class="flex justify-start items-center">
                            <div class="w-64 column-header">SM Num</div>
                            <div class="column-value bg-green-100 py-1 px-2 rounded-lg text-green-400 font-bold">{{
                                i?.sm_num }}</div>
                        </div>
                        <div class="flex justify-start items-center">
                            <div class="w-64 column-header">Material Name</div>
                            <div class="column-value">
                                {{ i?.sm_material_name }}
                            </div>
                        </div>
                        <div class="flex justify-start items-center">
                            <div class="w-64 column-header">Material Amount</div>
                            <div class="column-value">{{ i.sm_material_amount }} {{
                                i?.sm_material_unit }}</div>
                        </div>
                        <div class="flex justify-start items-center">
                            <div class="w-64 column-header">Price</div>
                            <div class="column-value">
                                <span class="pr-5">
                                    {{ i?.price }}
                                </span>
                                <span class="bg-lime-900 text-white p-1 rounded-md">
                                    {{ i?.total }}
                                </span>
                                <span class="pl-5">
                                    {{ i?.currency }}
                                </span>
                            </div>
                        </div>
                        <div class="flex justify-start items-center">
                            <div class="w-64 column-header">Left Over</div>
                            <div class="column-value">{{ i.left_over }} {{ i.sm_material_unit }}</div>
                        </div>
                        <div class="flex justify-start items-center">
                            <div class="w-64 column-header">Approximate Date</div>
                            <div class="column-value">
                                <DateFormat :time="i?.approximate_date" />
                            </div>
                        </div>
                        <div class="flex justify-start items-center">
                            <div class="w-64 column-header">Vendor Name</div>
                            <div class="column-value font-bold text-red-500" style="font-size: 18px;">{{
                                i?.VendorModel?.vendor_name }}</div>
                        </div>
                        <!-- SM Status -->
                        <div class="flex justify-start items-center">
                            <div class="w-64 column-header">Status</div>
                            <div v-if="i?.ConditionModel?.situationId == 1"
                             class="column-value font-bold bg-blue-100  text-blue-500 px-2 rounded-lg" style="font-size: 18px;">Processing</div>
                            <div v-else
                             class="column-value font-bold bg-green-100 text-green-500 px-2 rounded-lg" style="font-size: 18px;">Complete</div>
                        </div>
                        <div class="flex justify-start items-center">
                            <div class="w-64 column-header">Created Date</div>
                            <div class="column-value">
                                <DateFormat :time="i?.createdAt" />
                            </div>
                        </div>
                        <!-- Supplier Name -->
                        <div class="flex justify-start items-center">
                            <div class="w-64 column-header">Supplier Name</div>
                            <div class="column-value">
                                <div class="flex items-center justify-start p-2 px-4 border rounded-lg shadow-md">
                                    <img class="w-12 h-12 rounded-full border"
                                        :src=" i?.UserModel?.image_url"
                                        alt="">
                                    <div class="flex flex-col">
                                        <span style="font-family: 'Poppins', sans-serif; font-size: 0.9rem;"
                                            class=" pl-2 text-gray-600 ">
                                            {{ i?.UserModel?.name }} {{ i?.UserModel?.surname }}
                                        </span>
                                        <span style="font-family: 'Poppins', sans-serif; font-size: 0.8rem;"
                                            class="pl-2 text-gray-500">Warehouse Worker</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </template>

                <!-- Warehouse Information Section -->
                <template v-for="each in index_store?.row_detail_data?.warehouse_result">

                    <div v-for="i in each" class="flex flex-col p-2 m-2  rounded-sm shadow-md my-3 bg-white">
                        <span class="text-header">Warehouse Information</span>
                        <div class="flex justify-start items-center">
                            <div class="w-64 column-header">Delivery Material name</div>
                            <div class="column-value">{{ i?.delivery_material_name }}</div>
                        </div>
                        <div class="flex justify-start items-center">
                            <div class="w-64 column-header">Material Amount</div>
                            <div class="column-value">{{ i?.delivery_material_amount }} {{
                                i?.delivery_material_unit }}</div>
                        </div>
                        <div class="flex justify-start items-center">
                            <div class="w-64 column-header">Price</div>
                            <div class="column-value">
                                <span class="pr-5">
                                    {{ i?.delivery_material_price }}
                                </span>
                                <span class="bg-lime-900 text-white p-1 rounded-md">
                                    {{ i?.delivery_material_total }}
                                </span>
                                <span class="pl-5">
                                    {{ i?.delivery_material_currency }}
                                </span>
                            </div>
                        </div>
                        <div class="flex justify-start items-center">
                            <div class="w-64 column-header">Stock</div>
                            <div class="column-value">{{ i?.stock }}</div>
                        </div>
                        <div class="flex justify-start items-center">
                            <div class="w-64 column-header">Certificate</div>
                            <div class="column-value w-6 h-6">
                                <div v-if="i?.certificate">
                                    <img src="../assets/trueicon.png" alt="">
                                </div>
                                <div v-else>
                                    <img src="../assets/falseicon.png" alt="">
                                </div>
                            </div>
                        </div>
                        <div class="flex justify-start items-center">
                            <div class="w-64 column-header">Passport</div>
                            <div class="column-value w-6 h-6">
                                <div v-if="i?.passport">
                                    <img src="../assets/trueicon.png" alt="">
                                </div>
                                <div v-else>
                                    <img src="../assets/falseicon.png" alt="">
                                </div>
                            </div>
                        </div>
                        <div class="flex justify-start items-center">
                            <div class="w-64 column-header">Doc Date</div>
                            <div class="column-value">{{ i?.doc_date }}</div>
                        </div>
                        <div class="flex justify-start items-center">
                            <div class="w-64 column-header">Doc Number</div>
                            <div class="column-value">{{ i?.doc_number }}</div>
                        </div>
                        <div class="flex justify-start items-center">
                            <div class="w-64 column-header">Warehouse Created Date</div>
                            <div class="column-value">
                                <DateFormat :time="i?.createdAt" />
                            </div>
                        </div>
                        <div class="flex justify-start items-center">
                            <div class="w-64 column-header">Accepted By</div>
                            <div class="column-value">
                                <div class="flex items-center justify-start p-2 px-4 border rounded-lg shadow-md">
                                    <img class="w-12 h-12 rounded-full border"
                                        :src="i?.UserModel?.image_url"
                                        alt="">
                                    <div class="flex flex-col">
                                        <span style="font-family: 'Poppins', sans-serif; font-size: 0.9rem;"
                                            class=" pl-2 text-gray-600 ">
                                            {{ i?.UserModel?.name }} {{ i?.UserModel?.surname }}
                                        </span>
                                        <span style="font-family: 'Poppins', sans-serif; font-size: 0.8rem;"
                                            class="pl-2 text-gray-500">Warehouse Worker</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </template>

            </div>
            <div v-else class="flex justify-center items-center h-full">
                <span class="loading loading-bars loading-lg"></span>
            </div>
        </div>
    </div>
</template>

<script setup>

import DateFormat from './DateFormat.vue';
import IndexStore from '../store/store.index';
const index_store = IndexStore();

const closeInformBar = () => {
    index_store.row_inform_condition = false;
}

</script>

<style scoped>
.text-header {
    text-align: center;
    font-weight: bold;
    color: black;
    font-size: 24px
}

.column-header {
    font-size: 17px;
    font-family: 'Figtree', sans-serif;
    color: #334155;
    margin-top: 5px;
}

.column-value {
    font-size: 14px;
    font-family: 'Lato';
}
</style>


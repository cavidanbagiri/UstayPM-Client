
<template>
    <div v-if="index_store.row_inform_condition" class="flex justify-end fixed right-0 top-0 w-screen h-screen z-50 border bg-opacity-80 bg-gray-300"
    style="font-family: 'Poppins', sans-serif;">
        <div class="flex flex-col w-3/4 bg-white rounded-lg p-5">
            <div class="flex justify-end mx-5 text-xl font-bold">
                <span @click="closeInformBar" class="cursor-pointer">
                    <i class="fa-solid fa-xmark fa-xl text-gray-500"></i>
                </span>
            </div>
            <div class="flex flex-col  overflow-auto">
                <!-- STF Information Section -->
                <div class="flex flex-col  p-2 m-2 rounded-xl shadow-md my-3">
                    <span class="text-header">STF Information</span>
                    <div class="flex justify-start items-center">
                        <div class="w-64 column-header column-header">STF Num</div>
                        <span class="column-value">{{ index_store.row_detail_data.stf_num }}</span>
                    </div>
                    <div class="flex justify-start items-center">
                        <div class="w-64 column-header">Material Type</div>
                        <div class="column-value">{{ index_store.row_detail_data.material_type }}</div>
                    </div>
                    <div class="flex justify-start items-center">
                        <div class="w-64 column-header">Material Name</div>
                        <div class="column-value">{{ index_store.row_detail_data.material_name }}</div>
                    </div>
                    <div class="flex justify-start items-center">
                        <div class="w-64 column-header">Material Amount</div>
                        <div class="column-value">{{ index_store.row_detail_data.material_amount }} {{ index_store.row_detail_data.material_unit }}</div>
                    </div>
                    <div class="flex justify-start items-center">
                        <div class="w-64 column-header">Material Link</div>
                        <div class="column-value">{{ index_store.row_detail_data.material_link }}</div>
                    </div>
                    <div class="flex justify-start items-center">
                        <div class="w-64 column-header">Material Comment</div>
                        <div class="column-value">{{ index_store.row_detail_data.material_comment }}</div>
                    </div>
                    <div class="flex justify-start items-center">
                        <div class="w-64 column-header">Material Condition</div>
                        <div class="column-value">{{ index_store.row_detail_data.completed }}</div>
                    </div>
                    <div class="flex justify-start items-center">
                        <div class="w-64 column-header">STF Created Date</div>
                        <div class="column-value">{{ index_store.row_detail_data.createdAt }}</div>
                    </div>
                    <div class="flex justify-start items-center">
                        <div class="w-64 column-header">Ordered By</div>
                        <div class="column-value">{{ index_store.row_detail_data.ordered_by }}</div>
                    </div>
                    <div class="flex justify-start items-center">
                        <div class="w-64 column-header">Field Name</div>
                        <div class="column-value">{{ index_store.row_detail_data.field_name }}</div>
                    </div>
                </div>
                <!-- Sm Information Section -->
                <div class="flex flex-col  p-2 m-2 rounded-xl shadow-md my-3">
                    <span class="text-header">SM Information</span>
                    <div class="flex justify-start items-center">
                        <div class="w-64 column-header">SM Num</div>
                        <div class="column-value">{{ index_store.row_detail_data.sm_num }}</div>
                    </div>
                    <div class="flex justify-start items-center">
                        <div class="w-64 column-header">Material Name</div>
                        <div class="column-value">{{ index_store.row_detail_data.sm_material_name }}</div>
                    </div>
                    <div class="flex justify-start items-center">
                        <div class="w-64 column-header">Material Amount</div>
                        <div class="column-value">{{ index_store.row_detail_data.sm_material_amount }} {{ index_store.row_detail_data.sm_material_unit }}</div>
                    </div>
                    <div class="flex justify-start items-center">
                        <div class="w-64 column-header">Price</div>
                        <div class="column-value">{{ index_store.row_detail_data.price }} {{ index_store.row_detail_data.total }} {{ index_store.row_detail_data.currency }}</div>
                    </div>
                    <div class="flex justify-start items-center">
                        <div class="w-64 column-header">Left Over</div>
                        <div class="column-value">{{ index_store.row_detail_data.left_over }}</div>
                    </div>
                    <div class="flex justify-start items-center">
                        <div class="w-64 column-header">Approximate Date</div>
                        <div class="column-value">{{ index_store.row_detail_data.approximate_date }}</div>
                    </div>
                    <div class="flex justify-start items-center">
                        <div class="w-64 column-header">Vendor Name</div>
                        <div class="column-value">{{ index_store.row_detail_data.vendor_name }}</div>
                    </div>
                    <div class="flex justify-start items-center">
                        <div class="w-64 column-header">Supplier Name</div>
                        <div class="column-value">{{ index_store.row_detail_data.supplier_name }}</div>
                    </div>
                </div>
                <!-- Warehouse Information Section -->
                <div class="flex flex-col  p-2 m-2 rounded-xl shadow-md my-3">
                    <span class="text-header">Warehouse Information</span>
                    <div class="flex justify-start items-center">
                        <div class="w-64 column-header">Delivery Material name</div>
                        <div class="column-value">{{ index_store.row_detail_data.delivery_material_name }}</div>
                    </div>
                    <div class="flex justify-start items-center">
                        <div class="w-64 column-header">Material Amount</div>
                        <div class="column-value">{{ index_store.row_detail_data.delivery_material_amount }} {{ index_store.row_detail_data.delivery_material_unit }}</div>
                    </div>
                    <div class="flex justify-start items-center">
                        <div class="w-64 column-header">Price</div>
                        <div class="column-value">{{ index_store.row_detail_data.delivery_material_price }} {{ index_store.row_detail_data.delivery_material_total }} {{ index_store.row_detail_data.delivery_material_currency }}</div>
                    </div>
                    <div class="flex justify-start items-center">
                        <div class="w-64 column-header">Stock</div>
                        <div class="column-value">{{ index_store.row_detail_data.stock }}</div>
                    </div>
                    <div class="flex justify-start items-center">
                        <div class="w-64 column-header">Certificate</div>
                        <div class="column-value">{{ index_store.row_detail_data.certificate }}</div>
                    </div>
                    <div class="flex justify-start items-center">
                        <div class="w-64 column-header">Passport</div>
                        <div class="column-value">{{ index_store.row_detail_data.passport }}</div>
                    </div>
                    <div class="flex justify-start items-center">
                        <div class="w-64 column-header">Doc Date</div>
                        <div class="column-value">{{ index_store.row_detail_data.doc_date }}</div>
                    </div>
                    <div class="flex justify-start items-center">
                        <div class="w-64 column-header">Doc Number</div>
                        <div class="column-value">{{ index_store.row_detail_data.doc_number }}</div>
                    </div>
                    <div class="flex justify-start items-center">
                        <div class="w-64 column-header">Accepted By</div>
                        <div class="column-value">{{ index_store.row_detail_data.accepted_by }}</div>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
</template>

<script setup>

import IndexStore from '../store/store.index';
const index_store = IndexStore();

const closeInformBar = () => {
    index_store.row_inform_condition = false;
}

</script>

<style scoped>

.text-header{
    text-align: center;
    font-weight: bold;
    color: black;
    font-size: 24px
}
.column-header{
    font-size: 17px;
    font-family: 'Roboto', sans-serif;
    color: #334155;
}

.column-value{
    font-size: 14px;
    font-family: 'Lato';
}

</style>


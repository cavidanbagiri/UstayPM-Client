
<template>
  <Provided_Table_Body_Each_Row v-for="(each, index) in warehouse_store.provides_data" :each="each" :index="index"
      @addChecked="addChecked" @removeChecked="removeChecked" />
</template>

<script setup>

import { ref, watchEffect } from 'vue';
import Provided_Table_Body_Each_Row from './Provided_Table_Body_Each_Row.vue'
import WarehouseStore from '../../../store/store.warehouse';
const warehouse_store = WarehouseStore();

const addChecked = (item) => {
  warehouse_store.warehouse_data_checked_values.push(item);
  console.log('item ius : ', warehouse_store.warehouse_data_checked_values);
}

// Remove Operation FIx Needed
const removeChecked = (selected_item) => {
  warehouse_store.warehouse_data_checked_values = warehouse_store.warehouse_data_checked_values.filter((each) => each.sm_id !== selected_item.sm_id)
  for(let i=0; i<warehouse_store.warehouse_data_checked_values.length; i ++){
      if(warehouse_store.warehouse_data_checked_values[i].sm_id===selected_item.sm_id){
          warehouse_store.warehouse_data_checked_values.splice(i,1);
      }
  }
}

watchEffect(() => {
  // const check = ref(false);
  // for (let i = 0; i < warehouse_store.warehouse_data_checked_values?.length; i++) {
  //     if (warehouse_store.warehouse_data_checked_values[i].situation === 'Processing') {
  //         check.value = true
  //         break;
  //     }
  // }
  // check.value ? warehouse_store.toggle_received_sm = true : warehouse_store.toggle_received_sm = false
})
</script>

<style lang="scss" scoped></style>

<template>
  <Provided_Table_Body_Each_Row v-for="(each, index) in stf_store.provides_data" :each="each" :index="index" />
</template>

<script setup>

// import { watchEffect } from 'vue';
import Provided_Table_Body_Each_Row from './Provided_Table_Body_Each_Row.vue'
import STFStore from '../../../store/store.stf';
const stf_store = STFStore();

// const addChecked = (item) => {
//   stf_store.warehouse_data_checked_values.push(item);
//   console.log('item ius : ', stf_store.warehouse_data_checked_values);
// }

// // Remove Operation FIx Needed
// const removeChecked = (selected_item) => {
//   stf_store.warehouse_data_checked_values = stf_store.warehouse_data_checked_values.filter((each) => each.sm_id !== selected_item.sm_id)
//   for(let i=0; i<stf_store.warehouse_data_checked_values.length; i ++){
//       if(stf_store.warehouse_data_checked_values[i].sm_id===selected_item.sm_id){
//           stf_store.warehouse_data_checked_values.splice(i,1);
//       }
//   }
// }

// watchEffect(() => {
  // const check = ref(false);
  // for (let i = 0; i < warehouse_store.warehouse_data_checked_values?.length; i++) {
  //     if (warehouse_store.warehouse_data_checked_values[i].situation === 'Processing') {
  //         check.value = true
  //         break;
  //     }
  // }
  // check.value ? warehouse_store.toggle_received_sm = true : warehouse_store.toggle_received_sm = false
// })
</script>

<style lang="scss" scoped></style>
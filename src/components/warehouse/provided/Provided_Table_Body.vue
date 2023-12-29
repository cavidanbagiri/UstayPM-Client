
<template>
  <Provided_Table_Body_Each_Row v-for="(each, index) in warehouse_store.provides_data" :each="each" :index="index"
      @addChecked="addChecked" @removeChecked="removeChecked" />
</template>

<script setup>

import Provided_Table_Body_Each_Row from './Provided_Table_Body_Each_Row.vue'
import WarehouseStore from '../../../store/store.warehouse';
const warehouse_store = WarehouseStore();

const addChecked = (item) => {
  warehouse_store.return_checked_values.push(item);
}

// Remove Operation FIx Needed
const removeChecked = (selected_item) => {
  warehouse_store.return_checked_values = warehouse_store.return_checked_values.filter((each) => each.provided_id !== selected_item.provided_id)
  for(let i=0; i<warehouse_store.return_checked_values.length; i ++){
      if(warehouse_store.return_checked_values[i].provided_id===selected_item.provided_id){
          warehouse_store.return_checked_values.splice(i,1);
      }
  }
}

</script>

<style lang="scss" scoped></style>
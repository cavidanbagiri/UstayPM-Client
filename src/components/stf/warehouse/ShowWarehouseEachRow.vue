<template>
  <tr :class="checked_style ? 'text-white bg-blue-600  hover:bg-blue-500 ' : 
  ' bg-white  hover:bg-blue-600 hover:text-white hover:duration-200 '"
      class="border-b  hover:cursor-pointer table_row ">
      <TableRowInform :each="prop?.each" />
      <td class="w-1 p-4 py-2 ">
          <div class="flex items-center">
              <label class=" flex cursor-pointer items-center rounded-sm p-1" for="selected_row"
                  data-ripple-dark="true">
                  <input :id="prop.each.id" type="checkbox" @change="checkedRows(prop.each.id)"
                  class="checkbox checkbox-xs checkbox-primary"    
                  />
                  <!-- <div
                      class="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"
                          stroke="currentColor" stroke-width="1">
                          <path fill-rule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clip-rule="evenodd"></path>
                      </svg>
                  </div> -->
              </label>
          </div>
      </td>
      <!-- S/S Section -->
      <th class="px-2 py-2 font-medium text-center">{{ prop.index + 1 }}</th>
      
      <!-- {{ stf_store.GETWAREHOUSEHEADERS }} -->
      <TableRow :each = "prop?.each" :table_headers="stf_store.GETWAREHOUSEHEADERS" />



  </tr>
</template>

<script setup>

import { ref } from 'vue';

import STFStore from '../../../store/store.stf.js';

import TableRow from '../../../layouts/TableRow.vue';
import TableRowInform from '../../../layouts/TableRowInform.vue';

const stf_store = STFStore();

const prop = defineProps(['each', 'index'])

const checked_style = ref(false);

// Row Checked Controll and add selecting Rows from dell
const checkedRows = () => {
  checked_style.value = !checked_style.value
  if (checked_style.value) {
      stf_store.warehouse_selecting_rows.push(prop.each)
  }
  else {
      stf_store.warehouse_selecting_rows = stf_store.warehouse_selecting_rows.filter((item) => item.stf_id !== prop.each.stf_id)
  }
}

</script>

<style lang="scss" scoped>


</style>
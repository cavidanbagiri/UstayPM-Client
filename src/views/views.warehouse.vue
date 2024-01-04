

<template>
  <div class="flex flex-col bg-white">

    <div v-if="user_store.user" class=" bg-white">

      <div class="sticky top-0 bg-white" style="font-family: 'Poppins', sans-serif;">
        <div class="flex flex-row anim h-10 bg-white items-center sticky left-16 "
          style="letter-spacing: 1px;font-size: x-small;display: inline-block;">

          <span :class="warehouse_store?.tab_num === 0 ? 'border-b-violet-800 border-b-4 ' : ''" @click="changeTabe(0)"
            class=" text-black px-3 mx-1 pb-2 border-b-2  cursor-pointer"> <i
              class="fa-solid fa-arrow-rotate-left fa-md"></i>
            Processing SM</span>
          <span :class="warehouse_store?.tab_num === 1 ? 'border-b-violet-800 border-b-4 ' : ''" @click="changeTabe(1)"
            class=" text-black px-3 pb-2 mx-1 border-b-2  cursor-pointer"> <i class="fa-solid fa-download fa-md"></i>
            Warehouse</span>
          <span :class="warehouse_store?.tab_num === 2 ? 'border-b-violet-800 border-b-4 ' : ''" @click="changeTabe(2)"
            class=" text-black px-3 pb-2 mx-1 border-b-2  cursor-pointer"> <i class="fa-solid fa-plus fa-md"></i>
            Accept SM</span>
          <span :class="warehouse_store?.tab_num === 3 ? 'border-b-violet-800 border-b-4 ' : ''" @click="changeTabe(3)"
            class=" text-black px-3 pb-2 mx-1 border-b-2  cursor-pointer"> <i class="fa-solid fa-minus fa-md"></i>
            Provide SM</span>
          <span :class="warehouse_store?.tab_num === 4 ? 'border-b-violet-800 border-b-4 ' : ''" @click="changeTabe(4)"
            class=" text-black px-3 pb-2 mx-1 border-b-2  cursor-pointer"> <i class="fa-solid fa-minus fa-md"></i>
            Provided</span>
          <!-- <span :class="warehouse_store?.tab_num === 4 ? 'border-b-violet-800 border-b-4 ' : ''" @click="changeTabe(4)"
            class=" text-black px-3 pb-2 mx-1 border-b-2  cursor-pointer"> <i class="fa-solid fa-upload fa-md"></i>
            Warehouse</span>
          <span :class="warehouse_store?.tab_num === 5 ? 'border-b-violet-800 border-b-4 ' : ''" @click="changeTabe(5)"
            class=" text-black px-3 pb-2 mx-1 border-b-2  cursor-pointer"> <i class="fa-solid fa-upload fa-md"></i>
            Provides</span> -->

        </div>
      </div>

      <keep-alive>
        <component :is="tabs[warehouse_store.tab_num]" />
      </keep-alive>

    </div>
    <div v-else>
      <span>User Not Login</span>
    </div>

  </div>
</template>

<script setup>

import Show_SM_Table from '../components/warehouse/processing_sm/Show_SM_Table.vue';
import Accept_SM_Table  from '../components/warehouse/accepting_sm/Accept_SM_Table.vue';
import Warehouse_Table from '../components/warehouse/warehouse/Warehouse_Table.vue';
import Provide_SM_Table from '../components/warehouse/provide_sm/Provide_SM_Table.vue';
import Provided_Table from '../components/warehouse/provided/Provided_Table.vue';

import WarehouseStore from '../store/store.warehouse';
import UserStore from '../store/store.user';
const warehouse_store = WarehouseStore();
const user_store = UserStore();
const tabs = [
Show_SM_Table,
Warehouse_Table,
Accept_SM_Table,
Provide_SM_Table,
Provided_Table
  // Received_SM_Table,
  // Provide_SM_Table,
  // Warehouse,
  // Provides,
];

const changeTabe = (num) => {
  num !== 2 ? warehouse_store.tab_num = num : ''
}

</script>

<style lang="scss" scoped></style>
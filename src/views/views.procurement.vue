<template>
  <div class=" flex flex-col  bg-white">

    <!-- If User Login -->
    <div v-if="user_store.user" class="bg-white" >
      <div class="sticky top-0 bg-white z-10" style="font-family: 'Poppins', sans-serif ;">

        <div class="flex flex-row anim h-10 bg-white items-center sticky left-16"
          style="letter-spacing: 1px;font-size: x-small;display: inline-block;">

          <div class="flex flex-row anim h-10 sticky top-0 bg-white w-full items-center"
            style="letter-spacing: 1px;font-size: x-small;">

            <span :class="procurement_store.tab_num === 0 ? 'border-b-violet-800 border-b-4 ' : ''" @click="changeTab(0)"
              class="text-black px-3 py-2 pt-2 mx-1 border-b-2  cursor-pointer"> <i class="fa-solid fa-plus fa-lg "></i>
              All STF</span>

            <span :class="procurement_store.tab_num === 1 ? 'border-b-violet-800 border-b-4 ' : ''" @click="changeTab(1)"
              class="text-black px-3 py-2 pt-2 mx-1 border-b-2  cursor-pointer"> <i class="fa-solid fa-list fa-lg "></i>
              ALl SMS</span>

            <span :class="procurement_store.tab_num === 2 ? 'border-b-violet-800 border-b-4 ' : ''" @click="changeTab(2)"
              class="text-black px-3 py-2 pt-2 mx-1 border-b-2  cursor-pointer"> <i
                class="fa-solid fa-warehouse fa-lg "></i>
              Create SMS</span>

            <span :class="procurement_store.tab_num === 3 ? 'border-b-violet-800 border-b-4 ' : ''" @click="changeTab(3)"
              class="text-black px-3 py-2 pt-2 mx-1 border-b-2  cursor-pointer"> <i class="fa-solid fa-upload fa-lg "></i>
              Warehouse</span>

          </div>

        </div>
      </div>

      <keep-alive>
        <component :is="tabs[procurement_store.tab_num]" />
      </keep-alive>

    </div>

    <div v-else>
      <span>User Not Login </span>
    </div>

  </div>
</template>

<script setup>


import STFAll from '../components/procurement/stf/Get_All_STF.vue';
import SMSAll from '../components/procurement/sms/Get_SM_Comp.vue';
import CreateSMS from '../components/procurement/createsms/Get_Creating_SM.vue';
import WarehouseData from '../components/procurement/warehouse/WarehouseData.vue';

import ProcurementStore from '../store/store.procurement';
import UserStore from '../store/store.user';

const user_store = UserStore();
const procurement_store = ProcurementStore();

const tabs = [STFAll, SMSAll, CreateSMS, WarehouseData];

const changeTab = (num) => {
  
  num !==2 ? procurement_store.tab_num = num : ''
}

</script>

<style lang="scss" scoped></style>
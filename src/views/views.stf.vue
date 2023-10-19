<template>
  <div class=" flex flex-col  bg-white">

    <!-- If User Login -->
    <div v-if="user_store.user" class="bg-white">
      <div class="bg-white sticky top-0">

        <div class="flex flex-row anim h-10 bg-white items-center sticky left-16 "
          style="letter-spacing: 1px;font-size: x-small;display: inline-block;">

          <div class="flex flex-row anim h-10 sticky top-0 bg-white w-full items-center"
            style="letter-spacing: 1px;font-size: x-small;">

            <span :class="stf_store.tab_num === 0 ? 'border-b-violet-800 border-b-4 ' : ''" @click="changeTab(0)"
              class="text-black px-3 py-2 pt-2 mx-1 border-b-2  cursor-pointer"> <i class="fa-solid fa-list fa-lg "></i>
              Show STF</span>

            <span :class="stf_store.tab_num === 1 ? 'border-b-violet-800 border-b-4 ' : ''" @click="changeTab(1)"
              class="text-black px-3 py-2 pt-2 mx-1 border-b-2  cursor-pointer"> <i class="fa-solid fa-plus fa-lg "></i>
              Create STF</span>

            <span :class="stf_store.tab_num === 2 ? 'border-b-violet-800 border-b-4 ' : ''" @click="changeTab(2)"
              class="text-black px-3 py-2 pt-2 mx-1 border-b-2  cursor-pointer"> <i class="fa-solid fa-warehouse fa-lg "></i>
               Warehouse</span>

            <span :class="stf_store.tab_num === 3 ? 'border-b-violet-800 border-b-4 ' : ''" @click="changeTab(3)"
              class="text-black px-3 py-2 pt-2 mx-1 border-b-2  cursor-pointer"> <i class="fa-solid fa-upload fa-lg "></i>
              Provides</span>

          </div> 

        </div>
      </div>

      <keep-alive>
        <component :is="tabs[stf_store.tab_num]" />
      </keep-alive>

    </div>

    <div v-else>
      <span>User Not Login </span>
    </div>

  </div>
</template>

<script setup>

import { onMounted } from 'vue';

import ShowSTF from '../components/stf/show_stf/ShowSTF.vue';
import CreateSTF from '../components/stf/create_stf/CreateSTF.vue';
import WarehouseData from '../components/stf/warehouse/WarehouseData.vue';

import UserStore from '../store/store.user_store';
import STFStore from '../store/store.stf.js'

const user_store = UserStore();
const stf_store = STFStore();

const tabs = [ShowSTF, CreateSTF, WarehouseData];

const changeTab = (num) => {
  stf_store.tab_num = num;
}

onMounted(async()=>{
  stf_store.fetchFieldsNames(1);
})

</script>

<style lang="scss" scoped></style>
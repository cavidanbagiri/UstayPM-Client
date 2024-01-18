<template>

  <div class="flex flex-col p-2">

    <!-- Title -->
    <div class="pt-5 pb-2 text-center font-bold" style="font-family: 'Inter';">
      <span class="w-full 400 text-5xl ">
        Starred Page
      </span>
    </div>

    <!-- Statstic Page -->
    <div>
      <span> </span>
      <TotalStatistic />
    </div>  

    <!-- Show Starred STF -->
    <StarredSTF/>

  </div>

</template>



<script setup>

import { onMounted, watchEffect } from 'vue';
import TotalStatistic from '../components/home/newversioncahrt/TotalStatistic.vue';
import StarredSTF from '../components/starred/STFStarred.vue';
import IndexStore from '../store/store.index';
import UserStore from '../store/store.user';
const index_store = IndexStore();
const user_store = UserStore();

watchEffect(async()=>{
  if(user_store.user?.id){
    const data = {
      user_id: user_store.user?.id,
      project_id: user_store.user?.projectId
    }
    await index_store.starredSTF(data);
    if(index_store.starred_stf.length){
      await index_store.getSTFStarredHeaders();
    }
  }
})

</script>



<style lang="scss" scoped>

</style>
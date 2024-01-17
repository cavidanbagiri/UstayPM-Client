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

  </div>

</template>



<script setup>

import STFStatistics from '../layouts/STFStatistics.vue';
import TotalStatistic from '../components/home/newversioncahrt/TotalStatistic.vue';

</script>



<style lang="scss" scoped>

</style>
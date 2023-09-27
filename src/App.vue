
<template>
  <div class="p-0 m-0 relative bg-white">


    <div class="sticky top-0 left-0 float-left p-0 z-10 m-0">

      <NavbarLayout />
    </div>

    <div class="p-0">

      <!-- <Off_Canvas_Comp v-if="store.GETCANVASTOGGLE" /> -->

      <router-view></router-view>

    </div>

  </div>
</template>

<script setup>

import NavbarLayout from './layouts/NavbarLayout.vue';

import { ArcElement,Chart as ChartJS } from "chart.js";

ChartJS.register(ArcElement);

</script>

<style scoped></style>

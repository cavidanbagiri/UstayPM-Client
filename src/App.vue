
<template>
  <div class="p-0 m-0 relative bg-white">


    <div class="sticky top-0 left-0 float-left p-0 z-10 m-0">

      <NavbarLayout />
    </div>

    <div class="p-0">

      <MenuCanvas v-if="index_store.canvas_toggle"/>

      <router-view></router-view>

    </div>

    <MessageMain/>

    <STFInformBar v-if="index_store.row_inform_condition"/>

  </div>
</template>

<script setup>

import NavbarLayout from './layouts/NavbarLayout.vue';
import MessageMain from './components/message/MessageMain.vue';
import MenuCanvas from './layouts/MenuCanvas.vue';
import STFInformBar from './layouts/STFInformBar.vue';
import IndexStore from './store/store.index';
import { ArcElement,Chart as ChartJS } from "chart.js";

const index_store = IndexStore();

ChartJS.register(ArcElement);

</script>

<style lang="scss" scped>
 @import './assets/style.scss';
</style>

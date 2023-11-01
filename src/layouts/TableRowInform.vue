<template>
  <td class="hover:text-blue-400 p-1 relative">
      <div class="flex items-center justify-center ">
          <span @click="getRowDetail"><i class="fa-solid fa-ellipsis-vertical fa-2xl text-gray-300 "></i></span>
          <STFInformComp :cond="cond" :each="prop?.each" @close-inform="closeRowDetail"/>
      </div>
  </td>
</template>

<script setup>

import { ref } from 'vue';
import STFInformComp from '../components/design/STFInformComp.vue';
const prop = defineProps(['each']);

const cond = ref(false);

// Get Double Click and Row Inform from dell
const getRowDetail = async () => {cond.value = true;}
const closeRowDetail = () => {cond.value = false;}

</script>

<style lang="scss" scoped></style>
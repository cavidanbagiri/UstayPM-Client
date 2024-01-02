<template>
  <td class="hover:text-blue-400 p-1 relative">
    <div class="flex items-center justify-center ">
      <span @click="getRowDetail"><i class="fa-solid fa-ellipsis-vertical fa-2xl text-green-500 "></i></span>

      <STFInformComp :cond="cond" :each="prop?.each" @close-inform="closeRowDetail">
      <!-- <STFInformComp :cond="cond" :each="prop?.each" > -->

        <!-- Return Material Slot -->
        <template #return_material>        
          <slot name="return_material"></slot>
        </template>

        <!-- Cancel STF Slot -->
        <template #cancel_stf>        
          <slot name="cancel_stf"></slot>
        </template>

        <!-- Cancel STF Slot -->
        <template #change_stf_status>        
          <slot name="change_stf_status"></slot>
        </template>

        <!-- Cancel STF Slot -->
        <template #stf_complete>        
          <slot name="stf_complete"></slot>
        </template>
        

      </STFInformComp>

    </div>
  </td>
</template>

<script setup>

import { ref } from 'vue';
import STFInformComp from '../components/design/STFInformComp.vue';


const prop = defineProps(['each']);

const cond = ref(false);

// Get Double Click and Row Inform from dell
const getRowDetail = async () => { cond.value = true; }
const closeRowDetail = () => { cond.value = false; }

</script>

<style lang="scss" scoped>

</style>
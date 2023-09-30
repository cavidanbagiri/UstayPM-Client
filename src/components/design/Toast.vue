
<template>
  <div v-if="stf_store.creating_mtf_toast" class="fixed top-10 left-1/3 p-3 border-2 w-1/3 h-24 rounded-xl bg-green-500 text-white flex items-center justify-center">

      <div>
          <span class="font-bold text-2xl " style="font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif">
              Mtf Successfully Created
          </span>
      </div>

  </div>
</template>

<script setup>

import STFStore from '../../store/store.stf';
const stf_store = STFStore();


</script>

<style lang="scss" scoped></style>
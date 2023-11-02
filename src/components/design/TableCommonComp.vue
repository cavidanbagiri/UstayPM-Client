<template>
  <div class="fixed right-0 top-0 z-50">
    <div class="animate-bounce mt-4 p-3 bg-green-500 rounded-full hover:bg-green-400">
      <i @click="toggle = !toggle" v-if="!toggle" class=" cursor-pointer  fa-solid fa-plus fa-2xl text-gray-100"></i>
      <i @click="toggle = !toggle" v-if="toggle" class=" cursor-pointer fa-solid fa-minus fa-2xl text-gray-100"></i>
    </div>
    <div v-if="toggle"
      class="bg-blue-600 py-2 rounded-lg flex flex-col items-center">
      <div class="my-3 px-3"><i class=" cursor-pointer hover:text-gray-200 fa-solid fa-gear fa-lg text-gray-100"></i>
      </div>
      <div class="my-3 px-3"><i
          class=" cursor-pointer hover:text-gray-200 fa-solid fa-chart-column fa-lg text-gray-100"></i></div>
      <div class="my-3 px-3"><i class=" cursor-pointer hover:text-gray-200 fa-solid fa-file-csv fa-lg text-gray-100"></i>
      </div>
      <div class="my-3 px-3"><i class=" cursor-pointer hover:text-gray-200 fa-regular fa-star fa-lg text-gray-100"></i>
      </div>
      <div class="my-3 px-3"><i class=" cursor-pointer hover:text-gray-200 fa-solid fa-ban fa-lg text-gray-100"></i></div>
      <div class="my-3 px-3"><i class=" cursor-pointer hover:text-gray-200 fa-solid fa-filter fa-lg text-gray-100"></i>
      </div>
      <div class="my-3 px-3"><i class=" cursor-pointer hover:text-gray-200 fa-solid fa-plus fa-lg text-gray-100"></i>
      </div>
      <div class="my-3 px-3"><i
          class=" cursor-pointer hover:text-gray-200 fa-solid fa-file-zipper fa-lg text-gray-100"></i></div>
    </div>
  </div>
</template>

<script setup>

  import { shallowRef } from 'vue';

  const toggle = shallowRef(false);

</script>

<style lang="scss" scoped></style>
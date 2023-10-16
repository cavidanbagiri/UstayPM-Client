<template>
  <div v-if="prop.cond"
    class="border flex flex-col bg-white absolute top-5 left-5 shadow-2xl p-2 px-4 rounded-2xl w-80 h-80">
    <div class="flex justify-between items-center">
      <span class=" pb-2 pt-1 text-lg text-gray-600 text-center font-bold">STF Information</span>
      <span class="text-xl" @click="close">
        <i class="fa-solid fa-xmark text-gray-400 hover:text-black"></i>
      </span>
    </div>
    <div class="flex flex-col">
      <span style="font-size: 0.9rem; font-family: ;" class=" py-2 hover:font-bold text-black ">Get Information</span>
      <span style="font-size: 0.9rem; font-family: ;" class=" py-2 hover:font-bold text-black ">Creating SM</span>
      <span style="font-size: 0.9rem; font-family: ;" class=" py-2 hover:font-bold text-black ">Set Star</span>
      <span style="font-size: 0.9rem; font-family: ;" class=" py-2 hover:font-bold text-black ">Hide</span>
    </div>

    <div class="my-3 flex justify-between">
      <span style="font-size: 0.9rem;">STatus</span>
      <div class="border text-sm px-1">
        <select class="select select-bordered w-full max-w-xs">
          <option disabled selected>Normal</option>
          <option>Normal Apple</option>
          <option>Normal Orange</option>
          <option>Normal Tomato</option>
        </select>
      </div>
    </div>

  </div>
</template>

<script setup>

// import {ref} from 'vue';

// const cond = ref(false);

const prop = defineProps(['cond'])
const emit = defineEmits(['closeInform'])

const close = () => {
  console.log('me also');
  emit('closeInform')
}

</script>

<style lang="scss" scoped></style>
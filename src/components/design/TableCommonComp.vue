<template>
  <div class="fixed right-0 top-0 z-50">
    <div class="animate-bounce mt-4 p-3 bg-green-500 rounded-full hover:bg-green-400">
      <i @click="openAnim" v-if="!toggle" class=" cursor-pointer  fa-solid fa-plus fa-2xl text-gray-100"></i>
      <i @click="closeAnim" v-if="toggle" class=" cursor-pointer fa-solid fa-minus fa-2xl text-gray-100"></i>
    </div>
    <div v-if="toggle"
    :class="anim_toggle ? 'anim-open' : 'anim-close' "  
    class="bg-blue-600 py-2 rounded-2xl flex flex-col items-center ">
      <div class="my-3 px-3"><i class=" cursor-pointer hover:text-gray-300 fa-solid fa-gear fa-lg text-gray-100"></i>
      </div>
      <div class="my-3 px-3"><i
          class=" cursor-pointer hover:text-gray-300 fa-solid fa-chart-column fa-lg text-gray-100"></i></div>
      <div class="my-3 px-3"><i class=" cursor-pointer hover:text-gray-300 fa-solid fa-file-csv fa-lg text-gray-100"></i>
      </div>
      <div class="my-3 px-3"><i class=" cursor-pointer hover:text-gray-300 fa-regular fa-star fa-lg text-gray-100"></i>
      </div>
      <div class="my-3 px-3"><i class=" cursor-pointer hover:text-gray-300 fa-solid fa-ban fa-lg text-gray-100"></i></div>
      <div class="my-3 px-3"><i class=" cursor-pointer hover:text-gray-300 fa-solid fa-filter fa-lg text-gray-100"></i>
      </div>
      <div class="my-3 px-3"><i class=" cursor-pointer hover:text-gray-300 fa-solid fa-plus fa-lg text-gray-100"></i>
      </div>
      <div class="my-3 px-3"><i
          class=" cursor-pointer hover:text-gray-300 fa-solid fa-file-zipper fa-lg text-gray-100"></i></div>
    </div>
  </div>
</template>

<script setup>

  import { shallowRef, ref } from 'vue';
  const toggle = shallowRef(false);

  const anim_toggle = ref(true);

  const openAnim = () => {
    anim_toggle.value = true;
      toggle.value = true;
  }
  
  const closeAnim = () => {
    anim_toggle.value = false;
    setTimeout(()=>{
      toggle.value = false;
    }, 500)
  }

</script>

<style scoped>

.anim-open {
    animation: openfilter 0.5s;
}
.anim-close {
    animation: closefilter 0.5s;
}

@keyframes openfilter {
    from {
        transform: translateX(110%);
    }

    to {
        transform: translateX(0%);
    }
}
@keyframes closefilter {
    from {
        transform: translateX(0%);
    }

    to {
        transform: translateX(110%);
    }
}

</style>
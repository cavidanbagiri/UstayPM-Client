
<template>
  <div v-if="prop.cond" class="fixed top-28 left-1/3 w-1/3 p-4 z-50 text-white shadow-2xl font-bold border-1 bg-gradient-to-r from-green-400 to-green-500 flex items-center justify-center anim">

      <div>
          <span class=" text-xl " style="font-family: 'Figtree', sans-serif; ">
              {{ prop.messages }}
          </span>
      </div>

  </div>
</template>

<script setup>

const prop = defineProps(['cond', 'messages'])



</script>

<style scoped>

.anim{
    animation: right_to_center;
    animation-duration: 0.5s;
}

@keyframes right_to_center {
    from{left: -20%;}
    /* from{left:-100px} */
    /* to{top:500px} */
}

</style>
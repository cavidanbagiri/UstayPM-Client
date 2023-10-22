
<template>
  <div v-if="prop.cond" class="fixed top-5 left-1/3 p-1  w-1/3  rounded-lg text-sm bg-green-500 text-white flex items-center justify-center anim">

      <div>
          <span class=" text-xl " style="font-family: 'Roboto', sans-serif; ">
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
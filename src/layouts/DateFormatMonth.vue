<template>
  <div class="flex items-center justify-center">
      <span>{{ moment(prop?.time).format("YYYY MMMM DD HH:mm") }}</span>
  </div>
</template>

<script setup>

  import moment from 'moment';

  const prop = defineProps(['time']);

</script>

<style lang="scss" scoped>

</style>
<template>
    <div class="text-gray-400 text-xs" style="font-family: 'Figtree';">
        <span>{{ moment(prop?.time).format("LT") }}</span>
    </div>
  </template>
  
  <script setup>
  
    import moment from 'moment';
  
    const prop = defineProps(['time']);
  
  </script>
  
  <style lang="scss" scoped>
  
  </style>
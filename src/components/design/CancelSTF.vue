<template>
  <!-- Cancel STF -->
  <div v-if="prop.toggle_cancelstf"
    class="fixed top-0 left-0 w-full h-full bg-black bg-opacity-40 flex justify-center items-center">

    <div class=" border bg-white rounded-lg bg-opacity-100 flex flex-col h-96 w-96 z-50">

      <!-- Close Current Cancel STF Comp -->
      <div>
        <span @click="closeCanceledSTF" class="text-end pr-5 py-2">
          <i class="fa-solid fa-xmark text-3xl"></i>
        </span>
      </div>

      <!-- Cancel STF Title -->
      <div>
        <span class="text-3xl text-center">
          Canceled STF
        </span>
      </div>

      <!-- Cancel STF Comment -->
      <div>
        <input class="py-2 border" type="text" name="" id="" placeholder="Comment Cant Be Empty" v-model="comment">
      </div>

      <!-- Post Cancel STF -->
      <button @click="postCancelSTF" class="btn btn-outline btn-error">Error</button>

    </div>


  </div>
</template>

<script setup>

import {ref} from 'vue';
import IndexStore from '../../store/store.index';

const index_store = IndexStore();

const prop = defineProps(['toggle_cancelstf', 'user_id', 'stf_id']);
const emit = defineEmits(['closeCanceledSTF']);

const comment = ref('');

const closeCanceledSTF = () => {
  emit("closeCanceledSTF");
}

const postCancelSTF = async () => {
  await index_store.cancelSTF({user_id: prop.user_id, stf_id: prop.stf_id, comment: comment.value});
}

</script>

<style lang="scss" scoped></style>
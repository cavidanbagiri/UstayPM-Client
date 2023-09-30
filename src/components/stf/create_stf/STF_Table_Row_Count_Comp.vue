
<template>
    <div class="flex justify-between mt-1">
        <button @click=addNewRow
            class=" font-bold py-2 px-2 my-1 text-xs outline-none font-mono  border text-gray-100 rounded-xl bg-orange-500 hover:bg-orange-400  hover:shadow-xl ">
            <i class="fa-solid fa-plus fa-lg"></i>
            Add New Column
        </button>
        <button @click="removeRow"
            class="  py-2 px-2 my-1 text-xs outline-none font-mono font-bold border text-gray-100 rounded-xl bg-red-500 hover:bg-red-400  hover:shadow-xl ">
            <i class="fa-solid fa-minus fa-lg"></i>
            Remove Column
        </button>
    </div>
</template>

<script setup>

    const emit = defineEmits(['emitAddNewRow','emitRemoveRow']);
    
    // Add New Row
    const addNewRow = () => emit('emitAddNewRow');
    
    // Remove New Row
    const removeRow = () => emit('emitRemoveRow');
    

</script>

<style lang="">
    
</style>
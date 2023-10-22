<template>
  <div class="grid grid-cols-10 gap-3 justify-between sticky bg-white">

    <div class=" col-span-2 flex flex-row justify-between border shadow-md w-full p-3 rounded-md
          hover:shadow-xl hover:cursor-pointer ">
      <div class="flex flex-col justify-between">
        <span class="text-gray-600 analyz_header">Total</span>
        <span class="bg-gray-200 rounded-md text-gray-800 p-2 analyz_get_data">Get Data</span>
      </div>
      <div class="flex items-center ">
        <div class="rounded-full flex border-8 border-gray-600 w-16 h-16  items-center justify-center analyz_show_data">
          10
        </div>
      </div>
    </div>
    <div class=" col-span-2 flex flex-row justify-between border shadow-md w-full p-3 rounded-md
          hover:shadow-xl hover:cursor-pointer ">
      <div class="flex flex-col justify-between">
        <span class="text-gray-600 analyz_header">Waiting</span>
        <span class="bg-red-200 rounded-md text-red-800 p-2 analyz_get_data">Get Data</span>
      </div>
      <div class="flex items-center ">
        <div class="rounded-full flex border-8 border-red-500 w-16 h-16  items-center justify-center analyz_show_data">
          7
        </div>
      </div>
    </div>

    <div class=" col-span-2 flex flex-row justify-between border w-full p-3 rounded-md shadow-md 
          hover:shadow-xl hover:cursor-pointer ">
      <div class="flex flex-col justify-between">
        <span class="text-gray-600 analyz_header">Process</span>
        <span class="bg-blue-200 rounded-md text-blue-800 p-2 analyz_get_data">Get Data</span>
      </div>
      <div class="flex items-center ">
        <div class="rounded-full flex border-8 border-blue-500 w-16 h-16  items-center justify-center analyz_show_data">
          3
        </div>
      </div>
    </div>

    <div class=" col-span-2 flex flex-row justify-between border w-full p-3 rounded-md
          shadow-md hover:shadow-xl hover:cursor-pointer ">
      <div class="flex flex-col justify-between">
        <span class="text-gray-600 analyz_header">Received</span>
        <span class="bg-green-200 rounded-md text-green-800 p-2 analyz_get_data">Get Data</span>
      </div>
      <div class="flex items-center ">
        <div class="rounded-full flex border-8 border-green-500 w-16 h-16  items-center justify-center analyz_show_data">
          4
        </div>
      </div>
    </div>

    <div class=" col-span-2 flex flex-row justify-between border w-full p-3 rounded-md
          shadow-md hover:shadow-xl hover:cursor-pointer ">
      <div class="flex flex-col justify-between">
        <span class="text-gray-600 analyz_header">Provide</span>
        <span class="bg-pink-200 rounded-md text-pink-800 p-2 analyz_get_data">Get Data</span>
      </div>
      <div class="flex items-center ">
        <div class="rounded-full flex border-8 border-pink-500 w-16 h-16  items-center justify-center analyz_show_data">
          2
        </div>
      </div>
    </div>


  </div>
</template>

<script setup>



</script>

<style lang="scss" scoped>
</style>
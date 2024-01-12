<template>
  <!-- Warehouse Datas -->
  <div class="col-span-5  my-3 rounded-xl flex flex-col items-center justify-between "
            style="font-family: 'Jost';">
            
            <div class="w-full h-full flex flex-row">
                <div class="flex flex-col w-full h-full  ">

                    <!-- Project -->
                    <div class="flex flex-col h-full mb-4 mr-4 bg-white rounded-xl justify-center items-center">
                        <span class="w-full pl-3 mt-4 text-sm ">
                            <span class="py-2 px-4 rounded-lg bg-gray-100 cursor-pointer hover:shadow-xl duration-300">
                                <i class="fa-solid fa-ellipsis-vertical fa-lg"></i>
                            </span>
                        </span>
                        <div class="w-20 h-20 bg-blue-100 flex justify-center items-center rounded-full mt-4">
                            <i class="fa-solid fa-bars-progress fa-xl text-blue-500"></i>   
                        </div>
                        <span class="text-4xl font-bold mt-4" style="font-family: 'Poppins';">57</span>
                        <span class="text-2xl font-bold mt-4" >Project</span>
                        <span class="text-sm w-full font-thin mt-4 pl-3 pb-2 text-blue-400 " style="font-family: 'Inter';">View All
                            <i class="fa-solid fa-arrow-right"></i>
                        </span>
                    </div>
                    
                    <!-- Consumables -->
                    <div class="flex flex-col h-full mt-4 mr-4 bg-white rounded-xl justify-center items-center">
                        <span class="w-full pl-3 mt-4 text-sm ">
                            <span class="py-2 px-4 rounded-lg bg-gray-100 cursor-pointer hover:shadow-xl duration-300">
                                <i class="fa-solid fa-ellipsis-vertical fa-lg"></i>
                            </span>
                        </span>
                        <div class="w-20 h-20 bg-orange-100 flex justify-center items-center rounded-full mt-4">
                            <i class="fa-solid fa-oil-well fa-xl text-orange-500"></i>   
                        </div>
                        <span class="text-4xl font-bold mt-4" style="font-family: 'Poppins';">793</span>
                        <span class="text-2xl font-bold mt-4" >Consumables</span>
                        <span class="text-sm w-full font-thin mt-4 pl-3 pb-2 text-orange-400 " style="font-family: 'Inter';">View All
                            <i class="fa-solid fa-arrow-right"></i>
                        </span>
                    </div>
                   
                </div>
                <div class="flex flex-col w-full h-full">

                    <!-- Fixture -->
                    <div class="flex flex-col h-full mb-4 ml-4 bg-white rounded-xl justify-center items-center">
                        <span class="w-full pl-3 mt-4 text-sm ">
                            <span class="py-2 px-4 rounded-lg bg-gray-100 cursor-pointer hover:shadow-xl duration-300">
                                <i class="fa-solid fa-ellipsis-vertical fa-lg"></i>
                            </span>
                        </span>
                        <div class="w-20 h-20 bg-green-100 flex justify-center items-center rounded-full mt-4">
                            <i class="fa-solid fa-calendar fa-xl text-green-500"></i>   
                        </div>
                        <span class="text-4xl font-bold mt-4" style="font-family: 'Poppins';">114</span>
                        <span class="text-2xl font-bold mt-4" >Fixture</span>
                        <span class="text-sm w-full font-thin mt-4 pl-3 pb-2 text-green-400 " style="font-family: 'Inter';">View All
                            <i class="fa-solid fa-arrow-right"></i>
                        </span>
                    </div>

                    <!-- Break -->
                    <div class="flex flex-col h-full mt-4 ml-4 bg-white rounded-xl justify-center items-center">
                        <span class="w-full pl-3 mt-4 text-sm ">
                            <span class="py-2 px-4 rounded-lg bg-gray-100 cursor-pointer hover:shadow-xl duration-300">
                                <i class="fa-solid fa-ellipsis-vertical fa-lg"></i>
                            </span>
                        </span>
                        <div class="w-20 h-20 bg-red-100 flex justify-center items-center rounded-full mt-4">
                            <i class="fa-solid fa-wrench fa-xl text-red-500"></i>   
                        </div>
                        <span class="text-4xl font-bold mt-4" style="font-family: 'Poppins';">9</span>
                        <span class="text-2xl font-bold mt-4" >Break</span>
                        <span class="text-sm w-full font-thin mt-4 pl-3 pb-2 text-red-400 " style="font-family: 'Inter';">View All
                            <i class="fa-solid fa-arrow-right"></i>
                        </span>
                    </div>
                    
                </div>
            </div>
        </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>
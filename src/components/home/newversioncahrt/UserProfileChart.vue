<template>
  <!-- User Profile Section -->
  <div class="col-span-4 ml-3 bg-white rounded-xl flex flex-col items-center justify-between h-[30rem]"
            style="font-family: 'Jost';">

            <div class="w-full pl-8 border-b py-3   flex justify-between">
                <span class="text-2xl font-bold " style="font-family: 'Roboto';">
                    User Profile
                </span>
                <span class="text-2xl font-bold text-gray-500 pr-4 cursor-pointer">
                    <i class="fa-solid fa-ellipsis fa-xs"></i>
                </span>
            </div>

            <div class="flex flex-col  w-full h-full items-center rounded-b-xl">
                <div class=" w-[15rem] h-[15rem] flex justify-center items-center" style="">
                    <img class="w-[12rem] h-[12rem] rounded-full"
                        src="https://blog.photofeeler.com/wp-content/uploads/2017/12/linkedin-profile-picture.jpg" alt="">
                </div>
                <div class="flex flex-col justify-center items-center">
                    <div>
                        <span class="text-4xl font-bold text-center ">Cavidan Bagirli</span>
                    </div>
                    <div class="mt-2">
                        <span class="text-xl text-center text-gray-400 ">cbagirli@ustay.com</span>
                    </div>
                    <div class="flex justify-between mt-5">
                        <button class="py-2 px-3 rounded-lg mx-4 text-white font-bold bg-violet-600">Edit Profile</button>
                        <button class="py-2 px-3 rounded-lg mx-4 text-white font-bold bg-violet-600">Edit Image</button>
                    </div>
                </div>
            </div>

        </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>
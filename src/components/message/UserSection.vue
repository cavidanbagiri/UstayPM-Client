<template>
    <div v-if="message_store.toggle_user" class="flex flex-col w-1/2 p-2 overflow-auto">
            <!-- Text Section -->
            <div class="text-center">
                <span class=" text-4xl" style="font-family: 'Poppins';">Users</span>
            </div>
            <!-- Search Bar -->
            <div>
                <input
                    class="py-3 px-2 border-2 rounded-xl w-full me-1 outline-none hover:orange-pink-500 text-gray-500 shadow-lg"
                    style="font-family: 'Poppins';" type="text" placeholder="Search ...">
            </div>
            <!-- User Liste Section -->
            <div>
                <ul class="" style="font-family: 'Roboto';">
                    <li class="bg-white my-2 p-2 py-3 flex items-center rounded-lg cursor-pointer" >
                        <img class="w-14 h-14 rounded-full"
                            src="https://static.wixstatic.com/media/033319_e0f92699ac1741baa4b84b6755734bb6~mv2.png/v1/crop/x_89,y_0,w_2601,h_1732/fill/w_480,h_486,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/IMG_0297_edited.png"
                            alt="">
                        <div class="flex flex-col pl-2">
                            <span class="text-lg">
                                Bagirli Cavidan
                            </span>
                            <span class="text-sm text-gray-400" style="font-family:'Poppins'">
                                Warehouse Specialist
                            </span>
                        </div>
                    </li>
                    <li class="bg-white my-2 p-2 py-3 flex items-center rounded-lg cursor-pointer" >
                        <img class="w-14 h-14 rounded-full"
                            src="https://storage.googleapis.com/pai-images/87e2d1c5669540e584d5cdc8b012b209.jpeg"
                            alt="">
                        <div class="flex flex-col pl-2">
                            <span class="text-lg">
                                Ibrahim Avsar
                            </span>
                            <span class="text-sm text-gray-400" style="font-family:'Poppins'">
                                Warehouse Chief
                            </span>
                        </div>
                    </li>
                    <li v-for="i in 10" class="bg-white my-2 p-2 py-3 flex items-center rounded-lg cursor-pointer" >
                        <img class="w-14 h-14 rounded-full"
                            src="https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg"
                            alt="">
                        <div class="flex flex-col pl-2">
                            <span class="text-lg">
                                Cagatay Caglayan
                            </span>
                            <span class="text-sm text-gray-400" style="font-family:'Poppins'">
                                Russian Projects Director
                            </span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
</template>

<script setup>
import MessageStore from '../../store/store.message';
const message_store = MessageStore();
</script>

<style lang="scss" scoped>

</style>
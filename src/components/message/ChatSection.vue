<template>
    
    <div 
    :class="message_store.toggle_user ? 'w-1/2' : 'w-full' "
    class="justify-between p-1 shadow-2xl flex flex-col border rounded-3xl ">
            <!-- Close Button Section -->
            <div class=" flex justify-between py-2 px-5">
                <span class="cursor-pointer"  @click="toggleUsers" ><i class=" hover:text-blue-400 fa-regular fa-user fa-xl text-black"></i></span>
                <span class="cursor-pointer"  @click="closeChat" ><i class=" hover:text-blue-400 fa-solid fa-xmark fa-2xl text-gray-500"></i></span>
            </div>
            <!-- Sender Information Section -->
            <div class="mx-2 bg-white" style="font-family: 'Poppins';">
                <div class="flex flex-row items-center justify-start p-1">
                    <img class="w-10 h-10 rounded-full"
                        src="https://imgv3.fotor.com/images/gallery/Realistic-Male-Profile-Picture.jpg" alt="">
                    <span class="text-xl pl-5">Ibrahim Avsar</span>
                </div>
            </div>
            <!-- Message Area -->
            <div class="flex flex-col bg-white h-full p-2 rounded-xl mx-2 mt-2 overflow-scroll">
                <!-- Sender -->
                <div class="flex flex-row justify-start p-1 items-center">
                    <img class="w-11 h-11 rounded-full"
                        src="https://imgv3.fotor.com/images/gallery/Realistic-Male-Profile-Picture.jpg" alt="">
                    <span class="sender">Merhaba </span>
                </div>
                <!-- Receiver -->
                <div class="flex flex-row justify-end p-1 items-center">
                    <span class="receiver">Hello</span>
                    <img class="w-11 h-11 rounded-full"
                        src="https://pics.craiyon.com/2023-06-18/0136ddc42a664843ad7c509dd59c7d98.webp" alt="">
                </div>
                <!-- Sender -->
                <div class="flex flex-row justify-start p-1 items-center">
                    <img class="w-11 h-11 rounded-full"
                        src="https://imgv3.fotor.com/images/gallery/Realistic-Male-Profile-Picture.jpg" alt="">
                    <span class="sender">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem odio distinctio
                        neque ut, laboriosam placeat. Eum eaque debitis ipsum vero. </span>
                </div>
                <!-- Receiver -->
                <div class="flex flex-row justify-end p-1 items-center">
                    <span class="receiver">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
                        voluptatibus?</span>
                    <img class="w-11 h-11 rounded-full"
                        src="https://pics.craiyon.com/2023-06-18/0136ddc42a664843ad7c509dd59c7d98.webp" alt="">
                </div>
                <!-- Sender -->
                <div class="flex flex-row justify-start p-1 items-center">
                    <img class="w-11 h-11 rounded-full"
                        src="https://imgv3.fotor.com/images/gallery/Realistic-Male-Profile-Picture.jpg" alt="">
                    <span class="sender">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae assumenda quidem
                        eligendi culpa maxime ad, nulla praesentium eius non sit aperiam earum omnis nobis minima quis
                        inventore dolor error quas repellendus veritatis nesciunt tempore commodi? Vel earum ducimus impedit
                        suscipit, quis omnis optio, culpa cum, maxime repellat aut! Ullam, fugit!</span>
                </div>
                <!-- Receiver -->
                <div class="flex flex-row justify-end p-1 items-center">
                    <span class="receiver">Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio commodi quos
                        quas, sunt ab repudiandae.</span>
                    <img class="w-11 h-11 rounded-full"
                        src="https://pics.craiyon.com/2023-06-18/0136ddc42a664843ad7c509dd59c7d98.webp" alt="">
                </div>
            </div>
            <!-- Text Input Area -->
            <div class="flex flex-row items-center justify-between py-2 px-1">
                <input
                    class="py-3 px-2 border-2 rounded-full w-full me-1 outline-none hover:orange-pink-500 text-gray-500 shadow-xl"
                    style="font-family: 'Poppins';" type="text" placeholder="Text ...">
                <span class="p-3 bg-orange-500 rounded-full text-gray-100 shadow-xl">
                    <i class="fa-regular fa-paper-plane fa-xl"></i>
                </span>
            </div>
        </div>
</template>

<script setup>
import MessageStore from '../../store/store.message';
const message_store = MessageStore();


const closeChat = () => {
    message_store.toggle_message = false;
}

const toggleUsers = () => {
    message_store.toggle_user = !message_store.toggle_user 
}


</script>

<style lang="scss" scoped>
.sender {
    padding: 8px;
    color: white;
    font-size: large;
    margin-left: 5px;
    margin-right: 5px;
    margin-top: 3px;
    margin-bottom: 3px;
    background-color: #a855f7;
    border-radius: 10px;
}

.receiver {
    padding: 8px;
    color: white;
    font-size: large;
    margin-left: 5px;
    margin-right: 5px;
    margin-top: 3px;
    margin-bottom: 3px;
    text-align: right;
    background-color: #2563eb;
    border-radius: 10px;
}
</style>
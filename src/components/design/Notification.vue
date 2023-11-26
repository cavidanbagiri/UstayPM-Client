<template>
    <div style="font-family: 'Poppins';"
        class="flex flex-col text-xl absolute top-0 left-12 w-[500px] max-h-[650px] overflow-auto bg-white py-2 px-3 border rounded-lg shadow-2xl">
        <div class="flex justify-between">
            <div class="flex">
                <span>
                    <img src="../../assets/bellicon.webp" class="w-10 h-10" alt="">
                </span>
                <span class="text-center text-3xl pt-1 pb-2 font-bold">
                    Notifications
                </span>
            </div>
            <div>
                <span @click="closeNotification" class="hover:cursor-pointer hover:text-gray-500">
                    <i class="fa-solid fa-xmark"></i>
                </span>
            </div>
        </div>
        <ul class="text-sm" style="font-family: 'Roboto';">
            <li v-for="i in index_store?.new_stf_notification" class="border p-1 flex my-2 rounded-lg hover:cursor-pointer hover:bg-gray-100 items-center">
                <!-- User Image -->
                <div class="flex  w-full">
                    <img class="w-14 h-14 rounded-full"
                        src="https://static.wixstatic.com/media/033319_e0f92699ac1741baa4b84b6755734bb6~mv2.png/v1/crop/x_89,y_0,w_2601,h_1732/fill/w_480,h_486,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/IMG_0297_edited.png"
                        alt="">
                    <div class="flex flex-col pl-2 justify-center w-full">
                        <span class="text-lg font-bold">
                            {{i.username}}
                        </span>
                        <span class="font-thin text-sm text-gray-500 pl-2" style="font-family: 'Poppins';">
                            <span class="text-red-500">&#9679</span>
                            Create New STF {{ i.stfno }}
                        </span>
                        <div class=" flex items-center my-1 justify-end">
                            <span class="text-gray-400 text-xs font-bold" style="font-family: 'Poppins';">
                                <DateFormatMonth :time="i.createdAt" />
                            </span>
                        </div>
                    </div>
                </div>
            </li>
            
        </ul>
    </div>
</template>

<script setup>

import DateFormatMonth from '../../layouts/DateFormatMonth.vue';

import IndexStore from '../../store/store.index';
const index_store = IndexStore();

const emit = defineEmits(['closeNotification']);

const closeNotification = () => {

    emit('closeNotification');

}

</script>

<style lang="scss" scoped></style>
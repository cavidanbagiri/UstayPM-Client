<template>
    <div style="font-family: 'Inter';"
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
            <!-- This Is For New STF Notification -->
            <li v-for="i in index_store?.new_stf_notification" class="border p-1 flex my-2 rounded-lg hover:cursor-pointer hover:bg-gray-100 items-center">
                <!-- User Image -->
                <div class="flex  w-full">
                    <img class="w-14 h-14 rounded-full"
                        src="https://static.wixstatic.com/media/033319_e0f92699ac1741baa4b84b6755734bb6~mv2.png/v1/crop/x_89,y_0,w_2601,h_1732/fill/w_480,h_486,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/IMG_0297_edited.png"
                        alt="">
                    <div class="flex flex-col pl-2 justify-center w-full">
                        <div class="flex flex-row justify-between items-center">
                            <span class="text-lg font-bold pl-2">
                                {{i?.user_name}}
                            </span>
                            <span @click="newSTFNotificationRead(i.notification_id)" class="hover:bg-gray-200 px-2 py-1"><i class="fa-solid fa-xmark "></i></span>
                        </div>
                        <span class="font-bold text-[15px] text-gray-500 pl-2" style="font-family: 'Jost';">
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
            <!-- This Is For Accept SMS Notification -->
            <li v-for="i in index_store?.accept_sms_notification" class="border p-1 flex my-2 rounded-lg hover:cursor-pointer hover:bg-gray-100 items-center">
                <!-- User Image -->
                <div class="flex  w-full">
                    <img class="w-14 h-14 rounded-full"
                        :src="user_store.user?.image_url"
                        alt="">
                    <div class="flex flex-col pl-2 justify-center w-full">
                        <div class="flex flex-row justify-between items-center">
                            <span class="text-lg font-bold pl-2">
                                {{i?.orderer}}
                            </span>
                            <span @click="acceptSMRead(i.notification_id)" class="hover:bg-gray-200 px-2 py-1"><i class="fa-solid fa-xmark "></i></span>
                        </div>
                        <span class="font-bold text-[15px] text-gray-500 pl-2" style="font-family: 'Jost';">
                            <span class="text-red-500 py-1">&#9679</span>
                            Accepted New SMS <span class="text-red-500 text-[14px]">{{ i?.sm_no }}</span>
                        </span>
                        <span class="text-gray-400 text-xs font-bold flex justify-start pl-2 py-2" style="font-family: 'Poppins';">
                                <DateFormatMonth :time="i.createdAt" />
                            </span>
                        <!-- <div class=" flex items-center my-1 justify-end">
                            <span class="text-gray-400 text-xs font-bold" style="font-family: 'Poppins';">
                                <DateFormatMonth :time="i.createdAt" />
                            </span>
                        </div> -->
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script setup>

import DateFormatMonth from '../../layouts/DateFormatMonth.vue';

import UserStore from '../../store/store.user';
import IndexStore from '../../store/store.index';
const user_store = UserStore();
const index_store = IndexStore();

const emit = defineEmits(['closeNotification']);

const closeNotification = () => {
    emit('closeNotification');
}

const acceptSMRead = async (notification_id) => {
    if(user_store.user?.id){
        const data = {
            user_id : user_store.user?.id,
            notification_id: notification_id
        }
        await index_store.acceptSMRead(data).then((respond)=>{
            for(let i of index_store.accept_sms_notification){
                if(i.notification_id === notification_id){
                    index_store.accept_sms_notification = index_store.accept_sms_notification.filter((item)=>{
                        return item.notification_id!==notification_id;
                    })
                }
            }
        })
    }
}

const newSTFNotificationRead = async(notification_id) => {
    if(user_store.user?.id){
        const data = {
            user_id : user_store.user?.id,
            notification_id: notification_id
        }
        await index_store.NewSTFNotificationRead(data).then((respond)=>{
            for(let i of index_store.new_stf_notification){
                if(i.notification_id === notification_id){
                    index_store.new_stf_notification = index_store.new_stf_notification.filter((item)=>{
                        return item.notification_id!==notification_id;
                    })
                }
            }
        })
    }
}

</script>

<style lang="scss" scoped></style>
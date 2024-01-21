<template>
    <div class="col-span-5  bg-white  rounded-xl h-[30rem] overflow-hidden hover:overflow-y-scroll"
        style="font-family: 'Jost';">

        <!-- Title Section -->
        <div class="w-full pl-8 py-3 flex justify-between" style="font-family: 'Poppins';">
            <span class="text-2xl font-bold ">
                Last Created STF
            </span>
            <span class="text-sm flex justify-center items-center font-bold text-gray-500 pr-4 cursor-pointer">

                <!-- <div class="bg-gray-100 mr-3 rounded-xl border px-2">
                    <span><i class="fa-solid fa-magnifying-glass"></i></span>
                    <input class="outline-none w-48 p-2 bg-gray-100 rounded-xl" type="text" placeholder="Search ...">
                </div> -->
                <router-link to="/procurement">
                    <button class="bg-indigo-500 text-white py-2 px-3 rounded-lg">
                        View All
                    </button>
                </router-link>
            </span>
        </div>

        <!-- Table Section -->
        <div class="mt-1 ">

            <table v-if="index_store.stf_data_headers.length" class=" w-full ">

                <!-- Table Static Header -->
                <thead class="bg-gray-100" style="font-family: 'Inter';">
                    <th class="text-[16px] w-24 px-4 font-medium">No</th>
                    <th class="py-2 text-[16px] text-start pl-2 font-medium" v-for="i in index_store.stf_data_headers">
                        {{ i.showname }}
                    </th>
                </thead>

                <!-- Table Rows -->
                <tr v-for="(i, index) in index_store.stf_data" class=" text-[14px] " style="font-family: 'Inter';">

                    <!-- Index Num -->
                    <th>{{ index + 1 }}</th>
                    <!-- <th class=" flex items-center justify-center items-end">
                        <span class="relative flex h-3 w-3 ">
                            <span
                                class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                            <span class="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
                        </span>
                    </th> -->

                    <!-- Row Amount and Unit For Center Text -->
                    <th class=" py-2 text-start  text-[15px] font-medium" v-for="j in index_store.stf_data_headers">

                        <!-- Row STF Num -->
                        <div class="flex w-40 p-1 justify-start text-xs " v-if="j.name === 'stf_num'">
                            <span class="flex items-center justify-center bg-green-100 rounded-xl px-2 py-2">
                                <span class=" text-green-500">
                                    {{ i[j.name] }}
                                </span>
                            </span>
                        </div>

                        <!-- Row User for showing Image -->
                        <div class="flex w-72 text-[14px] justify-start " v-else-if="j.name === 'created_by'">
                            <span class="flex items-center ">
                                <img class="ml-2 w-10 h-10 rounded-full" :src="i.image_url" alt="">
                                <span class="pl-3 ">
                                    {{ i[j.name] }}
                                </span>
                            </span>
                        </div>

                        <!-- Row User for showing Image -->
                        <div class="flex w-72 text-[14px] justify-start " v-else-if="j.name === 'created_date'">
                            <DateFormatDate :time="i[j.name]" />
                        </div>

                    </th>
                </tr>

            </table>
        </div>
    </div>
</template>

<script setup>

import { onMounted } from 'vue';
import DateFormatMonth from '../../../layouts/DateFormatMonth.vue';
import DateFormatDate from '../../../layouts/DateFormatDate.vue'

import IndexStore from '../../../store/store.index';
import UserStore from '../../../store/store.user';

const index_store = IndexStore();
const user_store = UserStore();

onMounted(async () => {
    if (user_store.user?.projectId) {
        await index_store.fetchSTFData(user_store.user?.projectId)
        if (index_store.stf_data_headers.length === 0) {
            await index_store.getHeaders();
        }
    }

})

</script>

<style lang="scss" scoped></style>
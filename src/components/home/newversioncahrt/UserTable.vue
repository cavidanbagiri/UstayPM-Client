<template>
    <div class="col-span-3  bg-white  rounded-xl h-[30rem] overflow-hidden hover:overflow-y-scroll"
        style="font-family: 'Jost';">

        <!-- Title Section -->
        <div class="w-full pl-8 border-b py-3   flex justify-between">
            <span class="text-2xl font-bold " style="font-family: 'Poppins';">
                Users
            </span>
            <span class="text-sm flex justify-center items-center font-bold text-gray-500 pr-4 cursor-pointer">

                <!-- <div class="bg-gray-100 mr-3 rounded-xl border px-2">
                    <span><i class="fa-solid fa-magnifying-glass"></i></span>
                    <input class="outline-none w-48 p-2 bg-gray-100 rounded-xl" type="text" placeholder="Search ...">
                </div> -->
                <button class="bg-indigo-500 text-white py-2 px-2 rounded-lg">
                    View All
                </button>
            </span>
        </div>

        <!-- Table Section -->
        <div class="mt-1 ">

            <table v-if="index_store.user_data_headers.length" class=" w-full ">
                <!-- Table Static Header -->
                <thead class="bg-gray-100">
                    <th style="font-family: 'Jost';" class="font-thin text-[16px] w-24 px-4">No</th>
                    <th class="py-2 text-[16px] text-center font-thin" style="font-family: 'Jost';"
                        v-for="i in index_store.user_data_headers">
                        {{ i.showname }}
                    </th>
                </thead>

                <!-- Table Rows -->
                <tr v-for="(i, index) in index_store.user_data" class=" text-[15px]" style="font-family: 'Jost';">
                    <!-- Index Num -->
                    <th>{{ index + 1 }}</th>

                    <!-- Row Amount and Unit For Center Text -->
                    <th class=" py-2 text-start  " v-for="j in index_store.user_data_headers"
                        style="font-family: 'Jost';">

                        <!-- Row User for showing Image -->
                        <div class="flex w-72 text-[15px] justify-start"
                            style="font-family: 'Jost';">
                            <span class="flex items-center ">
                                <img class="ml-2 w-10 h-10 rounded-full" :src="i.image_url" alt="">
                                <span class="pl-3 ">
                                    {{ i[j.name] }}
                                </span>
                            </span>
                        </div>

                    </th>
                </tr>

            </table>
        </div>
    </div>
</template>

<script setup>

import { onMounted } from 'vue';

import IndexStore from '../../../store/store.index';
import UserStore from '../../../store/store.user';

const index_store = IndexStore();
const user_store = UserStore();

onMounted(async () => {
    if (user_store.user?.projectId) {
        await index_store.fetchUserData(user_store.user?.projectId)
        if (index_store.user_data_headers.length === 0) {
            await index_store.getUserHeaders();
        }
    }

})

</script>

<style lang="scss" scoped></style>
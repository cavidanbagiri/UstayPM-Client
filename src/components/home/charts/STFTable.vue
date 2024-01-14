<template>
    <div class="col-span-8 border bg-white px-5 rounded-xl h-[30rem] overflow-hidden hover:overflow-y-scroll"
        style="font-family: 'Jost';">

        <!-- Title Section -->
        <div class="w-full pl-8 border-b py-3   flex justify-between">
            <span class="text-2xl font-bold " style="font-family: 'Poppins';">
                Last STF
            </span>
            <span class="text-sm flex justify-center items-center font-bold text-gray-500 pr-4 cursor-pointer">
                
                <div class="bg-gray-100 mr-3 rounded-xl border px-2">
                    <span><i class="fa-solid fa-magnifying-glass"></i></span>
                    <input class="outline-none w-48 p-2 bg-gray-100 rounded-xl" type="text" placeholder="Search ...">
                </div>
                <button class="bg-indigo-500 text-white py-2 px-2 rounded-lg">
                    View All
                </button>
            </span>
        </div>

        <!-- Table Section -->
        <div class="mt-1 ">

            <table v-if="index_store.stf_data_headers.length" class=" w-full ">

                <!-- Table Static Header -->
                <thead class="bg-gray-100" >
                    <th style="font-family: 'Jost';" class="font-bold text-[16px] w-12">S.No</th>
                    <th class="py-2 font-bold text-[16px] px-2 text-start" style="font-family: 'Jost';" v-for="i in index_store.stf_data_headers">
                        {{ i.showname }}
                    </th>
                </thead>

                <!-- Table Rows -->
                <tr v-for="(i, index) in index_store.stf_data" class="font-bold text-[15px]" style="font-family: 'Jost';">

                    <!-- Index Num -->
                    <th>{{ index + 1 }}</th>

                    <!-- Row Amount and Unit For Center Text -->
                    <th class=" py-2 text-start font-bold text-[15px]" v-for="j in index_store.stf_data_headers"
                    style="font-family: 'Jost';">
                        <div class="flex w-24  justify-start px-2" v-if="j.name === 'amount' || j.name === 'unit'">
                            <span >
                                {{ i[j.name] }}
                            </span>
                        </div>

                        <!-- Row STF Num -->
                        <div class="flex w-40 p-1 justify-start text-xs font-bold" v-else-if="j.name === 'stf_num'" >
                            <span class="flex items-center justify-center bg-green-100 rounded-xl px-2 py-2">
                                <span class=" text-green-500">
                                    {{ i[j.name] }}
                                </span>
                            </span>
                        </div>

                        <!-- Row User for showing Image -->
                        <div class="flex w-72 text-[15px] justify-start font-bold" v-else-if="j.name === 'username'" style="font-family: 'Jost';">
                            <span class="flex items-center ">
                                <img class="ml-2 w-10 h-10 rounded-full" :src="i.image_url" alt="">
                                <span class="pl-3 ">
                                    {{ i[j.name] }}
                                </span>
                            </span>
                        </div>

                        <!-- Row User Another -->
                        <div v-else class="pl-2" >
                            {{ i[j.name] }}
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
        await index_store.fetchSTFData(user_store.user?.projectId)
        if (index_store.stf_data_headers.length === 0) {
            await index_store.getHeaders();
        }
    }

})

</script>

<style lang="scss" scoped></style>
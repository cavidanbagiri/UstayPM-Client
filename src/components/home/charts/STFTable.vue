<template>
    <div class="col-span-12 border bg-white p-5" style="font-family: 'Poppins';">

        <div class="flex flex-row pb-3 pl-5 border-b-2 justify-between mb-4">
            <span class="text-3xl font-bold">Recetly Created STF's</span>
            <div class="border p-2 bg-gray-50 hover:cursor-pointer">
                <button>View All</button>
            </div>
        </div>

        <div class="overflow-hidden hover:overflow-y-scroll h-[450px]">
            <table v-if="index_store.stf_data_headers.length" class=" w-full shadow-xl border ">
            <thead class="bg-slate-100 ">
                <th>S.No</th>
                <th class="py-2 border-2" style="font-family: 'Roboto';" 
                v-for="i in index_store.stf_data_headers">{{ i.showname }}</th>
            </thead>
            <tr v-for="(i, index) in index_store.stf_data" class="" style="font-family: 'Roboto';">
                <th>{{index + 1}}</th>
                <th class="border py-2 text-start font-medium text-sm" v-for="j in index_store.stf_data_headers">
                    <div class="flex w-full  justify-center" v-if="j.name === 'amount' || j.name === 'unit' ">
                        <span class="text-center ">
                            {{ i[j.name] }}
                        </span>
                    </div>
                    <div class="flex w-full  justify-center" v-else-if="j.name === 'createdAt' ">
                        <span class="text-center ">
                            <DateFormatMonth :time="i[j.name]" />
                        </span>
                    </div>
                    <div class="flex w-full  justify-start" v-else-if="j.name === 'username' ">
                        <span class="flex items-center ">
                            <img class="ml-2 w-10 h-10 rounded-full" :src="i.image_url" alt="">
                            <span class="pl-3">
                                {{ i[j.name] }}
                            </span>
                        </span>
                    </div>
                    <div v-else class="pl-2">
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

import DateFormatMonth from '../../../layouts/DateFormatMonth.vue';

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
<template>
  <!-- Sm Section-->
  <div class="col-span-4 ml-3 bg-white rounded-xl flex flex-col items-center justify-between h-[30rem]"
            style="font-family: 'Poppins';">
            <!-- Title Section -->
            <div class="w-full pl-8 py-3   flex justify-between">
                <span class="text-2xl font-bold " style="font-family: 'Figtree';">
                    Warehouse Stock
                </span>
                <span class="text-2xl font-bold text-gray-500 pr-4 cursor-pointer">
                    <i class="fa-solid fa-ellipsis fa-xs"></i>
                </span>
            </div>
            <!-- List Section -->
            <div class="w-full overflow-hidden p-2 px-4 hover:overflow-y-scroll mt-1">
                <div v-for="(i, index) in label" class="flex justify-between text-md px-3 text-[17px] hover:rounded-xl  hover:cursor-pointer hover:bg-gray-100 bg-white"
                style="font-family: 'Figtree';">
                    <div class="flex justify-start w-full">
                        <div v-if="index==0" class="w-12 flex items-center justify-center bg-gray-100 py-3 rounded-t-xl ">
                            <span class="">{{ index + 1 }} </span>
                        </div>
                        <div v-else class="w-12 flex items-center justify-center bg-gray-100 py-3 ">
                            <span class="">{{ index + 1 }} </span>
                        </div>
                        <div class="pl-10 flex items-center justify-center " >
                            <span>{{i}}</span>
                        </div>
                    </div>
                    <div class="flex items-center">
                        <span v-if="data[index] == 0 " class="text-sm  text-red-500 p-1 px-2 rounded-xl font-bold">
                            0
                        </span>
                        <span v-else class="text-sm  text-green-500 p-1 px-2 rounded-xl font-bold">{{data[index]}}</span>
                    </div>
                </div>
            </div>
        </div>
</template>

<script setup>
import { watchEffect, ref } from 'vue';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
import IndexStore from '../../../store/store.index';
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

const index_store = IndexStore();

const label = ref([]);
const data = ref([]);

watchEffect(() => {
    if(label.value.length === 0){
        for (let i of index_store?.group_chart_statistic_data) {
          label.value.push(i.department_id)
          data.value.push(i.stf_count)
        }
    }

})

</script>

<style lang="scss" scoped>

</style>
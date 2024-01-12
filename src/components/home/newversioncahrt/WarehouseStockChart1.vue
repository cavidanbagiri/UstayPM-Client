<template>
  <!-- Sm Section-->
  <div class="col-span-4 ml-3 bg-white rounded-xl flex flex-col items-center justify-between h-[30rem]"
            style="font-family: 'Poppins';">
            <!-- Title Section -->
            <div class="w-full pl-8 border-b py-3   flex justify-between">
                <span class="text-2xl font-bold " style="font-family: 'Roboto';">
                    Warehouse Stock
                </span>
                <span class="text-2xl font-bold text-gray-500 pr-4 cursor-pointer">
                    <i class="fa-solid fa-ellipsis fa-xs"></i>
                </span>
            </div>
            <!-- List Section -->
            <div class="w-full overflow-hidden p-2 px-4 hover:overflow-y-scroll">
                <ul>
                    <!-- <li  class="py-3 text-md rounded-xl px-2 border-b hover:cursor-pointer hover:bg-gray-100
                    flex flex-row justify-between">
                        <div class="flex justify-start">
                            <span>
                                Index
                            </span>
                            <span class="pl-4">
                                Department Name
                            </span>
                        </div>
                        <span class="font-bold">
                            Count
                        </span>
                    </li> -->
                    <li v-for="(i, index) in label" class="py-3 text-md rounded-xl px-2 border-b hover:cursor-pointer hover:bg-gray-100
                    flex flex-row justify-between">
                        <div class="flex justify-start">
                            <span>
                                {{ index + 1 }}
                            </span>
                            <span class="pl-4">
                                {{i}}
                            </span>
                        </div>
                        <span class="font-bold">
                            {{data[index]}}
                        </span>

                    </li>
                </ul>
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

  for (let i of index_store?.group_chart_statistic_data) {
    label.value.push(i.department_id)
    data.value.push(i.stf_count)
  }

})

</script>

<style lang="scss" scoped>

</style>
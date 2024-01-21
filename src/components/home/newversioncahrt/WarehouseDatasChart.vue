<template>
  <!-- Warehouse Datas -->
  <div class="col-span-5  my-3 rounded-xl flex flex-col items-center justify-between "
            style="font-family: 'Jost';">
            <div class="w-full h-full flex flex-row">
                <div class="flex flex-col w-full h-full  ">

                    <!-- Project -->
                    <div class="flex flex-col h-full mb-4 mr-4 bg-white rounded-xl justify-center items-center relative" @click="project_cond = !project_cond">
                        <div class="w-full pl-3 mt-4 text-sm ">
                            <span class="py-2 px-4 rounded-lg bg-gray-100 cursor-pointer hover:shadow-xl duration-300">
                                <i class="fa-solid fa-ellipsis-vertical fa-lg"></i>
                            </span>
                            <div v-if="project_cond" class="getdata_parent">
                                <span @click="goWarehouse" class="getdata_child">Get Data</span>
                            </div>
                        </div>
                        <div class="w-20 h-20 bg-blue-100 flex justify-center items-center rounded-full mt-4">
                            <i class="fa-solid fa-bars-progress fa-xl text-blue-500"></i>   
                        </div>
                        <span class="text-4xl font-bold mt-4" style="font-family: 'Poppins';">{{ data.project }}</span>
                        <span class="text-2xl font-bold mt-4" >Project</span>
                        <span @click="goWarehouse" class="text-sm w-full font-medium mt-4 pl-3 pb-2 text-blue-400 hover:cursor-pointer" style="font-family: 'Inter';">View All
                            <i class="fa-solid fa-arrow-right"></i>
                        </span>
                    </div>
                    
                    <!-- Consumables -->
                    <div class="flex flex-col h-full mt-4 mr-4 bg-white rounded-xl justify-center items-center relative" @click="consumables_cond = !consumables_cond">
                        <div class="w-full pl-3 mt-4 text-sm ">
                            <span class="py-2 px-4 rounded-lg bg-gray-100 cursor-pointer hover:shadow-xl duration-300">
                                <i class="fa-solid fa-ellipsis-vertical fa-lg"></i>
                            </span>
                            <div v-if="consumables_cond" class="getdata_parent">
                                <span @click="goWarehouse" class="getdata_child">Get Data</span>
                            </div>
                        </div>
                        <div class="w-20 h-20 bg-orange-100 flex justify-center items-center rounded-full mt-4">
                            <i class="fa-solid fa-oil-well fa-xl text-orange-500"></i>   
                        </div>
                        <span class="text-4xl font-bold mt-4" style="font-family: 'Poppins';">{{ data.consumables }}</span>
                        <span class="text-2xl font-bold mt-4" >Consumables</span>
                        <span @click="goWarehouse" class="text-sm w-full font-medium mt-4 pl-3 pb-2 text-orange-400 hover:cursor-pointer " style="font-family: 'Inter';">View All
                            <i class="fa-solid fa-arrow-right"></i>
                        </span>
                    </div>
                   
                </div>
                <div class="flex flex-col w-full h-full">

                    <!-- Fixture -->
                    <div class="flex flex-col h-full mb-4 ml-4 bg-white rounded-xl justify-center items-center relative" @click="fixture_cond = !fixture_cond">
                        <div class="w-full pl-3 mt-4 text-sm ">
                            <span class="py-2 px-4 rounded-lg bg-gray-100 cursor-pointer hover:shadow-xl duration-300">
                                <i class="fa-solid fa-ellipsis-vertical fa-lg"></i>
                            </span>
                            <div v-if="fixture_cond" class="getdata_parent">
                                <span @click="goWarehouse" class="getdata_child">Get Data</span>
                            </div>
                        </div>
                        <div class="w-20 h-20 bg-green-100 flex justify-center items-center rounded-full mt-4">
                            <i class="fa-solid fa-calendar fa-xl text-green-500"></i>   
                        </div>
                        <span class="text-4xl font-bold mt-4" style="font-family: 'Poppins';">{{ data.fixture }}</span>
                        <span class="text-2xl font-bold mt-4" >Fixture</span>
                        <span @click="goWarehouse" class="text-sm w-full font-medium mt-4 pl-3 pb-2 text-green-400  hover:cursor-pointer" style="font-family: 'Inter';">View All
                            <i class="fa-solid fa-arrow-right"></i>
                        </span>
                    </div>

                    <!-- Break -->
                    <div class="flex flex-col h-full mt-4 ml-4 bg-white rounded-xl justify-center items-center relative" @click="break_cond = !break_cond">
                        <div class="w-full pl-3 mt-4 text-sm ">
                            <span class="py-2 px-4 rounded-lg bg-gray-100 cursor-pointer hover:shadow-xl duration-300">
                                <i class="fa-solid fa-ellipsis-vertical fa-lg"></i>
                            </span>
                            <div v-if="break_cond" class="getdata_parent">
                                <span @click="goWarehouse" class="getdata_child">Get Data</span>
                            </div>
                        </div>
                        <div class="w-20 h-20 bg-red-100 flex justify-center items-center rounded-full mt-4">
                            <i class="fa-solid fa-wrench fa-xl text-red-500"></i>   
                        </div>
                        <span class="text-4xl font-bold mt-4" style="font-family: 'Poppins';">0</span>
                        <span class="text-2xl font-bold mt-4" >Break</span>
                        <span @click="goWarehouse" class="text-sm w-full font-medium mt-4 pl-3 pb-2 text-red-400 hover:cursor-pointer" style="font-family: 'Inter';">View All
                            <i class="fa-solid fa-arrow-right"></i>
                        </span>
                    </div>
                    
                </div>
            </div>
        </div>
</template>

<script setup>

import { ref, reactive, watchEffect } from 'vue';
import { useRouter } from 'vue-router';
import IndexStore from '../../../store/store.index';
import WarehouseStore from '../../../store/store.warehouse';

const router = useRouter();
const index_store = IndexStore();
const warehouse_store = WarehouseStore();

const project_cond = ref(false);
const fixture_cond = ref(false);
const consumables_cond = ref(false);
const break_cond = ref(false);

const data = reactive({
    project:0,
    consumables:0,
    fixture:0
})

watchEffect(()=>{
    for(let i of index_store.ws_statistic_data){
        if(i?.material_type === 'Consumables'){
            data.consumables = i?.count
        }
        else if(i?.material_type === 'Project'){
            data.project = i?.count
        }
        else if(i?.material_type === 'Fixture'){
            data.fixture = i?.count
        }
    }
})

const goWarehouse = () => {
    warehouse_store.tab_num = 1;
    router.push('/warehouse')
}


</script>

<style scoped>

    

</style>
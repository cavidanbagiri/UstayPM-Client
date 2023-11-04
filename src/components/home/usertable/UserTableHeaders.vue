
<template>
    <thead class="text-gray-100 bg-slate-800 shadow-md table_header ">
        <tr>
            <th class="px-2 py-3 text-center">
                <div class="flex flex-col font-thin">
                    S/S
                </div>
            </th>
            <th class="px-2 py-1 text-center  font-thin">
                <div class="">
                    Image
                </div>
            </th>
            <!-- Username Column -->
            <th class="px-2 py-1 text-center  font-thin">
                <div class="">
                    Name Surname
                </div>
            </th>
            <th class="px-2 py-1 text-center  font-thin">
                <div class="">
                    Email
                </div>
            </th>
            <th class="px-2 py-1 text-center  font-thin">
                <div class="">
                    Department
                </div>
            </th>
            <th class="px-2 py-1 text-center  font-thin">
                <div class="">
                    Status
                </div>
            </th>
            <th class="px-2 py-1 text-center  font-thin">
                <div class="">
                    Raiting
                </div>
            </th>
            <th class="px-2 py-1 text-center  font-thin">
                <div class="">
                    Links
                </div>
            </th>
            <!-- <th v-for="i in prop?.table_headers" v-show="i.value" scope="col" class="px-2 py-1 text-center  font-thin">
                <div v-if="i.name==='situation'" class="w-20">
                    {{ i.showname }}
                </div>
  
                <div v-else-if="i.name==='stf_num'" class="w-28">
                    {{ i.showname }}
                </div>
  
                <div v-else-if="i.name==='sm_num'" class="w-32">
                    {{ i.showname }}
                </div>
  
                <div v-else-if="i.name==='created_at'" class="w-24">
                    {{ i.showname }}
                </div>
  
                <div v-else-if="i.name==='material_type'" class="w-24">
                    {{ i.showname }}
                </div>
  
                <div v-else-if="i.name==='material_name' || i.name==='sm_material_name' || i.name==='delivery_material_name' " class="min-w-[600px]">
                    {{ i.showname }}
                </div>
  
                <div v-else-if="i.name==='amount' " class="min-w-[120px]">
                    {{ i.showname }}
                </div>
  
                <div v-else-if="i.name==='field_name'" class="w-24">
                    {{ i.showname }}
                </div>
  
  
                <div v-else-if="i.name==='vendor_name'" class="w-96">
                    {{ i.showname }}
                </div>
  
                <div v-else class="flex flex-col w-24">
                    {{ i.showname }}
                </div>
  
            </th> -->
            
        </tr>
    </thead>
  </template>
  
  <script setup>
  
  const prop = defineProps(['table_headers']);
    
  </script>
  
  <style lang="scss" scoped>
  
  </style>
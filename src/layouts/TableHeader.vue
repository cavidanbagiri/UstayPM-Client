
<template>
  <thead class="text-gray-100 bg-slate-800  sticky top-[12.4rem]  border-b-4 shadow-md table_header ">
      <tr>
          <th scope="col-4" class=" pl-1">
              <div class="flex flex-col items-center">
                  <i class="fa-solid fa-circle-info fa-xl text-green-500"></i>
              </div>
          </th>
          <th scope="col-4" class=" px-4">
              <div class="flex flex-col items-center">
                  <input id="checkbox-all-search" type="checkbox"
                  class="checkbox checkbox-xs checkbox-primary" >
                  <label for="checkbox-all-search" class="sr-only">checkbox</label>
              </div>
          </th>
          <th class="px-2 py-3 text-center">
              <div class="flex flex-col font-thin">
                  S/S
              </div>
        </th>

            <!-- Slot For Show Return Table Component -->
          <slot name="RC">
            
          </slot>

          <th v-for="i in prop?.table_headers" v-show="i.value" scope="col" class="px-2 py-1 text-center border font-thin">
              <div v-if="i.name==='situation'" class="w-20">
                  {{ i.showname }}
              </div>

              <div v-else-if="i.name==='stf_num'" class="w-26">
                  {{ i.showname }}
              </div>

              <div v-else-if="i.name==='sm_num'" class="w-32">
                  {{ i.showname }}
              </div>

              <div v-else-if="i.name==='created_at'" class="w-24">
                  {{ i.showname }}
              </div>

              <div v-else-if="i.name==='approximate_date'" class="w-32">
                  {{ i.showname }}
              </div>

              <div v-else-if="i.name==='material_type'" class="w-24">
                  {{ i.showname }}
              </div>

              <div v-else-if="i.name==='material_name' || i.name==='sm_material_name' || i.name==='delivery_material_name' " class="min-w-[600px]">
                  {{ i.showname }}
              </div>

              <div v-else-if="i.name==='amount' " class="min-w-[100px]">
                  {{ i.showname }}
              </div>

              <div v-else-if="i.name==='field_name'" class="w-24">
                  {{ i.showname }}
              </div>

              <div v-else-if="i.name==='vendor_name'" class="w-96">
                  {{ i.showname }}
              </div>

              <div v-else-if="i.name==='supplier'" class="w-80">
                  {{ i.showname }}
              </div>

              <div v-else-if="i.name==='orderer'" class="w-80">
                  {{ i.showname }}
              </div>

              <div v-else class="flex flex-col w-24">
                  {{ i.showname }}
              </div>

          </th>
          
      </tr>
  </thead>
</template>

<script setup>

const prop = defineProps(['table_headers']);
  
</script>

<style lang="scss" scoped>

</style>
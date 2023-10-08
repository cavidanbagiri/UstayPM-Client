<template>
  <th v-for="i in prop?.table_headers" v-show="i.value" class="px-2 py-2 font-medium text-center ">
      <div v-if="i.name === 'stf_num'" class="w-24">
        <span class="bg-orange-100 text-orange-500 py-[0.30rem] px-2 rounded-md "> {{ prop.each[i.name] }}</span>
      </div>

      <div v-else-if="i.name === 'completed'" class="w-24">
        <span v-if="prop.each[i.name] === false" class="text-red-500 py-[0.30rem] px-2 rounded-md "><i class="fa-solid fa-xmark text-xl text-bold"></i></span>
        <span v-if="prop.each[i.name] === true" class="text-green-500 py-[0.30rem] px-2 rounded-md "><i class="fa-solid fa-check  text-xl"></i></span>
      </div>

      <!-- SM Num Design -->
      <div v-else-if="i.name === 'sm_num'" class="w-24">
          <span v-if="prop.each[i.name]" class="bg-violet-100 text-violet-500 py-[0.30rem] px-2 rounded-md"> {{
              prop.each[i.name] }}</span>
      </div>

      <!-- Date Time Design -->
      <div v-else-if="i.name === 'createdAt'" class="w-26 text-center">
          <DateFormat :time="prop.each[i.name]" />
      </div>

      <!-- Situation Design -->
      <div v-else-if="i.name === 'situation'" class="w-20 text-start">
          <!-- <div v-if="prop.each[i.name] === 'Waiting'">
              <span class=" bg-red-100 w-full text-red-500 py-[0.30rem] px-2 rounded-md">
                  &#9679 {{ prop.each.situation }}
              </span>
          </div> -->
          <div v-if="prop.each[i.name] === 'Processing'">
              <span class="bg-blue-100 w-full text-blue-500 py-[0.30rem] px-2 rounded-md">
                  &#9679{{ prop.each.situation }} 
              </span>
          </div>
          <div v-else-if="prop.each[i.name] === 'Received'">
              <span class="bg-green-100 w-full text-green-500 py-[0.30rem] px-2 rounded-md">
                  &#9679{{ prop.each.situation }}
              </span>
          </div>
      </div>

      <div v-else-if="i.name === 'material_type'" class="text-start w-24">
          <span>{{ prop.each[i.name] }}</span>
      </div>
      <div v-else-if="i.name === 'material_name' || i.name === 'sm_material_name' || i.name === 'delivery_material_name' " class="text-start min-w-[600px] ">
          <span class="">{{ prop.each[i.name] }}</span>
      </div>
      <div v-else-if="i.name === 'field_name'" class="text-start w-24">
          <span>{{ prop.each[i.name] }}</span>
      </div>
      <div v-else-if="i.name === 'vendor_name'" class="text-start">
          <span>{{ prop.each[i.name] }}</span>
      </div>
      <div v-else-if="i.name === 'username'" class="text-center">
          <span>{{ prop.each[i.name] }}</span>
      </div>
      <div v-else-if="i.name === 'passport' || i.name=== 'certificate' " class="text-center">
          <span v-if="prop.each[i.name] === true ">
              <i class="fa-solid fa-check fa-2xl text-green-600"></i>
          </span>
          <span v-else>
              <i class="fa-solid fa-xmark fa-2xl text-red-600"></i>
          </span>
          <!-- <span>{{ prop.each[i.name] }}</span> -->
      </div>

      <!-- Others Without Design -->
      <div v-else>
          <span class=""> {{ prop.each[i.name] }}</span>
      </div>

  </th>
</template>

<script setup>

  const prop = defineProps(['table_headers','each'])

</script>

<style lang="scss" scoped></style>
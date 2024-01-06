<template>
    <th v-for="i in prop?.table_headers" v-show="i.value" class="px-2 py-2 font-medium text-center "
        style="font-family: 'Figtree', sans-serif;">
        <div v-if="i.name === 'stf_num'" class="w-26">
            <span class="bg-orange-100 text-orange-500 py-[0.30rem] px-2 rounded-md "> {{ prop.each[i.name] }}</span>
        </div>

        <div v-else-if="i.name === 'completed'" class="w-26">
            <span v-if="prop.each[i.name] === false" class="text-red-500 py-[0.30rem] px-2 rounded-md "><i
                    class="fa-solid fa-xmark text-xl text-bold"></i></span>
            <span v-if="prop.each[i.name] === true" class="text-green-500 py-[0.30rem] px-2 rounded-md "><i
                    class="fa-solid fa-check  text-xl"></i></span>
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

        <!-- Date Time Design -->
        <div v-else-if="i.name === 'approximate_date'" class="w-26 text-center">
            <DateFormat :time="prop.each[i.name]" />
        </div>

        <!-- Date Time Design -->
        <div v-else-if="i.name === 'provided_date'" class="w-26 text-center">
            <DateFormat :time="prop.each[i.name]" />
        </div>

        <!-- Provide Return Date Design -->
        <div v-else-if="i.name === 'return_date' && prop.each[i.name]" class="w-26 text-center">
            <DateFormatDate :time="prop.each[i.name]" />
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
            <div v-else-if="prop.each[i.name] === 'Completed'">
                <span class="bg-green-100 w-full text-green-500 py-[0.30rem] px-2 rounded-md">
                    &#9679{{ prop.each.situation }}
                </span>
            </div>
        </div>

        <div v-else-if="i.name === 'material_type'" class="text-start w-24">
            <span>{{ prop.each[i.name] }}</span>
        </div>
        <div v-else-if="i.name === 'type_name'" class="text-center w-24">
            <span>{{ prop.each[i.name] }}</span>
        </div>
        <div v-else-if="i.name === 'material_name' || i.name === 'sm_material_name' || i.name === 'delivery_material_name'"
            class="text-start min-w-[600px] ">
            <div class="py-2 hover:relative " @mouseover="showAdditionFunction" @mouseleave="hideAdditionFunction">
                <div v-show="show_icons" class="absolute top-1 right-0 flex show-icons">
                    <div class="">
                        <img src="../assets/1_trash.png" class="w-5 mr-3 hover:bg-green-500 hover:p-1 hover:rounded-full" alt="">
                    </div>
                    <div class="">
                        <img src="../assets/1_edit.png" class="w-5 mr-3 hover:bg-green-500 hover:p-1 hover:rounded-full" alt="">
                    </div>
                    <div class="">
                        <img src="../assets/1_star.png" class="w-5 mr-3 hover:bg-green-500 hover:p-1 hover:rounded-full" alt="">
                    </div>
                    <div class="">
                        <img src="../assets/1_info-sign.png" class="w-5 mr-3 hover:bg-green-500 hover:p-1 hover:rounded-full" alt="">
                    </div>
                </div>
                <span class="">{{ prop.each[i.name] }}</span>
            </div>
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
        <div v-else-if="i.name === 'passport' || i.name === 'certificate'" class="text-center">
            <span v-if="prop.each[i.name] === true">
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

import { ref } from 'vue';
const show_icons = ref(false);

const prop = defineProps(['table_headers', 'each'])

const showAdditionFunction = () => {
    // setTimeout(() => {
        show_icons.value = true;
    // }, 250)
}

const hideAdditionFunction = () => {
    show_icons.false = false;
}

</script>

<style scoped>

.show-icons{
    animation: show-icons-frame 0.2s
}

@keyframes show-icons-frame {
    from {
        transform: translateX(100%);
    }

    to {
        transform: translateX(0%);
    }
}

</style>
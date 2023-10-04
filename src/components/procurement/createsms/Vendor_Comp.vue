
<template>
    <div class="flex flex-col relative">

        <button class="border py-2 mx-5 rounded-xl text-xs px-3" @click="show=!show">
            Choose Vendor
        </button>

        <Transition name="show">
            <div v-if="show" class="flex flex-col bg-white border rounded-md shadow-xl absolute top-10  p-2 w-96 h-96 overflow-auto">
                <div class="flex justify-between text-gray-600">
                    <span class="font-bold text-lg">Companies</span>
                    <button class="font-bold text-lg hover:bg-gray-100 py-1 px-2 rounded-md"><i class="fa-solid fa-xmark"></i></button>
                </div>
                <ul>
                    <li v-for="i in prop.vendor_list" @click="selectVendor(i)"
                        class="m-1 p-1 px-2 hover:bg-gray-100 text-xs cursor-pointer rounded-md ">
                        {{ i.vendor_name }}
                    </li>
                </ul>
            </div>
        </Transition>

    </div>
</template>

<script setup>

import { ref } from 'vue';

const show = ref(false);

const prop = defineProps(['vendor_list']);
const emit = defineEmits(['selectVendor'])

const selectVendor = (vendor) => {
    emit("selectVendor", vendor);
    show.value=false;
}

</script>

<style scoped>


.show-enter-active {
    animation: show 0.5s;
}

.show-leave-active {
    animation: show 0.5s reverse;
}

@keyframes show {
    
    0% {
        transform : scaleY(0);
        transform-origin: top;
    }
    100% {
        transform: scaleY(1);
    }

}

</style>
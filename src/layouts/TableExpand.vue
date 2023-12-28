<template>
    <div class="flex flex-col  shadow-2xl px-2 absolute w-96 h-96 top-16 right-4 bg-white hover:overflow-y-scroll overflow-hidden rounded-s-xl rounded-ee-xl"
        style="font-family: 'Figtree';">
        <div class="mt-1 sticky top-0 px-1 bg-white">
            <input class=" border my-2 w-full p-3 rounded-lg text-[1rem] outline-none shadow-md " type="text" name="" id=""
                placeholder="Column Name...">
        </div>
        <ul class="">
            <li v-for="key in prop?.table_headers">
                <!-- <div class="flex flex-row items-center hover:bg-gray-100 p-2 rounded-md text-sm">
                    <input type="checkbox" name="" :checked="key.value" @change="changeHeaderCond(key)" class="checkbox checkbox-xs checkbox-primary">
                    <label :for="key.name" class="ml-3">{{ key.showname }} </label>
                </div> -->
                <div class="form-control flex justify-center px-2 w-full ">
                    <label class="cursor-pointer flex my-2 ">
                        <input type="checkbox" name="" :checked="key.value" @change="changeHeaderCond(key)"  class="toggle toggle-primary" >
                        <span class="label-text ml-3 text-[1rem]">{{ key.showname }}</span>
                    </label>
                </div>
            </li>
        </ul>
    </div>
</template>

<script setup>

const prop = defineProps(['table_headers']);

const changeHeaderCond = (obj) => {
    obj.value = !obj.value;
}

</script>

<style lang="scss" scoped></style>
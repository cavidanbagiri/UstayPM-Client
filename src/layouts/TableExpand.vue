<template>
    <div class="flex flex-col border shadow-xl p-2 absolute w-96 h-96 top-14 right-0 bg-white overflow-hidden overflow-y-scroll">
        <div class="mt-12 sticky top-10">
            <input class="border-2 border-indigo-600 my-2 w-full p-2 rounded-lg text-sm outline-none " type="text" name="" id="" placeholder="Column Name..." style="font-style: italic;">
        </div>
        <ul class="">
            <li v-for="key in prop?.table_headers">
                <div class="flex flex-row items-center hover:bg-gray-100 p-2 rounded-md text-xs">
                    <input type="checkbox" name="" :checked="key.value" @change="changeHeaderCond(key)" class="checkbox checkbox-xs checkbox-primary">
                    <label :for="key.name" class="ml-2">{{ key.showname }} </label>
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

<style lang="scss" scoped>

</style>

<template>
    <thead class="text-white bg-slate-800" style="font-family: 'Figtree';">
        <tr>
            <!-- <th scope="col-4" class=" px-4">
                <div class="flex flex-col items-center">
                    <input id="checkbox-all-search" type="checkbox" class="checkbox checkbox-xs checkbox-primary">
                    <label for="checkbox-all-search" class="sr-only">checkbox</label>
                </div>
            </th> -->
            <th class="px-2 py-3 text-center">
                <div class="flex flex-col font-thin">
                    S.No
                </div>
            </th>


            <th v-for="i in prop?.table_headers" v-show="i.value" scope="col" class="px-2 text-center font-medium">
                <div class="flex flex-col ">
                    {{ i.showname }}
                </div>
            </th>

        </tr>
    </thead>
</template>

<script setup>

const prop = defineProps(['table_headers']);

</script>

<style lang="scss" scoped></style>
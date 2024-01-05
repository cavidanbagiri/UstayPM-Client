<template>
    <div class="col-span-6 border bg-white px-2 mx-1 overflow-hidden overflow-y-scroll relative " style="font-family: 'Poppins';">
        <div class="flex flex-col mb-10 h-full">
        <div class="p-5 text-2xl font-bold sticky top-0">
            <span>User List Table</span>
        </div>
        <table class="text-gray-100   border-b-4 shadow-md" style="font-family: 'Roboto';">
            <thead class="bg-gray-100 text-gray-800 sticky top-0">
                <th class=" border-x-2 w-12 py-3" >S.No</th>
                <th class=" border-x-2 " >User</th>
                <th class=" border-x-2 " >Department</th>
                <th class=" border-x-2 " >Position</th>
                <th class=" border-x-2 " >Email</th>
            </thead>
            <tbody v-for="i in 20" class="text-black border">
                <td class="text-center py-2 border ">1</td>
                <td class="text-center py-2 border ">Cavidan Bagirli</td>
                <td class="text-center py-2 border ">Warehouse</td>
                <td class="text-center py-2 border ">Specialist</td>
                <td class="text-center py-2 border ">cbagiri@ustay.com</td>
            </tbody>
        </table>
    </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>
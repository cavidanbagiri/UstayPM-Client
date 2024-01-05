<template>
    <div class="col-span-6 border bg-white px-2 mx-1 overflow-hidden hover:overflow-y-scroll relative " style="font-family: 'Poppins';">
        <div class="flex flex-col mb-10 h-full">
        <div class="flex justify-between items-center px-5 py-3 text-3xl font-bold sticky top-0">
            <div>
                <span>Users</span>
            </div>
            <div class="bg-gray-200 flex flex-row items-center px-2 shadow-lg rounded-lg w-1/2">
                <i class="fa-solid fa-magnifying-glass text-lg px-2 border"></i>
                <input class="bg-gray-200 p-2 outline-none text-lg font-medium " type="text" placeholder="Search ...">
            </div>
        </div>
        <table class="text-gray-100   border-b-4 shadow-md" style="font-family: 'Roboto';">
            <thead class="bg-slate-800 text-gray-100 sticky top-0">
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
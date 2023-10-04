
<template>
    
    <div class="flex flex-col p-1">

        <SMSuccessMessage/>

        <SM_Create_Button_Comp/>

        <div class="flex flex-col w-screen">
            <table class="text-xs text-left text-gray-800 dark:text-gray-400 w-full">       
                <SM_Table_Header_Comp/>
                <SM_Table_Body_Comp/>
            </table>

        </div>


    </div>

</template>

<script setup>

    import { onMounted } from 'vue';
    import SM_Table_Header_Comp from './SM_Table_Header_Comp.vue';
    import SM_Table_Body_Comp from './SM_Table_Body_Comp.vue';
    import SM_Create_Button_Comp from './SM_Create_Button_Comp.vue';
    import ProcurementStore from '../../../store/store.procurement.js';
    import SMSuccessMessage from './SMSuccessMessage.vue';
    const procurement_store = ProcurementStore();

    onMounted(async ()=>{
        await procurement_store.getCompaniesNames();
        await procurement_store.getProcurementUsersNames();
    })


</script>

<style lang="scss" scoped>

</style>

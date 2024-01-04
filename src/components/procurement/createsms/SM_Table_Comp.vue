
<template>
    
    <div class="flex flex-col p-1">

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
    import UserStore from '../../../store/store.user';
    const procurement_store = ProcurementStore();
    const user_store = UserStore();

    onMounted(async ()=>{
        if(user_store.user){
            await procurement_store.getProcurementUsersNames(user_store.user.projectId);
        }
    })


</script>

<style lang="scss" scoped>

</style>

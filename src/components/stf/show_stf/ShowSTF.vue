<template>
  <div class="flex flex-col" style="display: inline-block;">

    <!-- Filter Statistic Section-->
    <div class="sticky top-10 px-1 ">
      <div class=" sticky left-16 flex flex-col bg-white" style="display: inline-block; width: calc(100vw - 5rem);">

        <STFStatistics/>
        

        <!-- Table Filter Section
        <table-filter @filterFunction="filterFunction">
          <table-expand v-if="true" :table_headers="order_store.GETORDERHEADERS" />
        </table-filter> -->

      </div>
    </div>

    <!-- <table class="text-left mx-2 text-gray-800 dark:text-gray-400 w-full shadow-xl bg-white ">
      <Table-Header :table_headers="order_store.GETORDERHEADERS" />
      <Show_STF_Table_Each_Row v-for="(i, index) in order_store.GETORDERSDATA" :each="i" :index="index" />
    </table>

    <table-row-inform :row_inform="index_store.row_detail_data" :row_inform_condition="index_store.row_inform_condition"
      @closeRowInform="closeRowInform" />
    <Show_STF_Selecting_Task /> -->

  </div>
</template>

<script setup>

  import STFStatistics from '../../../layouts/STFStatistics.vue';

</script>

<style lang="scss" scoped></style>
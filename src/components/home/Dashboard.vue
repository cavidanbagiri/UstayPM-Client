<template>
  <div class="flex flex-col">
      <div class="flex flex-col h-40 bg-slate-800 mr-1 p-4 justify-between">
          <!-- Name and Dashboard Text Section -->
          <div class="flex flex-row justify-between items-center p-1">
              <div class="flex flex-col ">
                  <span class="text-gray-200 text-4xl p-1 "
                      style="font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;">
                      Welcome Back, Cavidan
                  </span>
                  <span class="text-gray-300 text-xs mt-3 p-1">For Showing an Orders, Click + Button</span>
              </div>
              <div class="">
                  <span class="border-2 border-gray-400 p-2 rounded-full text-xs font-bold text-gray-300 my-3"
                  style="letter-spacing: 1px;">
                      <i class="fa-solid fa-gauge-high"></i> Dashboard Page
                  </span>
              </div>
          </div>
          <!-- Overview Section -->
          <div class="flex items-center" style="letter-spacing: 1px;">
              <router-link to="/">
                  <span
                  class=" mx-1 text-xs text-gray-200 px-8 py-2 cursor-pointer border font-bold rounded-full bg-gray-500">
                  Dashboard
              </span>
              </router-link>
              <router-link to="/">
                  <span class=" mx-1 text-xs text-gray-300 px-8 dashboard-button-hover">
                      Workspace
                  </span>
              </router-link>
              <router-link to="/">
                  <span class=" mx-1 text-xs text-gray-300 px-8 dashboard-button-hover">
                      Orders
                  </span>
              </router-link>
              <router-link to="/">
                  <span class=" mx-1 text-xs text-gray-300 px-8 dashboard-button-hover">
                      Procurement
                  </span>
              </router-link>
              <router-link to="/">
                  <span class=" mx-1 text-xs text-gray-300 px-8 dashboard-button-hover">
                      Warehouse
                  </span>
              </router-link>
          </div>
      </div>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped></style>
<template>
  <div class="h-screen flex items-center ">
    <div class="grid grid-cols-12  items-center">

      <div class="col-span-2">
      </div>

      <div class="col-span-4 ">
        <img src="../../assets/login_image.jpg" style="object-fit: inherit;" alt="">
      </div>
      <div class="col-span-4">
        <div class="  p-10 text-white flex flex-col">

          <h1 class="text-xl font-bold text-center  text-gray-500 md:text-2xl dark:text-white mb-3">
            Sign in to your account
          </h1>

          <!-- Using VeeValidate Form-->
          <VeeForm @submit="login" class="space-y-4 md:space-y-6 mt-2">
            <div>
              <label for="email" class="block mb-2 text-sm font-medium text-white dark:text-white">Your
                email</label>

              <VeeField type="email" name="email" id="email" :rules="{ required: true, email: true }" class="bg-gray-50 border border-gray-300 text-gray-900 
  sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600
dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="name@ustay.com" required="" />
              <ErrorMessage name="email" class="text-xs text-red-500" />
            </div>
            <div>
              <label for="password" class="block mb-2 text-sm font-medium text-white dark:text-white">Password</label>
              <VeeField type="password" name="password" id="password" :rules="{ required: true, min: 8 }"
                placeholder="••••••••"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required="" />
              <ErrorMessage name="password" class="text-xs text-red-500" />
            </div>

            <button v-if="!waiting"
              class="w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 
font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign
              in</button>

            <button v-if="waiting"
              class="w-full flex flex-row justify-center items-center text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 
font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
              <span class="loading loading-spinner"></span>
              Loading
            </button>
            <span class="text-red-500 flex text-sm mt-2 justify-end">{{ user_not_found }}</span>
          </VeeForm>


        </div>
      </div>

    </div>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped></style>
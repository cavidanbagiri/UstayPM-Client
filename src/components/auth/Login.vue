<template>
  <div class="main">
    <div class="wrapper">

      <VeeForm @submit="login" class="space-y-4 md:space-y-6 mt-2">
        <h1>Login</h1>
        <div class="input-box">
          <VeeField type="email" name="email" id="email" :rules="{ required: true, email: true }" placeholder="Email" />
          <!-- <i class='bx bxs-user'></i> -->
          <ErrorMessage name="email" class="text-xs text-red-500 pl-2" />
        </div>
        <div class="input-box">
          <VeeField placeholder="Password" type="password" name="password" id="password" :rules="{ required: true, min: 8 }" />
          <i class='bx bxs-lock-alt'></i>
          <ErrorMessage name="password" class="text-xs text-red-500" />
        </div>
        <div class="remember-forgot ">
          <!-- <label><input type="checkbox"> Remember me</label> -->
          <a href="#" class="text-end w-full pr-2">Forgot password?</a>
        </div>
        <button v-if="!waiting" class="btn">Login</button>
        <button v-if="waiting" class="btn">
          <span class="loading loading-spinner"></span>
              Loading
        </button>
      </VeeForm>

    </div>
  </div>
</template>

<script setup>

import { ref } from 'vue';

import { ErrorMessage } from 'vee-validate';
import router from '../../router/index.js';

import UserStore from '../../store/store.user';
const user_store = UserStore();

const user_not_found = ref('');

const waiting = ref(false);

const login = async (values) => {

  if (!waiting.value) {
    waiting.value = true;
    await user_store.LOGINSER(values)
      .then((respond) => {
        if (respond?.response?.data) {
          user_not_found.value = respond.response.data;
          waiting.value = false;
        } else {
          waiting.value = false;
          router.push({ path: '/' })
        }
      }).catch((err) => {
        user_not_found.value = err;
        waiting.value = false;
      })
  }

}
</script>

<style scoped>
* {
  /* margin: 0;
  padding: 0;
  box-sizing: border-box; */
  font-family: "Poppins", sans-serif;
}

.main {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  /* background: url('159.webp') no-repeat; */
  background: url('../../assets/loginbackend.webp') no-repeat;
  background-size: cover;
  background-position: center;
}

.wrapper {
  width: 420px;
  background: transparent;
  border: 2px solid rgba(255, 255, 255, .2);
  backdrop-filter: blur(20px);
  box-shadow: 0 0 10px rgba(0, 0, 0, .2);
  color: #fff;
  border-radius: 10px;
  padding: 30px 40px;
}

.wrapper h1 {
  font-size: 36px;
  text-align: center;
}

.wrapper .input-box {
  position: relative;
  width: 100%;
  height: 50px;
  margin: 30px 0;
}

.input-box input {
  width: 100%;
  height: 100%;
  background: transparent;
  border: none;
  outline: none;
  border: 2px solid rgba(255, 255, 255, .2);
  border-radius: 40px;
  font-size: 16px;
  color: #fff;
  padding: 20px 45px 20px 20px;
}

.input-box input::placeholder {
  color: #fff;
}

.input-box i {
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 20px;
}

.wrapper .remember-forgot {
  display: flex;
  justify-content: space-between;
  font-size: 14.5px;
  margin: -15px 0 15px;
}

.remember-forgot label input {
  accent-color: #fff;
  margin-right: 3px;
}

.remember-forgot a {
  color: #fff;
  text-decoration: none;
}

.remember-forgot a:hover {
  text-decoration: underline;
}

.wrapper .btn {
  width: 100%;
  height: 45px;
  background: #fff;
  border: none;
  outline: none;
  border-radius: 40px;
  box-shadow: 0 0 10px rgba(0, 0, 0, .1);
  cursor: pointer;
  font-size: 16px;
  color: #333;
  font-weight: 600;
}

.wrapper .register-link {
  font-size: 14.5px;
  text-align: center;
  margin: 20px 0 15px;
}

.register-link p a {
  color: #fff;
  text-decoration: none;
  font-weight: 600;
}

.register-link p a:hover {
  text-decoration: underline;
}
</style>
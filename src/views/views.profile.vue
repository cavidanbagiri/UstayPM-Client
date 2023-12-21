

<template>
    <div>
        <label for="avatar">Choose a profile picture:</label>

        <input type="file" id="avatar" name="avatar" accept="image/png, image/jpeg" @change="onFileChange" />

        <button @click="onUploadFile">
            Add
        </button>

        <Toast :cond="show_toast_cond" messages="Image Added Succesfully" />

    </div>
</template>

<script setup>

import { ref } from 'vue';
import Toast from '../components/design/Toast.vue';
import router from '../router/index.js';
import UserStore from '../store/store.user_store';


const user_store = UserStore();

const show_toast_cond = ref(false);

let selected_file = "";

const onFileChange = (e) => {
    console.log('file change');
    const temp = e.target.files[0];
    selected_file = temp;
}

const onUploadFile = async () => {

    if (user_store.user?.id) {
        const formData = new FormData();
        formData.append("id", user_store.user?.id);
        formData.append("file", selected_file);
        await user_store.uploadImage(formData)
        .then((respond)=>{
            show_toast_cond.value = true;
            setTimeout(()=>{
                show_toast_cond.value = false;
                router.push({ path: '/' });
            },1000)
        })
    }

}

</script>

<style lang="scss" scoped></style>
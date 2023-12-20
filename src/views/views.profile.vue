

<template>
    <div>
        <label for="avatar">Choose a profile picture:</label>

        

        <input type="file" id="avatar" name="avatar" accept="image/png, image/jpeg" @change="onFileChange" />

        <button @click="onUploadFile" >
            Add
        </button>

    </div>
</template>

<script setup>

import { ref } from 'vue';
import UserStore from '../store/store.user_store';

const user_store = UserStore();
// const selected_file = ref('');

let selected_file = "";

const onFileChange = (e) => {
    console.log('file change');
    const temp = e.target.files[0];
    selected_file = temp;
}

const onUploadFile = () => {

    if(user_store.user?.id){
        console.log('image upload');
        const formData = new FormData();
        formData.append("id", user_store.user?.id);
        formData.append("file", selected_file); 
        user_store.uploadImage(formData);
    }

}

</script>

<style lang="scss" scoped></style>
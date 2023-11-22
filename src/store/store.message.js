
import { defineStore } from "pinia"; 

import axios from 'axios';

axios.defaults.withCredentials = true;

const MessageStore = defineStore('MessageStore', {
    state: () => ({
        toggle_message: false,
        toggle_user: false
    }),
    getters:{},
    actions:{}
})

export default MessageStore;
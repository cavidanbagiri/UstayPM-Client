
import { defineStore } from "pinia"; 

import axios from 'axios';

axios.defaults.withCredentials = true;

const MessageStore = defineStore('MessageStore', {
    state: () => ({
        toggle_message: false,
        toggle_user: false,
        users: []
    }),
    getters:{},
    actions:{
        async fetchUsers(){
            try{    
                await axios.get(`${import.meta.env.VITE_API}/common/fetchallusers`)
                .then((respond)=>{
                    this.users = respond.data
                    console.log('messages users is : ', this.users);
                })
                
            }
            catch(err){
                console.log('Message Section fetching Users Error : ',err);
            }
        }
    }
})

export default MessageStore;
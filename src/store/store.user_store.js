import { defineStore } from "pinia";
import axios from 'axios';
const UserStore = defineStore('User Store',{
  state: () => ({
    user_inform: {}
  }),

  getters: {},

  actions: {

    async LOGINSER (values) {
      console.log('Login User Func Are Working : ',values);
      // try{ 
      //   await axios.post('http://localhost:5173/api/')
      //   .then((respond)=>{
      //     console.log('user inform : ',respond.data);
      //     user_inform = respond.data
      //   })
      //   .catch((err)=>{
      //     console.log('object');
      //   })
      // }
      // catch(err){
      //   console.log('User Login Error : ', err);
      // }

    } 

  },
});

export default UserStore
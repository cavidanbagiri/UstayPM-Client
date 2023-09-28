import { defineStore } from "pinia";
import axios from 'axios';
axios.defaults.withCredentials = true;
const UserStore = defineStore('User Store',{
  state: () => ({
    user: {}
  }),

  getters: {
    GETUSER : (state)=>state.user,
  },

  actions: {

    async LOGINSER (user_data) {
      try{ 
        await axios.post(`${import.meta.env.VITE_API}/user/login`,
        user_data)
        .then((respond)=>{
          this.user = respond.data
          sessionStorage.setItem("user", JSON.stringify(respond.data));  
        })
      }
      catch(err){
        console.log('User Login Error s catch : ', err);
        return err;
      }

    } 

  },
});

export default UserStore
import { defineStore } from "pinia";
import axios from 'axios';
axios.defaults.withCredentials = true;
const UserStore = defineStore('User Store',{
  state: () => ({
    user: null
  }),

  getters: {
    GETUSER : (state)=>state.user,
  },

  actions: {

    async uploadImage(data){
      axios.post(`${import.meta.env.VITE_API}/user/upload`,data)
      .then((respond)=>{
        console.log('image add successfully');
      })
      .catch((err)=>{
        console.log('image cant add : ', err);
      })
    },

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
    },

    async LOGOUTUSER (){
      sessionStorage.clear();
      this.user = null;
    }

  },
});

export default UserStore
import { defineStore } from "pinia";
import axios from 'axios';
axios.defaults.withCredentials = true;
const UserStore = defineStore('User Store',{
  state: () => ({
    user: null,
  }),

  getters: {
    GETUSER : (state)=>state.user,
  },

  actions: {

    async uploadImage(data){
      axios.post(`${import.meta.env.VITE_API}api/user/upload`,data)
      .then((respond)=>{
        this.user.image_url = `${import.meta.env.VITE_API}/${respond.data}`
      })
      .catch((err)=>{
        console.log('image cant add : ', err);
      })
    },

    async LOGINSER (user_data) {
      console.log('user login : ', import.meta.env.VITE_API);
      try{ 
        await axios.post(`${import.meta.env.VITE_API}api/user/login`,
        user_data)
        .then((respond)=>{
          this.user = respond.data
          this.user.image_url = `${import.meta.env.VITE_API}/${this.user?.image_url}`
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
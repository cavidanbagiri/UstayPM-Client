import { defineStore } from "pinia";
import axios from "axios";
axios.defaults.withCredentials = true;
const UserStore = defineStore("User Store", {
  state: () => ({
    // Current User
    user: null,

    // All Users
    all_users: [],
    all_users_headers: [],


  }),

  getters: {
    GETUSER: (state) => state.user,
  },

  actions: {
    async uploadImage(data) {
      axios
        .post(`${import.meta.env.VITE_API}api/user/upload`, data)
        .then((respond) => {
          this.user = JSON.parse(sessionStorage?.getItem("user"));
          this.user.image_url = respond.data;
          sessionStorage.setItem("user", JSON.stringify(this.user));
        })
        .catch((err) => {
          console.log("image cant add : ", err);
        });
    },

    async LOGINSER(user_data) {
      try {
        await axios
          .post(`${import.meta.env.VITE_API}api/user/login`, user_data)
          .then((respond) => {
            this.user = respond.data;
            sessionStorage.setItem("user", JSON.stringify(respond.data));
          });
      } catch (err) {
        console.log("User Login Error s catch : ", err);
        return err;
      }
    },

    async LOGOUTUSER() {
      sessionStorage.clear();
      this.user = null;
    },

    async fetahAllUsers(data) {
      if (data.project_id) {
        try {
          await axios
            .get(`${import.meta.env.VITE_API}api/user/fetchusers/${data.project_id}?userid=${data.user_id}`,)
            .then((respond) => {
              this.all_users = respond.data;
              console.log('this.allusers : ', this.all_users);
            });
        } catch (err) {
          console.log("User Fetch Error s catch : ", err);
          return err;
        }
      }
    },

    // Fetch SFT Headers
    async getUsersHeaders() {
      if (this.all_users.length) {
        for (let [key, value] of Object.entries(this.all_users[0])) {
          const last_two_digits = key.slice(key.length - 2, key.length );
          if (key !== "id" && last_two_digits !== 'id' && last_two_digits !=='Id' ) {
            let header_cond = {};
            let val = key.charAt(0).toUpperCase() + key.slice(1);
            val = val.split("_").join(" ");
            if (
              key === "username" ||
              key === "department_name" ||
              key === "status_name" ||
              key === "project_name"
            ) {
              header_cond["showname"] = `${val}`;
              header_cond["name"] = `${key}`;
              header_cond["value"] = true;
            } else {
              header_cond["showname"] = `${val}`;
              header_cond["name"] = `${key}`;
              header_cond["value"] = false;
            }
            this.all_users_headers.push(header_cond);
          }
        }
        // Sort Headers
        // for (let i = 0; i < this.all_stf_headers?.length; i++) {
        //   if (this.all_stf_headers[i].name === "completed") {
        //     let temp = this.all_stf_headers[0];
        //     this.all_stf_headers[0] = this.all_stf_headers[i];
        //     this.all_stf_headers[i] = temp;
        //   }
        //   if (this.all_stf_headers[i].name === "stf_num") {
        //     let temp = this.all_stf_headers[1];
        //     this.all_stf_headers[1] = this.all_stf_headers[i];
        //     this.all_stf_headers[i] = temp;
        //   }
        //   if (this.all_stf_headers[i].name === "sm_num") {
        //     let temp = this.all_stf_headers[2];
        //     this.all_stf_headers[2] = this.all_stf_headers[i];
        //     this.all_stf_headers[i] = temp;
        //   }
        //   if (this.all_stf_headers[i].name === "situation") {
        //     let temp = this.all_stf_headers[3];
        //     this.all_stf_headers[3] = this.all_stf_headers[i];
        //     this.all_stf_headers[i] = temp;
        //   }
        // }
      }
    },


  },
});

export default UserStore;

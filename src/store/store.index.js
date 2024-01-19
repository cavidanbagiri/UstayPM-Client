import { defineStore } from "pinia";
import axios from "axios";

axios.defaults.withCredentials = true;

const IndexStore = defineStore("IndexStore", {
  state: () => ({
    // Common Design
    canvas_toggle: false,

    // Table Row Inform
    row_inform_condition: false,
    row_detail_data: null,

    // Get STF, SM, Warehouse Common Statistic Data
    statistic_data: null,

    // Group Chart Statistic_data
    group_chart_statistic_data: [],

    // warehouse dtock statictic data
    ws_statistic_data : [],

    // Get SOCKET New STF Notification Data
    new_stf_notification: null,

    // Accept New SMS Notification
    accept_sms_notification: [],

    // fetch stf inform data limit 30
    stf_data: [],
    stf_data_headers:[],

    // Fetch User Data
    user_data: [],
    user_data_headers: [],

    // starred stfs
    starred_stf: [],
    starred_stf_headers: [],

    // Starred
    all_starred_loading: true,
    all_starred_cond_text: false,

  }),

  getters: {
    GETCANVASTOGGLE: (state) => state.canvas_toggle,
    GETUSERTELEPORT: (state) => state.user_teleport,
  },

  actions: {
    TOGGLECANVAS() {
      this.canvas_toggle = !this.canvas_toggle;
    },

    // Get Row Information
    async fetchSTFRowInform(stfid) {
      this.row_detail_data = null;
      try {
        await axios
          .get(
            `
            ${import.meta.env.VITE_API}api/common/fetchstfrowinform/${stfid}
          `
          )
          .then((respond) => {
              this.row_detail_data = respond.data;
          })
          .catch((err) => {
            console.log("row detail respond Error : ", err);
          });
      } catch (err) {
        console.log("Get Row Detail Error : ", err);
      }
    },

    // Fetch STF Data and show in dashbord stf_table side
    async fetchSTFData(project_id){
      try {
        await axios
          .get(
            `
            ${import.meta.env.VITE_API}api/common/fetchstfdata/${project_id}
          `
          )
          .then((respond) => {
              this.stf_data = respond.data;
          })
          .catch((err) => {
            console.log("row detail respond Error : ", err);
          });
      } catch (err) {
        console.log("Get Row Detail Error : ", err);
      }
    },

    // Fetch All User STF Headers
    async getHeaders() {
      if (this.stf_data?.length >= 1) {
        // Add Header To Header List
        for (let [key, value] of Object.entries(this?.stf_data[0])) {
          // Handle If Header name contain id or Id
          const last_two_digits = key.slice(key.length - 2, key.length);
          if (
            key !== "id" &&
            last_two_digits !== "id" &&
            last_two_digits !== "Id" &&
            key !== "image_url"
          ) {
            let header_cond = {};
            let val = key.charAt(0).toUpperCase() + key.slice(1);
            val = val.split("_").join(" ");
            if (
              key === "stf_num" ||
              key === "created_by" ||
              key === "created_date" 
            ) {
              // header_cond[`${key}`] = true;
              header_cond["showname"] = `${val}`;
              header_cond["name"] = `${key}`;
              header_cond["value"] = true;
            } else {
              // header_cond[`${key}`] = false;
              header_cond["showname"] = `${val}`;
              header_cond["name"] = `${key}`;
              header_cond["value"] = false;
            }
            this.stf_data_headers.push(header_cond);
          }
        }
        // Sort Headers
        for (let i = 0; i < this.stf_data_headers?.length; i++) {
          // if (this.stf_data_headers[i].name === "completed") {
          //   let temp = this.stf_data_headers[0];
          //   this.stf_data_headers[0] = this.stf_data_headers[i];
          //   this.stf_data_headers[i] = temp;
          // }
          if (this.stf_data_headers[i].name === "stf_num") {
            let temp = this.stf_data_headers[0];
            this.stf_data_headers[0] = this.stf_data_headers[i];
            this.stf_data_headers[i] = temp;
          }
        }
      }
    },

    // Fetch STF Data and show in dashbord stf_table side
    async fetchUserData(project_id){
      try {
        await axios
          .get(
            `
            ${import.meta.env.VITE_API}api/common/fetchuserdata/${project_id}
          `
          )
          .then((respond) => {
            this.user_data = respond.data;
            console.log('this user data : ', this.user_data);
          })
          .catch((err) => {
            console.log("row detail respond Error : ", err);
          });
      } catch (err) {
        console.log("Get Row Detail Error : ", err);
      }
    },

    // Fetch All User STF Headers
    async getUserHeaders() {
      if (this.user_data?.length >= 1) {
        // Add Header To Header List
        for (let [key, value] of Object.entries(this?.user_data[0])) {
          // Handle If Header name contain id or Id
          const last_two_digits = key.slice(key.length - 2, key.length);
          if (
            key !== "id" &&
            last_two_digits !== "id" &&
            last_two_digits !== "Id" &&
            key !== "image_url"
          ) {
            let header_cond = {};
            let val = key.charAt(0).toUpperCase() + key.slice(1);
            val = val.split("_").join(" ");
            if (
              key === "image_url" ||
              key === "username" 
            ) {
              // header_cond[`${key}`] = true;
              header_cond["showname"] = `${val}`;
              header_cond["name"] = `${key}`;
              header_cond["value"] = true;
            } else {
              // header_cond[`${key}`] = false;
              header_cond["showname"] = `${val}`;
              header_cond["name"] = `${key}`;
              header_cond["value"] = false;
            }
            this.user_data_headers.push(header_cond);
          }
        }
        // Sort Headers
        for (let i = 0; i < this.user_data_headers?.length; i++) {
          // if (this.stf_data_headers[i].name === "completed") {
          //   let temp = this.stf_data_headers[0];
          //   this.stf_data_headers[0] = this.stf_data_headers[i];
          //   this.stf_data_headers[i] = temp;
          // }
          if (this.user_data_headers[i].name === "stf_num") {
            let temp = this.user_data_headers[0];
            this.user_data_headers[0] = this.user_data_headers[i];
            this.user_data_headers[i] = temp;
          }
        }
      }
    },

    // Get Statistic Data Result
    async fetchStatisticResult(data) {
      if (data?.user_id) {
        try {
          await axios
            .get(`${import.meta.env.VITE_API}api/common/statisticdata/${data?.user_id}?project_id=${data?.project_id}`)
            .then((respond) => {
              this.statistic_data = respond.data;
            })
            .catch((err) => {
              console.log("row detail respond Error : ", err);
            });
        } catch (err) {
          console.log("Get Row Detail Error : ", err);
        }
      }
    },

    // Set Create New STF Notification Read True
    // async readNotification(user_id) {
    //   if (user_id) {
    //     try {
    //       await axios
    //         .post(
    //           `${import.meta.env.VITE_API}api/common/readnotification/${user_id}`
    //         )
    //         .then((respond) => {});
    //     } catch (err) {
    //       console.log("Read Notification Error : ", err);
    //     }
    //   }
    // },

    // Set Accept SM Notification Read True
    async acceptSMRead(data){
      if (data.user_id) {
        try {
          await axios
            .post(
              `${import.meta.env.VITE_API}api/common/readacceptsmnotification/${data.user_id}?notification_id=${data.notification_id}`
            )
            .then((respond) => {});
        } catch (err) {
          console.log("Read Notification Error : ", err);
        }
      }
    },

    // Set Accept SM Notification Read True
    async NewSTFNotificationRead(data){
      if (data.user_id) {
        try {
          await axios
            .post(
              `${import.meta.env.VITE_API}api/common/readnotification/${data.user_id}?notification_id=${data.notification_id}`
            )
            .then((respond) => {});
        } catch (err) {
          console.log("Read Notification Error : ", err);
        }
      }
    },

    // Set STF Status
    async setStfStatus(status){
        if(status.user){
          try{
            return await axios.post(`${import.meta.env.VITE_API}api/common/changestatus`,status)
            .then((respond)=>{
              console.log('Change Status from axios : ', respond);
              return respond;
            }).catch((err)=>{
              console.log('catch is : ', err);
            })
          } 
          catch(err){
            console.log('Change Status Error : ',err);
          }
        }
    },

    // Cancel STF
    async cancelSTF(data){
      if(data.user_id){
        try{
          await axios.post(`${import.meta.env.VITE_API}api/common/cancelstf`, data)
          .then((respond)=>{
            console.log('stf canceled successfully executed');
          })
        }
        catch(err){
          console.log('Canceled STF Error : ', err);
        }
      }
    },

    // Group Chart Statistic Data
    async groupChartStatisticData(project_id){
      if(project_id){
        try{
          await axios.get(
            `${import.meta.env.VITE_API}api/common/groupchartstatisticdata/${project_id}`
          ).then((respond)=>{
            this.group_chart_statistic_data = respond.data;
          })
        }
        catch(err){
          console.log('Group Chat Statistic Data Error : ', err);
        }
      }
    },

    // Group Chart Statistic Data
    async wsStatisticData(project_id){
      if(project_id){
        try{
          await axios.get(
            `${import.meta.env.VITE_API}api/common/warehousestockstatisticdata/${project_id}`
          ).then((respond)=>{
            this.ws_statistic_data = respond.data;
            console.log('warehouse stock : ', this.ws_statistic_data)
          })
        }
        catch(err){
          console.log('Group Chat Statistic Data Error : ', err);
        }
      }
    },

    // Toggle Star
    async toggleStar(data){
      if(data.user_id){
        try{
          return await axios.post(
            `${import.meta.env.VITE_API}api/common/setstar/${data.user_id}`, data
          ).then((respond)=>{
            return respond
          })
        }
        catch(err){
          console.log('Group Chat Statistic Data Error : ', err);
        }
      }
    },

    // Starred STF
    async starredSTF(data){
      this.all_starred_loading = true;
      if(data.user_id){
        await axios.get(`
          ${import.meta.env.VITE_API}api/common/fetchuserstarred/${data.user_id}?project_id=${data.project_id}
        `).then((respond)=>{
          if(respond.data.length !== 0){
            this.starred_stf = respond.data
            this.all_starred_loading = false;
            this.all_starred_cond_text = false;
          }
          else{
            this.all_starred_loading = false;
            this.all_starred_cond_text = true;
          }
        }).catch((err)=>{
          console.log('fetch stf starred ERROR : ', err);
        })
      }
    },


    async getSTFStarredHeaders() {
      if (this.starred_stf?.length >= 1) {
        // Add Header To Header List
        for (let [key, value] of Object.entries(this?.starred_stf[0])) {
          // Handle If Header name contain id or Id
          const last_two_digits = key.slice(key.length - 2, key.length);
          if (
            key !== "id" &&
            last_two_digits !== "id" &&
            last_two_digits !== "Id" &&
            key !== "image_url"
          ) {
            let header_cond = {};
            let val = key.charAt(0).toUpperCase() + key.slice(1);
            val = val.split("_").join(" ");
            if (
              key === "completed" ||
              key === "stf_num" ||
              key === "createdAt" ||
              key === "situation" ||
              key === "material_type" ||
              key === "material_name" ||
              key === "amount" ||
              key === "unit" ||
              key === "username" ||
              key === "field_name"
            ) {
              // header_cond[`${key}`] = true;
              header_cond["showname"] = `${val}`;
              header_cond["name"] = `${key}`;
              header_cond["value"] = true;
            } else {
              // header_cond[`${key}`] = false;
              header_cond["showname"] = `${val}`;
              header_cond["name"] = `${key}`;
              header_cond["value"] = false;
            }
            this.starred_stf_headers.push(header_cond);
          }
        }
        // Sort Headers
        for (let i = 0; i < this.starred_stf_headers?.length; i++) {
          // if (this.stf_data_headers[i].name === "completed") {
          //   let temp = this.stf_data_headers[0];
          //   this.stf_data_headers[0] = this.stf_data_headers[i];
          //   this.stf_data_headers[i] = temp;
          // }
          if (this.starred_stf_headers[i].name === "stf_num") {
            let temp = this.starred_stf_headers[0];
            this.starred_stf_headers[0] = this.starred_stf_headers[i];
            this.starred_stf_headers[i] = temp;
          }
        }
      }
    },

  },
});

export default IndexStore;

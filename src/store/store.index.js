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

    // Get SOCKET New STF Notification Data
    new_stf_notification: null,

    // Accept New SMS Notification
    accept_sms_notification: [],

    // fetch stf inform data limit 30
    stf_data: [],
    stf_data_headers:[]

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

    // Fetch STF Data and show in frontend
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

    // Set Notification True
    async readNotification(user_id) {
      if (user_id) {
        try {
          await axios
            .post(
              `${import.meta.env.VITE_API}api/common/readnotification/${user_id}`
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
            await axios.post(`${import.meta.env.VITE_API}api/common/changestatus`,status)
            .then((respond)=>{
              console.log('Change Status from axios : ', respond);
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
    }

  },
});

export default IndexStore;

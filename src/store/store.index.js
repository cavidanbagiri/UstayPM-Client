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
      try {
        await axios
          .get(
            `
            ${import.meta.env.VITE_API}/common/fetchstfrowinform/${stfid}
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

    // Get Statistic Data Result
    async fetchStatisticResult(user_id) {
      if (user_id) {
        try {
          await axios
            .get(`${import.meta.env.VITE_API}/common/statisticdata/${user_id}`)
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
              `${import.meta.env.VITE_API}/common/readnotification/${user_id}`
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
            await axios.post(`${import.meta.env.VITE_API}/common/changestatus`,status)
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
          await axios.post(`${import.meta.env.VITE_API}/common/cancelstf`, data)
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

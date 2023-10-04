
import { defineStore } from 'pinia'

import axios from 'axios';

axios.defaults.withCredentials = true;

const ProcurementStore = defineStore("ProcurementStore",{

  state: ()=>({

    // Create Listening FOr Changing STF Page Menu
    tab_num : 0, 

    // After Creating New SMS, Messagw will shown
    sm_success_show_message: false, 
  
    // For choosing STF and sending for creating STF
    checked_values: [],

    // Choose Companies Name
    companies_names: [], // 

    // All Procurement Specialist For Buying
    procurement_users_names: [], 

    // Choose STF and send backend for inserting `stfs` table
    creating_STF_datas: [], //                         

    // After Create SM, for unchecked all selected rows
    after_created: false,//          

    // Get All STF
    all_stf: [], //

    // For Showing STF Table Headers
    stf_table_headers: [],//   


  }),
  getters:{
    GETCHECKEDVALUES: (state) => state.checked_values,
    GETCOMPANIESNAMES: (state) => state.companies_names,
    GETPROCUREMENTUSERSNAMES: (state) => state.procurement_users_names,
    GETCREATINGSTFDATA: (state) => state.creating_STF_datas,
  },
  actions:{

    // Create New SMS                                                                               
    async createSM(orders) {
      try {
        await axios
          .post(`${import.meta.env.VITE_API}/procurement/createsm`, orders)
          .then((respond) => {
            return respond;
          });
      } catch (err) {
        return err;
      }
    },

    // Fetch All STF
    async fetchSTF(){
      // await axios.get(`${import.meta.env.VITE_API}/procurement/allstf`)
      try{
        await axios
        .get(`${import.meta.env.VITE_API}/procurement/fetchstf`)
        .then((respond) => {
          this.all_stf = respond.data;
        })
        .catch((err) => {
          console.log("all stf Error : ", err);
        });
      }
      catch(err){
        console.log('Fetch All STF Error : ',err);
      }
    },



    // Fetch SFT Headers
    // Get Table Headers and show in STF                                                        [ Checked ]
    async getSTFHeaders() {
      if (this.all_stf.length) {
        for (let [key, value] of Object.entries(this.all_stf[0])) {
          if (key !== "id") {
            let header_cond = {};
            let val = key.charAt(0).toUpperCase() + key.slice(1);
            val = val.split("_").join(" ");
            if (
              key === "completed" ||
              key === "stf_num" ||
              key === "sm_num" ||
              key === "createdAt" ||
              key === "situation" ||
              key === "material_type" ||
              key === "material_name" ||
              key === "material_unit" ||
              key === "material_amount" ||
              key === "username"
            ) {
              header_cond["showname"] = `${val}`;
              header_cond["name"] = `${key}`;
              header_cond["value"] = true;
            } else {
              header_cond["showname"] = `${val}`;
              header_cond["name"] = `${key}`;
              header_cond["value"] = false;
            }
            this.stf_table_headers.push(header_cond);
          }
        }
        // Sort Headers
        for (let i = 0; i < this.all_stf_headers?.length; i++) {
          if (this.all_stf_headers[i].name === "completed") {
            let temp = this.all_stf_headers[0];
            this.all_stf_headers[0] = this.all_stf_headers[i];
            this.all_stf_headers[i] = temp;
          }
          if (this.all_stf_headers[i].name === "stf_num") {
            let temp = this.all_stf_headers[1];
            this.all_stf_headers[1] = this.all_stf_headers[i];
            this.all_stf_headers[i] = temp;
          }
          if (this.all_stf_headers[i].name === "sm_num") {
            let temp = this.all_stf_headers[2];
            this.all_stf_headers[2] = this.all_stf_headers[i];
            this.all_stf_headers[i] = temp;
          }
          if (this.all_stf_headers[i].name === "situation") {
            let temp = this.all_stf_headers[3];
            this.all_stf_headers[3] = this.all_stf_headers[i];
            this.all_stf_headers[i] = temp;
          }
        }
      }
    },


  }

})

export default ProcurementStore
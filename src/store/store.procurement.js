
import { defineStore } from 'pinia'

import axios from 'axios';

axios.defaults.withCredentials = true;

const ProcurementStore = defineStore("ProcurementStore",{

  state: ()=>({

    // Create Listening FOr Changing STF Page Menu
    tab_num : 0, 

    // Show Message After Creating New SMS
    msg_cond : false,
  
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

    // Get All SM
    all_sms: [], //

    // For Showing STF Table Headers
    stf_table_headers: [],//   

    // For Showing S< Table Headers
    sm_table_headers: [],//   

    // Disable Or Enable Create SM Button
    toggle_createsm: false, //

    // Fetch Username For Server For Filtered STF and SM With Username
    created_stf_username: []

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
    // Get Table Headers and show in STF
    async getSTFHeaders() {
      if (this.all_stf.length) {
        for (let [key, value] of Object.entries(this.all_stf[0])) {
          const last_two_digits = key.slice(key.length - 2, key.length );
          if (key !== "id" && last_two_digits !== 'id' && last_two_digits !=='Id' ) {
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

    // Fetch All SMS                                                                            [ Checked ]
    async fetchAllSM() {
      try{
        await axios
        .get(`${import.meta.env.VITE_API}/procurement/fetchsm`)
        .then((respond) => {
          this.all_sms = respond.data;
          console.log('sms : ',this.all_sms);
        })
        .catch((err) => {
          console.log("all stf Error : ", err);
        });
      }
      catch(err){
        console.log('Fetch ALl SM Error : ',err);
      }
    },

    // Get Table Headers and show in STF
    async getSMHeaders() {
      if (this.all_sms.length) {
        for (let [key, value] of Object.entries(this.all_sms[0])) {
          if (key !== "id") {
            let header_cond = {};
            let val = key.charAt(0).toUpperCase() + key.slice(1);
            val = val.split("_").join(" ");
            // const val = key.charAt(0).toUpperCase() + key.slice(1);
            if (
              key === "stf_num" ||
              key === "sm_num" ||
              key === "created_at" ||
              key === "situation" ||
              key === "sm_material_name" ||
              key === "sm_material_amount" ||
              key === "sm_material_unit" ||
              key === "sm_num" ||
              key === "username" ||
              key === "orderer"
            ) {
              header_cond["showname"] = `${val}`;
              header_cond["name"] = `${key}`;
              header_cond["value"] = true;
            } else {
              header_cond["showname"] = `${val}`;
              header_cond["name"] = `${key}`;
              header_cond["value"] = false;
            }
            this.sm_table_headers.push(header_cond);
          }
        }
        // Sort Headers
        for (let i = 0; i < this.sm_table_headers?.length; i++) {
          if (this.sm_table_headers[i].name === "stf_num") {
            let temp = this.sm_table_headers[0];
            this.sm_table_headers[0] = this.sm_table_headers[i];
            this.sm_table_headers[i] = temp;
          }
          if (this.sm_table_headers[i].name === "sm_num") {
            let temp = this.sm_table_headers[1];
            this.sm_table_headers[1] = this.sm_table_headers[i];
            this.sm_table_headers[i] = temp;
          }
          if (this.sm_table_headers[i].name === "situation") {
            let temp = this.sm_table_headers[2];
            this.sm_table_headers[2] = this.sm_table_headers[i];
            this.sm_table_headers[i] = temp;
          }
        }
      }
    },
    
    // Get Companies Names          
    async getCompaniesNames() {
      try{
        await axios
        .get(`${import.meta.env.VITE_API}/procurement/companies`)
        .then((respond) => {
          this.companies_names = respond.data;
          console.log('companies names : ',this.companies_names);
        })
        .catch((err) => {
          console.log("Getting Companies Names Errors : ", err);
        });
      }
      catch(err){
        console.log('Get Companies Name Error : ',err);
      }
    },

    // Get Procurement Users Names
    async getProcurementUsersNames() {
      try{
        await axios
        .get(`${import.meta.env.VITE_API}/procurement/users`)
        .then((respond) => {
          this.procurement_users_names = respond.data;
        })
        .catch((err) => {
          console.log("Get Users Names Errors : ", err);
        });
      }
      catch(err){
        console.log('Get Procurement Users Error : ',err);
      }
    },

    // Fet Username Data Who Create STF
    async fetchSTFCreateUsernames() {
      try{
        await axios
        .get(`${import.meta.env.VITE_API}/procurement/createdstfusers`)
        .then((respond) => {
          this.created_stf_username = respond.data;
        })
        .catch((err) => {
          console.log("Get Users Names Errors : ", err);
        });
      }
      catch(err){
        console.log('Get Procurement Users Error : ',err);
      }
    },

    // Get Filtered Data For User STF
    async getFilteredDataSTF(filtered_object) {
      const queries = this.createUrlQuery(filtered_object);
      console.log('queries is : ', queries);
      try {
        await axios
          .get(
            `
                ${import.meta.env.VITE_API}/procurement/filterstf${queries}
            `
          )
          .then((respond) => {
            this.all_stf = respond.data;
          })
          .catch((err) => {
            console.log("Error Is : ", err);
          });
      } catch (err) {
        console.log("Get Filtered Data Error : ", err);
      }
    },

    // Get Filtered Data For User STF
    async getFilteredDataSM(filtered_object) {
      const queries = this.createUrlQuery(filtered_object);
      console.log('filtered query ',filtered_object);
      try {
        await axios
          .get(
            `
                ${import.meta.env.VITE_API}/procurement/filtersm${queries}
            `
          )
          .then((respond) => {
            this.all_sm = respond.data;
          })
          .catch((err) => {
            console.log("Error Is : ", err);
          });
      } catch (err) {
        console.log("Get Filtered Data Error : ", err);
      }
    },

    // Create URL query from table filter watcher             
    createUrlQuery(filtered_object) {
      let queries = "";

      // Get All Keys from filtered_object
      for (let [key, value] of Object.entries(filtered_object)) {
        // If queries_string is empty and question mark
        if (queries === "") {
          queries += "?";
        }
        if (filtered_object[key] !== "") {
        }
        queries += `${key}=${filtered_object[key]}`;
        queries += "&";
      }
      queries = queries.slice(0, -1);

      return queries;
    },

  }
})

export default ProcurementStore
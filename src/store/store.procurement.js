
import { defineStore } from 'pinia'

import axios from 'axios';

axios.defaults.withCredentials = true;

const ProcurementStore = defineStore("ProcurementStore",{

  state: ()=>({

    // Create Listening FOr Changing STF Page Menu
    tab_num : 0, 
  
    // For choosing STF and sending for creating SM
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
    created_stf_username: [],
    
    // Fetch Warehouse Data 
    warehouse_data: [],

    // Fetch Warehouse Headers
    warehouse_headers: [],

    // Warehouse Section, Selected Items
    warehouse_selecting_rows : [], // Selecting Rows Will Ad To This Array

    // Filter Vendor Names
    filtered_vendor_names : [],


  }),
  getters:{
    GETCHECKEDVALUES: (state) => state.checked_values,
    GETCOMPANIESNAMES: (state) => state.companies_names,
    GETPROCUREMENTUSERSNAMES: (state) => state.procurement_users_names,
    GETCREATINGSTFDATA: (state) => state.creating_STF_datas,
    GETWAREHOUSEHEADERS: (state) => state.warehouse_headers
  },
  actions:{

    // Create New SMS                                                                               
    async createSM(orders) {
      try {
        await axios
          .post(`${import.meta.env.VITE_API}api/procurement/createsm`, orders)
          .then((respond) => {
            return respond;
          });
      } catch (err) {
        return err;
      }
    },

    // Fetch All STF
    // async fetchSTF(data){
    //   // await axios.get(`${import.meta.env.VITE_API}api/procurement/allstf`)
    //   try{
    //     await axios
    //     .get(`${import.meta.env.VITE_API}api/procurement/fetchstf/${data.project_id}?user_id=${data.user_id}`)
    //     .then((respond) => {
    //       this.all_stf = respond.data;
    //     })
    //     .catch((err) => {
    //       console.log("all stf Error : ", err);
    //     });
    //   }
    //   catch(err){
    //     console.log('Fetch All STF Error : ',err);
    //   }
    // },

    // Get Filtered Data For User STF
    async getFilteredDataSTF(data) {
      const queries = this.createUrlQuery(data.filtered_objects);
      try {
        await axios
          .get(
            // `${import.meta.env.VITE_API}api/common/filterstf${queries}?user_id=${data.user_id}`
            `${import.meta.env.VITE_API}api/common/filterstf/${data.user_id}${queries}`
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

    // Fetch SFT Headers
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
              key === "amount" ||
              key === "unit" ||
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

    // Fetch All SMS
    // async fetchAllSM(projectId) {
    //  if(projectId){
    //   try{
    //     await axios
    //     .get(`${import.meta.env.VITE_API}api/procurement/fetchsm/${projectId}`)
    //     .then((respond) => {
    //       this.all_sms = respond.data;
    //     })
    //     .catch((err) => {
    //       console.log("all stf Error : ", err);
    //     });
    //   }
    //   catch(err){
    //     console.log('Fetch ALl SM Error : ',err);
    //   }
    //  }
    // },

    // Get Filtered Data For User STF
    async getFilteredDataSM(filtered_object) {
      const queries = this.createUrlQuery(filtered_object);
      try {
        await axios
          .get(
            `
                ${import.meta.env.VITE_API}api/common/filtersm${queries}
            `
          )
          .then((respond) => {
            this.all_sms = respond.data;
          })
          .catch((err) => {
            console.log("Error Is : ", err);
          });
      } catch (err) {
        console.log("Get Filtered Data Error : ", err);
      }
    },

    // Get Table Headers and show in STF
    async getSMHeaders() {
      if (this.all_sms.length) {
        for (let [key, value] of Object.entries(this.all_sms[0])) {
          const last_two_digits = key.slice(key.length - 2, key.length );
          if (key !== "id" && last_two_digits !== 'id' && last_two_digits !=='Id') {
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
              key === "amount" ||
              key === "unit" ||
              key === "sm_num" ||
              key === "price" ||
              key === "total" ||
              key === "currency" ||
              key === "left_over" ||
              key === "supplier" ||
              key === "vendor_name" ||
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
        .get(`${import.meta.env.VITE_API}api/common/fetchcompanies`)
        .then((respond) => {
          this.companies_names = respond.data;
          this.filtered_vendor_names = respond.data;
        })
        .catch((err) => {
          console.log("Getting Companies Names Errors : ", err);
        });
      }
      catch(err){
        console.log('Get Companies Name Error : ',err);
      }
    },

    async filterVendorName (selected_text){
      if(selected_text.toString().trim()===''){
        this.filtered_vendor_names = this.companies_names;
      }
      else{
        try {
          await axios
            .get(
              `
                  ${import.meta.env.VITE_API}api/common/filtervendornames?selected_text=${selected_text}
              `
            )
            .then((respond) => {
                this.filtered_vendor_names = respond.data;
            })
            .catch((err) => {
              console.log("Error Is : ", err);
            });
        } catch (err) {
          console.log("Get Filtered Data Error : ", err);
        }
      }
    },

    // Get Procurement Users Names
    async getProcurementUsersNames(project_id) {
      try{
        await axios
        .get(`${import.meta.env.VITE_API}api/common/procurementusers/${project_id}`)
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
    async fetchSTFCreateUsernames(project_id) {
      if(project_id){
        
        try{
          await axios
          .get(`${import.meta.env.VITE_API}api/common/createdstfusers/${project_id}`)
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
      }
    },

    // Fetch Warehouse Data
    // async fetchWarehouseData(project_id) {
    //     try{
    //       // await axios.get(`${import.meta.env.VITE_API}api/procurement/warehouse`)
    //       await axios.get(`${import.meta.env.VITE_API}api/warehouse/${project_id}`)
    //       .then((respond)=>{
    //         this.warehouse_data = respond.data;
    //       })
    //       .catch((err)=>{
    //         console.log('Fetch User Catch Error : ',err);
    //       })
  
    //     }catch(err){
    //       console.log('Fetch User STF Error : ', err);
    //       return err;
    //     }
    // },

    // Fetch All User STF Headers
    async getWarehouseHeaders() {
      if (this.warehouse_data?.length>1) {
        // Add Header To Header List
        for (let [key, value] of Object.entries(this?.warehouse_data[0])) {
          // Handle If Header name contain id or Id
          const last_two_digits = key.slice(key.length - 2, key.length );
          if (key !== "id" && last_two_digits !== 'id' && last_two_digits !=='Id' ) {
            let header_cond = {};
            let val = key.charAt(0).toUpperCase() + key.slice(1);
            val = val.split("_").join(" ");
            if (
              key === "stf_num" ||
              key === "sm_num" ||
              key === "material_name" ||
              key === "amount" ||
              key === "unit" ||
              key === "vendor_name" ||
              key === "stock" ||
              key === "certificate" ||
              key === "passport" ||
              key === "field"
              
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
            this.warehouse_headers.push(header_cond);
          }
        }
        // Sort Headers
        // for (let i = 0; i < this.warehouse_data?.length; i++) {
        //   if (this.warehouse_data[i].name === "completed") {
        //     let temp = this.warehouse_data[0];
        //     this.warehouse_data[0] = this.warehouse_data[i];
        //     this.warehouse_data[i] = temp;
        //   }
        //   if (this.warehouse_data[i].name === "stf_num") {
        //     let temp = this.warehouse_data[1];
        //     this.warehouse_data[1] = this.warehouse_data[i];
        //     this.warehouse_data[i] = temp;
        //   }
        // }
      }
    },

    // Get Filtered Data For User STF
    async getFilteredWarehouseData(filtered_object) {
      const queries = this.createUrlQuery(filtered_object);
      try {
        await axios
          .get(
            `
                ${import.meta.env.VITE_API}api/common/filterwarehouse${queries}
            `
          )
          .then((respond) => {
            this.warehouse_data = respond.data;
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
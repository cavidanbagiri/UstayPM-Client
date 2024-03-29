import { defineStore } from "pinia";

import axios from "axios";

axios.defaults.withCredentials = true;

const WarehouseStore = defineStore("WarehouseStore", {

  state: () => ({
    // Change Tab Menu
    tab_num: 0,
    processing_sms: [],
    processing_sm_headers: [],
    processing_checked_values: [],
    
    // For Returning Material To Warehouse
    return_checked_values: [],
    
    toggle_accept_sm: false,
    /*
    If All Of The Rows entering values is true, this will be true and function will work
    */
    accepted_condition : true,
    // After Accepted SM 
    after_created: false,
    // After Provide Material
    after_provide: false,
    // After Returning
    after_returning: false,
    
    // Fetch Received SMS and SHow 
    warehouse_data: [],
    warehouse_data_headers: [],

    // Fetch Data For Provides
    provides_data: [],
    provided_data_headers: [],

    // Select Warehouse Items and Send Provide Page For Provide Area 
    return_checked_values: [],
    // Warehouse Data Check Provide amount and stock is true
    warehouse_data_stock_cond: true,

    // Fetch Departments and show Provide Sm Page From Warehouse
    departments : [],
    // Fetch Warehouse Delivert Types and show Provide Sm Page From Warehouse
    delivery_types : [],

    // Choose Companies Name
    companies_names: [], // 

    // Fetch Username For Server For Filtered STF and SM With Username
    created_stf_username: [],

  }),


  actions:{
    
    // Get Waiting SM                                                               [ Check ]
    // async getProcessingSMS(projectModelId) {
    //   if(projectModelId){
    //     try{
    //       await axios
    //       .get(`${import.meta.env.VITE_API}api/procurement/fetchsm/${projectModelId}`) 
    //       .then((respond) => {
    //         this.processing_sms = respond.data;
    //       })
    //       .catch((err) => {
    //         console.log("Get Warehouse Waiting Error : ", err);
    //       });
    //     }
    //     catch(err){
    //       console.log('Error Happen For Fetching Warehouse Procesing Data');
    //     }
    //   }
    // },

    // Get Filtered Data For User STF
    async getFilteredDataProcessingSM(filtered_object) {
      const queries = this.createUrlQuery(filtered_object);
      try {
        await axios
          .get(
            `
                ${import.meta.env.VITE_API}api/common/filtersm${queries}
            `
          )
          .then((respond) => {
            this.processing_sms = respond.data;
          })
          .catch((err) => {
            console.log("Error Is : ", err);
          });
      } catch (err) {
        console.log("Get Filtered Data Error : ", err);
      }
    },

    // Get Table Headers and show in STF
    async getProcessingSMHeaders() {
      if (this.processing_sms?.length) {
        for (let [key, value] of Object.entries(this?.processing_sms[0])) {
          const last_two_digits = key.slice(key.length - 2, key.length );
          if (key !== "id" && last_two_digits !== 'id' && last_two_digits !=='Id' ) {
            let header_cond = {};
            let val = key.charAt(0).toUpperCase() + key.slice(1);
            val = val.split("_").join(" ");
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
              key === "supplier" ||
              key === "vendor_name" ||
              key === "left_over" ||
              key === "username" ||
              key === "orderer" ||
              key === "left_over_amount"
            ) {
              header_cond["showname"] = `${val}`;
              header_cond["name"] = `${key}`;
              header_cond["value"] = true;
            } else {
              header_cond["showname"] = `${val}`;
              header_cond["name"] = `${key}`;
              header_cond["value"] = false;
            }
            this.processing_sm_headers.push(header_cond);
          }
        }
        // Sort Headers
        for (let i = 0; i < this.processing_sm_headers?.length; i++) {
          if (this.processing_sm_headers[i].name === "stf_num") {
            let temp = this.processing_sm_headers[0];
            this.processing_sm_headers[0] = this.processing_sm_headers[i];
            this.processing_sm_headers[i] = temp;
          }
          if (this.processing_sm_headers[i].name === "sm_num") {
            let temp = this.processing_sm_headers[1];
            this.processing_sm_headers[1] = this.processing_sm_headers[i];
            this.processing_sm_headers[i] = temp;
          }
          if (this.processing_sm_headers[i].name === "situation") {
            let temp = this.processing_sm_headers[2];
            this.processing_sm_headers[2] = this.processing_sm_headers[i];
            this.processing_sm_headers[i] = temp;
          }
        }
      }
    },

    // Post Accepted waiting to Warehouse
    async acceptWaitingSM(data) {
      try{
        await axios
        .post(`${import.meta.env.VITE_API}api/warehouse/accept`, data)
        .then((respond) => {
          this.accepted_sms = respond;
        })
        .catch((err) => {
          console.log("Accepted Materials Error From Warehouse Store : ", err);
        });
      }
      catch(err){
        console.log('Received accept Waiting SM Error : ',err);
      }
    },

    // Fetch Received Items and Show In Warehouse/received
    async fetchWarehouseData(project_id) {
      await axios
        .get(`${import.meta.env.VITE_API}api/warehouse/${project_id}`)
        .then((respond) => {
          this.warehouse_data = respond.data;
        })
        .catch((err) => {
          console.log("Received Items Error : ", err);
        });
    },

    // Get Filtered Data For User STF
    async getFilteredDataWarehouse(filtered_object) {
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

    // Get Table Headers and show in STF
    async getWarehouseDataHeaders() {
      if (this.warehouse_data?.length) {
        for (let [key, value] of Object.entries(this.warehouse_data[0])) {
          if (key !== "id" && key.slice(-2) !== "id" ) {
            let header_cond = {};
            let val = key.charAt(0).toUpperCase() + key.slice(1);
            val = val.split("_").join(" ");
            if (
              key === "stf_num" ||
              key === "sm_num" ||
              key === "created_at" ||
              key === "situation" ||
              key === "material_name" ||
              key === "amount" ||
              key === "stock" ||
              key === "unit" ||
              key === "username" ||
              key === "orderer" ||
              key === "delivery_amount"
            ) {
              header_cond["showname"] = `${val}`;
              header_cond["name"] = `${key}`;
              header_cond["value"] = true;
            } else {
              header_cond["showname"] = `${val}`;
              header_cond["name"] = `${key}`;
              header_cond["value"] = false;
            }
            this.warehouse_data_headers.push(header_cond);
          }
        }
        // Sort Headers
        for (let i = 0; i < this.warehouse_data_headers?.length; i++) {
          if (this.warehouse_data_headers[i].name === "stf_num") {
            let temp = this.warehouse_data_headers[0];
            this.warehouse_data_headers[0] = this.warehouse_data_headers[i];
            this.warehouse_data_headers[i] = temp;
          }
          if (this.warehouse_data_headers[i].name === "sm_num") {
            let temp = this.warehouse_data_headers[1];
            this.warehouse_data_headers[1] = this.warehouse_data_headers[i];
            this.warehouse_data_headers[i] = temp;
          }
          if (this.warehouse_data_headers[i].name === "situation") {
            let temp = this.warehouse_data_headers[2];
            this.warehouse_data_headers[2] = this.warehouse_data_headers[i];
            this.warehouse_data_headers[i] = temp;
          }
        }
      }
    },

    // Fetch Provided Data and show in Provided Section
    async fetchProvidedData(project_id) {
      await axios
      .get(`${import.meta.env.VITE_API}api/provides/${project_id}`)
      .then((respond) => {
        this.provides_data = respond.data;
        console.log('Get Provide Data and result is : ',this.provides_data);
        })
        .catch((err) => {
          console.log("Provied Items Error : ", err);
        });
    },

    // Get Filtered Data For Provided Section
    // Get Filtered Data For User STF
    async getFilteredDataProvided(filtered_object) {
      const queries = this.createUrlQuery(filtered_object);
      try {
        await axios
          .get(
            `
                ${import.meta.env.VITE_API}api/common/filterprovided${queries}
            `
          )
          .then((respond) => {
            this.provides_data = respond.data;
          })
          .catch((err) => {
            console.log("Error Is : ", err);
          });
      } catch (err) {
        console.log("Get Filtered Data Error : ", err);
      }
    },

    // Get Provided Data Headers
    // Get Table Headers and show in STF
    async getProvidedDataHeaders() {
      if (this.provides_data?.length) {
        for (let [key, value] of Object.entries(this.provides_data[0])) {
          if (key !== "id" && key.slice(-2) !== "id" ) {
            let header_cond = {};
            let val = key.charAt(0).toUpperCase() + key.slice(1);
            val = val.split("_").join(" ");
            if (
              key === "sm_num" ||
              key === "provided_date" ||
              key === "material_name" ||
              key === "amount" ||
              key === "unit" ||
              key === "type_name" ||
              key === "serial_no" ||
              key === "unique_id" ||
              key === "deliver_to" || 
              key === "card_number" 
              // key === "return_date" ||
              // key === "returned_by" 
            ) {
              header_cond["showname"] = `${val}`;
              header_cond["name"] = `${key}`;
              header_cond["value"] = true;
            } else {
              header_cond["showname"] = `${val}`;
              header_cond["name"] = `${key}`;
              header_cond["value"] = false;
            }
            this.provided_data_headers.push(header_cond);
          }
        }
        
      console.log('provided data geaders : ', this.provided_data_headers);
      }
    },

    // Post Accepted waiting to Warehouse
    async provideSM(data) {
      try{
        await axios
        .post(`${import.meta.env.VITE_API}api/warehouse/provide`, data)
        .then((respond) => {
          console.log('provide respond : ',respond );
        })
        .catch((err) => {
          console.log("Provide Materials Error From Warehouse Store : ", err);
        });
      }
      catch(err){
        console.log('Provide  SM Error : ',err);
      }
    },

    // Fetch Departments
    async fetchDepartments (){
      try{
        await axios.get(`${import.meta.env.VITE_API}api/common/fetchdepartments`)
        .then((respond)=>{
          this.departments = respond.data;
        }).catch((err)=>{
          console.log('Fetch Departments Error : ',err);
        })
      }
      catch(err){
        console.log('Fetch Departments Error : ',err);
      }
    },

    // Get Companies Names          
    async getCompaniesNames() {
      try{
        await axios
        .get(`${import.meta.env.VITE_API}api/common/fetchcompanies`)
        .then((respond) => {
          this.companies_names = respond.data;
        })
        .catch((err) => {
          console.log("Getting Companies Names Errors : ", err);
        });
      }
      catch(err){
        console.log('Get Companies Name Error : ',err);
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

    // Fetch Departments -> ERROR
    async fetchWarehouseDeliveryTypes (){
      try{
        await axios.get(`${import.meta.env.VITE_API}api/common/deliverytypes`)
        .then((respond)=>{
          this.delivery_types = respond.data;
        }).catch((err)=>{
          console.log('Fetch Departments Error : ',err);
        })
      }
      catch(err){
        console.log('Fetch Departments Error : ',err);
      }
    },

    // Return Material From Provided To Warehouse
    async returnMaterial (user_id) {
      const data = {
        user : user_id,
        materials : this.return_checked_values
      }
      console.log(data);
      try{
        await axios.post(`${import.meta.env.VITE_API}api/warehouse/return`, data)
        .then((respond)=>{
          this.return_checked_values = [];
        })
        .catch((err)=>{
            console.log('return material from provide to warehouse error : ', err);
        })
      }
      catch(err){
        console.log('return material from provide to warehouse error : ', err);
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

});

export default WarehouseStore;

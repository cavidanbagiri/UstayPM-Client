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
    toggle_accept_sm: false,
    /*
    If All Of The Rows entering values is true, this will be true and function will work
    */
    accepted_condition : true,
    receive_success_show_message : false,

    // After Accepted SM 
    after_created: false,
    // After Provide Material
    after_provide: false,
    
    // Fetch Received SMS and SHow 
    warehouse_data: [],
    warehouse_data_headers: [],

    // Select Warehouse Items and Send Provide Page For Provide Area 
    warehouse_data_checked_values: [],

    // Fetch Departments and show Provide Sm Page From Warehouse
    departments : [],
    // Fetch Warehouse Delivert Types and show Provide Sm Page From Warehouse
    delivery_types : [],

  }),


  actions:{
    // Get Waiting SM                                                               [ Check ]
    async getProcessingSMS() {
      await axios
        .get(`${import.meta.env.VITE_API}/warehouse/processingsm`) 
        .then((respond) => {
          this.processing_sms = respond.data;
        })
        .catch((err) => {
          console.log("Get Warehouse Waiting Error : ", err);
        });
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
              key === "sm_material_amount" ||
              key === "sm_material_unit" ||
              key === "sm_num" ||
              key === "price" ||
              key === "total" ||
              key === "currency" ||
              key === "supplier" ||
              key === "vendor_name" ||
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
        .post(`${import.meta.env.VITE_API}/warehouse/accept`, data)
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
    async fetchWarehouseData() {
      await axios
        .get(`${import.meta.env.VITE_API}/warehouse/warehouse`)
        .then((respond) => {
          this.warehouse_data = respond.data;
        })
        .catch((err) => {
          console.log("Received Items Error : ", err);
        });
    },

    // Get Table Headers and show in STF
    async getWarehouseDataHeaders() {
      if (this.warehouse_data?.length) {
        for (let [key, value] of Object.entries(this.warehouse_data[0])) {
          if (key !== "id") {
            let header_cond = {};
            let val = key.charAt(0).toUpperCase() + key.slice(1);
            val = val.split("_").join(" ");
            if (
              key === "stf_num" ||
              key === "sm_num" ||
              key === "created_at" ||
              key === "situation" ||
              key === "delivery_material_name" ||
              key === "delivery_material_amount" ||
              key === "stock" ||
              key === "delivery_material_unit" ||
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

    // Post Accepted waiting to Warehouse
    async provideSM(data) {
      try{
        await axios
        .post(`${import.meta.env.VITE_API}/warehouse/provide`, data)
        .then((respond) => {})
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
        await axios.get(`${import.meta.env.VITE_API}/warehouse/departments`)
        .then((respond)=>{
          this.departments = respond.data;
          console.log('departments : ',this.departments);
        }).catch((err)=>{
          console.log('Fetch Departments Error : ',err);
        })
      }
      catch(err){
        console.log('Fetch Departments Error : ',err);
      }
    },


    // Fetch Departments
    async fetchWarehouseDeliveryTypes (){
      try{
        await axios.get(`${import.meta.env.VITE_API}/warehouse/deliverytypes`)
        .then((respond)=>{
          this.delivery_types = respond.data;
          console.log('delivery types : ',this.delivery_types);
        }).catch((err)=>{
          console.log('Fetch Departments Error : ',err);
        })
      }
      catch(err){
        console.log('Fetch Departments Error : ',err);
      }
    }




  }

});

export default WarehouseStore;

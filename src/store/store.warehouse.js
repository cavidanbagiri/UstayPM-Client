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
    
    // Fetch Received SMS and SHow 
    received_sms: [],
    receiving_sm_headers: [],

    // Select Warehouse Items and Send Provide Page For Provide Area 
    receiving_checked_values: [],

    // Fetch Departments and show Provide Sm Page From Warehouse
    departments : [],
    // Fetch Warehouse Delivert Types and show Provide Sm Page From Warehouse
    delivery_types : [],

  }),


  actions:{
    // Get Waiting SM                                                               [ Check ]
    async getProcessingSMS() {
      console.log('this function work');
      await axios
        .get(`${import.meta.env.VITE_API}/warehouse/processingsm`) 
        .then((respond) => {
          this.processing_sms = respond.data;
          console.log('sms : ',this.processing_sms); 
        })
        .catch((err) => {
          console.log("Get Warehouse Waiting Error : ", err);
        });
    },

    // Get Table Headers and show in STF
    async getProcessingSMHeaders() {
      console.log('header work');
      if (this.processing_sms.length) {
        for (let [key, value] of Object.entries(this.processing_sms[0])) {
          if (key !== "id") {
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
      console.log('data is : ',data);
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
    async fetchReceivingSM() {
      await axios
        .get(`${import.meta.env.VITE_API}/warehouse/receivedsm`)
        .then((respond) => {
          this.received_sms = respond.data;
          console.log('received : ',this.received_sms);
        })
        .catch((err) => {
          console.log("Received Items Error : ", err);
        });
    },

    // Get Table Headers and show in STF
    async getReceivingSMHeaders() {
      if (this.received_sms?.length) {
        for (let [key, value] of Object.entries(this.received_sms[0])) {
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
            this.receiving_sm_headers.push(header_cond);
          }
        }
        // Sort Headers
        for (let i = 0; i < this.receiving_sm_headers?.length; i++) {
          if (this.receiving_sm_headers[i].name === "stf_num") {
            let temp = this.receiving_sm_headers[0];
            this.receiving_sm_headers[0] = this.receiving_sm_headers[i];
            this.receiving_sm_headers[i] = temp;
          }
          if (this.receiving_sm_headers[i].name === "sm_num") {
            let temp = this.receiving_sm_headers[1];
            this.receiving_sm_headers[1] = this.receiving_sm_headers[i];
            this.receiving_sm_headers[i] = temp;
          }
          if (this.receiving_sm_headers[i].name === "situation") {
            let temp = this.receiving_sm_headers[2];
            this.receiving_sm_headers[2] = this.receiving_sm_headers[i];
            this.receiving_sm_headers[i] = temp;
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

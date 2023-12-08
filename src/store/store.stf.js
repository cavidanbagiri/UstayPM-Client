import { defineStore } from "pinia";
import axios from "axios";

axios.defaults.withCredentials = true;

const STFStore = defineStore("STFStore", {
  state: () => ({
    tab_num: 0, // Create Listening FOr Changing STF Page Menu
    all_stf: null, // Fetch All User STF
    all_stf_loading: true,
    all_stf_cond_text: false,
    all_stf_headers: [], // Get All fetching Data Headers
    warehouse_selecting_rows: [], // Selecting Rows Will Ad To This Array
    order_list: [], // During Create New STF, The Rows will add inside of this list for checking
    fields: [], // Fecth ALl Field accroding to project, and show when new stf creating

    // **** Warehouse 
    warehouse_data: [], // Fetch All Warehouse Data
    warehouse_data_loading: true,
    warehouse_data_cond_text: false,
    warehouse_headers: [], // Fetch All Warehouse Headers

    // **** Provide
    // Fetch Data For Provides
    provides_data: [],
    provide_data_loading: true,
    provide_data_cond_text: false,
    provided_data_headers: [],

    warehouse_selecting_rows: [], // Selected Warehouses Rows
    /*
      After Creating New STF
    */
    msg_cond: false, // For Showing Toast After Creating New STF,
    after_created: false, // After Creating New STF, this will provide to cleaning order_list
  }),

  getters: {
    GETALLSTF: (state) => state.all_stf,
    GETALLSTFHEADERS: (state) => state.all_stf_headers,
    GETSELECTINGROWS: (state) => state.warehouse_selecting_rows,
    GETFIELDSNAME: (state) => state.fields,
    GETWAREHOUSEDATA: (state) => state.warehouse_data,
    GETWAREHOUSEHEADERS: (state) => state.warehouse_headers,
  },
  actions: {
    // Create STF
    async createSTF(data) {
      try {
        await axios
          .post(`${import.meta.env.VITE_API}/stf/createstf`, data)
          .then((respond) => {
            return respond;
          });
      } catch (err) {
        return err;
      }
    },

    // Fetch All User STF -> Checked
    async fetchUserSTFAll(user) {
      this.all_stf_loading = true;
      if (user?.id) {
        try {
          // await axios.get(`${import.meta.env.VITE_API}/stf/getuserstfall/${user.id}`)
          await axios
            .get(`${import.meta.env.VITE_API}/stf/getuserstfall/${user.id}`)
            .then((respond) => {
              if(respond.data.length !== 0){
                this.all_stf = respond.data;
                this.all_stf_loading = false;
                this.all_stf_cond_text = false;
              }
              else{
                this.all_stf_loading = false;
                this.all_stf_cond_text = true;
              }
            })
            .catch((err) => {
              console.log("Fetch User Catch Error : ", err);
            });
        } catch (err) {
          console.log("Fetch User STF Error : ", err);
          return err;
        }
      }
    },

    // Get Filtered Data For User STF
    async getFilteredData(filtered_object) {
      this.all_stf_loading = true;
      const queries = this.createUrlQuery(filtered_object);
      try {
        await axios
        .get(
          // `${import.meta.env.VITE_API}/stf/filter${queries}`
          `${import.meta.env.VITE_API}/common/filterstf${queries}`
          )
          .then((respond) => {
            if(respond.data.length !== 0){
              this.all_stf = respond.data;
              this.all_stf_loading = false;
              this.all_stf_cond_text = false;
            }
            else{
              this.all_stf_loading = false;
              this.all_stf_cond_text = true;
            }
          })
          .catch((err) => {
            console.log("Error Is : ", err);
          });
      } catch (err) {
        console.log("Get Filtered Data Error : ", err);
      }
    },

    // Fetch All User STF Headers
    async getHeaders() {
      if (this.all_stf?.length > 1) {
        // Add Header To Header List
        for (let [key, value] of Object.entries(this?.all_stf[0])) {
          // Handle If Header name contain id or Id
          const last_two_digits = key.slice(key.length - 2, key.length);
          if (
            key !== "id" &&
            last_two_digits !== "id" &&
            last_two_digits !== "Id"
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
            this.all_stf_headers.push(header_cond);
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
        }
      }
    },

    // Get Fields Name
    async fetchFieldsNames(ProjectModelId) {
      // Temporary Value
      if (ProjectModelId) {
        try {
          await axios
            .get(
              `${import.meta.env.VITE_API}/common/fetchfields/${ProjectModelId}`
            )
            .then((respond) => {
              this.fields = respond.data;
            })
            .catch((err) => {
              console.log("Error Is : ", err);
            });
        } catch (err) {
          console.log("fetch Field Names Error : ", err);
        }
      }
    },

    // Fetch Warehouse Data
    async fetchWarehouseData(user) {
      if (user?.id) {
        this.warehouse_data_loading = true;
        try {
          await axios
            .get(`${import.meta.env.VITE_API}/stf/warehouse/${user.id}`)
            .then((respond) => {
              if(respond.data?.length!==0){
                this.warehouse_data = respond.data;
                this.warehouse_data_loading = false;
                this.warehouse_data_cond_text = false;
              }else{
                this.warehouse_data_loading = false;
                this.warehouse_data_cond_text = true;
              }
            })
            .catch((err) => {
              console.log("Fetch User Catch Error : ", err);
            });
        } catch (err) {
          console.log("Fetch User STF Error : ", err);
          return err;
        }
      }
    },

    // Get Filtered Data For User Warehouse
    async getFilteredWarehouseData(filtered_object) {
      this.warehouse_data_loading = true;
      const queries = this.createUrlQuery(filtered_object);
      try {
        await axios
          .get(
            `
                ${import.meta.env.VITE_API}/common/filterwarehouse${queries}
            `
          )
          .then((respond) => {
            if(respond.data?.length!==0){
              this.warehouse_data = respond.data;
              this.warehouse_data_loading = false;
              this.warehouse_data_cond_text = false;
            }else{
              this.warehouse_data_loading = false;
              this.warehouse_data_cond_text = true;
            }
          })
          .catch((err) => {
            console.log("Error Is : ", err);
          });
      } catch (err) {
        console.log("Get Filtered Data Error : ", err);
      }
    },

    // Fetch All User STF Headers
    async getWarehouseHeaders() {
      if (this.warehouse_data?.length > 1) {
        // Add Header To Header List
        for (let [key, value] of Object.entries(this?.warehouse_data[0])) {
          // Handle If Header name contain id or Id
          const last_two_digits = key.slice(key.length - 2, key.length);
          if (
            key !== "id" &&
            last_two_digits !== "id" &&
            last_two_digits !== "Id"
          ) {
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

    // Fetch Provided Data and show in Provided Section
    async fetchProvidedData(user) {
      await axios
      .get(`${import.meta.env.VITE_API}/stf/provided/${user.departmentId}`)
      .then((respond) => {
        if(respond.data?.length!==0){
          this.provides_data = respond.data;
          this.provide_data_loading = false;
          this.provide_data_cond_text = false;
        }else{
          this.provide_data_loading = false;
          this.provide_data_cond_text = true;
        }
        })
        .catch((err) => {
          console.log("Provied Items Error : ", err);
        });
    },

    // Get Filtered Data For Provided Section
    async getFilteredDataProvided(filtered_object) {
      const queries = this.createUrlQuery(filtered_object);
      try {
        await axios
          .get(
            `${import.meta.env.VITE_API}/common/filterprovided${queries}`
          )
          .then((respond) => {
            if(respond.data?.length!==0){
              this.provides_data = respond.data;
              this.provide_data_loading = false;
              this.provide_data_cond_text = false;
            }else{
              this.provide_data_loading = false;
              this.provide_data_cond_text = true;
            }
          })
          .catch((err) => {
            console.log("Error Is : ", err);
          });
      } catch (err) {
        console.log("Get Filtered Data Error : ", err);
      }
    },

    // Get Provided Data Headers
    async getProvidedDataHeaders() {
      if (this.provides_data?.length) {
        for (let [key, value] of Object.entries(this.provides_data[0])) {
          if (key !== "id") {
            let header_cond = {};
            let val = key.charAt(0).toUpperCase() + key.slice(1);
            val = val.split("_").join(" ");
            if (
              key === "sm_num" ||
              key === "provided_date" ||
              key === "material_name" ||
              key === "amount" ||
              key === "unit" ||
              key === "serial_no" ||
              key === "unique_id" ||
              key === "deliver_to" || 
              key === "card_number"  
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
  },
});

export default STFStore;

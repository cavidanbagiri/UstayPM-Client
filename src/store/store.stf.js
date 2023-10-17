
import { defineStore } from 'pinia';
import axios from 'axios';

axios.defaults.withCredentials = true;

const STFStore = defineStore("STFStore",{

  state: () => ({
    tab_num : 0, // Create Listening FOr Changing STF Page Menu
    all_stf : null, // Fetch All User STF 
    all_stf_headers : [], // Get All fetching Data Headers
    selecting_rows : [], // Selecting Rows Will Ad To This Array
    order_list : [], // During Create New STF, The Rows will add inside of this list for checking
    fields: [], // Fecth ALl Field accroding to project, and show when new stf creating
    /*
      After Creating New STF
    */
    creating_mtf_toast: false, // For Showing Toast After Creating New STF,
    after_created: false, // After Creating New STF, this will provide to cleaning order_list
    
  }),

  getters: {
    GETALLSTF: (state) => state.all_stf,
    GETALLSTFHEADERS: (state) => state.all_stf_headers,
    GETSELECTINGROWS: (state) => state.selecting_rows,
    GETFIELDSNAME: (state) => state.fields,
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

    // Get Fields Name
    async fetchFieldsNames(ProjectModelId) {
      // Temporary Value
      ProjectModelId = 1;
      try {
        await axios
          .get(`${import.meta.env.VITE_API}/admin/fieldnames/${ProjectModelId}`)
          .then((respond) => {
            this.fields = respond.data;
          })
          .catch((err) => {
            console.log("Error Is : ", err);
          });
      } catch (err) {
        console.log("fetch Field Names Error : ", err);
      }
    },

    // Fetch All User STF
    async fetchUserSTFAll(user){
      if( user?.id) {
        try{
          await axios.get(`${import.meta.env.VITE_API}/stf/getuserstfall/${user.id}`)
          .then((respond)=>{
            this.all_stf = respond.data;
            console.log('stf is : ', this.all_stf);
            console.log('stf zero is : ', this.all_stf[0]);
          })
          .catch((err)=>{
            console.log('Fetch User Catch Error : ',err);
          })
  
        }catch(err){
          console.log('Fetch User STF Error : ', err);
          return err;
        } 
      }
    },
    // Fetch All User STF Headers
    async getHeaders() {
      if (this.all_stf?.length>1) {
        // Add Header To Header List
        console.log('header is : ',this?.all_stf);
        for (let [key, value] of Object.entries(this?.all_stf[0])) {
          // Handle If Header name contain id or Id
          const last_two_digits = key.slice(key.length - 2, key.length );
          if (key !== "id" && last_two_digits !== 'id' && last_two_digits !=='Id' ) {
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
              key === "material_unit" ||
              key === "material_amount" ||
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

     // Get Filtered Data                                       
     async getFilteredData(filtered_object) {
      const queries = this.createUrlQuery(filtered_object);
      try {
        await axios
          .get(
            `
                ${import.meta.env.VITE_API}/stf/filter${queries}
            `
          )
          .then((respond) => {
            this.all_stf = respond.data; 
            return respond;
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

export default STFStore;
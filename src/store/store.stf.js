
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
      // console.log('user id is : ',user_id);
      if( user?.id) {
        try{
          axios.get(`${import.meta.env.VITE_API}/stf/getuserstfall/${user.id}`)
          .then((respond)=>{
            this.all_stf = respond.data;
            // this.getHeaders();
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
      if (this.all_stf?.length) {
        // Add Header To Header List
        for (let [key, value] of Object.entries(this?.all_stf[0])) {
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

export default STFStore;
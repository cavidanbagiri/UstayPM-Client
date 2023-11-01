
import { defineStore } from "pinia";
import axios from 'axios';

axios.defaults.withCredentials = true;

const IndexStore = defineStore('IndexStore',{

    state : () => ({

        // Common Design
        canvas_toggle : false,
        user_teleport : false,

        // Table Row Inform
        row_inform_condition : false,
        row_detail_data : null,
    }),

    getters:{
        GETCANVASTOGGLE : (state) => state.canvas_toggle,
        GETUSERTELEPORT : (state) => state.user_teleport,
    },

    actions:{
        TOGGLECANVAS () {
            this.canvas_toggle = !this.canvas_toggle;
        },
        TOGGLEUSERTELEPORT () { 
            this.user_teleport = !this.user_teleport;
        },
        // Get Row Information
        async getRowDetails (stfid){
          await axios.get(`
            http://localhost:3000/order/getrowdetails/${stfid}
          `).then((respond)=>{
            this.row_detail_data = respond.data;
        }).catch((err)=>{
            console.log('row detail respond Error : ',err);
          })
        },
    }

})

export default IndexStore

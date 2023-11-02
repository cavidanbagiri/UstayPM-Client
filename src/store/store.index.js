
import { defineStore } from "pinia";
import axios from 'axios';

axios.defaults.withCredentials = true;

const IndexStore = defineStore('IndexStore',{

    state : () => ({

        // Common Design
        canvas_toggle : false,

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
        // Get Row Information
        async fetchSTFRowInform (stfid){
            console.log('stf id is : ',stfid);
          await axios.get(`
            ${import.meta.env.VITE_API}/common/fetchstfrowinform/${stfid}
          `).then((respond)=>{
            this.row_detail_data = respond.data;
            console.log('Row Detail Data : \n',this.row_detail_data);
        }).catch((err)=>{
            console.log('row detail respond Error : ',err);
          })
        },
    }

})

export default IndexStore


import { defineStore } from 'pinia';


const STFStore = defineStore("STFStore",{

  state: () => ({
    tab_num : 0
  }),

  getters: {
    GETTABNUM: (state) => state.tab_num
  },
  actions: {
    
  }

})

export default STFStore;
import { defineStore } from "pinia";

import axios from "axios";

axios.defaults.withCredentials = true;

const MessageStore = defineStore("MessageStore", {
  state: () => ({
    toggle_message: false,
    toggle_user: false,
    // Fetch All Users
    users: [],
    // Selected User
    selected_user: null,
    // Selected User Fetching Messages
    selected_user_fetch_messages: null,
    // Unread Messages
    unread_messages : null,
  }),
  getters: {},
  actions: {
    // Fetch All Users
    async fetchUsers() {
      try {
        await axios
          .get(`${import.meta.env.VITE_API}/common/fetchallusers`)
          .then((respond) => {
            this.users = respond.data;
          });
      } catch (err) {
        console.log("Message Section fetching Users Error : ", err);
      }
    },

    // Fetch Messages GET Method
    async fetchMessage(current_id, selected_id) {
      try {
        if (current_id) {
          await axios
            .get(
              `${
                import.meta.env.VITE_API
              }/common/fetchmessage/${current_id}?selected_id=${selected_id}`
            )
            .then((respond) => {
              this.selected_user_fetch_messages = respond.data;
            });
        }
      } catch (err) {
        console.log("Fetch Message Error : ", err);
      }
    },

    // Send Message POST Method
    async sendMessage(message_data) {
      try {
        if (message_data.current_id) {
          await axios
            .post(
              `${import.meta.env.VITE_API}/common/sendmessage`,
              message_data
            )
            .then((respond) => {});
        }
      } catch (err) {
        console.log("Send Message Error : ",err);
      }
    },
  
    // Fetch Unread Messages
    async fetchUnreadMessages(user_id){
      if(user_id){
        try{
          await axios
            .get(
              `${import.meta.env.VITE_API}/common/fetchunreadmessages/${user_id}`,
            )
            .then((respond) => {
              this.unread_messages = respond.data;
              console.log('Unread Messages : ', this.unread_messages);
            });
        }
        catch(err){
          console.log('Fetch Unread Message Error : ', err);
        }
      }
    }

  },

});

export default MessageStore;

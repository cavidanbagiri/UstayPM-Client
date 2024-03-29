import { defineStore } from "pinia";

import axios from "axios";

axios.defaults.withCredentials = true;

const MessageStore = defineStore("MessageStore", {
  state: () => ({
    toggle_message: false,
    toggle_user: true,
    // Selected User
    selected_user: null,
    // Selected User Fetching Messages
    selected_user_fetch_messages: null,
    // Unread Messages
    unread_messages : null,
    // Fetch Unread Messages and Users
    unread_messages_and_users: [],
    filtering_unread_messages_and_users: [],
  }),
  getters: {},
  actions: {

    // Fetch Unread Messages, This function will use inside of Navbar Notification
    async fetchUnreadMessages(user_id){
      if(user_id){
        try{
          await axios
            .get(
              `${import.meta.env.VITE_API}api/common/fetchunreadmessages/${user_id}`,
            )
            .then((respond) => {
              this.unread_messages = respond.data;

            });
        }
        catch(err){
          console.log('Fetch Unread Message Error : ', err);
        }
      }
    },

    // Fetch Users and Unread Messages
    async fetchUnreadMessagesAndUsers(user_id){
      console.log('unread messages and users are working');
      if(user_id){
        try{
          await axios
            .get(
              `${import.meta.env.VITE_API}api/common/fetchunreadmessagesandusers/${user_id}`,
            )
            .then((respond) => {
              this.unread_messages_and_users = respond.data;
              console.log('come : ', this.unread_messages_and_users);
            });
        }
        catch(err){
          console.log('fetchUnreadMessagesAndUsers error : ',err);
        }
      }
    },

    // Set reading True if user selected 
    async setTrueReadingMessages(obj){
      if(obj.current_id){
        try{
          await axios.post(
            `${import.meta.env.VITE_API}api/common/settruemessages`, obj
          )
        }
        catch(err){
          console.log('Set True doesnt work correctly');
        }
      }

    },

    // Fetch Messages GET Method
    async fetchMessage(current_id, selected_id) {
      try {
        if (current_id) {
          await axios
            .get(
              `${import.meta.env.VITE_API}api/common/fetchmessage/${current_id}?selected_id=${selected_id}`
            )
            .then((respond) => {
              this.selected_user_fetch_messages = respond.data.reverse();
              console.log('selected user fetch messages : ', this.selected_user_fetch_messages)
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
              `${import.meta.env.VITE_API}api/common/sendmessage`,
              message_data
            )
            .then((respond) => {});
        }
      } catch (err) {
        console.log("Send Message Error : ",err);
      }
    },
  
    

  },

});

export default MessageStore;

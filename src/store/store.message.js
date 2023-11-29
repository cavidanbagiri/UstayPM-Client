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
            console.log("messages users is : ", this.users);
          });
      } catch (err) {
        console.log("Message Section fetching Users Error : ", err);
      }
    },

    // Fetch Messages GET Method
    async fetchMessage(current_id, selected_id) {
      console.log("current id: ", current_id);
      console.log("selected id: ", selected_id);
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
    async sendMessage(current_id, sender_id, message_text) {
      const message_inform = {
        current_id: current_id,
        sender_id: sender_id,
        message_text: message_text,
      };
      try {
        if (current_id) {
          await axios
            .post(
              `${import.meta.env.VITE_API}/common/sendmessage`,
              message_inform
            )
            .then((respond) => {});
        }
      } catch (err) {
        console.log("Send Message Error");
      }
    },
    
  },
});

export default MessageStore;

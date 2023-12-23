
import { ref, inject } from 'vue';

import UserStore from '../store/store.user_store';
import MessageStore from '../store/store.message';

const user_store = UserStore();
const message_store = MessageStore();


const socket = inject('socket');

const selectUser = async (user) => {
  if (user_store.user) {
      // message_store.selected_user = user;
      // await message_store.fetchMessage(user_store.user?.id, message_store.selected_user.id);
      // if (message_store.selected_user_fetch_messages.length) {
      //     if(!message_store.selected_user?.roomid){
      //         message_store.selected_user.roomid = message_store.selected_user_fetch_messages[0]?.roomId;
      //     }
      //     socket.emit('join_room', user_store.user.id, user.id, message_store.selected_user_fetch_messages[0]?.roomId);
      //     await message_store.setTrueReadingMessages({current_id: user_store.user?.id, room_id: message_store.selected_user_fetch_messages[0]?.roomId});
      //     message_store.selected_user.count = 0;
      // }
      console.log('hello world');
  }
}

export default selectUser;

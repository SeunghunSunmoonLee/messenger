import { combineReducers } from 'redux'
import uuid from 'uuid/v5'
export const initialState = {
  currentchatID: '',
  currentUser: {
    id: 12345,
    name: 'seunghun lee'
  },
  chats: [
    {
      id: 10000,
      users: [12345],
      messages: [
      ],
      savedMessage: ''
    },    
    {
      id: 10001,
      users: [12345, 12346],
      messages: [
      ],
      savedMessage: ''
    },
    {
      id: 10002,
      users: [12345, 12347],
      messages: [],
      savedMessage: ''
    },
    {
      id: 10003,
      users: [12345, 12348],
      messages: [],
      savedMessage: ''
    },
    {
      id: 10004,
      users: [12345, 12347, 12348],
      messages: [],
      savedMessage: ''
    },    
  ],
  users: [
    {
      id: 12345,
      name: 'seunghun lee',
    },
    {
      id: 12346,
      name: 'jj park',
    },
    {
      id: 12347,
      name: 'abraham lincoln',
    },   
    {
      id: 12348,
      name: 'donald trump',
    },          
  ]
}
function chat(state = initialState, action) {
  let currentChat
  let chatIndex
  let updatedChat
  let chats
  switch (action.type) {
    case 'OPEN_CHAT':
      // currentChat = state.chats.find(chat => {
      //   // if(chat.users.length === 1) {
      //   //   return chat.users[0] === action.chat.id
      //   // }
      //   return 
      // })
      // const currentChatID = currentChat.id
      return {
        ...state,
        currentChatID: action.chat.id
      }
      case 'CHANGE_SAVED_MESSAGE':
      // currentChat = state.chats.find(chat => {
      //   return chat.id === state.currentChatID
      // })
      chatIndex = state.chats.findIndex(chat => chat.id === state.currentChatID)

      updatedChat = {
        ...currentChat,
        savedMessage: action.content
      }
      chats = [...state.chats.slice(0, chatIndex), updatedChat, ...state.chats.slice(chatIndex+1, state.chats.length)]

      return {
        ...state,
        chats
      }      
    case 'SEND_MESSAGE':
      const now = new Date();
      currentChat = state.chats.find(chat => chat.id === state.currentChatID)

      chatIndex = state.chats.findIndex(chat => chat.id === state.currentChatID)

      updatedChat = {
        ...currentChat,
        messages: [...currentChat.messages, {
          time: now.toLocaleString(),
          user: state.currentUser,
          content: action.message
        }]
      }
      chats = [...state.chats.slice(0, chatIndex), updatedChat, ...state.chats.slice(chatIndex+1, state.chats.length)]
      return {
        ...state,
        chats
      }
    default:
      return state
  }
}

const rootReducer = combineReducers({
  chat,
})

export default rootReducer
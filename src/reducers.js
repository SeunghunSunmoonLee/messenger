import { combineReducers } from 'redux'
import uuid from 'uuid/v5'
export const initialState = {
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
    },    
    {
      id: 10001,
      users: [12345, 12346],
      messages: [
      ],
    },
    {
      id: 10002,
      users: [12345, 12347],
      messages: [],
    },
    {
      id: 10003,
      users: [12345, 12348],
      messages: [],
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
  switch (action.type) {
    case 'OPEN_CHAT':
      currentChat = state.chats.find(chat => {
        if(chat.users.length === 1) {
          return chat.users[0] === action.user.id
        }
        return chat.users.includes(action.user.id)
      })
      const currentChatID = currentChat.id
      return {
        ...state,
        currentChatID
      }
    case 'SEND_MESSAGE':
      const now = new Date();
      currentChat = state.chats.find(chat => chat.id === state.currentChatID)

      const chatIndex = state.chats.findIndex(chat => chat.id === state.currentChatID)

      const updatedChat = {
        ...currentChat,
        messages: [...currentChat.messages, {
          time: now.toLocaleString(),
          user: state.currentUser,
          content: action.message
        }]
      }
      const chats = [...state.chats.slice(0, chatIndex), updatedChat, ...state.chats.slice(chatIndex+1, state.chats.length)]
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
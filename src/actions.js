export function openChat(chat) {
  return {
    type: 'OPEN_CHAT',
    chat
  }
}

export function sendMessage(message) {
  return {
    type: 'SEND_MESSAGE',
    message
  }
}
export function changeSavedMessage(content) {
  return {
    type: 'CHANGE_SAVED_MESSAGE',
    content
  }
}
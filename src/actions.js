export function openChat(user) {
  return {
    type: 'OPEN_CHAT',
    user
  }
}
export function sendMessage(message) {
  return {
    type: 'SEND_MESSAGE',
    message
  }
}
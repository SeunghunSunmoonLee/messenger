import React, { Fragment, Component } from 'react';
import {Row, Col} from 'antd'
import { connect } from 'react-redux'

class Chat extends Component {
  render() {
    const {chats, currentChatID} = this.props
    const currentChat = chats.find(chat => chat.id === currentChatID)
    const messages = currentChat ? currentChat.messages : undefined

    const messagesList = !messages ? <Fragment></Fragment> : messages.map(message => {
      return (
        <Fragment>
          <Row>
            <Col>
              {message.user.name} {message.time}
            </Col>
          </Row>
          <Row>
            <Col>
              {message.content}
            </Col>
          </Row>
        </Fragment>
      )
    })
    if(!messages && currentChatID) {
      return (
        <h1>Loading</h1>
      )
    }
    if(!currentChatID) {
      return (
        <h1>Click the User to start the chat</h1>
      )
    }
    return (
      <Fragment>
        {messagesList}
      </Fragment>
    );
  }
}
const mapStateToProps = (state /*, ownProps*/) => {
  return {
    currentChatID: state.chat.currentChatID,
    chats: state.chat.chats
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Chat)

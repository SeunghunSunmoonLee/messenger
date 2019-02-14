import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux'

import {sendMessage} from './actions'
class Input extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // message: {content: ''},
    }
    this.makeMessage = this.makeMessage.bind(this)
    this.sendMessage = this.sendMessage.bind(this)
    this.handleKeyPress = this.handleKeyPress.bind(this)
    this.now = new Date();
  }
  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.sendMessage()
    }
  }
  makeMessage(e) {
    this.props.changeSavedMessage(e.target.value)
    // this.setState({

    // })
    // this.setState({
    //   message: {
    //     content: e.target.value,
    //   }
    // })
  }
  sendMessage(savedMessage) {
    this.props.sendMessage(savedMessage)
    // this.setState((state, props) => ({
    //   message: {...state.message, content: ''}
    // }))
  }
  render() {
    const {currentChatID, chats} = this.props
    const currentChat = chats.find(chat => chat.id === currentChatID)
    console.log("==currentChat", currentChat)
    const {savedMessage} = currentChat

    return (
      <Fragment>
        <div style={{width: '100%'}}>
          <input type="text" style={{width: '80%'}} value={savedMessage} onChange={(e) => this.makeMessage(savedMessage)} onKeyPress={this.handleKeyPress} />
          <button style={{width: '20%'}} onClick={this.sendMessage}>Send</button>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = (state /*, ownProps*/) => {
  return {
    chats: state.chat.chats,
    currentChatID: state.chat.currentChatID,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    sendMessage: (message) => {
      dispatch(sendMessage(message))
    }
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Input)


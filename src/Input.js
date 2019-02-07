import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux'

import {sendMessage} from './actions'
class Input extends Component {
  constructor(props) {
    super(props)
    this.state = {
      message: {},
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
    this.setState({
      message: {
        content: e.target.value,
      }
    })
  }
  sendMessage() {
    this.props.sendMessage(this.state.message.content)
    this.setState((state, props) => ({
      message: {...state.message, content: ''}
    }))
  }
  render() {
    return (
      <Fragment>
        <div style={{width: '100%'}}>
          <input type="text" style={{width: '80%'}} value={this.state.message.content} onChange={this.makeMessage} onKeyPress={this.handleKeyPress} />
          <button style={{width: '20%'}} onClick={this.sendMessage}>Send</button>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = (state /*, ownProps*/) => {
  return {
    
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


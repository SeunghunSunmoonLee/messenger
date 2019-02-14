import React, { Fragment, Component } from 'react';
import {Avatar, Row, Col} from 'antd'
import { connect } from 'react-redux'
import { openChat } from './actions'
import './Users.css'

export class ChatList extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  openChat(chat) {
    this.props.openChat(chat)
    // this.setState({currentChatID: chat.id})
  }
  render() {
    const {currentChatID, users, chats} = this.props
    console.log("===chats", chats)
    const findUser = (userID) => {
      const userName = users.find(user => user.id === userID)
      return (
        <div>{userName.name}</div>
      )
    }
    const chatList = chats.map(chat => {
      return (
        <Row
          key={chat.id}
          style={{cursor:'pointer', padding: '15px', backgroundColor: ''}} 
          onClick={(e) => this.openChat(chat)}
          className={`user ${currentChatID === chat.id ? 'active' : ''} `}        
        >
          <Avatar icon="user" />{chat.users.map(userID => findUser(userID))}
        </Row>
      )
    })
    // const userList = users.map(user => {
    //   return (
    //     <Row 
    //       key={user.id}
    //       style={{cursor:'pointer', padding: '15px', backgroundColor: ''}} 
    //       onClick={(e) => this.openChat(user)}
    //       className={`user ${this.state.currentChatUserID === user.id ? 'active' : ''} `}
    //     >
    //       <Avatar icon="user" />{user.name}
    //     </Row>
    //   )
    // })
    if(!chats) {
      return (
        <h1>Loading</h1>
      )
    }
    return (
      <Fragment>
        <h1 style={{textAlign: 'center'}}>Chats</h1>
        {chatList}
      </Fragment>
    );
  }
}

const mapStateToProps = (state /*, ownProps*/) => {
  return {
    chats: state.chat.chats,
    users: state.chat.users,
    currentChatID: state.chat.currentChatID
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    openChat: (chat) => {
      dispatch(openChat(chat))
    }
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChatList)

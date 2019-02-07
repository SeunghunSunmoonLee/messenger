import React, { Fragment, Component } from 'react';
import {Avatar, Row, Col} from 'antd'
import { connect } from 'react-redux'
import { openChat } from './actions'
import './Users.css'

export class Users extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  openChat(user) {
    this.props.openChat(user)
    this.setState({currentChatUserID: user.id})
  }
  render() {
    const {users} = this.props
    const userList = users.map(user => {
      return (
        <Row 
          key={user.id}
          style={{cursor:'pointer', padding: '15px', backgroundColor: ''}} 
          onClick={(e) => this.openChat(user)}
          className={`user ${this.state.currentChatUserID === user.id ? 'active' : ''} `}
        >
          <Avatar icon="user" />{user.name}
        </Row>
      )
    })
    if(!users) {
      return (
        <h1>Loading</h1>
      )
    }
    return (
      <Fragment>
        <h1 style={{textAlign: 'center'}}>Users</h1>
        {userList}
      </Fragment>
    );
  }
}

const mapStateToProps = (state /*, ownProps*/) => {
  return {
    users: state.chat.users
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    openChat: (user) => {
      dispatch(openChat(user))
    }
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Users)

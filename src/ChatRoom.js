import React, { Fragment, Component } from 'react';
import ChatList from './ChatList';
import Chat from './Chat';
import Input from './Input';
import {Row, Col} from 'antd'
import { connect } from 'react-redux'


class ChatRoom extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <Fragment>
        <h1 style={{textAlign: 'center'}}>Messenger</h1>
        <Row>
          <Col span={4}>
            <ChatList />
          </Col>
          <Col span={20}>
            <Row style={{height: '90vh'}}>
              <Chat />
            </Row>
            <Row style={{height: '10vh'}}>
              <Input />
            </Row>
          </Col>
        </Row>
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

  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChatRoom)


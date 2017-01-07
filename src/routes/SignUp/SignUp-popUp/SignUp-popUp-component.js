/**
 * Created by luqianyu on 2017/1/6.
 */
import React from 'react'
import { Popover, Tooltip, Button, Modal, OverlayTrigger } from 'react-bootstrap'
import $ from 'jquery'

const STATE_SENDING = "SENDING"
const STATE_SUCCESS = "SUCCESS"
const STATE_FAIL = "FAIL"

const SignUpPopUp = React.createClass({
  getInitialState() {
    return {
      showModal: false,
      sendState: STATE_SENDING
    };
  },

  close() {
    this.setState({ showModal: false });
  },

  open() {
    this.setState({ showModal: true });
  },

  signUp() {
    const that = this;
    this.setState({ showModal: true });
    $.ajax({
      url: './signUp.json',
      method: 'POST',
      data: {
        username: that.props.email,
        password: that.props.password
      }
    }).done(function () {
      that.setState({ sendState: STATE_SUCCESS})
    }).fail(function () {
      that.setState({ sendState: STATE_FAIL})
    })



  },

  header(sendState) {
    switch ( sendState ) {
      case STATE_SENDING:
        return (
          <Modal.Header>
            <Modal.Title>注册确认中.....</Modal.Title>
          </Modal.Header>
        )
      case STATE_SUCCESS:
        return (
          <Modal.Header>
            <Modal.Title>注册成功</Modal.Title>
          </Modal.Header>
        )
      case STATE_FAIL:
        return (
          <Modal.Header>
            <Modal.Title>注册失败</Modal.Title>
          </Modal.Header>
        )
    }
  },

  render() {
    const nothing = "i am no thing";
    return (
      <div>
        <button className="btn btn-primary pull-right" disabled={this.props.disable} onClick={this.signUp}>注册</button>

        <Modal show={this.state.showModal} onHide={this.open}>

          {this.header(this.state.sendState)}

          <Modal.Body>
            <h4>Text in a modal</h4>
            <hr />
            <h4>Overflowing text to show scroll behavior</h4>
            <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
          </Modal.Body>

          <Modal.Footer>
            <Button onClick={this.close}>Close</Button>
          </Modal.Footer>

        </Modal>
      </div>
    );
  }
});


export default SignUpPopUp

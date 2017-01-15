/**
 * Created by luqianyu on 2017/1/5.
 */
import React from 'react'
import { Popover, Tooltip, Button, Modal } from 'react-bootstrap'



const WechatLogin = React.createClass({
  componentDidMount() {

    !function(a,b){function d(a){var e,c=b.createElement("iframe"),d="https://open.weixin.qq.com/connect/qrconnect?appid="+a.appid+"&scope="+a.scope+"&redirect_uri="+a.redirect_uri+"&state="+a.state+"&login_type=jssdk";d+=a.style?"&style="+a.style:"",d+=a.href?"&href="+a.href:"",c.src=d,c.frameBorder="0",c.allowTransparency="true",c.scrolling="no",c.width="300px",c.height="400px",e=b.getElementById(a.id),e.innerHTML=" ",e.appendChild(c)}a.WxLogin=d}(window,document);

  },
  getInitialState () {
    return { showModal: false }
  },

  close () {
    this.setState({ showModal: false })
  },

  open () {
    this.setState({ showModal: true })
  },

  WxLogin() {
    this.setState({ showModal: true })

    const body = document.getElementsByTagName('body')[0]
    function createWxDiv  () {

      setTimeout(function() {
        var obj = new WxLogin({
          id:"login_container",
          appid: "wx50a231aefaff3222",
          scope: "snsapi_login",
          redirect_uri: "http%3A%2F%2F120.25.207.237%2Fapi%2Fproject%2Fuser%2Fwechat",
          state: "",
          style: "",
          href: ""
        }, 1000);
      })
    }
    body.addEventListener("cat",createWxDiv)
    var event = new CustomEvent("cat", {
      detail: {
        hazcheeseburger: true
      }
    });
    body.dispatchEvent(event);
  },

  render () {
    const popover = (
      <Popover id='modal-popover' title='popover'>
        very popover. such engagement
      </Popover>
    )
    const tooltip = (
      <Tooltip id='modal-tooltip'>
        wow.
      </Tooltip>
    )

    return (
      <span>

        <button onClick={this.WxLogin}>We chat</button>

        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>微信登录</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div id="login_container" onLoad={function(){ alert("fuck you")}}> </div>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close}>Close</Button>
          </Modal.Footer>
        </Modal>
      </span>
    )
  }
})

export default WechatLogin

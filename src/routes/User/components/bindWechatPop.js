/**
 * Created by luqianyu on 2017/1/5.
 */
import React from 'react'
import './popUpModal.css'

const WechatLogin = React.createClass({
  componentDidMount() {
    // 在组件加载的时候,加载微信登录框JS引用文件
    !function(a,b){function d(a){var e,c=b.createElement("iframe"),d="https://open.weixin.qq.com/connect/qrconnect?appid="+a.appid+"&scope="+a.scope+"&redirect_uri="+a.redirect_uri+"&state="+a.state+"&login_type=jssdk";d+=a.style?"&style="+a.style:"",d+=a.href?"&href="+a.href:"",c.src=d,c.frameBorder="0",c.allowTransparency="true",c.scrolling="no",c.width="300px",c.height="400px",e=b.getElementById(a.id),e.innerHTML=" ",e.appendChild(c)}a.WxLogin=d}(window,document);
  },
  getInitialState () {
    return {
      showModal: false
    }
  },
  modelDisplay (showModal) {
    if(showModal) {
      return "block"
    } else {
      return "none"
    }
  },
  WxLogin() {
    this.setState({showModal: true});
    // 因为在点击button之后react div的渲染需要一点时间,在那之前执行加载微信的登录框是找不到 login_container 的div框框的
    // 所以这里采用setTimeout的小hack来延迟执行,这样就可以正确的显示微信扫码登录二维码了
    setTimeout(function() {
      var obj = new WxLogin({
        id:"login_container",
        appid: "wx50a231aefaff3222",
        scope: "snsapi_login",
        redirect_uri: "http%3A%2F%2F120.25.207.237%2Fapi%2Fproject%2Fuser%2Fwechat%2FLogin",
        state: "",
        style: "",
        href: ""
      }, 1000);
    })
    
  },
  close() {
    this.setState({showModal: false});
  },
  render () {
    return (
      <div>
        <button type="button" onClick={this.WxLogin}  className="btn btn-primary">
          Launch demo modal
        </button>

        <div className="my-modal" style={{display: this.modelDisplay(this.state.showModal)}}>
          <div className="my-modal-dialog">
            my-modal-dialog
            <button onClick={this.close}> close</button>
            <div className="login_container">
            </div>
          </div>
        </div>

        <button type="button" onClick={this.WxLogin}  className="btn btn-primary">
          Launch demo modal
        </button>
      </div>
    )
  }
})

export default WechatLogin

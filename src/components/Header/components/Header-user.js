/**
 * Created by luqianyu on 2017/1/2.
 */
import React from 'react'
import { browserHistory } from 'react-router'
import $ from 'jquery'
import WechatLogin from './Login-wechat'

const User = React.createClass({
  componentDidMount () {
    const that = this
    // 初始化的时候向服务器检查session,判断是否已经登录
    $.ajax({
      url: '/api/project/signin',
      method: 'GET'
    }).done(function (data) {
      console.log(data)
      if (data !== 'sign first') {
        that.props.login(data)
      }
    })
  },
  btnLogin (e) {
    const that = this
    e.preventDefault()
    $.ajax({
      url: '/api/project/signin',
      method: 'POST',
      data: {
        username: that.refs.username.value,
        password: that.refs.password.value
      }
    }).done(function (data) {
      if (data === 'sign failed, name or password error') {
        alert('账号或者密码错误')
      } else {
        //that.props.login(that.refs.username.value)
        localStorage.userName = data[0].username;
        localStorage.wechat = data[0].wechat;
        localStorage.phone = data[0].phone;
        localStorage.isActive = data[0].isActive;

        that.props.login(data[0].username)
      }
    })
  },
  btnsignOut (e) {
    localStorage.clear()
    e.preventDefault()
    $.ajax({
      url: '/api/project/signout',
      method: 'GET'
    })
    this.props.signOut()
  },
  btnSignUp () {
    browserHistory.push('/signUp')
  },
  user (isLogin) {
    if (isLogin) {
      return (
        <div>
          <div> user: {this.props.user} </div>
          <button onClick={this.btnsignOut}>sign out</button>
        </div>
      )
    }
    return (
        <div>
          <input ref='username' type='text' placeholder='user' />
          <input ref='password' type='text' placeholder='password' />
          <button onClick={this.btnLogin}>login</button>
          <button onClick={this.btnSignUp}>sign up</button>
          <WechatLogin> </WechatLogin>
        </div>
    )
  },

  render () {
    const { isLogin, user } = this.props
    return (
      <div>
        <input ref='username' type='text' placeholder='user' />
        <input ref='password' type='text' placeholder='password' />
        <button onClick={this.btnLogin}>login</button>
        <button onClick={this.btnSignUp}>sign up</button>
        <WechatLogin> </WechatLogin>
      </div>
    )
  }
})

export default User

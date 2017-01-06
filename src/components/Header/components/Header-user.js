/**
 * Created by luqianyu on 2017/1/2.
 */
import React from 'react'
import { browserHistory } from 'react-router'
import $ from 'jquery'

const User = React.createClass({
  btnLogin (e) {
    e.preventDefault()
    this.props.login(this.refs.user.value)
  },
  btnsignOut (e) {
    e.preventDefault()
    this.props.signOut()
  },
  btnTest (e) {
    e.preventDefault()
    const obj = {
      msg: "ssss",
      sssdsd: [12,222]
    }
    $.ajax({
        url: '/test.json',
        type: 'POST',
        dataType: "json",
        data: {
          aaa: {
            msg: "sss",
            o: obj,
            asdasd: "sssss"
          }
        }
    })
  },
  btnSignUp (e) {
    browserHistory.push('/signUp')
  },
  user (isLogin, user) {
    if(isLogin) {
      return (
        <div>
          <div> user: {this.props.user} </div>
          <button onClick={this.btnsignOut}>sign out</button>
        </div>
      )
    }
    return (
      <div>
        <input ref='user' type='text' placeholder="user"/>
        <input ref='password' type='text' placeholder="password"/>
        <button onClick={this.btnLogin}>login</button>
        <button onClick={this.btnSignUp}>sign up</button>
      </div>
    )
  },
  render () {
    const { isLogin, user } = this.props
    return (
      <div>
        { this.user(isLogin, user) }
      </div>
    )
  }
})



export default User

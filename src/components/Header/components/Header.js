import React from 'react'
import { Link } from 'react-router'
import $ from 'jquery'
import WechatLogin from './Login-wechat'
import { browserHistory } from 'react-router'

export const Header = React.createClass({
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
  btnSignUp () {
    browserHistory.push('/signUp')
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
  btnSignOut (e) {
    localStorage.clear()
    e.preventDefault()
    $.ajax({
      url: '/api/project/signout',
      method: 'GET'
    })
    this.props.signOut()
  },
  user (isLogin) {
    if (isLogin) {
      return (
        <div>
          <div> user: {this.props.user} </div>
          <button onClick={this.btnSignOut}>sign out</button>
        </div>
      )
    }
    return (
      <li className='dropdown'>
        <a href='#'
           className='dropdown-toggle'
           data-toggle='dropdown' role='button'
           aria-haspopup='true'
           aria-expanded='false'>

          Login
          <span className='caret'> </span>
        </a>
        <ul className='dropdown-menu'>
          <div>
            <div>
              <input ref='username' type='text' placeholder='user' />
              <input ref='password' type='text' placeholder='password' />
              <button onClick={this.btnLogin}>login</button>
              <button onClick={this.btnSignUp}>sign up</button>
              <WechatLogin> </WechatLogin>
            </div>
          </div>
        </ul>
      </li>

    )
  },
  active(navName){
    if(navName === this.props.location.pathname) {
      return "active"
    } else return ""
  },
  render() {
    return (
      <nav className='navbar navbar-default'>
        <div className='container-fluid'>
          <div className='navbar-header'>
            <button type='button'
                    className='navbar-toggle collapsed'
                    data-toggle='collapse'
                    data-target='#bs-example-navbar-collapse-1'
                    aria-expanded='false'>
              <span className='sr-only'>Toggle navigation</span>
              <span className='icon-bar'> </span>
              <span className='icon-bar'> </span>
              <span className='icon-bar'> </span>
            </button>
            <Link className='navbar-brand' to='/'>Main</Link>
          </div>

          <div className='collapse navbar-collapse' id='bs-example-navbar-collapse-1'>
            <ul className='nav navbar-nav'>
              <li className={this.active("/about")}><Link to='/about'>ABOUT</Link></li>
              <li className={this.active("/counter")}><Link to='/counter'>counter</Link></li>
            </ul>
            <ul className='nav navbar-nav navbar-right'>
              {this.user(this.props.isLogin)}
            </ul>
          </div>
        </div>
      </nav>
      )
  }
})

export default Header

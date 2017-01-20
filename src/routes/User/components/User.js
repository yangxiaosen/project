/**
 * Created by luqianyu on 2017/1/16.
 */
import React from 'react'
import WechatPop from './bindWechatPop'


const UserManagement = React.createClass({
  bindBtn() {

  },
  wechatBind() {
    if(localStorage.wechat === undefined) {
      return  (
        <WechatPop/>
      )
    }
    if(localStorage.wechat === "") {
      return (
        <div className='input-group'>
          <span className='input-group-addon'>微信</span>
          <input type='text' className='form-control' disabled='true' placeholder='Wechat (未绑定)'/>
          <span className='input-group-btn'>
            <button className='btn btn-default' type='button'>关联账号</button>
          </span>
        </div>
      )
    } else {
      return (
        <div className='input-group'>
          <span className='input-group-addon'>微信</span>
          <input type='text' className='form-control' disabled='true' placeholder='Wechat (已绑定)'/>
          <span className='input-group-btn'>
          <button className='btn btn-default' type='button'>解除绑定</button>
        </span>
        </div>
      )
    }
  },
  render() {
    return (
      <div>
        {this.wechatBind()}
      </div>
    )
  }
})

export default UserManagement

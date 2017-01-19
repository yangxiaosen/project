/**
 * Created by luqianyu on 2017/1/16.
 */
import React from 'react'

const UserManagement = React.createClass({
  render() {
    return (
      <div className='input-group'>
        <span className='input-group-addon'>微信</span>
        <input type='text' className='form-control' disabled='true' placeholder='Wechat (未绑定)'/>
        <span className='input-group-btn'>
          <button className='btn btn-default' type='button'>关联账号</button>
        </span>
      </div>
    )
  }
})

export default UserManagement

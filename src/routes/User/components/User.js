/**
 * Created by luqianyu on 2017/1/16.
 */
import React from 'react'

const UserManagement = React.createClass({
  render() {
    return (
      <div style={{ margin: '0 auto' }} >
        <h2>Counter: {props.counter}</h2>
        <button className='btn btn-default' onClick={props.increment}>
          Increment
        </button>
        {' '}
        <button className='btn btn-default' onClick={props.doubleAsync}>
          Double (Async)
        </button>
      </div>
    )
  }
})

export default UserManagement

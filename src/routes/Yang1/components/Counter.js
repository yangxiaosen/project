//Yang1
import React from 'react'

export const Counter = (props) => (
  <div style={{ margin: '0 auto' }} >
    <h2>输入你想说的话:
    </h2>
    <input id="inputm" onChange={props.handlechange} style={{display:'block',marginBottom:'10px',width:'250px'}}/>
    <button className='btn btn-default' onClick={props.changeval}>
      闭嘴
    </button>
    <h2>我是机器人:
    </h2>
    <input value={props.yang1} style={{display:'block',marginBottom:'10px',marginTop:'10px',width:'250px'}}/>
  </div>
)

/*function handlechange(e){
  msg=e.target.value;
  console.log(msg);
}*/

Counter.propTypes = {
  handlechange  : React.PropTypes.func.isRequired,
  changeval   : React.PropTypes.func.isRequired,
  yang1  : React.PropTypes.string.isRequired
}

export default Counter

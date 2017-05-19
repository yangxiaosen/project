//Yang2
import React,{ Component } from 'react'

class Yang2 extends Component {
  constructor(props){
    super(props);
    this.state = {input:'杨晓森',
                  output:'你好哇'};
  }

  handlechange(e){
  var msg=e.target.value;
  console.log(msg);
  this.setState({input:msg,
                 output:'你好哇,'+msg});
  }
  render() {
  return(
  <div style={{ margin: '0 auto' }} >
    <h2>这是Yang2，你可以输入你的名字:
    </h2>
    <input id="inputm" onChange={this.handlechange.bind(this)} style={{display:'block',marginBottom:'10px',width:'250px'}}/>
    <h2>输出:
    </h2>
    <input value={this.state.output} style={{display:'block',marginBottom:'10px',marginTop:'10px',width:'250px'}}/>
  </div>
  );
  }
}


/*function handlechange(e){
  msg=e.target.value;
  console.log(msg);
}*/

/*Yang2.propTypes = {
  handlechange  : React.PropTypes.func.isRequired,
  changeval   : React.PropTypes.func.isRequired,
  yang1  : React.PropTypes.string.isRequired
}*/

export default Yang2

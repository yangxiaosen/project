/**
 * Created by luqianyu on 2016/12/27.
 */
import React from 'react'
import $ from 'jquery'

const About = React.createClass({
  handleSubmit1 (e) {
    e.preventDefault()
    this.props.addStr(this.refs.tttt.value)
  },
  handleSubmit2 (e) {
    e.preventDefault()
    const that = this
    $.ajax({
      method: 'get',
      url: 'getState.json'
    }).done(function (data) {
      that.props.inite.call(that, data.number, data.str)
      console.log(data.number)
      console.log(data.str)
    })
    $.ajax({
      method: 'get',
      url: 'api.hzy.pw/saying/v1/ciba',
    }).done(function (data) {

    })
  },
  render () {
    return (
      <div style={{ margin: '0 auto' }} >
      this is about div
        <div>Number: {this.props.number}</div>
        <button onClick={this.props.increNumber}> ADD NUMBER </button>
        <button onClick={this.props.async}> ADD NUMBER </button>
        <button onClick={this.handleSubmit2}> Init </button>

        <div>Str : {this.props.str}</div>
        <form ref='commentForm' onSubmit={this.handleSubmit1}>
          <input type='text' ref='tttt' placeholder='input' />
          <input type='submit' value='sss' />
        </form>

        {/*    下面开始bootstrap代码调试     */}
        <br /><br /><br />

        <form role='form'>
          <div className='form-group'>
            <label>Email address</label>
            <input type='email' className='form-control' id='exampleInputEmail1' placeholder='Enter email' />
          </div>
          <div className='form-group'>
            <label>Password</label>
            <input type='password' className='form-control' id='exampleInputPassword1' placeholder='Password' />
          </div>
          <div className='form-group'>
            <label>File input</label>
            <input type='file' id='exampleInputFile' />
            <p className='help-block'>Example block-level help text here.</p>
          </div>
          <div className='checkbox'>
            <label>
              <input type='checkbox' /> Check me out
            </label>
          </div>
          <button type='submit' className='btn btn-default'>Submit</button>
        </form>

      </div>
    )
  }
})

About.propTypes = {
  addStr        : React.PropTypes.func.isRequired,
  number        : React.PropTypes.number.isRequired,
  increNumber   : React.PropTypes.func.isRequired,
  async         : React.PropTypes.func.isRequired,
  str           : React.PropTypes.string.isRequired,
  inite         : React.PropTypes.func.isRequired
}

export default About

import React from 'react'
import DuckImage from '../assets/Duck.jpg'
import './HomeView.scss'
import { Jumbotron, Button } from 'react-bootstrap'
export const HomeView = () => (
  <Jumbotron>
    <h1>这是主页</h1>
    <p>这是一些描述</p>
    {/*<img alt='This is a duck, because Redux!' className='duck' src={DuckImage} />*/}
    <p><Button bsStyle="primary">Learn more</Button></p>
  </Jumbotron>
)

export default HomeView

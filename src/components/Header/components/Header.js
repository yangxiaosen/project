import React from 'react'
import { IndexLink, Link } from 'react-router'
import '../Header.scss'
import User from './Header-user'
import { Nav, Navbar, NavItem, NavDropdown, MenuItem } from 'react-bootstrap'

export const Header = React.createClass({
  render () {
    return (
      <nav className="navbar navbar-default">
        <IndexLink to='/' activeClassName='route--active'>
          Home
        </IndexLink>
        {' · '}
        <Link to='/counter' activeClassName='route--active'>
          Counter
        </Link>
        {' · '}
        <Link to='/about' activeClassName='route--active'>
          About
        </Link>
      </nav>
    )
  }
})

export const HeaderWhitBootstrap = React.createClass({
  render () {
    return (
      <Navbar collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/" activeClassName="route--active">Main</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>

        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1}><Link to="about" activeClassName="route--active">about</Link></NavItem>
            <NavItem eventKey={2}><Link to="counter" activeClassName="route--active">counter</Link></NavItem>
            <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}>Action</MenuItem>
              <MenuItem eventKey={3.2}>Another action</MenuItem>
              <MenuItem eventKey={3.3}>Something else here</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.3}>Separated link</MenuItem>
            </NavDropdown>
          </Nav>
        <Nav pullRight>
          <NavItem eventKey={1}><Link to="signup" activeClassName="route--active">signup</Link></NavItem>
          <NavItem>&nbsp;&nbsp;&nbsp;&nbsp;</NavItem>
        </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
})

export default HeaderWhitBootstrap

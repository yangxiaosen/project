import React from 'react'
import { IndexLink, Link } from 'react-router'
import User from '../containers/Header-container'
import { Nav, Navbar, NavItem, NavDropdown, MenuItem } from 'react-bootstrap'

export const HeaderWhitBootstrap = React.createClass({
  render () {
    return (
      <Navbar collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <IndexLink activeClassName='route--active'>Main</IndexLink>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>

        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1}><Link to='about' activeClassName='route--active'>about</Link></NavItem>
            <NavItem eventKey={2}><Link to='counter' activeClassName='route--active'>counter</Link></NavItem>
            <NavDropdown eventKey={3} title='Dropdown' id='basic-nav-dropdown'>
              <MenuItem eventKey={3.1}>Action</MenuItem>
              <MenuItem eventKey={3.2}>Another action</MenuItem>
              <MenuItem eventKey={3.3}>Something else here</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.3}>Separated link</MenuItem>
            </NavDropdown>
          </Nav>
          <Nav pullRight>
            <NavItem eventKey={1}><User /></NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
})

export default HeaderWhitBootstrap

import React from 'react'
import { IndexLink, Link } from 'react-router'
import User from '../containers/Header-container'
import { Nav, Navbar, NavItem, NavDropdown, MenuItem } from 'react-bootstrap'

// export const HeaderWhitBootstrap = React.createClass({
//   render () {
//     return (
//       <Navbar collapseOnSelect>
//         <Navbar.Header>
//           <Navbar.Brand>
//             <Link activeClassName='route--active' to="/">Main</Link>
//           </Navbar.Brand>
//           <Navbar.Toggle />
//         </Navbar.Header>
//
//         <Navbar.Collapse>
//           <Nav>
//             <NavItem eventKey={1} href='/about'>about</NavItem>
//             <NavItem eventKey={2}><Link to='counter' activeClassName='route--active'>counter</Link></NavItem>
//             <NavDropdown eventKey={3} title='Dropdown' id='basic-nav-dropdown'>
//               <MenuItem eventKey={3.1}>Action</MenuItem>
//               <MenuItem eventKey={3.2}>Another action</MenuItem>
//               <MenuItem eventKey={3.3}>Something else here</MenuItem>
//               <MenuItem divider />
//               <MenuItem eventKey={3.3}>Separated link</MenuItem>
//             </NavDropdown>
//           </Nav>
//           <Nav pullRight>
//             <NavItem eventKey={1}><User /></NavItem>
//           </Nav>
//         </Navbar.Collapse>
//       </Navbar>
//     )
//   }
// })

export const Header = React.createClass({
  active(navName){
    if(navName === this.props.location.pathname) {
      return "active"
    } else return ""
  },
  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"> </span>
              <span className="icon-bar"> </span>
              <span className="icon-bar"> </span>
            </button>
            <Link className="navbar-brand" to="/">Main</Link>
          </div>

          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              <li className={this.active("/about")}><Link to="/about">ABOUT</Link></li>
              <li className={this.active("/counter")}><Link to="/counter">counter</Link></li>

            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Login <span className="caret"> </span></a>
                <ul className="dropdown-menu">
                  <User />
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      )
  }
})

export default Header

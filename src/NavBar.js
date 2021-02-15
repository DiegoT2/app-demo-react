import React from 'react'
//import Banner from './images/banner_base.png';
import Logo from './images/icon_logo.png';
import "materialize-css/dist/css/materialize.css";
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';

import { Navbar,Nav,NavDropdown,Form,FormControl,Button } from 'react-bootstrap'




const categories = [
  {categoryId: "Mujer"},
  {categoryId: "Hombre"},
  {categoryId: "Niño"}
]

function NavBar() {

  return(
    <header>
      {/* <img className="responsive-img" src={Banner}/> */}
      
  <nav>
    <div className="nav-wrapper grey darken-3">
      <ul id="nav-mobile" className="left hide-on-med-and-down">
        <li><Link to="/"><a href="">
        <img src={Logo} 
        
        style={{ 
          marginTop: 5 ,
          justifyContent: 'center',
          alignItems: 'center',
          width: 50,
          height: 50,
          }}
        
        /></a></Link></li>

         {categories.map( category => 
          <li>
            <Link to={`/category/${category.categoryId}`}>
              <a>{category.categoryId}</a>
            </Link> 
          </li>
          )}

        <li  class="right-align"><Link to="/cart"><CartWidget/></Link></li>
      </ul>
    </div>
    </nav>

  <div>
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
      <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link href="#deets">More deets</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        Dank memes
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
  </div>



  
  </header>
  )
}


export default NavBar;
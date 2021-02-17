import React, { useContext, Fragment } from 'react'
import Logo from './images/icon_logo.png';
import "materialize-css/dist/css/materialize.css";
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';
import {CartContext} from "./CartContext.js"
import { Navbar,Nav } from 'react-bootstrap'

function NavBar() {
  const { quantity } = useContext(CartContext);
  console.log(quantity)

  return(
<header>
<div>
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand >
    <Link to="/">
      <a>
        <img src={Logo} 
        style={{ 
          justifyContent: 'center',
          alignItems: 'center',
          width: 50,
          height: 50,
          }} />
      </a>
    </Link>
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#category">
      <Link className="nav-link active" to="/category/Swords"> Swords </Link>
      </Nav.Link>
      <Nav.Link href="#category">
      <Link className="nav-link active" to="/category/Shields"> Shields </Link>
      </Nav.Link>
      <Nav.Link href="#category">
      <Link className="nav-link active" to="/category/Consummable Items"> Consummable Items </Link>
      </Nav.Link>
      <Nav.Link href="#category">
      <Link className="nav-link active" to="/category/Clothes"> Clothes </Link>
      </Nav.Link>
    </Nav>
    <Nav>
    <Nav.Link >
    {quantity < 1 ? (
            <Fragment />
          ) : (
            <CartWidget cantidad={quantity} />
          )}
    </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
</div>
</header>
  )
}

export default NavBar;
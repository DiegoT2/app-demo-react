import React from 'react'
import './NavBar.css';
import Banner from './images/banner_base.png';
import Logo from './images/icon_logo.png';
import "materialize-css/dist/css/materialize.css";
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';

const categories = [
  {categoryId: "Mujer"},
  {categoryId: "Hombre"},
  {categoryId: "Niño"}
]

function NavBar() {
  return(
    <header>
      <img className="responsive-img" src={Banner}/>
      
  <nav>
    <div className="nav-wrapper grey darken-3">
      <ul id="nav-mobile" className="left hide-on-med-and-down">
        <li><Link to="/"><a href=""><img src={Logo}/></a></Link></li>

         {categories.map( category => 
          <li>
            <Link to={`/category/${category.categoryId}`}>
              <a>{category.categoryId}</a>
            </Link> 
          </li>
          )}

        <li  class="right-align"><Link to="/carrito"><CartWidget/></Link></li>
      </ul>
    </div>
  </nav>
        
    </header>
  )
}

export default NavBar;
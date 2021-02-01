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

        <li  class="right-align"><Link to="/cart"><CartWidget/></Link></li>
      </ul>
    </div>
  </nav>
  
  
  <nav >
    <div class="nav-wrapper">
      <a href="#" class="brand-logo">Logo</a>
      <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><a href="sass.html">Sass</a></li>
        <li><a href="badges.html">Components</a></li>
        <li><a href="collapsible.html">JavaScript</a></li>
      </ul>
    </div>
  </nav>

  <ul class="sidenav" id="mobile-demo">
    <li><a href="sass.html">Sass</a></li>
    <li><a href="badges.html">Components</a></li>
    <li><a href="collapsible.html">JavaScript</a></li>
  </ul>


        
        
        
    </header>
  )
}

export default NavBar;
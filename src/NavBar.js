import React from 'react'
import './NavBar.css';
import Banner from './images/banner_base.png';
import Logo from './images/icon_logo.png';

function NavBar() {
  return(
    <header>
      <img class="banner" src={Banner}/>
      
  <nav>
    <div class="nav-wrapper grey darken-3">
      <ul id="nav-mobile" class="left hide-on-med-and-down">
        <li><a href=""><img src={Logo}/></a></li>
        <li><a href="">Hombre</a></li>
        <li><a href="">Mujer</a></li>
        <li><a href="">Niño</a></li>
      </ul>
    </div>
  </nav>
        
    </header>
  )
}

export default NavBar;
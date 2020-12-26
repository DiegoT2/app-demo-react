import React from 'react'
import './NavBar.css';

function NavBar() {
  return(
    <header>
      <img src="src\images\banner base.png"/>
      <ul>
        <li><a class="active" href="#home">Home</a></li>
        <li><a href="#Categoria1">Mujer</a></li>
        <li><a href="#Categoria2">Hombre</a></li>
        <li><a href="#Categoria3">Niño</a></li>
      </ul>
    </header>
  )
}

export default NavBar;
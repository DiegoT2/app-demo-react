import React , { useState , useEffect } from "react";
import './index.css';
import NavBar from './NavBar';
import "materialize-css/dist/css/materialize.css";
import CartWidget from './CartWidget';
import ItemListContainer from "./ItemListContainer.js";

const App = () => {

    
    return(
        <>
            <NavBar/>

            <CartWidget/>

            <ItemListContainer greeting="Bienvenido a mi tienda" />

        </>
    )
} 

export default App;
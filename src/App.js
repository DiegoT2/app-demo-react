import React , { useState , useEffect } from "react";
import './index.css';
import NavBar from './NavBar';
import "materialize-css/dist/css/materialize.css";
import ItemListContainer from "./ItemListContainer.js";
import ItemDetailContainer from './ItemDetailContainer'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Carrito from "./Carrito.js"

  const App = () => {

    return (
        <>
        <BrowserRouter>
        <NavBar/>
        {/* <CartWidget/> */}
        <Switch>
            <Route exact path="/">
                <ItemListContainer
                greeting="Products"
                /> 
            </Route>
            <Route exact path="/item/:id">
                <ItemDetailContainer/>
            </Route>
            <Route exact path="/category/:id">
                <ItemListContainer
                    greeting="category"/>
            </Route>
            <Route exact path="/carrito">
                <Carrito/> 
            </Route>
        </Switch>
        {/* <Footer/> */}
        </BrowserRouter>
        </>
    )
} 

export default App;
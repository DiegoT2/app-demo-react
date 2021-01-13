import React , { useState , useEffect } from "react";
import './index.css';
import NavBar from './NavBar';
import "materialize-css/dist/css/materialize.css";
import CartWidget from './CartWidget';
import ItemListContainer from "./ItemListContainer.js";
import ItemDetailContainer from './ItemDetailContainer'
import { BrowserRouter, Switch, Route } from 'react-router-dom';

  const App = () => {

    return (
        <>
        <BrowserRouter>
        <NavBar/>
        <CartWidget/>
        <Switch>
            <Route exact path="/">
                <ItemListContainer
                greeting="Products"
                /> 
            </Route>
            <Route exact path="/item/:id">
                <ItemDetailContainer/>
            </Route>
            <Route exact path="/ItemListContainer">
                <ItemListContainer
                    greeting="Products"
                />
            </Route>
        </Switch>
        {/* <Footer/> */}
        </BrowserRouter>
        </>
    )
} 

export default App;
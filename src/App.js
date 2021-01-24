import React  from "react";
import './index.css';
import NavBar from './NavBar';
import "materialize-css/dist/css/materialize.css";
import ItemListContainer from "./ItemListContainer.js";
import ItemDetailContainer from './ItemDetailContainer'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Cart from "./Cart.js";
import CartProvider from "./CartContext.js";

  const App = () => {

    return (
        <>
        <BrowserRouter>
        <NavBar/>
        <CartProvider>
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
            <Route exact path="/cart">
                <Cart/> 
            </Route>
        </Switch>
        {/* <Footer/> */}
        </CartProvider>
        </BrowserRouter>
        </>
    )
} 

export default App;
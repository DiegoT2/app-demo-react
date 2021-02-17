import React from "react";
import './index.css';
import NavBar from './NavBar';
import ItemListContainer from "./ItemListContainer.js";
import ItemDetailContainer from './ItemDetailContainer'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Cart from "./Cart.js";
import CartProvider from "./CartContext.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./Footer.js";

const App = () => {

    return (
        <>
        <div
        style={{ 
            height:'100%',
            width: "100%",
            backgroundImage: `url("https://i.ibb.co/hY3ZQxx/Background-image.jpg )`,
            backgroundSize: 'cover'
            }}>
        
        <BrowserRouter>
        <NavBar/>
        <CartProvider>
        <Switch>
            <Route exact path="/">  
                <ItemListContainer />
            </Route>

            <Route exact path="/item/:id">
                <ItemDetailContainer/>
            </Route>

            <Route exact path="/category/:category">
                <ItemListContainer />
            </Route>

            <Route exact path="/cart">
                <Cart/> 
            </Route>

        </Switch>
        <Footer/>
        </CartProvider>
        </BrowserRouter>
        </div>
        </>
    )} 

export default App;
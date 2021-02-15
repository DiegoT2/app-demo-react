import React, { useEffect }  from "react";
import './index.css';
import NavBar from './NavBar';
//import "materialize-css/dist/css/materialize.css";
import ItemListContainer from "./ItemListContainer.js";
import ItemDetailContainer from './ItemDetailContainer'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Cart from "./Cart.js";
import CartProvider from "./CartContext.js";
import 'bootstrap/dist/css/bootstrap.min.css';
//import Background_img from "./images/Background image.jpg";
//import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'


  const App = () => {
     

    return (
        <>


        
        

        <div
        style={{ 
            height:'auto',
            width: "100%",
            backgroundImage: `url("https://i.ibb.co/hY3ZQxx/Background-image.jpg )`,
            backgroundSize: 'cover'
            }}> 
        <BrowserRouter>
        <NavBar/>
        <CartProvider>
        <Switch>
            
            <Route exact path="/">  
                <ItemListContainer greeting="It's dangerous to go alone! Take this!"/>
            </Route>

            <Route exact path="/item/:id">
                <ItemDetailContainer/>
            </Route>

            {/* <Route exact path="/category/:categoryId">
                <ItemListContainer
                    greeting="category"/>
            </Route> */}

            <Route exact path="/cart">
                <Cart/> 
            </Route>

        </Switch>
        
        
        {/* <Footer/> */}
        </CartProvider>
        </BrowserRouter>
        </div>
        

        
        </>
    )
} 

export default App;
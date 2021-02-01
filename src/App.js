import React, { useEffect }  from "react";
import './index.css';
import NavBar from './NavBar';
import "materialize-css/dist/css/materialize.css";
import ItemListContainer from "./ItemListContainer.js";
import ItemDetailContainer from './ItemDetailContainer'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Cart from "./Cart.js";
import CartProvider from "./CartContext.js";

//import {firestore} from "./firebaseConfig.js"




  const App = () => {

    // useEffect(()=>{
    //     const db = firestore
    //     const collection = db.collection("Products")
    //     const query = collection.get()

    //     query
    //     .then((resultado)=>{
    //         const items_array = resultado.docs
            
            
    //         items_array.forEach(item=>{
    //             const producto_final = {
    //                 id : item.id,
    //                 ...item.data()
    //             }
    //             console.log(producto_final)
    
    //         })
    //     })
    //     .catch(()=>{
    //         console.log("fallo")
    //     })
    // })



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
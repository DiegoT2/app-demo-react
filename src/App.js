import React , { useState , useEffect } from "react";
import './index.css';
import NavBar from './NavBar';
import "materialize-css/dist/css/materialize.css";
import CartWidget from './CartWidget';
import ItemListContainer from "./ItemListContainer.js";



const products = [{
    id: 1,
    titulo: "Zapatillas niño",
    precio: "850",
    //imagen: "",
    talle: "28",
    description: "...zapatillas niño...",
    stock: 3,
    initial: 1

  },{
    id: 2,
    titulo: "Zapatillas mujer",
    precio: "1050",
    //imagen: "",
    talle: "38",
    description: "...zapatillas mujer...",
    stock: 5,
    initial: 2
  },{
    id: 3,
    titulo: "Zapatillas hombre",
    precio: "1200",
    //imagen: "",
    talle: "42",
    description: "...zapatillas hombre...",
    stock: 6,
    initial: 1
  }
  ]

const App = () => {

    const [ items, setItems ] = useState([])

    useEffect(() => {
      const promesa = new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(products)
          reject("No se pudieron cargar los productos")   
        }, 2000);
      })
  
      promesa.then( result => setItems(result) ) 
      promesa.catch( err => console.log("Algo salio mal") ) 
  
    }, []);
    
    return(
        <>
            <NavBar/>

            <CartWidget/>

            <ItemListContainer greeting="Bienvenido a mi tienda" />

        </>
    )
} 

export default App;
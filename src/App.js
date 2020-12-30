import React , { useState , useEffect } from "react";
import './index.css';
import NavBar from './NavBar';
import "materialize-css/dist/css/materialize.css";
import CartWidget from './CartWidget';
import Contador from "./Contador";
import ItemListContainer from "./ItemListContainer.js";

const App = () => {
    const [contador,setContador] = useState(0)

    useEffect(()=>{
        //Este es mi efecto secundario. Pasa siempre despues del render, simil "componentDidMount"
        //EJ: Pido algo al servidor
        console.log("Hay un efecto")
    },[])


    const aumentarContador = () => {
        setContador(contador + 1)
    }

    const restarContador = () => {
        setContador(contador - 1)
    }

    const resetearContador = () => {
        setContador(0)
    }
    
    return(
        <>
            <NavBar/>

            <CartWidget/>

            <ItemListContainer greeting="Bienvenido a mi tienda" />

            <Contador 
                contador={contador} 
                restarContador={restarContador}
                aumentarContador={aumentarContador}
                resetearContador={resetearContador}
            />

        </>
    )
} 

export default App;
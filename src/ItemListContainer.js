import React, { useState , useEffect } from 'react'
import Item from './Item.js'
import Contador from './Contador.js'
import "./ItemListContainer.css"


const ItemListContainer = ({greeting}) => {

  

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

    
    return (
        <div className="itemList">
            <h1>{greeting}</h1>
            <section className="products-container">
                <article className="one-product">
                   
                    <Item
                        title = {"Zapatillas Niño"}
                        id = {1}
                        talle = {32}
                        price = {850}
                        pictureURL = "https://http2.mlstatic.com/D_NQ_NP_948368-MLA42677047373_072020-W.jpg"
                    />
                    <Contador 
                contador={contador} 
                restarContador={restarContador}
                aumentarContador={aumentarContador}
                resetearContador={resetearContador}
            />
                    <button className="addToCart" onClick = {() => {console.log(contador)}}>add to cart</button>
                </article>
                               
               
            </section>

        </div>
    )
}

export default ItemListContainer
/*import React, { useState } from 'react'

const ItemCount = ({ initial, stock }) => {

    const [contador, setContador] = useState(initial)

    const aumentarContador = () => {
        if (contador < stock){
            setContador(contador + 1)
        }else{
            setContador( stock )
        }        
    }

    const restarContador = () => {
        if(contador <= initial){
            setContador(initial)
        }else
            setContador(contador - 1)
    }

    const onAdd = () => {
        console.log(contador)
    }

    return (
        <div>
            <div className="contador">
                <button onClick={ restarContador } className="buttonProd">-</button>
                <p>{contador}</p>
                <button onClick={ aumentarContador } className="buttonProd">+</button>
            </div>    
            <div>
                <button className="addToCart" onClick = { onAdd }>add to cart</button>
            </div>
        </div>
    )
}*/

import React from 'react'
import { Link } from 'react-router-dom';

const ItemCount = ({ text, carrito, estado, suma, resta, contador, item}) => {

    return (
        <>

            {estado ?
            (<>
            <div className="contador">
                <button onClick={suma} className="buttonProd">+</button>
                <p>{contador}</p>
                <button onClick={resta} className="buttonProd">-</button>
            </div>    
            <div>
                <button className="addToCart" onClick={ () => carrito(item)}>add to cart</button>
            </div>
            </>)  
            
            :(<Link to ="/carrito">
                <h3>{text}</h3>
                <button className="addToCart" >Terminar compra</button>
            </Link>)
            }
        </>
    )
}

export default ItemCount
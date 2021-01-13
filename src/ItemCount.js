import React, { useState } from 'react'

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
}

export default ItemCount
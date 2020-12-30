import React from 'react'

const Contador = ({contador,aumentarContador,resetearContador,restarContador}) => {
    return (
        <div>
            <p>El contador va : {contador} </p>
            <button onClick={ restarContador }>-</button>
            <button onClick={ resetearContador }>resetear</button>
            <button onClick={ aumentarContador }>+</button>
        </div>
    )
}

export default Contador
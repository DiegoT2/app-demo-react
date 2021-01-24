import React, {useContext} from 'react'
import {CartContext} from "./CartContext.js"


const Cart = () => {
    

    const {cartList, clearCart, total} = useContext(CartContext)
    console.log(cartList)
    return ( 
    <>   
    <h1>Carrito test</h1>
    {cartList.length > 0 ? 
    (<h3>Comprar</h3>)
    :
    (<h3>El carrito esta vacio</h3>)
    }
    

    
    {cartList.length > 0 && cartList.map( (d, idx) => 
        <div key={idx}>
        <p>{d.name}</p>
        {/* <p>{d.image}</p> */}
        <p>${d.price}</p>
        <p>{d.amount}</p>
        </div>
    )}

    {cartList.length > 0 &&
    <div>    
    <h3>{total}</h3>
    <div>
        <button onClick={clearCart}>Borrar el carrito</button>
        <button>Pagar</button>
    </div>
    </div>
    } 
    
    </>
)}

export default Cart
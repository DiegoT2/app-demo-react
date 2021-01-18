/*import React from 'react'
import ItemCount from './ItemCount.js'



const ItemDetail = ({title, image, description, price, stock, initial }) => {

    const img = require(`./images/${image}`)

    return (
        <div className="itemDetail">
                 <h1> {title} </h1> 
                 <img src ={ img.default }></img>
                 <p> ${price} </p>
                 <p>{description}</p>
                 &nbsp;
                 {stock ?
                 <p>{stock} in Stock</p>
                :<h1>Not in stock</h1>
                }
                &nbsp;
                <ItemCount initial={initial} stock={stock}/>
        </div>
    )
}
*/
import React, { useState } from 'react'
import ItemCount from './ItemCount.js'

const ItemDetail = ({title, image, description, price, stock, initial, item }) => {

    const [ contDetail  , setContDetail ] = useState(initial);

    const [ estadoBoton , setEstadoBoton ] = useState(true);

    const aumentarCont = () => {
        if (contDetail < stock){
            setContDetail(contDetail + 1)
        }else{
            setContDetail( stock )
        }        
    }

    const restarCont = () => {
        if(contDetail > initial){
            setContDetail(contDetail - 1)
        }
    }

    const agregarCarrito = () => {
        setEstadoBoton(false)
    }

    const img = require(`./images/${image}`)

    return (
        <div className="itemDetail">
                 <h1> {title} </h1> 
                 <img src ={ img.default } alt="alt"></img>  
                 <p> ${price} </p>
                 <p>{description}</p>
                 &nbsp;
                 {stock ?
                 <p>{stock} in Stock</p>
                :<h1>Not in stock</h1>
                }
                &nbsp;
                <ItemCount initial={initial} stock={stock} estado={estadoBoton} item={item}
                carrito={agregarCarrito} text={"Agregaste " + contDetail + " " +title + " al carrito"} 
                suma={aumentarCont} resta={restarCont} contador={contDetail} />
        </div>
    )
}



export default ItemDetail
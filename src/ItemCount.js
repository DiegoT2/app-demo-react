import React, {useState , useContext} from 'react'
import { Link } from 'react-router-dom';
import {CartContext} from "./CartContext.js"

const ItemCount = ({ stock, initial, name, item, key}) => {

    const [ contDetail, setContDetail] = useState(initial);
    const [ estadoBoton, setEstadoBoton] = useState(true);
    const { addToCart } = useContext(CartContext)

    const aumentarCont = ()=> {
        if (contDetail < stock){
            setContDetail(contDetail + 1)
        }else{
            setContDetail(stock)
        }
    }

    const restarCont = () => {
        if(contDetail > initial){
            setContDetail(contDetail - 1)
        }
    }

    const agregarCarrito = () => {
        addToCart(item, contDetail, key)
        setEstadoBoton(false)
    }

    return (
        <>

            {estadoBoton ?
            (<>
            <div className="contador">
                <button onClick={aumentarCont} className="buttonProd">+</button>
                <p>{contDetail}</p>
                <button onClick={restarCont} className="buttonProd">-</button>
            </div>    
            <div>
                <button  onClick={ agregarCarrito }>add to cart</button>
            </div>
            </>)  
            
            :(
            <>
            <h3>{"Agregaste " + contDetail + " " + name + " al carrito"}</h3>
            <Link to ="/carrito">
                <button  >Terminar compra</button>
            </Link>
            </>
            )
            }
        </>
    )
}

export default ItemCount
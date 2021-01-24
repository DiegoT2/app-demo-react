import React, {useState , useContext} from 'react'
import { Link } from 'react-router-dom';
import {CartContext} from "./CartContext.js"

const ItemCount = ({ stock, initial, name, item, id}) => {

    const [ contDetail, setContDetail] = useState(initial);
    const [ estadoBoton, setEstadoBoton] = useState(true);
    const useCartContext = useContext(CartContext)
    let {addItem} = useContext(CartContext)

    console.log(initial)
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
        addItem(item, contDetail, id)
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
                <button  onClick={ agregarCarrito }> Agregar al carrito </button>
            </div>
            </>)  
            
            :(
            <>
            <h3>{"Agregaste " + contDetail + " " + name + " al carrito"}</h3>
            <Link to ="/cart">
                <button  >Terminar compra</button>
            </Link>
            </>
            )
            }
        </>
    )
}

export default ItemCount
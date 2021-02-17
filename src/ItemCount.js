import React, {useState , useContext} from 'react'
import { Link } from 'react-router-dom';
import {CartContext} from "./CartContext.js"
import {Row, Col} from 'react-bootstrap'

const ItemCount = ({ item }) => {

    const [ contDetail, setContDetail] = useState(item.initial);
    const [ estadoBoton, setEstadoBoton] = useState(true);
    let { addItem } = useContext(CartContext)

    const aumentarCont = ()=> {
        if (contDetail < item.stock){
            setContDetail(contDetail + 1)
        }else{
            setContDetail(item.stock)
        }
    }

    const restarCont = () => {
        if(contDetail > item.initial){
            setContDetail(contDetail - 1)
        }
    }

    const agregarCarrito = () => {
        addItem(item, contDetail, item.id)
        setEstadoBoton(false)
    }

    return (
        <>
            {estadoBoton ?
            (<>
            <div>
                <Row>
                    <Col> <p>{contDetail}</p> </Col>
                    <Col>
                        <button onClick={restarCont}> - </button>
                        <button onClick={aumentarCont}> + </button>
                    </Col>
                </Row>
            </div>    
            <div>
                <button  onClick={ agregarCarrito }> Agregar al carrito </button>
            </div>
            </>)  
            :
            (<>
            <h3>{"Agregaste " + contDetail + " " + item.titulo + " al carrito"}</h3>
            <Link to ="/cart">
                <button>Terminar compra</button>
            </Link>
            </>)
            }
        </>
    )}

export default ItemCount
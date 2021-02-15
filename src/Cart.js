import React, {useContext, useEffect, useState} from 'react'
import {CartContext} from "./CartContext.js"
import {Link} from "react-router-dom"
import {firestore} from "./firebaseConfig.js"
import firebase from "firebase"



const Cart = () => {
    
    const [ nombre, setNombre ] = useState("")
    const [ telefono, setTelefono ] = useState("")
    const [ email, setEmail ] = useState("")
    const [ id, setId] = useState("")
    
    const {cartList, clearCart, total} = useContext(CartContext)

    console.log(cartList)

    const manejarCompra = (e) => {
        e.preventDefault()
        const orden = {
            buyer : {nombre, telefono, email},
            items : cartList,
            date : firebase.firestore.Timestamp.fromDate(new Date()),
            total : {total}
        }

        const db = firestore
        const collection = db.collection("orders")
        

        collection
        .add(orden)
        .then((response)=>{
            setId(response.id)

            const collection = db.collection("Products")
            const bache = firestore.batch()

            cartList.forEach(item => {
                console.log(item)
                bache.update(collection.doc(item.id),{stock: 5 - item.amount}) //falta agregar la consulta de stock y modificacion correcta
            });

        bache
        .commit()
        .then(()=>{
            console.log("Estuvo todo el bache bien")
        })
        .catch(err=>{
            console.log("Hubo un error en", err)
        })
    })
    .catch((err)=>{
        console.log(err)
    })
    }
    
    return (
    <>   
    <h1>Carrito test</h1>
    
    {cartList.length > 0 ? 
    (<>
    <h3>Comprar</h3>
    {cartList.map( (d, idx) => 
        <div key={idx}>
        <p>{d.name}</p>
        {/* <p>{d.image}</p> */}
        <p>${d.price}</p>
        <p>{d.amount}</p>
        </div>)}
        <h3>{total}</h3>
    <div>
        <button onClick={clearCart}>Borrar el carrito</button> 

    </div>
    <div>
        <form onSubmit={manejarCompra}>
        <input onChange={e=>setNombre(e.target.value)} type="text" placeholder="Nombre" value={nombre}/>
        <input onChange={e=>setTelefono(e.target.value)} type="text" placeholder="Telefono" value={telefono}/>
        <input onChange={e=>setEmail(e.target.value)} type="text" placeholder="E-mail" value={email}/>
        <button>Pagar</button>
        </form>
    </div>

    </>)
    :
    (<div><h3>El carrito esta vacio</h3>
    <Link to="/"><button>Volver a la tienda</button></Link>
    </div>)
    }
    { id ? <p>Orden Confirmada! Nro de Orden {id}</p> : null}
</>)}

export default Cart
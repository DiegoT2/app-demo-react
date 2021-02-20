import React, {useContext, useState} from 'react'
import {CartContext} from "./CartContext.js"
import {Link} from "react-router-dom"
import {firestore} from "./firebaseConfig.js"
import firebase from "firebase"
import {Container, Row, Col} from 'react-bootstrap'
import Card from 'react-bootstrap/Card'
import rupee from "./images/rupee.png"

const Cart = () => {

    const [ nombre, setNombre ] = useState("")
    const [ telefono, setTelefono ] = useState("")
    const [ email, setEmail ] = useState("")
    const [ id, setId] = useState("")
    const {cartList, clearCart, removeItem, quantity, total} = useContext(CartContext)

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
                bache.update(collection.doc(item.id),{stock: item.stock - item.amount}) //falta agregar la consulta de stock y modificacion correcta
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
    <Container>
    <Row> <h1 style={{textAlign: "center", marginTop:"1.5em"}}>Carrito</h1> </Row>
    {cartList.length > 0 ? 
    (<>
    <Row> <h3 style={{textAlign: "center", margin:"0.5em"}}>Productos</h3> </Row>
    <Row>
    {cartList.map( (d, idx) =>
    <Col xs>
    <Card bg='dark' text='light' style={{ width: '18rem' }} className="mb-2"> 
        <div key={idx}>
        <Card.Header>
            <h2 style={{textAlign:"center"}}>{d.name}</h2></Card.Header>
        <Card.Body>
        <Card.Title>
        <img src={d.image}
        style={{       
            justifyContent: '18rem',
            alignItems: '18rem',
            width: 150,
            height: 150,
        }}></img>
        </Card.Title>
        <Card.Text>
        <h5 style={{textAlign:"center"}}>Cantidad: {d.amount}</h5>
        <h3 style={{textAlign:"center"}}>
            <img src={rupee} 
                style={{ 
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: 50,
                    height: 50,
            }} />
            {d.price}
        </h3>
        </Card.Text>
        {/* <button onClick={removeItem}>x</button>  */}
        </Card.Body>
        </div>
        </Card>
        </Col>

    )}
    </Row>
    <Row>
    <Col> 
    <h3 style={{textAlign:"center"}}>
    <img src={rupee} style={{ justifyContent: 'center', alignItems: 'center', width: 50, height: 50, }}/>
    {total}
    </h3>
    <button style={{marginLeft:"40%"}} onClick={clearCart}>Borrar el carrito</button>
    </Col>
    </Row> 
    <div>
        <form  onSubmit={manejarCompra}>
        <input style={{color:"azure"}} onChange={e=>setNombre(e.target.value)} type="text" placeholder="Nombre" value={nombre}/>
        <input style={{color:"azure"}} onChange={e=>setTelefono(e.target.value)} type="text" placeholder="Telefono" value={telefono}/>
        <input style={{color:"azure"}} onChange={e=>setEmail(e.target.value)} type="text" placeholder="E-mail" value={email}/>
        <button>Comprar</button>
        </form>
    </div>
    </>
    )
    :
    (<div style={{margin:"1em"}}><h3 style={{marginBottom:"1em"}}>El carrito esta vacio</h3>
    <Link to="/"><button>Volver a la tienda</button></Link>
    </div>)
    }
    { id ? <p style={{marginTop:"1em"}}>Orden Confirmada! Nro de Orden {id}</p> : null}
    </Container>
</>)}

export default Cart
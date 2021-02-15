import React, { useState , useEffect } from 'react'
import ItemList from './ItemList.js'
//import "./ItemListContainer.css"
//import {useParams} from 'react-router-dom'
import {firestore} from "./firebaseConfig.js"
import {Container, Row, Col} from 'react-bootstrap'





const ItemListContainer = ({greeting}) => {

    const [products, setProducts] = useState([])
    // const [ items, setItems ] = useState([])
    // const {id} = useParams()

  useEffect(()=>{
    const db = firestore
    const collection = db.collection("Products")
    const query = collection.get()
    let array_vacio = []
    query
    .then((resultado)=>{
        const items_array = resultado.docs
        
        items_array.forEach(item=>{
            const producto_final = {
                id : item.id,
                ...item.data()
            }
            
            array_vacio.push(producto_final)
        })
        setProducts(array_vacio)
    })
    .catch(()=>{
        console.log("fallo")
    })

},[])



// const [ items, setItems ] = useState([])

// const {id} = useParams()

// useEffect(() => {
//   if(id){
//       const category = products.filter(product => product.categoryId === id )
//       setItems(category)
//       console.log(category)
//   }
//   else{
//       setItems(products)
//   }

// }, [id, products]);

return (
    <>
        
    <div>
        <h1>{greeting}</h1>
        <Container fluid>
        {products.length > 0 
        ?
        
        <ItemList products = { products }
        
        />
        
        : <h1 className="loading">Loading...</h1>}
        </Container>
    </div>
        
    </>
)
}



export default ItemListContainer
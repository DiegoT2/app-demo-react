import React, { useState , useEffect } from 'react'
import ItemList from './ItemList.js'
import "./ItemListContainer.css"
import {useParams} from 'react-router-dom'
import {firestore} from "./firebaseConfig.js"
//import zapatillaNiños from './images/zapatillas-niños-deportiva.jpg';
//import zapatillaMujer from './images/zapatillas-mujer-deportiva.jpg';
//import zapatillaHombre from './images/zapatillas-hombre-deportiva.jpg';



let products = []


// const products = [{
//   id: 1,
//   titulo: "Zapatillas niño",
//   precio: "850",
//   imagen: "zapatillas-niños-deportiva.jpg",
//   talle: "28",
//   description: "...zapatillas niño...",
//   stock: 3,
//   initial: 1,
//   categoryId: "Niño",
// },{
//   id: 2,
//   titulo: "Zapatillas mujer",
//   precio: "1050",
//   imagen: "zapatillas-mujer-deportiva.jpg",
//   talle: "38",
//   description: "...zapatillas mujer...",
//   stock: 5,
//   initial: 2,
//   categoryId: "Mujer",
// },{
//   id: 3,
//   titulo: "Zapatillas hombre",
//   precio: "1200",
//   imagen: "zapatillas-hombre-deportiva.jpg",
//   talle: "42",
//   description: "...zapatillas hombre...",
//   stock: 6,
//   initial: 1,
//   categoryId: "Hombre",
// }
// ]

const ItemListContainer = ({greeting}) => {



  useEffect(()=>{
    const db = firestore
    const collection = db.collection("Products")
    const query = collection.get()

    query
    .then((resultado)=>{
        const items_array = resultado.docs
        
        items_array.forEach(item=>{
            const producto_final = {
                id : item.id,
                ...item.data()
            }
            products.push(producto_final)
        })
    })
    .catch(()=>{
        console.log("fallo")
    })
})




const [ items, setItems ] = useState([])

const {id} = useParams()

useEffect(() => {
  if(id){
      const category = products.filter(product => product.categoryId === id )
      setItems(category)
      console.log(category)
  }
  else{
      setItems(products)
  }

}, [id, products]);

return (
    <div className="itemList">
      {id ? <h1>{id}</h1>
      :<h1>{greeting}</h1>  
      } 
        {products.length > 0 
        ? <ItemList products = { items } /> 
        : <h1 className="loading">Loading...</h1>}
    </div>
)
}



export default ItemListContainer
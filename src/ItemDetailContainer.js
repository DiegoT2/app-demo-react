import React, { useState, useEffect } from 'react'
import ItemDetail from './ItemDetail.js'
import { useParams } from "react-router-dom"
import {firestore} from "./firebaseConfig.js"


let products = []
console.log(products)
 


// const products = [{
//     id: 1,
//     titulo: "Zapatillas niño",
//     precio: 850,
//     imagen: "zapatillas-niños-deportiva.jpg",
//     talle: "28",
//     description: "...zapatillas niño...",
//     stock: 3,
//     initial: 1,
//     categoryId: "niño",
//   },{
//     id: 2,
//     titulo: "Zapatillas mujer",
//     precio: 1050,
//     imagen: "zapatillas-mujer-deportiva.jpg",
//     talle: "38",
//     description: "...zapatillas mujer...",
//     stock: 5,
//     initial: 1,
//     categoryId: "mujer",
//   },{
//     id: 3,
//     titulo: "Zapatillas hombre",
//     precio: 1200,
//     imagen: "zapatillas-hombre-deportiva.jpg",
//     talle: "42",
//     description: "...zapatillas hombre...",
//     stock: 6,
//     initial: 1,
//     categoryId: "hombre",
//   }
//   ]

  const ItemDetailContainer = ({ }) => {


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

  
    
    
    const [ item, setItem ] = useState(null)
    const { id } = useParams()

    useEffect(() => {
        const promesa = new Promise((resolve)=>{
        setTimeout(function(){
            const i = products.find(product => product.id == id)
            console.log(i)
            resolve(i); 
        }, 500);
        }
        )
        promesa.then( result => setItem(result) ) 
        promesa.catch( err => console.log("Algo salio mal") ) 

    },  [id]);

    return (
        <div>
            { item ?
            <ItemDetail
             item={item}
             id={item.id}
             title={item.titulo}     
             price={item.precio}
             image={item.imagen}
             description={item.descripcion}
             stock={item.stock}
             initial={item.initial}
             />
             :
             <h2>Loading...</h2>}
        </div>
    )
}

export default ItemDetailContainer
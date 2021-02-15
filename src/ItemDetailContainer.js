import React, { useState, useEffect } from 'react'
import ItemDetail from './ItemDetail.js'
import { useParams } from "react-router-dom"
import {firestore} from "./firebaseConfig.js"

let products = []
console.log(products)
 

  const ItemDetailContainer = ({ }) => {
    const [ item, setItem ] = useState(null)
    const { id } = useParams()

    useEffect(()=>{
      const db = firestore
      const collection = db.collection("Products")
      const query = collection.get()

      query
      .then((resultado)=>{
          const items_array = resultado.docs
          
          items_array.forEach(itemm=>{
              const producto_final = {
                  id : itemm.id,
                  ...itemm.data()
              }
              products.push(producto_final)
          })
      })
      .catch(()=>{
          console.log("fallo")
      })

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
  
    console.log(item)

    return (
        <>
            { item ?
            <ItemDetail
             item={item}
             />
             :
             <h2>Loading...</h2>}
        </>
    )
}

export default ItemDetailContainer
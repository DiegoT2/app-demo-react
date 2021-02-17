import React, { useState, useEffect } from 'react'
import ItemDetail from './ItemDetail.js'
import { useParams } from "react-router-dom"
import {firestore} from "./firebaseConfig.js"
import Spinner from 'react-bootstrap/Spinner'

let products = []

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

      const promesa = new Promise((resolve)=>{
        setTimeout(function(){
            const i = products.find(product => product.id == id)
            resolve(i); 
        }, 1000);
        }
        )
        promesa.then( result => setItem(result) ) 
        promesa.catch( err => console.log("Algo salio mal") )
    },  [id]);

    return (
        <>
            { item ?
            <ItemDetail item={item} />
            :
            <div >
            <Spinner style={{ marginLeft:"50%", marginTop:"6em", marginBottom:"4.5em"}} animation="border" variant="light"/>
            </div> }
        </>
    )}

export default ItemDetailContainer
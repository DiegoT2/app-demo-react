import React, { useState, useEffect } from 'react'
import ItemDetail from './ItemDetail.js'
import { useParams } from "react-router-dom"



const products = [{
    id: 1,
    titulo: "Zapatillas niño",
    precio: "850",
    imagen: "./images/zapatillas-niños-deportiva.jpg",
    talle: "28",
    description: "...zapatillas niño...",
    stock: 3,
    initial: 1
  },{
    id: 2,
    titulo: "Zapatillas mujer",
    precio: "1050",
    imagen: "./images/zapatillas-mujer-deportiva.jpg",
    talle: "38",
    description: "...zapatillas mujer...",
    stock: 5,
    initial: 2
  },{
    id: 3,
    titulo: "Zapatillas hombre",
    precio: "1200",
    imagen: "./images/zapatillas-hombre-deportiva.jpg",
    talle: "42",
    description: "...zapatillas hombre...",
    stock: 6,
    initial: 1
  }
  ]

  const ItemDetailContainer = ({ }) => {
    
    
    const [ item, setItem ] = useState()
    const { id } = useParams()

    useEffect(() => {
        const promesa = new Promise((resolve)=>{
        setTimeout(function(){
            const i = products.find(product => product.id == id)
            console.log(i)
            resolve(i); 
        }, 2000);
        }
        )
        promesa.then( result => setItem(result) ) 
        promesa.catch( err => console.log("Algo salio mal") ) 

    },  [id]);

    return (
        <div>
            { item ?
            <ItemDetail
             id={item.id}
             title={item.titulo}     
             price={item.precio}
             image={item.imagen}
             description={item.description}
             stock={item.stock}
             initial={item.initial}
             />
             :
             <h2>Loading</h2>}
        </div>
    )
}

export default ItemDetailContainer
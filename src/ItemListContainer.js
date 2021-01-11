import React, { useState , useEffect } from 'react'
import Item from './Item.js'
import ItemList from './ItemList.js'
import Contador from './Contador.js'
import "./ItemListContainer.css"


const products = [{
    id: 1,
    titulo: "Zapatillas niño",
    precio: "850",
    //imagen: "",
    talle: "28",
    description: "...zapatillas niño...",
    stock: 3,
    initial: 1

  },{
    id: 2,
    titulo: "Zapatillas mujer",
    precio: "1050",
    //imagen: "",
    talle: "38",
    description: "...zapatillas mujer...",
    stock: 5,
    initial: 2
  },{
    id: 3,
    titulo: "Zapatillas hombre",
    precio: "1200",
    //imagen: "",
    talle: "42",
    description: "...zapatillas hombre...",
    stock: 6,
    initial: 1
  }
  ]

const ItemListContainer = ({greeting}) => {

  

    const [contador,setContador] = useState(0)


    const aumentarContador = () => {
        setContador(contador + 1)
    }

    const restarContador = () => {
        setContador(contador - 1)
    }

    const resetearContador = () => {
        setContador(0)
    }

    
    const [ items, setItems ] = useState([])

    useEffect(() => {
      const promesa = new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(products)
          reject("No se pudieron cargar los productos")   
        }, 2000);
      })
  
      promesa.then( result => setItems(result) ) 
      promesa.catch( err => console.log("Algo salio mal") ) 
  
    }, []);

    return (
        <div className="itemList">
            <h1>{greeting}</h1>
            {products.length > 1 
            ? <ItemList products = { products } /> 
            : <h2>Loading</h2>}
        </div>
    )
}

//                     <Contador 
//                       contador={contador} 
//                       restarContador={restarContador}
//                       aumentarContador={aumentarContador}
//                       resetearContador={resetearContador}
//                     />
                    
//                     <button className="addToCart" onClick = {() => {console.log(contador)}}>add to cart</button>
//                 </article>
                               
               
//             </section>

//         </div>
//     )
// }

export default ItemListContainer
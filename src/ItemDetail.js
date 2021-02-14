import React, { useState } from 'react'
import ItemCount from './ItemCount.js'

const ItemDetail = ({title, image, description, price, stock, initial, item, id }) => {


    //let img = require(`./images/${image}`)
    // console.log(initial)
    console.log(item)
    return (
        <>
        <h1 className="titleDetail"> {item.titulo} </h1> 
        <div className="itemDetail">
            <section className="itemBox">
                <img src ={ item.imagen } alt="alt" className="itemImg"></img>  
                <p className="description">{item.descripcion}</p>
            </section>
            <section className="itemBox">
            <h1> ${item.precio} </h1>
            &nbsp;
            { item.stock ? <p>{item.stock} in Stock</p> :<h1>Not in stock</h1> }
            &nbsp;
            <ItemCount 
            id = {item.id}
            stock={item.stock} 
            initial={item.initial} 
            name = {item.titulo}
            item={item}/>
    
                </section>
                
            </div>
            </>
        )
    }

export default ItemDetail
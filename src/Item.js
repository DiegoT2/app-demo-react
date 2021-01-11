import React from "react"
import "./ItemListContainer.css"
import Contador from './Contador.js'

const Item = ({title, id, price, image, talle, initial, stock}) => {
    return (
            <article className="one-product">
                <img src={image} className="one-productImg"></img>
                <h3>{title}</h3>
                <p>price : $ {price}</p>
                <p>talle : {talle}</p>
                &nbsp;
            </article>
    )
}


export default Item
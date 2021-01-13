import React from 'react'
import ItemCount from './ItemCount.js'

const ItemDetail = ({title, image, description, price, stock, initial }) => {
    return (
        <div className="itemDetail">
                 <h1> {title} </h1> 
                 {/* <img src ={ image }></img>   */}
                 <p> ${price} </p>
                 <p>{description}</p>
                 &nbsp;
                 {stock ?
                 <p>{stock} in Stock</p>
                :<h1>Not in stock</h1>
                }
                &nbsp;
                <ItemCount initial={initial} stock={stock}/>
        </div>
    )
}

export default ItemDetail
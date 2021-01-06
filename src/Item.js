import React from "react"
import "./ItemListContainer.css"

const Item = ({title, id, talle, price, pictureURL}) => {


    return (
        <div>
            
            <h3>{title}</h3>
            <img  id="imagenprod" src={pictureURL} alt="zapatillas" className="zapatillas-niño"></img>
            <p>talle : {talle}</p>
            <p>price : $ {price}</p>
            &nbsp;
            
        </div>
    )
}


export default Item
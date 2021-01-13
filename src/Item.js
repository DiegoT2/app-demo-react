import React from "react"
import "./ItemListContainer.css"
import ItemCount from './ItemCount.js'
import { Link } from 'react-router-dom';

  const Item = ({title, image, id}) => {
    return (
            <article >
                {/* <Link to={"/item/" + id}><img src={image}></img></Link> */}
                <h3>{title}</h3>
                <Link to={"/item/" + id} > More info </Link>
            </article>
    )
}


export default Item
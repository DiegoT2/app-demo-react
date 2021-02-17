import React from 'react'
import Item from './Item.js'
import { Row } from 'react-bootstrap'

const ItemList = ({ productos }) => {

    return (
        <>
        <Row>
            { productos.map( product =>
                <Item product={product} />
            )}
        </Row>
        </>
    )}

export default ItemList
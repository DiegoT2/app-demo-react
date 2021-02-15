import React from 'react'
import Item from './Item.js'

import {Container, Row, Col} from 'react-bootstrap'

const ItemList = ({ products }) => {

    return (
        
        <>
        <Row>
            { products.map( product => 
            
                <Item 
                    product={product}              
                />
            
            )}
        </Row>

        </>
    )
}

export default ItemList
import React from 'react'
import ItemCount from './ItemCount.js'
import rupee from "./images/rupee.png"
import {Container, Row, Col} from 'react-bootstrap'

const ItemDetail = ({item}) => {
    return (
        <>
        <Container>
        <Row>
        <Col>
        <h1 style={{textAlign: "center", marginTop:"1.5em"}}> {item.titulo} </h1> 
        </Col>
        </Row>
        <Row>
        <Col>
        <section >
            <div>
            <img src ={ item.imagen }
            style={{
                alignItems: 'center',
                width: 350,
                height: 350,
            }} /> 
            </div>
        </section>
        </Col>
        <Col>
        <section >
            <div>
            <p>{item.descripcion}</p>
            <h1> <img src={rupee} 
                style={{ 
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: 50,
                    height: 50,
                }} /> 
                {item.precio} 
            </h1>
            &nbsp;
            <Row>
                <Col>
                    { item.stock ? <p>{item.stock} en Stock</p> :<h1>Sin stock</h1> }
                </Col>
            &nbsp;
                <Col>
                    <ItemCount item={item}/>
                </Col>
            </Row>
            </div>
        </section>
        </Col>
        </Row>
        </Container>
        </>
        )}

export default ItemDetail
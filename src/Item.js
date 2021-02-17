import React from "react"
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card'
import { Col } from 'react-bootstrap'

const Item = ({product}) => {
    return (
<>
<div>
<Col>
<Card bg='dark'  style={{ width: '18rem' }}>
  <Link to={"/item/" + product.id}>
    <Card.Title text='light'>
      <h3 style={{textAlign:"center"}}>{product.titulo}</h3></Card.Title>
    <Card.Img style={{ width: '18rem' }} variant="top" src={product.imagen} />
    <Card.Body>
      <Card.Text text='light'><h6 style={{textAlign:"center"}}>{product.categoryId}</h6></Card.Text>
    </Card.Body>
  </Link>
</Card>
</Col>
</div>
</>
)}

export default Item
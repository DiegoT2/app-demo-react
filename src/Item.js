import React from "react"
//import "./ItemListContainer.css"
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card'
import {Container, Row, Col} from 'react-bootstrap'



  const Item = ({product}) => {
    return (
            <>
<div>
<Col>
  
<Card style={{ width: '18rem' }}>
  <Link to={"/item/" + product.id}>
    <Card.Title>{product.titulo}</Card.Title>
    <Card.Img style={{ width: '18rem' }} variant="top" src={product.imagen} />
    <Card.Body>
      <Card.Text>{product.categoryId} </Card.Text>
    </Card.Body>
  </Link>
</Card>

</Col>
</div>

</>
    )
}


export default Item
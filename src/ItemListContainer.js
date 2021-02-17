import React, { useState , useEffect } from 'react'
import ItemList from './ItemList.js'
import {useParams} from 'react-router-dom'
import {firestore} from "./firebaseConfig.js"
import {Container, Spinner, Row, Col} from 'react-bootstrap'

function ItemListContainer() {
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);
    const { category } = useParams();
  
    useEffect(() => {
      obtenerProductos.then((resultado) => {
        if (category) {
          const productosFiltrados = resultado.filter(
            (producto) => producto.categoryId === category
          );
          setProductos(productosFiltrados);
        } else {
          setProductos(resultado);
        }
        setLoading(false);
      });
    }, [category]);
  
    const obtenerProductos = new Promise((resolve, reject) => {
      const db = firestore;
      const collection = db.collection("Products");
      const query = collection.get();
      query
        .then((result) => {
          const collectionItems = result.docs.map((p) => ({
            id: p.id,
            ...p.data(),
          }));
          resolve(collectionItems);
        })
        .catch((error) => {
          reject(error);
        });
    });
  
    return (
      <div>
        {loading ? (
            <Container fluid >
        <Row fluid>
            <Col xl>
          <Spinner style={{ marginLeft:"50%", marginTop:"6em", marginBottom:"4.5em"}} animation="border" variant="light" />
          </Col> 
        </Row>
        </Container>
        ) : (
          <div>
            {category ? (
              <h1 style={{textAlign:"center", marginTop:"1.5em"}}>{category}</h1>
            ) : (
              <> </>
            )}
            <h1 style={{textAlign:"center", marginTop:"1.5em", marginBottom:"1.5em"}}>It's dangerous to go alone! Take this!</h1>
            <ItemList productos={productos} />
          </div>
        )}
      </div>
    );
  }

export default ItemListContainer
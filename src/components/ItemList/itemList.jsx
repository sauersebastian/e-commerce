import React from 'react';
import { Container, Row, Col,Card } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./itemList.css";


export default function ItemList(props) {



    const productos = props.items;
    return (
        <Container classname="conteinerList">
        <Row className="justify-content-md-center">
            {productos.map(product => {
               return(<Col lg={true}>           
                    <Card border="light" style={{ width: '18rem'}}>
                    <NavLink to={`item/${product.id}`}>
                        <Card.Img className="card-img" variant="top" src={product.img} />
                    </NavLink>
                    <Card.Body>
                        <NavLink to={`item/${product.id}`}>
                            <Card.Title>{product.name}</Card.Title>
                        </NavLink>
                        <Card.Text>
                            <strong>$ {product.price}</strong>
                        </Card.Text>
                    </Card.Body>
                    </Card>
                </Col>
            )})}
        </Row>
        <br></br>
        </Container>
    )
}
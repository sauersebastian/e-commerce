import React from 'react';
import { Container, Row, Col,Card } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export default function ItemList(props) {

    const productos = props.items;
    return (
        <Container>
        <Row>
            {productos.map(product => {
               return(<Col>           
                    <Card border="dark" style={{ width: '18rem'}}>
                    <NavLink to={`item/${product.id}`}>
                    <Card.Img variant="top" src={product.img} />
                    <Card.Body>
                        <Card.Title>{product.name}</Card.Title>
                        <Card.Text>
                            ${product.price}
                        </Card.Text>
                    </Card.Body>
                    </NavLink>
                    </Card>
                </Col>
            )})}
        </Row>
        </Container>
    )
}
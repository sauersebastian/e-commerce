import React from "react";
import { Card } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';


export default function Item (props) {
    const { name, img, price } = props.product;

    return (
        <div className="home">
            <Card border="dark" style={{ width: '18rem'}}>
            <NavLink to={`item/${props.product.id}`}>
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    ${price}
                </Card.Text>
            </Card.Body>
            </NavLink>
            </Card>
        </div>
    )
}
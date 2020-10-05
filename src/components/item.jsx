import React from "react";
import { Card } from 'react-bootstrap';


export default function Item (props) {
    const { name, desc, price } = props.product;

    return (
        <div className="home">
            <Card border="dark">
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    {desc}
                </Card.Text>
                <Card.Text>
                    ${price}
                </Card.Text>
            </Card.Body>
            </Card>
        </div>
    )
}
import React from 'react';
import { useCartContext } from './context/cartContext'
import { ListGroup } from 'react-bootstrap';


export default function Cart() {

    // eslint-disable-next-line no-unused-vars
    const { cart } = useCartContext();

    return (
        <div>
            <h2>Carrito</h2>
            <ListGroup>
                {
                     cart.map(function(item) {
                         console.log(cart);
                        return (<ListGroup.Item>{"Cantidad: " + item.count + " - " + item.product.name + ": " + item.product.desc}</ListGroup.Item>)
                    })
                }
            </ListGroup>
        </div>
    )
}
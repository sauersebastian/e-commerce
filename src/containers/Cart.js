import React, { useState, useEffect } from 'react';
import { useCartContext } from '../context/cartContext'
import { Link } from 'react-router-dom';
import { ListGroup, Container, Spinner } from 'react-bootstrap';
import Button from '../components/Button/Button'


export default function Cart() {


    const { cart, length, removeItem, cleanCart, totalPrice } = useCartContext();
    const [loading, setLoading] = useState(false)

    useEffect (() => {
        
        // eslint-disable-next-line no-unused-vars
        const timer = setTimeout(() => {
            setLoading(true);
        }, 1000);
    })

    const ItemsInCart = () => {
        return (
            <Container>
                <h3> Tienes {length() === 1 ? length()+" item" : length()+" items"} en tu carrito</h3>
                <br></br>
                <ListGroup>
                    {cart.map(cartItem => (
                        <>
                            <ListGroup.Item classname="">
                                {cartItem.product.name + "- " + 
                                "$" + cartItem.product.price + " x " + cartItem.count + " = $" + (cartItem.count* parseFloat(cartItem.product.price))}

                            </ListGroup.Item>
                            {/*<Button onClick={remItem(cartItem.product)} sign={"Eliminar producto"}> </Button>*/}
                        </>
                    ))}
                </ListGroup>
                <br></br>
                <ListGroup>
                    <h4>Total: ${totalPrice()}</h4>
                    <Button onClick={cleanCart} sign={"VACIAR CARRITO" }/>
                    <Link to={`/checkout`}>
                        <Button sign={"IR A FINALIZAR LA COMPRA"}> </Button>
                    </Link>
                </ListGroup>
            </Container>
        );
    };

    const EmptyCart = () => {
        return (
            <div>
                <h2>No tienes items en el carrito</h2>
                <Link to={`/`} style={{textAlign: "center"}}>
                    <h3>Seguir comprando</h3>
                </Link>
            </div>
        );
    };

    return !loading ? <Spinner animation="border" variant="warning" /> : (
        <>
            { length() > 0 ? <ItemsInCart /> : <EmptyCart />}
        </>
    );
}
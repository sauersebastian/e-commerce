import React from 'react';
import { useCartContext } from '../context/cartContext'
import { Link } from 'react-router-dom';
import { ListGroup, Container } from 'react-bootstrap';
import Button from '../components/Button/Button'


export default function Cart() {

    // eslint-disable-next-line no-unused-vars
    const { cart, length, clearCart, totalPrice } = useCartContext();

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
                        </>
                    ))}
                </ListGroup>
                <br></br>
                <ListGroup>
                    <h4>Total: ${totalPrice()}</h4>
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

    return (
        <>
            { length() > 0 ? <ItemsInCart /> : <EmptyCart />}
        </>
    );
}
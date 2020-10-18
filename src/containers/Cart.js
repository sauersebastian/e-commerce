import React from 'react';
import { useCartContext } from '../context/cartContext'
import { Link } from 'react-router-dom';
import { ListGroup } from 'react-bootstrap';
import Button from '../components/Button/Button'


export default function Cart() {

    // eslint-disable-next-line no-unused-vars
    const { cart, length, clearCart, totalPrice } = useCartContext();

    const ItemsInCart = () => {
        return (
            <ListGroup>
                <h2> Tienes {length() === 1 ? length()+" item" : length()+" items"} en tu carrito</h2>
                {cart.map(cartItem => (
                    <>
                        <ListGroup.Item> 
                            Cantidad: {cartItem.count + " -  Nombre: " + cartItem.product.name} 
                        </ListGroup.Item>
                    </>
                ))}
                <h2>Total: ${totalPrice()}</h2>
                <Link to={`/checkout`}>
                    <Button sign={"IR A FINALIZAR LA COMPRA"}> </Button>
                </Link>
            </ListGroup>
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
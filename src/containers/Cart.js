import React, { useState, useEffect } from 'react';
import { useCartContext } from '../context/cartContext'
import { Link } from 'react-router-dom';
import { ListGroup, Container, Spinner, Row, Col, Button } from 'react-bootstrap';


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
                    <ListGroup.Item>
                        <Row>
                            <Col sm>
                                Productos
                            </Col>
                            <Col sm>
                                Precio Unitario
                            </Col>
                            <Col sm>
                                Cantidad
                            </Col>
                            <Col sm>
                                Subtotal
                            </Col>
                            <Col sm>
                            </Col>
                        </Row>
                    </ListGroup.Item>
                    {cart.map(cartItem => (
                        <React.Fragment key={cartItem.product.id}>
                        <ListGroup.Item >
                            <Row >
                                <Col sm>
                                    {cartItem.product.name}
                                </Col>
                                <Col sm>
                                    ${cartItem.product.price}
                                </Col>
                                <Col sm>
                                    {cartItem.count}
                                </Col>
                                <Col sm>
                                    ${(cartItem.count* parseFloat(cartItem.product.price))}
                                </Col>
                                <Col sm>
                                    <Button onClick={() =>removeItem(cartItem.product)} variant="outline-danger" size="sm">Eliminar producto</Button>
                                </Col>
                            </Row>
                            </ListGroup.Item> 
                        </React.Fragment>
                    ))}
                    <ListGroup.Item>
                        <Row>
                            <Col sm>
                                <Button onClick={cleanCart} variant="outline-danger">Vaciar Carrito</Button>
                            </Col>
                            <Col sm>
                            </Col>
                            <Col sm>
                            </Col>
                            <Col sm>
                            <h6><strong>Total: ${totalPrice()}</strong></h6>
                            </Col>
                            <Col sm>
                            <Link to={`/checkout`}>
                                <Button variant="outline-primary">Finalizar Compra</Button>
                            </Link>
                            </Col>
                        </Row>
                    </ListGroup.Item>
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
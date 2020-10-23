import React, { useEffect, useState } from 'react';
import { Container , Row, Form, Col, Button, ListGroup, Spinner } from 'react-bootstrap';
import { useCartContext } from '../context/cartContext';
import * as firebase from 'firebase/app';
import { getFirestore } from '../firebase/';
import { useForm } from "react-hook-form";
import { Redirect } from "react-router-dom";

export default function Checkout() {

    const { cart, totalPrice, length, cleanCart } = useCartContext();
    const { register, errors, handleSubmit } = useForm();
    const [loading, setLoading] = useState(false);
    

    const onSubmit = ((user) => {
        const db = getFirestore();
        const orders = db.collection("orders");
        const newOrder = {
            buyer: user,
            items: cart,
            total: totalPrice(),
            date: firebase.firestore.Timestamp.fromDate(new Date()),
        }

        orders.add(newOrder)
        .then(({ id }) => {
            console.log("ID DOCUMENTO: " + id);
        })
        .catch(err => {
            console.log('Error saving info: ', err);
        })
        .finally(() => {
            cleanCart();
            setLoading(false);
        });

    })

    useEffect (() => {
        // eslint-disable-next-line no-unused-vars
        const timer = setTimeout(() => {
            setLoading(true);
        }, 1000);
    })

    function CheckoutOrder() {

        return (
            <Container>
                <br></br>
                <Row>
                    <Col sm={8}>
                        <h4>Detalles de facturación</h4>
                        <Form classname="form" onSubmit={handleSubmit(onSubmit)}>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridName" width="25%">
                                    <Form.Label>Nombres</Form.Label>
                                    <Form.Control classname="w-50 p-3" type="name" name="nameuser" ref={register} />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridLastName">
                                    <Form.Label>Apellidos</Form.Label>
                                    <Form.Control type="lastname" name="lastname" ref={register}/>
                                </Form.Group>
                            </Form.Row>

                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" name="email" ref={register}/>
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridPhone">
                                    <Form.Label>Telefono</Form.Label>
                                    <Form.Control type="phone" name="phone" ref={register}/>
                                </Form.Group>
                            </Form.Row>

                            <Form.Group controlId="formGridAddress1">
                                <Form.Label>Dirección</Form.Label>
                                <Form.Control name="adress1" placeholder="Nombre de la calle y altura" ref={register}/>
                                {errors.firstName && "First name is required"}
                            </Form.Group>

                            <Form.Group controlId="formGridAddress2">
                                <Form.Control name="adress2" placeholder="Departamento, suite, unidad, etc. (opcional)" ref={register}/>
                            </Form.Group>

                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridCountry">
                                    <Form.Label>País</Form.Label>
                                    <Form.Control name="country" ref={register}/>
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridZip">
                                    <Form.Label>Código Postal</Form.Label>
                                    <Form.Control name="zipcode" ref={register}/>
                                </Form.Group>
                            </Form.Row>

                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridCity">
                                    <Form.Label>Localidad/Ciudad</Form.Label>
                                    <Form.Control name="city" ref={register}/>
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridState">
                                    <Form.Label>Provincia</Form.Label>
                                    <Form.Control name="province" ref={register}/>
                                </Form.Group>
                            </Form.Row>

                            <Button type="submit">COMPRAR AHORA</Button>
                        </Form>
                    </Col>
                    <Col sm={4}>
                        <h4>Tu Orden</h4>
                        <br></br>
                        <ListGroup>
                            {cart.map(cartItem => (
                                <>
                                    <ListGroup.Item> 
                                        {cartItem.product.name + " x " + cartItem.count} 
                                    </ListGroup.Item>
                                </>
                            ))}
                            <ListGroup.Item>
                                {"Total: $" + totalPrice()}      
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                </Row>
            </Container>
        );
    }

    if (length()===0) {
        return <Redirect to={`/`} />
    } 
    else {
        if (!loading){
            return <Spinner animation="border" variant="warning" />
        }
        else {
            return <CheckoutOrder />
        }

    }
}